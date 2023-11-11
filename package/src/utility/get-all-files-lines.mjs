import fs from 'fs';

const LOCK_FILES = ['package-lock.json', 'yarn.lock', 'pnpm-lock.yaml'];

export default (paths, skipEmpty) => {
  const filesLines = [];

  for (const path of paths) {
    if (LOCK_FILES.some((n) => path.includes(n))) continue;

    const content = fs.readFileSync(path, 'utf-8');

    let lines = content.split(/\n/);

    if (skipEmpty) lines = lines.filter((l) => l);

    filesLines.push(lines.length);
  }

  return filesLines;
};
