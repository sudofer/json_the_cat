const request = require("request");

//const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("What cat do you want to know about?", (answer) => {
//   const cat = answer;
//   fetchBreedDescription(cat);
//   rl.close();
// });

const fetchBreedDescription = (cat, callback) => {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${cat}`,
    function (error, response, body) {
      const data = JSON.parse(body);

      if (error) {
        callback(error);
      } else if (data[0]) {
        callback(null, data[0].description);
      } else {
        callback("Not a valid cat name");
      }
    }
  );
};

module.exports = { fetchBreedDescription };
