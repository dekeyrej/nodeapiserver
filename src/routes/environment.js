import express from 'express';
import Data from "../models/Data.js";

const router = new express.Router();
const count = 5;

export default router;

router.get('/', async (req, res) => {
    const output = {
        updateTime: Data.updateTime, 
        updateDate: Data.updateDate, 
        AQI: Data.AQI, 
        Moon: Data.Moon, 
        Weather: {
            current: Data.Weather.current, 
            hourly: Data.Weather.hourly.slice(0, count), 
            forecast: Data.Weather.forecast.slice(0, count),
        },
    };
    res.send(output);
});

router.get('/aqi', async (req, res) => {
    const output = {
        updateTime: Data.updateTime, 
        updateDate: Data.updateDate, 
        AQI: Data.AQI
    };
    res.send(output);
});

router.get('/moon', async (req, res) => {
    const output = {
        updateTime: Data.updateTime, 
        updateDate: Data.updateDate, 
        Moon: Data.Moon
    };
    res.send(output);
});

router.get('/weather', async (req, res) => {
    const output = {
        updateTime: Data.updateTime, 
        updateDate: Data.updateDate, 
        Weather: {
            current: Data.Weather.current, 
            hourly: Data.Weather.hourly.slice(0, count), 
            forecast: Data.Weather.forecast.slice(0, count),
        }
    };
    res.send(output);
});

router.get('/weather/current', async (req, res) => {
    const output = {
        updateTime: Data.updateTime, 
        updateDate: Data.updateDate, 
        current: Data.Weather.current
    };
    res.send(output);
});

router.get('/weather/hourly', async (req, res) => {
    const output = {
        updateTime: Data.updateTime, 
        updateDate: Data.updateDate, 
        hourly: Data.Weather.hourly.slice(0, count)
    };
    res.send(output);
});

router.get('/weather/forecast', async (req, res) => {
    const output = {
        updateTime: Data.updateTime, 
        updateDate: Data.updateDate, 
        forecast: Data.Weather.forecast.slice(0, count)
    };
    res.send(output);
});