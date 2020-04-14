var fs = require('fs');

function deleteFolderRecursive(path) {
    if (fs.existsSync(path) && fs.lstatSync(path).isDirectory()) {
        fs.readdirSync(path).forEach(function (file, index) {
            var curPath = path + "/" + file;

            // See if this is a directory
            if (fs.lstatSync(curPath).isDirectory()) {
                // Delete the folder recursively
                deleteFolderRecursive(curPath);
            } else {
                // Delete the file
                fs.unlinkSync(curPath);
            }
        });

        // Delete the directory
        fs.rmdirSync(path);
    }
};

// Log
console.log("Deleting the docs");

// Delete the folder
deleteFolderRecursive("./sprest");

// Log
console.log("Successfully deleted the docs");
