var fs = require('fs')

// Copy a directory
function updateReference(src) {
    // Ensure the directory exists
    if (fs.existsSync(src) && fs.lstatSync(src).isDirectory()) {
        // Get each item in the directory
        fs.readdirSync(src).forEach(function (item) {
            var srcPath = src + "/" + item;

            // See if this is a directory
            if (fs.lstatSync(srcPath).isDirectory()) {
                // Copy the folder recursively
                updateReference(srcPath);
            } else {
                // Read the file
                var data = fs.readFileSync(srcPath, "utf8");

                // Replace the reference
                var content = data.replace(/gd-sprest-def/g, item == "rest.d.ts" ? ".." : "../..")

                // Update the file
                if (content != data) {
                    fs.writeFileSync(srcPath, content, "utf8");
                }
            }
        });
    }
}

// Log
console.log("Updating the references");

// Update the references
updateReference("./@types");

// Log
console.log("Successfully updated the references");