const express = require('express');

const app= express()
const Pizza=require('./models/pizzaModel')
const db = require('./db');
app.use(express.json());

const path =require('path')
const pizzasRoute=require('./routes/pizzasRoute')
const userRoute= require('./routes/userRoute')
const ordersRoute= require('./routes/oredersRoute')

app.use('/api/pizzas',pizzasRoute)
app.use('/api/users',userRoute)
app.use('/api/orders',ordersRoute)

    if (process.env.NODE_ENV === 'production') {
        app.use('/',express.static('client/build'))
        app.get('*',(req,res)=>{
            res.sendFile(path.resolve(__dirname, 'client/build/index.html'))
        })
    }

const port =process.env.PORT || 5000;
app.listen(port,()=> `server is running on port`) 