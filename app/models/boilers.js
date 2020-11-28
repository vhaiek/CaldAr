module.exports = mongoose => {
    const Boiler = mongoose.model(
        "boiler",
        mongoose.Schema(
           {    // These fields were added as an example. Replace them with the right ones.
                id: {
                    type: Number,
                    required: true
                },
                description: String,
                type: Number
            },
            { timestamps: true }
        )
    )
    return Boiler;
}