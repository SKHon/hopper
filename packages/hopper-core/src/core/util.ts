import path from 'path';
import fs from 'fs';
import { glob, globSync, globStream, globStreamSync, Glob } from 'glob'
class Util {

  // 获取target路径下的所有文件路径
  static async getFiles(target: string) {

    if (target.includes(',')) {
      let files: string[] = []
      const paths = target.split(',');
      for (let i = 0; i < paths.length; i++) {
        const curFiles = await this.getFilesSingle(paths[i]);
        files = curFiles.concat(files);
      }
      return files;
    } else {
      const files = await this.getFilesSingle(target);
      return files;
    }
  }

  static async getFilesSingle(target: string) {
    try {
      const dirPath = path.resolve(process.cwd(), target);
      if (fs.statSync(dirPath).isDirectory()) {
        const jsfiles = await glob(`${dirPath}/**/*.{js,ts,tsx,jsx}`, { ignore: 'node_modules/**' })
        return jsfiles;
      }
      return [dirPath];
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}

export default Util;