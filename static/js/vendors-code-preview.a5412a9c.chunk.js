(this["webpackJsonp@example/uiw"]=this["webpackJsonp@example/uiw"]||[]).push([[3],{1012:function(e,t,n){},1017:function(e,t,n){},1019:function(e,t,n){"use strict";var s=n(192);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(1020),i=n(534),a=n(459),o=n(461),l=n(388),c=n(559),p=n(1312),u=function(e){return Object.keys(c[e]).filter((function(e){return/^[A-Z]/.test(e)}))},d=new Set([].concat(s(u("builtin")),s(u("browser")))),h=(0,r.declare)((function(e,t){var n,s,r,c;e.assertVersion(7);var u=t.loose,h=null!=(n=e.assumption("setClassMethods"))?n:t.loose,f=null!=(s=e.assumption("constantSuper"))?s:t.loose,v=null!=(r=e.assumption("superIsCallableConstructor"))?r:t.loose,m=null!=(c=e.assumption("noClassCalls"))?c:t.loose,y=Symbol();return{name:"transform-classes",visitor:{ExportDefaultDeclaration:function(e){e.get("declaration").isClassDeclaration()&&(0,o.default)(e)},ClassDeclaration:function(e){var t=e.node,n=t.id||e.scope.generateUidIdentifier("class");e.replaceWith(l.types.variableDeclaration("let",[l.types.variableDeclarator(n,l.types.toExpression(t))]))},ClassExpression:function(e,t){var n=e.node;if(!n[y]){var s=(0,a.default)(e);s&&s!==n?e.replaceWith(s):(n[y]=!0,e.replaceWith((0,p.default)(e,t.file,d,u,{setClassMethods:h,constantSuper:f,superIsCallableConstructor:v,noClassCalls:m})),e.isCallExpression()&&((0,i.default)(e),e.get("callee").isArrowFunctionExpression()&&e.get("callee").arrowFunctionToExpression()))}}}}}));t.default=h},1312:function(e,t,n){"use strict";var s,r=n(79),i=n(196),a=n(189);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,f,v){var m={parent:void 0,scope:void 0,node:void 0,path:void 0,file:void 0,classId:void 0,classRef:void 0,superFnId:void 0,superName:void 0,superReturns:[],isDerived:!1,extendsNative:!1,construct:void 0,constructorBody:void 0,userConstructor:void 0,userConstructorPath:void 0,hasConstructor:!1,staticPropBody:[],body:[],superThises:[],pushedConstructor:!1,pushedInherits:!1,protoAlias:null,isLoose:!1,methods:{instance:{hasComputed:!1,list:[],map:new Map},static:{hasComputed:!1,list:[],map:new Map}}},y=function(e){Object.assign(m,e)},g=p.traverse.visitors.merge([l.environmentVisitor,{ThisExpression:function(e){m.superThises.push(e)}}]);function b(){if(function(){var e,t=!1,n=m.path.get("body.body"),r=a(n);try{for(r.s();!(e=r.n()).done&&!(t=e.value.equals("kind","constructor")););}catch(u){r.e(u)}finally{r.f()}if(!t){var o,l;if(m.isDerived){var c=p.template.expression.ast(s||(s=i(["\n        (function () {\n          super(...arguments);\n        })\n      "])));o=c.params,l=c.body}else o=[],l=p.types.blockStatement([]);m.path.get("body").unshiftContainer("body",p.types.classMethod("constructor",p.types.identifier("constructor"),o,l))}}(),function(){var e,t=m.path.get("body.body"),n=a(t);try{for(n.s();!(e=n.n()).done;){var s=e.value,r=s.node;if(s.isClassProperty())throw s.buildCodeFrameError("Missing class properties transform.");if(r.decorators)throw s.buildCodeFrameError("Method has decorators, put the decorator plugin before the classes one.");p.types.isClassMethod(r)&&function(){var e="constructor"===r.kind;new l.default({methodPath:s,objectRef:m.classRef,superRef:m.superName,constantSuper:v.constantSuper,file:m.file,refToPreserve:m.classRef}).replace();var t=[];s.traverse(p.traverse.visitors.merge([l.environmentVisitor,{ReturnStatement:function(e){e.getFunctionParent().isArrowFunctionExpression()||t.push(e)}}])),e?S(t,r,s):E(r,s)}()}}catch(i){n.e(i)}finally{n.f()}}(),function(){if(!m.isDerived)return;var e=m.userConstructorPath,t=e.get("body");e.traverse(g);var n,s=function(){var t=e.scope.generateDeclaredUidIdentifier("this");return s=function(){return p.types.cloneNode(t)},t},r=a(m.superThises);try{for(r.s();!(n=r.n()).done;){var i=n.value,o=i.node;i.parentPath.isMemberExpression({object:o})?i.replaceWith(s()):i.replaceWith(p.types.callExpression(m.file.addHelper("assertThisInitialized"),[s()]))}}catch(S){r.e(S)}finally{r.f()}var c=new Set;e.traverse(p.traverse.visitors.merge([l.environmentVisitor,{Super:function(e){var t=e.node,n=e.parentPath;n.isCallExpression({callee:t})&&c.add(n)}}]));var u,d,h=!!c.size,f=a(c);try{for(f.s();!(u=f.n()).done;){var v=u.value;x(v,m.superName,s,t),h&&v.find((function(t){return t===e||(t.isLoop()||t.isConditional()||t.isArrowFunctionExpression()?(h=!1,!0):void 0)}))}}catch(S){f.e(S)}finally{f.f()}d=m.isLoose?function(e){var t=p.types.callExpression(m.file.addHelper("assertThisInitialized"),[s()]);return e?p.types.logicalExpression("||",e,t):t}:function(e){return p.types.callExpression(m.file.addHelper("possibleConstructorReturn"),[s()].concat(e||[]))};var y=t.get("body");y.length&&y.pop().isReturnStatement()||t.pushContainer("body",p.types.returnStatement(h?s():d()));var b,C=a(m.superReturns);try{for(C.s();!(b=C.n()).done;){var E=b.value;E.get("argument").replaceWith(d(E.node.argument))}}catch(S){C.e(S)}finally{C.f()}}(),m.userConstructor){var e=m.constructorBody,t=m.userConstructor,n=m.construct;e.body=e.body.concat(t.body.body),p.types.inherits(n,t),p.types.inherits(e,t.body)}C()}function C(){L();for(var e=m.body,t={instance:null,static:null},n=0,s=["static","instance"];n<s.length;n++){var r=s[n];m.methods[r].list.length&&(t[r]=m.methods[r].list.map((function(e){for(var t=p.types.objectExpression([p.types.objectProperty(p.types.identifier("key"),e.key)]),n=0,s=["get","set","value"];n<s.length;n++){var r=s[n];null!=e[r]&&t.properties.push(p.types.objectProperty(p.types.identifier(r),e[r]))}return t})))}if(t.instance||t.static){for(var i=[p.types.cloneNode(m.classRef),t.instance?p.types.arrayExpression(t.instance):p.types.nullLiteral(),t.static?p.types.arrayExpression(t.static):p.types.nullLiteral()],a=0,o=0;o<i.length;o++)p.types.isNullLiteral(i[o])||(a=o);i=i.slice(0,a+1),e.push(p.types.expressionStatement(p.types.callExpression(m.file.addHelper("createClass"),i)))}}function x(e,t,n,s){var r,i=e.node;v.superIsCallableConstructor?(i.arguments.unshift(p.types.thisExpression()),2===i.arguments.length&&p.types.isSpreadElement(i.arguments[1])&&p.types.isIdentifier(i.arguments[1].argument,{name:"arguments"})?(i.arguments[1]=i.arguments[1].argument,i.callee=p.types.memberExpression(p.types.cloneNode(t),p.types.identifier("apply"))):i.callee=p.types.memberExpression(p.types.cloneNode(t),p.types.identifier("call")),r=p.types.logicalExpression("||",i,p.types.thisExpression())):r=(0,c.default)(p.types.cloneNode(m.superFnId),p.types.thisExpression(),i.arguments),e.parentPath.isExpressionStatement()&&e.parentPath.container===s.node.body&&s.node.body.length-1===e.parentPath.key?(m.superThises.length&&(r=p.types.assignmentExpression("=",n(),r)),e.parentPath.replaceWith(p.types.returnStatement(r))):e.replaceWith(p.types.assignmentExpression("=",n(),r))}function E(e,t){var n=t?t.scope:m.scope;if("method"!==e.kind||!function(e,t){if(v.setClassMethods&&!e.decorators){var n=m.classRef;e.static||(!function(){if(null===m.protoAlias){y({protoAlias:m.scope.generateUidIdentifier("proto")});var e=p.types.memberExpression(m.classRef,p.types.identifier("prototype")),t=p.types.variableDeclaration("var",[p.types.variableDeclarator(m.protoAlias,e)]);m.body.push(t)}}(),n=m.protoAlias);var s=p.types.memberExpression(p.types.cloneNode(n),e.key,e.computed||p.types.isLiteral(e.key)),r=p.types.functionExpression(null,e.params,e.body,e.generator,e.async);p.types.inherits(r,e);var i=p.types.toComputedKey(e,e.key);p.types.isStringLiteral(i)&&(r=(0,o.default)({node:r,id:i,scope:t}));var a=p.types.expressionStatement(p.types.assignmentExpression("=",s,r));return p.types.inheritsComments(a,e),m.body.push(a),!0}return!1}(e,n)){var s,i=e.static?"static":"instance",a=m.methods[i],l="method"===e.kind?"value":e.kind,c=p.types.isNumericLiteral(e.key)||p.types.isBigIntLiteral(e.key)?p.types.stringLiteral(String(e.key.value)):p.types.toComputedKey(e),u=p.types.toExpression(e);p.types.isStringLiteral(c)?"method"===e.kind&&(u=(0,o.default)({id:c,node:e,scope:n})):a.hasComputed=!0,!a.hasComputed&&a.map.has(c.value)?((s=a.map.get(c.value))[l]=u,"value"===l?(s.get=null,s.set=null):s.value=null):(s=r({key:c},l,u),a.list.push(s),a.hasComputed||a.map.set(c.value,s))}}function S(e,t,n){y({userConstructorPath:n,userConstructor:t,hasConstructor:!0,superReturns:e});var s=m.construct;p.types.inheritsComments(s,t),s.params=t.params,p.types.inherits(s.body,t.body),s.body.directives=t.body.directives,function(){if(m.pushedConstructor)return;m.pushedConstructor=!0,(m.hasInstanceDescriptors||m.hasStaticDescriptors)&&C();m.body.push(m.construct),L()}()}function L(){if(m.isDerived&&!m.pushedInherits){var t=e.scope.generateUidIdentifier("super");y({pushedInherits:!0,superFnId:t}),v.superIsCallableConstructor||m.body.unshift(p.types.variableDeclaration("var",[p.types.variableDeclarator(t,p.types.callExpression((0,d.default)(m.file),[p.types.cloneNode(m.classRef)]))])),m.body.unshift(p.types.expressionStatement(p.types.callExpression(m.file.addHelper(m.isLoose?"inheritsLoose":"inherits"),[p.types.cloneNode(m.classRef),p.types.cloneNode(m.superName)])))}}return function(e,t,n,s){y({parent:e.parent,scope:e.scope,node:e.node,path:e,file:t,isLoose:s}),y({classId:m.node.id,classRef:m.node.id?p.types.identifier(m.node.id.name):m.scope.generateUidIdentifier("class"),superName:m.node.superClass,isDerived:!!m.node.superClass,constructorBody:p.types.blockStatement([])}),y({extendsNative:m.isDerived&&n.has(m.superName.name)&&!m.scope.hasBinding(m.superName.name,!0)});var r=m.classRef,i=m.node,o=m.constructorBody;y({construct:h(r,o,i)});var l=m.body,c=function(){var e=m.superName,t=[],n=[];if(m.isDerived){var s=p.types.cloneNode(e);m.extendsNative&&(s=p.types.callExpression(m.file.addHelper("wrapNativeSuper"),[s]),(0,u.default)(s));var r=m.scope.generateUidIdentifierBasedOnNode(e);t.push(r),n.push(s),y({superName:p.types.cloneNode(r)})}return{closureParams:t,closureArgs:n}}(),d=c.closureParams,f=c.closureArgs;b(),v.noClassCalls||o.body.unshift(p.types.expressionStatement(p.types.callExpression(m.file.addHelper("classCallCheck"),[p.types.thisExpression(),p.types.cloneNode(m.classRef)]))),l=l.concat(m.staticPropBody.map((function(e){return e(p.types.cloneNode(m.classRef))})));var g=e.isInStrictMode(),C=m.classId&&1===l.length;if(C&&!g){var x,E=a(m.construct.params);try{for(E.s();!(x=E.n()).done;){var S=x.value;if(!p.types.isIdentifier(S)){C=!1;break}}}catch(N){E.e(N)}finally{E.f()}}var L=C?l[0].body.directives:[];if(g||L.push(p.types.directive(p.types.directiveLiteral("use strict"))),C)return p.types.toExpression(l[0]);l.push(p.types.returnStatement(p.types.cloneNode(m.classRef)));var w=p.types.arrowFunctionExpression(d,p.types.blockStatement(l,L));return p.types.callExpression(w,f)}(e,t,n,f)};var o=n(459),l=n(568),c=n(569),p=n(388),u=n(534),d=n(1313);function h(e,t,n){var s=p.types.functionDeclaration(p.types.cloneNode(e),[],t);return p.types.inherits(s,n),s}},1313:function(e,t,n){"use strict";var s,r=n(196);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(a.has(e))return(i.types.cloneNode||i.types.clone)(a.get(e));try{return e.addHelper("createSuper")}catch(s){}var t=e.scope.generateUidIdentifier("createSuper");a.set(e,t);var n=o({CREATE_SUPER:t,GET_PROTOTYPE_OF:e.addHelper("getPrototypeOf"),POSSIBLE_CONSTRUCTOR_RETURN:e.addHelper("possibleConstructorReturn")});return e.path.unshiftContainer("body",[n]),e.scope.registerDeclaration(e.path.get("body.0")),i.types.cloneNode(t)};var i=n(388),a=new WeakMap;var o=i.template.statement(s||(s=r(["\n  function CREATE_SUPER(Derived) {\n    function isNativeReflectConstruct() {\n      if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n\n      // core-js@3\n      if (Reflect.construct.sham) return false;\n\n      // Proxy can't be polyfilled. Every browser implemented\n      // proxies before or at the same time as Reflect.construct,\n      // so if they support Proxy they also support Reflect.construct.\n      if (typeof Proxy === \"function\") return true;\n\n      // Since Reflect.construct can't be properly polyfilled, some\n      // implementations (e.g. core-js@2) don't set the correct internal slots.\n      // Those polyfills don't allow us to subclass built-ins, so we need to\n      // use our fallback implementation.\n      try {\n        // If the internal slots aren't set, this throws an error similar to\n        //   TypeError: this is not a Date object.\n        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));\n        return true;\n      } catch (e) {\n        return false;\n      }\n    }\n\n    return function () {\n      var Super = GET_PROTOTYPE_OF(Derived), result;\n      if (isNativeReflectConstruct()) {\n        // NOTE: This doesn't work if this.__proto__.constructor has been modified.\n        var NewTarget = GET_PROTOTYPE_OF(this).constructor;\n        result = Reflect.construct(Super, arguments, NewTarget);\n      } else {\n        result = Super.apply(this, arguments);\n      }\n      return POSSIBLE_CONSTRUCTOR_RETURN(this, result);\n    }\n  }\n"])))},1314:function(e,t,n){},1315:function(e,t,n){},342:function(e,t,n){"use strict";n.d(t,"a",(function(){return q}));var s=n(1),r=n.n(s),i=n(4),a=n.n(i),o=n(2),l=n.n(o),c=n(200),p=n.n(c),u=n(44),d=n.n(u),h=n(8),f=n.n(h),v=n(11),m=n.n(v),y=n(9),g=n.n(y),b=n(10),C=n.n(b),x=n(29),E=n.n(x),S=n(0),L=n.n(S),w=n(16),N=n.n(w),D=n(1008),P=n(61),R=n.n(P),z=n(6),k=n(48),H=n(198),O=n(203),M=n(204),j=n(65),T=n(205),I=n(209),W=(n(1012),function(e){Object(T.a)(n,e);var t=Object(I.a)(n);function n(e){var s;return Object(O.a)(this,n),(s=t.call(this,e)).state={dragging:!1},s.warpper=void 0,s.paneNumber=void 0,s.startX=void 0,s.startY=void 0,s.move=void 0,s.target=void 0,s.boxWidth=void 0,s.boxHeight=void 0,s.preWidth=void 0,s.nextWidth=void 0,s.preHeight=void 0,s.nextHeight=void 0,s.preSize=void 0,s.nextSize=void 0,s.onDragEnd=s.onDragEnd.bind(Object(j.a)(s)),s.onDragging=s.onDragging.bind(Object(j.a)(s)),s}return Object(M.a)(n,[{key:"componentWillUnmount",value:function(){this.removeEvent()}},{key:"removeEvent",value:function(){window.removeEventListener("mousemove",this.onDragging,!1),window.removeEventListener("mouseup",this.onDragEnd,!1)}},{key:"onMouseDown",value:function(e,t){if(t.target&&this.warpper){this.paneNumber=e,this.startX=t.clientX,this.startY=t.clientY,this.move=!0,this.target=t.target.parentNode;var n=this.target.previousElementSibling,s=this.target.nextElementSibling;this.boxWidth=this.warpper.clientWidth,this.boxHeight=this.warpper.clientHeight,n&&(this.preWidth=n.clientWidth,this.preHeight=n.clientHeight),s&&(this.nextWidth=s.clientWidth,this.nextHeight=s.clientHeight),window.addEventListener("mousemove",this.onDragging),window.addEventListener("mouseup",this.onDragEnd,!1),this.setState({dragging:!0})}}},{key:"onDragging",value:function(e){if(this.move){this.state.dragging||this.setState({dragging:!0});var t=this.props,n=t.mode,s=t.onDragging,r=this.target.nextElementSibling,i=this.target.previousElementSibling,a=e.clientX-this.startX,o=e.clientY-this.startY;if(this.preSize=0,this.nextSize=0,"horizontal"===n){if(this.preSize=this.preWidth+a>-1?this.preWidth+a:0,this.nextSize=this.nextWidth-a>-1?this.nextWidth-a:0,0===this.preSize||0===this.nextSize)return;this.preSize=100*(this.preSize/this.boxWidth>=1?1:this.preSize/this.boxWidth),this.nextSize=100*(this.nextSize/this.boxWidth>=1?1:this.nextSize/this.boxWidth),i&&r&&(i.style.width="".concat(this.preSize,"%"),r.style.width="".concat(this.nextSize,"%"))}if("vertical"===n&&this.preHeight+o>-1&&this.nextHeight-o>-1){if(this.preSize=this.preHeight+o>-1?this.preHeight+o:0,this.nextSize=this.nextHeight-o>-1?this.nextHeight-o:0,this.preSize=100*(this.preSize/this.boxHeight>=1?1:this.preSize/this.boxHeight),this.nextSize=100*(this.nextSize/this.boxHeight>=1?1:this.nextSize/this.boxHeight),0===this.preSize||0===this.nextSize)return;i&&r&&(i.style.height="".concat(this.preSize,"%"),r.style.height="".concat(this.nextSize,"%"))}s&&s(this.preSize,this.nextSize,this.paneNumber)}}},{key:"onDragEnd",value:function(){var e=this.props.onDragEnd;this.move=!1,e&&e(this.preSize,this.nextSize,this.paneNumber),this.removeEvent(),this.setState({dragging:!1})}},{key:"render",value:function(){var e=this,t=this.props,n=t.prefixCls,s=t.className,r=t.children,i=t.mode,a=t.visiable,o=t.lineBar,l=t.disable,c=(t.onDragEnd,t.onDragging,Object(H.a)(t,["prefixCls","className","children","mode","visiable","lineBar","disable","onDragEnd","onDragging"])),p=this.state.dragging,u=[n,s,"".concat(n,"-").concat(i),p?"dragging":null].filter(Boolean).join(" ").trim(),d=L.a.Children.toArray(r);return L.a.createElement("div",Object(z.a)({className:u},c,{ref:function(t){return e.warpper=t}}),L.a.Children.map(d,(function(t,s){var r=Object.assign({},t.props,{className:["".concat(n,"-pane"),t.props.className].filter(Boolean).join(" ").trim(),style:Object(k.a)({},t.props.style)}),i=!0===a||a&&a.includes(s+1)||!1,c={className:["".concat(n,"-bar"),o?"".concat(n,"-line-bar"):null,o?null:"".concat(n,"-large-bar")].filter(Boolean).join(" ").trim()};return(!0===l||l&&l.includes(s+1))&&(c.className=[c.className,l?"disable":null].filter(Boolean).join(" ").trim()),L.a.createElement(L.a.Fragment,null,0!==s&&i&&L.a.createElement("div",Object(k.a)({},c),L.a.createElement("div",{onMouseDown:e.onMouseDown.bind(e,s+1)})),L.a.cloneElement(t,Object(k.a)({},r)))})))}}]),n}(L.a.Component));W.defaultProps={prefixCls:"w-split",visiable:!0,mode:"horizontal"};var B=n(1013),_=n(1016),F=(n(1017),function(e){var t=e||{},n=t.codePenOption,s=t.codeSandboxOption,r=t.prefixCls,i=n||{},a=i.includeModule,o=l()(i,["includeModule"]);if(o&&o.js){var c=(a||[]).join("|");o.js=o.js.replace(/import([\s\S]*?)(?=['"])['"].*['"]( *;|;)?/gm,(function(e){return c&&new RegExp("from\\s+['\"](".concat(c,")['\"](s.+)?;?")).test(e)?e:"/** ".concat(e," **/")}))}return L.a.createElement("div",{className:"".concat(r,"-thirdparty")},n&&L.a.createElement(_.a,o,L.a.createElement("svg",{height:"12",fill:"currentColor",viewBox:"0 0 69 69"},L.a.createElement("path",{d:"M68.974125,23.6022271 C68.9669375,23.556228 68.956875,23.5159788 68.951125,23.4728545 C68.9369583,23.3892382 68.9192128,23.3062677 68.8979375,23.2241717 C68.885,23.1752977 68.8663125,23.127861 68.8505,23.0804244 C68.8278442,23.0077868 68.8029153,22.9358778 68.77575,22.8648035 C68.7562939,22.8157401 68.7342205,22.7677555 68.709625,22.7210562 C68.6804108,22.6530301 68.6463004,22.5872128 68.6075625,22.5241224 C68.5816874,22.4766857 68.5515,22.4321241 68.52275,22.386125 C68.4142531,22.2169066 68.2885197,22.0593814 68.1475625,21.9160713 C68.10875,21.8772595 68.0728125,21.8355728 68.0325625,21.8010735 C67.9775701,21.7523865 67.9214935,21.704938 67.864375,21.6587636 C67.818375,21.6242643 67.77525,21.589765 67.72925,21.5581406 L67.680375,21.5207662 L36.1445,0.497723998 C35.1485978,-0.165907999 33.8514022,-0.165907999 32.8555,0.497723998 L1.32106248,21.5207662 L1.27218748,21.5581406 C1.16574994,21.6321432 1.06485681,21.713817 0.970312494,21.8025109 C0.928625004,21.8355728 0.891249961,21.8772595 0.850999999,21.9160713 C0.800687478,21.9678203 0.750375025,22.0224443 0.704374952,22.0770683 C0.618968308,22.1722554 0.543358166,22.275796 0.47868744,22.386125 L0.392437472,22.5241224 C0.355916851,22.587711 0.322339729,22.6529454 0.291812498,22.7196187 C0.235417041,22.8356642 0.187844895,22.9557936 0.149499967,23.0789869 C0.133687434,23.127861 0.11643744,23.1752977 0.103499962,23.2241717 C0.0819374527,23.3046702 0.0675624468,23.3880436 0.0517499808,23.4728545 C0.0431249503,23.5159787 0.0330624597,23.5562279 0.0273124842,23.6022271 C0.0114999508,23.7272873 0,23.8566599 0,23.9874699 L0,45.0105121 C0,45.1398847 0.0115000182,45.2692572 0.0287499444,45.3986298 C0.0330624597,45.4403165 0.0431249503,45.4834407 0.0517499808,45.5265649 C0.0661249867,45.6113758 0.0819374527,45.6918743 0.103499962,45.7752478 C0.11643744,45.8241218 0.133687434,45.8715585 0.149499967,45.918995 C0.172499936,45.9908687 0.195499972,46.0627423 0.227124972,46.1360534 C0.245812493,46.1849275 0.27024999,46.2309267 0.290374971,46.2798007 C0.323437498,46.3459245 0.355062497,46.4106108 0.392437472,46.478172 C0.421187484,46.5227337 0.448499968,46.5687328 0.47868744,46.6132945 C0.585037244,46.7827707 0.710436736,46.9395172 0.852437459,47.0804732 C0.979968483,47.2145679 1.12112666,47.3350078 1.27362494,47.4398414 L1.32106248,47.4786532 L32.8555,68.5016954 C33.8511677,69.1661015 35.1488322,69.1661015 36.1445,68.5016954 L67.680375,47.4786532 L67.72925,47.4412789 C67.77525,47.4096545 67.818375,47.3751552 67.864375,47.3406558 C67.9215088,47.2940078 67.9775854,47.2460798 68.0325625,47.1969085 C68.0728125,47.1609716 68.10875,47.1221599 68.1475625,47.0819107 C68.2902677,46.9406867 68.4161661,46.7834372 68.52275,46.6132945 C68.5515,46.5672953 68.5816874,46.5227337 68.6075625,46.478172 C68.646375,46.4106108 68.6794375,46.3459245 68.7081875,46.2798007 C68.732625,46.2309267 68.7570625,46.1849275 68.77575,46.1360534 C68.8045,46.0641798 68.8275,45.9908687 68.8505,45.918995 C68.8663125,45.8715584 68.885,45.8241218 68.8979375,45.7752478 C68.9195,45.6918743 68.9353125,45.6113759 68.951125,45.5265649 C68.956875,45.4834407 68.9669375,45.4403165 68.974125,45.4000673 C68.991375,45.2706947 69,45.1413222 69,45.0119496 L69,23.9889074 C69,23.8566599 68.991375,23.7272873 68.974125,23.6022271 Z M38,9 L61,24.1907448 L50.7281277,31 L38.0014231,22.5649276 L38.0014231,9 L38,9 Z M30.997154,9 L30.997154,22.5649276 L18.2740828,31 L8,24.1907448 L31,9 L30.997154,9 Z M6,29 L13,34 L6,39 L6,29 L6,29 Z M31,60 L8,44.8082815 L18.2732954,38 L30.9971538,46.434203 L30.9971538,60 L31,60 Z M34.4985607,41 L24,34 L34.4985607,27 L45,34 L34.4985607,41 Z M38,60 L38,46.4333333 L50.7268564,38 L61,44.8073077 L38,60 L38,60 Z M63,39 L56,34 L63,29 L63,39 L63,39 Z"}))),s&&L.a.createElement(B.a,s,L.a.createElement("svg",{height:"12",fill:"currentColor",viewBox:"0 0 69 69"},L.a.createElement("path",{d:"M32,38.2764838 L11,24 L11,35.7160031 L22.0526316,43.2306536 L22.0526316,54.3200601 L32,60 L32,38.2764838 Z M38,38.2764838 L38,60 L47.9473684,54.3200601 L47.9473684,43.2306536 L59,35.7160031 L59,24 L38,38.2764838 Z M46.296506,13 L35.5021904,21.0761293 L24.7078748,13.004586 L15,18.6913552 L35.5021904,33 L56,18.6913552 L46.296506,13.004586 L46.296506,13 Z M37.1676303,0.571217481 L63.7371606,15.5989936 C65.1342563,16.3900364 66,17.8813846 66,19.4990592 L66,49.4964682 C66.0011469,51.1157433 65.1356391,52.6091811 63.7371606,53.4010064 L37.1676303,68.4287825 C35.8224939,69.1904058 34.1819333,69.1904058 32.8367968,68.4287825 L6.26726663,53.4010064 C4.86707992,52.6103421 4,51.1166819 4,49.4964682 L4,19.4990592 C4,17.8813846 4.86574257,16.3900364 6.26283836,15.5989936 L32.8323686,0.571217481 C34.1775051,-0.190405827 35.8180656,-0.190405827 37.1632021,0.571217481 L37.1676303,0.571217481 Z"}))))}),A=L.a.createElement("svg",{viewBox:"0 0 1024 1024"},L.a.createElement("path",{d:"M909 959H780a30 30 0 0 1 0-60h99a20 20 0 0 0 20-20v-99a30 30 0 0 1 60 0v129a50 50 0 0 1-50 50z m20-685a30 30 0 0 1-30-30v-99a20 20 0 0 0-20-20h-99a30 30 0 0 1 0-60h129a50 50 0 0 1 50 50v129a30 30 0 0 1-30 30z m-157 28v420a50 50 0 0 1-50 50H302a50 50 0 0 1-50-50V302a50 50 0 0 1 50-50h420a50 50 0 0 1 50 50z m-60 30a20 20 0 0 0-20-20H332a20 20 0 0 0-20 20v360a20 20 0 0 0 20 20h360a20 20 0 0 0 20-20V332zM244 125h-99a20 20 0 0 0-20 20v99a30 30 0 0 1-60 0V115a50 50 0 0 1 50-50h129a30 30 0 0 1 0 60zM95 750a30 30 0 0 1 30 30v99a20 20 0 0 0 20 20h99a30 30 0 0 1 0 60H115a50 50 0 0 1-50-50V780a30 30 0 0 1 30-30z"})),U=L.a.createElement("svg",{viewBox:"0 0 1024 1024"},L.a.createElement("path",{d:"M869.865 46.545a107.706 107.706 0 0 1 107.59 107.567v599.412a107.706 107.706 0 0 1-107.59 107.567h-148.41v8.797a107.683 107.683 0 0 1-107.567 107.567H154.112A107.683 107.683 0 0 1 46.545 869.888V270.476a107.683 107.683 0 0 1 107.567-107.567h148.433v-8.797a107.706 107.706 0 0 1 107.59-107.567h459.73z m-715.73 861.091h459.73a37.841 37.841 0 0 0 37.771-37.748V270.476c0-20.806-16.942-37.749-37.748-37.749H154.135c-20.806 0-37.771 16.943-37.771 37.749v599.412c0 20.83 16.965 37.748 37.771 37.748z m753.501-154.112V154.112c0-20.806-16.965-37.748-37.771-37.748h-459.73c-20.806 0-37.771 16.942-37.771 37.748v8.797h241.524a107.683 107.683 0 0 1 107.567 107.567v520.797h148.41c20.806 0 37.771-16.92 37.771-37.749z m-384-381.16a34.91 34.91 0 0 1 0 69.818H244.364a34.91 34.91 0 0 1 0-69.818h279.272z m0 162.909a34.91 34.91 0 0 1 0 69.818H244.364a34.91 34.91 0 0 1 0-69.818h279.272z m-93.09 162.909a34.91 34.91 0 0 1 0 69.818H244.363a34.91 34.91 0 0 1 0-69.818h186.181z"})),Z=n(1018),V=n(206),Y=n.n(V),X=n(1019),G=n.n(X);function J(e){return K.apply(this,arguments)}function K(){return(K=d()(E.a.mark((function e(t){var n,s;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],s=Object(Z.transform)(t,{presets:["es2015","react"],plugins:[[Y.a,{removeAll:!0}],[G.a,{loose:!0}]]}).code,e.abrupt("return",{code:s,specifiers:n});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(1314),n(1315);var q=function(e){g()(n,e);var t=C()(n);function n(){var e;f()(this,n);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).demoDom=L.a.createRef(),e.editor=L.a.createRef(),e.language="",e.initHeight=3,e.playerId="".concat(parseInt(String(1e9*Math.random()),10).toString(36)),e.state={errorMessage:"",fullScreen:!1,copied:!1,showEdit:!1,width:1},e}return m()(n,[{key:"componentDidMount",value:function(){var e=this.props.language;this.language="string"===typeof e?e:e&&e.name||"",this.props.noPreview||this.executeCode(this.props.code),window.addEventListener("popstate",(function(e){document.body.style.overflow="inherit"}),!1)}},{key:"componentDidUpdate",value:function(e){var t=this.props.language;this.language="string"===typeof t?t:t&&t.name||"",e.noPreview!==this.props.noPreview&&this.executeCode(this.props.code)}},{key:"executeCode",value:function(){var e=d()(E.a.mark((function e(t){var n,s,r,i,a,o,l,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(/(jsx|js)/.test(this.language)){e.next=2;break}return e.abrupt("return");case 2:for(i in e.prev=2,n=["context","React","ReactDOM","Component"],s=[this,L.a,N.a,S.Component],r=this.props.dependencies)n.push(i),s.push(r[i]);return t=t.replace("_mount_","document.getElementById('".concat(this.playerId,"')")),a="".concat(t),e.next=11,J(a);case 11:o=e.sent,l=o.code,n.push(l||""),p()(Function,n).apply(null,s),this.setState({errorMessage:""}),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(2),c="",c=e.t0&&e.t0.message?e.t0.message:JSON.stringify(e.t0),this.setState({errorMessage:c});case 23:case"end":return e.stop()}}),e,this,[[2,18]])})));return function(t){return e.apply(this,arguments)}}()},{key:"onCopyCode",value:function(){var e=this,t=this.props.code;R()(t||"",(function(t){e.setState({copied:t})})),setTimeout((function(){e.setState({copied:!1})}),2e3)}},{key:"onFullScreen",value:function(){var e=this,t=this.state.fullScreen;this.setState({fullScreen:!t},(function(){document.body.style.overflow=t?"inherit":"hidden",!t&&e.demoDom.current&&(e.demoDom.current.style.maxWidth="inherit")}))}},{key:"initOldHeight",value:function(){var e=this.demoDom.current;3===this.initHeight&&e&&(this.initHeight=e.clientHeight)}},{key:"onSwitchSource",value:function(){var e=this,t=this.state.width;this.initOldHeight(),this.setState({width:1===t?"50%":1,showEdit:!0},(function(){e.editor&&e.editor.current&&e.editor.current.editor&&e.editor.current.editor.setSize("100%",1!==t?e.initHeight:"100%")}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.style,s=t.prefixCls,i=t.language,o=t.className,c=t.editProps,p=t.codePenOption,u=t.codeSandboxOption,d=t.code,h=(t.dependencies,t.btnText),f=t.btnHideText,v=t.onlyEdit,m=t.bordered,y=t.noCode,g=t.noPreview,b=t.noScroll,C=t.bgWhite,x=l()(t,["style","prefixCls","language","className","editProps","codePenOption","codeSandboxOption","code","dependencies","btnText","btnHideText","onlyEdit","bordered","noCode","noPreview","noScroll","bgWhite"]),E=!(!y&&!g)&&(!y||!g),S=1!==this.state.width&&[E?1:2];return L.a.createElement(W,r()({visiable:S,className:[o,s,b?"".concat(s,"-noScroll"):null,E?"".concat(s,"-OneItem"):null,m?"".concat(s,"-bordered"):null,this.state.fullScreen?"".concat(s,"-fullScreen"):null].filter(Boolean).join(" ").trim(),style:a()({flex:1},n)},x),!g&&!v&&L.a.createElement("div",{ref:this.demoDom,className:["".concat(s,"-demo"),C?null:"".concat(s,"-demo-bgPlaid"),this.state.errorMessage?"".concat(s,"-demo-error"):null].filter(Boolean).join(" ").trim(),style:a()({flex:1},1===this.state.width?{width:"100%"}:{})},this.state.errorMessage&&L.a.createElement("pre",null,L.a.createElement("code",null,this.state.errorMessage)),L.a.createElement("div",{className:["".concat(s,"-demo-source"),this.state.errorMessage?"error":null].filter(Boolean).join(" ").trim(),id:this.playerId})),(!y||v)&&L.a.createElement("div",{style:{overflow:"hidden",width:v?"100%":this.state.width}},(this.state.showEdit||v)&&L.a.createElement(D.a,r()({value:(d||"").replace(/\n$/,""),ref:this.editor,options:{theme:"monokai",mode:i}},c,{onChange:function(t,n){e.executeCode(t.getValue()),c&&c.onChange&&c.onChange(t,n)}}))),!E&&!(y&&g)&&!v&&L.a.createElement("div",{style:{flex:1,width:29},className:"".concat(s,"-bar")},L.a.createElement(F,{prefixCls:s,codePenOption:p,codeSandboxOption:u}),L.a.createElement("div",{className:"".concat(s,"-bar-btn"),onClick:this.onSwitchSource.bind(this)},1===this.state.width?h:f),L.a.createElement("div",{className:["".concat(s,"-bar-iconbtns"),this.state.copied?"".concat(s,"-bar-copied"):null].filter(Boolean).join(" ").trim(),onClick:this.onCopyCode.bind(this)},U),L.a.createElement("div",{className:["".concat(s,"-bar-iconbtns"),this.state.fullScreen?"".concat(s,"-bar-copied"):null].filter(Boolean).join(" ").trim(),onClick:this.onFullScreen.bind(this)},A)))}}]),n}(L.a.PureComponent);q.defaultProps={prefixCls:"w-code-preview",language:"jsx",code:"",btnText:"Code",btnHideText:"Hide Editor",editProps:{},noCode:!1,bgWhite:!1,onlyEdit:!1,noPreview:!1,bordered:!0}}}]);
//# sourceMappingURL=vendors-code-preview.a5412a9c.chunk.js.map