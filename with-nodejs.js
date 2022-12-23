// const { on } = require("events");
const { appendFile } = require("fs");
const http = require("http");
const port = 8081;
const todoList = ["need to learn", "need to code"];

// http method-
http
  .createServer((req, res) => {
    // res.writeHead(200, { "content-type": "text/html" });
    // res.write("<h1>hey hiiiiiiiii ,this is my first server ever by devtown</h1>");
    // res.end();
    const { method, url } = req;
    // console.log(method, url);
    if (url === "/todos") {
      //http://localhost:8081/todos
      if (method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(todoList.toString());
      } else if (method === "POST") {
        let body = "";
        req
          .on("error", (err) => {
            console.log(err);
          })
          .on("data", (chunk) => {
            body = body + chunk;
            // console.log(chunk);
          })
          .on("end", () => {
            body = JSON.parse(body);
            // console.log("body data", body);
            let newTodo = todoList;
            newTodo.push(body.item);
            console.log(newTodo);
            res.writeHead(201);
          });
      } else if (method === "DELETE") {
        let body = "";
        req
          .on("error", (err) => {
            console.log(err);
          })
          .on("data", (chunk) => {
            body = body + chunk;
          })
          .on("end", () => {
            body = JSON.parse(body);
            let deleteItem = body.item;
            for (let i = 0; i < todoList.length; i++) {
              if (todoList[i] === deleteItem) {
                todoList.splice(i, 1);
                break;
              }
            }
            res.writeHead(204);
          });
      } else {
        res.writeHead(501);
      }
    } else {
      res.writeHead(404);
    }
    res.end();
  })
  .listen(port, () => {
    console.log(`my server started  by riya on port ${port}`);
  });

// advantage of nodemonno need to start the server again and again,it will automatically get started after saving the file
//http://localhost:8081
//http://localhost:8081/home
//http://localhost:8081/todos
//http://localhost:8081/contactUs
