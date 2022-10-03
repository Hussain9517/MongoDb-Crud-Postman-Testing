const express = require('express');
const router = express.Router();
const gymModel = require('../models/gym');



router.get('/Users', async (req,res) => {
    try
    {
      const getData = await gymModel.find();  
      res.status(200).send(getData);
    }
    catch(error)
    {
      res.status(400).json({messgae: 'Error' + error.messgae });
    }
}) 

router.post('/addUser', async (req,res) => {
    const gymData = new gymModel(req.body);
    try
    {
      const addData = await gymData.save();
      res.status(200).json({messgae: 'User Data Added Successfully'}); 
    }
    catch(error)
    {
      res.status(400).json({messgae: 'Error' + error.messgae});
    }

})


router.put('/updateUser/:_id', async (req,res) => {
    let upid = req.params._id;
    let upname = req.body.name;
    let upcontact = req.body.contact;
    let upcity = req.body.city;
   
    gymModel.findOneAndUpdate({_id:upid}, {$set:{name:upname, contact:upcontact, city:upcity}},
         {new:true}, (err,data) => {
             if(err)
             {
                res.send("Error:" + err )
             }
             else
             {
             if(data == null)
             {
                res.send("User Data Not Found For Update");
             }
             else
             {
                res.send(data);
             }
            }
    })

}) 


router.delete('/delete/:_id', (req,res) => {
      let delid = req.params._id;
        gymModel.findOneAndDelete(({_id:delid}), (err,data) => {
        if(err)
        {
            res.send(err)
        }    
        else
        {
        if(data == null)
        {
            res.send("User ID not Found");
        }
        else
        {
            res.send(data)
        }
        }
      })
})



module.exports = router;