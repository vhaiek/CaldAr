const express = require ('express')
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
    const found = technicians.some(technicians => technicians.id === parseInt(request.params.id));
    
    if(found) {
        response.json(technicians.filter(technicians => technicians.id === parseInt(request.params.id)));
    }else {
        response.status(400).json({ msg: 'Technical not found'});
    }  
});
//deleteTechnicianById
app.delete('api/technicians/:id'),(request, response) => {
    const  {id}  = request.params;
    const deleted = technicians.find( technical => technical.id === id);
    if (deleted) {
        technicians = technicians.filter(technical => technical.id /= id);
        response.status(200).json(deleted);
    }else {
        response.status(400).json({ msg: 'Technical not found'});
    }
};   