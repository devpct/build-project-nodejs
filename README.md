<div align="center">
<img alt="NodeJS - MongoDB" title="NodeJS - MongoDB" src="https://www.pngitem.com/pimgs/m/385-3850372_node-js-and-mongodb-hd-png-download.png" />
 
# Build Project NodeJS
Quickly create a NodeJS project with commands (:
  
![Intended Runtime Environment: Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB Logo](https://img.shields.io/badge/MongoDB-59ae4e?style=for-the-badge&logo=mongodb&logoColor=white)
<p align="left"> <img src="https://komarev.com/ghpvc/?username=mohammadabdollahzadeh&label=views&color=43853D&style=flat" /> </p>
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
. Express framework node js for api and query and server
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
. Nodeman to save changes automatically on the server
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
. Mongoose to connect node js to mongoDB
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

- ### Models
. Models database tables
> <b>16.  **Create models folder**   `NO CODE`</b>

> <b>17.  **Create a table file in the models folder, for example, the usersModel.js file**   `NO CODE`</b>

> <b>18.  **Import mongoose in usersModel.js file**</b>
```javascript
const mongoose = require('mongoose')
```

> <b>19.  **Column creation code in usersModel.js file**</b>
```javascript
const usersSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        lastName:{
            type: String,
            required: true
        },
        password:{
            type: String,
            required: true
        },
    },
    {
        versionKey: false
    }
)
```

> <b>20.  **Export the table in the users.Model.js file**</b>
```javascript
const Users = mongoose.model('Users', usersSchema)

module.exports = Users
```

> <b>21.  **Import the tables in the server.js file**</b>
```javascript
//tables
const Users = require('./models/usersModel')
//const Products = require('./models/productsModel')
```

> <b>22.  **API and Queries**</b>
```javascript
// Routes

//users
app.get('/data/users', async(req, res)=>{
    try {
        const user = await Users.find({})
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


app.post('/add/user', async(req, res)=>{
    try {
        const user = await Users.create(req.body)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


app.put('/update/user/:id', async(req, res)=>{
    try {
        const {id} = req.params
        const user = await Users.findByIdAndUpdate(id, req.body)
        if(!user){
            return res.status(404).json({message: `cannot find any user with ID ${id}`})
        }
        const updateUser = await Users.findById(id)
        res.status(200).json(updateUser)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


app.delete('/delete/user/:id', async(req, res)=>{
    try {
        const {id} = req.params
        const user = await Users.findByIdAndDelete(id)
        if (!user) {
            return res.status(404).json({message: `cannot find any user with ID ${id}`})
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
```

> <b>23.  **Command to run server**</b>
```shell
npm run dev
```
