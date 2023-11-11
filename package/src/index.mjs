#!/usr/bin/env node

import chalk from 'chalk';
import promptPath from './utility/prompt-path.mjs';
import getAllFilesPaths from './utility/get-all-files-paths.mjs';
import getAllFilesLines from './utility/get-all-files-lines.mjs';
import calculateLines from './utility/calculate-lines.mjs';

const calculate = (input) => {
  const paths = getAllFilesPaths(input.path);

  const filesLines = getAllFilesLines(paths);

  const lines = calculateLines(filesLines);

  return lines;
};

const onSuccess = (lines, time) => {
  process.stdout.write('\u001B[1A');
  process.stdout.clearLine();
  console.log('Success!');

  console.log(chalk.cyan(`Lines: ${chalk.greenBright(`${lines}`)}`));
  console.log(chalk.cyan(`Time: ${chalk.greenBright(`${time}ms`)}`));
};

const init = async () => {
  // TO-IMPLEMENT
  // const options = checkOptions();

  const input = await promptPath();

  console.log('Calculating...');

  const start = Date.now();

  const lines = calculate(input);

  const end = Date.now();

  onSuccess(lines, end - start);
};

init();
