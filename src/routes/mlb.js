import express from 'express';
import Data from "../models/Data.js";
import MLBIndex from '../models/MLBIndex.js';

const router = new express.Router();

export default router;

router.get('/', async (req, res) => {
    const output = {
        updateTime: Data.updateTime, 
        updateDate: Data.updateDate,
        MLB: Data.MLB,
    };
    res.send(output);
});

router.get('/team/:team', async (req, res) => {
    const { team } = req.params;
    const game = Data.MLB.find(game => game.id === MLBIndex[team]);
    if (!game) {
        return res.status(404).send({ error: 'Team not playing today.' });
    }    
    const output = {
        updateTime: Data.updateTime, 
        updateDate: Data.updateDate,
        MLB: game,
    };
    res.send(output);
});