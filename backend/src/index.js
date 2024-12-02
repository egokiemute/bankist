import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";


import userRoutes from "./routes/user.route.js"
import adminRoutes from "./routes/admin.route.js"
import authRoutes from "./routes/auth.route.js"
import depositsRoutes from "./routes/deposits.route.js"
import withdrawsRoutes from "./routes/withdraws.route.js"
import loansRoutes from "./routes/loans.route.js"
import cardsRoutes from "./routes/cards.route.js"
import statsRoutes from "./routes/stats.route.js"

dotenv.config();


const app = express();
const PORT = process.env.PORT;

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/deposits", depositsRoutes);
app.use("/api/withdraws", withdrawsRoutes);
app.use("/api/loans", loansRoutes);
app.use("/api/cards", cardsRoutes);
app.use("/api/stats", statsRoutes);

app.listen(5000, () => {
    console.log("Server is running on port: ", PORT)
    connectDB();
})