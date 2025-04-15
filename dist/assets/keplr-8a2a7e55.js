import{d as B,i as c,u as M,j as T,k as V,C as I,o as r,l,m as $,A as F,n,w as y,v as K,F as O,p as E,t as C,q as G,s as L}from"./index-b40d15d5.js";const j={class:"bg-base-100 p-4 rounded text-center"},J={class:"flex"},U=["value"],q={class:"text-main mt-5"},R=n("div",{class:"mt-4 mb-4"}," If the chain is not offically support on Keplr, you can submit these parameters to enable Keplr. ",-1),H=B({__name:"keplr",setup(W){const D=c(""),o=c(""),d=M(),a=c({});T(()=>{const e=V();a.value=e.current||Object.values(d.chains)[0];debugger;u()});async function u(){var b,h,m,f,x,v,k,g,w,_,P;const e=a.value;if(!((h=(b=e.endpoints)==null?void 0:b.rest)!=null&&h.at(0)))throw new Error("Endpoint does not set");const A=(await I.newDefault(((f=(m=e.endpoints.rest)==null?void 0:m.at(0))==null?void 0:f.address)||"").getBaseBlockLatest()).block.header.chain_id,p=e.keplrPriceStep||{low:.01,average:.025,high:.03},i=((x=e.assets[0].denom_units.find(S=>S.denom===e.assets[0].symbol.toLowerCase()))==null?void 0:x.exponent)||6;o.value=JSON.stringify({chainId:A,chainName:e.chainName,rpc:(g=(k=(v=e.endpoints)==null?void 0:v.rpc)==null?void 0:k.at(0))==null?void 0:g.address,rest:(P=(_=(w=e.endpoints)==null?void 0:w.rest)==null?void 0:_.at(0))==null?void 0:P.address,bip44:{coinType:Number(e.coinType)},coinType:Number(e.coinType),bech32Config:{bech32PrefixAccAddr:e.bech32Prefix,bech32PrefixAccPub:`${e.bech32Prefix}pub`,bech32PrefixValAddr:`${e.bech32Prefix}valoper`,bech32PrefixValPub:`${e.bech32Prefix}valoperpub`,bech32PrefixConsAddr:`${e.bech32Prefix}valcons`,bech32PrefixConsPub:`${e.bech32Prefix}valconspub`},currencies:[{coinDenom:e.assets[0].symbol,coinMinimalDenom:e.assets[0].base,coinDecimals:i,coinGeckoId:e.assets[0].coingecko_id||"unknown"}],feeCurrencies:[{coinDenom:e.assets[0].symbol,coinMinimalDenom:e.assets[0].base,coinDecimals:i,coinGeckoId:e.assets[0].coingecko_id||"unknown",gasPriceStep:p}],gasPriceStep:p,stakeCurrency:{coinDenom:e.assets[0].symbol,coinMinimalDenom:e.assets[0].base,coinDecimals:i,coinGeckoId:e.assets[0].coingecko_id||"unknown"},features:e.keplrFeatures||[]},null,"	")}function N(){window.keplr&&window.keplr.experimentalSuggestChain(JSON.parse(o.value)).catch(e=>{D.value=e})}return(e,t)=>(r(),l("div",j,[$(F,{id:"keplr-banner-ad",unit:"banner",width:"970px",height:"90px"}),n("div",J,[y(n("select",{"onUpdate:modelValue":t[0]||(t[0]=s=>a.value=s),class:"select select-bordered mx-5",onChange:u},[(r(!0),l(O,null,E(G(d).chains,s=>(r(),l("option",{value:s},C(s.chainName),9,U))),256))],544),[[K,a.value]]),n("button",{class:"btn !bg-yes !border-yes text-white px-10",onClick:N},"Add "+C(a.value.chainName)+" TO Keplr Wallet",1)]),n("div",q,[y(n("textarea",{"onUpdate:modelValue":t[1]||(t[1]=s=>o.value=s),class:"textarea textarea-bordered w-full",rows:"15"},null,512),[[L,o.value]])]),R]))}});export{H as default};
