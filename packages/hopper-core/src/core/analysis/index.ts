import { fork } from 'child_process';
import { Options, QualityOutputItem } from '../types';
import { terminal } from 'terminal-kit';
import Table from 'cli-table';

import { qualityFormatter } from '../utils/formatter';

export default class Analysis {
  files: string[];
  plugins: any[];

  constructor(options: Options) {
    this.files = options.files;
    this.plugins = [
      require.resolve('hopper-quality')
    ];
  }

  run() {
    this.plugins.forEach(plugin => {
      const newFork = fork(require.resolve('hopper-quality'));
      newFork.send({ files: this.files })
      newFork.on('message', (msg: { result: QualityOutputItem[] }) => {
        var table = new Table({
          head: ['rule', 'message', 'path', 'code']
          , colWidths: [20, 20, 80, 80]
        });
        const result = qualityFormatter(msg?.result);
        result.forEach(r => table.push(r))
        console.log(table.toString());

      })

    })
  }


}