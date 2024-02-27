import DebugCheck from './libs/debug-check';
process.on('message', async (msg: { files: string[] }) => {
  const { files } = msg;
  const debugCheck = new DebugCheck({ files });
  const result = await debugCheck.run();
  process?.send?.({ result });

})