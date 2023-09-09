const express = require("express");
const Data = require("./data");
const app = express()
const cors = require("cors")
const port = 3005;

app.use(cors({
    origin: "*"

}))

app.get("/", (req, res) => {
    res.send("Hello Dinesh How are You Today")
})

app.get("/bihar", (req, res) => {
    res.send(Data)
    console.log(Data);
})

app.listen(port, () => {
    console.log(`server is live on ${port}`);
})


