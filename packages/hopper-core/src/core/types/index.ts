export interface Options {
  files: string[];
}

export interface QualityOutputItem {
  targetCode: string;
  filePath: string;
  rule: string;
  message: string;
}