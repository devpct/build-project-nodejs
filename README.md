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

> <b>12.  **Import mongoose in server.js file**</b>
```javascript
// const express = require('express')
const mongoose = require('mongoose')
```

> <b>13.  **Download mongodb**</b>
<pre>
<a href="https://www.mongodb.com/try/download/community">https://www.mongodb.com/try/download/community</a>
</pre>

> <b>14.  **Connecting to mongodb app in server.js file**</b>
```javascript
//connecting to mongoDB
mongoose
.connect('mongodb://127.0.0.1:27017/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB')
    app.listen(3000, ()=>{
        console.log(`Starting development server at \x1b[34m${'http://localhost'}:${3000}\x1b[0m`)
    })
})
.catch((error) => {
    console.log(error)
})
```

> <b>15.  **Connecting to mongodb web in server.js file**</b>
```javascript
//connecting to mongoDB
 mongoose.
 connect('mongodb+srv://<Username>:<Password>@cluster0.upbtfer.mongodb.net/<Database Name>?retryWrites=true&w=majority')
 .then(()=>{
     console.log('Connected to MongoDB')
     app.listen(3000, ()=>{
         console.log(`Starting development server at \x1b[34m${'http://localhost'}:${3000}\x1b[0m`)
     })
 }).catch((error)=>{
     console.log(error)
 })
```
