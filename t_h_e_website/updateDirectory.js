const fs = require('fs');
const path = require('path');

// Directories to create
const directoriesToCreate = [
  'public/assets/images',
  'public/assets/videos',
  'public/assets/models',
  'src/assets/images',
  'src/assets/videos',
  'src/assets/models',
  'src/components/Footer',
  'src/components/Header',
  'src/pages/About',
  'src/pages/Contact',
  'src/pages/Home',
  'src/pages/Instructors',
  'src/pages/Shop'
];

// Create directories
directoriesToCreate.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Directory created: ${dir}`);
  } else {
    console.log(`Directory already exists: ${dir}`);
  }
});

// Files to move
const filesToMove = [
  { oldPath: 'src/main.scss', newPath: 'src/index.scss' },
  { oldPath: 'websiteplanning.txt', newPath: 'planning.md' }
];

// Move files
filesToMove.forEach(file => {
  if (fs.existsSync(file.oldPath)) {
    fs.renameSync(file.oldPath, file.newPath);
    console.log(`Moved: ${file.oldPath} to ${file.newPath}`);
  } else {
    console.log(`Path does not exist: ${file.oldPath}`);
  }
});

console.log('Directory structure updated.');
