import DebugCheck from './libs/debug-check';
process.on('message', (msg: { files: string[] }) => {
  const { files } = msg;
  const debugCheck = new DebugCheck({ files });
  debugCheck.run();

})