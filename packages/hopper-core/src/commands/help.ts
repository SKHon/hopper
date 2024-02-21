import meow from 'meow';

const pkg = require('../../package.json');

const help = function () {
  const cli = meow(`
    Usage: hopper [options]

    Options:
        --version, -[v]           Print version and exit successfully.
        --help, -[h]              Print this help and exit successfully.
        --config, -[c]            Print this default config.
        --target, -[t]            Check target dirs or files. eg: hopper -t=src/
        --exclude, -[e]           Ignore dirs or files. eg: hopper -e=dist/**
    `);

  return cli.showHelp(0);
};

const version = function () {
  const cli = meow(`
    version V${pkg.version}
    `);

  return cli.showHelp(0);
};

export default { help, version };