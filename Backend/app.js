import express from 'express'

const app = express()
const port = 3000


app.get('/',(req,res)=>{
    res.send("working")
})

app.listen(()=>{
    console.log(`Server is running port ${port}`)
})