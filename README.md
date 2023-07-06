<div align="center">
<img alt="NodeJS - MongoDB" title="NodeJS - MongoDB" src="https://www.pngitem.com/pimgs/m/385-3850372_node-js-and-mongodb-hd-png-download.png" />
 
# Build Project NodeJS
Quickly create a NodeJS project with commands (:
  
![Intended Runtime Environment: Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB Logo](https://img.shields.io/badge/MongoDB-59ae4e?style=for-the-badge&logo=mongodb&logoColor=white)
</div>
<hr>

> <b>1.  **Create project folder**</b>
```shell
mkdir backend
```

> <b>2.  **Go to folder**</b>
```shell
cd backend
```

> <b>3.  **Open folder in vscode**</b>
```shell
code .
```

> <b>4.  **The command to create the package.json file**</b>
```shell
npm init -y
```

> <b>5.  **Create Server.js file**   `NO CODE`</b>

> <b>6.  **Add serve to the scripts object in the package.json file**</b>
```javascript
  "scripts": {
    // ... ,
    "serve": "node server.js",
  },
```

- ### Express

> <b>7.  **Install express**</b>
```shell
npm i express
```

> <b>8.  **Import express in server.js file**</b>
```javascript
const express = require('express')
const app = express()
app.use(express.json())
```

- ### Nodemon

> <b>9.  **Install nodemon**</b>
```shell
npm i nodemon -D
```

> <b>10.  **Add dev to the scripts object in the package.json file**</b>
```javascript
  "scripts": {
    // ... ,
    "dev": "nodemon server.js",
  },
```

- ### Mongoose

> <b>11.  **Install mongoose**</b>
```shell
npm i mongoose
```
