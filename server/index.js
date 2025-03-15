const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get("/result", (req, res) => {
    const { num1, num2, op } = req.query;
    if (!num1 || !num2 || !op) {
        return res.status(400).json({ error: "Faltan parámetros" });
    }
    const number1 = num1;
    const number2 = num2;
    let result;
    switch (op) {
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "/":
            result = number1 / number2;
            break;
        default:
            return res.status(400).json({ error: "Operador no válido" });
    }

    res.json({result});
    
});

app.listen(3001, () => {
    console.log("El servidor esta corriendo en el puerto 3001");
});