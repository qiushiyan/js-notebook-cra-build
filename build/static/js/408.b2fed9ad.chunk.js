(this["webpackJsonp@jscript-notebook/local-client"]=this["webpackJsonp@jscript-notebook/local-client"]||[]).push([[408],{529:function(t,e){!function(t){function e(t,e,n){return{pattern:RegExp("<#"+t+"[\\s\\S]*?#>"),alias:"block",inside:{delimiter:{pattern:RegExp("^<#"+t+"|#>$"),alias:"important"},content:{pattern:/[\s\S]+/,inside:e,alias:n}}}}t.languages["t4-templating"]=Object.defineProperty({},"createT4",{value:function(n){var a=t.languages[n],i="language-"+n;return{block:{pattern:/<#[\s\S]+?#>/,inside:{directive:e("@",{"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/,inside:{punctuation:/^=|^["']|["']$/}},keyword:/\w+(?=\s)/,"attr-name":/\w+/}),expression:e("=",a,i),"class-feature":e("\\+",a,i),standard:e("",a,i)}}}}})}(Prism)}}]);
//# sourceMappingURL=408.b2fed9ad.chunk.js.map