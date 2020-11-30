module.exports = mongoose => {
    const Boiler = mongoose.model(
        "boiler",
        mongoose.Schema(
           {    id: {
                    type: Number,
                    required: true
                },
                description: { 
                    type: String,
                    required: true
                },
                //type: id_boiler_type
                Type: { 
                    type: Number,
                    required: false
                },
                dmaintenance_rate: { 
                    type: String,
                    required: true,
                    enum :["month","quarter","year"]
                },
                hour_maintaince_cost: {
                    type: Number,
                    required: true
                },
                hour_eventual_cost: {
                    type: Number,
                    required: true
                },
            },
            { timestamps: true }
        )
    )
    return Boiler;
}


