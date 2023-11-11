#!/usr/bin/env node

import chalk from 'chalk';
import promptPath from './utility/prompt-path.mjs';
import formatOptions from './utility/format-options.mjs';
import getAllFilesPaths from './utility/get-all-files-paths.mjs';
import getAllFilesLines from './utility/get-all-files-lines.mjs';
import calculateLines from './utility/calculate-lines.mjs';

const calculate = (input, skipEmpty) => {
  const paths = getAllFilesPaths(input);

  const filesLines = getAllFilesLines(paths, skipEmpty);

  const lines = calculateLines(filesLines);

  return lines;
};

const onSuccess = (lines, time, noEmpty) => {
  process.stdout.write('\u001B[1A');
  process.stdout.clearLine();
  console.log('Success!');

  console.log(chalk.cyan(`Lines: ${chalk.greenBright(`${lines}`)}${noEmpty ? ' (no empty lines)' : ''}`));
  console.log(chalk.cyan(`Time: ${chalk.greenBright(`${time}ms`)}`));
};

const init = async () => {
  const { path, skipEmpty } = formatOptions();

  let input = path;

  if (!input) {
    input = await promptPath();
  }

  console.log('Calculating...');

  const start = Date.now();

  const lines = calculate(input, skipEmpty);

  const end = Date.now();

  onSuccess(lines, end - start, skipEmpty);
};

init();
