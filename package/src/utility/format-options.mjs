export default () => {
  const args = process.argv.slice(2);

  const isPath = args.includes('-p');
  const skipEmpty = args.includes('-s');

  let path = isPath && args[args.indexOf('-p') + 1];

  return { path, skipEmpty };
};
