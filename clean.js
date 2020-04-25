var fs = require('fs');

// Copy a directory
function copyDirectory(src, target) {
    // Delete the target
    deleteDirectory(target);

    // Ensure the directory exists
    if (fs.existsSync(src) && fs.lstatSync(src).isDirectory()) {
        // Get each item in the directory
        fs.readdirSync(src).forEach(function (item) {
            var srcPath = src + "/" + item;
            var targetPath = target + "/" + item;

            // See if this is a directory
            if (fs.lstatSync(srcPath).isDirectory()) {
                // Copy the folder recursively
                // Create the directory
                fs.mkdirSync(targetPath);

                copyDirectory(srcPath, targetPath);
            } else {
                // Copy the file
                fs.copyFileSync(srcPath, targetPath);
            }
        });
    }
}

// Deletes a directory
function deleteDirectory(src) {
    // Ensure the directory exists
    if (fs.existsSync(src) && fs.lstatSync(src).isDirectory()) {
        // Get each item in the directory
        fs.readdirSync(src).forEach(function (item) {
            var srcPath = src + "/" + item;

            // See if this is a directory
            if (fs.lstatSync(srcPath).isDirectory()) {
                // Delete the folder recursively
                deleteDirectory(srcPath);

                // Delete the directory
                fs.rmdirSync(srcPath);
            } else {
                // Delete the file
                fs.unlinkSync(srcPath);
            }
        });
    }
};

// Log
console.log("Deleting the docs");

// Delete the folder
deleteDirectory("./docs/sprest");

// Log
console.log("Copying the definitions");

// Copy
copyDirectory("./node_modules/gd-sprest/@types", "./@types");
copyDirectory("./node_modules/gd-sprest-def/lib", "./lib");

// Copy the documentation
fs.copyFileSync("./node_modules/gd-sprest/README.md", "./@types/README.md");

// Log
console.log("Successfully cleaned the library");