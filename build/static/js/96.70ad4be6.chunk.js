(this["webpackJsonp@jscript-notebook/local-client"]=this["webpackJsonp@jscript-notebook/local-client"]||[]).push([[96],{217:function(e,n){!function(e){e.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d+.*$/m]};var n={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys(n).forEach((function(i){var t=n[i],s=[];/^\w+$/.test(i)||s.push(/\w+/.exec(i)[0]),"diff"===i&&s.push("bold"),e.languages.diff[i]={pattern:RegExp("^(?:["+t+"].*(?:\r\n?|\n|(?![\\s\\S])))+","m"),alias:s,inside:{line:{pattern:/(.)(?=[\s\S]).*(?:\r\n?|\n)?/,lookbehind:!0},prefix:{pattern:/[\s\S]/,alias:/\w+/.exec(i)[0]}}}})),Object.defineProperty(e.languages.diff,"PREFIXES",{value:n})}(Prism)}}]);
//# sourceMappingURL=96.70ad4be6.chunk.js.map