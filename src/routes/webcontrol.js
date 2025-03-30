import express from 'express';
import Publish from "../services/redis/Publish.js";

const router = new express.Router();

export default router;

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    console.log("PUT /webcontrol/" + id);
    const output = await Publish('webcontrol', id);
    res.send(output);
});