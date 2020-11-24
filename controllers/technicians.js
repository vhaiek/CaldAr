const express = require ('express')
//const router = express.router();
const app = express()
const technicians = require ('../data/technicians.json')

app.listen(5000, () => {
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
    const found = technicians.some(technical => technical.fullname === request.params.fullname);
    
    if(found) {
        response.json(technicians.filter(technical => technical.fullname === request.params.fullname));
    }else {
        response.status(400).json({ msg: ' That technician does not exist'});
    }  
});
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

