(this["webpackJsonpapplied-statistics"]=this["webpackJsonpapplied-statistics"]||[]).push([[0],{227:function(e,a,t){},231:function(e,a,t){},232:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),u=t.n(l),s=t(3),i=t(4),c=t(6),o=t(5),m=t(7),p=t(29),b=t(22),h=t(39),v=function(e){function a(e){var t;Object(s.a)(this,a),(t=Object(c.a)(this,Object(o.a)(a).call(this,e))).weekName=void 0,t.className=void 0,t.weekClassName=void 0;var n=["Week"];return t.className&&(Array.isArray(t.className)?n.push.apply(n,Object(b.a)(t.className)):n.push(t.className)),t.weekClassName=n.join(" "),t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:this.weekClassName},r.a.createElement(h.Panel,{header:this.weekName,toggleable:!0,collapsed:!0},this.renderContent()))}}]),a}(r.a.Component),d=t(9),f=t.n(d),E=t(2),O=t(1),g=t(89),y=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return this.props.loading?this.renderLoading():this.renderContent()}},{key:"renderLoading",value:function(){var e=this.props,a=e.progress,t=e.minProgress,n=e.maxProgress;return r.a.createElement(g.ProgressBar,{mode:a?"determinate":"indeterminate",value:"number"===typeof a?(a-t)/(n-t):0})}},{key:"renderContent",value:function(){return this.props.children}}]),a}(r.a.Component);y.defaultProps={loading:!1,minProgress:0,maxProgress:100};var k,N=t(17),j=t.n(N),I=t(23),C=t.n(I),x=function(e){function a(e){var t;Object(s.a)(this,a),(t=Object(c.a)(this,Object(o.a)(a).call(this,e))).className=void 0,t.taskClassName=void 0,t.answerPromise=void 0,t.state={};var n=["Task"];return t.className&&(Array.isArray(t.className)?n.push.apply(n,Object(b.a)(t.className)):n.push(t.className)),t.taskClassName=n.join(" "),t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,a,t){var n=this;!j()(C()(this.state,"answer"),C()(a,"answer"))&&this.checkParameters()&&function(){var e,a;f.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.answerPromise=n.renderAnswer(),n.setState(Object(E.a)({},n.state,{answer:void 0})),t.next=4,f.a.awrap(e);case 4:a=t.sent,n.answerPromise===e&&n.setState(Object(E.a)({},n.state,{answer:a}));case 6:case"end":return t.stop()}}))}()}},{key:"render",value:function(){return r.a.createElement("div",{className:this.taskClassName},this.renderParameters(),this.checkParameters()&&r.a.createElement(r.a.Fragment,null,r.a.createElement("hr",null),this.renderLoading()))}},{key:"renderLoading",value:function(){var e=this.state.answer;return r.a.createElement(y,{loading:!e},e)}}]),a}(r.a.Component);!function(e){e.BERNOULLI="\u0411\u0435\u0440\u043d\u0443\u043b\u043b\u0438",e.BINOMIAL="\u0411\u0438\u043d\u043e\u043c\u0438\u043d\u0430\u043b\u044c\u043d\u043e\u0435",e.GEOMETRIC="\u0413\u0435\u043e\u043c\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043a\u043e\u0435",e.POISSON="\u041f\u0443\u0430\u0441\u0441\u043e\u043d\u0430",e.UNIFORM="\u0420\u0430\u0432\u043d\u043e\u043c\u0435\u0440\u043d\u043e\u0435",e.EXPONENTIAL="\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435",e.NORMAL="\u041d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e\u0435"}(k||(k={}));var w=[k.BERNOULLI,k.BINOMIAL,k.GEOMETRIC,k.POISSON,k.UNIFORM,k.EXPONENTIAL,k.NORMAL].map((function(e){return{label:e,value:e}})),T=t(21),S=t(90),P=t(40),A=t.n(P),M=t(91),L=t.n(M);var R=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props,a=e.valid,t=e.clickable,n=e.onClick;return void 0===a?t?r.a.createElement("i",{className:"pi pi-spin pi-replay"}):r.a.createElement("i",{className:"pi pi-spin pi-spinner"}):a?r.a.createElement("i",{className:"pi pi-check"}):t?r.a.createElement("i",{className:"pi pi-replay",style:{cursor:"pointer"},onClick:n}):r.a.createElement("i",{className:"pi pi-times"})}}]),a}(r.a.Component);R.defaultProps={clickable:!1,onClick:function(){}};var F=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(c.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(r)))).state={distributionParams:{}},t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,a,t){!j()(this.props.value,e.value)&&this.props.value&&this.setState(Object(E.a)({},this.state,{distributionType:this.props.value.type,distributionParams:Object(E.a)({},this.state.distributionParams,{},A()(this.props.value.params,String))})),j()(this.state,a)||this.onDistributionChange()}},{key:"onDistributionTypeChange",value:function(e){this.setState(Object(E.a)({},this.state,{distributionType:e.value}))}},{key:"onDistributionParamChange",value:function(e,a){this.setState(Object(E.a)({},this.state,{distributionParams:Object(E.a)({},this.state.distributionParams,Object(T.a)({},e,a.currentTarget.value))}))}},{key:"onDistributionChange",value:function(){var e,a=this.state,t=a.distributionType,n=a.distributionParams,r=A()(function(e,a){var t={};return L()(e,(function(e,n){a(e,n)&&(t[n]=e)})),t}(A()(n,(function(e){return e?e.trim():void 0})),Boolean),Number);switch(t){case k.BERNOULLI:isNaN(r.p)||(e={type:t,params:{p:r.p}});break;case k.BINOMIAL:isNaN(r.n)||isNaN(r.p)||(e={type:t,params:{n:r.n,p:r.p}});break;case k.GEOMETRIC:isNaN(r.p)||(e={type:t,params:{p:r.p}});break;case k.POISSON:isNaN(r.l)||(e={type:t,params:{l:r.l}});break;case k.UNIFORM:isNaN(r.a)||isNaN(r.b)||(e={type:t,params:{a:r.a,b:r.b}});break;case k.EXPONENTIAL:isNaN(r.l)||(e={type:t,params:{l:r.l}});break;case k.NORMAL:isNaN(r.a)||isNaN(r.d)||(e={type:t,params:{a:r.a,d:r.d}})}this.props.onChange(e)}},{key:"render",value:function(){var e=this,a=this.props.normalSigmaSquare,t=this.state,n=t.distributionType,l=t.distributionParams,u=[];switch(n){case k.BERNOULLI:u.push({name:"p",field:"p"});break;case k.BINOMIAL:u.push({name:"n",field:"n"}),u.push({name:"p",field:"p"});break;case k.GEOMETRIC:u.push({name:"p",field:"p"});break;case k.POISSON:u.push({name:"\u03bb",field:"l"});break;case k.UNIFORM:u.push({name:"a",field:"a"}),u.push({name:"b",field:"b"});break;case k.EXPONENTIAL:u.push({name:"\u03bb",field:"l"});break;case k.NORMAL:u.push({name:"a",field:"a"}),u.push({name:"\u03c3"+(a?"\xb2":""),field:"d"})}var s=u.map((function(a){var t=l[a.field];return r.a.createElement(r.a.Fragment,{key:a.name},r.a.createElement("strong",null,a.name)," =\xa0",r.a.createElement(O.InputText,{value:null!==t&&void 0!==t?t:"",onChange:function(t){return e.onDistributionParamChange(a.field,t)}}),r.a.createElement(R,{valid:!!(null===t||void 0===t?void 0:t.trim())&&!isNaN(+t)}),r.a.createElement("br",null))}));return r.a.createElement(r.a.Fragment,null,"\u0420\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435:\xa0",r.a.createElement(S.Dropdown,{value:this.state.distributionType,options:w,onChange:this.onDistributionTypeChange.bind(this)}),r.a.createElement(R,{valid:!!this.state.distributionType}),r.a.createElement("br",null),s)}}]),a}(r.a.Component);F.defaultProps={normalSigmaSquare:!0,onChange:function(){}};var U=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(c.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(r)))).state={n:"",randomSeed:""},t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"onNChange",value:function(e){this.setState(Object(E.a)({},this.state,{n:e.currentTarget.value}))}},{key:"onDistributionChange",value:function(e){this.setState(Object(E.a)({},this.state,{distribution:e}))}},{key:"onRandomSeedChange",value:function(e){this.setState(Object(E.a)({},this.state,{randomSeed:e.currentTarget.value}))}},{key:"checkParameters",value:function(){var e=this.state,a=e.n,t=e.distribution,n=e.randomSeed,r=a?+a:void 0,l=n?+n:void 0;return void 0!==r&&!isNaN(r)&&!!t&&void 0!==l&&!isNaN(l)}},{key:"renderParameters",value:function(){var e=this.state,a=e.n,t=e.distribution,n=e.randomSeed,l=a?+a:void 0,u=n?+n:void 0;return r.a.createElement(r.a.Fragment,null,"\u041e\u0431\u044a\u0451\u043c (",r.a.createElement("strong",null,"n")," =):\xa0",r.a.createElement(O.InputText,{value:a,onChange:this.onNChange.bind(this)}),r.a.createElement(R,{valid:void 0!==l&&!isNaN(l)}),r.a.createElement("br",null),r.a.createElement(F,{normalSigmaSquare:!1,value:t,onChange:this.onDistributionChange.bind(this)}),r.a.createElement("strong",null,"random seed")," =\xa0",r.a.createElement(O.InputText,{value:n,onChange:this.onRandomSeedChange.bind(this)}),r.a.createElement(R,{valid:void 0!==u&&!isNaN(u)}))}},{key:"renderAnswer",value:function(){var e,a,t,n,l;return f.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:if(e=this.state,a=e.n,t=e.distribution,n=e.randomSeed,a&&t&&n){u.next=3;break}return u.abrupt("return");case 3:l="\nimport numpy as np\nnp.random.seed(".concat(n,")\n"),u.t0=t.type,u.next=u.t0===k.BERNOULLI?7:u.t0===k.BINOMIAL?9:u.t0===k.GEOMETRIC?11:u.t0===k.POISSON?13:u.t0===k.UNIFORM?15:u.t0===k.EXPONENTIAL?17:u.t0===k.NORMAL?19:21;break;case 7:return l+="sample = np.random.binomial(1, ".concat(t.params.p,", ").concat(a,")"),u.abrupt("break",21);case 9:return l+="sample = np.random.binomial(".concat(t.params.n,", ").concat(t.params.p,", ").concat(a,")"),u.abrupt("break",21);case 11:return l+="sample = np.random.geometric(".concat(t.params.p,", ").concat(a,")"),u.abrupt("break",21);case 13:return l+="sample = np.random.poisson(".concat(t.params.l,", ").concat(a,")"),u.abrupt("break",21);case 15:return l+="sample = np.random.uniform(".concat(t.params.a,", ").concat(t.params.b,", ").concat(a,")"),u.abrupt("break",21);case 17:return l+="sample = np.random.exponential(1 / ".concat(t.params.l,", ").concat(a,")"),u.abrupt("break",21);case 19:return l+="sample = np.random.normal(".concat(t.params.a,", ").concat(t.params.d,", ").concat(a,")"),u.abrupt("break",21);case 21:return l+='\nprint(",".join([str(round(sample[i], 2)) for i in range(5)]))\nprint(",".join([str(round(sample['.concat(+a-5," + i], 2)) for i in range(5)]))\nprint(sum(sample)/len(sample))\n"),u.abrupt("return",r.a.createElement(r.a.Fragment,null,"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u0449\u0438\u0439 \u043a\u043e\u0434 \u0432 Python-\u0438\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0430\u0442\u043e\u0440\u0435 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043d\u0430 \u0441\u0430\u0439\u0442\u0435 ",r.a.createElement("a",{href:"https://repl.it",target:"_blank",rel:"noopener noreferrer"},"repl.it"),"):",r.a.createElement("pre",null,l),"\u0418 \u0441\u043a\u043e\u043f\u0438\u0440\u0443\u0439\u0442\u0435 \u0432\u044b\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0435 \u043d\u0430 \u044d\u043a\u0440\u0430\u043d \u0441\u0442\u0440\u043e\u043a\u0438 \u0432 \u043f\u043e\u043b\u044f \u0434\u043b\u044f \u043e\u0442\u0432\u0435\u0442\u043e\u0432."));case 23:case"end":return u.stop()}}),null,this)}}]),a}(x),B=t(92),D=t.n(B),X=t(13),q=t.n(X);function G(e,a){var t=a||q()(e);return q()(e.map((function(e){return Math.pow(e-t,2)})))}function W(e){return e.length%2===0?(e[e.length/2-1]+e[e.length/2])/2:e[(e.length-1)/2]}var $=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(c.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(r)))).alchemistsRegexp=/^( *\()?( *\d+( *,)?)* *\d+? *(\) *)?$/,t.state={alchemists:""},t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"onAlchemistsChange",value:function(e){this.setState(Object(E.a)({},this.state,{alchemists:e.currentTarget.value}))}},{key:"checkParameters",value:function(){return this.alchemistsRegexp.test(this.state.alchemists)}},{key:"renderParameters",value:function(){var e=this.state.alchemists;return r.a.createElement(r.a.Fragment,null,"\u0412\u044b\u0431\u043e\u0440\u043a\u0430: ",r.a.createElement(O.InputText,{placeholder:"(a, b, c...)",value:e,onChange:this.onAlchemistsChange.bind(this)}),r.a.createElement(R,{valid:this.alchemistsRegexp.test(e)}))}},{key:"renderAnswer",value:function(){var e,a,t,n,l,u,s,i,c;return f.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(a=this.state.alchemists){o.next=3;break}return o.abrupt("return");case 3:return t=a.replace(/[()]/g,"").trim().split(/[,\s]+/).map(Number).sort((function(e,a){return e-a})),n=[1,2,3,4,5,6].map((function(e){return{value:e,count:t.filter((function(a){return a===e})).length}})),l=q()(t),u=G(t,l),s=W(t),i=null===(e=D()(n,(function(e){return e.count})))||void 0===e?void 0:e.count,c=n.filter((function(e){return e.count===i})).map((function(e){return e.value})).sort((function(e,a){return e-a}))[0],o.abrupt("return",r.a.createElement(r.a.Fragment,null,r.a.createElement("table",null,r.a.createElement("tbody",null,[function(e){return e.value<4},function(e){return e.value>3}].map((function(e){return r.a.createElement("tr",{key:String(e)},n.filter(e).map((function(e){return r.a.createElement("td",{key:e.value},"P(\u03be",r.a.createElement("sup",null,"*")," = ",e.value,") =\xa0",r.a.createElement(O.InputText,{readOnly:!0,value:0===e.count?"0":"".concat(e.count," / ").concat(t.length)}))})))})))),"\u041c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u043e\u0436\u0438\u0434\u0430\u043d\u0438\u0435: ",r.a.createElement(O.InputText,{readOnly:!0,value:l}),r.a.createElement("br",null),"\u0414\u0438\u0441\u043f\u0435\u0440\u0441\u0438\u044f: ",r.a.createElement(O.InputText,{readOnly:!0,value:u}),r.a.createElement("br",null),"\u0421\u0440\u0435\u0434\u043d\u0435\u043a\u0432\u0430\u0434\u0440\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u043e\u0442\u043a\u043b\u043e\u043d\u0435\u043d\u0438\u0435: ",r.a.createElement(O.InputText,{readOnly:!0,value:Math.sqrt(u)}),r.a.createElement("br",null),"\u041c\u0435\u0434\u0438\u0430\u043d\u0430: ",r.a.createElement(O.InputText,{readOnly:!0,value:s}),r.a.createElement("br",null),"\u041c\u043e\u0434\u0430: ",r.a.createElement(O.InputText,{readOnly:!0,value:c}),r.a.createElement("br",null)));case 11:case"end":return o.stop()}}),null,this)}}]),a}(x),_=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(c.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(r)))).previousFetch=Date.now(),t.urlRegex=/^[^:/?#]+:\/\/[^/?#]*[^?#]*(\?([^#]*))?(#(.*))?$/,t.proxyUrl="https://proxy.byprogminer.ru/?",t.state={url:"",loading:!1},t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,a,t){j()(C()(this.state,["loading","sample"]),C()(a,["loading","sample"]))||this.reload()}},{key:"reload",value:function(){var e=this,a=this.state.url;!function(){var t,n,r;f.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:if(l.prev=0,!e.urlRegex.test(a)){l.next=16;break}return l.next=4,f.a.awrap(new Promise((function(a){return setTimeout(a,Math.max(0,e.previousFetch+100-Date.now()))})));case 4:return e.previousFetch=Date.now(),l.next=7,f.a.awrap(fetch(e.proxyUrl+a));case 7:if(!(t=l.sent).ok){l.next=16;break}return l.next=11,f.a.awrap(t.text());case 11:if(n=l.sent,!((r=n.split("\n").map((function(e){return e.trim()})).filter(Boolean).map(Number).filter((function(e){return!isNaN(e)}))).length>0)){l.next=16;break}return e.state.url===a&&(e.setState(Object(E.a)({},e.state,{loading:!1,sample:r})),e.props.onChange(r)),l.abrupt("return");case 16:l.next=21;break;case 18:l.prev=18,l.t0=l.catch(0),console.log(l.t0);case 21:e.setState(Object(E.a)({},e.state,{loading:!1,sample:void 0})),e.props.onChange(void 0);case 23:case"end":return l.stop()}}),null,null,[[0,18]])}()}},{key:"onUrlChange",value:function(e){this.setState(Object(E.a)({},this.state,{url:e.currentTarget.value,loading:!0}))}},{key:"onIconClick",value:function(){this.setState(Object(E.a)({},this.state,{loading:!0})),this.reload()}},{key:"render",value:function(){var e=this.state,a=e.url,t=e.loading,n=e.sample;return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.InputText,{placeholder:"URL-\u0430\u0434\u0440\u0435\u0441 \u0432\u044b\u0431\u043e\u0440\u043a\u0438",value:a,onChange:this.onUrlChange.bind(this)}),r.a.createElement(R,{clickable:this.urlRegex.test(a),valid:t?void 0:!!n,onClick:this.onIconClick.bind(this)}))}}]),a}(r.a.Component),J=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(c.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(r)))).state={},t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"onSample10Change",value:function(e){this.setState(Object(E.a)({},this.state,{sample10:e}))}},{key:"onSample10000Change",value:function(e){this.setState(Object(E.a)({},this.state,{sample10000:e}))}},{key:"onDistributionChange",value:function(e){this.setState(Object(E.a)({},this.state,{distribution:e}))}},{key:"checkParameters",value:function(){var e=this.state,a=e.sample10,t=e.sample10000,n=e.distribution;return!!a&&!!t&&!!n}},{key:"renderParameters",value:function(){var e=this.state.distribution;return r.a.createElement(r.a.Fragment,null,"\u0412\u044b\u0431\u043e\u0440\u043a\u0430 \u043e\u0431\u044a\u0451\u043c\u0430 ",r.a.createElement("strong",null,"n = 10"),":\xa0",r.a.createElement(_,{onChange:this.onSample10Change.bind(this)}),r.a.createElement("br",null),"\u0412\u044b\u0431\u043e\u0440\u043a\u0430 \u043e\u0431\u044a\u0451\u043c\u0430 ",r.a.createElement("strong",null,"n = 10000"),":\xa0",r.a.createElement(_,{onChange:this.onSample10000Change.bind(this)}),r.a.createElement("br",null),r.a.createElement(F,{normalSigmaSquare:!1,value:e,onChange:this.onDistributionChange.bind(this)}))}},{key:"renderAnswer",value:function(){var e,t,n,l,u,s,i,c,o;return f.a.async((function(m){for(;;)switch(m.prev=m.next){case 0:if(e=this.state,t=e.sample10,n=e.sample10000,l=e.distribution,t&&n&&l){m.next=3;break}return m.abrupt("return");case 3:u=q()(t),s=q()(n),i=G(t,u),c=G(n,s),m.t0=l.type,m.next=m.t0===k.BERNOULLI?10:m.t0===k.BINOMIAL?12:m.t0===k.GEOMETRIC?14:m.t0===k.POISSON?16:m.t0===k.UNIFORM?18:m.t0===k.EXPONENTIAL?20:m.t0===k.NORMAL?22:24;break;case 10:return o=function(e,t,n){return a.output("p",e,t,l.params.p,n,l.params.p*(1-l.params.p))},m.abrupt("break",24);case 12:return o=function(e,t,n){return a.output("p",e,t/l.params.n,l.params.p,n,l.params.n*l.params.p*(1-l.params.p))},m.abrupt("break",24);case 14:return o=function(e,t,n){return a.output("p",e,1/t,l.params.p,n,(1-l.params.p)/Math.pow(l.params.p,2))},m.abrupt("break",24);case 16:return o=function(e,t,n){return a.output("\u03bb",e,t,l.params.l,n,l.params.l)},m.abrupt("break",24);case 18:return o=function(e,t,n){return a.output("a",e,2*t-l.params.b,l.params.a,n,Math.pow(l.params.b-l.params.a,2)/12)},m.abrupt("break",24);case 20:return o=function(e,t,n){return a.output("\u03bb",e,1/t,l.params.l,n,1/Math.pow(l.params.l,2))},m.abrupt("break",24);case 22:return o=function(e,t,n){return a.output("a",e,t,l.params.a,n,l.params.d)},m.abrupt("break",24);case 24:return m.abrupt("return",r.a.createElement(r.a.Fragment,null,o(10,u,i),r.a.createElement("hr",null),o(1e4,s,c)));case 25:case"end":return m.stop()}}),null,this)}}],[{key:"output",value:function(e,a,t,n,l,u){return r.a.createElement(r.a.Fragment,null,"\u0414\u043b\u044f \u0432\u044b\u0431\u043e\u0440\u043a\u0438 \u043e\u0431\u044a\u0451\u043c\u0430 ",r.a.createElement("strong",null,a),":",r.a.createElement("br",null),"\u041e\u0446\u0435\u043d\u043a\u0430 ",r.a.createElement("strong",null,e),": ",r.a.createElement(O.InputText,{readOnly:!0,value:t}),r.a.createElement("br",null),"\u041f\u043e\u0433\u0440\u0435\u0448\u043d\u043e\u0441\u0442\u044c \u043e\u0446\u0435\u043d\u043a\u0438: ",r.a.createElement(O.InputText,{readOnly:!0,value:Math.abs(t-n)}),r.a.createElement("br",null),"\u041e\u0446\u0435\u043d\u043a\u0430 \u0434\u0438\u0441\u043f\u0435\u0440\u0441\u0438\u0438: ",r.a.createElement(O.InputText,{readOnly:!0,value:l}),r.a.createElement("br",null),"\u041f\u043e\u0433\u0440\u0435\u0448\u043d\u043e\u0441\u0442\u044c \u043e\u0446\u0435\u043d\u043a\u0438 \u0434\u0438\u0441\u043f\u0435\u0440\u0441\u0438\u0438: ",r.a.createElement(O.InputText,{readOnly:!0,value:Math.abs(l-u)}))}}]),a}(x),V=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(c.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(r)))).weekName="\u041d\u0435\u0434\u0435\u043b\u044f 6. \u041e\u0431\u0437\u043e\u0440 \u0437\u0430\u0434\u0430\u0447, \u0440\u0435\u0448\u0430\u0435\u043c\u044b\u0445 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u043e\u0439",t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"renderContent",value:function(){return r.a.createElement(p.Accordion,{multiple:!0},r.a.createElement(p.AccordionTab,{header:"\u0423\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u0435 1 (Python)"},r.a.createElement(U,null)),r.a.createElement(p.AccordionTab,{header:"\u0423\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u0435 2. \u0417\u0430\u0434\u0430\u0447\u0430 1"},r.a.createElement($,null)),r.a.createElement(p.AccordionTab,{header:"\u0423\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u0435 2. \u0417\u0430\u0434\u0430\u0447\u0430 2"},r.a.createElement(J,null)))}}]),a}(v),Y=t(93);function z(e,a){var t=a.length*e,n=Math.floor(t);return t!==n?a[Math.floor(t)]:(a[n-1]+a[n])/2}var H=[{label:"\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",value:0},{label:"\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",value:1},{label:"\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",value:2},{label:"\u0410\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",value:3},{label:"\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",value:4},{label:"\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",value:5},{label:"\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",value:6},{label:"\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",value:7},{label:"\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",value:8},{label:"\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",value:9},{label:"\u0433. \u041c\u043e\u0441\u043a\u0432\u0430",value:10},{label:"\u0433. \u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433",value:11},{label:"\u0433. \u0421\u0435\u0432\u0430\u0441\u0442\u043e\u043f\u043e\u043b\u044c",value:12},{label:"\u0415\u0432\u0440\u0435\u0439\u0441\u043a\u0430\u044f \u0410\u041e",value:13},{label:"\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",value:14},{label:"\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",value:15},{label:"\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",value:16},{label:"\u041a\u0430\u0431\u0430\u0440\u0434\u0438\u043d\u043e-\u0411\u0430\u043b\u043a\u0430\u0440\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",value:17},{label:"\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",value:18},{label:"\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",value:19},{label:"\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",value:20},{label:"\u041a\u0430\u0440\u0430\u0447\u0430\u0435\u0432\u043e-\u0427\u0435\u0440\u043a\u0435\u0441\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",value:21},{label:"\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",value:22},{label:"\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",value:23},{label:"\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",value:24},{label:"\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",value:25},{label:"\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",value:26},{label:"\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",value:27},{label:"\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",value:28},{label:"\u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",value:29},{label:"\u041b\u0438\u043f\u0435\u0446\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",value:30},{label:"\u041c\u0430\u0433\u0430\u0434\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b.",value:31},{label:"\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b.",value:32},{label:"\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b.",value:33},{label:"\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0410\u041e",value:34},{label:"\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",value:35},{label:"\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",value:36},{label:"\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",value:37},{label:"\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",value:38},{label:"\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",value:39},{label:"\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",value:40},{label:"\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",value:41},{label:"\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",value:42},{label:"\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",value:43},{label:"\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",value:44},{label:"\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u0434\u044b\u0433\u0435\u044f",value:45},{label:"\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u043b\u0442\u0430\u0439",value:46},{label:"\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",value:47},{label:"\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0443\u0440\u044f\u0442\u0438\u044f",value:48},{label:"\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",value:49},{label:"\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0418\u043d\u0433\u0443\u0448\u0435\u0442\u0438\u044f",value:50},{label:"\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0430\u043b\u043c\u044b\u043a\u0438\u044f",value:51},{label:"\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0430\u0440\u0435\u043b\u0438\u044f",value:52},{label:"\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438",value:53},{label:"\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0440\u044b\u043c",value:54},{label:"\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041c\u0430\u0440\u0438\u0439 \u042d\u043b",value:55},{label:"\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",value:56},{label:"\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0421\u0430\u0445\u0430 (\u042f\u043a\u0443\u0442\u0438\u044f)",value:57},{label:"\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0421\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u041e\u0441\u0435\u0442\u0438\u044f - \u0410\u043b\u0430\u043d\u0438\u044f",value:58},{label:"\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",value:59},{label:"\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u044b\u0432\u0430",value:60},{label:"\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0425\u0430\u043a\u0430\u0441\u0438\u044f",value:61},{label:"\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",value:62},{label:"\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",value:63},{label:"\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",value:64},{label:"\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",value:65},{label:"\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b.",value:66},{label:"\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",value:67},{label:"\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",value:68},{label:"\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",value:69},{label:"\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",value:70},{label:"\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",value:71},{label:"\u0422\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",value:72},{label:"\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",value:73},{label:"\u0422\u044e\u043c\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b.",value:74},{label:"\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",value:75},{label:"\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",value:76},{label:"\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",value:77},{label:"\u0425\u0430\u043d\u0442\u044b-\u041c\u0430\u043d\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u0410\u041e (\u042e\u0433\u0440\u0430)",value:78},{label:"\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",value:79},{label:"\u0427\u0435\u0447\u0435\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",value:80},{label:"\u0427\u0443\u0432\u0430\u0448\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",value:81},{label:"\u0427\u0443\u043a\u043e\u0442\u0441\u043a\u0438\u0439 \u0410\u041e",value:82},{label:"\u042f\u043c\u0430\u043b\u043e-\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0410\u041e",value:83},{label:"\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",value:84}],K=[25960,43156,47526,32166,31163,27403,31647,30097,36081,31286,78946,58310,31008,39797,40728,26053,42921,25318,32473,38005,71553,25699,37857,27580,27948,33258,44692,27887,30125,42434,30775,101662,50135,56005,77277,32973,30820,36048,32013,29892,26834,30112,34809,42026,27339,27455,37764,33137,37867,24550,25663,25719,39755,48316,28400,28232,26999,65881,26108,35722,35619,37949,30647,31192,33086,26555,73261,37605,29566,28256,26754,30764,39707,33933,61937,31990,27927,46583,62555,34944,26108,27028,96930,86560,33882],Q=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(c.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(r)))).state={cities:[],sampleIndices:["","",""],intervalIndices:["","",""]},t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"checkIndices",value:function(e){return 3===e.map((function(e){return e.trim()})).filter(Boolean).map(Number).filter((function(e){return!isNaN(e)})).length}},{key:"checkParameters",value:function(){var e=this.state,a=e.sampleIndices,t=e.intervalIndices;return this.checkIndices(a)&&this.checkIndices(t)}},{key:"onCitiesChange",value:function(e){this.setState(Object(E.a)({},this.state,{cities:e.value}))}},{key:"onIndexChange",value:function(e,a){var t=this;return function(n){var r=Object(b.a)(t.state[e]);r[a]=n.currentTarget.value,t.setState(Object(E.a)({},t.state,Object(T.a)({},e,r)))}}},{key:"renderParameters",value:function(){var e=this,a=this.state,t=a.cities,n=a.sampleIndices,l=a.intervalIndices;return r.a.createElement(r.a.Fragment,null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434\u0430, ",r.a.createElement("strong",null,"\u043d\u0435")," \u043f\u043e\u043f\u0430\u0432\u0448\u0438\u0435 \u0432 \u0432\u044b\u0431\u043e\u0440\u043a\u0443:\xa0",r.a.createElement(Y.MultiSelect,{filter:!0,value:t,options:H,style:{verticalAlign:"middle"},onChange:this.onCitiesChange.bind(this)}),r.a.createElement("br",null),"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0445 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0432\u044b\u0431\u043e\u0440\u043a\u0438 (",r.a.createElement("strong",null,"X"),"):\xa0",[0,1,2].map((function(a){return r.a.createElement(O.InputText,{key:a,value:n[a],onChange:e.onIndexChange("sampleIndices",a)})})),r.a.createElement(R,{valid:this.checkIndices(n)}),r.a.createElement("br",null),"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0445 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u043e\u0432 (",r.a.createElement("strong",null,"A"),"):\xa0",[0,1,2].map((function(a){return r.a.createElement(O.InputText,{key:a,value:l[a],onChange:e.onIndexChange("intervalIndices",a)})})),r.a.createElement(R,{valid:this.checkIndices(l)}))}},{key:"renderAnswer",value:function(){var e,a,t,n,l,u,s,i,c,o,m,p,b,h,v;return f.a.async((function(d){for(;;)switch(d.prev=d.next){case 0:for(e=this.state,a=e.cities,t=e.sampleIndices,n=e.intervalIndices,l=K.filter((function(e,t){return!a.includes(t)})).sort((function(e,a){return e-a})),u=t.map((function(e){return+e-1})),s=n.map((function(e){return+e-1})),i=[],c=(l[l.length-1]-l[0])/10,o=function(e){var a=l[0]+e*c;i[e]=l.filter((function(e){return e>=a&&e<a+c})).length},m=0;m<10;++m)o(m);return p=q()(l),b=G(l,p),h=b*l.length/(l.length-1),v=W(l),d.abrupt("return",r.a.createElement(r.a.Fragment,null,r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,u.map((function(e){return r.a.createElement("td",{key:e},r.a.createElement("strong",null,"X",r.a.createElement("sub",null,"(",e+1,")"))," =\xa0",r.a.createElement(O.InputText,{readOnly:!0,value:l[e]}))}))))),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,s.map((function(e){return r.a.createElement("td",{key:e},r.a.createElement("strong",null,"A",r.a.createElement("sub",null,"(",e+1,")"))," =\xa0",r.a.createElement(O.InputText,{readOnly:!0,value:i[e]}))}))))),"\u0412\u044b\u0431\u043e\u0440\u043e\u0447\u043d\u043e\u0435 \u0441\u0440\u0435\u0434\u043d\u0435\u0435:\xa0",r.a.createElement(O.InputText,{readOnly:!0,value:p}),r.a.createElement("br",null),"\u0421\u043c\u0435\u0449\u0435\u043d\u043d\u0430\u044f \u0432\u044b\u0431\u043e\u0440\u043e\u0447\u043d\u0430\u044f \u0434\u0438\u0441\u043f\u0435\u0440\u0441\u0438\u044f:\xa0",r.a.createElement(O.InputText,{readOnly:!0,value:b}),r.a.createElement("br",null),"\u041d\u0435\u0441\u043c\u0435\u0449\u0435\u043d\u043d\u0430\u044f \u0432\u044b\u0431\u043e\u0440\u043e\u0447\u043d\u0430\u044f \u0434\u0438\u0441\u043f\u0435\u0440\u0441\u0438\u044f:\xa0",r.a.createElement(O.InputText,{readOnly:!0,value:h}),r.a.createElement("br",null),"\u0412\u044b\u0431\u043e\u0440\u043e\u0447\u043d\u0430\u044f \u043c\u0435\u0434\u0438\u0430\u043d\u0430:\xa0",r.a.createElement(O.InputText,{readOnly:!0,value:v}),r.a.createElement("br",null),"\u041a\u0432\u0430\u043d\u0442\u0438\u043b\u044c \u0443\u0440\u043e\u0432\u043d\u044f ",r.a.createElement("strong",null,"0.25"),":\xa0",r.a.createElement(O.InputText,{readOnly:!0,value:z(.25,l)}),r.a.createElement("br",null),"\u041a\u0432\u0430\u043d\u0442\u0438\u043b\u044c \u0443\u0440\u043e\u0432\u043d\u044f ",r.a.createElement("strong",null,"0.75"),":\xa0",r.a.createElement(O.InputText,{readOnly:!0,value:z(.75,l)})));case 13:case"end":return d.stop()}}),null,this)}}]),a}(x),Z=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(c.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(r)))).weekName="\u041d\u0435\u0434\u0435\u043b\u044f 7. \u041e\u0431\u0437\u043e\u0440 \u0437\u0430\u0434\u0430\u0447, \u0440\u0435\u0448\u0430\u0435\u043c\u044b\u0445 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u043e\u0439",t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"renderContent",value:function(){return r.a.createElement(Q,null)}}]),a}(v),ee=(t(227),function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h.Panel,{header:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c!"},"\u042d\u0442\u043e \u043e\u043d\u043b\u0430\u0439\u043d \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430 \u0434\u043b\u044f \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u0447 \u0438\u0437 \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u0439 \u043e\u043d\u043b\u0430\u0439\u043d-\u043a\u0443\u0440\u0441\u0430 \u041f\u0440\u0438\u043a\u043b\u0430\u0434\u043d\u0430\u044f \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430.",r.a.createElement("br",null),"\u0410\u0432\u0442\u043e\u0440:\xa0",r.a.createElement("a",{href:"https://byprogminer.ru/vk",target:"_blank",rel:"noopener noreferrer"},"\u0414\u043e\u043c\u043e\u0440\u0430\u0446\u043a\u0438\u0439 \u042d\u0440\u0438\u0434\u0430\u043d"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://my.qiwi.com/Erydan-DMVuYwfjtW",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("small",null,"(\u0414\u043e\u043d\u0430\u0442\u0438\u0442\u044c \u0441\u044e\u0434\u0430)"))),r.a.createElement(V,null),r.a.createElement(Z,null))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(228),t(229),t(230),t(231);u.a.render(r.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},95:function(e,a,t){e.exports=t(232)}},[[95,1,2]]]);
//# sourceMappingURL=main.a1e19256.chunk.js.map