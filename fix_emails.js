const fs = require('fs');
const path = require('path');

const email = 'pal664908@gmail.com';
const dir = path.join(__dirname, 'app');

const files = [
  'privacy/page.tsx',
  'safety/page.tsx',
  'child-safety/page.tsx',
  'help/page.tsx',
  'terms/page.tsx',
  'about/page.tsx',
  'contact/page.tsx',
  'founder/page.tsx'
];

files.forEach(file => {
  const fullPath = path.join(dir, file);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    // Replace the literal string "${email}" with the actual email
    content = content.replace(/\$\{email\}/g, email);
    fs.writeFileSync(fullPath, content);
  }
});

console.log('Fixed emails in all pages!');
