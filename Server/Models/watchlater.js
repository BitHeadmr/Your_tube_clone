import mongoose from "mongoose"
const watchalatervideoschema=mongoose.Schema({
    videoid:{type:String,require:true},
    viewer:{type:String,require:true},
    likedon:{type:Date,default:Date.now()}
})
export default mongoose.model("Watchlater",watchalatervideoschema)