module.exports = mongoose => {
    const Technician = mongoose.model(
        "technician",
        mongoose.Schema(
           {    // These fields were added as an example. Replace them with the right ones.
                id: {
                    type: Number,
                    required: true,
                    unique: true
                },
                rol: String,
                email: String,
                fullname: {
                    type: String,
                    required: true,
                },
                phone: Number,
                address: String,
                boiler: [{
                    type: mongoose.Schema.Types.ObjectId, 
                    ref: 'boiler'
                }],
                capabilities: [{
                    type: mongoose.Schema.Types.ObjectId, 
                    ref: 'boiler_id'                   
                }],
                hour_rate: Number,
                daily_capacity: Number
            },
            { timestamps: true }
        )
    )
    return Technician;
}