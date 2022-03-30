const f = require('fs');
const readLine = require('readline');

class ConvertCsv {
  // read file line by line
  readFileLineByLine(fileName = "") {
    var arrayObject = [];
    var file = './'+fileName;

    var rl = readLine.createInterface({
      input: f.createReadStream(file),
      output: process.stdout,
      terminal: false
    });

    return new Promise((resolve, reject) => {
      rl.on('line', function (text) {
        var line = text.toString().split(",");
        // add line in my "arrayObject" as object
        arrayObject.push({
          game: line[0],
          category: line[1],
          avaliation: line[2]
        })
      }).on('close', () => {
        resolve(arrayObject);
      });
    })
  }

  convertCsv(array = [], saveFile = true, name = "file") {
    const csvString = [[...Object.keys(array[0])], ...array.map(item => [item.game, item.category, item.avaliation])]
      .map(e => e.join(",")) // add comma in each object
      .join("\n");

    // Save file in folder
    if (saveFile) f.writeFile(`${name}.csv`, csvString, (err) => {
      if (err) throw err;
      console.log('O arquivo foi criado!');
    });

    return csvString;
  }

}

module.exports = ConvertCsv;