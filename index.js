const http = require('http');

const requestListener = (req, res)=>{
console.log("Request is Incoming");
	
const responseData = {
        slackUsername: "Kaycee",
        backend: "true",
        age: "19",
        bio: "backend developer"
}

const jsonContent = JSON.stringify(responseData);
res.end(jsonContent);
};

const server = http.createServer(requestListener);

server.listen(process.env.PORT || 3000, function(){
	console.log("Server is running at Port 3000 ");
});
