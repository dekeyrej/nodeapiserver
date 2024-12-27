import PromiseRouter from "express-promise-router";
import Publish from "../services/redis/Publish.js";

const router = new PromiseRouter();

export default router;

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    console.log("PUT /webcontrol/" + id);
    const output = await Publish('webcontrol', id);
    res.send(output);
});