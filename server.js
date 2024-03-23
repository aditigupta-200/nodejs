var http = require("http")

http
.createServer((req, res) => {
    res.writeHead("200", "not ok")
    res.write("hello uu9b world")
    res.end()
}
)
.listen(8000)

