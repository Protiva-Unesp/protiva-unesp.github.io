"use strict";(self.webpackChunkprotiva=self.webpackChunkprotiva||[]).push([[707],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,l=new RegExp("^"+s.source),c=new RegExp(s.source+n.source,"gu"),i=new RegExp("\\d+"+n.source,"gu"),o=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),o=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?o(e):s(e);return e!==s(e)&&(e=((e,r,n)=>{let s=!1,l=!1,c=!1;for(let i=0;i<e.length;i++){const o=e[i];s&&t.test(o)?(e=e.slice(0,i)+"-"+e.slice(i),s=!1,c=l,l=!0,i++):l&&c&&a.test(o)?(e=e.slice(0,i-1)+"-"+e.slice(i-1),c=l,l=!1,s=!0):(s=r(o)===o&&n(o)!==o,c=l,l=n(o)===o&&r(o)!==o)}return e})(e,s,o)),e=e.replace(l,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,s):s(e),n.pascalCase&&(e=o(e.charAt(0))+e.slice(1)),((e,t)=>(c.lastIndex=0,i.lastIndex=0,e.replace(c,((e,a)=>t(a))).replace(i,(e=>t(e)))))(e,o)};e.exports=o,e.exports.default=o},8032:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return x},P:function(){return v},S:function(){return U},_:function(){return c},a:function(){return l},b:function(){return u},g:function(){return d},h:function(){return i}});var r=a(7294),n=(a(3204),a(5697)),s=a.n(n);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l.apply(this,arguments)}function c(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}const i=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function o(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function u(e,t,a,r,n){return void 0===n&&(n={}),l({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:l({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,s,c,i){const o={};s&&(o.backgroundColor=s,"fixed"===a?(o.width=r,o.height=n,o.backgroundColor=s,o.position="relative"):("constrained"===a||"fullWidth"===a)&&(o.position="absolute",o.top=0,o.left=0,o.bottom=0,o.right=0)),c&&(o.objectFit=c),i&&(o.objectPosition=i);const u=l({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:l({opacity:t?0:1,transition:"opacity 500ms linear"},o)});return u}const m=["children"],p=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${n}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=c(e,m);return r.createElement(r.Fragment,null,r.createElement(p,l({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],w=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:i}=e,o=c(e,f);return r.createElement("img",l({},o,{decoding:"async",loading:n,src:i?t:void 0,"data-src":i?void 0:t,srcSet:i?a:void 0,"data-srcset":i?void 0:a,alt:s}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=c(e,h);const i=s.sizes||(null==t?void 0:t.sizes),o=r.createElement(w,l({},s,t,{sizes:i,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:`${t}-${s}-${a}`,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:i})})),o):o};var E;w.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},b.displayName="Picture",b.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const y=["fallback"],v=function(e){let{fallback:t}=e,a=c(e,y);return t?r.createElement(b,l({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",l({},a))};v.displayName="Placeholder",v.propTypes={fallback:n.string,sources:null==(E=b.propTypes)?void 0:E.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const x=function(e){return r.createElement(r.Fragment,null,r.createElement(b,l({},e)),r.createElement("noscript",null,r.createElement(b,l({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=b.propTypes;const N=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],k=["style","className"],S=e=>e.replace(/\n/g,""),L=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),l=3;l<r;l++)n[l-3]=arguments[l];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},C={image:s().object.isRequired,alt:L},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],I=["style","className"],O=new Set;let P,$;const A=function(e){let{as:t="div",image:n,style:s,backgroundColor:u,className:d,class:m,onStartLoad:p,onLoad:g,onError:f}=e,h=c(e,T);const{width:w,height:b,layout:E}=n,y=o(w,b,E),{style:v,className:x}=y,N=c(y,I),k=(0,r.useRef)(),S=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(d=m);const L=function(e,t,a){let r="";return"fullWidth"===e&&(r=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(r=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),r}(E,w,b);return(0,r.useEffect)((()=>{P||(P=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return $=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=k.current.querySelector("[data-gatsby-image-ssr]");if(e&&i())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void O.add(S);if($&&O.has(S))return;let t,r;return P.then((e=>{let{renderImageToString:a,swapPlaceholderImage:c}=e;k.current&&(k.current.innerHTML=a(l({isLoading:!0,isLoaded:O.has(S),image:n},h)),O.has(S)||(t=requestAnimationFrame((()=>{k.current&&(r=c(k.current,S,O,s,p,g,f))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{O.has(S)&&$&&(k.current.innerHTML=$(l({isLoading:O.has(S),isLoaded:O.has(S),image:n},h)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,r.createElement)(t,l({},N,{style:l({},v,s,{backgroundColor:u}),className:`${x}${d?` ${d}`:""}`,ref:k,dangerouslySetInnerHTML:{__html:L},suppressHydrationWarning:!0}))},R=(0,r.memo)((function(e){return e.image?(0,r.createElement)(A,e):null}));R.propTypes=C,R.displayName="GatsbyImage";const j=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function _(e){return function(t){let{src:a,__imageData:n,__error:s}=t,i=c(t,j);return s&&console.warn(s),n?r.createElement(e,l({image:n},i)):(console.warn("Image not loaded",a),null)}}const M=_((function(e){let{as:t="div",className:a,class:n,style:s,image:i,loading:m="lazy",imgClassName:p,imgStyle:f,backgroundColor:h,objectFit:w,objectPosition:b}=e,E=c(e,N);if(!i)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),f=l({objectFit:w,objectPosition:b,backgroundColor:h},f);const{width:y,height:L,layout:C,images:T,placeholder:I,backgroundColor:O}=i,P=o(y,L,C),{style:$,className:A}=P,R=c(P,k),j={fallback:void 0,sources:[]};return T.fallback&&(j.fallback=l({},T.fallback,{srcSet:T.fallback.srcSet?S(T.fallback.srcSet):void 0})),T.sources&&(j.sources=T.sources.map((e=>l({},e,{srcSet:S(e.srcSet)})))),r.createElement(t,l({},R,{style:l({},$,s,{backgroundColor:h}),className:`${A}${a?` ${a}`:""}`}),r.createElement(g,{layout:C,width:y,height:L},r.createElement(v,l({},d(I,!1,C,y,L,O,w,b))),r.createElement(x,l({"data-gatsby-image-ssr":"",className:p},E,u("eager"===m,!1,j,m,f)))))})),z=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},q=new Set(["fixed","fullWidth","constrained"]),F={src:s().string.isRequired,alt:L,width:z,height:z,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!q.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};M.displayName="StaticImage",M.propTypes=F;const U=_(R);U.displayName="StaticImage",U.propTypes=F},2268:function(e,t,a){a.d(t,{Z:function(){return l}});var r=a(7294),n="footer-module--footer-column--bc482",s=a(8032);var l=()=>r.createElement("footer",{className:"footer-module--footer--a2fe4"},r.createElement("div",{className:"footer-module--footer-row--e766a"},r.createElement("div",{className:n},r.createElement("h2",null,"FUNDAÇÕES"),r.createElement("ul",null,r.createElement("li",null,r.createElement("a",{href:"https://www.editoraunesp.com.br/"},"Editora Unesp")),r.createElement("li",null,r.createElement("a",{href:"https://www.fundunesp.org.br/"},"Fundunesp")),r.createElement("li",null,r.createElement("a",{href:"https://www.vunesp.com.br/"},"Fundação Vunesp")))),r.createElement("div",{className:n},r.createElement("h2",null,"GOVERNO"),r.createElement("ul",null,r.createElement("li",null,r.createElement("a",{href:"https://www.saopaulo.sp.gov.br/"},"Governo de São Paulo")),r.createElement("li",null,r.createElement("a",{href:"https://www.cruesp.sp.gov.br/"},"Conselhos de Reitores")),r.createElement("li",null,r.createElement("a",{href:"https://unesp.br/transparencia/"},"Transparência Unesp")))),r.createElement("div",{className:n},r.createElement("h2",null,"SISTEMAS"),r.createElement("ul",null,r.createElement("li",null,r.createElement("a",{href:"https://sistemas.unesp.br/"},"Sistemas Online")),r.createElement("li",null,r.createElement("a",{href:"https://www2.unesp.br/eduroam"},"EDUROAM")),r.createElement("li",null,r.createElement("a",{href:"https://www2.unesp.br/ai/grupos-de-trabalho/redes-de-computadores/conteudos/videoconferencia/"},"Videoconferência")),r.createElement("li",null,r.createElement("a",{href:"https://www2.unesp.br/vpn"},"VPN")),r.createElement("li",null,r.createElement("a",{href:"https://email.unesp.br/"},"Webmail")))),r.createElement("div",{className:n},r.createElement("h2",null,"SAÚDE"),r.createElement("ul",null,r.createElement("li",null,r.createElement("a",{href:"https://www.unesp.br/unespsaude/"},"Unesp Saúde")),r.createElement("li",null,r.createElement("a",{href:"https://www.ecaresentinela.com.br/"},"e-Care Sentinela")),r.createElement("li",null,r.createElement("a",{href:"https://www.unesp.br/numis"},"NUMIS")))),r.createElement("div",{className:n},r.createElement("h2",null,"INFORMAÇÕES"),r.createElement("ul",null,r.createElement("li",null,r.createElement("a",{href:"https://www2.unesp.br/secgeral/manuais/legislacao-unesp/"},"Legislação Unesp")),r.createElement("li",null,r.createElement("a",{href:"https://www2.unesp.br/secgeral/diplomas/revalidacao/"},"Revalidação de Diplomas")),r.createElement("li",null,r.createElement("a",{href:"https://www2.unesp.br/secgeral/diplomas/reconhecimento/"},"Reconhecimento de Diplomas")),r.createElement("li",null,r.createElement("a",{href:"#"},"Localização")),r.createElement("li",null,r.createElement("a",{href:"https://www.unesp.br/ouvidoria"},"Ouvidoria")),r.createElement("li",null,r.createElement("a",{href:"https://www2.unesp.br/politica-de-uso"},"Políticas de Uso"))))),r.createElement("div",{className:"footer-module--imageContainer--0d0f1"},r.createElement(s.S,{src:"../images/unesp.svg",alt:"Unesp Logo",width:150,className:"footer-module--centerImage--091ec",__imageData:a(662)})),r.createElement("div",{className:"footer-module--footer-copy--4cd61"},r.createElement("p",null,(new Date).getFullYear()," Protiva")))},7087:function(e,t,a){var r=a(7294),n=a(1883),s=a(8032);t.Z=()=>{const{0:e,1:t}=(0,r.useState)(!1);return r.createElement("nav",{className:"bg-white shadow-lg"},r.createElement("div",{className:"max-w-6xl mx-auto px-4"},r.createElement("div",{className:"flex justify-between items-center py-4"},r.createElement("div",{className:"flex items-center"},r.createElement(s.S,{src:"../images/icon.png",alt:"ProTiva Logo",height:30,className:"mr-2",__imageData:a(9167)}),r.createElement("div",{className:"flex-shrink-0"},r.createElement(n.Link,{to:"/",className:"text-2xl font-bold text-gray-900"},"ProTiva"))),r.createElement("div",{className:"hidden md:flex space-x-8"},r.createElement(n.Link,{to:"/aprender",className:"text-gray-700 hover:text-blue-600"},"Aprender"),r.createElement(n.Link,{to:"/provas-anteriores",className:"text-gray-700 hover:text-blue-600"},"Provas Anteriores"),r.createElement(n.Link,{to:"/introducao-a-programacao",className:"text-gray-700 hover:text-blue-600"},"Introdução à Programação"),r.createElement(n.Link,{to:"/sobre",className:"text-gray-700 hover:text-blue-600"},"Sobre Nós")),r.createElement("div",{className:"md:hidden"},r.createElement("button",{onClick:()=>{t(!e)},className:"text-gray-700 focus:outline-none"},r.createElement("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16m-7 6h7"}))))),e&&r.createElement("div",{className:"md:hidden mt-2"},r.createElement(n.Link,{to:"/aprender/",className:"block py-2 text-gray-700 hover:bg-gray-100"},"Aprender"),r.createElement(n.Link,{to:"/provas-anteriores",className:"block py-2 text-gray-700 hover:bg-gray-100"},"Provas Anteriores"),r.createElement(n.Link,{to:"/introducao-a-programacao",className:"block py-2 text-gray-700 hover:bg-gray-100"},"Introdução à Programação"),r.createElement(n.Link,{to:"/sobre",className:"block py-2 text-gray-700 hover:bg-gray-100"},"Sobre"))))}},4001:function(e,t,a){var r=a(7294),n=a(1883);t.Z=e=>{let{title:t}=e;const a=(0,n.useStaticQuery)("3159585216");return r.createElement("title",null,t," | ",a.site.siteMetadata.title)}},662:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/c832fac18365f36a9c18f2aa9cc5cfdb/932af/unesp.svg","srcSet":"/static/c832fac18365f36a9c18f2aa9cc5cfdb/2e1c6/unesp.svg 38w,\\n/static/c832fac18365f36a9c18f2aa9cc5cfdb/39e6a/unesp.svg 75w,\\n/static/c832fac18365f36a9c18f2aa9cc5cfdb/932af/unesp.svg 150w,\\n/static/c832fac18365f36a9c18f2aa9cc5cfdb/6badc/unesp.svg 300w","sizes":"(min-width: 150px) 150px, 100vw"},"sources":[{"srcSet":"/static/c832fac18365f36a9c18f2aa9cc5cfdb/dc2ef/unesp.webp 38w,\\n/static/c832fac18365f36a9c18f2aa9cc5cfdb/ea9cf/unesp.webp 75w,\\n/static/c832fac18365f36a9c18f2aa9cc5cfdb/1a4e6/unesp.webp 150w,\\n/static/c832fac18365f36a9c18f2aa9cc5cfdb/94045/unesp.webp 300w","type":"image/webp","sizes":"(min-width: 150px) 150px, 100vw"}]},"width":150,"height":48}')},9167:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/6cf97c1764a22841cf883c6114c7a00f/5cf0d/icon.png","srcSet":"/static/6cf97c1764a22841cf883c6114c7a00f/27368/icon.png 7w,\\n/static/6cf97c1764a22841cf883c6114c7a00f/2d082/icon.png 14w,\\n/static/6cf97c1764a22841cf883c6114c7a00f/5cf0d/icon.png 27w,\\n/static/6cf97c1764a22841cf883c6114c7a00f/e3f4c/icon.png 54w","sizes":"(min-width: 27px) 27px, 100vw"},"sources":[{"srcSet":"/static/6cf97c1764a22841cf883c6114c7a00f/12c0c/icon.webp 7w,\\n/static/6cf97c1764a22841cf883c6114c7a00f/6ccd9/icon.webp 14w,\\n/static/6cf97c1764a22841cf883c6114c7a00f/97ffd/icon.webp 27w,\\n/static/6cf97c1764a22841cf883c6114c7a00f/13828/icon.webp 54w","type":"image/webp","sizes":"(min-width: 27px) 27px, 100vw"}]},"width":27,"height":30}')}}]);
//# sourceMappingURL=45e039a793627c24ed162aede91ef4b45dfeee8e-49d8d39d76800c4d81be.js.map