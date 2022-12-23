//express works on the top of node
const express = require("express");
// initialization
const app = express();
app.use(express.json());

const port = 8081;

const todoList = ["need to learn", "need to code"]

//http://localhost:8081/todos
 

app.get("/todos", (req, res) => {
    res.status(200).send(todoList);
});

app.post("/todos", (req, res) => {
    let newtoItem = req.body.item;
    todoList.push(newtoItem);
    res.status(201).send({
        message:"to do got added successfully !!"
    });
});

app.delete("/todos", (req, res) => {
    const itemToDelete = req.body.item;
    todoList.find((element, index) => {
        if (element === itemToDelete) {
            todoList.splice(index, 1);
        }
    });
    res.status(202).send({
        message: `deleted item ${req.body.item}`,
    });
});
app.all("/todos", (req, res) => {
    res.status(501).send();
});

app.all("*", (req, res) => {
    res.status(404).send();
})

app.listen(port, () => {
    console.log(`node js server started on ${port}`);
});