import Data from "../models/Data.js";
import NFLIndex from '../models/NFLIndex.js';
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

router.get('/team/:id', async (req, res) => {
    const { id } = req.params;
    const output = {
        updateTime: Data.updateTime, 
        updateDate: Data.updateDate, 
        NFL: Data.NFL[NFLIndex[id]],
    }
    res.send(output)
})