import fs from 'fs';
import chalk from 'chalk';

export default (path) => {
  try {
    const files = fs.readdirSync(path, { withFileTypes: true });

    return files;
  } catch (err) {
    console.log(chalk.red(`ERROR: Unable to read the path: ${path}`));
    process.exit(1);
  }
};
