import t from"../../utils/isValidDate";export default function r(r){if(!/^[0-9]{11}$/.test(r)){return{meta:{},valid:false}}const e=parseInt(r.charAt(0),10);let a=parseInt(r.substr(1,2),10);const s=parseInt(r.substr(3,2),10);const n=parseInt(r.substr(5,2),10);const i=e%2===0?17+e/2:17+(e+1)/2;a=i*100+a;if(!t(a,s,n,true)){return{meta:{},valid:false}}let l=[1,2,3,4,5,6,7,8,9,1];let f=0;let u;for(u=0;u<10;u++){f+=parseInt(r.charAt(u),10)*l[u]}f=f%11;if(f!==10){return{meta:{},valid:`${f}`===r.charAt(10)}}f=0;l=[3,4,5,6,7,8,9,1,2,3];for(u=0;u<10;u++){f+=parseInt(r.charAt(u),10)*l[u]}f=f%11;if(f===10){f=0}return{meta:{},valid:`${f}`===r.charAt(10)}}