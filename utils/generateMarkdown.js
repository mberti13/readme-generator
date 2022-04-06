const fs = require('fs');

//create const to write file in index.js
const writeFile = fileContent =>{
    return new Promise((resolve, reject)=>{
        fs.writeFile('./dist/README.md', fileContent, err =>{
            //if there's an error, reject Promise and send error to the Promise's `.catch()` method
            if(err){
                reject (err);
                //return out of function here to make sure the Promise doesn't accidentally execute resolve() function as well
                return;
            }

            //// if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
};

module.exports = writeFile;