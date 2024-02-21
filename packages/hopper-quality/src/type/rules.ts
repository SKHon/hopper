/**
 * Copyright (c) 2021 ByteDance Inc. All Rights Reserved
 *
 * This source code is licensed under the Apache license.
 * See LICENSE file in the project root for license information.
 *
 * @file: [此处填写描述]
 *
 * @date: 2021-04-02 14:13:07
 * @author: 刘江虹(liujianghong@bytedance.com)
 */

export interface Context {
  id: string,
  options: Array<any>,
  report: Function,
  getSourceCode: any,
  getFilename: () => string,
}

export interface ImportDeclaration {
  type: string,
  start: number,
  end: number,
  loc: object,
  specifiers: Array<any>,
  importKind: string,
  source: any,
  range: Array<object>
}
export interface CallExpression {
  type: string;
  start: number;
  end: number;
  callee: any;
  arguments: Array<any>;
  optional: boolean;
}
export interface NewExpression {
  type: string,
  start: number,
  end: number,
  loc: any,
  callee: any,
  arguments: Array<any>,
  range: Array<any>
}

export interface ExpressionStatement {
  type: string;
  expression: {
    left?: {
      object?: {
        object?: {
          name: string;
        },
        property?: {
          name: string;
        }
      },
      property?: {

      }
    }

  };
  range: number[];
}
