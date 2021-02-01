(window.webpackJsonp=window.webpackJsonp||[]).push([[10,5],{11:function(e,a,t){"use strict";t.r(a),function(e){t.d(a,"default",(function(){return n}));var l,r,s,c=t(1);class n extends c.a{inited(){e.hub&&e.hub.fire&&e.hub.fire("changed",{level:0,children:[{level:2,title:"Prepare",hash:"prepare"},{level:2,title:"Dev",hash:"dev"},{level:2,title:"Build",hash:"build"}]})}}s={},(r="components")in(l=n)?Object.defineProperty(l,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):l[r]=s}.call(this,t(3))},36:function(e,a){e.exports=' <div class="content"><div class="markdown"><h1 id="%40sdoc%2Fcli"><a class="header-anchor" href="#%40sdoc%2Fcli">#</a> @sdoc/cli</h1> <blockquote> <p>Minimalistic San-powered static site generator.</p> </blockquote> <h2 id="prepare"><a class="header-anchor" href="#prepare">#</a> Prepare</h2> <pre class="language-text"><code class="language-text">$ npm i</code></pre> <h2 id="dev"><a class="header-anchor" href="#dev">#</a> Dev</h2> <p>First, run dev script:</p> <pre class="language-text"><code class="language-text">$ npm start</code></pre> <p>And then, open <a href="http://localhost:8888/">http://localhost:8888/</a></p> <h2 id="build"><a class="header-anchor" href="#build">#</a> Build</h2> <pre class="language-text"><code class="language-text">$ npm run build</code></pre> <p>Start static server at <code>dist</code></p> <pre class="language-text"><code class="language-text">$ type serve &gt;/dev/null 2&gt;&amp;1 || npm i -g serve\n$ serve dist -p 9999</code></pre> <p>Open <a href="http://localhost:9999/">http://localhost:9999/</a></p> </div></div> '},48:function(e,a,t){var l=t(0),r=t(36),s=t(11).default;e.exports=t(11),e.exports.default=l(s,r,[])}}]);