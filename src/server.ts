import express from "express";
import dotenv from "dotenv";
dotenv.config()

const app = express()
const PORT= process.env.PORT || 4000

// primera ruta

app.get('/healthy', (req,res)=> {
    res.status(200).json(
        {
            success:true,
            messagge:'Serves is healthy',
    
        }
    )
})








app.listen(PORT, () => {
    console.log(`server ${PORT} is running`);


})

