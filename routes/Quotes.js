const express=require('express');
const router=express.Router();
const Quotes=require('../models/Quotes');

//get all routes
router.get('/',async (req,res)=>{
    const quotes =await quote.find();

    res.json(quotes);
    //res.send("home route")

});


//create new routes
router.post('/new',async(req,res)=>{
      const newQuote=new Quote(req.body);
      const savedQuote=await newQuote.save();
    res.json(newQuote);

    
});

// //get  specific quote
// router.get('/get/:id', async (req,res)=>{
//     const q=await Quote.findById({_id: req.params.id});
//     res.json(q);
// });


// //delete quote
// route.delete('/delete/:id', async (req,res)=> {
//     const result = await Quote.findByIdAndDelete({_id: req.params.id});
//     res.json(result);
// });

// //update quote
// route.patch('/update/:id', async (req,res) => {
//     const q =await Quote.updateOne({_id: req.params.id},{$set: req.body});

//     res.json(q);

// });


//get random quote
router.get('/random', async(req,res)=> {
    const count = await Quote.countDocuments();
    const random =Math.floor(Math.random()* count);
    const q=await Quote.findOne().skip(random);
    res.json(q);
});

module.exports=router;
