var e=Object.defineProperty,l=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,n=(l,a,t)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[a]=t,r=(e,r)=>{for(var u in r||(r={}))a.call(r,u)&&n(e,u,r[u]);if(l)for(var u of l(r))t.call(r,u)&&n(e,u,r[u]);return e};import{r as u,o,c as s,F as d,a as p,u as c,b as i,t as v,d as m,w as y,v as b,e as f,f as h,i as x,T as g,g as w,h as M,j as P,k as I,l as U,m as V,n as F}from"./vendor.d40ce656.js";const k={class:"container mx-auto py-5 flex flex-col space-y-5"},j={class:"border-2 rounded-md p-3 flex flex-col space-y-3"},A={class:"text-xl font-medium text-gray-600"},C={class:"flex flex-row space-x-3"},R={class:"flex flex-col border rounded-md p-3 space-y-3 flex-grow"},T={class:"flex flex-col space-y-2"},O=m(" Principle "),q={class:"flex flex-col space-y-2"},D=m(" Interest Rate (%) "),E={class:"flex flex-col space-y-2"},L=m(" Other Fees (year total) "),N={class:"flex flex-col space-y-2"},$=m(" Monthly Payment "),S={class:"text-xs text-gray-500 italic"},_={class:"flex flex-col border rounded-md w-40 min-w-min px-5 justify-center"},Y={class:"flex justify-center"},B={class:"border-2 rounded-md p-3 flex flex-col space-y-3"},Q=i("h2",{class:"text-xl font-medium text-gray-600"},"Total",-1),W={setup(e){const l=u([[{amount:312e3,rate:2.19,fees:0,repayments:2e3},{amount:0,rate:0,fees:0,repayments:0}]]),a=(e,l)=>f(e*(l/12/100)),t=(e,l,t,n=0)=>({principle:f(e-(t-a(e,l))),interest:a(e,l),principlePaid:t-a(e,l),payment:t,totalInterestPaid:a(e,l)+n}),n=(e,l,a,n)=>{let r={principle:e,interest:0,principlePaid:0,payment:n,totalInterestPaid:0};for(let u=1;u<=a;u++)r=t(r.principle,l,n,r.totalInterestPaid);return r},r=e=>new Intl.NumberFormat("en-AU",{style:"currency",currency:"AUD"}).format(e),f=e=>Math.round(100*e)/100,h=(e,l,a,t)=>n(e,l,12,a).totalInterestPaid+t,x=(e,l,a)=>n(e,l,12,a).principle,g=e=>{let l=0;return e.forEach((e=>{l=l+n(e.amount,e.rate,12,e.repayments).totalInterestPaid+Number(e.fees)})),f(l)},w=e=>{let l=0;return e.forEach((e=>{l+=n(e.amount,e.rate,12,e.repayments).principle})),f(l)},M=()=>{let e=0;return l.forEach((l=>{e+=g(l)})),f(e)},P=()=>{let e=0;return l.forEach((l=>{e+=w(l)})),f(e)};return(e,a)=>(o(),s("div",k,[(o(!0),s(d,null,p(c(l),((e,a)=>(o(),s("div",j,[i("h2",A,[m(" Year "+v(a+1)+" ",1),i("button",{onClick:e=>{return t=a,l.splice(t,1);var t}},"Remove",8,["onClick"])]),i("div",C,[(o(!0),s(d,null,p(e,((l,a)=>{return o(),s("div",R,[i("button",{onClick:l=>((e,l)=>e.splice(l))(e,a)},"Remove",8,["onClick"]),i("label",T,[O,y(i("input",{"onUpdate:modelValue":e=>l.amount=e,placeholder:"Amount",class:"border rounded-md p-2"},null,8,["onUpdate:modelValue"]),[[b,l.amount]])]),i("label",q,[D,y(i("input",{"onUpdate:modelValue":e=>l.rate=e,placeholder:"Rate",class:"border rounded-md p-2"},null,8,["onUpdate:modelValue"]),[[b,l.rate]])]),i("label",E,[L,y(i("input",{"onUpdate:modelValue":e=>l.fees=e,placeholder:"Fees",class:"border rounded-md p-2"},null,8,["onUpdate:modelValue"]),[[b,l.fees]])]),i("label",N,[$,y(i("input",{"onUpdate:modelValue":e=>l.repayments=e,placeholder:"Repayments",class:"border rounded-md p-2"},null,8,["onUpdate:modelValue"]),[[b,l.repayments]]),i("span",S,"Minimum Payment: "+v(r((t=l.rate,n=30,u=l.amount,f((t/1200+t/1200/(Math.pow(1+t/1200,12*n)-1))*u)))),1)]),i("span",null,"Interest & Fees Paid: "+v(r(h(l.amount,l.rate,l.repayments,l.fees))),1),i("span",null,"Loan Value: "+v(r(x(l.amount,l.rate,l.repayments))),1)]);var t,n,u})),256)),i("div",_,[i("button",{class:"rounded-md p-3 bg-gray-200 hover:bg-gray-100",onClick:l=>(e=>e.push({amount:0,rate:0,fees:0,repayments:0}))(e)},"New Loan +",8,["onClick"])])]),i("span",null,"Interest & Fees Paid: "+v(r(g(e))),1),i("span",null,"Loan Value: "+v(r(w(e))),1)])))),256)),i("div",Y,[i("button",{class:"rounded-md w-36 p-3 bg-gray-200 hover:bg-gray-100",onClick:a[1]||(a[1]=e=>l.push([{amount:0,rate:0,fees:0,repayments:0}]))},"Add Year +")]),i("div",B,[Q,i("span",null,"Interest & Fees Paid: "+v(r(M())),1),i("span",null,"Loan Value: "+v(r(P())),1)])]))}};const z={class:"container mx-auto py-5 flex flex-col space-y-5"},G={class:"flex flex-row space-x-3 justify-between"},H={class:"flex flex-col space-y-2"},J=m(" Amount borrowed ($) "),K={class:"flex flex-row space-x-3 justify-between"},X={class:"flex flex-col space-y-2"},Z=m(" Interest Rate (%) "),ee={class:"flex flex-col space-y-2"},le=m(" Term (years) "),ae={class:"flex flex-col space-y-2"},te=m(" Monthly Payment ($) "),ne={class:"flex flex-row space-x-3 justify-between"},re={class:"flex flex-col space-y-2"},ue=m(" Minimum Payment ($) "),oe={class:"flex flex-col space-y-2"},se=m(" Time until fully paid "),de={class:"flex flex-col space-y-2"},pe=m(" Total Interest Paid "),ce=i("tr",null,[i("th",null,"Period"),i("th",null,"Principle"),i("th",null,"Interest"),i("th",null,"Principle Paid"),i("th",null,"Payment"),i("th",null,"Total Interest Paid")],-1),ie={setup(e){const l=f(3e5),a=f(30),t=f(2.55),n=f(1193.18),u=h((()=>U(t.value,a.value,l.value))),m=h((()=>`${Math.floor((g.value.length-1)/12)} years, ${(g.value.length-1)%12} months`)),g=h((()=>{let e=[{principle:l.value,interest:null,principlePaid:null,payment:null,totalInterestPaid:null}];for(;e.slice(-1)[0].principle>0;){let l=e.slice(-1)[0],a=I(l.principle,t.value,Math.max(n.value,u.value),l.totalInterestPaid);e.push(r({},a))}return e})),w=e=>Math.round(100*e)/100,M=e=>new Intl.NumberFormat("en-AU",{style:"currency",currency:"AUD"}).format(e),P=(e,l)=>w(e*(l/12/100)),I=(e,l,a,t=0)=>(e<a&&(a=e+P(e,l)),{principle:w(e-(a-P(e,l))),interest:P(e,l),principlePaid:a-P(e,l),payment:a,totalInterestPaid:P(e,l)+t}),U=(e,l,a)=>w((e/1200+e/1200/(Math.pow(1+e/1200,12*l)-1))*a);return(e,r)=>(o(),s("div",z,[i("div",G,[i("label",H,[J,y(i("input",{"onUpdate:modelValue":r[1]||(r[1]=e=>l.value=e),placeholder:"Initial Principle",class:"border rounded-md p-2"},null,512),[[b,l.value]])])]),i("div",K,[i("label",X,[Z,y(i("input",{"onUpdate:modelValue":r[2]||(r[2]=e=>t.value=e),placeholder:"Interest Rate",class:"border rounded-md p-2"},null,512),[[b,t.value]])]),i("label",ee,[le,y(i("input",{"onUpdate:modelValue":r[3]||(r[3]=e=>a.value=e),placeholder:"Term",class:"border rounded-md p-2"},null,512),[[b,a.value]])]),i("label",ae,[te,y(i("input",{"onUpdate:modelValue":r[4]||(r[4]=e=>n.value=e),placeholder:"Payment",class:"border rounded-md p-2"},null,512),[[b,n.value]])])]),i("div",ne,[i("label",re,[ue,i("input",{disabled:"",value:M(c(u)),placeholder:"Minimum Payment",class:"border rounded-md p-2"},null,8,["value"])]),i("label",oe,[se,y(i("input",{disabled:"","onUpdate:modelValue":r[5]||(r[5]=e=>x(m)?m.value=e:null),placeholder:"Time until fully paid",class:"border rounded-md p-2"},null,512),[[b,c(m)]])]),i("label",de,[pe,i("input",{disabled:"",value:M(c(g).slice(-1)[0].totalInterestPaid),placeholder:"Time until fully paid",class:"border rounded-md p-2"},null,8,["value"])])]),i("table",null,[ce,(o(!0),s(d,null,p(c(g),((e,l)=>(o(),s("tr",{class:l%12==0&&0!=l?"border-b-2 border-black":""},[i("td",null,v(l),1),i("td",null,v(M(e.principle)),1),i("td",null,v(M(e.interest)),1),i("td",null,v(M(e.principlePaid)),1),i("td",null,v(M(e.payment)),1),i("td",null,v(M(e.totalInterestPaid)),1)],2)))),256))])]))}},ve=i("title",null,"Ideal Investment Frequency",-1),me={class:"container mx-auto py-5 flex flex-col space-y-5"},ye=m(" Savings each Period "),be=m(" Investment Frequency "),fe=M('<option value="365">Daily</option><option value="52">Weekly</option><option value="26">Fortnightly</option><option value="12">Monthly</option><option value="4">Quarterly</option>',5),he=m(" Savings Rate % "),xe=m(" Investment Returns % "),ge=m(" Brokerage Cost "),we={setup(e){const l=f(100),a=f("26"),t=f(4),n=f(9),r=f(10),u=h((()=>t.value/100)),p=h((()=>n.value/100)),m=h((()=>Math.pow(1+u.value/12,1/a.value*12))),x=h((()=>Math.pow(1+p.value,1/a.value))),M=h((()=>(l.value-r.value+r.value*m.value)*Math.log(x.value))),P=h((()=>l.value*Math.log(x.value/m.value))),I=h((()=>l.value*Math.log(m.value))),U=h((()=>.5*(M.value*x.value/m.value*Math.pow(Math.log(x.value/m.value),2)-P.value*x.value*Math.pow(Math.log(x.value),2)))),V=h((()=>M.value*x.value/m.value*Math.log(x.value/m.value)-P.value*x.value*Math.log(x.value))),F=h((()=>M.value*x.value/m.value-P.value*x.value-I.value)),k=h((()=>Math.sqrt(Math.pow(V.value,2)-4*U.value*F.value)/(2*Math.abs(U.value))-V.value/(2*U.value))),j=h((()=>Math.round(k.value))),A=h((()=>(e=>{for(var l,a=Math.max(...e),t=a,n=Math.min(...e);n<=a;n+=1)t=function e(a,t){return t%a==0?t:e(a,t+l)}(n,l=t);return t})([j.value+1,j.value+1-1,j.value+1+1]))),C=h((()=>(l.value*(1-Math.pow(m.value,j.value-1+1))-r.value*(1-m.value))*(1-Math.pow(x.value,A.value))/((1-m.value)*(1-Math.pow(x.value,j.value-1+1))))),R=h((()=>(l.value*(1-Math.pow(m.value,j.value+1))-r.value*(1-m.value))*(1-Math.pow(x.value,A.value))/((1-m.value)*(1-Math.pow(x.value,j.value+1))))),T=h((()=>(l.value*(1-Math.pow(m.value,j.value+1+1))-r.value*(1-m.value))*(1-Math.pow(x.value,A.value))/((1-m.value)*(1-Math.pow(x.value,j.value+1+1))))),O=h((()=>{let e=Math.pow(1+u.value/12,1/a.value*12);return 0===u.value?l.value*(j.value+1):Math.round(l.value*(1-Math.pow(e,j.value+1))/(1-e))})),q=h((()=>O.value-l.value*(j.value+1))),D=h((()=>{switch(a.value){case"365":return"days";case"52":return"weeks";case"26":return"fortnights";case"12":return"months";case"4":return"quarters"}})),E=e=>new Intl.NumberFormat("en-AU",{style:"currency",currency:"AUD",minimumFractionDigits:0}).format(e);return(e,u)=>(o(),s(d,null,[(o(),s(g,{to:"head"},[ve])),i("div",me,[i("label",null,[ye,y(i("input",{class:"border rounded-md p-1.5 border-gray-300 ml-3","onUpdate:modelValue":u[1]||(u[1]=e=>l.value=e),placeholder:"s"},null,512),[[b,l.value]])]),i("label",null,[be,y(i("select",{"onUpdate:modelValue":u[2]||(u[2]=e=>a.value=e)},[fe],512),[[w,a.value]])]),i("label",null,[he,y(i("input",{class:"border rounded-md p-1.5 border-gray-300 ml-3","onUpdate:modelValue":u[3]||(u[3]=e=>t.value=e),placeholder:"r"},null,512),[[b,t.value]])]),i("label",null,[xe,y(i("input",{class:"border rounded-md p-1.5 border-gray-300 ml-3","onUpdate:modelValue":u[4]||(u[4]=e=>n.value=e),placeholder:"g"},null,512),[[b,n.value]])]),i("label",null,[ge,y(i("input",{class:"border rounded-md p-1.5 border-gray-300 ml-3","onUpdate:modelValue":u[5]||(u[5]=e=>r.value=e),placeholder:"b"},null,512),[[b,r.value]])]),i("span",null,"n + 1 : "+v(c(j)+1),1),i("span",null,"t (periods): "+v(c(A)),1),i("span",null,"fv (n-1): "+v(c(C)),1),i("span",null,"fv (n): "+v(c(R)),1),i("span",null,"fv (n+1): "+v(c(T)),1),i("span",null,"Invest "+v(E(c(O)))+" every "+v(c(j)+1)+" "+v(c(D)),1),i("span",null,"Interest: "+v(E(c(q))),1)])],64))}},Me={class:"space-x-7 p-3 bg-gray-200 shadow-md"},Pe=m("Investment Frequency"),Ie=m("Loan Cost"),Ue=m("Mortgage"),Ve={setup:e=>(e,l)=>{const a=P("router-link"),t=P("router-view");return o(),s(d,null,[i("div",Me,[i(a,{class:"py-1 border-b-2 hover:border-gray-400","active-class":"border-b-2 border-gray-500",to:"/"},{default:I((()=>[Pe])),_:1}),i(a,{class:"py-1 border-b-2 hover:border-gray-400","active-class":"border-b-2 border-gray-500",to:"/loan"},{default:I((()=>[Ie])),_:1}),i(a,{class:"py-1 border-b-2 hover:border-gray-400","active-class":"border-b-2 border-gray-500",to:"/mortgage"},{default:I((()=>[Ue])),_:1})]),i(t)],64)}};const Fe=[{path:"/",component:we},{path:"/loan",component:W},{path:"/mortgage",component:ie}],ke=U({history:V(),routes:Fe}),je=F(Ve);je.use(ke),je.mount("#app");
