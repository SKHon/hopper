

export interface ResultItem {
  filePath: string;
  messages: Array<MessageItem>;
  errorCount: number;
  warningCount: number;
  fixableErrorCount: number;
  fixableWarningCount: number;
  source?: string;
}

export interface MessageItem {
  ruleId: string,
  severity: number,
  message: string,
  line: number,
  column: number,
  nodeType: string,
  messageId: string,
  endLine?: number,
  endColumn?: number,
  fix?: any
}