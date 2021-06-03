const request = require("request");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What cat do you want to know about?", (answer) => {
  const cat = answer;
  sendReq(cat);
  rl.close();
});

const sendReq = (cat) => {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${cat}`,
    function (error, response, body) {
      console.error("error: you probably didnt choose a real cat"); // Print the error if one occurred
      console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
      //console.log("body:", body); // Print the HTML for the Google homepage.

      const data = JSON.parse(body);
      console.log(data[0].description);
      process.exit;
    }
  );
};