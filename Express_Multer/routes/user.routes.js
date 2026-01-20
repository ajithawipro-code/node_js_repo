import express from "express";
import fs from "fs";
import cloudinary from "../config/cloudinary.config.js";
import { upload } from "../middleware/upload.middleware.js";
import { uniqueEmail } from "../middleware/uniqueEmail.middleware.js";

export const UserRouter = express.Router();

const readData = () =>
  JSON.parse(fs.readFileSync("db.json", "utf-8"));

const writeData = (data) =>
  fs.writeFileSync("db.json", JSON.stringify(data, null, 2));

UserRouter.post(
  "/signup",
  upload.single("profile"),
  uniqueEmail,
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "Profile image is required" });
      }

      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        return res.status(400).json({ error: "All fields are required" });
      }

      cloudinary.uploader.upload_stream(
        { resource_type: "image" },
        (error, result) => {
          if (error) {
            return res.status(500).json({ error: "Upload failed" });
          }

          const data = readData();

          const newUser = {
            id: Date.now(),
            name,
            email,
            password,
            profilePic: result.secure_url
          };

          data.users.push(newUser);
          writeData(data);

          res.status(201).json({
            message: "User registered successfully",
            user: {
              id: newUser.id,
              name: newUser.name,
              email: newUser.email,
              profilePic: newUser.profilePic
            }
          });
        }
      ).end(req.file.buffer);
    } catch (err) {
      res.status(500).json({ error: "Something went wrong" });
    }
  }
);
