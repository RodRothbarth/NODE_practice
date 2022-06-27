const express = require('express');

const app = express();

app.get('/', (req, res)=>{
  res.status(200)
    .json({message: 'Hello world! from the server'})
})

const PORT = 3000;
app.listen(PORT, ()=> console.log("Port: ", PORT));


