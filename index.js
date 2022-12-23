// ----------------------THAPA TECHNICAL-------------------
// --------CREATING FIRST SERVER AND url  ROUTING --------------


// const http = require("http");

// const server = http.createServer((req, res) => {
//     res.end('helo from the other side!!!!!');
// });

// server.listen(8000, "127.0.0.1", () => {
//     console.log("listening to the server posrt 8000");
// });

//---------------------   URLs    ---------------------------
const http = require("http");

const server = http.createServer((req, res) => {
    // console.log(req.url);
    if (req.url == "/") {
          res.end("helo from the home side!!!!!");

    } else if (req.url == "/about"){
       res.end("helo from the about side!!!!!");

    }
     else if (req.url == "/contactUs"){
        res.end("helo from the contactUs side!!!!!");

    }
    else {
        res.writeHead(404,{"Content-type" :"text/html"});
     res.end("<h1>404 error pagessss! </h1>");

    }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to the server posrt 8000");
});
