const fs = require('fs');

const start = async () => {
  await photoParser();
};

const photoParser = async () => {
  fs.readdir('./img-assets', (err, files) => {
    files.forEach((file) => {
      let filepath = './img-assets/' + file;
      const stats = fs.statSync(filepath);
      if (stats.size < 23000) {
        console.log(file + ' ' + stats.size);
        var newPath = './result/' + file;
        fs.createReadStream('placeholder.jpg').pipe(
          fs.createWriteStream(newPath)
        );
      }
    });
  });
};

start();
