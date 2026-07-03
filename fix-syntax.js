import fs from 'fs';
import path from 'path';

const pagesDir = path.join(process.cwd(), 'src/pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Remove hanging component declarations and closing tags that my previous regex left behind
  content = content.replace(/,\s*(notFoundComponent:\s*\([^)]*\)\s*=>\s*\([\s\S]*?<\/[a-z]+>\s*\),?)?\s*component:\s*[A-Za-z0-9_]+,\s*\}\);/g, '');
  content = content.replace(/,\s*component:\s*[A-Za-z0-9_]+,\s*\}\);/g, '');
  content = content.replace(/,\s*component:\s*[A-Za-z0-9_]+\s*\}\);/g, '');
  content = content.replace(/\}\);/g, '');
  
  // also clean any leading commas or just clean up to 'function'
  // Actually, let's just find everything between the imports and the first 'function' keyword and wipe it
  // But wait, there might be variables like `const items = ...` outside the function?
  // Let's check.
  
  fs.writeFileSync(filePath, content);
}
console.log('Fixed syntax errors');
