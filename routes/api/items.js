const express = require('express');
const router = express.Router();
     
const Item = require('../../models/Items')
 

router.get('/',(req,res)=>{
    Item.find()
    .sort({date:-1})
    .then(items=> res.json(items))
});

router.post('/',(req,res)=>{
   const newitem = new Item({
       name: req.body.name
   })
    newitem.save().then(items=> res.json(items))
   
});
router.delete('/:id',(req,res)=>{
  Item.findById(req.params.id)
  .then(item=> item.remove().then(()=>res.json({success:true})))
    .catch(() => res.status(404).json({success:false}))
    
 })
module.exports = router; 