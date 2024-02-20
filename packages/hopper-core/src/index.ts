import { argv } from 'yargs';
import exec from './core';
import helpFun from './commands/help';

const run = async () => {
  console.log(argv);
  const {
    h,
    help,
    version,
    v,
    target,
    exclude
  } = argv as unknown as {
    type: string;
    h: boolean;
    help: string;
    version: boolean;
    v: boolean;
    target?: string;
    exclude?: string;
  };

  if (h || help) return helpFun.help();

  if (v || version) return helpFun.version();

  await exec({ target: !target ? process.cwd() : target, exclude });

}

run();

export default run;
