import fs from "fs";

export const uniqueEmail = (req, res, next) => {
  const { email } = req.body;

  const data = JSON.parse(fs.readFileSync("db.json", "utf-8"));

  const exists = data.users.find(u => u.email === email);

  if (exists) {
    return res.status(409).json({
      error: "Email already exists"
    });
  }

  next();
};
