const mongoose = require("mongoose")


const connectDB = async () => {
    try {

        await mongoose.connect(process.env.CONNECT_DB)
            .then(() => {
                console.log("database is connecting.....")

            })

    } catch (err) {
        console.log(err)
    }
}

module.exports=connectDB