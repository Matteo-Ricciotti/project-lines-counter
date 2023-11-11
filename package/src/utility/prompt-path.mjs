import inquirer from 'inquirer';

export default async () => {
  const input = await inquirer.prompt({
    name: 'path',
    type: 'input',
    message: 'Path',
    default: () => '../my-project',
  });

  return input.path;
};
