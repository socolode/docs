const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const shouldDelete = args.includes('--delete') || args.includes('-D');
const dryRun = args.includes('--dry-run') || args.includes('-d');

const docsDir = './docs';
const i18nDir = './i18n';
const staticImgDir = './static/img';
const staticFilesDir = './static/files';
const staticFiresDir = './static/fires';

const protectedFiles = ['favicon.ico', 'logo.svg'];

const referencedAssets = new Set();

function scanFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, 'utf-8');
  
  const imgMatches = content.match(/\/img\/[^"\s)]+/g);
  if (imgMatches) {
    imgMatches.forEach(match => {
      const fileName = path.basename(match);
      referencedAssets.add(fileName);
    });
  }

  const filesMatches = content.match(/\/files\/[^"\s)]+/g);
  if (filesMatches) {
    filesMatches.forEach(match => {
      const fileName = path.basename(match);
      referencedAssets.add(fileName);
    });
  }

  const firesMatches = content.match(/\/fires\/[^"\s)]+/g);
  if (firesMatches) {
    firesMatches.forEach(match => {
      const fileName = path.basename(match);
      referencedAssets.add(fileName);
    });
  }

  const relativeImgMatches = content.match(/\.\.?\/?[^"\s)]+\.(jpg|jpeg|png|gif|svg|webp)/gi);
  if (relativeImgMatches) {
    relativeImgMatches.forEach(match => {
      const fileName = path.basename(decodeURIComponent(match));
      referencedAssets.add(fileName);
    });
  }

  const relativeFileMatches = content.match(/\.\.?\/?[^"\s)]+\.(pdf|doc|docx|zip|rar|xlsx|csv)/gi);
  if (relativeFileMatches) {
    relativeFileMatches.forEach(match => {
      const fileName = path.basename(decodeURIComponent(match));
      referencedAssets.add(fileName);
    });
  }
}

function scanDir(dir) {
  if (!fs.existsSync(dir)) return;
  const items = fs.readdirSync(dir);
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      scanDir(fullPath);
    } else if (item.endsWith('.md') || item.endsWith('.mdx')) {
      scanFile(fullPath);
    }
  });
}

function checkUnusedAssets(dir) {
  if (!fs.existsSync(dir)) {
    console.log(`目录不存在: ${dir}`);
    return [];
  }
  const unused = [];
  const items = fs.readdirSync(dir);
  items.forEach(item => {
    if (!referencedAssets.has(item) && !protectedFiles.includes(item)) {
      unused.push({
        dir,
        file: item,
        fullPath: path.join(dir, item)
      });
    }
  });
  return unused;
}

function deleteUnusedAssets(unusedList) {
  let deletedCount = 0;
  unusedList.forEach(item => {
    try {
      fs.unlinkSync(item.fullPath);
      console.log(`  ✓ 删除: ${item.file}`);
      deletedCount++;
    } catch (err) {
      console.log(`  ✗ 删除失败: ${item.file} - ${err.message}`);
    }
  });
  return deletedCount;
}

console.log('===== 未引用资源清理工具 =====');
console.log('正在扫描文档中的资源引用...');
scanDir(docsDir);
scanDir(i18nDir);
console.log(`共发现 ${referencedAssets.size} 个被引用的资源文件\n`);

const imgUnused = checkUnusedAssets(staticImgDir);
const filesUnused = checkUnusedAssets(staticFilesDir);
const firesUnused = checkUnusedAssets(staticFiresDir);

const allUnused = [...imgUnused, ...filesUnused, ...firesUnused];

console.log('========== 未被引用的资源文件 ==========');

if (imgUnused.length > 0) {
  console.log(`\n[static/img/] (${imgUnused.length}个)`);
  imgUnused.forEach(item => console.log(`  - ${item.file}`));
} else {
  console.log('\n[static/img/] 无未引用文件');
}

if (filesUnused.length > 0) {
  console.log(`\n[static/files/] (${filesUnused.length}个)`);
  filesUnused.forEach(item => console.log(`  - ${item.file}`));
} else {
  console.log('\n[static/files/] 无未引用文件');
}

if (firesUnused.length > 0) {
  console.log(`\n[static/fires/] (${firesUnused.length}个)`);
  firesUnused.forEach(item => console.log(`  - ${item.file}`));
} else {
  console.log('\n[static/fires/] 无未引用文件');
}

console.log(`\n======================================`);
console.log(`总计发现 ${allUnused.length} 个未被引用的资源文件`);

if (protectedFiles.length > 0) {
  console.log(`保护文件（不会删除）: ${protectedFiles.join(', ')}`);
}

console.log('\n======================================');
console.log('使用方式:');
console.log('  node scripts/clean-unused-assets.js        # 只列出，不删除');
console.log('  node scripts/clean-unused-assets.js -d     # 只列出，不删除');
console.log('  node scripts/clean-unused-assets.js --delete   # 删除未引用文件');
console.log('  node scripts/clean-unused-assets.js -D     # 删除未引用文件');
console.log('======================================');

if (shouldDelete && allUnused.length > 0) {
  console.log('\n正在删除...');
  const deleted = deleteUnusedAssets(allUnused);
  console.log(`\n删除完成！共删除 ${deleted} 个文件。`);
} else if (shouldDelete && allUnused.length === 0) {
  console.log('\n没有可删除的文件。');
} else {
  if (allUnused.length > 0) {
    console.log('\n如需删除，请运行: node scripts/clean-unused-assets.js --delete');
  }
}