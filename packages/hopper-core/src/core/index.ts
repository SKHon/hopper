import Util from './util';
import Analysis from './analysis';
const exec = async ({ target, exclude }) => {
  const ignores = exclude ? exclude.split(',') : [];
  const targetPath = target || './'
  const files = await Util.getFiles(targetPath, ignores);
  const analysis = new Analysis({ files });
  analysis.run();
}


export default exec;