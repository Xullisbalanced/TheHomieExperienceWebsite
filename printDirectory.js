const fs = require('fs');
const path = require('path');

// Function to print the directory structure
function printDirectory(dir, depth = 0) {
    const indent = '  '.repeat(depth);
    const items = fs.readdirSync(dir);

    items.forEach(item => {
        const itemPath = path.join(dir, item);
        const stats = fs.statSync(itemPath);

        if (stats.isDirectory()) {
            if (item !== 'node_modules') {
                console.log(`${indent}${item}/`);
                printDirectory(itemPath, depth + 1);
            }
        } else {
            console.log(`${indent}${item}`);
        }
    });
}

// Start printing from the current directory
const startDir = process.cwd();
printDirectory(startDir);
