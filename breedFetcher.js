const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      // checks if the URL was valid
      callback(error.code, null);
      return;
    }

    const data = JSON.parse(body);
    if (!data.length) {
      // checks if the breed was valid
      callback(`Nothing found! Check the if the breed, ${breedName} is misspelt!`, null);
      return;
    }

    const breed = data[0];
    // returns the description. Success!
    callback(null, breed.description);
    return;
  });
};

module.exports = { fetchBreedDescription };

