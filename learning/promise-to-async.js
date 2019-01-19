const fs = require("fs");

/**
 *
 */
function readFile(filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, "utf-8", (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
}

// Promise

readFile("./files/greetings.txt")
  .then(data => {
    console.log(`Promise resolved data ${Date.now()} :`, data);
  })
  .catch(err => {
    console.log(`Promise error   :`, err);
  });

// Async / Await

async function asyncReadFile(filepath) {
  try {
    let data = await readFile(filepath);
    console.log(`Async read data ${Date.now()} : `, data);
  } catch (err) {
    console.log(`Aync error : `, err);
  }
}
asyncReadFile("./files/greetings.tx");

module.exports = {
  readFile
};
