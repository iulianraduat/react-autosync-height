(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{292:function(module,exports,__webpack_require__){__webpack_require__(293),__webpack_require__(440),__webpack_require__(441),module.exports=__webpack_require__(676)},358:function(module,exports){},441:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(127)},50:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(76),__webpack_require__(33),__webpack_require__(34),__webpack_require__(290);var react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2),cache={},ReactAutosyncHeight=function ReactAutosyncHeight(props){var children=props.children,id=props.id,elRef=react__WEBPACK_IMPORTED_MODULE_4__.useRef(),handleRef=react__WEBPACK_IMPORTED_MODULE_4__.useCallback((function(el){!function addToCache(id,el){if(!el)return;void 0===cache[id]&&(cache[id]=[]);cache[id].push(el)}(id,el),findAndApplyHeight(id,el),elRef.current=el}),[id]);return react__WEBPACK_IMPORTED_MODULE_4__.useLayoutEffect((function(){elRef.current&&(elRef.current.style.height="auto",findAndApplyHeight(id,elRef.current))}),[children,elRef,id]),react__WEBPACK_IMPORTED_MODULE_4__.useEffect((function(){return function(){elRef.current&&function removeFromCache(id,el){cache[id]=cache[id].filter((function(e){return e!==el}))}(id,elRef.current)}}),[elRef,id]),react__WEBPACK_IMPORTED_MODULE_4__.createElement("div",{"data-cy":"ReactAutosyncHeight","data-react-autosync-height":id,ref:handleRef},children)};function findAndApplyHeight(id,el){if(el){if(0!==el.offsetHeight){var elements=function getFromCache(id){return cache[id]}(id);console.log(id,elements);var maxHeight=0;return elements.forEach((function(el){maxHeight=function getMaximumHeight(prevMaxHeight,el){return Math.max(prevMaxHeight,function getElementHeight(el){return Math.ceil(el.getBoundingClientRect().height)}(el))}(maxHeight,el)})),elements.forEach((function(el){el.style.height="".concat(maxHeight,"px")})),maxHeight}setTimeout((function(){return findAndApplyHeight(id,el)}),100)}}__webpack_exports__.a=ReactAutosyncHeight;try{ReactAutosyncHeight.displayName="ReactAutosyncHeight",ReactAutosyncHeight.__docgenInfo={description:"",displayName:"ReactAutosyncHeight",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ReactAutosyncHeight.tsx#ReactAutosyncHeight"]={docgenInfo:ReactAutosyncHeight.__docgenInfo,name:"ReactAutosyncHeight",path:"src/ReactAutosyncHeight.tsx#ReactAutosyncHeight"})}catch(__react_docgen_typescript_loader_error){}},66:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return StorybookComponent}));__webpack_require__(285),__webpack_require__(290);var C_Workspace_components_1_react_autosync_height_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(291),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__),_src_ReactAutosyncHeight__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(50),StorybookComponent=function StorybookComponent(props){var color=props.color,id=props.id,speed=props.speed,initialNumRows=Object(react__WEBPACK_IMPORTED_MODULE_3__.useMemo)((function(){return Math.ceil(5*Math.random())+1}),[]),_useState=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(initialNumRows),_useState2=Object(C_Workspace_components_1_react_autosync_height_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.a)(_useState,2),numRows=_useState2[0],setNumRows=_useState2[1];Object(react__WEBPACK_IMPORTED_MODULE_3__.useEffect)((function(){var timeout=function setIntervalX(callback,delay,repetitions,meta){var x=0,intervalId=setInterval((function(){callback(intervalId),++x>=repetitions&&clearInterval(intervalId)}),delay);return intervalId}((function(){return setNumRows((function(prevNumRows){return prevNumRows<25?prevNumRows+1:prevNumRows}))}),1e3*speed,5);return function(){return clearInterval(timeout)}}),[speed]);var renderText=Object(react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((function(){for(var rows=[],i=0;i<numRows;i++)rows.push("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.");return rows.join("\n")}),[numRows]);return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src_ReactAutosyncHeight__WEBPACK_IMPORTED_MODULE_4__.a,{id:id},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{style:{backgroundColor:color}},id,". ",renderText()))};try{StorybookComponent.displayName="StorybookComponent",StorybookComponent.__docgenInfo={description:"",displayName:"StorybookComponent",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},speed:{defaultValue:null,description:"",name:"speed",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["storybook/StorybookComponent.tsx#StorybookComponent"]={docgenInfo:StorybookComponent.__docgenInfo,name:"StorybookComponent",path:"storybook/StorybookComponent.tsx#StorybookComponent"})}catch(__react_docgen_typescript_loader_error){}},676:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(127).configure)([__webpack_require__(677)],module,!1)}).call(this,__webpack_require__(109)(module))},677:function(module,exports,__webpack_require__){var map={"./stories.tsx":678};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=677},678:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _src_ReactAutosyncHeight__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(50),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(127),_StorybookComponent__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(66),style={display:"grid",gridTemplateColumns:"repeat(2, minmax(300px ,500px))"};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("ReactAutosyncHeight",module).addParameters({options:{showPanel:!1}}).add("Example from Readme",(function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:style},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{id:"Column1"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_ReactAutosyncHeight__WEBPACK_IMPORTED_MODULE_0__.a,{id:"Section1"},"1. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_ReactAutosyncHeight__WEBPACK_IMPORTED_MODULE_0__.a,{id:"Section2"},"2. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_ReactAutosyncHeight__WEBPACK_IMPORTED_MODULE_0__.a,{id:"Section3"},"3. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{id:"Column2"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_ReactAutosyncHeight__WEBPACK_IMPORTED_MODULE_0__.a,{id:"Section1"},"1. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_ReactAutosyncHeight__WEBPACK_IMPORTED_MODULE_0__.a,{id:"Section2"},"2. Lorem ipsum dolor sit amet, consetetur sadipscing elitr."),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_ReactAutosyncHeight__WEBPACK_IMPORTED_MODULE_0__.a,{id:"Section3"},"3. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.")))})).add("Dynamic change of the content",(function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:style},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{id:"Column1"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_StorybookComponent__WEBPACK_IMPORTED_MODULE_3__.a,{id:"Section1",speed:2,color:"aqua"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_StorybookComponent__WEBPACK_IMPORTED_MODULE_3__.a,{id:"Section2",speed:.5,color:"antiquewhite"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_StorybookComponent__WEBPACK_IMPORTED_MODULE_3__.a,{id:"Section3",speed:1,color:"aliceblue"})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{id:"Column2"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_StorybookComponent__WEBPACK_IMPORTED_MODULE_3__.a,{id:"Section1",speed:1,color:"aqua"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_StorybookComponent__WEBPACK_IMPORTED_MODULE_3__.a,{id:"Section2",speed:1,color:"antiquewhite"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_StorybookComponent__WEBPACK_IMPORTED_MODULE_3__.a,{id:"Section3",speed:.4,color:"aliceblue"})))}))}.call(this,__webpack_require__(679)(module))}},[[292,1,2]]]);
//# sourceMappingURL=main.ba0a1a543513b384e288.bundle.js.map