module.exports = mongoose => {
  const company = mongoose.model(
    "company",
    mongoose.Schema(
      {   
      id_company: {
        type: Number,
        required: true
      },
      cuit: {
        type: Number,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      building:[{
        type: Number,
        required: true
      }],
      fiscal_address: {
        type: String,
        required: true
      },
      user: [{
        type: String,
        required: true
      }],
      },
      { timestamps: true }
      )
  )
  return company;
}