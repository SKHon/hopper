import Util from './util';
const exec = async ({ target, exclude }) => {
  const files = await Util.getFiles(target);
  console.log(files)
}

export default exec;