const express = require ('express');
const router = express.Router();
const fs = require('fs');
const data = fs.readFileSync('./data/buildings.json');
let buildings = JSON.parse(data);

//Get All Buildings
router.get('/', (req,res) => res.json(buildings));

//Get Buildings by ID
router.get('/:id', (req,res) => {
  let filterData = buildings.filter((building) => building.id === parseInt(req.params.id));
  if(filterData.length > 0){
    res.json(filterData);
  }else{
    res.status(400).json({msg: `No building with the ID of ${req.params.id}`});
  }
});

//Get Buildings by attribute
router.get('/address/:address', (req,res) => {
  let filterData = buildings.filter((building) => {if(building.address.search(req.params.address) != -1 ){
    return true;
  }else {
    return false;
  }});
  if(filterData.length > 0){
    res.json(filterData);
  }else{
    res.status(400).json({msg: `No building with the Address of ${req.params.address}`});
  }
});

module.exports = router;