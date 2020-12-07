module.exports = (mongoose) => {
  const BoilerType = mongoose.model(
    'boilerType',
    mongoose.Schema(
      {
        id_boiler_type: {
          type: Number,
          required: true,
        },
        description: String,
        skills: String,
      },
      { timestamps: true }
    ),
    'boilersType'
  );
  return BoilerType;
};
