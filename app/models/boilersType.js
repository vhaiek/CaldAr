module.exports = (mongoose) => {
  const BoilerType = mongoose.model(
    'boilerType',
    mongoose.Schema(
      {
        description: {
          type: String,
          require: true,
        },
        skills: {
          type: String,
          require: true,
        },
      },
      { timestamps: true }
    ),
    'boilersType'
  );
  return BoilerType;
};
