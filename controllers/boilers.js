const express = require('express');
const router = express.Router();
const fs = require('fs');
// should it be "../data/boilers.json"?
let rawdata = fs.readFileSync('./data/boilers.json');
let boilers = JSON.parse(rawdata);

function getBoilersAll(){
    return boilers;
} 
function getBoilerById(id){
    return boilers.filter(boiler => boiler.id_boiler === id);
} 
function getBoilerByAttribute(attribute,value){ 
    if(attribute === 'id_boiler')
        return boilers.filter(boiler => boiler.id_boiler === parseInt(value));
    if(attribute === 'description')
        return boilers.filter(boiler => (boiler.description.search(value) !== -1)? true:false);
    if(attribute === 'maintenance_rate')
        return boilers.filter(boiler => (boiler.maintenance_rate.search(value) !== -1)? true:false);
    if(attribute === 'type')
        return boilers.filter(boiler => boiler.type === parseInt(value));
    if(attribute === 'hour_maintaince_cost')
        return boilers.filter(boiler => boiler.hour_maintaince_cost === parseInt(value));
    if(attribute === 'hour_eventual_cost')
        return boilers.filter(boiler => boiler.hour_eventual_cost === parseInt(value));
    return [];    
} 
function deleteBoilerById(id){
    let prevLen = boilers.length;
    boilers = boilers.filter(boiler => boiler.id_boiler !== id);
    fs.writeFileSync('./data/boilers.json',JSON.stringify(boilers));

    return (prevLen > boilers.length)? true:false;
}
router.get('/',(req,res) =>{
    let result = getBoilersAll();
    if(result.length > 0)
        res.json(result);
    else
        res.status(400).json({msg:"Resource not found"});
})
router.get('/:id',(req,res) =>{
    let result = getBoilerById(parseInt(req.params.id));
    if(result.length > 0)
        res.json(result);
    else
        res.status(400).json({msg:"Resource not found"});
})
router.get('/attribute/:attribute/:value',(req,res) =>{
    let result = getBoilerByAttribute(req.params.attribute,req.params.value);
    if(result.length > 0)
        res.json(result);
    else
        res.status(400).json({msg:"Resource not found"});
})
router.get('/delete/:id',(req,res) =>{
    let result = deleteBoilerById(parseInt(req.params.id));
    if(result)
        res.json({msg:"Resource deleted"});
    else
        res.status(400).json({msg:"Resource not found"});
})
module.exports = router
