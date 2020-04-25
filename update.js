var fs = require('fs')

// Copy a directory
function updateReference(src, onReplace) {
    // Ensure the directory exists
    if (fs.existsSync(src) && fs.lstatSync(src).isDirectory()) {
        // Get each item in the directory
        fs.readdirSync(src).forEach(function (item) {
            var srcPath = src + "/" + item;

            // See if this is a directory
            if (fs.lstatSync(srcPath).isDirectory()) {
                // Copy the folder recursively
                updateReference(srcPath, onReplace);
            } else {
                // Read the file
                var data = fs.readFileSync(srcPath, "utf8");

                // Replace the reference
                var content = onReplace(data, item);

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
updateReference("./@types", function (data, file) {
    // Return the content
    return data.replace(/"gd-sprest-def"/g, '"../../lib"')
        .replace(/gd-sprest-def/g, file == "rest.d.ts" ? ".." : "../..");
});
updateReference("./components/components", function (data) {
    // Return the content
    return data.replace(/"gd-bs\/components/g, "\".")
        .replace(/"gd-bs/g, "\".")
        .replace(/"gd-sprest/g, "\"../../@types")
        .replace(/\* import { Components } from "..\/..\/@types-bs"/g, '* import { Components } from "gd-sprest-bs"');
});
updateReference("./components/webparts", function (data) {
    // Return the content
    return data.replace(/"gd-bs\/components/g, "\"../components")
        .replace(/"gd-sprest/g, "\"../../@types")
        .replace(/\* import { WebParts } from "..\/..\/@types-bs"/g, '* import { WebParts } from "gd-sprest-bs"');
});

// Log
console.log("Successfully updated the references");