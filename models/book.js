const mongoose=require("mongoose")
const schema = mongoose.Schema(
    {
        "Name":String,
        "discription":String,
        "pulisher":String,
        "year":String,
        "Distributor":String
        
        
    }
)
let bookmodel=mongoose.model("books",schema);
module.exports={bookmodel}
