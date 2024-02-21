/**
 * Copyright (c) 2021 ByteDance Inc. All Rights Reserved
 *
 * This source code is licensed under the Apache license.
 * See LICENSE file in the project root for license information.
 *
 * @file: [此处填写描述]
 *
 * @date: 2021-05-13 09:55:42
 * @author: 刘江虹(liujianghong@bytedance.com)
 */

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