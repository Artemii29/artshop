import mongoose from "mongoose";
//required - условие
const Clothes = new mongoose.Schema({
        name: {type: String, required: true},
        description: {type: String, required: true},
        picture: {type: String},
    },
)
export default mongoose.model('Clothes',Clothes)
