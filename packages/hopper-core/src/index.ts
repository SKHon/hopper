import { argv } from 'yargs';
import exec from './core';
import helpFun from './commands/help';
import configFun from './commands/config';

const run = async () => {
  console.log(argv);
  const {
    h,
    help,
    version,
    v,
    t,
    target,
    e,
    exclude,
    c,
    config
  } = argv as unknown as {
    type: string;
    h: boolean;
    help: string;
    version: boolean;
    v: boolean;
    t?: string;
    target?: string;
    e?: string;
    exclude?: string;
    c?: boolean;
    config?: boolean;
  };

  if (h || help) return helpFun.help();

  if (v || version) return helpFun.version();

  if (c || config) return configFun.config();

  const targetParams = t || target;
  const excludeParams = e || exclude;
  await exec({ target: !targetParams ? process.cwd() : targetParams, exclude: excludeParams });

}

run();

export default run;
