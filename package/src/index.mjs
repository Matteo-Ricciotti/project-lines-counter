#!/usr/bin/env node

import chalk from 'chalk';
import nanospinner from 'nanospinner';
import promptPath from './utility/prompt-path.mjs';
import checkOptions from './utility/check-options.mjs';
import getAllFilesPaths from './utility/get-all-files-paths.mjs';
import getAllFilesLines from './utility/get-all-files-lines.mjs';
import calculateLines from './utility/calculate-lines.mjs';

const init = async () => {
  // TO-IMPLEMENT
  // const options = checkOptions();

  const input = await promptPath();

  const start = Date.now();

  const spinner = nanospinner.createSpinner().start();

  const paths = getAllFilesPaths(input.path);

  const filesLines = getAllFilesLines(paths);

  const lines = calculateLines(filesLines);

  const end = Date.now();

  spinner.stop();

  console.log(chalk.cyan(`Lines: ${chalk.greenBright(`${lines}`)}`));
  console.log(chalk.cyan(`Time: ${chalk.greenBright(`${end - start}ms`)}`));
};

init();
