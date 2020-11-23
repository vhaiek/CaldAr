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
  if(filterData){
    res.json(filterData);
  }else{
    res.status(400).JSON({msg: `No building with the ID of ${req.params.id}`});
  }
});

module.exports = router;