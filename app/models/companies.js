module.exports = (mongoose) => {
  const company = mongoose.model(
    'company',
    mongoose.Schema(
      {
        cuit: {
          type: Number,
          required: false,
        },
        email: {
          type: String,
          required: true,
        },
        building: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'buildings',
            required: true,
          },
        ],
        fiscal_address: {
          type: String,
          required: true,
        },
        user: [
          {
            type: String,
            required: false,
          },
        ],
      },
      { timestamps: true }
    )
  );
  return company;
};
