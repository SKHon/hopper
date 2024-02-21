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
