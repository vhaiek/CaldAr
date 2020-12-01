module.exports = mongoose => {
  const company = mongoose.model(
    "company",
    mongoose.Schema(
      {    // These fields were added as an example. Replace them with the right ones.
      id_company: {
        Type: Number,
        required: true
      },
      cuit: {
        Type: Number,
        required: true
      },
      email: {
        Type: String,
        required: true
      },
      building:[{
        Type: Number,
        required: true
      }],
      fiscal_address: {
        Type: String,
        required:true
      },
      user: [{
        Type: String,
        required: true
      }],
      },
      { timestamps: true }
      )
  )
  return company;
}