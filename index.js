const express = require("express");
const app = express();
const port = 8000;

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
    console.log(`req.body`, req.body);
    students.push(req.body.student);
    res.json(req.body.student)
})


app.listen(port, () => {
    console.log('Server is listening on port', port);
})