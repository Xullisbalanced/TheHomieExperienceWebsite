const fs = require('fs');
const path = require('path');

// Define the components and their directories
const components = [
    { name: 'Header', folder: 'components' },
    { name: 'Footer', folder: 'components' },
    { name: 'Home', folder: 'pages' },
    { name: 'About', folder: 'pages' },
    { name: 'Contact', folder: 'pages' }
];

// Function to create directories if they don't exist
function ensureDirectoryExistence(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

// Function to create a component file and its corresponding SCSS file
function createComponentFiles(component) {
    const componentDir = path.join('src', component.folder, component.name);
    const componentFile = path.join(componentDir, `${component.name}.js`);
    const scssFile = path.join(componentDir, `${component.name}.scss`);

    ensureDirectoryExistence(componentDir);

    // Create the component file if it doesn't exist
    if (!fs.existsSync(componentFile)) {
        fs.writeFileSync(componentFile, `import React from 'react';\nimport './${component.name}.scss';\n\nconst ${component.name} = () => {\n    return (\n        <div className="${component.name}">\n            <h1>${component.name}</h1>\n        </div>\n    );\n};\n\nexport default ${component.name};\n`);
    }

    // Create the SCSS file if it doesn't exist
    if (!fs.existsSync(scssFile)) {
        fs.writeFileSync(scssFile, `.${component.name} {\n    // Styles for ${component.name}\n}\n`);
    }
}

// Function to remove redundant files or directories (if any)
function cleanUpRedundancies() {
    // Example: Removing an old unused directory
    const oldDir = path.join('src', 'oldComponents');
    if (fs.existsSync(oldDir)) {
        fs.rmdirSync(oldDir, { recursive: true });
    }
}

// Update the directory structure
function updateDirectoryStructure() {
    components.forEach(createComponentFiles);
    cleanUpRedundancies();
}

updateDirectoryStructure();
console.log('Directory structure updated successfully.');
