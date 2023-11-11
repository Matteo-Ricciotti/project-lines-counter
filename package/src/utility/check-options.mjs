import { program } from 'commander';

export default () => {
  // TO-IMPLEMENT
  // program.option();
  program.parse();
  return program.opts();
};
