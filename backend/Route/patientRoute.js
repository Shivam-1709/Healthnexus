const express= require('express');
const patientModule = require()
const patientRoute= require()

patientRoute.get('/:id',async (req,res)=>{
    try{
        const id = req.params.id;
        await patientModel.findByIdAndUpdate(id,req.body);
        res.json({"msg":"Success"});
    }catch(error){
        res.json({"msg":error});
    }
})
patientRoute.put('/:id',async (req,res)=>{
    try{
        const id = req.params.id;
        await patientModel.findByIdAndUpdate(id,req.body);
        res.json({"msg":"Success"});
    }catch(error){
        res.json({"msg":error});
    }
})

patientRoute.post('/log',async(req,res)=>{
    try{
        const{email,password} = req.body;
    const ad= await patientModel.findOne({email});
    if(!ad){
        res.json({"msg":"Not Found"});
    }
    else{
        if(ad.password == password){
            res.json({"msg":"Success","id":ad._id});
        }
        else{
            res.json({"msg":"Something Went Wrong"});
        }
    }
    }
    catch(error){
        res.json({"msg":error});
    }

})
patientRoute.delete('/:id',async (req,res)=>{
    try{
        const id = req.params.id;
        await patientModel.findByIdAndDelete(id);
        res.json({"msg":"Success"});
    }catch(error){
        res.json({"msg":error});
    }
})

module.exports = patientRoute;