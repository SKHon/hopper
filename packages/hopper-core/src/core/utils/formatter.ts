import { QualityOutputItem } from '../types'
export const qualityFormatter = (qualityOutput: QualityOutputItem[]) => {
  const result: any = [];
  qualityOutput.forEach(output => {
    result.push([output.rule, output.message, output.filePath, output.targetCode]);
  })
  return result;

}