import { Router } from "express";


const router = Router();


router.get("/", (req, res) => {
    res.send("User route with GET METHOD");
})

export default router;