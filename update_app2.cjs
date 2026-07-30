const fs = require('fs');
const file = 'src/App.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  'max-w-[200px]">Shop No.1',
  'max-w-[250px]">Shop No.1'
);

fs.writeFileSync(file, content);
