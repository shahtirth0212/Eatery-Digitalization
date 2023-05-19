(function(){"use strict";var e={6685:function(e,t,i){var n=i(9242),a=i(2483),o=i(3396),l=i.p+"img/food1.a5d576dd.png",s=i.p+"img/food2.55840d97.png",r=i.p+"img/food3.2effa85a.png",d=i.p+"img/food4.cd3462b3.png",c=i.p+"img/food5.86aea627.png",p=i.p+"img/food6.1bbe7948.png",u=i.p+"img/food7.a369d88e.png";const m=(0,o.uE)('<div class="food" id="food1"><img src="'+l+'" alt=""></div><div class="food" id="food2"><img src="'+s+'" alt=""></div><div class="food" id="food3"><img src="'+r+'" alt=""></div><div class="food" id="food4"><img src="'+d+'" alt=""></div><div class="food" id="food5"><img src="'+c+'" alt=""></div><div class="food" id="food6"><img src="'+p+'" alt=""></div><div class="food" id="food7"><img src="'+u+'" alt=""></div>',7);function h(e,t,i,n,a,l){const s=(0,o.up)("navBar"),r=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[m,(0,o.Wm)(s),(0,o._)("main",null,[(0,o.Wm)(r)])],64)}i(7658);var v=i(7139);const y={id:"navbar"};function _(e,t,i,n,a,l){return(0,o.wg)(),(0,o.iD)("div",y,[(0,o._)("div",{class:(0,v.C_)(["nav-item btn",a.active[4]?"active":e.pass]),onClick:t[0]||(t[0]=e=>(this.$router.push("/"),this.active[4]=1,l.changeState(4)))},"Home",2),(0,o._)("div",{id:"orders",class:(0,v.C_)(["nav-item btn",a.active[0]?"active":e.pass]),onClick:t[1]||(t[1]=e=>(this.$router.push("/orders"),this.active[0]=1,l.changeState(0)))},"Orders",2),(0,o._)("div",{id:"history",class:(0,v.C_)(["nav-item btn",a.active[1]?"active":e.pass]),onClick:t[2]||(t[2]=e=>(this.$router.push("/history"),this.active[1]=1,l.changeState(1)))},"History",2),(0,o._)("div",{id:"addNew",class:(0,v.C_)(["nav-item btn",a.active[2]?"active":e.pass]),onClick:t[3]||(t[3]=e=>(this.$router.push("/addNew"),this.active[2]=1,l.changeState(2)))},"New Item",2),(0,o._)("div",{id:"viewAll",class:(0,v.C_)(["nav-item btn",a.active[3]?"active":e.pass]),onClick:t[4]||(t[4]=e=>(this.$router.push("/viewAll"),this.active[3]=1,l.changeState(3)))},"View All",2)])}var g={name:"navBar",data(){return{active:[0,0,0,0,1]}},methods:{changeState(e){for(let t=0;t<this.active.length;t++)t==e||(this.active[t]=0)}}},f=i(89);const w=(0,f.Z)(g,[["render",_],["__scopeId","data-v-b65a5d1a"]]);var b=w,k={name:"App",data(){return{}},components:{navBar:b},methods:{}};const O=(0,f.Z)(k,[["render",h]]);var S=O;const T=e=>((0,o.dD)("data-v-690c995a"),e=e(),(0,o.Cn)(),e),C={id:"form"},D=T((()=>(0,o._)("h5",null,"  • Basic Details",-1))),P={key:0},N={key:0},I=T((()=>(0,o._)("option",{class:"input",value:"Starter"},"Starter",-1))),L=T((()=>(0,o._)("option",{class:"input",value:"Main course"},"Main course",-1))),H=T((()=>(0,o._)("option",{class:"input",value:"Beverage"},"Beverage",-1))),E=T((()=>(0,o._)("option",{class:"input",value:"Desert"},"Desert",-1))),$=[I,L,H,E],R=T((()=>(0,o._)("hr",null,null,-1))),x=T((()=>(0,o._)("h5",null,"  • Other Details",-1))),U={id:"checkboxes"},q=T((()=>(0,o._)("label",{class:"checkmark",for:"special"},null,-1))),V=T((()=>(0,o._)("div",null,"Special",-1))),z={id:"checkboxes"},j=T((()=>(0,o._)("label",{class:"checkmark",for:"spicy"},null,-1))),A=T((()=>(0,o._)("div",null,"Spicy",-1))),M=T((()=>(0,o._)("hr",null,null,-1))),B=T((()=>(0,o._)("h5",null,"  • Ingredients",-1))),Y=["onClick"],K={key:0,style:{width:"14.4vw"}},Z=T((()=>(0,o._)("hr",null,null,-1)));function F(e,t,i,a,l,s){return(0,o.wg)(),(0,o.iD)("div",C,[D,(0,o._)("div",null,[(0,o.wy)((0,o._)("input",{type:"text",id:"name",class:"input","onUpdate:modelValue":t[0]||(t[0]=e=>l.itemName=e),placeholder:"Item Name"},null,512),[[n.nr,l.itemName,void 0,{trim:!0}]]),l.formValidity?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("span",P,"Item name not entered !"))]),(0,o._)("div",null,[(0,o.wy)((0,o._)("input",{type:"number",class:"input","onUpdate:modelValue":t[1]||(t[1]=e=>l.itemPrice=e),placeholder:"Item Price"},null,512),[[n.nr,l.itemPrice,void 0,{trim:!0}]]),l.formValidity?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("span",N,"Item price not entered !"))]),(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":t[2]||(t[2]=e=>l.itemType=e),id:"itemType",class:"form-control input"},$,512),[[n.bM,l.itemType]]),R,x,(0,o._)("div",U,[(0,o.wy)((0,o._)("input",{style:{margin:"1vh"},type:"checkbox",id:"special","onUpdate:modelValue":t[3]||(t[3]=e=>l.isSpecial=e),hidden:""},null,512),[[n.e8,l.isSpecial]]),q,V]),(0,o._)("div",z,[(0,o.wy)((0,o._)("input",{style:{margin:"1vh"},type:"checkbox",id:"spicy","onUpdate:modelValue":t[4]||(t[4]=e=>l.isSpicy=e),hidden:""},null,512),[[n.e8,l.isSpicy]]),j,A]),M,(0,o._)("div",null,[B,(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.ingredients,(e=>((0,o.wg)(),(0,o.iD)("li",{key:e},[(0,o.Uk)("⇀  "+(0,v.zw)(e)+" ",1),(0,o._)("button",{onClick:t=>s.pop_ingredient(e),class:"btn-red"},"Remove",8,Y)])))),128))])]),(0,o._)("div",null,[(0,o.wy)((0,o._)("input",{type:"textbox",class:"input","onUpdate:modelValue":t[5]||(t[5]=e=>l.temp=e),placeholder:"Type ingredient and press enter",onKeyup:t[6]||(t[6]=(0,n.D2)(((...e)=>s.check_for_enter&&s.check_for_enter(...e)),["enter"]))},null,544),[[n.nr,l.temp]])]),1==l.ingreError?((0,o.wg)(),(0,o.iD)("span",K,"Cannot be blank !")):(0,o.kq)("",!0),Z,(0,o._)("button",{type:"submit",onClick:t[7]||(t[7]=(...e)=>s.pushItemToDatabase&&s.pushItemToDatabase(...e)),class:"btn-green"},"Add item")])}var J={name:"addNewItem",data(){return{itemName:"",itemPrice:null,itemType:"Starter",isSpecial:!1,isSpicy:!1,formValidity:!0,ingredients:[],temp:"",ingreError:!1,HOST:window.location.host,PROTOCOL:window.location.protocol}},methods:{pushItemToDatabase(){""==this.itemName||null==this.itemPrice?this.formValidity=!1:(fetch(`${this.PROTOCOL}//${this.HOST}/getFoodItems`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({itemName:this.itemName,itemPrice:this.itemPrice,itemType:this.itemType,isSpecial:this.isSpecial,isSpicy:this.isSpicy,ingredients:this.ingredients})}),this.formValidity=!0,this.itemName="",this.itemPrice="",this.itemType="Starter",this.isSpecial=!1,this.isSpicy=!1,this.ingredients=[])},pop_ingredient(e){const t=this.ingredients.indexOf(e);-1!=t&&this.ingredients.splice(t,1)},check_for_enter(e){if("Enter"==e.key)if(""==this.temp.trim())this.ingreError=!0;else{let e=this.temp[0].toUpperCase()+this.temp.slice(1);this.ingredients.push(e),this.temp="",this.ingreError=!1}}}};const W=(0,f.Z)(J,[["render",F],["__scopeId","data-v-690c995a"]]);var G=W,Q=i.p+"img/spicy.cd662e1c.png",X=i.p+"img/premium-quality.e4f8f69c.png";const ee=e=>((0,o.dD)("data-v-ebce857a"),e=e(),(0,o.Cn)(),e),te={style:{position:"relative",left:"17vw",margin:"0.3vw 0vw 0.3vw 0vw"}},ie={id:"container"},ne={key:0},ae={key:0},oe={key:0,class:"chilly",src:Q,alt:"(spicy)"},le={key:1,class:"special"},se=ee((()=>(0,o._)("img",{src:X,alt:""},null,-1))),re=[se],de=["onClick"],ce=["onClick"],pe={key:3},ue=ee((()=>(0,o._)("label",{style:{color:"beige","margin-right":"1vw","letter-spacing":"0.1vw"}},"Confirm ?",-1))),me=["onClick"],he=["onClick"],ve={key:1},ye={class:"card-body"},_e=ee((()=>(0,o._)("option",{class:"input",value:"Starter"},"Starter",-1))),ge=ee((()=>(0,o._)("option",{class:"input",value:"Main course"},"Main course",-1))),fe=ee((()=>(0,o._)("option",{class:"input",value:"Beverage"},"Beverage",-1))),we=ee((()=>(0,o._)("option",{class:"input",value:"Desert"},"Desert",-1))),be=[_e,ge,fe,we],ke={id:"checkboxes"},Oe=ee((()=>(0,o._)("label",{class:"checkmark",for:"special",style:{"margin-right":"1.5vw",color:"beige"}},"Special",-1))),Se=ee((()=>(0,o._)("label",{class:"form-check-label",for:"spicy",style:{color:"beige"}},"Spicy",-1))),Te=["onClick"],Ce={key:0,style:{color:"red","font-weight":"bold",margin:"1vw 0vw 0vw 1vw"}},De=ee((()=>(0,o._)("br",null,null,-1))),Pe=["onClick"],Ne=["onClick"];function Ie(e,t,i,a,l,s){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",te,[(0,o.wy)((0,o._)("input",{class:"input",style:{width:"60vw"},type:"text",placeholder:"Search Item","onUpdate:modelValue":t[0]||(t[0]=e=>l.search=e)},null,512),[[n.nr,l.search]])]),(0,o._)("div",ie,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(this.fetchedItems,(e=>((0,o.wg)(),(0,o.iD)("div",{class:"card",key:e.itemName,style:{width:"18rem"}},[e.update?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",ne,[(0,o._)("h5",null,(0,v.zw)(e.itemName),1),(0,o._)("h6",null,(0,v.zw)(e.itemPrice)+" ₹",1),(0,o._)("p",null,(0,v.zw)(e.itemType),1),(0,o.Uk)("  "),e.isSpicy||e.isSpecial?((0,o.wg)(),(0,o.iD)("div",ae,[e.isSpicy?((0,o.wg)(),(0,o.iD)("img",oe)):(0,o.kq)("",!0),e.isSpecial?((0,o.wg)(),(0,o.iD)("span",le,re)):(0,o.kq)("",!0)])):(0,o.kq)("",!0),(0,o._)("div",null,[(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.itemIngredients,(e=>((0,o.wg)(),(0,o.iD)("li",{key:e},(0,v.zw)(e),1)))),128))])]),e.delete?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("button",{key:1,class:"btn-blue",onClick:t=>(s.btnClick(0,e.itemName,e.itemPrice,e.itemType,e.isSpecial,e.isSpicy,e.itemIngredients),e.update=!e.update)},"Edit ",8,de)),e.delete?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("button",{key:2,onClick:t=>e.delete=!e.delete,class:"btn-red"},"Delete",8,ce)),e.delete?((0,o.wg)(),(0,o.iD)("div",pe,[ue,(0,o._)("button",{onClick:t=>s.deleteItem(e.id),class:"btn-green"},"Yes",8,me),(0,o._)("button",{onClick:t=>e.delete=!e.delete,class:"btn-red"},"No",8,he)])):(0,o.kq)("",!0)])),e.update?((0,o.wg)(),(0,o.iD)("div",ve,[(0,o._)("div",ye,[(0,o.wy)((0,o._)("input",{class:"input",type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>l.updatedName=e),placeholder:"Name"},null,512),[[n.nr,l.updatedName]]),(0,o.wy)((0,o._)("input",{type:"Number",class:"input","onUpdate:modelValue":t[2]||(t[2]=e=>l.updatedPrice=e),placeholder:"Price"},null,512),[[n.nr,l.updatedPrice]]),(0,o.wy)((0,o._)("select",{class:"input","onUpdate:modelValue":t[3]||(t[3]=e=>l.updatedType=e)},be,512),[[n.bM,l.updatedType]]),(0,o._)("div",ke,[(0,o.wy)((0,o._)("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":t[4]||(t[4]=e=>l.updatedSpecial=e),id:"special",style:{"margin-right":"0.7vw"}},null,512),[[n.e8,l.updatedSpecial]]),Oe,(0,o.wy)((0,o._)("input",{class:"form-check-input","onUpdate:modelValue":t[5]||(t[5]=e=>l.updatedSpicy=e),id:"spicy",style:{"margin-right":"0.7vw"},type:"checkbox"},null,512),[[n.e8,l.updatedSpicy]]),Se]),(0,o._)("div",null,[(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.updatedList,(e=>((0,o.wg)(),(0,o.iD)("li",{key:e},[(0,o.Uk)((0,v.zw)(e)+" ",1),(0,o._)("button",{class:"btn-red",style:{width:"7vw","margin-top":"1vw"},onClick:t=>s.remove_from_updated_list(e)},"Remove",8,Te)])))),128))]),(0,o.wy)((0,o._)("input",{type:"text",class:"input","onUpdate:modelValue":t[6]||(t[6]=e=>l.temp=e),placeholder:"Add new ingredient and press enter",onKeyup:t[7]||(t[7]=(0,n.D2)(((...e)=>s.check_for_enter&&s.check_for_enter(...e)),["enter"]))},null,544),[[n.nr,l.temp]]),1==l.ingreError?((0,o.wg)(),(0,o.iD)("label",Ce,"Cannot be null")):(0,o.kq)("",!0)]),De,(0,o._)("div",null,[(0,o._)("button",{onClick:t=>(e.update=!e.update,s.updateItem(e.id)),class:"btn-green"},"save",8,Pe),(0,o._)("button",{onClick:t=>(s.btnClick(1),e.update=!e.update),class:"btn-red"},"cancel",8,Ne)])])])):(0,o.kq)("",!0)])))),128))])],64)}var Le={name:"viewAll",data(){return{fetchedItems:[],updatedName:"",updatedPrice:"",updatedType:"Starter",updatedSpecial:!1,updatedSpicy:!1,updatedList:[],temp:"",ingreError:!1,allMenuItems:[],search:"",HOST:window.location.host,PROTOCOL:window.location.protocol}},watch:{search(){this.search_item()}},methods:{search_item(){console.log(this.search),""==this.search.trim()&&(this.fetchedItems=this.allMenuItems),this.fetchedItems=this.allMenuItems.filter((e=>{if(-1!=e.itemName.toLowerCase().indexOf(this.search.toLowerCase()))return!0}))},check_for_enter(e){if("Enter"==e.key)if(""==this.temp.trim())this.ingreError=!0;else{let e=this.temp[0].toUpperCase()+this.temp.slice(1);this.updatedList.push(e),this.temp="",this.ingreError=!1}},remove_from_updated_list(e){let t=this.updatedList.indexOf(e);-1!=t&&this.updatedList.splice(t,1)},updateItem(e){fetch(`${this.PROTOCOL}//${this.HOST}/getFoodItems/`+e,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({itemName:this.updatedName,itemPrice:this.updatedPrice,itemType:this.updatedType,isSpecial:this.updatedSpecial,isSpicy:this.updatedSpicy,ingredients:this.updatedList})}),location.reload()},fetchItems(){fetch(`${this.PROTOCOL}//${this.HOST}/getFoodItems`).then((e=>{if(e.ok)return e.json()})).then((e=>{const t=[];for(const i in e)t.push({id:e[i]._id,isSpecial:e[i].isSpecial,isSpicy:e[i].isSpicy,itemName:e[i].itemName,itemPrice:e[i].itemPrice,itemType:e[i].itemType,itemIngredients:e[i].ingredients,update:!1,delete:!1});this.fetchedItems=t.slice(0),this.allMenuItems=this.fetchedItems.slice(0)}))},btnClick(e,t,i,n,a,o,l){0==e?(this.updatedName=t,this.updatedPrice=i,this.updatedType=n,this.updatedSpecial=a,this.updatedSpicy=o,this.updatedList=l.slice(0)):(this.updatedName="",this.updatedPrice="",this.updatedType="",this.updatedSpecial=0,this.updatedSpicy=0,this.updatedList=[])},deleteItem(e){fetch(`${this.PROTOCOL}//${this.HOST}/getFoodItems/`+e,{method:"DELETE"}),location.reload()}},created(){this.fetchItems()}};const He=(0,f.Z)(Le,[["render",Ie],["__scopeId","data-v-ebce857a"]]);var Ee=He;const $e=e=>((0,o.dD)("data-v-79dc2cc0"),e=e(),(0,o.Cn)(),e),Re={id:"container"},xe=$e((()=>(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",{scope:"col"},"Order Date"),(0,o._)("th",{scope:"col"},"Order Total"),(0,o._)("th",{scope:"col"},"Payment Type"),(0,o._)("th",{scope:"col"},"Table No."),(0,o._)("th",{scope:"col"},"Remove")])],-1))),Ue={id:"myTable"},qe=["onClick"];function Ve(e,t,i,n,a,l){return(0,o.wg)(),(0,o.iD)("div",Re,[(0,o._)("button",{class:"btn",onClick:t[0]||(t[0]=(...e)=>l.reload&&l.reload(...e))},"Reload"),(0,o._)("table",null,[xe,(0,o._)("tbody",Ue,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.allOrders,(e=>((0,o.wg)(),(0,o.iD)("tr",{key:e._id},[(0,o._)("td",null,(0,v.zw)(e.orderDate.substring(0,10)),1),(0,o._)("td",null,(0,v.zw)(e.orderTotal)+" ₹",1),(0,o._)("td",null,(0,v.zw)(e.paymentType),1),(0,o._)("td",null,(0,v.zw)(e.tableNumber),1),(0,o._)("td",null,[(0,o._)("button",{class:"btn-red",onClick:t=>l.remove(e._id)},"Remove",8,qe)])])))),128))])])])}var ze={name:"historyComp",data(){return{allOrders:[],HOST:window.location.host,PROTOCOL:window.location.protocol}},created(){fetch(`${this.PROTOCOL}//${this.HOST}/orders/fetchAll`).then((e=>{if(e.ok)return e.json()})).then((e=>{this.allOrders=e}))},methods:{reload(){location.reload()},remove(e){fetch(`${this.PROTOCOL}//${this.HOST}/orders/removeFromAll`+e,{method:"DELETE"}),location.reload()}}};const je=(0,f.Z)(ze,[["render",Ve],["__scopeId","data-v-79dc2cc0"]]);var Ae=je,Me=i.p+"img/taxi-no-connection.dadfa6e8.gif",Be=i.p+"img/done.52ee35b4.png";const Ye=e=>((0,o.dD)("data-v-622d4028"),e=e(),(0,o.Cn)(),e),Ke={id:"container"},Ze={key:0,class:"no"},Fe=Ye((()=>(0,o._)("span",null,"NO CURRENT ORDERS !",-1))),Je=Ye((()=>(0,o._)("img",{src:Me,alt:""},null,-1))),We=[Fe,Je],Ge={class:"card-body"},Qe={class:"card-header"},Xe={id:"tableNumber"},et={style:{margin:"0vw 0vw 1vw 0vw",position:"relative",left:"2vw",bottom:"0.7vw"}},tt={key:0,style:{color:"tomato"}},it={key:1},nt=Ye((()=>(0,o._)("label",{style:{color:"#21d667"}},[(0,o._)("img",{style:{width:"2vw"},src:Be,alt:""}),(0,o.Uk)(" Payment Done")],-1))),at=[nt],ot=Ye((()=>(0,o._)("div",{class:"line"},null,-1))),lt={key:0},st={key:1},rt=["onClick"],dt=["onClick"],ct={key:2,class:"served"},pt=Ye((()=>(0,o._)("label",null,"Order Served",-1))),ut=["onClick"];function mt(e,t,i,n,a,l){return(0,o.wg)(),(0,o.iD)("div",Ke,[a.orders.length<1?((0,o.wg)(),(0,o.iD)("div",Ze,We)):(0,o.kq)("",!0),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.orders,(e=>((0,o.wg)(),(0,o.iD)("div",{class:"card",key:e.isServed},[(0,o._)("div",Ge,[(0,o._)("div",Qe,[(0,o._)("span",Xe,(0,v.zw)(e.tableNumber),1),(0,o._)("div",et,[0==e.isServed?((0,o.wg)(),(0,o.iD)("label",tt,"Not served yet ")):(0,o.kq)("",!0),(0,o._)("label",null,"Payment Type: "+(0,v.zw)(e.paymentType),1),1==e.isPaymentDone?((0,o.wg)(),(0,o.iD)("div",it,at)):(0,o.kq)("",!0),(0,o._)("div",null,[(0,o._)("label",null,"Total: "+(0,v.zw)(e.total)+" ₹",1)])])]),ot,e.isServed?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("ul",lt,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.order,(e=>((0,o.wg)(),(0,o.iD)("li",{key:e.name}," ➭ "+(0,v.zw)(e.name),1)))),128))])),0==e.disableButtons?((0,o.wg)(),(0,o.iD)("div",st,[(0,o._)("button",{class:"btn-green",onClick:t=>l.confirm_recived_order(e._id,e.tableNumber,e.paymentType,e.total)},"Confirm",8,rt),(0,o._)("button",{class:"btn-red",onClick:t=>l.cancle_recived_order(e._id)},"Cancel",8,dt)])):(0,o.kq)("",!0),1==e.isServed?((0,o.wg)(),(0,o.iD)("div",ct,[pt,(0,o._)("div",null,[(0,o._)("button",{class:"btn-red",onClick:t=>l.remove_order(e._id),style:{margin:"1vw 0vw 0vw -0.2vw"}},"Remove",8,ut)])])):(0,o.kq)("",!0)])])))),128))])}var ht={name:"ordersComponent",data(){return{orders:[],HOST:window.location.host,PROTOCOL:window.location.protocol}},created(){setInterval(this.get_orders,1e3)},methods:{get_orders(){fetch(`${this.PROTOCOL}//${this.HOST}/orders/fetchOrders`).then((e=>{if(e.ok)return e.json();console.log("error")})).then((e=>{this.orders=e}))},confirm_recived_order(e,t,i,n){fetch(`${this.PROTOCOL}//${this.HOST}/orders/updatePaymentStatus`+e,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({isPaymentDone:!0,disableButtons:!0})}),fetch(`${this.PROTOCOL}//${this.HOST}/orders/saveToAllData`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tableNumber:t,orderTotal:n,paymentType:i})})},cancle_recived_order(e){fetch(`${this.PROTOCOL}//${this.HOST}/orders/cancleThisOrder`+e,{method:"DELETE"})},remove_order(e){fetch(`${this.PROTOCOL}//${this.HOST}/orders/orderServed`+e,{method:"DELETE"})}}};const vt=(0,f.Z)(ht,[["render",mt],["__scopeId","data-v-622d4028"]]);var yt=vt;const _t=e=>((0,o.dD)("data-v-07e257bc"),e=e(),(0,o.Cn)(),e),gt=_t((()=>(0,o._)("h2",null,"Welcome !",-1))),ft=[gt];function wt(e,t,i,n,a,l){return(0,o.wg)(),(0,o.iD)("div",null,ft)}var bt={};const kt=(0,f.Z)(bt,[["render",wt],["__scopeId","data-v-07e257bc"]]);var Ot=kt;const St=(0,a.p7)({history:(0,a.PO)(),routes:[{path:"/addNew",component:G},{path:"/viewAll",component:Ee},{path:"/history",component:Ae},{path:"/orders",component:yt},{path:"/",component:Ot}]}),Tt=(0,n.ri)(S);Tt.use(St),Tt.mount("#app")}},t={};function i(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,i),o.exports}i.m=e,function(){var e=[];i.O=function(t,n,a,o){if(!n){var l=1/0;for(c=0;c<e.length;c++){n=e[c][0],a=e[c][1],o=e[c][2];for(var s=!0,r=0;r<n.length;r++)(!1&o||l>=o)&&Object.keys(i.O).every((function(e){return i.O[e](n[r])}))?n.splice(r--,1):(s=!1,o<l&&(l=o));if(s){e.splice(c--,1);var d=a();void 0!==d&&(t=d)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[n,a,o]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.p="/"}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,o,l=n[0],s=n[1],r=n[2],d=0;if(l.some((function(t){return 0!==e[t]}))){for(a in s)i.o(s,a)&&(i.m[a]=s[a]);if(r)var c=r(i)}for(t&&t(n);d<l.length;d++)o=l[d],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(c)},n=self["webpackChunkadminapp"]=self["webpackChunkadminapp"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(6685)}));n=i.O(n)})();
//# sourceMappingURL=app.449c5ef0.js.map