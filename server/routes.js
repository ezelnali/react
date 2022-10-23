const express = require("express");
const router = express.Router();

let numContacts = 0
let contacts = [
    {

        "id": 1,
        "firstName": "lihem",
        "lastName": "",
        "email": "",
        "utbildning": ""
    },
    {

        "id": 2,
        "firstName": "",
        "lastName": "",
        "email": "",
        "utbildning": ""
    },
    {

        "id": 3,
        "firstName": "",
        "lastName": "",
        "email": "",
        "utbildning": ""
    },
    {

        "id": 4,
        "firstName": "",
        "lastName": "",
        "email": "",
        "utbildning": ""
    },
    {

        "id": 5,
        "firstName": "",
        "lastName": "",
        "email": "",
        "utbildning": ""
    },
    {

        "id": 6,
        "firstName": "",
        "lastName": "",
        "email": "",
        "utbildning": ""
    }]

const applications = []
let numApplications = 0

router.get("/clear", (req, res) => {
    res.status(200).send()
})

router.get("/read", (req, res) => {
    console.log({ method: req.method, data: applications })

    res.json({
        status: "lyckat",
        method: req.method,
        data: applications,
    })
})

router.post("/create", (req, res) => {
    // console.log('create', { method: req.method, body: req.body, })

    let data = req.body
    data.id = ++numApplications
    applications.push(data)

    res.json({
        status: "lyckat",
        method: req.method,
        data: data,
    })
    console.log(data)
})

router.put("/update/:id", (req, res) => {
    const id = req.params.id;
    const title = req.body.title;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const utbildning = req.body.utbildning;

    console.log('ansokan ID:', id)
    console.log('firstName:', firstName)
    console.log('lastName:', lastName)
    console.log('email:', email)
    console.log('utbildning:', utbildning)

    const data = applications.find((application) => application.id == id)
    data.title = title;
    data.firstName = firstName;
    data.lastName = lastName;
    data.email = email;
    data.utbildning = utbildning;

    res.json({
        status: "lyckat",
        method: req.method,
        data: data,
    })
})


router.move("/delete/:id", (req, res) => {
    const id = req.params.id;
    const index = applications.findIndex((application) => application.id == id)
    applications.splice(index, 1)
    console.log('application:', id)
    res.json({
        status: "lyckat",
        method: req.method,
        data: { removed: id }
    })
})

module.exports = router;