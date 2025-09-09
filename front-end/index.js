const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors({
    origin: "http://localhost:5173",  // allow only your React app
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"]
}))
app.use(express.json())


let todos = ['todo1', 'todo2', 'todo3']; 

app.get("/", (req, res)=>{
    res.json({
        data : todos
    })
})
app.post("/",(req,res)=>{
    console.log(req.body)
    todos = [...todos,req.body.todo]
    res.json({
        data : todos
    })
})


app.listen(3000,()=>{
    console.log("app is listening on port")
})

