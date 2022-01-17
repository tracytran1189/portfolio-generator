const fs = require('fs');
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs. writeFile('./dist/index.html', fileContent, err => {
            //if there's an error, reject the Promise and send the error to the Promise's` .catcj()` methos
            if (err) {
                reject(err);
             // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
             return;  
            }

            //if everything went well, resolve the Promise and send the sucessful data to the `.then()` methos
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./dist/style.css', './utils/style.css', err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'style sheet copied!'
            });
        });
    });
};

module.exports ={writeFile,copyFile};
