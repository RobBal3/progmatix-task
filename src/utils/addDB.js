const fs = require('fs');

export function addToDB(user) {
    fs.readFile('data.json', (err, data) => {
        if (err) throw err;
      
        const obj = JSON.parse(data);
      
        obj.array.push(user);
      
        const json = JSON.stringify(obj);
      
        fs.writeFile('data.json', json, (err) => {
          if (err) throw err;
          console.log('Object added to array in JSON file');
        });
      });
}