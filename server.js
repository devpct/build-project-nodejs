const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())


//tables
const Users = require('./models/usersModel')
const Products = require('./models/productsModel')


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


//products
app.get('/data/products', async(req, res)=>{
    try {
        const product = await Products.find({})
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


app.post('/add/product', async(req, res)=>{
    try {
        const product = await Products.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


app.put('/update/product/:id', async(req, res)=>{
    try {
        const {id} = req.params
        const product = await Products.findByIdAndUpdate(id, req.body)
        if(!product){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        const updateProduct = await Products.findById(id)
        res.status(200).json(updateProduct)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


app.delete('/delete/product/:id', async(req, res)=>{
    try {
        const {id} = req.params
        const product = await Products.findByIdAndDelete(id)
        if (!product) {
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


//connecting to mongoDB Web
// mongoose.
// connect('mongodb+srv://root:61043372@cluster0.upbtfer.mongodb.net/Node-API?retryWrites=true&w=majority')
// .then(()=>{
//     console.log('Connected to MongoDB')
//     app.listen(3000, ()=>{
//         console.log(`Starting development server at \x1b[34m${'http://localhost'}:${3000}\x1b[0m`)
//     })
// }).catch((error)=>{
//     console.log(error)
// })


//connecting to mongoDB
mongoose.connect('mongodb://127.0.0.1:27017/mydb', {
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