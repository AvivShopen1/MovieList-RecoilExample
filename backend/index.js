const CsvReadableStream = require("csv-reader");
const fs = require("fs");

// module.exports = () => {
  const movies = [];
  const users = [];
  let finished = false;

  const inputStream = fs.createReadStream("movies.csv", "utf8");

  inputStream
    .pipe(
      new CsvReadableStream({
        parseNumbers: true,
        parseBooleans: true,
        trim: true,
      })
    )
    .on("data", function (row) {
      movies.push(row);
    }).on("end", function (data) {
      fs.writeFileSync('./movies.json', JSON.stringify(movies));
    });

  // Create a fake user array of 40 users
  for (let i = 0; i < 40; i++) {
    users.push({
      id: i,
      name: `User ${i}`,
      age: Math.floor(Math.random() * 100),
      email: `${i}@${Math.random().toString(36).substring(7)}.com`,
      password: `${Math.random().toString(36).substring(7)}`,
    });
  }

  return {
    movies,
    users,
  };
// };
