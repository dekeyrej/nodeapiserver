import Data from "../models/Data.js";
import PromiseRouter from "express-promise-router";

const router = new PromiseRouter

export default router

router.get('/', async (req, res) => {
    const output = {
        updateTime: Data.updateTime, 
        updateDate: Data.updateDate,
        MLB: Data.MLB,
        }
    res.send(output)
})