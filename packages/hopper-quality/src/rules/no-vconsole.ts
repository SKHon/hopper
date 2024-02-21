

import { Context, ImportDeclaration, NewExpression } from '../type/rules'
//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "problem",

        docs: {
            description: "disallow the use of `vConsole`",
            category: "Possible Errors",
            recommended: true,
            // url: ""
        },

        fixable: null,
        schema: [],

        messages: {
            noVconsole: "Unexpected 'vConsole' statement."
        }
    },

    create(context: Context) {
        let vconsole = ''
        return {
            ImportDeclaration: function (node: ImportDeclaration) {
                let vcName = node?.source?.value === 'vconsole' ? node?.specifiers[0]?.local.name : '';
                if (vcName) {
                    vconsole = vcName;
                }
            },
            NewExpression: function (node: NewExpression) {
                if (node?.callee?.name === vconsole) {
                    context.report({
                        node,
                        messageId: "noVconsole",
                        data: { fn: node.callee.name }
                    });
                }
            }
        }
    }
}