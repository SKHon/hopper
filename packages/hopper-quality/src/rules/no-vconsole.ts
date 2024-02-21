/**
 * Copyright (c) 2021 ByteDance Inc. All Rights Reserved
 *
 * This source code is licensed under the Apache license.
 * See LICENSE file in the project root for license information.
 *
 * @file: [检测vConsole]
 *
 * @date: 2021-04-02 09:54:47
 * @author: 刘江虹(liujianghong@bytedance.com)
 */


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
            url: "https://code.byted.org/ecom/ecom_analysis_project/tree/master/packages/quality/src/rules/no-vconsole.ts"
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