const express = require("express");
const app = express()
const cors = require("cors");
const { Data, Hollywwood, Bollywood, Food, Tech, all } = require("./data");
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
app.get("/Hollywwood", (req, res) => {
    res.send(Hollywwood)
    console.log(Hollywwood);
})
app.get("/Bollywood", (req, res) => {
    res.send(Bollywood)
    console.log(Bollywood);
})
app.get("/Food", (req, res) => {
    res.send(Food)
    console.log(Food);
})
app.get("/Tech", (req, res) => {
    res.send(Tech)
    console.log(Tech);
})
app.get("/all", (req, res) => {
    res.send(all)
    console.log(all);
})

app.listen(port, () => {
    console.log(`server is live on ${port}`);
})


