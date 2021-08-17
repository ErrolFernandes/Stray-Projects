const express= require('express')
const app= express()
const route=require('./routes/pageroutes')

app.set('view engine','ejs')

app.use('/admin',route)

app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(3000)