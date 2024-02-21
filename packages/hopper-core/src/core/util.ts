import path from 'path';
import fs from 'fs';
import { defaultConfig } from '../config';
import { glob } from 'glob'
class Util {

  // 获取target路径下的所有文件路径
  static async getFiles(target: string, ignores: string[]) {

    if (target.includes(',')) {
      let files: string[] = []
      const paths = target.split(',');
      for (let i = 0; i < paths.length; i++) {
        const curFiles = await this.getFilesSingle(paths[i], ignores);
        files = curFiles.concat(files);
      }
      return files;
    } else {
      const files = await this.getFilesSingle(target, ignores);
      return files;
    }
  }

  static async getFilesSingle(target: string, ignores: string[]) {
    try {
      const dirPath = path.resolve(process.cwd(), target);
      if (fs.statSync(dirPath).isDirectory()) {
        const ignore = this.arrayMerge(defaultConfig.exclude, ignores);
        const jsfiles = await glob(`${dirPath}/**/*.{js,ts,tsx,jsx}`, { ignore })
        return jsfiles;
      }
      return [dirPath];
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  static arrayMerge(source: string[], target: string[]) {
    return Array.from(new Set([...source, ...target]));
  }

}

export default Util;