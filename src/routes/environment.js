import Data from "../models/Data.js";
import PromiseRouter from "express-promise-router";

const router = new PromiseRouter
const count = 5

export default router

router.get('/', async (req, res) => {
    const output = {
        updateTime: Data.updateTime, 
        updateDate: Data.updateDate, 
        AQI: Data.AQI, Moon: Data.Moon, 
        Weather: {
            current: Data.Weather.current, 
            hourly: Data.Weather.hourly.slice(0,count), 
            forecast: Data.Weather.forecast.slice(0,count),
        },
    }
    res.send(output)
})