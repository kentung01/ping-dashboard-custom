import{d as B,i as c,u as M,j as T,k as V,o as r,l,m as I,A as $,n,w as P,v as F,F as O,p as E,t as y,q as G,s as K,C as L}from"./index-b40d15d5.js";const U={class:"bg-base-100 p-4 rounded text-center"},j={class:"flex"},J=["value"],q={class:"text-main mt-5"},R=n("div",{class:"mt-4 mb-4"}," If the chain is not offically support on Keplr, you can submit these parameters to enable Keplr. ",-1),H=B({__name:"unisat",setup(W){const C=c(""),o=c(""),d=M(),a=c({});T(()=>{const e=V();a.value=e.current||Object.values(d.chains)[0]});async function D(){var b,p,h,m,f,x,v,k,g,w,_;const e=a.value;if(!((p=(b=e.endpoints)==null?void 0:b.rest)!=null&&p.at(0)))throw new Error("Endpoint does not set");const A=(await L.newDefault(((m=(h=e.endpoints.rest)==null?void 0:h.at(0))==null?void 0:m.address)||"").getBaseBlockLatest()).block.header.chain_id,u=e.keplrPriceStep||{low:.01,average:.025,high:.03},i=((f=e.assets[0].denom_units.find(S=>S.denom===e.assets[0].symbol.toLowerCase()))==null?void 0:f.exponent)||6;o.value=JSON.stringify({chainId:A,chainName:e.chainName,rpc:(k=(v=(x=e.endpoints)==null?void 0:x.rpc)==null?void 0:v.at(0))==null?void 0:k.address,rest:(_=(w=(g=e.endpoints)==null?void 0:g.rest)==null?void 0:w.at(0))==null?void 0:_.address,bip44:{coinType:Number(e.coinType)},coinType:Number(e.coinType),bech32Config:{bech32PrefixAccAddr:e.bech32Prefix,bech32PrefixAccPub:`${e.bech32Prefix}pub`,bech32PrefixValAddr:`${e.bech32Prefix}valoper`,bech32PrefixValPub:`${e.bech32Prefix}valoperpub`,bech32PrefixConsAddr:`${e.bech32Prefix}valcons`,bech32PrefixConsPub:`${e.bech32Prefix}valconspub`},currencies:[{coinDenom:e.assets[0].symbol,coinMinimalDenom:e.assets[0].base,coinDecimals:i,coinGeckoId:e.assets[0].coingecko_id||"unknown"}],feeCurrencies:[{coinDenom:e.assets[0].symbol,coinMinimalDenom:e.assets[0].base,coinDecimals:i,coinGeckoId:e.assets[0].coingecko_id||"unknown",gasPriceStep:u}],gasPriceStep:u,stakeCurrency:{coinDenom:e.assets[0].symbol,coinMinimalDenom:e.assets[0].base,coinDecimals:i,coinGeckoId:e.assets[0].coingecko_id||"unknown"},features:e.keplrFeatures||[]},null,"	")}function N(){window.unisat&&window.unisat.experimentalSuggestChain(JSON.parse(o.value)).catch(e=>{C.value=e})}return(e,t)=>(r(),l("div",U,[I($,{id:"keplr-banner-ad",unit:"banner",width:"970px",height:"90px"}),n("div",j,[P(n("select",{"onUpdate:modelValue":t[0]||(t[0]=s=>a.value=s),class:"select select-bordered mx-5",onChange:D},[(r(!0),l(O,null,E(G(d).chains,s=>(r(),l("option",{value:s},y(s.chainName),9,J))),256))],544),[[F,a.value]]),n("button",{class:"btn !bg-yes !border-yes text-white px-10",onClick:N},"Add "+y(a.value.chainName)+" TO Unisat Wallet",1)]),n("div",q,[P(n("textarea",{"onUpdate:modelValue":t[1]||(t[1]=s=>o.value=s),class:"textarea textarea-bordered w-full",rows:"15"},null,512),[[K,o.value]])]),R]))}});export{H as default};
