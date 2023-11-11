import fs from 'fs';
import chalk from 'chalk';

export default (path) => {
  try {
    const files = fs.readdirSync(path, { withFileTypes: true });

    return files;
  } catch (err) {
    process.stdout.write('\u001B[1A');
    process.stdout.clearLine();

    console.log(chalk.red(`ERROR: Unable to read the path: ${path}`));
    process.exit(1);
  }
};
