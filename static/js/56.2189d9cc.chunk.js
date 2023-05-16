"use strict";(self.webpackChunkfit_force=self.webpackChunkfit_force||[]).push([[56],{22056:function(e,n,t){t.r(n),t.d(n,{CalculatorPage:function(){return K}});var r=t(70178),s=t(47313),a=t(65964),i=t(86086),l=t(71451),o=t(15671),c=t(43144),d=t(97326),u=t(60136),g=t(54062),x=t(29439),h=t(73428),m=t(9019),p=t(78770),j=t(3789),Z=t(1351),f=t(49302),v=t(86584),b=t(88706),y=t(66212),C=t(57829),P=t(28562),S=t(61113),N=t(61648),z=t(19259),A=[{ageRange:[18,24],gender:"M",run:{thresholds:[552,574,585,598,610,623,637,651,666,682,698,716,734,753,773,794,816,840,864,892,920,950],points:[60,59.5,59,58.5,58,57.5,57,56.5,56,55.5,55,54.5,54,53.5,52,50.5,49,46.5,44,41,38,35],minimum:35},hamr:{thresholds:[100,94,92,88,86,83,80,77,74,71,68,65,62,59,56,54,51,48,45,42,39,36],points:[60,59.5,59,58.5,58,57.5,57,56.5,56,55.5,55,54.5,54,53.5,52,50.5,49,46.5,44,41,38,35],minimum:36}}],I={1:7,2:15,3:23,4:32,5:41,6:50,7:60,8:70,9:81,10:92,11:104,12:116,13:129,14:142,15:155},w=function(e,n,t,r){var s="number"===typeof t?t:parseInt(t,10),a=function(e,n){return I[e-1]+n}(e,n),i=A.find((function(e){return e.ageRange[0]<=s&&s<=e.ageRange[1]&&e.gender===r}));if(i)for(var l=0;l<i.hamr.thresholds.length;l++)if(a>=i.hamr.thresholds[l])return i.hamr.points[l];return 0};function k(e){return 1===e?I[e]:I[e]-I[e-1]}var T=t(46417);function R(e){var n,t,r=e.age,a=e.gender,i=(0,s.useState)("00"),l=(0,x.Z)(i,2),o=l[0],c=l[1],d=(0,s.useState)("00"),u=(0,x.Z)(d,2),g=u[0],h=u[1],p=s.useCallback((0,b.Z)((function(e){var n=e.target.value.trim(),t=parseInt(n,10);isNaN(t)||0===n.length?c(""):c(n)}),300),[]),j=s.useCallback((0,b.Z)((function(e){var n=e.target.value.trim(),t=parseInt(n,10);console.log("input seconds length: "+n.length),isNaN(t)||0===n.length?h(""):t>60?h("60"):1===n.length?h("0"+n):h(n)}),300),[]),Z="--";return"00"===o&&"00"===g||(Z=function(e,n,t,r){var s=60*e+n,a="number"===typeof t?t:parseInt(t,10),i=A.find((function(e){return e.ageRange[0]<=a&&a<=e.ageRange[1]&&e.gender===r}));if(i)for(var l=0;l<i.run.thresholds.length;l++)if(s<=i.run.thresholds[l])return i.run.points[l];return 0}(parseInt(o),parseInt(g),r,a.toUpperCase()).toString()),"--"===Z?(n=null,t="text.disabled"):"0"===Z?(n=(0,T.jsx)(y.Z,{icon:(0,T.jsx)(z.Z,{style:{color:"white"}}),label:"Unsatisfactory",color:"error",size:"small"}),t="error.main"):"60"===Z?(n=(0,T.jsx)(y.Z,{icon:(0,T.jsx)(v.Z,{style:{color:"gold"}}),label:"Excellent",color:"success",size:"small"}),t="success.main"):(n=(0,T.jsx)(y.Z,{icon:(0,T.jsx)(N.Z,{style:{color:"white"}}),label:"Satisfactory",color:"primary",size:"small"}),t="primary.main"),(0,T.jsxs)(C.Z,{sx:{flex:"flex"},children:[(0,T.jsx)("strong",{children:"1.5 Mile Run"}),(0,T.jsxs)(m.ZP,{container:!0,spacing:2,children:[(0,T.jsxs)(m.ZP,{item:!0,xs:12,sm:6,sx:{marginTop:1},children:[(0,T.jsx)(P.Z,{id:"milerun-minutes",label:"mm",variant:"outlined",margin:"dense",size:"small",value:o,onChange:function(e){var n=e.target.value;if(0===n.length&&c(""),1!==g.length)return n.length>2?"":void(/^\d+$/.test(n)&&(n.length>0&&isNaN(parseInt(n,10))||(c(n),p(e))));c(n)},onBlur:p,sx:{width:"75px",marginRight:"10px"}}),(0,T.jsx)(P.Z,{id:"milerun-seconds",label:"ss",variant:"outlined",margin:"dense",size:"small",value:g,onChange:function(e){var n=e.target.value;0===n.length&&h(""),1!==n.length?n.length>2||/^\d+$/.test(n)&&(n.length>0&&isNaN(parseInt(n,10))||(h(n),j(e))):h(n)},onBlur:j,sx:{width:"75px"}})]}),(0,T.jsxs)(m.ZP,{item:!0,xs:12,sm:6,sx:{textAlign:"center"},children:[(0,T.jsx)(S.Z,{display:"inline",color:t,sx:{fontSize:"20pt",fontWeight:"bold"},children:Z})," ",(0,T.jsx)(S.Z,{display:"inline",sx:{fontSize:"20pt",fontWeight:"bold"},children:"/ 60"}),(0,T.jsx)("br",{}),n]})]})]})}function M(e){var n,t,r=e.age,a=e.gender,i=s.useState(""),l=(0,x.Z)(i,2),o=l[0],c=l[1],d=s.useState(""),u=(0,x.Z)(d,2),g=u[0],h=u[1],p=function(e){var n=e.target.value.trim();c(n)},j=function(e){var n=e.target.value.trim(),t=parseInt(n,10);o&&k(Number(o))<t?h(k(Number(o)).toString()):h(n)},Z=s.useCallback((0,b.Z)(p,300),[]),f=s.useCallback((0,b.Z)(j,300),[]),R="--";""===o&&""===g||(R=w(parseInt(o),parseInt(g),r,a.toUpperCase()).toString()),"--"===R?(n=null,t="text.disabled"):"0"===R?(n=(0,T.jsx)(y.Z,{icon:(0,T.jsx)(z.Z,{style:{color:"white"}}),label:"Unsatisfactory",color:"error",size:"small"}),t="error.main"):"60"===R?(n=(0,T.jsx)(y.Z,{icon:(0,T.jsx)(v.Z,{style:{color:"gold"}}),label:"Excellent",color:"success",size:"small"}),t="success.main"):(n=(0,T.jsx)(y.Z,{icon:(0,T.jsx)(N.Z,{style:{color:"white"}}),label:"Satisfactory",color:"primary",size:"small"}),t="primary.main");var M=function(e,n){var t="number"===typeof e?e:parseInt(e,10),r=A.find((function(e){return e.ageRange[0]<=t&&t<=e.ageRange[1]&&e.gender===n}));if(!r)return[0,0];for(var s=1,a=r.hamr.thresholds[r.hamr.thresholds.length-1];I[s]<a;)s++;return I[s]===a?[s+1,1]:[s,a-I[s-1]]}(r,a),F=(0,x.Z)(M,2),G=F[0],W=F[1];return(0,T.jsxs)(C.Z,{sx:{flex:"flex"},children:[(0,T.jsx)("strong",{children:"HAMR Run (Pacer Test)"}),(0,T.jsxs)(m.ZP,{container:!0,spacing:2,children:[(0,T.jsxs)(m.ZP,{item:!0,xs:12,sm:6,sx:{marginTop:1},children:[(0,T.jsx)(P.Z,{id:"hamr-level",label:"Level",variant:"outlined",margin:"dense",size:"small",value:o,onChange:p,onBlur:Z,sx:{width:"75px",marginRight:"10px"}}),(0,T.jsx)(P.Z,{id:"hamr-shuttle",label:"Shuttle",variant:"outlined",margin:"dense",size:"small",value:g,onChange:j,onBlur:f,sx:{width:"80px"}}),(0,T.jsxs)(S.Z,{variant:"caption",sx:{color:"text.disabled"},children:["Minimum: Level ",G,", Shuttle ",W]})]}),(0,T.jsxs)(m.ZP,{item:!0,xs:12,sm:6,sx:{textAlign:"center"},children:[(0,T.jsx)(S.Z,{display:"inline",color:t,sx:{fontSize:"20pt",fontWeight:"bold"},children:R})," ",(0,T.jsx)(S.Z,{display:"inline",sx:{fontSize:"20pt",fontWeight:"bold"},children:"/ 60"}),(0,T.jsx)("br",{}),n]})]})]})}var F=(0,s.memo)((function(e){var n=e.age,t=e.gender,a=s.useState("run"),i=(0,x.Z)(a,2),l=i[0],o=i[1];return(0,T.jsx)(r.Z,{sx:{paddingTop:3,height:"100vh"},children:(0,T.jsx)(h.Z,{elevation:3,sx:{padding:2,fontSize:"10pt"},children:(0,T.jsxs)(m.ZP,{container:!0,spacing:2,children:[(0,T.jsx)(m.ZP,{item:!0,xs:2,sm:2,children:(0,T.jsxs)(p.Z,{orientation:"vertical",value:l,exclusive:!0,onChange:function(e,n){o(n)},sx:{textAlign:"left"},children:[(0,T.jsx)(j.Z,{value:"run","aria-label":"run",children:(0,T.jsx)(Z.Z,{})}),(0,T.jsx)(j.Z,{value:"hamr","aria-label":"hamr",children:(0,T.jsx)(f.Z,{})})]})}),(0,T.jsx)(m.ZP,{item:!0,xs:10,sm:10,children:"run"===l?(0,T.jsx)(R,{age:n,gender:t}):(0,T.jsx)(M,{age:n,gender:t})})]})})})})),G=(0,s.memo)((function(e){var n=(0,s.useState)("M"),t=(0,x.Z)(n,2),r=t[0],a=t[1];return(0,T.jsx)(m.ZP,{xs:4,item:!0,display:"flex",alignItems:"center",justifyContent:"center",children:(0,T.jsxs)(p.Z,{color:"primary",exclusive:!0,value:r,onChange:function(n,t){t&&(a(t),e.updateGender(t))},"aria-label":"Gender",size:"small",children:[(0,T.jsx)(j.Z,{value:"M",children:"Male"}),(0,T.jsx)(j.Z,{value:"F",children:"Female"})]})})})),W=t(1550),B=t(42461),U=t(41727),$=t(80936),E=t.n($),L=(0,s.memo)((function(e){var n=(0,s.useState)("18"),t=(0,x.Z)(n,2),r=t[0],a=t[1],i=(0,s.useCallback)(E()((function(n){var t=n.target.value.trim(),r=parseInt(t,10);isNaN(r)||r<18?(a("18"),e.updateAge("18")):(a(t),e.updateAge(t))}),300),[]);return(0,T.jsx)(m.ZP,{xs:4,item:!0,sx:{marginTop:1,textAlign:"center"},alignContent:"center",children:(0,T.jsx)(C.Z,{children:(0,T.jsx)(W.Z,{size:"small",sx:{maxWidth:120},children:(0,T.jsx)(B.Z,{id:"standard-adornment-weight",endAdornment:(0,T.jsx)(U.Z,{position:"end",children:"yrs old"}),value:r,onChange:function(e){var n=e.target.value;n.length>2||/^\d+$/.test(n)&&(n.length>0&&isNaN(parseInt(n,10))||(a(n),i(e)))},onBlur:i,"aria-describedby":"standard-weight-helper-text",inputProps:{"aria-label":"weight"},size:"small"})})})})})),_=t(70501),q=t(90100),D=t(23918);function H(e){var n=e.age,t=e.gender,r="";r=Number(n)<25?"18-24":Number(n)<30?"25-29":Number(n)<35?"30-34":Number(n)<40?"35-39":Number(n)<45?"40-44":Number(n)<50?"45-49":Number(n)<55?"50-54":Number(n)<60?"55-59":Number(n)>=60?"60+":"";var s={M:(0,T.jsx)(D.Z,{}),F:(0,T.jsx)(q.Z,{})};return(0,T.jsx)(m.ZP,{xs:4,item:!0,sx:{marginTop:1,textAlign:"center"},alignContent:"center",children:(0,T.jsx)(C.Z,{children:(0,T.jsx)(y.Z,{icon:s[t],label:"Age Group: "+r,size:"small",color:"M"===t?"primary":"secondary"})})})}var Y=t(97525),J=function(e){(0,u.Z)(t,e);var n=(0,g.Z)(t);function t(e){var r;return(0,o.Z)(this,t),(r=n.call(this,e)).state={age:18,gender:"M"},r.updateGender=r.updateGender.bind((0,d.Z)(r)),r.updateAge=r.updateAge.bind((0,d.Z)(r)),r}return(0,c.Z)(t,[{key:"componentDidMount",value:function(){console.log("Calculator Mounted")}},{key:"updateGender",value:function(e){this.setState({gender:e}),console.log("Updated Gender: "+e)}},{key:"updateAge",value:function(e){this.setState({age:e}),console.log("Updated Age: "+e)}},{key:"render",value:function(){return(0,T.jsx)(_.Z,{children:(0,T.jsxs)(r.Z,{sx:{paddingTop:3,height:"100vh"},children:[(0,T.jsx)(h.Z,{elevation:3,sx:{padding:2,fontSize:"10pt"},children:(0,T.jsxs)(m.ZP,{container:!0,spacing:2,children:[(0,T.jsx)(m.ZP,{item:!0,xs:12,children:(0,T.jsxs)("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap"},children:[(0,T.jsx)(Y.Z,{color:"primary",style:{marginRight:"15px"}}),(0,T.jsx)("strong",{children:"PFT Calculator"})]})}),(0,T.jsx)(m.ZP,{item:!0,xs:12,children:(0,T.jsx)(S.Z,{variant:"body2",children:"This calculator is used to determine your PFT score. The formulas used are based on the Air Force Instruction 36-2905, Fitness Program."})})]})}),(0,T.jsxs)(m.ZP,{container:!0,rowSpacing:1,marginTop:2,children:[(0,T.jsx)(G,{updateGender:this.updateGender}),(0,T.jsx)(L,{updateAge:this.updateAge}),(0,T.jsx)(H,{age:this.state.age,gender:this.state.gender})]}),(0,T.jsx)(m.ZP,{container:!0,spacing:2,marginTop:3,marginBottom:3,children:(0,T.jsx)(F,{age:this.state.age,gender:this.state.gender})})]})})}}]),t}(s.Component);function K(){return(0,T.jsx)(T.Fragment,{children:(0,T.jsxs)(r.Z,{maxWidth:"sm",children:[(0,T.jsxs)(a.ql,{children:[(0,T.jsx)("title",{children:"Fit Force"}),(0,T.jsx)("meta",{name:"description",content:"Calculate Fitness Standards and Track Your Progress"})]}),(0,T.jsx)(i.Z,{}),(0,T.jsx)(J,{}),(0,T.jsx)(l.Z,{page:"calculator"})]})})}}}]);