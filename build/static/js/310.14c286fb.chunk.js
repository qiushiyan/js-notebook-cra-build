(this["webpackJsonp@jscript-notebook/local-client"]=this["webpackJsonp@jscript-notebook/local-client"]||[]).push([[310],{431:function(e,a){!function(e){var a=/(?:\b[a-zA-Z]\w*|[|\\[\]])+/.source;e.languages.phpdoc=e.languages.extend("javadoclike",{parameter:{pattern:RegExp("(@(?:global|param|property(?:-read|-write)?|var)\\s+(?:"+a+"\\s+)?)\\$\\w+"),lookbehind:!0}}),e.languages.insertBefore("phpdoc","keyword",{"class-name":[{pattern:RegExp("(@(?:global|package|param|property(?:-read|-write)?|return|subpackage|throws|var)\\s+)"+a),lookbehind:!0,inside:{keyword:/\b(?:callback|resource|boolean|integer|double|object|string|array|false|float|mixed|bool|null|self|true|void|int)\b/,punctuation:/[|\\[\]()]/}}]}),e.languages.javadoclike.addSupport("php",e.languages.phpdoc)}(Prism)}}]);
//# sourceMappingURL=310.14c286fb.chunk.js.map