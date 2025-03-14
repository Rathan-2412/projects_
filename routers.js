const express=require('express')
const app=express()
const books=require('./books')


app.use(express.json());

app.use('/books' , books);

app.listen(3000, ()=>{
    console.log(`Server is running on port 3000`);
})