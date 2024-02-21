import { fork } from 'child_process';
import { Options } from '../types';

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
      newFork.on('message', (msg) => {
        console.log(msg);
      })

    })
  }


}