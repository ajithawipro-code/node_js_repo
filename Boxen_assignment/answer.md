# Understanding Project Management in NodeJS

## Package Managers

### What is a package manager?
A package manager is a tool that helps us download, install, update, and manage external libraries (packages) used in a project.  
In Node.js, instead of writing everything from scratch, we use packages created by other developers.

Example:
If we want to create a server, we can use the Express package instead of writing raw HTTP code.

### Why do we need package managers in backend development?
Backend projects depend on many libraries such as:
- Express (server)
- Mongoose (database)
- JWT (authentication)
- dotenv (environment variables)

A package manager:
- Installs all required libraries
- Keeps track of versions
- Makes sure every developer uses the same dependencies


### Problems if package managers are not used
Without a package manager:
- We would manually download library files
- Version conflicts would occur
- Team members would have different setups
- Updating or removing libraries would be difficult

So, package managers bring order and reliability to backend projects.

## NPM (Node Package Manager)

### What is NPM?
NPM is the default package manager for Node.js.  
It allows us to install and manage third-party libraries for our Node applications.

### Why is NPM important for Node.js applications?
NPM connects our project to a huge online repository of packages.  
It lets us:
- Install frameworks like Express
- Install database drivers
- Manage tools like nodemon, dotenv, etc.

Without NPM, Node.js development would be slow and difficult.

### How NPM helps in managing dependencies
NPM keeps track of all installed libraries in `package.json`.  
When someone else clones the project, they can run:

npm install

And NPM will install all required packages automatically.

##  Backend Project Initialization

### Command to initialize a Node.js project
The command is:

npm init

or

npm init -y

### Difference between "npm init" and "npm init -y"

## npm init

- Asks questions like project name, version, author, etc.
- Lets you enter details manually

## npm init -y

- Automatically creates the project with default values
- Faster and commonly used

Both commands create the `package.json` file.

## Files and Folders Created After Initialization

### package.json
This file is the heart of a Node.js project.  
It contains:
- Project name
- Scripts
- Dependencies
- Version info

It tells Node and NPM how the project should run.


### node_modules
This folder contains all installed packages.  
Every dependency you install using NPM goes inside this folder.

This folder is very large and can be recreated anytime using:

npm install


### package-lock.json
This file stores the exact versions of every installed package.  
It ensures:
- Same versions for every developer
- No unexpected updates

## Files to push to GitHub

### Should NOT be pushed
- node_modules  
Because it is very large and can be recreated by running `npm install`.

### Must be pushed
- package.json  
- package-lock.json  

These files tell GitHub and other developers:
- Which packages are required
- Which versions should be installed

Without them, the project cannot be rebuilt properly.

## Conclusion
Using NPM and proper project setup helps developers work together, manage dependencies easily, and keep backend projects clean and professional.
