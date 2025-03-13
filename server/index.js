import express from 'express';
const app = express();

app.get("/result", (req1, req2, req3, res) => {
    res.json({message: "Hello World!"});
});

app.listen(3000, () => {
    console.log("El servidor esta corriendo en el puerto 3000");
});