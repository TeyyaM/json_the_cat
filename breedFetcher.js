const request = require('request');
const arg = process.argv[2].slice(0, 3);
const api = 'https://api.thecatapi.com/v1/breeds/search?q=';

request(api + arg, (error, response, body) => {
  if (error === null && response.statusCode === 200) {
    // checks if the breed was valid
    if (!body[2]) {
      console.log(`Nothing found! Check the if breed, ${arg} is misspelt!`);
    } else {
      // returns the object. Success!
      console.log(JSON.parse(body));
    }
  } else {
    throw error;
  }
});

