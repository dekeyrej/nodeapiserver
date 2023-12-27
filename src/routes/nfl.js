import Data from "../models/Data.js";
import PromiseRouter from "express-promise-router";

const router = new PromiseRouter

export default router

router.get('/', async (req, res) => {
    const output = {
        updateTime: Data.updateTime, 
        updateDate: Data.updateDate, 
        NFL: Data.NFL,
    }
    res.send(output)
})