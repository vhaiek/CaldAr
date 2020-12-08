module.exports = (mongoose) => {
  const Technician = mongoose.model(
    'technician',
    mongoose.Schema(
      {
        rol: {
          type: String,
          validate: {
            validator: function (v) {
              return /^[a-zA-Z\s]*$/i.test(v);
            },
            message: 'Rol must have at least 3 characters.',
          },
        },
        email: {
          type: String,
          validate: {
            validator: function (v) {
              return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
                v
              );
            },
            message: 'Invalid e-mail',
          },
        },
        fullname: {
          type: String,
          required: true,
          validate: {
            validator: function (v) {
              return /^([a-z]{2,}[\s]+)+([a-z]{2,})$/i.test(v);
            },
            message: 'Name must have at least 6 characters. Ex: John Doe',
          },
        },
        phone: {
          type: Number,
          validate: {
            validator: function (v) {
              return /^[0-9]{8,}$/.test(v);
            },
            message:
              'Phone Number must have at least 8 digits without spaces or special characters',
          },
        },
        address: {
          type: String,
          validate: {
            validator: function (v) {
              return /^([a-z0-9]{2,}[\s]+)+([0-9]+)$/i.test(v);
            },
            message:
              'Address must have at least 5 characters with numbers and letters',
          },
        },
        boiler: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'boiler',
          },
        ],
        capabilities: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'boilerType',
          },
        ],
        hour_rate: {
          type: Number,
          min: [0, 'Hour rate must be positive'],
        },
        daily_capacity: {
          type: Number,
          min: [0, 'Daily capacity must be positive'],
        },
      },
      { timestamps: true }
    )
  );
  return Technician;
};
