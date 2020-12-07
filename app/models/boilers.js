const { ObjectId } = require('mongodb');

module.exports = (mongoose) => {
  const Boiler = mongoose.model(
    'boiler',
    mongoose.Schema(
      {
        id: {
          type: Number,
          required: true,
          validate: {
            validator: function (v) {
              return /^[0-9]{1,}$/.test(v);
            },
            message: 'ID must have only numbers',
          },
        },
        description: {
          type: String,
          required: false,
        },
        type: {
          type: mongoose.Schema.Types.ObjectID,
          ref: 'boilerType',
        },
        maintenance_rate: {
          type: String,
          required: true,
          enum: ['month', 'quarter', 'year'],
        },
        hour_maintenance_cost: {
          type: Number,
          required: true,
          validate: {
            validator: function (v) {
              return /^[0-9]{3,}$/.test(v);
            },
            message:
              'Hour maintenance cost must have at least 3 digits without spaces or special characters',
          },
        },
        hour_eventual_cost: {
          type: Number,
          required: true,
          validate: {
            validator: function (v) {
              return /^[0-9]{3,}$/.test(v);
            },
            message:
              'Hour eventual cost must have at least 3 digits without spaces or special characters',
          },
        },
      },
      { timestamps: true }
    )
  );
  return Boiler;
};
