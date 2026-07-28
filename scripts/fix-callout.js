const fs = require('fs');
const path = require('path');

const directories = [
  'docs/quick-start',
  'i18n/zh-CN/docusaurus-plugin-content-docs/current/quick-start'
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove import line
  content = content.replace(/import Callout from '@docusaurus\/theme-classic\/lib-next\/remark\/callout\/Callout';?\n?/g, '');
  
  // Replace <Callout emoji="..."> with :::note
  content = content.replace(/<Callout emoji="([^"]*)">/g, ':::note');
  
  // Replace </Callout> with :::
  content = content.replace(/<\/Callout>/g, ':::');
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Fixed:', filePath);
}

function walkDir(dir) {
  const files = fs.readdirSync(dir, { recursive: true });
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fullPath.endsWith('.mdx') || fullPath.endsWith('.md')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('<Callout') || content.includes('import Callout')) {
        processFile(fullPath);
      }
    }
  }
}

directories.forEach(dir => {
  if (fs.existsSync(dir)) {
    walkDir(dir);
  }
});

console.log('Done!');
