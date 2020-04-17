var fs = require('fs');

// Deletes a directory
function deleteDirectory(path) {
    // Ensure the directory exists
    if (fs.existsSync(path) && fs.lstatSync(path).isDirectory()) {
        // Get each item in the directory
        fs.readdirSync(path).forEach(function (item) {
            var objPath = path + "/" + item;

            // See if this is a directory
            if (fs.lstatSync(objPath).isDirectory()) {
                // Delete the folder recursively
                deleteDirectory(objPath);
            } else {
                // Delete the file
                fs.unlinkSync(objPath);
            }
        });

        // Delete the directory
        fs.rmdirSync(path);
    }
};

// Log
console.log("Deleting the docs");

// Delete the folder
deleteDirectory("./docs/sprest");

// Log
console.log("Successfully deleted the docs");