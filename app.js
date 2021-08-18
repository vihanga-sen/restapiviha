 const express = require('express');
 const mongoose = require('mongoose');
const bodyparser =require('body-parser');

  //create express app
  const app = express();

  //database
  mongoose.connect('mongodb://localhost/motivation',{
      useNewUrlParser: true,
      useUnifiedTopology: true
  });

  const db = mongoose.connection;
  db.once('open',()=>{
      console.log("connected to mongodb databse");

  });

  //middleware
  app.use(bodyparser.json());
  //routes
  app.get('/',(req, res)=>{
      res.send("Hello World");
  });

  app.get('/a',(req,res)=>{
      res.send("A entered");
  })

  const QuotesRoute =require('./routes/Quotes');
  app.use('/quotes', QuotesRoute);
  

  //starting Server
  app.listen(3000, console.log("listening on port 3000"));