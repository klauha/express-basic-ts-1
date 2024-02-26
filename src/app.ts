
import express from "express";
import dotenv from "dotenv";
import { createRole, deleteRole, getRole, updateRole } from "./controllers/roleControllers";
dotenv.config()

export const app = express()


app.use(express.json())

// PRIMERA RUTA

app.get('/healthy', (req, res) => {
    res.status(200).json(
        {
            success: true,
            message: 'Server is healthy',

        }
    )
})

//ROLES ROTES
app.post('/roles', createRole)
app.get('/roles', getRole)
app.put('/roles/:id', updateRole)
app.delete('/roles/:id', deleteRole)













