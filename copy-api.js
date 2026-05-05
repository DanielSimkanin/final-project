import fs from 'fs/promises';
import path from 'path';

const src = 'api';
const dest = 'public/api';

async function copyDir(srcPath, destPath) {
  await fs.mkdir(destPath, { recursive: true });
  const files = await fs.readdir(srcPath);
  
  for (const file of files) {
    const srcFile = path.join(srcPath, file);
    const destFile = path.join(destPath, file);
    const stat = await fs.stat(srcFile);
    
    if (stat.isDirectory()) {
      await copyDir(srcFile, destFile);
    } else {
      await fs.copyFile(srcFile, destFile);
    }
  }
}

copyDir(src, dest).catch(err => {
  console.error('Failed to copy api folder:', err);
  process.exit(1);
});
