import meow from 'meow';
import { defaultConfig } from '../config';

const config = function () {
  const cli = meow(`
    default config is : ${JSON.stringify(defaultConfig)}
    `);

  return cli.showHelp(0);
};

export default { config };