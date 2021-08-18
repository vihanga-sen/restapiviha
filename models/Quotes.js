const mongoose=require('mongoose');
const QuoteSchema =new mongoose.Schema({
    content:String,
    author: String
});

module.export=mongoose.model('Quote',QuoteSchema);