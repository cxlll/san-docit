!function(n){function s(s){for(var t,e,c=s[0],l=s[1],r=s[2],d=0,i=[];d<c.length;d++)e=c[d],Object.prototype.hasOwnProperty.call(o,e)&&o[e]&&i.push(o[e][0]),o[e]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(n[t]=l[t]);for(u&&u(s);i.length;)i.shift()();return p.push.apply(p,r||[]),a()}function a(){for(var n,s=0;s<p.length;s++){for(var a=p[s],t=!0,c=1;c<a.length;c++){var l=a[c];0!==o[l]&&(t=!1)}t&&(p.splice(s--,1),n=e(e.s=a[0]))}return n}var t={},o={8:0,13:0},p=[];function e(s){if(t[s])return t[s].exports;var a=t[s]={i:s,l:!1,exports:{}};return n[s].call(a.exports,a,a.exports,e),a.l=!0,a.exports}e.m=n,e.c=t,e.d=function(n,s,a){e.o(n,s)||Object.defineProperty(n,s,{enumerable:!0,get:a})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,s){if(1&s&&(n=e(n)),8&s)return n;if(4&s&&"object"==typeof n&&n&&n.__esModule)return n;var a=Object.create(null);if(e.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),2&s&&"string"!=typeof n)for(var t in n)e.d(a,t,function(s){return n[s]}.bind(null,t));return a},e.n=function(n){var s=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(s,"a",s),s},e.o=function(n,s){return Object.prototype.hasOwnProperty.call(n,s)},e.p="/san-docit/";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=s,c=c.slice();for(var r=0;r<c.length;r++)s(c[r]);var u=l;p.push([57,0]),a()}({21:function(n,s,a){"use strict";a.r(s),function(n){a.d(s,"default",(function(){return c}));var t,o,p,e=a(0);class c extends e.a{inited(){n.hub&&n.hub.fire&&n.hub.fire("changed",{level:0,children:[{level:2,title:"exportType 参数",hash:"exporttype-%E5%8F%82%E6%95%B0"},{level:2,title:"index 参数",hash:"index-%E5%8F%82%E6%95%B0"}]})}}p={},(o="components")in(t=c)?Object.defineProperty(t,o,{value:p,enumerable:!0,configurable:!0,writable:!0}):t[o]=p}.call(this,a(3))},47:function(n,s){n.exports=' <div class="content"><div class="markdown"><h1 id="markdown-%E9%AB%98%E7%BA%A7%E5%8A%9F%E8%83%BD">Markdown 高级功能</h1> <h2 id="exporttype-%E5%8F%82%E6%95%B0">exportType 参数</h2> <p>SDoc 中的 <code>markdown-loader</code> 对 md 文件支持三种类型的导出，以支持在同一个MD文件中，导出文档 <code>codebox</code> 和 <code>markdown</code> 两部分内容组合。</p> <p>使用方式通过md文件 <code>exportType</code> 的query参数来决定：</p> <ul> <li><code>exportType=markdown</code>：导出全部的 <code>markdown</code> 内容，不包括 <code>codebox</code> 标签内容；</li> <li><code>exportType=component</code>：只导出预览的 <code>codebox</code> 标签内容，不包括 <code>markdown</code> 内容；</li> <li>不加参数：导出全部 <code>markdown</code> 和 <code>codebox</code> 内容；</li> </ul> <p>如下示例代码展示三种不同的导出情况。</p> <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> san <span class="token keyword">from</span> <span class="token string">\'san\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> codeboxComponent <span class="token keyword">from</span> <span class="token string">\'./codebox.md?exportType=component\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> codeboxMd <span class="token keyword">from</span> <span class="token string">\'./codebox.md?exportType=markdown\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> codeboxAll <span class="token keyword">from</span> <span class="token string">\'./codebox.md\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> san<span class="token punctuation">.</span><span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;div>\n        &lt;h1>Markdown 高级配置&lt;/h1>\n        &lt;codebox-component/>&lt;hr>\n        &lt;codebox-md/>&lt;hr>\n        &lt;codebox-all/>\n    &lt;/div></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token string">\'codebox-component\'</span><span class="token operator">:</span> codeboxComponent<span class="token punctuation">,</span>\n        <span class="token string">\'codebox-md\'</span><span class="token operator">:</span> codeboxMd<span class="token punctuation">,</span>\n        <span class="token string">\'codebox-all\'</span><span class="token operator">:</span> codeboxAll\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> <h2 id="index-%E5%8F%82%E6%95%B0">index 参数</h2> <p>Markdown 存在多个 <code>codebox</code> 时，支持导出指定的 <code>index</code>。</p> <p>存在index时，默认导出类型（<code>exportType</code>）是 <code>component</code>，可省略。</p> <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>codebox-demo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>来自`?exportType=component&amp;index=0`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>codebox-component1</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>来自`?exportType=component&amp;index=1`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>codebox-component2</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n    <span class="token keyword">import</span> codeboxComponent1 <span class="token keyword">from</span> <span class="token string">\'./codebox.md?exportType=component&amp;index=0\'</span><span class="token punctuation">;</span>\n    <span class="token keyword">import</span> codeboxComponent2 <span class="token keyword">from</span> <span class="token string">\'./codebox.md?exportType=component&amp;index=1\'</span><span class="token punctuation">;</span>\n    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n        components<span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token string">\'codebox-component1\'</span><span class="token operator">:</span> codeboxComponent1<span class="token punctuation">,</span>\n            <span class="token string">\'codebox-component2\'</span><span class="token operator">:</span> codeboxComponent2\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code></pre> </div></div> '},57:function(n,s,a){var t=a(1),o=a(47),p=a(21).default;n.exports=a(21),n.exports.default=t(p,o,[])}});