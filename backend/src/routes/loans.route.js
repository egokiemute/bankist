import { Router } from "express";


const router = Router();


router.get("/", (req, res) => {
    res.send("Loans route with GET METHOD");
})

export default router;