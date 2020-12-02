module.exports = mongoose => {
    const Building = mongoose.model(
        "building",
        mongoose.Schema(
           {    
               id_building: String,
               address: String,
               boilers: [],
               fullname: String,
               phone: String,

            },
            { timestamps: true }
        )
    )
    return Building;
};