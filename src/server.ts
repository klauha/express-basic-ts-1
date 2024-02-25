import express from "express";
import dotenv from "dotenv";
import { createRole, getRole } from "./controllers/roleControllers";
dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000

// PRIMERA RUTA

app.get('/healthy', (req, res) => {
    res.status(200).json(
        {
            success: true,
            messagge: 'Serves is healthy',

        }
    )
})

//ROLES ROTES
app.post('/roles', createRole)
app.get('/roles',getRole)








app.listen(PORT, () => {
    console.log(`server ${PORT} is running`);


})

