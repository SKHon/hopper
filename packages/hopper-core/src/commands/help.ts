import meow from 'meow';

const pkg = require('../../package.json');

const help = function () {
  const cli = meow(`
    Usage: ecom-analysis [options] [command]

    Commands:
        --type=local [local | codebase | scm]       operation type default local.
        --env=local [local | codebase | scm]        environment variable default local.
        --increment                                 is increment checking default false

    Options:
        --version, -[v]           Print version and exit successfully.
        --help, -[h]              Print this help and exit successfully.
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