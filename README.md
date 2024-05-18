# Menu Management

## 🧰:Languages and Tools:

![NodeJS](https://img.shields.io/badge/nodejs%20-%ffb400.svg?&style=for-the-badge&logo=nodeJs&logoColor=white)
![ExpressJS](https://img.shields.io/badge/expressjs%20-%23FF6F00.svg?&style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/mongodb%20-%2320232a.svg?&style=for-the-badge&logo=mongodb&logoColor=white)

## How to run:

- Clone this repository or fork it.
  - To clone this repository type `git clone https://github.com/Ak-Srivastav/Menu-Management.git` on your command line
  - To fork this repository, click fork button of this repository then type `git clone https://github.com/<your username>/Menu-Management.git`
- Inside your project folder, create a new file named `.env` which stores informations about server side such as `MONGO_URI`
  - or 
- Rename .envexample to .env after setting.
- store your database URI inside `MONGO_URI` variable
- example:
  ```
  MONGO_URI = mongodb+srv://<username>:<password>@<collection_name>.<providedbymongodb>.mongodb.net/ (MongoDB Atlas)
  or 
  MONGO_URI = mongodb://127.0.0.1:27017/menu-management (MongoDB Compass)
  PORT = 3000
  ```
  
- Install all dependencies
  - Server side: on the `project` directory type `npm install`

- Run it on node js:
  - Server side: on the `project` directory type `npm start` 
