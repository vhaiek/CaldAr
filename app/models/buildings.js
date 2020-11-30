module.exports = mongoose => {
    const Buildings = mongoose.model(
        "buildings",
        mongoose.Schema(
           {    
               id_buildings: number,
               address: string,
               boilers: [id_boiler],
               fullname: string,
               phone: number,

            },
            { timestamps: true }
        )
    )
    return Buildings;
}