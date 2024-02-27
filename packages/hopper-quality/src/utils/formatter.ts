const codeSnippet = require('skhon-code-snippet').default;
import { ResultItem, MessageItem } from '../type/eslint';
const marker = '↑';
export const formatter = (result: ResultItem[]) => {
  const output: any = [];
  result.forEach(r => {
    if (r.messages.length !== 0) {
      const code = r.source;
      const filePath = r.filePath;
      r.messages.forEach((m: MessageItem) => {
        const targetCode = codeSnippet(code, m.line, m.column, marker);
        output.push({
          targetCode,
          filePath,
          rule: m.ruleId,
          message: m.message
        });
      })
    }
  })
  return output;
}