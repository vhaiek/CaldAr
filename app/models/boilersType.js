module.exports = mongoose => {
    const BoilerType = mongoose.model(
        "boilerType",
        mongoose.Schema(
           {    id_boiler_type: {
                    type: Number,
                    required: true
                },
                id_building: Number,
                description: String,
                skills: String,
                stock: Number
            },
            { timestamps: true }
        )
    )
    return BoilerType;
}