const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

const students = ["Alexandre", "François", "Fatoumata", "Muneeb", "Sofiane S",
    "Sofiane A", "Semou", "Ibrahim", "Jérémie",
    "Ishran", "Amir", "Hasnen", "Theesan"
]

app.get("/students", (req, res) => {
    res.json(students)
})

app.post("/students", (req, res) => {
    // console.log(`req.body.student`, req.body.student);
    if (!students.includes(req.body.student)) {
        students.push(req.body.student);
        res.json(students)
    } else {
        res.status(500).send("error")
    }
})


app.listen(port, () => {
    console.log('Server is listening on port', port);
})