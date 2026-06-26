const fs = require('fs');
const path = require('path');
const lucide = require('lucide-react');
const availableIcons = new Set(Object.keys(lucide));

const componentsDir = path.join(process.cwd(), 'src/components');
const files = fs.readdirSync(componentsDir).map(f => path.join(componentsDir, f));
files.push(path.join(process.cwd(), 'src/App.jsx'));

let errors = [];

files.forEach(file => {
  if (file.endsWith('.jsx')) {
    const content = fs.readFileSync(file, 'utf8');
    const match = content.match(/import\s+{([^}]+)}\s+from\s+['"]lucide-react['"]/);
    if (match) {
      const imports = match[1].split(',').map(s => s.trim());
      imports.forEach(imp => {
        if (!availableIcons.has(imp)) {
          errors.push(imp + ' in ' + path.basename(file));
        }
      });
    }
  }
});
console.log('Errors:', errors);
