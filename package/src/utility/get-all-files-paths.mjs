import { join } from 'path';
import readDir from './read-dir.mjs';

const DEPENDENCIES_FOLDERS = ['node_modules'];

const getAllFilesPaths = (path) => {
  const files = readDir(path);

  let response = [];

  for (const file of files) {
    const filePath = join(path, file.name).replace(/\\/g, '/');

    if (DEPENDENCIES_FOLDERS.some((f) => filePath.includes(f))) continue;

    if (!file.isDirectory()) {
      response.push(filePath);
      continue;
    }

    response = [...response, ...getAllFilesPaths(filePath)];
  }

  return response;
};

export default getAllFilesPaths;
