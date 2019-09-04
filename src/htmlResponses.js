const fs = require('fs'); // import file system module

const index = fs.readFileSync(`${__dirname}/../client/client.html`); // ** Avoid synchronous functions because they are thread blocking
// *** Exception is on startup or shutdown
const page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);

const getIndex = (request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/html', // browser will render text as html
  });
  response.write(index);
  response.end();
};

const getPage2 = (request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/html',
  });
  response.write(page2);
  response.end();
};

module.exports.getIndex = getIndex;
module.exports.getPage2 = getPage2;
