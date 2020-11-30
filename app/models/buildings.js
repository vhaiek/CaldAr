module.exports = mongoose => {
    const Buildings = mongoose.model(
        "buildings",
        mongoose.Schema(
           {    
               id_buildings: Number,
               address: String,
               boilers: [],
               fullname: String,
               phone: Number,

            },
            { timestamps: true }
        )
    )
    return Buildings;
}