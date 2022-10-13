import{_ as c,o as i,c as u,b as s,r as g,F as $,d as v,t as h,e as w,n as x,f as _,g as d,w as S,h as I,i as A,j as m,p as P,a as k}from"./index.34bedecb.js";const R={props:["slotValues"],methods:{spin(e){const t=this.$refs.slotValue,n=this.$props.slotValues;return t.style.background="#d7ffc0",new Promise((l,o)=>{function a(){if(e<=0)return t.style.background="#b4e995",l(t.innerText);t.innerText=n[Math.floor(Math.random()*n.length)],setTimeout(a,200,--e)}a()})}}},C={ref:"slotValue",id:"slotValue"};function T(e,t,n,l,o,a){return i(),u("div",C,"$",512)}const N=c(R,[["render",T],["__scopeId","data-v-5be4f6ff"]]);const M={data(){return{buttonSound:new Audio("spin.mp3")}},methods:{playButtonSound(){this.buttonSound.play()}}},j={class:"spinButtonInside"};function z(e,t,n,l,o,a){return i(),u("button",{class:"spinButton",onClick:t[0]||(t[0]=(...p)=>a.playButtonSound&&a.playButtonSound(...p))},[s("span",j,[g(e.$slots,"default",{},void 0,!0)])])}const E=c(M,[["render",z],["__scopeId","data-v-b46a553d"]]);const L=["value"],F={data(){return{value:this.$props.bets[0]}},methods:{changeValue(){this.value=this.$refs.betValue.value}}},G=Object.assign(F,{__name:"BetSelectButton",props:{bets:{type:Array,required:!0}},setup(e){return(t,n)=>(i(),u("select",{onChange:n[0]||(n[0]=(...l)=>t.changeValue&&t.changeValue(...l)),ref:"betValue"},[(i(!0),u($,null,v(e.bets,l=>(i(),u("option",{value:l},h(l),9,L))),256))],544))}}),W=c(G,[["__scopeId","data-v-e06e1962"]]);const q={data(){return{visible:!1}}},D={key:0,id:"infoContent"};function O(e,t,n,l,o,a){return i(),u("main",null,[s("button",{id:"infoButton",onClick:t[0]||(t[0]=p=>o.visible=!o.visible)},"Info"),o.visible?(i(),u("div",D,[g(e.$slots,"default",{},void 0,!0)])):w("",!0)])}const H=c(q,[["render",O],["__scopeId","data-v-74a13410"]]);const J={props:["autospinning"]};function K(e,t,n,l,o,a){return i(),u("button",{class:x(["autospinButton",n.autospinning?"enabledAutospin":""])},[g(e.$slots,"default",{},void 0,!0)],2)}const Q=c(J,[["render",K],["__scopeId","data-v-874cfaa9"]]);const U={props:["points"],data(){return{slotSpinTimes:10,slotAmount:3,spinning:!1,slotBets:[5e3,1e4,2e4],slotValues:["$","0","7","-","="],goodSlotValues:["$","7"],lastPlacedBet:0,lastReward:0,autospinning:!1}},components:{Slot:N,PlayButton:E,BetSelectButton:W,InfoSection:H,AutospinButton:Q},methods:{spinSlots(e,t=[]){if(e==1){if(this.lastPlacedBet=Number(this.$refs.betSelect.$data.value),this.$props.points-this.lastPlacedBet<0){this.autospinning=!1;return}this.$emit("changePoints",-this.lastPlacedBet)}else if(e>this.slotAmount){this.spinning=!1,this.calculateReward(t);return}this.spinning=!0,this.$refs["slot"+e][0].spin(this.slotSpinTimes).then(n=>{t.push(n),this.spinSlots(e+1,t)})},calculateReward(e){const t=new Set(e);let n=0;if(this.hasGoodSlotValue(t)&&t.size===1)switch([...t][0]){case"7":n=this.lastPlacedBet*7;break;case"$":n=this.lastPlacedBet*5;break}this.lastReward=n,this.$emit("changePoints",n)},hasGoodSlotValue(e){let t=!1;return this.goodSlotValues.forEach(n=>{e.has(n)&&(t=!0)}),t}},watch:{autospinning:function(){this.autospinning&&this.spinSlots(1)},spinning:function(){!this.spinning&&this.autospinning&&this.spinSlots(1)}}},r=e=>(P("data-v-2ea6a873"),e=e(),k(),e),X={id:"lastReward"},Y={id:"slotSpace"},Z={id:"options"},tt=r(()=>s("h2",null,"Loot table",-1)),et=r(()=>s("tr",null,[s("th",null,"Result"),s("th",null,"Theoretical Chance"),s("th",null,"Reward")],-1)),nt=r(()=>s("td",null,"$$$",-1)),st=r(()=>s("td",null,"original bet x 5",-1)),ot=r(()=>s("td",null,"777",-1)),lt=r(()=>s("td",null,"original bet x 7",-1));function it(e,t,n,l,o,a){const p=_("Slot"),B=_("BetSelectButton"),b=_("PlayButton"),y=_("AutospinButton"),V=_("InfoSection");return i(),u("main",null,[s("p",X,"Last reward: "+h(o.lastReward),1),s("div",Y,[(i(!0),u($,null,v(o.slotAmount,f=>(i(),A(p,{slotValues:o.slotValues,ref_for:!0,ref:String("slot"+f),class:"slot"},null,8,["slotValues"]))),256))]),s("div",Z,[d(B,{bets:o.slotBets,id:"betSelect",ref:"betSelect"},null,8,["bets"]),d(b,{style:I(o.spinning?"pointer-events: none; opacity: 0.2":"pointer-events: auto"),onClick:t[0]||(t[0]=f=>a.spinSlots(1)),ref:"spinButton"},{default:S(()=>[m("Spin")]),_:1},8,["style"]),d(y,{onClick:t[1]||(t[1]=f=>o.autospinning=!o.autospinning),autospinning:o.autospinning,id:"autospinButton"},{default:S(()=>[m("Autospin")]),_:1},8,["autospinning"])]),d(V,null,{default:S(()=>[tt,s("table",null,[et,s("tr",null,[nt,s("td",null,h(1/Math.pow(this.slotValues.length,this.slotAmount)*100)+"%",1),st]),s("tr",null,[ot,s("td",null,h(1/Math.pow(this.slotValues.length,this.slotAmount)*100)+"%",1),lt])])]),_:1})])}const ut=c(U,[["render",it],["__scopeId","data-v-2ea6a873"]]);export{ut as default};