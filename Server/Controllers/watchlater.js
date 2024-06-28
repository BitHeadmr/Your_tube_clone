import watchlater from "../Models/watchlater.js";

export const watchlatercontroller = async (req, res) => {
    const watchlaterdata = req.body;
    const addtowatchlater = new watchlater(watchlaterdata)
    try {
        await addtowatchlater.save()
        res.status(200).json("added to watchlater")
    } catch (error) {
        res.status(400).json(error.message)
        return
    }
}
export const getallwatchlatervontroller = async (req, res) => {
    try {
        const files = await watchlater.find()
        res.status(200).send(files)
    } catch (error) {
        res.status(400).json(error.message)
        return
    }
}
export const deletewatchlater = async (req, res) => {
    const { videoid: videoid, viewer: viewer } = req.params
    try {
        await watchlater.findOneAndDelete({
            videoid:videoid,viewer:viewer,
        })
        res.status(200).json({message:"removed from watch later"})
    } catch (error) {
        res.status(400).json(error.message)
        return
    }

}