var fs = require('fs');

// Copy a directory
function copyDirectory(src, target, appendFl) {
    // See if the target exists
    if (fs.existsSync(target)) {
        // Delete the target if we aren't appending files to it
        appendFl != true ? deleteDirectory(target) : null;
    } else {
        // Create the directory
        fs.mkdirSync(target);
    }

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
                // Ensure we don't overwrite files
                if (appendFl != true || fs.existsSync(targetPath) == false) {
                    // Copy the file
                    fs.copyFileSync(srcPath, targetPath);
                }
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
deleteDirectory("./docs/sprest-bs");

// Log
console.log("Copying the definitions");

// Copy
copyDirectory("./node_modules/gd-bs/@types", "./components");
copyDirectory("./node_modules/gd-sprest/@types", "./@types");
copyDirectory("./node_modules/gd-sprest-def/lib", "./lib");
copyDirectory("./node_modules/gd-sprest-bs/@types/components", "./components/components", true);
copyDirectory("./node_modules/gd-sprest-bs/@types/webparts", "./components/webparts", true);

// Copy the documentation
fs.copyFileSync("./node_modules/gd-sprest/README.md", "./@types/README.md");
fs.copyFileSync("./node_modules/gd-sprest-bs/README.md", "./components/README.md");

// Log
console.log("Successfully cleaned the library");