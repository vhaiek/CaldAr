const { response } = require('express')
const express = require ('express')
const fs = require('fs');
//const router = express.router();
const app = express()
let rawdata = fs.readFileSync('./data/technicians.json');
let technicians = JSON.parse(rawdata);
//let technicians = require ('../data/technicians.json')

app.listen(4000, () => {
    console.log('HOLA')
})

//getTechniciansAll
app.get('/api/technicians', (request,response) => { 
    response.json(technicians)
})
//getTechnicianById
app.get('/api/technicians/:id',(request, response) => {
    const found = technicians.some(technical => technical.id === parseInt(request.params.id));
    
    if(found) {
        response.json(technicians.filter(technical => technical.id === parseInt(request.params.id)));
    }else {
        response.status(400).json({ msg: 'Technical not found'});
    }  
});
//getTechnicianByAttribute
app.get('/api/technicians/fullname/:fullname',(request, response) => {
    let search = technicians.filter(technical => {
        if(technical.fullname.search(request.params.fullname) != -1){
           return true;
        }else{
            return false;
        }});
        if(search.length > 0){
            response.json(search);
        }else{
            response.status(400).json({ msg: ' There aren´t technicians with this name'});
    }
});

//deleteTechnicianById
app.get('/api/technicians/deletetechnical/:id',(request, response) => {
    const found = technicians.some(technical => technical.id === parseInt(request.params.id));
    
    if(found) {
        technicians = technicians.filter(technical => technical.id !==parseInt(request.params.id));
        fs.writeFileSync('./data/technicians.json',JSON.stringify(technicians));
        response
            .json({ msg: "id: " + request.params.id + " Technical deleted"}) 

    }else {
        response.status(400).json({ msg: 'Technical not found'});
    }  
});

//module.exports = router;

/*//getTechnicianByAnyAttributr----Didn´t work

app.get('api/technicians/:attribute/:value',(request,response) =>{
    if(request.params.attribute === 'id'){
        response.json(technicians.filter(technical => technical.id === parseInt(request.params.value)));
    }if(request.params.attribute === 'daily_capacity'){
        response.json(technicians.filter(technical => technical.daily_capacity === parseInt(request.params.value)));
    }if(request.params.attribute === 'email'){
        response.json(technicians.filter(technical => technical.email === parse(request.params.value)));
    }else {
    response.status(400).json({ msg: 'ouch!!!'});
} 
});
*/
/* Didn´t work!!
//deleteTechnicianById
app.delete('api/technicians/delete/:id'),(request, response) => {
    const deleted = technicians.find( technical => technical.id === parseInt(request.params.id));
    if (deleted) {
        technicians = technicians.filter(technical => technical.id !== parseInt(request.params.id));
        response.status(200).json(deleted);
        console.log("OK");
    }else {
        response.status(400).json({ msg: 'ouch!!!'});
    }
}; 

//module.exports = router;
*/

