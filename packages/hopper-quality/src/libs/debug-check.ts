const CLIEngine = require("eslint").CLIEngine;
export default class DebugCheck {

  private rules = {
    'no-console': 'error',
    'no-alert': 'error',
    'no-debugger': 'error',
    'no-vconsole': 'error'
  }
  private files: string[];

  constructor(options: { files: string[] }) {
    this.files = options.files;
  }

  private getCli(rules: object) {
    return new CLIEngine({
      cwd: __dirname,
      useEslintrc: false,
      allowInlineConfig: false,
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        }
      },
      rulePaths: ['../rules'],
      rules
    });
  }

  public async run() {

    const res = await this.getCli(this.rules).executeOnFiles(this.files);
    console.log(res);
  }
}