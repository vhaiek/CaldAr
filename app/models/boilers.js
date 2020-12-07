module.exports = (mongoose) => {
  const Boiler = mongoose.model(
    'boiler',
    mongoose.Schema(
      {
        id: {
          type: Number,
          required: false,
        },
        description: {
          type: String,
          required: false,
        },
        type: {
          type: Number,
          required: true,
        },
        maintenance_rate: {
          type: String,
          required: false,
          enum: ['month', 'quarter', 'year'],
        },
        hour_maintenance_cost: {
          type: Number,
          required: false,
        },
        hour_eventual_cost: {
          type: Number,
          required: false,
        },
      },
      { timestamps: true }
    )
  );
  return Boiler;
};
