import history from "../Models/history.js";

export const historycontroller=async(req,res)=>{
    const historydata=req.body;
    const addtohistory=new history(historydata)
    try {
        await addtohistory.save()
        res.status(200).json("added to history")
    } catch (error) {
        res.status(400).json(error.message)
        return
    }
}

export const getallhistorycontroller=async(req,res)=>{
    try {
        const files=await history.find();
        res.status(200).send(files)
    } catch (error) {
        res.status(400).json(error.message)
        return
    }
}

export const deletehistory =async(req,res)=>{
    const{userid:userid}=req.params;
    try {
        await history.deleteMany({
            viewer:userid
        })
        res.status(200).json({message:"removed from history"})
    } catch (error) {
        res.status(400).json(error.message)
        return
    }
}