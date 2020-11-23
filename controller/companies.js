const express = require("express");
const router = express.Router();
const fs = require("fs");
let rawdata = fs.readFileSync("./data/companies.json");
let companies = JSON.parse(rawdata);

//getCompanyAll
function getCompanyAll() {
    return companies;
}
router.get("/", (req,res)=>{
    res.json(getCompanyAll());
});

//getCompanyById
function getCompanyById(id) {
    return companies.filter(company => company.id_company === id);
};
router.get("/:id", (req,res)=>{
    res.json(getCompanyById(parseInt(req.params.id)));
});

//getCompanyByAttribute
function getCompanyByAtribute(cuit) {
    return companies.filter(company => company.cuit === cuit);
};
router.get("/cuit/:cuit", (req,res)=>{
    res.json(getCompanyByAtribute(parseInt(req.params.cuit)));
});

//deleteCompanyById
function deleteCompany(id) {
    companies = companies.filter(company => company.id_company !== id)
    fs.writeFileSync("./data/companies.json", JSON.stringify(companies));
    return companies.filter(company => company.id_company === id);
};
router.get("/:delete",(req,res) => {
    res.json(deleteCompany(parseInt(req.params.id)));
});

module.exports = router;

