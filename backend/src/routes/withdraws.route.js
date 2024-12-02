import { Router } from "express";


const router = Router();


router.get("/", (req, res) => {
    res.send("Withdraw route with GET METHOD");
})

export default router;