const { fetchBreedDescription } = require("./breedFetcher");

const userInput = process.argv.slice(2);

const cat = userInput;

fetchBreedDescription(cat, (error, description) => {
  if (!error) {
    console.log(description);
  } else {
    console.log(error);
  }
});
