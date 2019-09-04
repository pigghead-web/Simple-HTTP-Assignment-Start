const fs = require('fs');

const dankMeme = fs.readFileSync(`${__dirname}/../client/spongegar.png`); // synchronously get directory to png to load it in before everything else

const getImage = (request, response) => {
  response.writeHead(200, {
    'Content-Type': 'image/png',
  });
  response.write(dankMeme);
  response.end();
};

module.exports.getImage = getImage;
