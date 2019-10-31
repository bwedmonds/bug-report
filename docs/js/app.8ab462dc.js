(function(t){function e(e){for(var o,n,i=e[0],c=e[1],u=e[2],d=0,p=[];d<i.length;d++)n=i[d],r[n]&&p.push(r[n][0]),r[n]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],o=!0,i=1;i<s.length;i++){var c=s[i];0!==r[c]&&(o=!1)}o&&(a.splice(e--,1),t=n(n.s=s[0]))}return t}var o={},r={app:0},a=[];function n(e){if(o[e])return o[e].exports;var s=o[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=o,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(s,o,function(e){return t[e]}.bind(null,o));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/bug-report/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var o=s("64a9"),r=s.n(o);r.a},"56d7":function(t,e,s){"use strict";s.r(e);var o=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{attrs:{id:"nav"}},[s("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),s("router-view")],1)},a=[],n=(s("034f"),s("2877")),i={},c=Object(n["a"])(i,r,a,!1,null,null,null),u=c.exports,l=s("8c4f"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home container-fluid"},[t._m(0),s("div",{staticClass:"row"},[s("bug-entry")],1),s("div",{staticClass:"row"},[s("div",{staticClass:"bug-list table-responsive"},[s("table",{staticClass:"table table-hover"},[t._m(1),t._l(t.bugs,function(t){return s("bug-list",{key:t._id,attrs:{bug:t}})})],2)])])])},p=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row"},[o("div",{staticClass:"col-12"},[o("h1",[o("img",{attrs:{alt:"Vue logo",src:s("cf05"),height:"25vh"}}),t._v("ermin "),o("img",{attrs:{alt:"Vue logo",src:s("cf05"),height:"25vh"}}),t._v("anisher")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",{staticClass:"thead-dark"},[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("Id#")]),s("th",{attrs:{scope:"col"}},[t._v("Bug")]),s("th",{attrs:{scope:"col"}},[t._v("Description")]),s("th",{attrs:{scope:"col"}},[t._v("Created By")]),s("th",{attrs:{scope:"col"}},[t._v("Created On:")]),s("th",{attrs:{scope:"col"}},[t._v("Open/Closed")]),s("th",{attrs:{scope:"col"}},[t._v("Closed On:")]),s("th",{attrs:{scope:"col"}},[t._v("Details")])])])}],g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.show?s("form",{on:{submit:function(e){return e.preventDefault(),t.createBug(e)},reset:t.onReset}},[s("div",{attrs:{id:"input-group-1",label:"","label-for":"input-1"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.bug.title,expression:"bug.title"}],attrs:{id:"input-1",type:"text",required:"",placeholder:"Enter short bug type"},domProps:{value:t.bug.title},on:{input:function(e){e.target.composing||t.$set(t.bug,"title",e.target.value)}}})]),s("div",{attrs:{id:"input-group-2",label:"Bug Description","label-for":"input-2"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.bug.description,expression:"bug.description"}],attrs:{id:"input-2",type:"text",required:"",placeholder:"Bug details"},domProps:{value:t.bug.description},on:{input:function(e){e.target.composing||t.$set(t.bug,"description",e.target.value)}}})]),s("div",{attrs:{id:"input-group-3",label:"Created by:","label-for":"input-3"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.bug.creator,expression:"bug.creator"}],attrs:{id:"input-3",type:"text",required:"",placeholder:"Your name"},domProps:{value:t.bug.creator},on:{input:function(e){e.target.composing||t.$set(t.bug,"creator",e.target.value)}}})]),s("button",{attrs:{type:"submit",variant:"primary"}},[t._v("Submit")]),s("button",{attrs:{type:"reset",variant:"danger"}},[t._v("Reset")])]):t._e()])},b=[],h={name:"bug",data(){return{bug:{title:"",description:"",creator:"",closedDate:""},show:!0}},methods:{createBug(){this.$store.dispatch("createBug",this.bug)},onReset(t){t.preventDefault(),this.bug.title="",this.bug.description="",this.bug.creator="",this.show=!1,this.$nextTick(()=>{this.show=!0})}}},m=h,v=Object(n["a"])(m,g,b,!1,null,null,null),f=v.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tbody",[s("tr",{class:[t.bug.closed?"table-success":"table-hover"]},[s("th",{attrs:{scope:" row"}},[t._v(t._s(t.bug._id))]),s("td",[t._v(t._s(t.bug.title))]),s("td",[t._v(t._s(t.bug.description))]),s("td",[t._v(t._s(t.bug.creator))]),s("td",[t._v(t._s(t.bug.createdAt))]),s("td",[t._v(t._s(t.formatClosed(t.bug.closed)))]),s("td",[t._v("add closed time here")]),s("td",[s("router-link",{attrs:{to:{name:"bugDetails",params:{id:t.bug._id}}}},[s("button",{staticClass:"btn btn-info",attrs:{type:"button"}},[t._v("Get Details")])])],1)])])},y=[],C={name:" bugList",props:["bug"],data(){return{filter:!1}},computed:{bugs(){return this.$store.getters.Completed(this.filter)}},methods:{formatClosed(t){return t?"Closed":"Open"},filterCompleted(t){this.filter=!t}},components:{}},w=C,N=Object(n["a"])(w,_,y,!1,null,null,null),x=N.exports,$={name:"home",computed:{bugs(){return this.$store.state.bugs}},components:{BugEntry:f,BugList:x}},B=$,O=Object(n["a"])(B,d,p,!1,null,null,null),j=O.exports,D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bugDetails container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"card"},[s("h5",{staticClass:"card-header"},[t._v(t._s(t.bug.title))]),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v(t._s(t.bug.description))]),s("p",{staticClass:"card-text"},[t._v(t._s(t.bug.creator))])])])])]),s("div",{staticClass:"row"},[t.bug.closed?t._e():s("div",{staticClass:"col-12"},[s("button",{staticClass:"btn btn-warning",on:{click:t.completeBug}},[t._v("Vermin Vanished")])])]),t.bug.closed?t._e():s("div",{staticClass:"row bg-light justify-content-center"},[s("form",{staticClass:"form-inline",on:{submit:function(e){return e.preventDefault(),t.createNote(e)},reset:t.onReset}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.addedNote.content,expression:"addedNote.content"}],staticClass:"form-control mx-1",attrs:{type:"text",placeholder:"Add a note"},domProps:{value:t.addedNote.content},on:{input:function(e){e.target.composing||t.$set(t.addedNote,"content",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.addedNote.creator,expression:"addedNote.creator"}],staticClass:"form-control mx-1",attrs:{type:"text",placeholder:"Created By"},domProps:{value:t.addedNote.creator},on:{input:function(e){e.target.composing||t.$set(t.addedNote,"creator",e.target.value)}}}),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Add Note")]),s("button",{staticClass:"btn btn-secondary",attrs:{type:"reset"}},[t._v("Reset form")])])]),s("div",{staticClass:"row"}),s("div",{staticClass:"row justify-content-center"},t._l(t.notes,function(t){return s("notes",{attrs:{note:t}})}),1)])},k=[],P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"notes col-3 justify-content-center"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("Bug Note")]),s("h6",{staticClass:"card-subtitle mb-2 text-muted"},[t._v("Created by: "+t._s(t.note.creator))]),s("p",{staticClass:"card-text"},[t._v(t._s(t.note.content))]),s("button",{staticClass:"btn btn-warning",attrs:{type:"button"},on:{click:t.deleteNote}},[t._v("Delete Note")])])])])},E=[],R={name:"notes",props:["note"],data(){return{}},computed:{notes(){return this.$store.state.notes}},methods:{deleteNote(){this.$store.dispatch("deleteNote",this.note)}}},S=R,T=Object(n["a"])(S,P,E,!1,null,null,null),M=T.exports,V={name:"bugDetails",props:["id"],data(){return{addedNote:{content:"",creator:"",bug:this.$route.params.id}}},mounted(){this.$store.dispatch("getBugById",this.id),this.$store.dispatch("getNotes",this.id)},methods:{completeBug(){this.$store.dispatch("completeBug",this.id)},createNote(){this.creator,this.content,this.bug._id;this.$store.dispatch("createNote",this.addedNote)},deleteNote(){this.$store.dispatch("deleteNote",this.addedNote)},onReset(t){t.preventDefault(),this.addedNote.content="",this.addedNote.creator="",this.show=!1,this.$nextTick(()=>{this.show=!0})}},computed:{bug(){return this.$store.state.bug},notes(){return this.$store.state.notes}},components:{Notes:M}},q=V,A=Object(n["a"])(q,D,k,!1,null,null,null),I=A.exports;o["a"].use(l["a"]);var L=new l["a"]({routes:[{path:"/",name:"home",component:j},{path:"/bugs/:id",name:"bugDetails",component:I,props:!0}]}),J=s("2f62"),G=s("bc3a"),H=s.n(G);const U=H.a.create({baseURL:"https://bcw-sandbox.herokuapp.com/api/bdawgtest"});o["a"].use(J["a"]);var Y=new J["a"].Store({state:{bug:{},bugs:[],notes:[]},mutations:{setBug(t,e){t.bug=e},setBugs(t,e){t.bugs=e},setNotes(t,e){t.notes=e}},actions:{async createBug({commit:t,dispatch:e},s){try{let t=await U.post("bugs",s);e("getBugs"),console.log(t.data)}catch(o){console.error(o)}},async getBugs({commit:t,dispatch:e}){try{let e=await U.get("bugs");t("setBugs",e.data.results)}catch(s){console.error(s)}},async getBugById({commit:t,dispatch:e},s){try{let e=await U.get("bugs/"+s);t("setBug",e.data.results),console.log(e.data.results)}catch(o){console.error(o)}},async completeBug({commit:t,dispatch:e},s){try{let e=await U.delete("bugs/"+s);t("setBug",e.data.results),console.log(e.data.results)}catch(o){console.error(o)}},async createNote({commit:t,dispatch:e},s){try{await U.post("bugs/"+s.bug+"/notes",s),e("getNotes",s.bug),console.log("note added")}catch(o){console.error(o)}},async getNotes({commit:t,dispatch:e},s){try{let e=await U.get("bugs/"+s+"/notes");t("setNotes",e.data.results),console.log("got all notes",e.data.results)}catch(o){console.error(o)}},async deleteNote({commit:t,dispatch:e},s){try{await U.delete("bugs/"+s.bug+"/notes/"+s._id);e("getNotes",s.bug),console.log("note deleted")}catch(o){console.error(o)}}},getters:{Completed:t=>e=>{return e?t.bugs.filter(t=>t.closed==e):t.bugs}}});o["a"].config.productionTip=!1,new o["a"]({router:L,store:Y,render:function(t){return t(u)},mounted(){Y.dispatch("getBugs")}}).$mount("#app")},"64a9":function(t,e,s){},cf05:function(t,e,s){t.exports=s.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.8ab462dc.js.map