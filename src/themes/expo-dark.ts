import { darkTheme, palette } from '@expo/styleguide-base';

import { makeTheme } from '../blueprint';

export default makeTheme({
  colors: {
    'activityBar.background': darkTheme.background.subtle,
    'editor.background': darkTheme.background.default,
    'editorGroupHeader.tabsBackground': darkTheme.background.subtle,
    'sideBar.background': darkTheme.background.screen,
    'tab.inactiveBackground': darkTheme.background.element,
  },
  tokenColors: {
    'comment.line': darkTheme.text.tertiary,
    'comment.block': darkTheme.text.tertiary,

    'constant.numeric': darkTheme.text.warning,
    'constant.language': palette.dark.pink10,
    'constant.other.variable': palette.dark.green11,

    'editorBracketMatch.border': darkTheme.text.quaternary,

    'entity.name.tag': palette.dark.orange10,
    'entity.name.type': palette.dark.green11,
    'entity.name.type.class': palette.dark.blue11,
    'entity.name.type.module': palette.dark.blue11,
    'entity.other': palette.dark.blue11,
    'entity.other.attribute-name': palette.dark.red10,
    'entity.scope.name': palette.dark.blue10,

    'keyword.control': palette.dark.purple11,
    'keyword.control.flow': palette.dark.pink10,
    'keyword.control.new': palette.dark.orange10,
    'keyword.other': palette.dark.pink10,
    'keyword.operator': darkTheme.text.tertiary,
    'keyword.operator.assignment': darkTheme.text.quaternary,
    'keyword.operator.expression.keyof': palette.dark.pink10,
    'keyword.operator.logical': darkTheme.text.tertiary,
    'keyword.operator.rest': darkTheme.text.quaternary,
    'keyword.operator.spread': darkTheme.text.quaternary,
    'keyword.operator.type.annotation': darkTheme.text.quaternary,
    'keyword.operator.ternary': darkTheme.text.tertiary,

    'meta.brace': darkTheme.text.quaternary,
    'meta.definition.variable': darkTheme.text.default,
    //
    'meta.definition.function': palette.dark.blue11,
    'meta.function-call': palette.dark.purple11,
    'meta.import': darkTheme.text.default,
    'meta.object-literal.key': darkTheme.text.default,

    'punctuation.accessor': darkTheme.text.quaternary,
    'punctuation.bracket': darkTheme.text.quaternary,
    'punctuation.definition': darkTheme.text.quaternary,
    'punctuation.definition.annotation': darkTheme.text.warning,
    'punctuation.definition.block': darkTheme.text.quaternary,
    'punctuation.definition.parameters': darkTheme.text.quaternary,
    'punctuation.definition.string': darkTheme.text.quaternary,
    'punctuation.section': darkTheme.text.quaternary,
    'punctuation.separator': darkTheme.text.quaternary,
    'punctuation.separator.dot-access': darkTheme.text.quaternary,
    'punctuation.terminator.statement': darkTheme.text.quaternary,

    'storage.modifier': palette.dark.red10,
    'storage.modifier.import': darkTheme.text.secondary,
    'storage.type': palette.dark.pink10,
    'storage.type.annotation': darkTheme.text.warning,
    'storage.type.generic': palette.dark.blue10,
    'storage.type.function.arrow': darkTheme.text.quaternary,

    'string.quoted': palette.dark.yellow11,
    'string.template': palette.dark.yellow11,

    'support.type.primitive': palette.dark.orange10,
    'support.type.property-name': palette.dark.orange10,
    'support.type.builtin': palette.dark.pink10,

    'variable.object.property': darkTheme.text.default,
    'variable.other': darkTheme.text.default,
    'variable.other.constant': palette.dark.blue11,
    'variable.other.macro.argument': palette.dark.pink10,
    'variable.parameter.probably': palette.dark.blue11,
    'variable.language': palette.dark.pink10,

    // Language-specific overwrites

    'source.ignore': {},

    'source.java': {
      'keyword.control.new': palette.dark.red10,
      'storage.modifier': palette.dark.orange11,
      'storage.modifier.extends': palette.dark.pink10,
      'storage.modifier.implements': palette.dark.pink10,
      'storage.type': palette.dark.green11,
      'storage.type.primitive': palette.dark.pink10,
    },

    'source.js': {},

    'source.jsx': {},

    'source.json': {},

    'source.kotlin': {
      'keyword.control.new': palette.dark.red10,
      'storage.modifier': palette.dark.orange11,
      'storage.type': palette.dark.green11,
    },

    'text.html.markdown': {
      'fenced_code.block.language': palette.dark.purple11,
      'markup.bold': palette.dark.orange11,
      'markup.inline.raw.string': palette.dark.yellow11,
      'markup.underline.link': palette.dark.blue11,
      'meta.paragraph': darkTheme.text.default,
      'punctuation.definition.heading.markdown': palette.dark.red10,
      'string.other.link.title': palette.dark.green11,
    },

    'source.objc': {
      'entity.name.function': palette.dark.blue11,
      'entity.name.function.preprocessor': palette.dark.orange11,
      'keyword.other.property.attribute': palette.dark.orange11,
      'meta.bracketed': palette.dark.pink10,
      'meta.function-call': darkTheme.text.default,
      'storage.type': palette.dark.red10,
      'support.class.cocoa': palette.dark.green11,
      'support.other.protocol': palette.dark.orange11,
    },

    'source.ruby': {
      'constant.other.symbol.hashkey': palette.dark.green11,
      'entity.name.function': palette.dark.blue11,
      'support.class': palette.dark.orange11,
      'variable.parameter.function': palette.dark.green11,
    },

    'source.shell': {
      'entity.name.command': palette.dark.blue11,
      'support.function.builtin': palette.dark.pink10,
    },

    'source.swift': {
      'entity.name.type': palette.dark.blue11,
      'keyword.control.new': palette.dark.red10,
      'meta.parameter-clause': palette.dark.green11,
      'meta.function-call': palette.dark.blue11,
      'meta.definition.function.body': darkTheme.text.default,
      'meta.definition.type.body': darkTheme.text.default,
      'meta.inheritance-clause': palette.dark.orange11,
      'punctuation.definition.attribute': palette.dark.orange11,
      'storage.modifier': palette.dark.orange11,
      'support.type': palette.dark.green11,
    },

    'source.ts': {
      'punctuation.definition.block.tag.jsdoc': palette.dark.orange11,
      'storage.type.class.jsdoc': palette.dark.orange11,
    },

    'source.tsx': {
      'punctuation.definition.block.tag.jsdoc': palette.dark.orange11,
      'storage.type.class.jsdoc': palette.dark.orange11,
    },

    'text.xml': {
      'entity.other.attribute-name.localname': palette.dark.blue11,
    },

    'source.yaml': {},
  },
});
