module.exports = (mongoose) => {
  const company = mongoose.model(
    'company',
    mongoose.Schema(
      {
        cuit: {
          type: Number,
          required: false,
          validate: {
            validator: function (v) {
              return /^[0-9]+$/.test(v);
            },
            message: 'CUIT must have only numbers',
          },
        },
        email: {
          type: String,
          required: true,
          validate: {
            validator: function (v) {
              return /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/.test(v);
            },
            message: 'Email format is wrong',
          },
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
          validate: {
            validator: function (v) {
              return /^([a-z0-9]{2,}[\s]+)+([0-9]+)$/.test(v);
            },
            message: 'Fiscal Address format is wrong',
          },
        },
        user: [
          {
            type: String,
            required: false,
            validate: {
              validator: function (v) {
                return /^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/.test(v);
              },
              message: 'User main contain only letters',
            },
          },
        ],
      },
      { timestamps: true }
    )
  );
  return company;
};
