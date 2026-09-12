(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const pc="soldatox-settings-v3",ua={lowest:{shadows:"off",shadowQuality:"low",antiAliasing:"off",textures:"lowest",effects:"lowest",viewDistance:20,ao:!1,bloom:!1,motionBlur:!1,reflections:"off",particles:"lowest",anisotropic:1,postProcessing:!1,rayTracing:!1,pixelRatio:.6},low:{shadows:"low",shadowQuality:"low",antiAliasing:"fxaa",textures:"low",effects:"low",viewDistance:35,ao:!1,bloom:!1,motionBlur:!1,reflections:"low",particles:"low",anisotropic:2,postProcessing:!1,rayTracing:!1,pixelRatio:.75},medium:{shadows:"medium",shadowQuality:"medium",antiAliasing:"smaa",textures:"medium",effects:"medium",viewDistance:55,ao:!0,bloom:!1,motionBlur:!1,reflections:"medium",particles:"medium",anisotropic:4,postProcessing:!0,rayTracing:!1,pixelRatio:1},high:{shadows:"high",shadowQuality:"high",antiAliasing:"taa",textures:"high",effects:"high",viewDistance:75,ao:!0,bloom:!0,motionBlur:!1,reflections:"high",particles:"high",anisotropic:8,postProcessing:!0,rayTracing:!0,pixelRatio:1.25},epic:{shadows:"ultra",shadowQuality:"ultra",antiAliasing:"msaa4",textures:"epic",effects:"epic",viewDistance:90,ao:!0,bloom:!0,motionBlur:!0,reflections:"ultra",particles:"epic",anisotropic:16,postProcessing:!0,rayTracing:!0,pixelRatio:1.5},maximum:{shadows:"ultra",shadowQuality:"ultra",antiAliasing:"msaa8",textures:"max",effects:"max",viewDistance:100,ao:!0,bloom:!0,motionBlur:!0,reflections:"ultra",particles:"max",anisotropic:16,postProcessing:!0,rayTracing:!0,pixelRatio:2}},xi={screen:{resolution:"native",aspect:"auto",displayMode:"windowed",stretched:!1,brightness:70,contrast:50,fov:90,vsync:!0,fpsLimit:"unlimited"},graphics:{preset:"epic",...ua.epic},audio:{master:80,music:60,ambient:70,sfx:80,ui:70,voice:80,muteUnfocused:!0},extra:{hudColor:"#ffffff",crosshairColor:"#ffffff",hudOpacity:90,hudScale:100,showFps:!0,showPing:!1,hitMarkers:!0,damageColor:"#ff3b3b",radarOpacity:80,crosshairStyle:"cross",crosshairLength:6,crosshairThickness:2,crosshairGap:5,crosshairDot:!1,crosshairOutline:!0}};function vh(){try{const r=localStorage.getItem(pc);if(!r)return structuredClone(xi);const t=JSON.parse(r);return{screen:{...xi.screen,...t.screen},graphics:{...xi.graphics,...t.graphics},audio:{...xi.audio,...t.audio},extra:{...xi.extra,...t.extra}}}catch{return structuredClone(xi)}}function _h(r){localStorage.setItem(pc,JSON.stringify(r))}function xh(r,t){const e=ua[t];return e&&(r.graphics={...r.graphics,preset:t,...e}),r}function Wr(r,t,e){const n=r.graphics.preset;if(r.graphics[t]=e,n==="custom")return;const i=ua[n];i&&i[t]!==e&&(r.graphics.preset="custom")}let hs,mc=.7,gc=.8;function vc(){try{return hs||(hs=new AudioContext),hs.state==="suspended"&&hs.resume(),hs}catch{return null}}function qi({master:r=80,ui:t=70}={}){gc=r/100,mc=t/100}function ji({freq:r,dur:t,type:e="square",vol:n=.04,slide:i=0}){const s=vc();if(s)try{const o=s.createOscillator(),a=s.createGain(),l=s.currentTime,c=Math.max(1e-4,n*mc*gc);o.type=e,o.frequency.setValueAtTime(r,l),i&&o.frequency.exponentialRampToValueAtTime(Math.max(40,r+i),l+t),a.gain.setValueAtTime(c,l),a.gain.exponentialRampToValueAtTime(1e-4,l+t),o.connect(a).connect(s.destination),o.start(l),o.stop(l+t+.02)}catch{}}function Mh(){ji({freq:1960,dur:.045,type:"square",vol:.028})}function Ee(){ji({freq:420,dur:.07,type:"square",vol:.05,slide:-180}),ji({freq:1480,dur:.04,type:"triangle",vol:.02})}function hn(){ji({freq:240,dur:.09,type:"square",vol:.045,slide:-80})}function Mi(){ji({freq:520,dur:.08,type:"square",vol:.04}),ji({freq:780,dur:.1,type:"triangle",vol:.03,slide:120})}function _c(){vc()}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const da="168",yh=0,Oa=1,Sh=2,xc=1,Mc=2,Pn=3,qn=0,De=1,sn=2,Ie=0,Xi=1,Co=2,Ba=3,za=4,yc=5,Ln=100,Eh=101,bh=102,wh=103,Th=104,Ro=200,Ah=201,Ch=202,Rh=203,Po=204,Lo=205,Sc=206,Ph=207,Ec=208,Lh=209,Ih=210,Dh=211,Nh=212,Uh=213,Fh=214,Oh=0,Bh=1,zh=2,Rr=3,kh=4,Hh=5,Vh=6,Gh=7,bc=0,Wh=1,qh=2,Wn=0,wc=1,Tc=2,Ac=3,fa=4,Xh=5,Cc=6,Rc=7,Pc=300,Ki=301,Zi=302,Io=303,Do=304,Nr=306,oi=1e3,si=1001,No=1002,Ae=1003,Yh=1004,Hs=1005,rn=1006,qr=1007,ri=1008,Dn=1009,Lc=1010,Ic=1011,Rs=1012,pa=1013,ai=1014,an=1015,Xe=1016,ma=1017,ga=1018,li=1020,Dc=35902,Nc=1021,Uc=1022,ln=1023,Fc=1024,Oc=1025,Yi=1026,ci=1027,Ur=1028,va=1029,Bc=1030,_a=1031,xa=1033,Sr=33776,Er=33777,br=33778,wr=33779,Uo=35840,Fo=35841,Oo=35842,Bo=35843,zo=36196,ko=37492,Ho=37496,Vo=37808,Go=37809,Wo=37810,qo=37811,Xo=37812,Yo=37813,$o=37814,jo=37815,Ko=37816,Zo=37817,Jo=37818,Qo=37819,ta=37820,ea=37821,Tr=36492,na=36494,ia=36495,zc=36283,sa=36284,ra=36285,oa=36286,$h=3200,jh=3201,Ma=0,Kh=1,on="",We="srgb",Xn="srgb-linear",ya="display-p3",Fr="display-p3-linear",Pr="linear",re="srgb",Lr="rec709",Ir="p3",yi=7680,ka=519,Zh=512,Jh=513,Qh=514,kc=515,tu=516,eu=517,nu=518,iu=519,Ha=35044,Va="300 es",In=2e3,Dr=2001;class ns{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ga=1234567;const bs=Math.PI/180,Ps=180/Math.PI;function is(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(be[r&255]+be[r>>8&255]+be[r>>16&255]+be[r>>24&255]+"-"+be[t&255]+be[t>>8&255]+"-"+be[t>>16&15|64]+be[t>>24&255]+"-"+be[e&63|128]+be[e>>8&255]+"-"+be[e>>16&255]+be[e>>24&255]+be[n&255]+be[n>>8&255]+be[n>>16&255]+be[n>>24&255]).toLowerCase()}function Te(r,t,e){return Math.max(t,Math.min(e,r))}function Sa(r,t){return(r%t+t)%t}function su(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function ru(r,t,e){return r!==t?(e-r)/(t-r):0}function ws(r,t,e){return(1-e)*r+e*t}function ou(r,t,e,n){return ws(r,t,1-Math.exp(-e*n))}function au(r,t=1){return t-Math.abs(Sa(r,t*2)-t)}function lu(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function cu(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function hu(r,t){return r+Math.floor(Math.random()*(t-r+1))}function uu(r,t){return r+Math.random()*(t-r)}function du(r){return r*(.5-Math.random())}function fu(r){r!==void 0&&(Ga=r);let t=Ga+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function pu(r){return r*bs}function mu(r){return r*Ps}function gu(r){return(r&r-1)===0&&r!==0}function vu(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function _u(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function xu(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),d=s((t-n)/2),u=o((t-n)/2),p=s((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":r.set(a*h,l*d,l*u,a*c);break;case"YZY":r.set(l*u,a*h,l*d,a*c);break;case"ZXZ":r.set(l*d,l*u,a*h,a*c);break;case"XZX":r.set(a*h,l*g,l*p,a*c);break;case"YXY":r.set(l*p,a*h,l*g,a*c);break;case"ZYZ":r.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Hi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Pe(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Mu={DEG2RAD:bs,RAD2DEG:Ps,generateUUID:is,clamp:Te,euclideanModulo:Sa,mapLinear:su,inverseLerp:ru,lerp:ws,damp:ou,pingpong:au,smoothstep:lu,smootherstep:cu,randInt:hu,randFloat:uu,randFloatSpread:du,seededRandom:fu,degToRad:pu,radToDeg:mu,isPowerOfTwo:gu,ceilPowerOfTwo:vu,floorPowerOfTwo:_u,setQuaternionFromProperEuler:xu,normalize:Pe,denormalize:Hi};class Bt{constructor(t=0,e=0){Bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(t,e,n,i,s,o,a,l,c){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],v=i[0],f=i[3],m=i[6],_=i[1],M=i[4],E=i[7],L=i[2],A=i[5],C=i[8];return s[0]=o*v+a*_+l*L,s[3]=o*f+a*M+l*A,s[6]=o*m+a*E+l*C,s[1]=c*v+h*_+d*L,s[4]=c*f+h*M+d*A,s[7]=c*m+h*E+d*C,s[2]=u*v+p*_+g*L,s[5]=u*f+p*M+g*A,s[8]=u*m+p*E+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*s,p=c*s-o*l,g=e*d+n*u+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(i*c-h*n)*v,t[2]=(a*n-i*o)*v,t[3]=u*v,t[4]=(h*e-i*l)*v,t[5]=(i*s-a*e)*v,t[6]=p*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Xr.makeScale(t,e)),this}rotate(t){return this.premultiply(Xr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Xr=new Xt;function Hc(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Ls(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function yu(){const r=Ls("canvas");return r.style.display="block",r}const Wa={};function Ts(r){r in Wa||(Wa[r]=!0,console.warn(r))}function Su(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const qa=new Xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Xa=new Xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),us={[Xn]:{transfer:Pr,primaries:Lr,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[We]:{transfer:re,primaries:Lr,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Fr]:{transfer:Pr,primaries:Ir,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(Xa),fromReference:r=>r.applyMatrix3(qa)},[ya]:{transfer:re,primaries:Ir,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(Xa),fromReference:r=>r.applyMatrix3(qa).convertLinearToSRGB()}},Eu=new Set([Xn,Fr]),Qt={enabled:!0,_workingColorSpace:Xn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Eu.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=us[t].toReference,i=us[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return us[r].primaries},getTransfer:function(r){return r===on?Pr:us[r].transfer},getLuminanceCoefficients:function(r,t=this._workingColorSpace){return r.fromArray(us[t].luminanceCoefficients)}};function $i(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Yr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Si;class bu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Si===void 0&&(Si=Ls("canvas")),Si.width=t.width,Si.height=t.height;const n=Si.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Si}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ls("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=$i(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor($i(e[n]/255)*255):e[n]=$i(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let wu=0;class Vc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=is(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push($r(i[o].image)):s.push($r(i[o]))}else s=$r(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function $r(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?bu.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tu=0;class Ce extends ns{constructor(t=Ce.DEFAULT_IMAGE,e=Ce.DEFAULT_MAPPING,n=si,i=si,s=rn,o=ri,a=ln,l=Dn,c=Ce.DEFAULT_ANISOTROPY,h=on){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=is(),this.name="",this.source=new Vc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case oi:t.x=t.x-Math.floor(t.x);break;case si:t.x=t.x<0?0:1;break;case No:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case oi:t.y=t.y-Math.floor(t.y);break;case si:t.y=t.y<0?0:1;break;case No:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ce.DEFAULT_IMAGE=null;Ce.DEFAULT_MAPPING=Pc;Ce.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,n=0,i=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],v=l[2],f=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+f)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,E=(p+1)/2,L=(m+1)/2,A=(h+u)/4,C=(d+v)/4,N=(g+f)/4;return M>E&&M>L?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=A/n,s=C/n):E>L?E<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(E),n=A/i,s=N/i):L<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(L),n=C/s,i=N/s),this.set(n,i,s,e),this}let _=Math.sqrt((f-g)*(f-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(f-g)/_,this.y=(d-v)/_,this.z=(u-h)/_,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Au extends ns{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ce(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Vc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fe extends Au{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Gc extends Ce{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cu extends Ce{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Fs=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(d!==v||l!==u||c!==p||h!==g){let f=1-a;const m=l*u+c*p+h*g+d*v,_=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){const L=Math.sqrt(M),A=Math.atan2(L,m*_);f=Math.sin(f*A)/L,a=Math.sin(a*A)/L}const E=a*_;if(l=l*f+u*E,c=c*f+p*E,h=h*f+g*E,d=d*f+v*E,f===1-a){const L=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=L,c*=L,h*=L,d*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[o],u=s[o+1],p=s[o+2],g=s[o+3];return t[e]=a*g+h*d+l*p-c*u,t[e+1]=l*g+h*u+c*d-a*p,t[e+2]=c*g+h*p+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(s/2),u=l(n/2),p=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-i)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(s-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class X{constructor(t=0,e=0,n=0){X.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ya.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ya.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),d=2*(s*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-s*d,this.z=i+l*d+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return jr.copy(this).projectOnVector(t),this.sub(jr)}reflect(t){return this.sub(jr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jr=new X,Ya=new Fs;class hi{constructor(t=new X(1/0,1/0,1/0),e=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Qe):Qe.fromBufferAttribute(s,o),Qe.applyMatrix4(t.matrixWorld),this.expandByPoint(Qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Vs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vs.copy(n.boundingBox)),Vs.applyMatrix4(t.matrixWorld),this.union(Vs)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qe),Qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ds),Gs.subVectors(this.max,ds),Ei.subVectors(t.a,ds),bi.subVectors(t.b,ds),wi.subVectors(t.c,ds),Un.subVectors(bi,Ei),Fn.subVectors(wi,bi),Yn.subVectors(Ei,wi);let e=[0,-Un.z,Un.y,0,-Fn.z,Fn.y,0,-Yn.z,Yn.y,Un.z,0,-Un.x,Fn.z,0,-Fn.x,Yn.z,0,-Yn.x,-Un.y,Un.x,0,-Fn.y,Fn.x,0,-Yn.y,Yn.x,0];return!Kr(e,Ei,bi,wi,Gs)||(e=[1,0,0,0,1,0,0,0,1],!Kr(e,Ei,bi,wi,Gs))?!1:(Ws.crossVectors(Un,Fn),e=[Ws.x,Ws.y,Ws.z],Kr(e,Ei,bi,wi,Gs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Mn=[new X,new X,new X,new X,new X,new X,new X,new X],Qe=new X,Vs=new hi,Ei=new X,bi=new X,wi=new X,Un=new X,Fn=new X,Yn=new X,ds=new X,Gs=new X,Ws=new X,$n=new X;function Kr(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){$n.fromArray(r,s);const a=i.x*Math.abs($n.x)+i.y*Math.abs($n.y)+i.z*Math.abs($n.z),l=t.dot($n),c=e.dot($n),h=n.dot($n);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Ru=new hi,fs=new X,Zr=new X;class ss{constructor(t=new X,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ru.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fs.subVectors(t,this.center);const e=fs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(fs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Zr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fs.copy(t.center).add(Zr)),this.expandByPoint(fs.copy(t.center).sub(Zr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yn=new X,Jr=new X,qs=new X,On=new X,Qr=new X,Xs=new X,to=new X;let Ea=class{constructor(t=new X,e=new X(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yn.copy(this.origin).addScaledVector(this.direction,e),yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Jr.copy(t).add(e).multiplyScalar(.5),qs.copy(e).sub(t).normalize(),On.copy(this.origin).sub(Jr);const s=t.distanceTo(e)*.5,o=-this.direction.dot(qs),a=On.dot(this.direction),l=-On.dot(qs),c=On.lengthSq(),h=Math.abs(1-o*o);let d,u,p,g;if(h>0)if(d=o*l-a,u=o*a-l,g=s*h,d>=0)if(u>=-g)if(u<=g){const v=1/h;d*=v,u*=v,p=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Jr).addScaledVector(qs,u),p}intersectSphere(t,e){yn.subVectors(t.center,this.origin);const n=yn.dot(this.direction),i=yn.dot(yn)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,yn)!==null}intersectTriangle(t,e,n,i,s){Qr.subVectors(e,t),Xs.subVectors(n,t),to.crossVectors(Qr,Xs);let o=this.direction.dot(to),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;On.subVectors(this.origin,t);const l=a*this.direction.dot(Xs.crossVectors(On,Xs));if(l<0)return null;const c=a*this.direction.dot(Qr.cross(On));if(c<0||l+c>o)return null;const h=-a*On.dot(to);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class ne{constructor(t,e,n,i,s,o,a,l,c,h,d,u,p,g,v,f){ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,d,u,p,g,v,f)}set(t,e,n,i,s,o,a,l,c,h,d,u,p,g,v,f){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=p,m[7]=g,m[11]=v,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ne().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ti.setFromMatrixColumn(t,0).length(),s=1/Ti.setFromMatrixColumn(t,1).length(),o=1/Ti.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=o*h,p=o*d,g=a*h,v=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+g*c,e[5]=u-v*c,e[9]=-a*l,e[2]=v-u*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,p=l*d,g=c*h,v=c*d;e[0]=u+v*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=v+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,p=l*d,g=c*h,v=c*d;e[0]=u-v*a,e[4]=-o*d,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=v-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,p=o*d,g=a*h,v=a*d;e[0]=l*h,e[4]=g*c-p,e[8]=u*c+v,e[1]=l*d,e[5]=v*c+u,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,p=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-u*d,e[8]=g*d+p,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*d+g,e[10]=u-v*d}else if(t.order==="XZY"){const u=o*l,p=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+v,e[5]=o*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=a*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Pu,t,Lu)}lookAt(t,e,n){const i=this.elements;return ke.subVectors(t,e),ke.lengthSq()===0&&(ke.z=1),ke.normalize(),Bn.crossVectors(n,ke),Bn.lengthSq()===0&&(Math.abs(n.z)===1?ke.x+=1e-4:ke.z+=1e-4,ke.normalize(),Bn.crossVectors(n,ke)),Bn.normalize(),Ys.crossVectors(ke,Bn),i[0]=Bn.x,i[4]=Ys.x,i[8]=ke.x,i[1]=Bn.y,i[5]=Ys.y,i[9]=ke.y,i[2]=Bn.z,i[6]=Ys.z,i[10]=ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],v=n[6],f=n[10],m=n[14],_=n[3],M=n[7],E=n[11],L=n[15],A=i[0],C=i[4],N=i[8],w=i[12],S=i[1],P=i[5],H=i[9],I=i[13],z=i[2],k=i[6],O=i[10],j=i[14],G=i[3],Y=i[7],ot=i[11],lt=i[15];return s[0]=o*A+a*S+l*z+c*G,s[4]=o*C+a*P+l*k+c*Y,s[8]=o*N+a*H+l*O+c*ot,s[12]=o*w+a*I+l*j+c*lt,s[1]=h*A+d*S+u*z+p*G,s[5]=h*C+d*P+u*k+p*Y,s[9]=h*N+d*H+u*O+p*ot,s[13]=h*w+d*I+u*j+p*lt,s[2]=g*A+v*S+f*z+m*G,s[6]=g*C+v*P+f*k+m*Y,s[10]=g*N+v*H+f*O+m*ot,s[14]=g*w+v*I+f*j+m*lt,s[3]=_*A+M*S+E*z+L*G,s[7]=_*C+M*P+E*k+L*Y,s[11]=_*N+M*H+E*O+L*ot,s[15]=_*w+M*I+E*j+L*lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],p=t[14],g=t[3],v=t[7],f=t[11],m=t[15];return g*(+s*l*d-i*c*d-s*a*u+n*c*u+i*a*p-n*l*p)+v*(+e*l*p-e*c*u+s*o*u-i*o*p+i*c*h-s*l*h)+f*(+e*c*d-e*a*p-s*o*d+n*o*p+s*a*h-n*c*h)+m*(-i*a*h-e*l*d+e*a*u+i*o*d-n*o*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],p=t[11],g=t[12],v=t[13],f=t[14],m=t[15],_=d*f*c-v*u*c+v*l*p-a*f*p-d*l*m+a*u*m,M=g*u*c-h*f*c-g*l*p+o*f*p+h*l*m-o*u*m,E=h*v*c-g*d*c+g*a*p-o*v*p-h*a*m+o*d*m,L=g*d*l-h*v*l-g*a*u+o*v*u+h*a*f-o*d*f,A=e*_+n*M+i*E+s*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=_*C,t[1]=(v*u*s-d*f*s-v*i*p+n*f*p+d*i*m-n*u*m)*C,t[2]=(a*f*s-v*l*s+v*i*c-n*f*c-a*i*m+n*l*m)*C,t[3]=(d*l*s-a*u*s-d*i*c+n*u*c+a*i*p-n*l*p)*C,t[4]=M*C,t[5]=(h*f*s-g*u*s+g*i*p-e*f*p-h*i*m+e*u*m)*C,t[6]=(g*l*s-o*f*s-g*i*c+e*f*c+o*i*m-e*l*m)*C,t[7]=(o*u*s-h*l*s+h*i*c-e*u*c-o*i*p+e*l*p)*C,t[8]=E*C,t[9]=(g*d*s-h*v*s-g*n*p+e*v*p+h*n*m-e*d*m)*C,t[10]=(o*v*s-g*a*s+g*n*c-e*v*c-o*n*m+e*a*m)*C,t[11]=(h*a*s-o*d*s-h*n*c+e*d*c+o*n*p-e*a*p)*C,t[12]=L*C,t[13]=(h*v*i-g*d*i+g*n*u-e*v*u-h*n*f+e*d*f)*C,t[14]=(g*a*i-o*v*i-g*n*l+e*v*l+o*n*f-e*a*f)*C,t[15]=(o*d*i-h*a*i+h*n*l-e*d*l-o*n*u+e*a*u)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,d=a+a,u=s*c,p=s*h,g=s*d,v=o*h,f=o*d,m=a*d,_=l*c,M=l*h,E=l*d,L=n.x,A=n.y,C=n.z;return i[0]=(1-(v+m))*L,i[1]=(p+E)*L,i[2]=(g-M)*L,i[3]=0,i[4]=(p-E)*A,i[5]=(1-(u+m))*A,i[6]=(f+_)*A,i[7]=0,i[8]=(g+M)*C,i[9]=(f-_)*C,i[10]=(1-(u+v))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Ti.set(i[0],i[1],i[2]).length();const o=Ti.set(i[4],i[5],i[6]).length(),a=Ti.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],tn.copy(this);const c=1/s,h=1/o,d=1/a;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=h,tn.elements[5]*=h,tn.elements[6]*=h,tn.elements[8]*=d,tn.elements[9]*=d,tn.elements[10]*=d,e.setFromRotationMatrix(tn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=In){const l=this.elements,c=2*s/(e-t),h=2*s/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let p,g;if(a===In)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Dr)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=In){const l=this.elements,c=1/(e-t),h=1/(n-i),d=1/(o-s),u=(e+t)*c,p=(n+i)*h;let g,v;if(a===In)g=(o+s)*d,v=-2*d;else if(a===Dr)g=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ti=new X,tn=new ne,Pu=new X(0,0,0),Lu=new X(1,1,1),Bn=new X,Ys=new X,ke=new X,$a=new ne,ja=new Fs;class _n{constructor(t=0,e=0,n=0,i=_n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return $a.makeRotationFromQuaternion(t),this.setFromRotationMatrix($a,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ja.setFromEuler(this),this.setFromQuaternion(ja,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_n.DEFAULT_ORDER="XYZ";class ba{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Iu=0;const Ka=new X,Ai=new Fs,Sn=new ne,$s=new X,ps=new X,Du=new X,Nu=new Fs,Za=new X(1,0,0),Ja=new X(0,1,0),Qa=new X(0,0,1),tl={type:"added"},Uu={type:"removed"},Ci={type:"childadded",child:null},eo={type:"childremoved",child:null};class ae extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ae.DEFAULT_UP.clone();const t=new X,e=new _n,n=new Fs,i=new X(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ne},normalMatrix:{value:new Xt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ba,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.premultiply(Ai),this}rotateX(t){return this.rotateOnAxis(Za,t)}rotateY(t){return this.rotateOnAxis(Ja,t)}rotateZ(t){return this.rotateOnAxis(Qa,t)}translateOnAxis(t,e){return Ka.copy(t).applyQuaternion(this.quaternion),this.position.add(Ka.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Za,t)}translateY(t){return this.translateOnAxis(Ja,t)}translateZ(t){return this.translateOnAxis(Qa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?$s.copy(t):$s.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(ps,$s,this.up):Sn.lookAt($s,ps,this.up),this.quaternion.setFromRotationMatrix(Sn),i&&(Sn.extractRotation(i.matrixWorld),Ai.setFromRotationMatrix(Sn),this.quaternion.premultiply(Ai.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(tl),Ci.child=t,this.dispatchEvent(Ci),Ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Uu),eo.child=t,this.dispatchEvent(eo),eo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Sn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Sn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(tl),Ci.child=t,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,t,Du),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,Nu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ae.DEFAULT_UP=new X(0,1,0);ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const en=new X,En=new X,no=new X,bn=new X,Ri=new X,Pi=new X,el=new X,io=new X,so=new X,ro=new X;class mn{constructor(t=new X,e=new X,n=new X){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),en.subVectors(t,e),i.cross(en);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){en.subVectors(i,e),En.subVectors(n,e),no.subVectors(t,e);const o=en.dot(en),a=en.dot(En),l=en.dot(no),c=En.dot(En),h=En.dot(no),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const u=1/d,p=(c*l-a*h)*u,g=(o*h-a*l)*u;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,bn.x),l.addScaledVector(o,bn.y),l.addScaledVector(a,bn.z),l)}static isFrontFacing(t,e,n,i){return en.subVectors(n,e),En.subVectors(t,e),en.cross(En).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return en.subVectors(this.c,this.b),En.subVectors(this.a,this.b),en.cross(En).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return mn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;Ri.subVectors(i,n),Pi.subVectors(s,n),io.subVectors(t,n);const l=Ri.dot(io),c=Pi.dot(io);if(l<=0&&c<=0)return e.copy(n);so.subVectors(t,i);const h=Ri.dot(so),d=Pi.dot(so);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ri,o);ro.subVectors(t,s);const p=Ri.dot(ro),g=Pi.dot(ro);if(g>=0&&p<=g)return e.copy(s);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Pi,a);const f=h*g-p*d;if(f<=0&&d-h>=0&&p-g>=0)return el.subVectors(s,i),a=(d-h)/(d-h+(p-g)),e.copy(i).addScaledVector(el,a);const m=1/(f+v+u);return o=v*m,a=u*m,e.copy(n).addScaledVector(Ri,o).addScaledVector(Pi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Wc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},js={h:0,s:0,l:0};function oo(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Ot{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=We){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Qt.workingColorSpace){if(t=Sa(t,1),e=Te(e,0,1),n=Te(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=oo(o,s,t+1/3),this.g=oo(o,s,t),this.b=oo(o,s,t-1/3)}return Qt.toWorkingColorSpace(this,i),this}setStyle(t,e=We){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=We){const n=Wc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$i(t.r),this.g=$i(t.g),this.b=$i(t.b),this}copyLinearToSRGB(t){return this.r=Yr(t.r),this.g=Yr(t.g),this.b=Yr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=We){return Qt.fromWorkingColorSpace(we.copy(this),t),Math.round(Te(we.r*255,0,255))*65536+Math.round(Te(we.g*255,0,255))*256+Math.round(Te(we.b*255,0,255))}getHexString(t=We){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(we.copy(this),e);const n=we.r,i=we.g,s=we.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(we.copy(this),e),t.r=we.r,t.g=we.g,t.b=we.b,t}getStyle(t=We){Qt.fromWorkingColorSpace(we.copy(this),t);const e=we.r,n=we.g,i=we.b;return t!==We?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(zn),this.setHSL(zn.h+t,zn.s+e,zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(zn),t.getHSL(js);const n=ws(zn.h,js.h,e),i=ws(zn.s,js.s,e),s=ws(zn.l,js.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const we=new Ot;Ot.NAMES=Wc;let Fu=0,ui=class extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=is(),this.name="",this.type="Material",this.blending=Xi,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Po,this.blendDst=Lo,this.blendEquation=Ln,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ka,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yi,this.stencilZFail=yi,this.stencilZPass=yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(n.blending=this.blending),this.side!==qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Po&&(n.blendSrc=this.blendSrc),this.blendDst!==Lo&&(n.blendDst=this.blendDst),this.blendEquation!==Ln&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Rr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ka&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}};class Is extends ui{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=bc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const de=new X,Ks=new Bt;class Ke{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ha,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Ts("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ks.fromBufferAttribute(this,e),Ks.applyMatrix3(t),this.setXY(e,Ks.x,Ks.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Hi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Hi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Hi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Hi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Hi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),i=Pe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),i=Pe(i,this.array),s=Pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ha&&(t.usage=this.usage),t}}class qc extends Ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Xc extends Ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ne extends Ke{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ou=0;const je=new ne,ao=new ae,Li=new X,He=new hi,ms=new hi,ye=new X;class Ze extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=is(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hc(t)?Xc:qc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Xt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,n){return je.makeTranslation(t,e,n),this.applyMatrix4(je),this}scale(t,e,n){return je.makeScale(t,e,n),this.applyMatrix4(je),this}lookAt(t){return ao.lookAt(t),ao.updateMatrix(),this.applyMatrix4(ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ne(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];He.setFromBufferAttribute(s),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,He.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,He.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(He.min),this.boundingBox.expandByPoint(He.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ss);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){const n=this.boundingSphere.center;if(He.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];ms.setFromBufferAttribute(a),this.morphTargetsRelative?(ye.addVectors(He.min,ms.min),He.expandByPoint(ye),ye.addVectors(He.max,ms.max),He.expandByPoint(ye)):(He.expandByPoint(ms.min),He.expandByPoint(ms.max))}He.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)ye.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(ye));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ye.fromBufferAttribute(a,c),l&&(Li.fromBufferAttribute(t,c),ye.add(Li)),i=Math.max(i,n.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ke(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<n.count;N++)a[N]=new X,l[N]=new X;const c=new X,h=new X,d=new X,u=new Bt,p=new Bt,g=new Bt,v=new X,f=new X;function m(N,w,S){c.fromBufferAttribute(n,N),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,S),u.fromBufferAttribute(s,N),p.fromBufferAttribute(s,w),g.fromBufferAttribute(s,S),h.sub(c),d.sub(c),p.sub(u),g.sub(u);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(P),f.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),a[N].add(v),a[w].add(v),a[S].add(v),l[N].add(f),l[w].add(f),l[S].add(f))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let N=0,w=_.length;N<w;++N){const S=_[N],P=S.start,H=S.count;for(let I=P,z=P+H;I<z;I+=3)m(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const M=new X,E=new X,L=new X,A=new X;function C(N){L.fromBufferAttribute(i,N),A.copy(L);const w=a[N];M.copy(w),M.sub(L.multiplyScalar(L.dot(w))).normalize(),E.crossVectors(A,w);const P=E.dot(l[N])<0?-1:1;o.setXYZW(N,M.x,M.y,M.z,P)}for(let N=0,w=_.length;N<w;++N){const S=_[N],P=S.start,H=S.count;for(let I=P,z=P+H;I<z;I+=3)C(t.getX(I+0)),C(t.getX(I+1)),C(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new X,s=new X,o=new X,a=new X,l=new X,c=new X,h=new X,d=new X;if(t)for(let u=0,p=t.count;u<p;u+=3){const g=t.getX(u+0),v=t.getX(u+1),f=t.getX(u+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,f),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,f),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let p=0,g=0;for(let v=0,f=l.length;v<f;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let m=0;m<h;m++)u[g++]=c[p++]}return new Ke(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ze,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=t(u,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nl=new ne,jn=new Ea,Zs=new ss,il=new X,Ii=new X,Di=new X,Ni=new X,lo=new X,Js=new X,Qs=new Bt,tr=new Bt,er=new Bt,sl=new X,rl=new X,ol=new X,nr=new X,ir=new X;class ve extends ae{constructor(t=new Ze,e=new Is){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Js.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],d=s[l];h!==0&&(lo.fromBufferAttribute(d,t),o?Js.addScaledVector(lo,h):Js.addScaledVector(lo.sub(e),h))}e.add(Js)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zs.copy(n.boundingSphere),Zs.applyMatrix4(s),jn.copy(t.ray).recast(t.near),!(Zs.containsPoint(jn.origin)===!1&&(jn.intersectSphere(Zs,il)===null||jn.origin.distanceToSquared(il)>(t.far-t.near)**2))&&(nl.copy(s).invert(),jn.copy(t.ray).applyMatrix4(nl),!(n.boundingBox!==null&&jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,jn)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const f=u[g],m=o[f.materialIndex],_=Math.max(f.start,p.start),M=Math.min(a.count,Math.min(f.start+f.count,p.start+p.count));for(let E=_,L=M;E<L;E+=3){const A=a.getX(E),C=a.getX(E+1),N=a.getX(E+2);i=sr(this,m,t,n,c,h,d,A,C,N),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let f=g,m=v;f<m;f+=3){const _=a.getX(f),M=a.getX(f+1),E=a.getX(f+2);i=sr(this,o,t,n,c,h,d,_,M,E),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const f=u[g],m=o[f.materialIndex],_=Math.max(f.start,p.start),M=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));for(let E=_,L=M;E<L;E+=3){const A=E,C=E+1,N=E+2;i=sr(this,m,t,n,c,h,d,A,C,N),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let f=g,m=v;f<m;f+=3){const _=f,M=f+1,E=f+2;i=sr(this,o,t,n,c,h,d,_,M,E),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}}}function Bu(r,t,e,n,i,s,o,a){let l;if(t.side===De?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===qn,a),l===null)return null;ir.copy(a),ir.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(ir);return c<e.near||c>e.far?null:{distance:c,point:ir.clone(),object:r}}function sr(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,Ii),r.getVertexPosition(l,Di),r.getVertexPosition(c,Ni);const h=Bu(r,t,e,n,Ii,Di,Ni,nr);if(h){i&&(Qs.fromBufferAttribute(i,a),tr.fromBufferAttribute(i,l),er.fromBufferAttribute(i,c),h.uv=mn.getInterpolation(nr,Ii,Di,Ni,Qs,tr,er,new Bt)),s&&(Qs.fromBufferAttribute(s,a),tr.fromBufferAttribute(s,l),er.fromBufferAttribute(s,c),h.uv1=mn.getInterpolation(nr,Ii,Di,Ni,Qs,tr,er,new Bt)),o&&(sl.fromBufferAttribute(o,a),rl.fromBufferAttribute(o,l),ol.fromBufferAttribute(o,c),h.normal=mn.getInterpolation(nr,Ii,Di,Ni,sl,rl,ol,new X),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new X,materialIndex:0};mn.getNormal(Ii,Di,Ni,d.normal),h.face=d}return h}class vn extends Ze{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ne(c,3)),this.setAttribute("normal",new Ne(h,3)),this.setAttribute("uv",new Ne(d,2));function g(v,f,m,_,M,E,L,A,C,N,w){const S=E/C,P=L/N,H=E/2,I=L/2,z=A/2,k=C+1,O=N+1;let j=0,G=0;const Y=new X;for(let ot=0;ot<O;ot++){const lt=ot*P-I;for(let nt=0;nt<k;nt++){const At=nt*S-H;Y[v]=At*_,Y[f]=lt*M,Y[m]=z,c.push(Y.x,Y.y,Y.z),Y[v]=0,Y[f]=0,Y[m]=A>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(nt/C),d.push(1-ot/N),j+=1}}for(let ot=0;ot<N;ot++)for(let lt=0;lt<C;lt++){const nt=u+lt+k*ot,At=u+lt+k*(ot+1),K=u+(lt+1)+k*(ot+1),it=u+(lt+1)+k*ot;l.push(nt,At,it),l.push(At,K,it),G+=6}a.addGroup(p,G,w),p+=G,u+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ji(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Le(r){const t={};for(let e=0;e<r.length;e++){const n=Ji(r[e]);for(const i in n)t[i]=n[i]}return t}function zu(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Yc(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const gn={clone:Ji,merge:Le};var ku=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class he extends ui{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ku,this.fragmentShader=Hu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ji(t.uniforms),this.uniformsGroups=zu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class $c extends ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=In}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const kn=new X,al=new Bt,ll=new Bt;class qe extends $c{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ps*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(bs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(kn.x,kn.y).multiplyScalar(-t/kn.z),kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kn.x,kn.y).multiplyScalar(-t/kn.z)}getViewSize(t,e){return this.getViewBounds(t,al,ll),e.subVectors(ll,al)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(bs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ui=-90,Fi=1;class jc extends ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new qe(Ui,Fi,t,e);i.layers=this.layers,this.add(i);const s=new qe(Ui,Fi,t,e);s.layers=this.layers,this.add(s);const o=new qe(Ui,Fi,t,e);o.layers=this.layers,this.add(o);const a=new qe(Ui,Fi,t,e);a.layers=this.layers,this.add(a);const l=new qe(Ui,Fi,t,e);l.layers=this.layers,this.add(l);const c=new qe(Ui,Fi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===In)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Kc extends Ce{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ki,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Zc extends Fe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Kc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:rn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new vn(5,5,5),s=new he({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:Ie});s.uniforms.tEquirect.value=e;const o=new ve(i,s),a=e.minFilter;return e.minFilter===ri&&(e.minFilter=rn),new jc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const co=new X,Vu=new X,Gu=new Xt;let Vn=class{constructor(t=new X(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=co.subVectors(n,e).cross(Vu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(co),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Gu.getNormalMatrix(t),i=this.coplanarPoint(co).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Kn=new ss,rr=new X;class wa{constructor(t=new Vn,e=new Vn,n=new Vn,i=new Vn,s=new Vn,o=new Vn){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=In){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],p=i[8],g=i[9],v=i[10],f=i[11],m=i[12],_=i[13],M=i[14],E=i[15];if(n[0].setComponents(l-s,u-c,f-p,E-m).normalize(),n[1].setComponents(l+s,u+c,f+p,E+m).normalize(),n[2].setComponents(l+o,u+h,f+g,E+_).normalize(),n[3].setComponents(l-o,u-h,f-g,E-_).normalize(),n[4].setComponents(l-a,u-d,f-v,E-M).normalize(),e===In)n[5].setComponents(l+a,u+d,f+v,E+M).normalize();else if(e===Dr)n[5].setComponents(a,d,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Kn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Kn)}intersectsSprite(t){return Kn.center.set(0,0,0),Kn.radius=.7071067811865476,Kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Kn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(rr.x=i.normal.x>0?t.max.x:t.min.x,rr.y=i.normal.y>0?t.max.y:t.min.y,rr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(rr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Jc(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Wu(r){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=r.SHORT;else if(c instanceof Uint32Array)p=r.UNSIGNED_INT;else if(c instanceof Int32Array)p=r.INT;else if(c instanceof Int8Array)p=r.BYTE;else if(c instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l._updateRange,u=l.updateRanges;if(r.bindBuffer(c,a),d.count===-1&&u.length===0&&r.bufferSubData(c,0,h),u.length!==0){for(let p=0,g=u.length;p<g;p++){const v=u[p];r.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}d.count!==-1&&(r.bufferSubData(c,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count),d.count=-1),l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class Qi extends Ze{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,p=[],g=[],v=[],f=[];for(let m=0;m<h;m++){const _=m*u-o;for(let M=0;M<c;M++){const E=M*d-s;g.push(E,-_,0),v.push(0,0,1),f.push(M/a),f.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<a;_++){const M=_+c*m,E=_+c*(m+1),L=_+1+c*(m+1),A=_+1+c*m;p.push(M,E,A),p.push(E,L,A)}this.setIndex(p),this.setAttribute("position",new Ne(g,3)),this.setAttribute("normal",new Ne(v,3)),this.setAttribute("uv",new Ne(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qi(t.width,t.height,t.widthSegments,t.heightSegments)}}var qu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Yu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$u=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ju=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ku=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ju=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,td=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ed=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,id=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,rd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,od=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ud=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,pd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,md=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_d=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Md=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ed=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,bd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Td=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ad=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Cd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ld=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Id=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Dd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ud=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Od=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Bd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Gd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Wd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$d=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ef=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,of=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,af=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,lf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,df=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ff=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_f=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,yf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ef=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Af=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Cf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Pf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Lf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,If=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Df=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Uf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ff=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Of=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Wf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$f=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Jf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,np=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ip=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,op=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ap=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,up=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_p=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Mp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ep=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qt={alphahash_fragment:qu,alphahash_pars_fragment:Xu,alphamap_fragment:Yu,alphamap_pars_fragment:$u,alphatest_fragment:ju,alphatest_pars_fragment:Ku,aomap_fragment:Zu,aomap_pars_fragment:Ju,batching_pars_vertex:Qu,batching_vertex:td,begin_vertex:ed,beginnormal_vertex:nd,bsdfs:id,iridescence_fragment:sd,bumpmap_pars_fragment:rd,clipping_planes_fragment:od,clipping_planes_pars_fragment:ad,clipping_planes_pars_vertex:ld,clipping_planes_vertex:cd,color_fragment:hd,color_pars_fragment:ud,color_pars_vertex:dd,color_vertex:fd,common:pd,cube_uv_reflection_fragment:md,defaultnormal_vertex:gd,displacementmap_pars_vertex:vd,displacementmap_vertex:_d,emissivemap_fragment:xd,emissivemap_pars_fragment:Md,colorspace_fragment:yd,colorspace_pars_fragment:Sd,envmap_fragment:Ed,envmap_common_pars_fragment:bd,envmap_pars_fragment:wd,envmap_pars_vertex:Td,envmap_physical_pars_fragment:Od,envmap_vertex:Ad,fog_vertex:Cd,fog_pars_vertex:Rd,fog_fragment:Pd,fog_pars_fragment:Ld,gradientmap_pars_fragment:Id,lightmap_pars_fragment:Dd,lights_lambert_fragment:Nd,lights_lambert_pars_fragment:Ud,lights_pars_begin:Fd,lights_toon_fragment:Bd,lights_toon_pars_fragment:zd,lights_phong_fragment:kd,lights_phong_pars_fragment:Hd,lights_physical_fragment:Vd,lights_physical_pars_fragment:Gd,lights_fragment_begin:Wd,lights_fragment_maps:qd,lights_fragment_end:Xd,logdepthbuf_fragment:Yd,logdepthbuf_pars_fragment:$d,logdepthbuf_pars_vertex:jd,logdepthbuf_vertex:Kd,map_fragment:Zd,map_pars_fragment:Jd,map_particle_fragment:Qd,map_particle_pars_fragment:tf,metalnessmap_fragment:ef,metalnessmap_pars_fragment:nf,morphinstance_vertex:sf,morphcolor_vertex:rf,morphnormal_vertex:of,morphtarget_pars_vertex:af,morphtarget_vertex:lf,normal_fragment_begin:cf,normal_fragment_maps:hf,normal_pars_fragment:uf,normal_pars_vertex:df,normal_vertex:ff,normalmap_pars_fragment:pf,clearcoat_normal_fragment_begin:mf,clearcoat_normal_fragment_maps:gf,clearcoat_pars_fragment:vf,iridescence_pars_fragment:_f,opaque_fragment:xf,packing:Mf,premultiplied_alpha_fragment:yf,project_vertex:Sf,dithering_fragment:Ef,dithering_pars_fragment:bf,roughnessmap_fragment:wf,roughnessmap_pars_fragment:Tf,shadowmap_pars_fragment:Af,shadowmap_pars_vertex:Cf,shadowmap_vertex:Rf,shadowmask_pars_fragment:Pf,skinbase_vertex:Lf,skinning_pars_vertex:If,skinning_vertex:Df,skinnormal_vertex:Nf,specularmap_fragment:Uf,specularmap_pars_fragment:Ff,tonemapping_fragment:Of,tonemapping_pars_fragment:Bf,transmission_fragment:zf,transmission_pars_fragment:kf,uv_pars_fragment:Hf,uv_pars_vertex:Vf,uv_vertex:Gf,worldpos_vertex:Wf,background_vert:qf,background_frag:Xf,backgroundCube_vert:Yf,backgroundCube_frag:$f,cube_vert:jf,cube_frag:Kf,depth_vert:Zf,depth_frag:Jf,distanceRGBA_vert:Qf,distanceRGBA_frag:tp,equirect_vert:ep,equirect_frag:np,linedashed_vert:ip,linedashed_frag:sp,meshbasic_vert:rp,meshbasic_frag:op,meshlambert_vert:ap,meshlambert_frag:lp,meshmatcap_vert:cp,meshmatcap_frag:hp,meshnormal_vert:up,meshnormal_frag:dp,meshphong_vert:fp,meshphong_frag:pp,meshphysical_vert:mp,meshphysical_frag:gp,meshtoon_vert:vp,meshtoon_frag:_p,points_vert:xp,points_frag:Mp,shadow_vert:yp,shadow_frag:Sp,sprite_vert:Ep,sprite_frag:bp},_t={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},pn={basic:{uniforms:Le([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Le([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Ot(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Le([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Le([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Le([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Ot(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Le([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Le([_t.points,_t.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Le([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Le([_t.common,_t.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Le([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Le([_t.sprite,_t.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:Le([_t.common,_t.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:Le([_t.lights,_t.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};pn.physical={uniforms:Le([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const or={r:0,b:0,g:0},Zn=new _n,wp=new ne;function Tp(r,t,e,n,i,s,o){const a=new Ot(0);let l=s===!0?0:1,c,h,d=null,u=0,p=null;function g(_){let M=_.isScene===!0?_.background:null;return M&&M.isTexture&&(M=(_.backgroundBlurriness>0?e:t).get(M)),M}function v(_){let M=!1;const E=g(_);E===null?m(a,l):E&&E.isColor&&(m(E,1),M=!0);const L=r.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function f(_,M){const E=g(M);E&&(E.isCubeTexture||E.mapping===Nr)?(h===void 0&&(h=new ve(new vn(1,1,1),new he({name:"BackgroundCubeMaterial",uniforms:Ji(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Zn.copy(M.backgroundRotation),Zn.x*=-1,Zn.y*=-1,Zn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Zn.y*=-1,Zn.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(wp.makeRotationFromEuler(Zn)),h.material.toneMapped=Qt.getTransfer(E.colorSpace)!==re,(d!==E||u!==E.version||p!==r.toneMapping)&&(h.material.needsUpdate=!0,d=E,u=E.version,p=r.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new ve(new Qi(2,2),new he({name:"BackgroundMaterial",uniforms:Ji(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(E.colorSpace)!==re,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||u!==E.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,d=E,u=E.version,p=r.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function m(_,M){_.getRGB(or,Yc(r)),n.buffers.color.setClear(or.r,or.g,or.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(_,M=1){a.set(_),l=M,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,m(a,l)},render:v,addToRenderList:f}}function Ap(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null);let s=i,o=!1;function a(S,P,H,I,z){let k=!1;const O=d(I,H,P);s!==O&&(s=O,c(s.object)),k=p(S,I,H,z),k&&g(S,I,H,z),z!==null&&t.update(z,r.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,E(S,P,H,I),z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return r.createVertexArray()}function c(S){return r.bindVertexArray(S)}function h(S){return r.deleteVertexArray(S)}function d(S,P,H){const I=H.wireframe===!0;let z=n[S.id];z===void 0&&(z={},n[S.id]=z);let k=z[P.id];k===void 0&&(k={},z[P.id]=k);let O=k[I];return O===void 0&&(O=u(l()),k[I]=O),O}function u(S){const P=[],H=[],I=[];for(let z=0;z<e;z++)P[z]=0,H[z]=0,I[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:H,attributeDivisors:I,object:S,attributes:{},index:null}}function p(S,P,H,I){const z=s.attributes,k=P.attributes;let O=0;const j=H.getAttributes();for(const G in j)if(j[G].location>=0){const ot=z[G];let lt=k[G];if(lt===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(lt=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(lt=S.instanceColor)),ot===void 0||ot.attribute!==lt||lt&&ot.data!==lt.data)return!0;O++}return s.attributesNum!==O||s.index!==I}function g(S,P,H,I){const z={},k=P.attributes;let O=0;const j=H.getAttributes();for(const G in j)if(j[G].location>=0){let ot=k[G];ot===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(ot=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(ot=S.instanceColor));const lt={};lt.attribute=ot,ot&&ot.data&&(lt.data=ot.data),z[G]=lt,O++}s.attributes=z,s.attributesNum=O,s.index=I}function v(){const S=s.newAttributes;for(let P=0,H=S.length;P<H;P++)S[P]=0}function f(S){m(S,0)}function m(S,P){const H=s.newAttributes,I=s.enabledAttributes,z=s.attributeDivisors;H[S]=1,I[S]===0&&(r.enableVertexAttribArray(S),I[S]=1),z[S]!==P&&(r.vertexAttribDivisor(S,P),z[S]=P)}function _(){const S=s.newAttributes,P=s.enabledAttributes;for(let H=0,I=P.length;H<I;H++)P[H]!==S[H]&&(r.disableVertexAttribArray(H),P[H]=0)}function M(S,P,H,I,z,k,O){O===!0?r.vertexAttribIPointer(S,P,H,z,k):r.vertexAttribPointer(S,P,H,I,z,k)}function E(S,P,H,I){v();const z=I.attributes,k=H.getAttributes(),O=P.defaultAttributeValues;for(const j in k){const G=k[j];if(G.location>=0){let Y=z[j];if(Y===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(Y=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(Y=S.instanceColor)),Y!==void 0){const ot=Y.normalized,lt=Y.itemSize,nt=t.get(Y);if(nt===void 0)continue;const At=nt.buffer,K=nt.type,it=nt.bytesPerElement,ht=K===r.INT||K===r.UNSIGNED_INT||Y.gpuType===pa;if(Y.isInterleavedBufferAttribute){const gt=Y.data,bt=gt.stride,Lt=Y.offset;if(gt.isInstancedInterleavedBuffer){for(let yt=0;yt<G.locationSize;yt++)m(G.location+yt,gt.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let yt=0;yt<G.locationSize;yt++)f(G.location+yt);r.bindBuffer(r.ARRAY_BUFFER,At);for(let yt=0;yt<G.locationSize;yt++)M(G.location+yt,lt/G.locationSize,K,ot,bt*it,(Lt+lt/G.locationSize*yt)*it,ht)}else{if(Y.isInstancedBufferAttribute){for(let gt=0;gt<G.locationSize;gt++)m(G.location+gt,Y.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let gt=0;gt<G.locationSize;gt++)f(G.location+gt);r.bindBuffer(r.ARRAY_BUFFER,At);for(let gt=0;gt<G.locationSize;gt++)M(G.location+gt,lt/G.locationSize,K,ot,lt*it,lt/G.locationSize*gt*it,ht)}}else if(O!==void 0){const ot=O[j];if(ot!==void 0)switch(ot.length){case 2:r.vertexAttrib2fv(G.location,ot);break;case 3:r.vertexAttrib3fv(G.location,ot);break;case 4:r.vertexAttrib4fv(G.location,ot);break;default:r.vertexAttrib1fv(G.location,ot)}}}}_()}function L(){N();for(const S in n){const P=n[S];for(const H in P){const I=P[H];for(const z in I)h(I[z].object),delete I[z];delete P[H]}delete n[S]}}function A(S){if(n[S.id]===void 0)return;const P=n[S.id];for(const H in P){const I=P[H];for(const z in I)h(I[z].object),delete I[z];delete P[H]}delete n[S.id]}function C(S){for(const P in n){const H=n[P];if(H[S.id]===void 0)continue;const I=H[S.id];for(const z in I)h(I[z].object),delete I[z];delete H[S.id]}}function N(){w(),o=!0,s!==i&&(s=i,c(s.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:N,resetDefaultState:w,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:f,disableUnusedAttributes:_}}function Cp(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(r.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];e.update(p,n,1)}function l(c,h,d,u){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v];for(let v=0;v<u.length;v++)e.update(g,n,u[v])}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Rp(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==ln&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const C=A===Xe&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Dn&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==an&&!C)}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),v=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),_=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=p>0,L=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,maxTextures:u,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:v,maxAttributes:f,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:E,maxSamples:L}}function Pp(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Vn,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||i;return i=u,n=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,v=d.clipIntersection,f=d.clipShadows,m=r.get(d);if(!i||g===null||g.length===0||s&&!f)s?h(null):c();else{const _=s?0:n,M=_*4;let E=m.clippingState||null;l.value=E,E=h(g,u,M,p);for(let L=0;L!==M;++L)E[L]=e[L];m.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,g){const v=d!==null?d.length:0;let f=null;if(v!==0){if(f=l.value,g!==!0||f===null){const m=p+v*4,_=u.matrixWorldInverse;a.getNormalMatrix(_),(f===null||f.length<m)&&(f=new Float32Array(m));for(let M=0,E=p;M!==v;++M,E+=4)o.copy(d[M]).applyMatrix4(_,a),o.normal.toArray(f,E),f[E+3]=o.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,f}}function Lp(r){let t=new WeakMap;function e(o,a){return a===Io?o.mapping=Ki:a===Do&&(o.mapping=Zi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Io||a===Do)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Zc(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Ta extends $c{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Vi=4,cl=[.125,.215,.35,.446,.526,.582],ni=20,ho=new Ta,hl=new Ot;let uo=null,fo=0,po=0,mo=!1;const ei=(1+Math.sqrt(5))/2,Oi=1/ei,ul=[new X(-ei,Oi,0),new X(ei,Oi,0),new X(-Oi,0,ei),new X(Oi,0,ei),new X(0,ei,-Oi),new X(0,ei,Oi),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class dl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){uo=this._renderer.getRenderTarget(),fo=this._renderer.getActiveCubeFace(),po=this._renderer.getActiveMipmapLevel(),mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ml(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(uo,fo,po),this._renderer.xr.enabled=mo,t.scissorTest=!1,ar(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ki||t.mapping===Zi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),uo=this._renderer.getRenderTarget(),fo=this._renderer.getActiveCubeFace(),po=this._renderer.getActiveMipmapLevel(),mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Xe,format:ln,colorSpace:Xn,depthBuffer:!1},i=fl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fl(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ip(s)),this._blurMaterial=Dp(s,t,e)}return i}_compileMaterial(t){const e=new ve(this._lodPlanes[0],t);this._renderer.compile(e,ho)}_sceneToCubeUV(t,e,n,i){const a=new qe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(hl),h.toneMapping=Wn,h.autoClear=!1;const p=new Is({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),g=new ve(new vn,p);let v=!1;const f=t.background;f?f.isColor&&(p.color.copy(f),t.background=null,v=!0):(p.color.copy(hl),v=!0);for(let m=0;m<6;m++){const _=m%3;_===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):_===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const M=this._cubeSize;ar(i,_*M,m>2?M:0,M,M),h.setRenderTarget(i),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ki||t.mapping===Zi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ml()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pl());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new ve(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;ar(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ho)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ul[(i-s-1)%ul.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new ve(this._lodPlanes[i],c),u=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ni-1),v=s/g,f=isFinite(s)?1+Math.floor(h*v):ni;f>ni&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${ni}`);const m=[];let _=0;for(let C=0;C<ni;++C){const N=C/v,w=Math.exp(-N*N/2);m.push(w),C===0?_+=w:C<f&&(_+=2*w)}for(let C=0;C<m.length;C++)m[C]=m[C]/_;u.envMap.value=t.texture,u.samples.value=f,u.weights.value=m,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:M}=this;u.dTheta.value=g,u.mipInt.value=M-n;const E=this._sizeLods[i],L=3*E*(i>M-Vi?i-M+Vi:0),A=4*(this._cubeSize-E);ar(e,L,A,3*E,2*E),l.setRenderTarget(e),l.render(d,ho)}}function Ip(r){const t=[],e=[],n=[];let i=r;const s=r-Vi+1+cl.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Vi?l=cl[o-r+Vi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,v=3,f=2,m=1,_=new Float32Array(v*g*p),M=new Float32Array(f*g*p),E=new Float32Array(m*g*p);for(let A=0;A<p;A++){const C=A%3*2/3-1,N=A>2?0:-1,w=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];_.set(w,v*g*A),M.set(u,f*g*A);const S=[A,A,A,A,A,A];E.set(S,m*g*A)}const L=new Ze;L.setAttribute("position",new Ke(_,v)),L.setAttribute("uv",new Ke(M,f)),L.setAttribute("faceIndex",new Ke(E,m)),t.push(L),i>Vi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function fl(r,t,e){const n=new Fe(r,t,e);return n.texture.mapping=Nr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ar(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Dp(r,t,e){const n=new Float32Array(ni),i=new X(0,1,0);return new he({name:"SphericalGaussianBlur",defines:{n:ni,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ie,depthTest:!1,depthWrite:!1})}function pl(){return new he({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ie,depthTest:!1,depthWrite:!1})}function ml(){return new he({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ie,depthTest:!1,depthWrite:!1})}function Aa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Np(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Io||l===Do,h=l===Ki||l===Zi;if(c||h){let d=t.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new dl(r)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new dl(r)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Up(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Ts("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Fp(r,t,e,n){const i={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const v=u.morphAttributes[g];for(let f=0,m=v.length;f<m;f++)t.remove(v[f])}u.removeEventListener("dispose",o),delete i[u.id];const p=s.get(u);p&&(t.remove(p),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)t.update(u[g],r.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const v=p[g];for(let f=0,m=v.length;f<m;f++)t.update(v[f],r.ARRAY_BUFFER)}}function c(d){const u=[],p=d.index,g=d.attributes.position;let v=0;if(p!==null){const _=p.array;v=p.version;for(let M=0,E=_.length;M<E;M+=3){const L=_[M+0],A=_[M+1],C=_[M+2];u.push(L,A,A,C,C,L)}}else if(g!==void 0){const _=g.array;v=g.version;for(let M=0,E=_.length/3-1;M<E;M+=3){const L=M+0,A=M+1,C=M+2;u.push(L,A,A,C,C,L)}}else return;const f=new(Hc(u)?Xc:qc)(u,1);f.version=v;const m=s.get(d);m&&t.remove(m),s.set(d,f)}function h(d){const u=s.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Op(r,t,e){let n;function i(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,p){r.drawElements(n,p,s,u*o),e.update(p,n,1)}function c(u,p,g){g!==0&&(r.drawElementsInstanced(n,p,s,u*o,g),e.update(p,n,g))}function h(u,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,u,0,g);let f=0;for(let m=0;m<g;m++)f+=p[m];e.update(f,n,1)}function d(u,p,g,v){if(g===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<u.length;m++)c(u[m]/o,p[m],v[m]);else{f.multiDrawElementsInstancedWEBGL(n,p,0,s,u,0,v,0,g);let m=0;for(let _=0;_<g;_++)m+=p[_];for(let _=0;_<v.length;_++)e.update(m,n,v[_])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Bp(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function zp(r,t,e){const n=new WeakMap,i=new ce;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let S=function(){N.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var p=S;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let E=0;g===!0&&(E=1),v===!0&&(E=2),f===!0&&(E=3);let L=a.attributes.position.count*E,A=1;L>t.maxTextureSize&&(A=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const C=new Float32Array(L*A*4*d),N=new Gc(C,L,A,d);N.type=an,N.needsUpdate=!0;const w=E*4;for(let P=0;P<d;P++){const H=m[P],I=_[P],z=M[P],k=L*A*4*P;for(let O=0;O<H.count;O++){const j=O*w;g===!0&&(i.fromBufferAttribute(H,O),C[k+j+0]=i.x,C[k+j+1]=i.y,C[k+j+2]=i.z,C[k+j+3]=0),v===!0&&(i.fromBufferAttribute(I,O),C[k+j+4]=i.x,C[k+j+5]=i.y,C[k+j+6]=i.z,C[k+j+7]=0),f===!0&&(i.fromBufferAttribute(z,O),C[k+j+8]=i.x,C[k+j+9]=i.y,C[k+j+10]=i.z,C[k+j+11]=z.itemSize===4?i.w:1)}}u={count:d,texture:N,size:new Bt(L,A)},n.set(a,u),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let g=0;for(let f=0;f<c.length;f++)g+=c[f];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",v),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function kp(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class Ca extends Ce{constructor(t,e,n,i,s,o,a,l,c,h=Yi){if(h!==Yi&&h!==ci)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Yi&&(n=ai),n===void 0&&h===ci&&(n=li),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ae,this.minFilter=l!==void 0?l:Ae,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Qc=new Ce,gl=new Ca(1,1),th=new Gc,eh=new Cu,nh=new Kc,vl=[],_l=[],xl=new Float32Array(16),Ml=new Float32Array(9),yl=new Float32Array(4);function rs(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=vl[i];if(s===void 0&&(s=new Float32Array(i),vl[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function _e(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function xe(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Or(r,t){let e=_l[t];e===void 0&&(e=new Int32Array(t),_l[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Hp(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Vp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;r.uniform2fv(this.addr,t),xe(e,t)}}function Gp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;r.uniform3fv(this.addr,t),xe(e,t)}}function Wp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;r.uniform4fv(this.addr,t),xe(e,t)}}function qp(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,n))return;yl.set(n),r.uniformMatrix2fv(this.addr,!1,yl),xe(e,n)}}function Xp(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,n))return;Ml.set(n),r.uniformMatrix3fv(this.addr,!1,Ml),xe(e,n)}}function Yp(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,n))return;xl.set(n),r.uniformMatrix4fv(this.addr,!1,xl),xe(e,n)}}function $p(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function jp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;r.uniform2iv(this.addr,t),xe(e,t)}}function Kp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;r.uniform3iv(this.addr,t),xe(e,t)}}function Zp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;r.uniform4iv(this.addr,t),xe(e,t)}}function Jp(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Qp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;r.uniform2uiv(this.addr,t),xe(e,t)}}function tm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;r.uniform3uiv(this.addr,t),xe(e,t)}}function em(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;r.uniform4uiv(this.addr,t),xe(e,t)}}function nm(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(gl.compareFunction=kc,s=gl):s=Qc,e.setTexture2D(t||s,i)}function im(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||eh,i)}function sm(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||nh,i)}function rm(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||th,i)}function om(r){switch(r){case 5126:return Hp;case 35664:return Vp;case 35665:return Gp;case 35666:return Wp;case 35674:return qp;case 35675:return Xp;case 35676:return Yp;case 5124:case 35670:return $p;case 35667:case 35671:return jp;case 35668:case 35672:return Kp;case 35669:case 35673:return Zp;case 5125:return Jp;case 36294:return Qp;case 36295:return tm;case 36296:return em;case 35678:case 36198:case 36298:case 36306:case 35682:return nm;case 35679:case 36299:case 36307:return im;case 35680:case 36300:case 36308:case 36293:return sm;case 36289:case 36303:case 36311:case 36292:return rm}}function am(r,t){r.uniform1fv(this.addr,t)}function lm(r,t){const e=rs(t,this.size,2);r.uniform2fv(this.addr,e)}function cm(r,t){const e=rs(t,this.size,3);r.uniform3fv(this.addr,e)}function hm(r,t){const e=rs(t,this.size,4);r.uniform4fv(this.addr,e)}function um(r,t){const e=rs(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function dm(r,t){const e=rs(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function fm(r,t){const e=rs(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function pm(r,t){r.uniform1iv(this.addr,t)}function mm(r,t){r.uniform2iv(this.addr,t)}function gm(r,t){r.uniform3iv(this.addr,t)}function vm(r,t){r.uniform4iv(this.addr,t)}function _m(r,t){r.uniform1uiv(this.addr,t)}function xm(r,t){r.uniform2uiv(this.addr,t)}function Mm(r,t){r.uniform3uiv(this.addr,t)}function ym(r,t){r.uniform4uiv(this.addr,t)}function Sm(r,t,e){const n=this.cache,i=t.length,s=Or(e,i);_e(n,s)||(r.uniform1iv(this.addr,s),xe(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Qc,s[o])}function Em(r,t,e){const n=this.cache,i=t.length,s=Or(e,i);_e(n,s)||(r.uniform1iv(this.addr,s),xe(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||eh,s[o])}function bm(r,t,e){const n=this.cache,i=t.length,s=Or(e,i);_e(n,s)||(r.uniform1iv(this.addr,s),xe(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||nh,s[o])}function wm(r,t,e){const n=this.cache,i=t.length,s=Or(e,i);_e(n,s)||(r.uniform1iv(this.addr,s),xe(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||th,s[o])}function Tm(r){switch(r){case 5126:return am;case 35664:return lm;case 35665:return cm;case 35666:return hm;case 35674:return um;case 35675:return dm;case 35676:return fm;case 5124:case 35670:return pm;case 35667:case 35671:return mm;case 35668:case 35672:return gm;case 35669:case 35673:return vm;case 5125:return _m;case 36294:return xm;case 36295:return Mm;case 36296:return ym;case 35678:case 36198:case 36298:case 36306:case 35682:return Sm;case 35679:case 36299:case 36307:return Em;case 35680:case 36300:case 36308:case 36293:return bm;case 36289:case 36303:case 36311:case 36292:return wm}}class Am{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=om(e.type)}}class Cm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Tm(e.type)}}class Rm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const go=/(\w+)(\])?(\[|\.)?/g;function Sl(r,t){r.seq.push(t),r.map[t.id]=t}function Pm(r,t,e){const n=r.name,i=n.length;for(go.lastIndex=0;;){const s=go.exec(n),o=go.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Sl(e,c===void 0?new Am(a,r,t):new Cm(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new Rm(a),Sl(e,d)),e=d}}}class Ar{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);Pm(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function El(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const Lm=37297;let Im=0;function Dm(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Nm(r){const t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(r);let n;switch(t===e?n="":t===Ir&&e===Lr?n="LinearDisplayP3ToLinearSRGB":t===Lr&&e===Ir&&(n="LinearSRGBToLinearDisplayP3"),r){case Xn:case Fr:return[n,"LinearTransferOETF"];case We:case ya:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function bl(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Dm(r.getShaderSource(t),o)}else return i}function Um(r,t){const e=Nm(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Fm(r,t){let e;switch(t){case wc:e="Linear";break;case Tc:e="Reinhard";break;case Ac:e="Cineon";break;case fa:e="ACESFilmic";break;case Cc:e="AgX";break;case Rc:e="Neutral";break;case Xh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const lr=new X;function Om(){Qt.getLuminanceCoefficients(lr);const r=lr.x.toFixed(4),t=lr.y.toFixed(4),e=lr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bm(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Es).join(`
`)}function zm(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function km(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Es(r){return r!==""}function wl(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Tl(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Hm=/^[ \t]*#include +<([\w\d./]+)>/gm;function aa(r){return r.replace(Hm,Gm)}const Vm=new Map;function Gm(r,t){let e=qt[t];if(e===void 0){const n=Vm.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return aa(e)}const Wm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Al(r){return r.replace(Wm,qm)}function qm(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Cl(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Xm(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===xc?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Mc?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Pn&&(t="SHADOWMAP_TYPE_VSM"),t}function Ym(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ki:case Zi:t="ENVMAP_TYPE_CUBE";break;case Nr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function $m(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Zi:t="ENVMAP_MODE_REFRACTION";break}return t}function jm(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case bc:t="ENVMAP_BLENDING_MULTIPLY";break;case Wh:t="ENVMAP_BLENDING_MIX";break;case qh:t="ENVMAP_BLENDING_ADD";break}return t}function Km(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Zm(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Xm(e),c=Ym(e),h=$m(e),d=jm(e),u=Km(e),p=Bm(e),g=zm(s),v=i.createProgram();let f,m,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Es).join(`
`),f.length>0&&(f+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Es).join(`
`),m.length>0&&(m+=`
`)):(f=[Cl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),m=[Cl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wn?"#define TONE_MAPPING":"",e.toneMapping!==Wn?qt.tonemapping_pars_fragment:"",e.toneMapping!==Wn?Fm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,Um("linearToOutputTexel",e.outputColorSpace),Om(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Es).join(`
`)),o=aa(o),o=wl(o,e),o=Tl(o,e),a=aa(a),a=wl(a,e),a=Tl(a,e),o=Al(o),a=Al(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,m=["#define varying in",e.glslVersion===Va?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Va?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=_+f+o,E=_+m+a,L=El(i,i.VERTEX_SHADER,M),A=El(i,i.FRAGMENT_SHADER,E);i.attachShader(v,L),i.attachShader(v,A),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function C(P){if(r.debug.checkShaderErrors){const H=i.getProgramInfoLog(v).trim(),I=i.getShaderInfoLog(L).trim(),z=i.getShaderInfoLog(A).trim();let k=!0,O=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(k=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,L,A);else{const j=bl(i,L,"vertex"),G=bl(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+j+`
`+G)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(I===""||z==="")&&(O=!1);O&&(P.diagnostics={runnable:k,programLog:H,vertexShader:{log:I,prefix:f},fragmentShader:{log:z,prefix:m}})}i.deleteShader(L),i.deleteShader(A),N=new Ar(i,v),w=km(i,v)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(v,Lm)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Im++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=A,this}let Jm=0;class Qm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new tg(t),e.set(t,n)),n}}class tg{constructor(t){this.id=Jm++,this.code=t,this.usedTimes=0}}function eg(r,t,e,n,i,s,o){const a=new ba,l=new Qm,c=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return c.add(w),w===0?"uv":`uv${w}`}function f(w,S,P,H,I){const z=H.fog,k=I.geometry,O=w.isMeshStandardMaterial?H.environment:null,j=(w.isMeshStandardMaterial?e:t).get(w.envMap||O),G=j&&j.mapping===Nr?j.image.height:null,Y=g[w.type];w.precision!==null&&(p=i.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const ot=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,lt=ot!==void 0?ot.length:0;let nt=0;k.morphAttributes.position!==void 0&&(nt=1),k.morphAttributes.normal!==void 0&&(nt=2),k.morphAttributes.color!==void 0&&(nt=3);let At,K,it,ht;if(Y){const Zt=pn[Y];At=Zt.vertexShader,K=Zt.fragmentShader}else At=w.vertexShader,K=w.fragmentShader,l.update(w),it=l.getVertexShaderID(w),ht=l.getFragmentShaderID(w);const gt=r.getRenderTarget(),bt=I.isInstancedMesh===!0,Lt=I.isBatchedMesh===!0,yt=!!w.map,Ct=!!w.matcap,U=!!j,Ht=!!w.aoMap,Gt=!!w.lightMap,Dt=!!w.bumpMap,mt=!!w.normalMap,jt=!!w.displacementMap,Ut=!!w.emissiveMap,R=!!w.metalnessMap,T=!!w.roughnessMap,x=w.anisotropy>0,B=w.clearcoat>0,$=w.dispersion>0,Z=w.iridescence>0,et=w.sheen>0,Tt=w.transmission>0,pt=x&&!!w.anisotropyMap,vt=B&&!!w.clearcoatMap,Rt=B&&!!w.clearcoatNormalMap,st=B&&!!w.clearcoatRoughnessMap,ut=Z&&!!w.iridescenceMap,Wt=Z&&!!w.iridescenceThicknessMap,Pt=et&&!!w.sheenColorMap,Mt=et&&!!w.sheenRoughnessMap,kt=!!w.specularMap,Vt=!!w.specularColorMap,Kt=!!w.specularIntensityMap,V=Tt&&!!w.transmissionMap,at=Tt&&!!w.thicknessMap,J=!!w.gradientMap,tt=!!w.alphaMap,dt=w.alphaTest>0,zt=!!w.alphaHash,Yt=!!w.extensions;let le=Wn;w.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(le=r.toneMapping);const me={shaderID:Y,shaderType:w.type,shaderName:w.name,vertexShader:At,fragmentShader:K,defines:w.defines,customVertexShaderID:it,customFragmentShaderID:ht,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Lt,batchingColor:Lt&&I._colorsTexture!==null,instancing:bt,instancingColor:bt&&I.instanceColor!==null,instancingMorph:bt&&I.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:gt===null?r.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:Xn,alphaToCoverage:!!w.alphaToCoverage,map:yt,matcap:Ct,envMap:U,envMapMode:U&&j.mapping,envMapCubeUVHeight:G,aoMap:Ht,lightMap:Gt,bumpMap:Dt,normalMap:mt,displacementMap:u&&jt,emissiveMap:Ut,normalMapObjectSpace:mt&&w.normalMapType===Kh,normalMapTangentSpace:mt&&w.normalMapType===Ma,metalnessMap:R,roughnessMap:T,anisotropy:x,anisotropyMap:pt,clearcoat:B,clearcoatMap:vt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:st,dispersion:$,iridescence:Z,iridescenceMap:ut,iridescenceThicknessMap:Wt,sheen:et,sheenColorMap:Pt,sheenRoughnessMap:Mt,specularMap:kt,specularColorMap:Vt,specularIntensityMap:Kt,transmission:Tt,transmissionMap:V,thicknessMap:at,gradientMap:J,opaque:w.transparent===!1&&w.blending===Xi&&w.alphaToCoverage===!1,alphaMap:tt,alphaTest:dt,alphaHash:zt,combine:w.combine,mapUv:yt&&v(w.map.channel),aoMapUv:Ht&&v(w.aoMap.channel),lightMapUv:Gt&&v(w.lightMap.channel),bumpMapUv:Dt&&v(w.bumpMap.channel),normalMapUv:mt&&v(w.normalMap.channel),displacementMapUv:jt&&v(w.displacementMap.channel),emissiveMapUv:Ut&&v(w.emissiveMap.channel),metalnessMapUv:R&&v(w.metalnessMap.channel),roughnessMapUv:T&&v(w.roughnessMap.channel),anisotropyMapUv:pt&&v(w.anisotropyMap.channel),clearcoatMapUv:vt&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:Wt&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&v(w.sheenRoughnessMap.channel),specularMapUv:kt&&v(w.specularMap.channel),specularColorMapUv:Vt&&v(w.specularColorMap.channel),specularIntensityMapUv:Kt&&v(w.specularIntensityMap.channel),transmissionMapUv:V&&v(w.transmissionMap.channel),thicknessMapUv:at&&v(w.thicknessMap.channel),alphaMapUv:tt&&v(w.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(mt||x),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!k.attributes.uv&&(yt||tt),fog:!!z,useFog:w.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:I.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:nt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:le,decodeVideoTexture:yt&&w.map.isVideoTexture===!0&&Qt.getTransfer(w.map.colorSpace)===re,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===sn,flipSided:w.side===De,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Yt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&w.extensions.multiDraw===!0||Lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return me.vertexUv1s=c.has(1),me.vertexUv2s=c.has(2),me.vertexUv3s=c.has(3),c.clear(),me}function m(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)S.push(P),S.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(_(S,w),M(S,w),S.push(r.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function _(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function M(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),w.push(a.mask)}function E(w){const S=g[w.type];let P;if(S){const H=pn[S];P=gn.clone(H.uniforms)}else P=w.uniforms;return P}function L(w,S){let P;for(let H=0,I=h.length;H<I;H++){const z=h[H];if(z.cacheKey===S){P=z,++P.usedTimes;break}}return P===void 0&&(P=new Zm(r,S,w,s),h.push(P)),P}function A(w){if(--w.usedTimes===0){const S=h.indexOf(w);h[S]=h[h.length-1],h.pop(),w.destroy()}}function C(w){l.remove(w)}function N(){l.dispose()}return{getParameters:f,getProgramCacheKey:m,getUniforms:E,acquireProgram:L,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:N}}function ng(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function ig(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Rl(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Pl(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(d,u,p,g,v,f){let m=r[t];return m===void 0?(m={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:v,group:f},r[t]=m):(m.id=d.id,m.object=d,m.geometry=u,m.material=p,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=v,m.group=f),t++,m}function a(d,u,p,g,v,f){const m=o(d,u,p,g,v,f);p.transmission>0?n.push(m):p.transparent===!0?i.push(m):e.push(m)}function l(d,u,p,g,v,f){const m=o(d,u,p,g,v,f);p.transmission>0?n.unshift(m):p.transparent===!0?i.unshift(m):e.unshift(m)}function c(d,u){e.length>1&&e.sort(d||ig),n.length>1&&n.sort(u||Rl),i.length>1&&i.sort(u||Rl)}function h(){for(let d=t,u=r.length;d<u;d++){const p=r[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function sg(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new Pl,r.set(n,[o])):i>=s.length?(o=new Pl,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function rg(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new X,color:new Ot};break;case"SpotLight":e={position:new X,direction:new X,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new X,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new X,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new X,halfWidth:new X,halfHeight:new X};break}return r[t.id]=e,e}}}function og(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let ag=0;function lg(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function cg(r){const t=new rg,e=og(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new X);const i=new X,s=new ne,o=new ne;function a(c){let h=0,d=0,u=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let p=0,g=0,v=0,f=0,m=0,_=0,M=0,E=0,L=0,A=0,C=0;c.sort(lg);for(let w=0,S=c.length;w<S;w++){const P=c[w],H=P.color,I=P.intensity,z=P.distance,k=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=H.r*I,d+=H.g*I,u+=H.b*I;else if(P.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(P.sh.coefficients[O],I);C++}else if(P.isDirectionalLight){const O=t.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const j=P.shadow,G=e.get(P);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=k,n.directionalShadowMatrix[p]=P.shadow.matrix,_++}n.directional[p]=O,p++}else if(P.isSpotLight){const O=t.get(P);O.position.setFromMatrixPosition(P.matrixWorld),O.color.copy(H).multiplyScalar(I),O.distance=z,O.coneCos=Math.cos(P.angle),O.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),O.decay=P.decay,n.spot[v]=O;const j=P.shadow;if(P.map&&(n.spotLightMap[L]=P.map,L++,j.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[v]=j.matrix,P.castShadow){const G=e.get(P);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=k,E++}v++}else if(P.isRectAreaLight){const O=t.get(P);O.color.copy(H).multiplyScalar(I),O.halfWidth.set(P.width*.5,0,0),O.halfHeight.set(0,P.height*.5,0),n.rectArea[f]=O,f++}else if(P.isPointLight){const O=t.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),O.distance=P.distance,O.decay=P.decay,P.castShadow){const j=P.shadow,G=e.get(P);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,G.shadowCameraNear=j.camera.near,G.shadowCameraFar=j.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=k,n.pointShadowMatrix[g]=P.shadow.matrix,M++}n.point[g]=O,g++}else if(P.isHemisphereLight){const O=t.get(P);O.skyColor.copy(P.color).multiplyScalar(I),O.groundColor.copy(P.groundColor).multiplyScalar(I),n.hemi[m]=O,m++}}f>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const N=n.hash;(N.directionalLength!==p||N.pointLength!==g||N.spotLength!==v||N.rectAreaLength!==f||N.hemiLength!==m||N.numDirectionalShadows!==_||N.numPointShadows!==M||N.numSpotShadows!==E||N.numSpotMaps!==L||N.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=f,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=E+L-A,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,N.directionalLength=p,N.pointLength=g,N.spotLength=v,N.rectAreaLength=f,N.hemiLength=m,N.numDirectionalShadows=_,N.numPointShadows=M,N.numSpotShadows=E,N.numSpotMaps=L,N.numLightProbes=C,n.version=ag++)}function l(c,h){let d=0,u=0,p=0,g=0,v=0;const f=h.matrixWorldInverse;for(let m=0,_=c.length;m<_;m++){const M=c[m];if(M.isDirectionalLight){const E=n.directional[d];E.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(f),d++}else if(M.isSpotLight){const E=n.spot[p];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(f),p++}else if(M.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(f),o.identity(),s.copy(M.matrixWorld),s.premultiply(f),o.extractRotation(s),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const E=n.point[u];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(f),u++}else if(M.isHemisphereLight){const E=n.hemi[v];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(f),v++}}}return{setup:a,setupView:l,state:n}}function Ll(r){const t=new cg(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function hg(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new Ll(r),t.set(i,[a])):s>=o.length?(a=new Ll(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class ug extends ui{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$h,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class dg extends ui{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const fg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function mg(r,t,e){let n=new wa;const i=new Bt,s=new Bt,o=new ce,a=new ug({depthPacking:jh}),l=new dg,c={},h=e.maxTextureSize,d={[qn]:De,[De]:qn,[sn]:sn},u=new he({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:fg,fragmentShader:pg}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ze;g.setAttribute("position",new Ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ve(g,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xc;let m=this.type;this.render=function(A,C,N){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||A.length===0)return;const w=r.getRenderTarget(),S=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),H=r.state;H.setBlending(Ie),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const I=m!==Pn&&this.type===Pn,z=m===Pn&&this.type!==Pn;for(let k=0,O=A.length;k<O;k++){const j=A[k],G=j.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const Y=G.getFrameExtents();if(i.multiply(Y),s.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Y.x),i.x=s.x*Y.x,G.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Y.y),i.y=s.y*Y.y,G.mapSize.y=s.y)),G.map===null||I===!0||z===!0){const lt=this.type!==Pn?{minFilter:Ae,magFilter:Ae}:{};G.map!==null&&G.map.dispose(),G.map=new Fe(i.x,i.y,lt),G.map.texture.name=j.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const ot=G.getViewportCount();for(let lt=0;lt<ot;lt++){const nt=G.getViewport(lt);o.set(s.x*nt.x,s.y*nt.y,s.x*nt.z,s.y*nt.w),H.viewport(o),G.updateMatrices(j,lt),n=G.getFrustum(),E(C,N,G.camera,j,this.type)}G.isPointLightShadow!==!0&&this.type===Pn&&_(G,N),G.needsUpdate=!1}m=this.type,f.needsUpdate=!1,r.setRenderTarget(w,S,P)};function _(A,C){const N=t.update(v);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Fe(i.x,i.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(C,null,N,u,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(C,null,N,p,v,null)}function M(A,C,N,w){let S=null;const P=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)S=P;else if(S=N.isPointLight===!0?l:a,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const H=S.uuid,I=C.uuid;let z=c[H];z===void 0&&(z={},c[H]=z);let k=z[I];k===void 0&&(k=S.clone(),z[I]=k,C.addEventListener("dispose",L)),S=k}if(S.visible=C.visible,S.wireframe=C.wireframe,w===Pn?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:d[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=r.properties.get(S);H.light=N}return S}function E(A,C,N,w,S){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Pn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);const I=t.update(A),z=A.material;if(Array.isArray(z)){const k=I.groups;for(let O=0,j=k.length;O<j;O++){const G=k[O],Y=z[G.materialIndex];if(Y&&Y.visible){const ot=M(A,Y,w,S);A.onBeforeShadow(r,A,C,N,I,ot,G),r.renderBufferDirect(N,null,I,ot,A,G),A.onAfterShadow(r,A,C,N,I,ot,G)}}}else if(z.visible){const k=M(A,z,w,S);A.onBeforeShadow(r,A,C,N,I,k,null),r.renderBufferDirect(N,null,I,k,A,null),A.onAfterShadow(r,A,C,N,I,k,null)}}const H=A.children;for(let I=0,z=H.length;I<z;I++)E(H[I],C,N,w,S)}function L(A){A.target.removeEventListener("dispose",L);for(const N in c){const w=c[N],S=A.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}function gg(r){function t(){let V=!1;const at=new ce;let J=null;const tt=new ce(0,0,0,0);return{setMask:function(dt){J!==dt&&!V&&(r.colorMask(dt,dt,dt,dt),J=dt)},setLocked:function(dt){V=dt},setClear:function(dt,zt,Yt,le,me){me===!0&&(dt*=le,zt*=le,Yt*=le),at.set(dt,zt,Yt,le),tt.equals(at)===!1&&(r.clearColor(dt,zt,Yt,le),tt.copy(at))},reset:function(){V=!1,J=null,tt.set(-1,0,0,0)}}}function e(){let V=!1,at=null,J=null,tt=null;return{setTest:function(dt){dt?ht(r.DEPTH_TEST):gt(r.DEPTH_TEST)},setMask:function(dt){at!==dt&&!V&&(r.depthMask(dt),at=dt)},setFunc:function(dt){if(J!==dt){switch(dt){case Oh:r.depthFunc(r.NEVER);break;case Bh:r.depthFunc(r.ALWAYS);break;case zh:r.depthFunc(r.LESS);break;case Rr:r.depthFunc(r.LEQUAL);break;case kh:r.depthFunc(r.EQUAL);break;case Hh:r.depthFunc(r.GEQUAL);break;case Vh:r.depthFunc(r.GREATER);break;case Gh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}J=dt}},setLocked:function(dt){V=dt},setClear:function(dt){tt!==dt&&(r.clearDepth(dt),tt=dt)},reset:function(){V=!1,at=null,J=null,tt=null}}}function n(){let V=!1,at=null,J=null,tt=null,dt=null,zt=null,Yt=null,le=null,me=null;return{setTest:function(Zt){V||(Zt?ht(r.STENCIL_TEST):gt(r.STENCIL_TEST))},setMask:function(Zt){at!==Zt&&!V&&(r.stencilMask(Zt),at=Zt)},setFunc:function(Zt,Me,Oe){(J!==Zt||tt!==Me||dt!==Oe)&&(r.stencilFunc(Zt,Me,Oe),J=Zt,tt=Me,dt=Oe)},setOp:function(Zt,Me,Oe){(zt!==Zt||Yt!==Me||le!==Oe)&&(r.stencilOp(Zt,Me,Oe),zt=Zt,Yt=Me,le=Oe)},setLocked:function(Zt){V=Zt},setClear:function(Zt){me!==Zt&&(r.clearStencil(Zt),me=Zt)},reset:function(){V=!1,at=null,J=null,tt=null,dt=null,zt=null,Yt=null,le=null,me=null}}}const i=new t,s=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},d=new WeakMap,u=[],p=null,g=!1,v=null,f=null,m=null,_=null,M=null,E=null,L=null,A=new Ot(0,0,0),C=0,N=!1,w=null,S=null,P=null,H=null,I=null;const z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,O=0;const j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(j)[1]),k=O>=1):j.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),k=O>=2);let G=null,Y={};const ot=r.getParameter(r.SCISSOR_BOX),lt=r.getParameter(r.VIEWPORT),nt=new ce().fromArray(ot),At=new ce().fromArray(lt);function K(V,at,J,tt){const dt=new Uint8Array(4),zt=r.createTexture();r.bindTexture(V,zt),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Yt=0;Yt<J;Yt++)V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY?r.texImage3D(at,0,r.RGBA,1,1,tt,0,r.RGBA,r.UNSIGNED_BYTE,dt):r.texImage2D(at+Yt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,dt);return zt}const it={};it[r.TEXTURE_2D]=K(r.TEXTURE_2D,r.TEXTURE_2D,1),it[r.TEXTURE_CUBE_MAP]=K(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[r.TEXTURE_2D_ARRAY]=K(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),it[r.TEXTURE_3D]=K(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ht(r.DEPTH_TEST),s.setFunc(Rr),Dt(!1),mt(Oa),ht(r.CULL_FACE),Ht(Ie);function ht(V){c[V]!==!0&&(r.enable(V),c[V]=!0)}function gt(V){c[V]!==!1&&(r.disable(V),c[V]=!1)}function bt(V,at){return h[V]!==at?(r.bindFramebuffer(V,at),h[V]=at,V===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=at),V===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=at),!0):!1}function Lt(V,at){let J=u,tt=!1;if(V){J=d.get(at),J===void 0&&(J=[],d.set(at,J));const dt=V.textures;if(J.length!==dt.length||J[0]!==r.COLOR_ATTACHMENT0){for(let zt=0,Yt=dt.length;zt<Yt;zt++)J[zt]=r.COLOR_ATTACHMENT0+zt;J.length=dt.length,tt=!0}}else J[0]!==r.BACK&&(J[0]=r.BACK,tt=!0);tt&&r.drawBuffers(J)}function yt(V){return p!==V?(r.useProgram(V),p=V,!0):!1}const Ct={[Ln]:r.FUNC_ADD,[Eh]:r.FUNC_SUBTRACT,[bh]:r.FUNC_REVERSE_SUBTRACT};Ct[wh]=r.MIN,Ct[Th]=r.MAX;const U={[Ro]:r.ZERO,[Ah]:r.ONE,[Ch]:r.SRC_COLOR,[Po]:r.SRC_ALPHA,[Ih]:r.SRC_ALPHA_SATURATE,[Ec]:r.DST_COLOR,[Sc]:r.DST_ALPHA,[Rh]:r.ONE_MINUS_SRC_COLOR,[Lo]:r.ONE_MINUS_SRC_ALPHA,[Lh]:r.ONE_MINUS_DST_COLOR,[Ph]:r.ONE_MINUS_DST_ALPHA,[Dh]:r.CONSTANT_COLOR,[Nh]:r.ONE_MINUS_CONSTANT_COLOR,[Uh]:r.CONSTANT_ALPHA,[Fh]:r.ONE_MINUS_CONSTANT_ALPHA};function Ht(V,at,J,tt,dt,zt,Yt,le,me,Zt){if(V===Ie){g===!0&&(gt(r.BLEND),g=!1);return}if(g===!1&&(ht(r.BLEND),g=!0),V!==yc){if(V!==v||Zt!==N){if((f!==Ln||M!==Ln)&&(r.blendEquation(r.FUNC_ADD),f=Ln,M=Ln),Zt)switch(V){case Xi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Co:r.blendFunc(r.ONE,r.ONE);break;case Ba:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case za:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Xi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Co:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Ba:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case za:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}m=null,_=null,E=null,L=null,A.set(0,0,0),C=0,v=V,N=Zt}return}dt=dt||at,zt=zt||J,Yt=Yt||tt,(at!==f||dt!==M)&&(r.blendEquationSeparate(Ct[at],Ct[dt]),f=at,M=dt),(J!==m||tt!==_||zt!==E||Yt!==L)&&(r.blendFuncSeparate(U[J],U[tt],U[zt],U[Yt]),m=J,_=tt,E=zt,L=Yt),(le.equals(A)===!1||me!==C)&&(r.blendColor(le.r,le.g,le.b,me),A.copy(le),C=me),v=V,N=!1}function Gt(V,at){V.side===sn?gt(r.CULL_FACE):ht(r.CULL_FACE);let J=V.side===De;at&&(J=!J),Dt(J),V.blending===Xi&&V.transparent===!1?Ht(Ie):Ht(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),s.setFunc(V.depthFunc),s.setTest(V.depthTest),s.setMask(V.depthWrite),i.setMask(V.colorWrite);const tt=V.stencilWrite;o.setTest(tt),tt&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Ut(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ht(r.SAMPLE_ALPHA_TO_COVERAGE):gt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(V){w!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),w=V)}function mt(V){V!==yh?(ht(r.CULL_FACE),V!==S&&(V===Oa?r.cullFace(r.BACK):V===Sh?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):gt(r.CULL_FACE),S=V}function jt(V){V!==P&&(k&&r.lineWidth(V),P=V)}function Ut(V,at,J){V?(ht(r.POLYGON_OFFSET_FILL),(H!==at||I!==J)&&(r.polygonOffset(at,J),H=at,I=J)):gt(r.POLYGON_OFFSET_FILL)}function R(V){V?ht(r.SCISSOR_TEST):gt(r.SCISSOR_TEST)}function T(V){V===void 0&&(V=r.TEXTURE0+z-1),G!==V&&(r.activeTexture(V),G=V)}function x(V,at,J){J===void 0&&(G===null?J=r.TEXTURE0+z-1:J=G);let tt=Y[J];tt===void 0&&(tt={type:void 0,texture:void 0},Y[J]=tt),(tt.type!==V||tt.texture!==at)&&(G!==J&&(r.activeTexture(J),G=J),r.bindTexture(V,at||it[V]),tt.type=V,tt.texture=at)}function B(){const V=Y[G];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function $(){try{r.compressedTexImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Z(){try{r.compressedTexImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function et(){try{r.texSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Tt(){try{r.texSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function vt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Rt(){try{r.texStorage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function st(){try{r.texStorage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ut(){try{r.texImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Wt(){try{r.texImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pt(V){nt.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),nt.copy(V))}function Mt(V){At.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),At.copy(V))}function kt(V,at){let J=l.get(at);J===void 0&&(J=new WeakMap,l.set(at,J));let tt=J.get(V);tt===void 0&&(tt=r.getUniformBlockIndex(at,V.name),J.set(V,tt))}function Vt(V,at){const tt=l.get(at).get(V);a.get(at)!==tt&&(r.uniformBlockBinding(at,tt,V.__bindingPointIndex),a.set(at,tt))}function Kt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},G=null,Y={},h={},d=new WeakMap,u=[],p=null,g=!1,v=null,f=null,m=null,_=null,M=null,E=null,L=null,A=new Ot(0,0,0),C=0,N=!1,w=null,S=null,P=null,H=null,I=null,nt.set(0,0,r.canvas.width,r.canvas.height),At.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:ht,disable:gt,bindFramebuffer:bt,drawBuffers:Lt,useProgram:yt,setBlending:Ht,setMaterial:Gt,setFlipSided:Dt,setCullFace:mt,setLineWidth:jt,setPolygonOffset:Ut,setScissorTest:R,activeTexture:T,bindTexture:x,unbindTexture:B,compressedTexImage2D:$,compressedTexImage3D:Z,texImage2D:ut,texImage3D:Wt,updateUBOMapping:kt,uniformBlockBinding:Vt,texStorage2D:Rt,texStorage3D:st,texSubImage2D:et,texSubImage3D:Tt,compressedTexSubImage2D:pt,compressedTexSubImage3D:vt,scissor:Pt,viewport:Mt,reset:Kt}}function Il(r,t,e,n){const i=vg(n);switch(e){case Nc:return r*t;case Fc:return r*t;case Oc:return r*t*2;case Ur:return r*t/i.components*i.byteLength;case va:return r*t/i.components*i.byteLength;case Bc:return r*t*2/i.components*i.byteLength;case _a:return r*t*2/i.components*i.byteLength;case Uc:return r*t*3/i.components*i.byteLength;case ln:return r*t*4/i.components*i.byteLength;case xa:return r*t*4/i.components*i.byteLength;case Sr:case Er:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case br:case wr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Fo:case Bo:return Math.max(r,16)*Math.max(t,8)/4;case Uo:case Oo:return Math.max(r,8)*Math.max(t,8)/2;case zo:case ko:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ho:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Vo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Go:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Wo:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case qo:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Yo:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case $o:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case jo:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Ko:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Zo:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Jo:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Qo:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case ta:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case ea:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Tr:case na:case ia:return Math.ceil(r/4)*Math.ceil(t/4)*16;case zc:case sa:return Math.ceil(r/4)*Math.ceil(t/4)*8;case ra:case oa:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function vg(r){switch(r){case Dn:case Lc:return{byteLength:1,components:1};case Rs:case Ic:case Xe:return{byteLength:2,components:1};case ma:case ga:return{byteLength:2,components:4};case ai:case pa:case an:return{byteLength:4,components:1};case Dc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function _g(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Bt,h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return p?new OffscreenCanvas(T,x):Ls("canvas")}function v(T,x,B){let $=1;const Z=R(T);if((Z.width>B||Z.height>B)&&($=B/Math.max(Z.width,Z.height)),$<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const et=Math.floor($*Z.width),Tt=Math.floor($*Z.height);d===void 0&&(d=g(et,Tt));const pt=x?g(et,Tt):d;return pt.width=et,pt.height=Tt,pt.getContext("2d").drawImage(T,0,0,et,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+et+"x"+Tt+")."),pt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function f(T){return T.generateMipmaps&&T.minFilter!==Ae&&T.minFilter!==rn}function m(T){r.generateMipmap(T)}function _(T,x,B,$,Z=!1){if(T!==null){if(r[T]!==void 0)return r[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let et=x;if(x===r.RED&&(B===r.FLOAT&&(et=r.R32F),B===r.HALF_FLOAT&&(et=r.R16F),B===r.UNSIGNED_BYTE&&(et=r.R8)),x===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&(et=r.R8UI),B===r.UNSIGNED_SHORT&&(et=r.R16UI),B===r.UNSIGNED_INT&&(et=r.R32UI),B===r.BYTE&&(et=r.R8I),B===r.SHORT&&(et=r.R16I),B===r.INT&&(et=r.R32I)),x===r.RG&&(B===r.FLOAT&&(et=r.RG32F),B===r.HALF_FLOAT&&(et=r.RG16F),B===r.UNSIGNED_BYTE&&(et=r.RG8)),x===r.RG_INTEGER&&(B===r.UNSIGNED_BYTE&&(et=r.RG8UI),B===r.UNSIGNED_SHORT&&(et=r.RG16UI),B===r.UNSIGNED_INT&&(et=r.RG32UI),B===r.BYTE&&(et=r.RG8I),B===r.SHORT&&(et=r.RG16I),B===r.INT&&(et=r.RG32I)),x===r.RGB&&B===r.UNSIGNED_INT_5_9_9_9_REV&&(et=r.RGB9_E5),x===r.RGBA){const Tt=Z?Pr:Qt.getTransfer($);B===r.FLOAT&&(et=r.RGBA32F),B===r.HALF_FLOAT&&(et=r.RGBA16F),B===r.UNSIGNED_BYTE&&(et=Tt===re?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT_4_4_4_4&&(et=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&(et=r.RGB5_A1)}return(et===r.R16F||et===r.R32F||et===r.RG16F||et===r.RG32F||et===r.RGBA16F||et===r.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function M(T,x){let B;return T?x===null||x===ai||x===li?B=r.DEPTH24_STENCIL8:x===an?B=r.DEPTH32F_STENCIL8:x===Rs&&(B=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ai||x===li?B=r.DEPTH_COMPONENT24:x===an?B=r.DEPTH_COMPONENT32F:x===Rs&&(B=r.DEPTH_COMPONENT16),B}function E(T,x){return f(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ae&&T.minFilter!==rn?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function L(T){const x=T.target;x.removeEventListener("dispose",L),C(x),x.isVideoTexture&&h.delete(x)}function A(T){const x=T.target;x.removeEventListener("dispose",A),w(x)}function C(T){const x=n.get(T);if(x.__webglInit===void 0)return;const B=T.source,$=u.get(B);if($){const Z=$[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&N(T),Object.keys($).length===0&&u.delete(B)}n.remove(T)}function N(T){const x=n.get(T);r.deleteTexture(x.__webglTexture);const B=T.source,$=u.get(B);delete $[x.__cacheKey],o.memory.textures--}function w(T){const x=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let Z=0;Z<x.__webglFramebuffer[$].length;Z++)r.deleteFramebuffer(x.__webglFramebuffer[$][Z]);else r.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)r.deleteFramebuffer(x.__webglFramebuffer[$]);else r.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&r.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&r.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&r.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const B=T.textures;for(let $=0,Z=B.length;$<Z;$++){const et=n.get(B[$]);et.__webglTexture&&(r.deleteTexture(et.__webglTexture),o.memory.textures--),n.remove(B[$])}n.remove(T)}let S=0;function P(){S=0}function H(){const T=S;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),S+=1,T}function I(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function z(T,x){const B=n.get(T);if(T.isVideoTexture&&jt(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){const $=T.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{At(B,T,x);return}}e.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+x)}function k(T,x){const B=n.get(T);if(T.version>0&&B.__version!==T.version){At(B,T,x);return}e.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+x)}function O(T,x){const B=n.get(T);if(T.version>0&&B.__version!==T.version){At(B,T,x);return}e.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+x)}function j(T,x){const B=n.get(T);if(T.version>0&&B.__version!==T.version){K(B,T,x);return}e.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+x)}const G={[oi]:r.REPEAT,[si]:r.CLAMP_TO_EDGE,[No]:r.MIRRORED_REPEAT},Y={[Ae]:r.NEAREST,[Yh]:r.NEAREST_MIPMAP_NEAREST,[Hs]:r.NEAREST_MIPMAP_LINEAR,[rn]:r.LINEAR,[qr]:r.LINEAR_MIPMAP_NEAREST,[ri]:r.LINEAR_MIPMAP_LINEAR},ot={[Zh]:r.NEVER,[iu]:r.ALWAYS,[Jh]:r.LESS,[kc]:r.LEQUAL,[Qh]:r.EQUAL,[nu]:r.GEQUAL,[tu]:r.GREATER,[eu]:r.NOTEQUAL};function lt(T,x){if(x.type===an&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===rn||x.magFilter===qr||x.magFilter===Hs||x.magFilter===ri||x.minFilter===rn||x.minFilter===qr||x.minFilter===Hs||x.minFilter===ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(T,r.TEXTURE_WRAP_S,G[x.wrapS]),r.texParameteri(T,r.TEXTURE_WRAP_T,G[x.wrapT]),(T===r.TEXTURE_3D||T===r.TEXTURE_2D_ARRAY)&&r.texParameteri(T,r.TEXTURE_WRAP_R,G[x.wrapR]),r.texParameteri(T,r.TEXTURE_MAG_FILTER,Y[x.magFilter]),r.texParameteri(T,r.TEXTURE_MIN_FILTER,Y[x.minFilter]),x.compareFunction&&(r.texParameteri(T,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(T,r.TEXTURE_COMPARE_FUNC,ot[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ae||x.minFilter!==Hs&&x.minFilter!==ri||x.type===an&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");r.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function nt(T,x){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",L));const $=x.source;let Z=u.get($);Z===void 0&&(Z={},u.set($,Z));const et=I(x);if(et!==T.__cacheKey){Z[et]===void 0&&(Z[et]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Z[et].usedTimes++;const Tt=Z[T.__cacheKey];Tt!==void 0&&(Z[T.__cacheKey].usedTimes--,Tt.usedTimes===0&&N(x)),T.__cacheKey=et,T.__webglTexture=Z[et].texture}return B}function At(T,x,B){let $=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=r.TEXTURE_3D);const Z=nt(T,x),et=x.source;e.bindTexture($,T.__webglTexture,r.TEXTURE0+B);const Tt=n.get(et);if(et.version!==Tt.__version||Z===!0){e.activeTexture(r.TEXTURE0+B);const pt=Qt.getPrimaries(Qt.workingColorSpace),vt=x.colorSpace===on?null:Qt.getPrimaries(x.colorSpace),Rt=x.colorSpace===on||pt===vt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let st=v(x.image,!1,i.maxTextureSize);st=Ut(x,st);const ut=s.convert(x.format,x.colorSpace),Wt=s.convert(x.type);let Pt=_(x.internalFormat,ut,Wt,x.colorSpace,x.isVideoTexture);lt($,x);let Mt;const kt=x.mipmaps,Vt=x.isVideoTexture!==!0,Kt=Tt.__version===void 0||Z===!0,V=et.dataReady,at=E(x,st);if(x.isDepthTexture)Pt=M(x.format===ci,x.type),Kt&&(Vt?e.texStorage2D(r.TEXTURE_2D,1,Pt,st.width,st.height):e.texImage2D(r.TEXTURE_2D,0,Pt,st.width,st.height,0,ut,Wt,null));else if(x.isDataTexture)if(kt.length>0){Vt&&Kt&&e.texStorage2D(r.TEXTURE_2D,at,Pt,kt[0].width,kt[0].height);for(let J=0,tt=kt.length;J<tt;J++)Mt=kt[J],Vt?V&&e.texSubImage2D(r.TEXTURE_2D,J,0,0,Mt.width,Mt.height,ut,Wt,Mt.data):e.texImage2D(r.TEXTURE_2D,J,Pt,Mt.width,Mt.height,0,ut,Wt,Mt.data);x.generateMipmaps=!1}else Vt?(Kt&&e.texStorage2D(r.TEXTURE_2D,at,Pt,st.width,st.height),V&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,st.width,st.height,ut,Wt,st.data)):e.texImage2D(r.TEXTURE_2D,0,Pt,st.width,st.height,0,ut,Wt,st.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Vt&&Kt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,at,Pt,kt[0].width,kt[0].height,st.depth);for(let J=0,tt=kt.length;J<tt;J++)if(Mt=kt[J],x.format!==ln)if(ut!==null)if(Vt){if(V)if(x.layerUpdates.size>0){const dt=Il(Mt.width,Mt.height,x.format,x.type);for(const zt of x.layerUpdates){const Yt=Mt.data.subarray(zt*dt/Mt.data.BYTES_PER_ELEMENT,(zt+1)*dt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,zt,Mt.width,Mt.height,1,ut,Yt,0,0)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,0,Mt.width,Mt.height,st.depth,ut,Mt.data,0,0)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,J,Pt,Mt.width,Mt.height,st.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?V&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,0,Mt.width,Mt.height,st.depth,ut,Wt,Mt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,J,Pt,Mt.width,Mt.height,st.depth,0,ut,Wt,Mt.data)}else{Vt&&Kt&&e.texStorage2D(r.TEXTURE_2D,at,Pt,kt[0].width,kt[0].height);for(let J=0,tt=kt.length;J<tt;J++)Mt=kt[J],x.format!==ln?ut!==null?Vt?V&&e.compressedTexSubImage2D(r.TEXTURE_2D,J,0,0,Mt.width,Mt.height,ut,Mt.data):e.compressedTexImage2D(r.TEXTURE_2D,J,Pt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?V&&e.texSubImage2D(r.TEXTURE_2D,J,0,0,Mt.width,Mt.height,ut,Wt,Mt.data):e.texImage2D(r.TEXTURE_2D,J,Pt,Mt.width,Mt.height,0,ut,Wt,Mt.data)}else if(x.isDataArrayTexture)if(Vt){if(Kt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,at,Pt,st.width,st.height,st.depth),V)if(x.layerUpdates.size>0){const J=Il(st.width,st.height,x.format,x.type);for(const tt of x.layerUpdates){const dt=st.data.subarray(tt*J/st.data.BYTES_PER_ELEMENT,(tt+1)*J/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,tt,st.width,st.height,1,ut,Wt,dt)}x.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,ut,Wt,st.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Pt,st.width,st.height,st.depth,0,ut,Wt,st.data);else if(x.isData3DTexture)Vt?(Kt&&e.texStorage3D(r.TEXTURE_3D,at,Pt,st.width,st.height,st.depth),V&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,ut,Wt,st.data)):e.texImage3D(r.TEXTURE_3D,0,Pt,st.width,st.height,st.depth,0,ut,Wt,st.data);else if(x.isFramebufferTexture){if(Kt)if(Vt)e.texStorage2D(r.TEXTURE_2D,at,Pt,st.width,st.height);else{let J=st.width,tt=st.height;for(let dt=0;dt<at;dt++)e.texImage2D(r.TEXTURE_2D,dt,Pt,J,tt,0,ut,Wt,null),J>>=1,tt>>=1}}else if(kt.length>0){if(Vt&&Kt){const J=R(kt[0]);e.texStorage2D(r.TEXTURE_2D,at,Pt,J.width,J.height)}for(let J=0,tt=kt.length;J<tt;J++)Mt=kt[J],Vt?V&&e.texSubImage2D(r.TEXTURE_2D,J,0,0,ut,Wt,Mt):e.texImage2D(r.TEXTURE_2D,J,Pt,ut,Wt,Mt);x.generateMipmaps=!1}else if(Vt){if(Kt){const J=R(st);e.texStorage2D(r.TEXTURE_2D,at,Pt,J.width,J.height)}V&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ut,Wt,st)}else e.texImage2D(r.TEXTURE_2D,0,Pt,ut,Wt,st);f(x)&&m($),Tt.__version=et.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function K(T,x,B){if(x.image.length!==6)return;const $=nt(T,x),Z=x.source;e.bindTexture(r.TEXTURE_CUBE_MAP,T.__webglTexture,r.TEXTURE0+B);const et=n.get(Z);if(Z.version!==et.__version||$===!0){e.activeTexture(r.TEXTURE0+B);const Tt=Qt.getPrimaries(Qt.workingColorSpace),pt=x.colorSpace===on?null:Qt.getPrimaries(x.colorSpace),vt=x.colorSpace===on||Tt===pt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const Rt=x.isCompressedTexture||x.image[0].isCompressedTexture,st=x.image[0]&&x.image[0].isDataTexture,ut=[];for(let tt=0;tt<6;tt++)!Rt&&!st?ut[tt]=v(x.image[tt],!0,i.maxCubemapSize):ut[tt]=st?x.image[tt].image:x.image[tt],ut[tt]=Ut(x,ut[tt]);const Wt=ut[0],Pt=s.convert(x.format,x.colorSpace),Mt=s.convert(x.type),kt=_(x.internalFormat,Pt,Mt,x.colorSpace),Vt=x.isVideoTexture!==!0,Kt=et.__version===void 0||$===!0,V=Z.dataReady;let at=E(x,Wt);lt(r.TEXTURE_CUBE_MAP,x);let J;if(Rt){Vt&&Kt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,at,kt,Wt.width,Wt.height);for(let tt=0;tt<6;tt++){J=ut[tt].mipmaps;for(let dt=0;dt<J.length;dt++){const zt=J[dt];x.format!==ln?Pt!==null?Vt?V&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt,0,0,zt.width,zt.height,Pt,zt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt,kt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt,0,0,zt.width,zt.height,Pt,Mt,zt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt,kt,zt.width,zt.height,0,Pt,Mt,zt.data)}}}else{if(J=x.mipmaps,Vt&&Kt){J.length>0&&at++;const tt=R(ut[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,at,kt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(st){Vt?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,ut[tt].width,ut[tt].height,Pt,Mt,ut[tt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,kt,ut[tt].width,ut[tt].height,0,Pt,Mt,ut[tt].data);for(let dt=0;dt<J.length;dt++){const Yt=J[dt].image[tt].image;Vt?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt+1,0,0,Yt.width,Yt.height,Pt,Mt,Yt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt+1,kt,Yt.width,Yt.height,0,Pt,Mt,Yt.data)}}else{Vt?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Pt,Mt,ut[tt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,kt,Pt,Mt,ut[tt]);for(let dt=0;dt<J.length;dt++){const zt=J[dt];Vt?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt+1,0,0,Pt,Mt,zt.image[tt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt+1,kt,Pt,Mt,zt.image[tt])}}}f(x)&&m(r.TEXTURE_CUBE_MAP),et.__version=Z.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function it(T,x,B,$,Z,et){const Tt=s.convert(B.format,B.colorSpace),pt=s.convert(B.type),vt=_(B.internalFormat,Tt,pt,B.colorSpace);if(!n.get(x).__hasExternalTextures){const st=Math.max(1,x.width>>et),ut=Math.max(1,x.height>>et);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?e.texImage3D(Z,et,vt,st,ut,x.depth,0,Tt,pt,null):e.texImage2D(Z,et,vt,st,ut,0,Tt,pt,null)}e.bindFramebuffer(r.FRAMEBUFFER,T),mt(x)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,$,Z,n.get(B).__webglTexture,0,Dt(x)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,$,Z,n.get(B).__webglTexture,et),e.bindFramebuffer(r.FRAMEBUFFER,null)}function ht(T,x,B){if(r.bindRenderbuffer(r.RENDERBUFFER,T),x.depthBuffer){const $=x.depthTexture,Z=$&&$.isDepthTexture?$.type:null,et=M(x.stencilBuffer,Z),Tt=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pt=Dt(x);mt(x)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,pt,et,x.width,x.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,pt,et,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,et,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Tt,r.RENDERBUFFER,T)}else{const $=x.textures;for(let Z=0;Z<$.length;Z++){const et=$[Z],Tt=s.convert(et.format,et.colorSpace),pt=s.convert(et.type),vt=_(et.internalFormat,Tt,pt,et.colorSpace),Rt=Dt(x);B&&mt(x)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Rt,vt,x.width,x.height):mt(x)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Rt,vt,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,vt,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function gt(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),z(x.depthTexture,0);const $=n.get(x.depthTexture).__webglTexture,Z=Dt(x);if(x.depthTexture.format===Yi)mt(x)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,$,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,$,0);else if(x.depthTexture.format===ci)mt(x)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,$,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function bt(T){const x=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const $=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),$){const Z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,$.removeEventListener("dispose",Z)};$.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=$}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");gt(x.__webglFramebuffer,T)}else if(B){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]===void 0)x.__webglDepthbuffer[$]=r.createRenderbuffer(),ht(x.__webglDepthbuffer[$],T,!1);else{const Z=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,et=x.__webglDepthbuffer[$];r.bindRenderbuffer(r.RENDERBUFFER,et),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,et)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=r.createRenderbuffer(),ht(x.__webglDepthbuffer,T,!1);else{const $=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,Z)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Lt(T,x,B){const $=n.get(T);x!==void 0&&it($.__webglFramebuffer,T,T.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&bt(T)}function yt(T){const x=T.texture,B=n.get(T),$=n.get(x);T.addEventListener("dispose",A);const Z=T.textures,et=T.isWebGLCubeRenderTarget===!0,Tt=Z.length>1;if(Tt||($.__webglTexture===void 0&&($.__webglTexture=r.createTexture()),$.__version=x.version,o.memory.textures++),et){B.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[pt]=[];for(let vt=0;vt<x.mipmaps.length;vt++)B.__webglFramebuffer[pt][vt]=r.createFramebuffer()}else B.__webglFramebuffer[pt]=r.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let pt=0;pt<x.mipmaps.length;pt++)B.__webglFramebuffer[pt]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(Tt)for(let pt=0,vt=Z.length;pt<vt;pt++){const Rt=n.get(Z[pt]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=r.createTexture(),o.memory.textures++)}if(T.samples>0&&mt(T)===!1){B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let pt=0;pt<Z.length;pt++){const vt=Z[pt];B.__webglColorRenderbuffer[pt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[pt]);const Rt=s.convert(vt.format,vt.colorSpace),st=s.convert(vt.type),ut=_(vt.internalFormat,Rt,st,vt.colorSpace,T.isXRRenderTarget===!0),Wt=Dt(T);r.renderbufferStorageMultisample(r.RENDERBUFFER,Wt,ut,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.RENDERBUFFER,B.__webglColorRenderbuffer[pt])}r.bindRenderbuffer(r.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),ht(B.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(et){e.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),lt(r.TEXTURE_CUBE_MAP,x);for(let pt=0;pt<6;pt++)if(x.mipmaps&&x.mipmaps.length>0)for(let vt=0;vt<x.mipmaps.length;vt++)it(B.__webglFramebuffer[pt][vt],T,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,vt);else it(B.__webglFramebuffer[pt],T,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);f(x)&&m(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let pt=0,vt=Z.length;pt<vt;pt++){const Rt=Z[pt],st=n.get(Rt);e.bindTexture(r.TEXTURE_2D,st.__webglTexture),lt(r.TEXTURE_2D,Rt),it(B.__webglFramebuffer,T,Rt,r.COLOR_ATTACHMENT0+pt,r.TEXTURE_2D,0),f(Rt)&&m(r.TEXTURE_2D)}e.unbindTexture()}else{let pt=r.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(pt=T.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(pt,$.__webglTexture),lt(pt,x),x.mipmaps&&x.mipmaps.length>0)for(let vt=0;vt<x.mipmaps.length;vt++)it(B.__webglFramebuffer[vt],T,x,r.COLOR_ATTACHMENT0,pt,vt);else it(B.__webglFramebuffer,T,x,r.COLOR_ATTACHMENT0,pt,0);f(x)&&m(pt),e.unbindTexture()}T.depthBuffer&&bt(T)}function Ct(T){const x=T.textures;for(let B=0,$=x.length;B<$;B++){const Z=x[B];if(f(Z)){const et=T.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Tt=n.get(Z).__webglTexture;e.bindTexture(et,Tt),m(et),e.unbindTexture()}}}const U=[],Ht=[];function Gt(T){if(T.samples>0){if(mt(T)===!1){const x=T.textures,B=T.width,$=T.height;let Z=r.COLOR_BUFFER_BIT;const et=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Tt=n.get(T),pt=x.length>1;if(pt)for(let vt=0;vt<x.length;vt++)e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let vt=0;vt<x.length;vt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=r.STENCIL_BUFFER_BIT)),pt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Tt.__webglColorRenderbuffer[vt]);const Rt=n.get(x[vt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Rt,0)}r.blitFramebuffer(0,0,B,$,0,0,B,$,Z,r.NEAREST),l===!0&&(U.length=0,Ht.length=0,U.push(r.COLOR_ATTACHMENT0+vt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(U.push(et),Ht.push(et),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ht)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,U))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),pt)for(let vt=0;vt<x.length;vt++){e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.RENDERBUFFER,Tt.__webglColorRenderbuffer[vt]);const Rt=n.get(x[vt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.TEXTURE_2D,Rt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[x])}}}function Dt(T){return Math.min(i.maxSamples,T.samples)}function mt(T){const x=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function jt(T){const x=o.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function Ut(T,x){const B=T.colorSpace,$=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==Xn&&B!==on&&(Qt.getTransfer(B)===re?($!==ln||Z!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}function R(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=P,this.setTexture2D=z,this.setTexture2DArray=k,this.setTexture3D=O,this.setTextureCube=j,this.rebindTextures=Lt,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=it,this.useMultisampledRTT=mt}function xg(r,t){function e(n,i=on){let s;const o=Qt.getTransfer(i);if(n===Dn)return r.UNSIGNED_BYTE;if(n===ma)return r.UNSIGNED_SHORT_4_4_4_4;if(n===ga)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Dc)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Lc)return r.BYTE;if(n===Ic)return r.SHORT;if(n===Rs)return r.UNSIGNED_SHORT;if(n===pa)return r.INT;if(n===ai)return r.UNSIGNED_INT;if(n===an)return r.FLOAT;if(n===Xe)return r.HALF_FLOAT;if(n===Nc)return r.ALPHA;if(n===Uc)return r.RGB;if(n===ln)return r.RGBA;if(n===Fc)return r.LUMINANCE;if(n===Oc)return r.LUMINANCE_ALPHA;if(n===Yi)return r.DEPTH_COMPONENT;if(n===ci)return r.DEPTH_STENCIL;if(n===Ur)return r.RED;if(n===va)return r.RED_INTEGER;if(n===Bc)return r.RG;if(n===_a)return r.RG_INTEGER;if(n===xa)return r.RGBA_INTEGER;if(n===Sr||n===Er||n===br||n===wr)if(o===re)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Sr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Er)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===br)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Sr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Er)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===br)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Uo||n===Fo||n===Oo||n===Bo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Uo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zo||n===ko||n===Ho)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===zo||n===ko)return o===re?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ho)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Vo||n===Go||n===Wo||n===qo||n===Xo||n===Yo||n===$o||n===jo||n===Ko||n===Zo||n===Jo||n===Qo||n===ta||n===ea)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Vo)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Go)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wo)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qo)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xo)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yo)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$o)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jo)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ko)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zo)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Jo)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qo)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ta)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ea)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Tr||n===na||n===ia)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Tr)return o===re?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===na)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ia)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zc||n===sa||n===ra||n===oa)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Tr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===sa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ra)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===oa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===li?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class Mg extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Gi extends ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yg={type:"move"};class vo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const f=e.getJointPose(v,n),m=this._getHandJoint(c,v);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Gi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Sg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Eg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class bg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ce,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new he({vertexShader:Sg,fragmentShader:Eg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ve(new Qi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wg extends ns{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null;const v=new bg,f=e.getContextAttributes();let m=null,_=null;const M=[],E=[],L=new Bt;let A=null;const C=new qe;C.layers.enable(1),C.viewport=new ce;const N=new qe;N.layers.enable(2),N.viewport=new ce;const w=[C,N],S=new Mg;S.layers.enable(1),S.layers.enable(2);let P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let it=M[K];return it===void 0&&(it=new vo,M[K]=it),it.getTargetRaySpace()},this.getControllerGrip=function(K){let it=M[K];return it===void 0&&(it=new vo,M[K]=it),it.getGripSpace()},this.getHand=function(K){let it=M[K];return it===void 0&&(it=new vo,M[K]=it),it.getHandSpace()};function I(K){const it=E.indexOf(K.inputSource);if(it===-1)return;const ht=M[it];ht!==void 0&&(ht.update(K.inputSource,K.frame,c||o),ht.dispatchEvent({type:K.type,data:K.inputSource}))}function z(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",k);for(let K=0;K<M.length;K++){const it=E[K];it!==null&&(E[K]=null,M[K].disconnect(it))}P=null,H=null,v.reset(),t.setRenderTarget(m),p=null,u=null,d=null,i=null,_=null,At.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",z),i.addEventListener("inputsourceschange",k),f.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(L),i.renderState.layers===void 0){const it={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,e,it),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Fe(p.framebufferWidth,p.framebufferHeight,{format:ln,type:Dn,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let it=null,ht=null,gt=null;f.depth&&(gt=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=f.stencil?ci:Yi,ht=f.stencil?li:ai);const bt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:s};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(bt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new Fe(u.textureWidth,u.textureHeight,{format:ln,type:Dn,depthTexture:new Ca(u.textureWidth,u.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),At.setContext(i),At.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function k(K){for(let it=0;it<K.removed.length;it++){const ht=K.removed[it],gt=E.indexOf(ht);gt>=0&&(E[gt]=null,M[gt].disconnect(ht))}for(let it=0;it<K.added.length;it++){const ht=K.added[it];let gt=E.indexOf(ht);if(gt===-1){for(let Lt=0;Lt<M.length;Lt++)if(Lt>=E.length){E.push(ht),gt=Lt;break}else if(E[Lt]===null){E[Lt]=ht,gt=Lt;break}if(gt===-1)break}const bt=M[gt];bt&&bt.connect(ht)}}const O=new X,j=new X;function G(K,it,ht){O.setFromMatrixPosition(it.matrixWorld),j.setFromMatrixPosition(ht.matrixWorld);const gt=O.distanceTo(j),bt=it.projectionMatrix.elements,Lt=ht.projectionMatrix.elements,yt=bt[14]/(bt[10]-1),Ct=bt[14]/(bt[10]+1),U=(bt[9]+1)/bt[5],Ht=(bt[9]-1)/bt[5],Gt=(bt[8]-1)/bt[0],Dt=(Lt[8]+1)/Lt[0],mt=yt*Gt,jt=yt*Dt,Ut=gt/(-Gt+Dt),R=Ut*-Gt;if(it.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(R),K.translateZ(Ut),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),bt[10]===-1)K.projectionMatrix.copy(it.projectionMatrix),K.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const T=yt+Ut,x=Ct+Ut,B=mt-R,$=jt+(gt-R),Z=U*Ct/x*T,et=Ht*Ct/x*T;K.projectionMatrix.makePerspective(B,$,Z,et,T,x),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Y(K,it){it===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(it.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let it=K.near,ht=K.far;v.texture!==null&&(v.depthNear>0&&(it=v.depthNear),v.depthFar>0&&(ht=v.depthFar)),S.near=N.near=C.near=it,S.far=N.far=C.far=ht,(P!==S.near||H!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,H=S.far);const gt=K.parent,bt=S.cameras;Y(S,gt);for(let Lt=0;Lt<bt.length;Lt++)Y(bt[Lt],gt);bt.length===2?G(S,C,N):S.projectionMatrix.copy(C.projectionMatrix),ot(K,S,gt)};function ot(K,it,ht){ht===null?K.matrix.copy(it.matrixWorld):(K.matrix.copy(ht.matrixWorld),K.matrix.invert(),K.matrix.multiply(it.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(it.projectionMatrix),K.projectionMatrixInverse.copy(it.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ps*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let lt=null;function nt(K,it){if(h=it.getViewerPose(c||o),g=it,h!==null){const ht=h.views;p!==null&&(t.setRenderTargetFramebuffer(_,p.framebuffer),t.setRenderTarget(_));let gt=!1;ht.length!==S.cameras.length&&(S.cameras.length=0,gt=!0);for(let Lt=0;Lt<ht.length;Lt++){const yt=ht[Lt];let Ct=null;if(p!==null)Ct=p.getViewport(yt);else{const Ht=d.getViewSubImage(u,yt);Ct=Ht.viewport,Lt===0&&(t.setRenderTargetTextures(_,Ht.colorTexture,u.ignoreDepthValues?void 0:Ht.depthStencilTexture),t.setRenderTarget(_))}let U=w[Lt];U===void 0&&(U=new qe,U.layers.enable(Lt),U.viewport=new ce,w[Lt]=U),U.matrix.fromArray(yt.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(yt.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),Lt===0&&(S.matrix.copy(U.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),gt===!0&&S.cameras.push(U)}const bt=i.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const Lt=d.getDepthInformation(ht[0]);Lt&&Lt.isValid&&Lt.texture&&v.init(t,Lt,i.renderState)}}for(let ht=0;ht<M.length;ht++){const gt=E[ht],bt=M[ht];gt!==null&&bt!==void 0&&bt.update(gt,it,c||o)}lt&&lt(K,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}const At=new Jc;At.setAnimationLoop(nt),this.setAnimationLoop=function(K){lt=K},this.dispose=function(){}}}const Jn=new _n,Tg=new ne;function Ag(r,t){function e(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function n(f,m){m.color.getRGB(f.fogColor.value,Yc(r)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function i(f,m,_,M,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(f,m):m.isMeshToonMaterial?(s(f,m),d(f,m)):m.isMeshPhongMaterial?(s(f,m),h(f,m)):m.isMeshStandardMaterial?(s(f,m),u(f,m),m.isMeshPhysicalMaterial&&p(f,m,E)):m.isMeshMatcapMaterial?(s(f,m),g(f,m)):m.isMeshDepthMaterial?s(f,m):m.isMeshDistanceMaterial?(s(f,m),v(f,m)):m.isMeshNormalMaterial?s(f,m):m.isLineBasicMaterial?(o(f,m),m.isLineDashedMaterial&&a(f,m)):m.isPointsMaterial?l(f,m,_,M):m.isSpriteMaterial?c(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,e(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===De&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,e(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===De&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,e(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,e(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);const _=t.get(m),M=_.envMap,E=_.envMapRotation;M&&(f.envMap.value=M,Jn.copy(E),Jn.x*=-1,Jn.y*=-1,Jn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Jn.y*=-1,Jn.z*=-1),f.envMapRotation.value.setFromMatrix4(Tg.makeRotationFromEuler(Jn)),f.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap&&(f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,f.lightMapTransform)),m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,f.aoMapTransform))}function o(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform))}function a(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function l(f,m,_,M){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*_,f.scale.value=M*.5,m.map&&(f.map.value=m.map,e(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function c(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function h(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function d(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function u(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,f.roughnessMapTransform)),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function p(f,m,_){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===De&&f.clearcoatNormalScale.value.negate())),m.dispersion>0&&(f.dispersion.value=m.dispersion),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=_.texture,f.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,m){m.matcap&&(f.matcap.value=m.matcap)}function v(f,m){const _=t.get(m).light;f.referencePosition.value.setFromMatrixPosition(_.matrixWorld),f.nearDistance.value=_.shadow.camera.near,f.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Cg(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,M){const E=M.program;n.uniformBlockBinding(_,E)}function c(_,M){let E=i[_.id];E===void 0&&(g(_),E=h(_),i[_.id]=E,_.addEventListener("dispose",f));const L=M.program;n.updateUBOMapping(_,L);const A=t.render.frame;s[_.id]!==A&&(u(_),s[_.id]=A)}function h(_){const M=d();_.__bindingPointIndex=M;const E=r.createBuffer(),L=_.__size,A=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,L,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,E),E}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const M=i[_.id],E=_.uniforms,L=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let A=0,C=E.length;A<C;A++){const N=Array.isArray(E[A])?E[A]:[E[A]];for(let w=0,S=N.length;w<S;w++){const P=N[w];if(p(P,A,w,L)===!0){const H=P.__offset,I=Array.isArray(P.value)?P.value:[P.value];let z=0;for(let k=0;k<I.length;k++){const O=I[k],j=v(O);typeof O=="number"||typeof O=="boolean"?(P.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,H+z,P.__data)):O.isMatrix3?(P.__data[0]=O.elements[0],P.__data[1]=O.elements[1],P.__data[2]=O.elements[2],P.__data[3]=0,P.__data[4]=O.elements[3],P.__data[5]=O.elements[4],P.__data[6]=O.elements[5],P.__data[7]=0,P.__data[8]=O.elements[6],P.__data[9]=O.elements[7],P.__data[10]=O.elements[8],P.__data[11]=0):(O.toArray(P.__data,z),z+=j.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,H,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(_,M,E,L){const A=_.value,C=M+"_"+E;if(L[C]===void 0)return typeof A=="number"||typeof A=="boolean"?L[C]=A:L[C]=A.clone(),!0;{const N=L[C];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return L[C]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function g(_){const M=_.uniforms;let E=0;const L=16;for(let C=0,N=M.length;C<N;C++){const w=Array.isArray(M[C])?M[C]:[M[C]];for(let S=0,P=w.length;S<P;S++){const H=w[S],I=Array.isArray(H.value)?H.value:[H.value];for(let z=0,k=I.length;z<k;z++){const O=I[z],j=v(O),G=E%L,Y=G%j.boundary,ot=G+Y;E+=Y,ot!==0&&L-ot<j.storage&&(E+=L-ot),H.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=E,E+=j.storage}}}const A=E%L;return A>0&&(E+=L-A),_.__size=E,_.__cache={},this}function v(_){const M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),M}function f(_){const M=_.target;M.removeEventListener("dispose",f);const E=o.indexOf(M.__bindingPointIndex);o.splice(E,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function m(){for(const _ in i)r.deleteBuffer(i[_]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class Rg{constructor(t={}){const{canvas:e=yu(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,f=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=We,this.toneMapping=Wn,this.toneMappingExposure=1;const M=this;let E=!1,L=0,A=0,C=null,N=-1,w=null;const S=new ce,P=new ce;let H=null;const I=new Ot(0);let z=0,k=e.width,O=e.height,j=1,G=null,Y=null;const ot=new ce(0,0,k,O),lt=new ce(0,0,k,O);let nt=!1;const At=new wa;let K=!1,it=!1;const ht=new ne,gt=new X,bt=new ce,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function Ct(){return C===null?j:1}let U=n;function Ht(y,D){return e.getContext(y,D)}try{const y={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${da}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",tt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),U===null){const D="webgl2";if(U=Ht(D,y),U===null)throw Ht(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Gt,Dt,mt,jt,Ut,R,T,x,B,$,Z,et,Tt,pt,vt,Rt,st,ut,Wt,Pt,Mt,kt,Vt,Kt;function V(){Gt=new Up(U),Gt.init(),kt=new xg(U,Gt),Dt=new Rp(U,Gt,t,kt),mt=new gg(U),jt=new Bp(U),Ut=new ng,R=new _g(U,Gt,mt,Ut,Dt,kt,jt),T=new Lp(M),x=new Np(M),B=new Wu(U),Vt=new Ap(U,B),$=new Fp(U,B,jt,Vt),Z=new kp(U,$,B,jt),Wt=new zp(U,Dt,R),Rt=new Pp(Ut),et=new eg(M,T,x,Gt,Dt,Vt,Rt),Tt=new Ag(M,Ut),pt=new sg,vt=new hg(Gt),ut=new Tp(M,T,x,mt,Z,u,l),st=new mg(M,Z,Dt),Kt=new Cg(U,jt,Dt,mt),Pt=new Cp(U,Gt,jt),Mt=new Op(U,Gt,jt),jt.programs=et.programs,M.capabilities=Dt,M.extensions=Gt,M.properties=Ut,M.renderLists=pt,M.shadowMap=st,M.state=mt,M.info=jt}V();const at=new wg(M,U);this.xr=at,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const y=Gt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Gt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(y){y!==void 0&&(j=y,this.setSize(k,O,!1))},this.getSize=function(y){return y.set(k,O)},this.setSize=function(y,D,q=!0){if(at.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=y,O=D,e.width=Math.floor(y*j),e.height=Math.floor(D*j),q===!0&&(e.style.width=y+"px",e.style.height=D+"px"),this.setViewport(0,0,y,D)},this.getDrawingBufferSize=function(y){return y.set(k*j,O*j).floor()},this.setDrawingBufferSize=function(y,D,q){k=y,O=D,j=q,e.width=Math.floor(y*q),e.height=Math.floor(D*q),this.setViewport(0,0,y,D)},this.getCurrentViewport=function(y){return y.copy(S)},this.getViewport=function(y){return y.copy(ot)},this.setViewport=function(y,D,q,W){y.isVector4?ot.set(y.x,y.y,y.z,y.w):ot.set(y,D,q,W),mt.viewport(S.copy(ot).multiplyScalar(j).round())},this.getScissor=function(y){return y.copy(lt)},this.setScissor=function(y,D,q,W){y.isVector4?lt.set(y.x,y.y,y.z,y.w):lt.set(y,D,q,W),mt.scissor(P.copy(lt).multiplyScalar(j).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(y){mt.setScissorTest(nt=y)},this.setOpaqueSort=function(y){G=y},this.setTransparentSort=function(y){Y=y},this.getClearColor=function(y){return y.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor.apply(ut,arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha.apply(ut,arguments)},this.clear=function(y=!0,D=!0,q=!0){let W=0;if(y){let F=!1;if(C!==null){const rt=C.texture.format;F=rt===xa||rt===_a||rt===va}if(F){const rt=C.texture.type,ft=rt===Dn||rt===ai||rt===Rs||rt===li||rt===ma||rt===ga,ct=ut.getClearColor(),xt=ut.getClearAlpha(),It=ct.r,Ft=ct.g,wt=ct.b;ft?(p[0]=It,p[1]=Ft,p[2]=wt,p[3]=xt,U.clearBufferuiv(U.COLOR,0,p)):(g[0]=It,g[1]=Ft,g[2]=wt,g[3]=xt,U.clearBufferiv(U.COLOR,0,g))}else W|=U.COLOR_BUFFER_BIT}D&&(W|=U.DEPTH_BUFFER_BIT),q&&(W|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",tt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),pt.dispose(),vt.dispose(),Ut.dispose(),T.dispose(),x.dispose(),Z.dispose(),Vt.dispose(),Kt.dispose(),et.dispose(),at.dispose(),at.removeEventListener("sessionstart",Oe),at.removeEventListener("sessionend",fi),xn.stop()};function J(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function tt(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const y=jt.autoReset,D=st.enabled,q=st.autoUpdate,W=st.needsUpdate,F=st.type;V(),jt.autoReset=y,st.enabled=D,st.autoUpdate=q,st.needsUpdate=W,st.type=F}function dt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function zt(y){const D=y.target;D.removeEventListener("dispose",zt),Yt(D)}function Yt(y){le(y),Ut.remove(y)}function le(y){const D=Ut.get(y).programs;D!==void 0&&(D.forEach(function(q){et.releaseProgram(q)}),y.isShaderMaterial&&et.releaseShaderCache(y))}this.renderBufferDirect=function(y,D,q,W,F,rt){D===null&&(D=Lt);const ft=F.isMesh&&F.matrixWorld.determinant()<0,ct=cs(y,D,q,W,F);mt.setMaterial(W,ft);let xt=q.index,It=1;if(W.wireframe===!0){if(xt=$.getWireframeAttribute(q),xt===void 0)return;It=2}const Ft=q.drawRange,wt=q.attributes.position;let $t=Ft.start*It,ie=(Ft.start+Ft.count)*It;rt!==null&&($t=Math.max($t,rt.start*It),ie=Math.min(ie,(rt.start+rt.count)*It)),xt!==null?($t=Math.max($t,0),ie=Math.min(ie,xt.count)):wt!=null&&($t=Math.max($t,0),ie=Math.min(ie,wt.count));const se=ie-$t;if(se<0||se===1/0)return;Vt.setup(F,W,ct,q,xt);let Be,te=Pt;if(xt!==null&&(Be=B.get(xt),te=Mt,te.setIndex(Be)),F.isMesh)W.wireframe===!0?(mt.setLineWidth(W.wireframeLinewidth*Ct()),te.setMode(U.LINES)):te.setMode(U.TRIANGLES);else if(F.isLine){let Nt=W.linewidth;Nt===void 0&&(Nt=1),mt.setLineWidth(Nt*Ct()),F.isLineSegments?te.setMode(U.LINES):F.isLineLoop?te.setMode(U.LINE_LOOP):te.setMode(U.LINE_STRIP)}else F.isPoints?te.setMode(U.POINTS):F.isSprite&&te.setMode(U.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)te.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))te.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Nt=F._multiDrawStarts,Se=F._multiDrawCounts,ee=F._multiDrawCount,Je=xt?B.get(xt).bytesPerElement:1,_i=Ut.get(W).currentProgram.getUniforms();for(let ze=0;ze<ee;ze++)_i.setValue(U,"_gl_DrawID",ze),te.render(Nt[ze]/Je,Se[ze])}else if(F.isInstancedMesh)te.renderInstances($t,se,F.count);else if(q.isInstancedBufferGeometry){const Nt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Se=Math.min(q.instanceCount,Nt);te.renderInstances($t,se,Se)}else te.render($t,se)};function me(y,D,q){y.transparent===!0&&y.side===sn&&y.forceSinglePass===!1?(y.side=De,y.needsUpdate=!0,vi(y,D,q),y.side=qn,y.needsUpdate=!0,vi(y,D,q),y.side=sn):vi(y,D,q)}this.compile=function(y,D,q=null){q===null&&(q=y),f=vt.get(q),f.init(D),_.push(f),q.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),y!==q&&y.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights();const W=new Set;return y.traverse(function(F){const rt=F.material;if(rt)if(Array.isArray(rt))for(let ft=0;ft<rt.length;ft++){const ct=rt[ft];me(ct,q,F),W.add(ct)}else me(rt,q,F),W.add(rt)}),_.pop(),f=null,W},this.compileAsync=function(y,D,q=null){const W=this.compile(y,D,q);return new Promise(F=>{function rt(){if(W.forEach(function(ft){Ut.get(ft).currentProgram.isReady()&&W.delete(ft)}),W.size===0){F(y);return}setTimeout(rt,10)}Gt.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let Zt=null;function Me(y){Zt&&Zt(y)}function Oe(){xn.stop()}function fi(){xn.start()}const xn=new Jc;xn.setAnimationLoop(Me),typeof self<"u"&&xn.setContext(self),this.setAnimationLoop=function(y){Zt=y,at.setAnimationLoop(y),y===null?xn.stop():xn.start()},at.addEventListener("sessionstart",Oe),at.addEventListener("sessionend",fi),this.render=function(y,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera(D),D=at.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,D,C),f=vt.get(y,_.length),f.init(D),_.push(f),ht.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),At.setFromProjectionMatrix(ht),it=this.localClippingEnabled,K=Rt.init(this.clippingPlanes,it),v=pt.get(y,m.length),v.init(),m.push(v),at.enabled===!0&&at.isPresenting===!0){const rt=M.xr.getDepthSensingMesh();rt!==null&&pi(rt,D,-1/0,M.sortObjects)}pi(y,D,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(G,Y),yt=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,yt&&ut.addToRenderList(v,y),this.info.render.frame++,K===!0&&Rt.beginShadows();const q=f.state.shadowsArray;st.render(q,y,D),K===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=v.opaque,F=v.transmissive;if(f.setupLights(),D.isArrayCamera){const rt=D.cameras;if(F.length>0)for(let ft=0,ct=rt.length;ft<ct;ft++){const xt=rt[ft];zs(W,F,y,xt)}yt&&ut.render(y);for(let ft=0,ct=rt.length;ft<ct;ft++){const xt=rt[ft];os(v,y,xt,xt.viewport)}}else F.length>0&&zs(W,F,y,D),yt&&ut.render(y),os(v,y,D);C!==null&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),y.isScene===!0&&y.onAfterRender(M,y,D),Vt.resetDefaultState(),N=-1,w=null,_.pop(),_.length>0?(f=_[_.length-1],K===!0&&Rt.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function pi(y,D,q,W){if(y.visible===!1)return;if(y.layers.test(D.layers)){if(y.isGroup)q=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(D);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||At.intersectsSprite(y)){W&&bt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ht);const ft=Z.update(y),ct=y.material;ct.visible&&v.push(y,ft,ct,q,bt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||At.intersectsObject(y))){const ft=Z.update(y),ct=y.material;if(W&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),bt.copy(y.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),bt.copy(ft.boundingSphere.center)),bt.applyMatrix4(y.matrixWorld).applyMatrix4(ht)),Array.isArray(ct)){const xt=ft.groups;for(let It=0,Ft=xt.length;It<Ft;It++){const wt=xt[It],$t=ct[wt.materialIndex];$t&&$t.visible&&v.push(y,ft,$t,q,bt.z,wt)}}else ct.visible&&v.push(y,ft,ct,q,bt.z,null)}}const rt=y.children;for(let ft=0,ct=rt.length;ft<ct;ft++)pi(rt[ft],D,q,W)}function os(y,D,q,W){const F=y.opaque,rt=y.transmissive,ft=y.transparent;f.setupLightsView(q),K===!0&&Rt.setGlobalState(M.clippingPlanes,q),W&&mt.viewport(S.copy(W)),F.length>0&&mi(F,D,q),rt.length>0&&mi(rt,D,q),ft.length>0&&mi(ft,D,q),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function zs(y,D,q,W){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new Fe(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?Xe:Dn,minFilter:ri,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const rt=f.state.transmissionRenderTarget[W.id],ft=W.viewport||S;rt.setSize(ft.z,ft.w);const ct=M.getRenderTarget();M.setRenderTarget(rt),M.getClearColor(I),z=M.getClearAlpha(),z<1&&M.setClearColor(16777215,.5),M.clear(),yt&&ut.render(q);const xt=M.toneMapping;M.toneMapping=Wn;const It=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),K===!0&&Rt.setGlobalState(M.clippingPlanes,W),mi(y,q,W),R.updateMultisampleRenderTarget(rt),R.updateRenderTargetMipmap(rt),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let wt=0,$t=D.length;wt<$t;wt++){const ie=D[wt],se=ie.object,Be=ie.geometry,te=ie.material,Nt=ie.group;if(te.side===sn&&se.layers.test(W.layers)){const Se=te.side;te.side=De,te.needsUpdate=!0,gi(se,q,W,Be,te,Nt),te.side=Se,te.needsUpdate=!0,Ft=!0}}Ft===!0&&(R.updateMultisampleRenderTarget(rt),R.updateRenderTargetMipmap(rt))}M.setRenderTarget(ct),M.setClearColor(I,z),It!==void 0&&(W.viewport=It),M.toneMapping=xt}function mi(y,D,q){const W=D.isScene===!0?D.overrideMaterial:null;for(let F=0,rt=y.length;F<rt;F++){const ft=y[F],ct=ft.object,xt=ft.geometry,It=W===null?ft.material:W,Ft=ft.group;ct.layers.test(q.layers)&&gi(ct,D,q,xt,It,Ft)}}function gi(y,D,q,W,F,rt){y.onBeforeRender(M,D,q,W,F,rt),y.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),F.onBeforeRender(M,D,q,W,y,rt),F.transparent===!0&&F.side===sn&&F.forceSinglePass===!1?(F.side=De,F.needsUpdate=!0,M.renderBufferDirect(q,D,W,F,y,rt),F.side=qn,F.needsUpdate=!0,M.renderBufferDirect(q,D,W,F,y,rt),F.side=sn):M.renderBufferDirect(q,D,W,F,y,rt),y.onAfterRender(M,D,q,W,F,rt)}function vi(y,D,q){D.isScene!==!0&&(D=Lt);const W=Ut.get(y),F=f.state.lights,rt=f.state.shadowsArray,ft=F.state.version,ct=et.getParameters(y,F.state,rt,D,q),xt=et.getProgramCacheKey(ct);let It=W.programs;W.environment=y.isMeshStandardMaterial?D.environment:null,W.fog=D.fog,W.envMap=(y.isMeshStandardMaterial?x:T).get(y.envMap||W.environment),W.envMapRotation=W.environment!==null&&y.envMap===null?D.environmentRotation:y.envMapRotation,It===void 0&&(y.addEventListener("dispose",zt),It=new Map,W.programs=It);let Ft=It.get(xt);if(Ft!==void 0){if(W.currentProgram===Ft&&W.lightsStateVersion===ft)return ls(y,ct),Ft}else ct.uniforms=et.getUniforms(y),y.onBeforeCompile(ct,M),Ft=et.acquireProgram(ct,xt),It.set(xt,Ft),W.uniforms=ct.uniforms;const wt=W.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(wt.clippingPlanes=Rt.uniform),ls(y,ct),W.needsLights=Q(y),W.lightsStateVersion=ft,W.needsLights&&(wt.ambientLightColor.value=F.state.ambient,wt.lightProbe.value=F.state.probe,wt.directionalLights.value=F.state.directional,wt.directionalLightShadows.value=F.state.directionalShadow,wt.spotLights.value=F.state.spot,wt.spotLightShadows.value=F.state.spotShadow,wt.rectAreaLights.value=F.state.rectArea,wt.ltc_1.value=F.state.rectAreaLTC1,wt.ltc_2.value=F.state.rectAreaLTC2,wt.pointLights.value=F.state.point,wt.pointLightShadows.value=F.state.pointShadow,wt.hemisphereLights.value=F.state.hemi,wt.directionalShadowMap.value=F.state.directionalShadowMap,wt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,wt.spotShadowMap.value=F.state.spotShadowMap,wt.spotLightMatrix.value=F.state.spotLightMatrix,wt.spotLightMap.value=F.state.spotLightMap,wt.pointShadowMap.value=F.state.pointShadowMap,wt.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=Ft,W.uniformsList=null,Ft}function as(y){if(y.uniformsList===null){const D=y.currentProgram.getUniforms();y.uniformsList=Ar.seqWithValue(D.seq,y.uniforms)}return y.uniformsList}function ls(y,D){const q=Ut.get(y);q.outputColorSpace=D.outputColorSpace,q.batching=D.batching,q.batchingColor=D.batchingColor,q.instancing=D.instancing,q.instancingColor=D.instancingColor,q.instancingMorph=D.instancingMorph,q.skinning=D.skinning,q.morphTargets=D.morphTargets,q.morphNormals=D.morphNormals,q.morphColors=D.morphColors,q.morphTargetsCount=D.morphTargetsCount,q.numClippingPlanes=D.numClippingPlanes,q.numIntersection=D.numClipIntersection,q.vertexAlphas=D.vertexAlphas,q.vertexTangents=D.vertexTangents,q.toneMapping=D.toneMapping}function cs(y,D,q,W,F){D.isScene!==!0&&(D=Lt),R.resetTextureUnits();const rt=D.fog,ft=W.isMeshStandardMaterial?D.environment:null,ct=C===null?M.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Xn,xt=(W.isMeshStandardMaterial?x:T).get(W.envMap||ft),It=W.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ft=!!q.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),wt=!!q.morphAttributes.position,$t=!!q.morphAttributes.normal,ie=!!q.morphAttributes.color;let se=Wn;W.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(se=M.toneMapping);const Be=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,te=Be!==void 0?Be.length:0,Nt=Ut.get(W),Se=f.state.lights;if(K===!0&&(it===!0||y!==w)){const $e=y===w&&W.id===N;Rt.setState(W,y,$e)}let ee=!1;W.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Se.state.version||Nt.outputColorSpace!==ct||F.isBatchedMesh&&Nt.batching===!1||!F.isBatchedMesh&&Nt.batching===!0||F.isBatchedMesh&&Nt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Nt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Nt.instancing===!1||!F.isInstancedMesh&&Nt.instancing===!0||F.isSkinnedMesh&&Nt.skinning===!1||!F.isSkinnedMesh&&Nt.skinning===!0||F.isInstancedMesh&&Nt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Nt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Nt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Nt.instancingMorph===!1&&F.morphTexture!==null||Nt.envMap!==xt||W.fog===!0&&Nt.fog!==rt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==Rt.numPlanes||Nt.numIntersection!==Rt.numIntersection)||Nt.vertexAlphas!==It||Nt.vertexTangents!==Ft||Nt.morphTargets!==wt||Nt.morphNormals!==$t||Nt.morphColors!==ie||Nt.toneMapping!==se||Nt.morphTargetsCount!==te)&&(ee=!0):(ee=!0,Nt.__version=W.version);let Je=Nt.currentProgram;ee===!0&&(Je=vi(W,D,F));let _i=!1,ze=!1,Hr=!1;const ue=Je.getUniforms(),Nn=Nt.uniforms;if(mt.useProgram(Je.program)&&(_i=!0,ze=!0,Hr=!0),W.id!==N&&(N=W.id,ze=!0),_i||w!==y){ue.setValue(U,"projectionMatrix",y.projectionMatrix),ue.setValue(U,"viewMatrix",y.matrixWorldInverse);const $e=ue.map.cameraPosition;$e!==void 0&&$e.setValue(U,gt.setFromMatrixPosition(y.matrixWorld)),Dt.logarithmicDepthBuffer&&ue.setValue(U,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ue.setValue(U,"isOrthographic",y.isOrthographicCamera===!0),w!==y&&(w=y,ze=!0,Hr=!0)}if(F.isSkinnedMesh){ue.setOptional(U,F,"bindMatrix"),ue.setOptional(U,F,"bindMatrixInverse");const $e=F.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),ue.setValue(U,"boneTexture",$e.boneTexture,R))}F.isBatchedMesh&&(ue.setOptional(U,F,"batchingTexture"),ue.setValue(U,"batchingTexture",F._matricesTexture,R),ue.setOptional(U,F,"batchingIdTexture"),ue.setValue(U,"batchingIdTexture",F._indirectTexture,R),ue.setOptional(U,F,"batchingColorTexture"),F._colorsTexture!==null&&ue.setValue(U,"batchingColorTexture",F._colorsTexture,R));const Vr=q.morphAttributes;if((Vr.position!==void 0||Vr.normal!==void 0||Vr.color!==void 0)&&Wt.update(F,q,Je),(ze||Nt.receiveShadow!==F.receiveShadow)&&(Nt.receiveShadow=F.receiveShadow,ue.setValue(U,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Nn.envMap.value=xt,Nn.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&D.environment!==null&&(Nn.envMapIntensity.value=D.environmentIntensity),ze&&(ue.setValue(U,"toneMappingExposure",M.toneMappingExposure),Nt.needsLights&&ks(Nn,Hr),rt&&W.fog===!0&&Tt.refreshFogUniforms(Nn,rt),Tt.refreshMaterialUniforms(Nn,W,j,O,f.state.transmissionRenderTarget[y.id]),Ar.upload(U,as(Nt),Nn,R)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ar.upload(U,as(Nt),Nn,R),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ue.setValue(U,"center",F.center),ue.setValue(U,"modelViewMatrix",F.modelViewMatrix),ue.setValue(U,"normalMatrix",F.normalMatrix),ue.setValue(U,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const $e=W.uniformsGroups;for(let Gr=0,gh=$e.length;Gr<gh;Gr++){const Fa=$e[Gr];Kt.update(Fa,Je),Kt.bind(Fa,Je)}}return Je}function ks(y,D){y.ambientLightColor.needsUpdate=D,y.lightProbe.needsUpdate=D,y.directionalLights.needsUpdate=D,y.directionalLightShadows.needsUpdate=D,y.pointLights.needsUpdate=D,y.pointLightShadows.needsUpdate=D,y.spotLights.needsUpdate=D,y.spotLightShadows.needsUpdate=D,y.rectAreaLights.needsUpdate=D,y.hemisphereLights.needsUpdate=D}function Q(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(y,D,q){Ut.get(y.texture).__webglTexture=D,Ut.get(y.depthTexture).__webglTexture=q;const W=Ut.get(y);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=q===void 0,W.__autoAllocateDepthBuffer||Gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,D){const q=Ut.get(y);q.__webglFramebuffer=D,q.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(y,D=0,q=0){C=y,L=D,A=q;let W=!0,F=null,rt=!1,ft=!1;if(y){const xt=Ut.get(y);if(xt.__useDefaultFramebuffer!==void 0)mt.bindFramebuffer(U.FRAMEBUFFER,null),W=!1;else if(xt.__webglFramebuffer===void 0)R.setupRenderTarget(y);else if(xt.__hasExternalTextures)R.rebindTextures(y,Ut.get(y.texture).__webglTexture,Ut.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const wt=y.depthTexture;if(xt.__boundDepthTexture!==wt){if(wt!==null&&Ut.has(wt)&&(y.width!==wt.image.width||y.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(y)}}const It=y.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(ft=!0);const Ft=Ut.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ft[D])?F=Ft[D][q]:F=Ft[D],rt=!0):y.samples>0&&R.useMultisampledRTT(y)===!1?F=Ut.get(y).__webglMultisampledFramebuffer:Array.isArray(Ft)?F=Ft[q]:F=Ft,S.copy(y.viewport),P.copy(y.scissor),H=y.scissorTest}else S.copy(ot).multiplyScalar(j).floor(),P.copy(lt).multiplyScalar(j).floor(),H=nt;if(mt.bindFramebuffer(U.FRAMEBUFFER,F)&&W&&mt.drawBuffers(y,F),mt.viewport(S),mt.scissor(P),mt.setScissorTest(H),rt){const xt=Ut.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,xt.__webglTexture,q)}else if(ft){const xt=Ut.get(y.texture),It=D||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,xt.__webglTexture,q||0,It)}N=-1},this.readRenderTargetPixels=function(y,D,q,W,F,rt,ft){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ct=Ut.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ft!==void 0&&(ct=ct[ft]),ct){mt.bindFramebuffer(U.FRAMEBUFFER,ct);try{const xt=y.texture,It=xt.format,Ft=xt.type;if(!Dt.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Dt.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=y.width-W&&q>=0&&q<=y.height-F&&U.readPixels(D,q,W,F,kt.convert(It),kt.convert(Ft),rt)}finally{const xt=C!==null?Ut.get(C).__webglFramebuffer:null;mt.bindFramebuffer(U.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(y,D,q,W,F,rt,ft){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ct=Ut.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ft!==void 0&&(ct=ct[ft]),ct){mt.bindFramebuffer(U.FRAMEBUFFER,ct);try{const xt=y.texture,It=xt.format,Ft=xt.type;if(!Dt.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Dt.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=y.width-W&&q>=0&&q<=y.height-F){const wt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,wt),U.bufferData(U.PIXEL_PACK_BUFFER,rt.byteLength,U.STREAM_READ),U.readPixels(D,q,W,F,kt.convert(It),kt.convert(Ft),0),U.flush();const $t=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);await Su(U,$t,4);try{U.bindBuffer(U.PIXEL_PACK_BUFFER,wt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,rt)}finally{U.deleteBuffer(wt),U.deleteSync($t)}return rt}}finally{const xt=C!==null?Ut.get(C).__webglFramebuffer:null;mt.bindFramebuffer(U.FRAMEBUFFER,xt)}}},this.copyFramebufferToTexture=function(y,D=null,q=0){y.isTexture!==!0&&(Ts("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,y=arguments[1]);const W=Math.pow(2,-q),F=Math.floor(y.image.width*W),rt=Math.floor(y.image.height*W),ft=D!==null?D.x:0,ct=D!==null?D.y:0;R.setTexture2D(y,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,ft,ct,F,rt),mt.unbindTexture()},this.copyTextureToTexture=function(y,D,q=null,W=null,F=0){y.isTexture!==!0&&(Ts("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,y=arguments[1],D=arguments[2],F=arguments[3]||0,q=null);let rt,ft,ct,xt,It,Ft;q!==null?(rt=q.max.x-q.min.x,ft=q.max.y-q.min.y,ct=q.min.x,xt=q.min.y):(rt=y.image.width,ft=y.image.height,ct=0,xt=0),W!==null?(It=W.x,Ft=W.y):(It=0,Ft=0);const wt=kt.convert(D.format),$t=kt.convert(D.type);R.setTexture2D(D,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);const ie=U.getParameter(U.UNPACK_ROW_LENGTH),se=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Be=U.getParameter(U.UNPACK_SKIP_PIXELS),te=U.getParameter(U.UNPACK_SKIP_ROWS),Nt=U.getParameter(U.UNPACK_SKIP_IMAGES),Se=y.isCompressedTexture?y.mipmaps[F]:y.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Se.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Se.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ct),U.pixelStorei(U.UNPACK_SKIP_ROWS,xt),y.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,F,It,Ft,rt,ft,wt,$t,Se.data):y.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,F,It,Ft,Se.width,Se.height,wt,Se.data):U.texSubImage2D(U.TEXTURE_2D,F,It,Ft,rt,ft,wt,$t,Se),U.pixelStorei(U.UNPACK_ROW_LENGTH,ie),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,se),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Be),U.pixelStorei(U.UNPACK_SKIP_ROWS,te),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Nt),F===0&&D.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),mt.unbindTexture()},this.copyTextureToTexture3D=function(y,D,q=null,W=null,F=0){y.isTexture!==!0&&(Ts("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,W=arguments[1]||null,y=arguments[2],D=arguments[3],F=arguments[4]||0);let rt,ft,ct,xt,It,Ft,wt,$t,ie;const se=y.isCompressedTexture?y.mipmaps[F]:y.image;q!==null?(rt=q.max.x-q.min.x,ft=q.max.y-q.min.y,ct=q.max.z-q.min.z,xt=q.min.x,It=q.min.y,Ft=q.min.z):(rt=se.width,ft=se.height,ct=se.depth,xt=0,It=0,Ft=0),W!==null?(wt=W.x,$t=W.y,ie=W.z):(wt=0,$t=0,ie=0);const Be=kt.convert(D.format),te=kt.convert(D.type);let Nt;if(D.isData3DTexture)R.setTexture3D(D,0),Nt=U.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)R.setTexture2DArray(D,0),Nt=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);const Se=U.getParameter(U.UNPACK_ROW_LENGTH),ee=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Je=U.getParameter(U.UNPACK_SKIP_PIXELS),_i=U.getParameter(U.UNPACK_SKIP_ROWS),ze=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,se.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,se.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,xt),U.pixelStorei(U.UNPACK_SKIP_ROWS,It),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ft),y.isDataTexture||y.isData3DTexture?U.texSubImage3D(Nt,F,wt,$t,ie,rt,ft,ct,Be,te,se.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(Nt,F,wt,$t,ie,rt,ft,ct,Be,se.data):U.texSubImage3D(Nt,F,wt,$t,ie,rt,ft,ct,Be,te,se),U.pixelStorei(U.UNPACK_ROW_LENGTH,Se),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ee),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Je),U.pixelStorei(U.UNPACK_SKIP_ROWS,_i),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ze),F===0&&D.generateMipmaps&&U.generateMipmap(Nt),mt.unbindTexture()},this.initRenderTarget=function(y){Ut.get(y).__webglFramebuffer===void 0&&R.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?R.setTextureCube(y,0):y.isData3DTexture?R.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?R.setTexture2DArray(y,0):R.setTexture2D(y,0),mt.unbindTexture()},this.resetState=function(){L=0,A=0,C=null,mt.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ya?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===Fr?"display-p3":"srgb"}}class Ra{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ot(t),this.near=e,this.far=n}clone(){return new Ra(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Pg extends ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ih extends Ce{constructor(t=null,e=1,n=1,i,s,o,a,l,c=Ae,h=Ae,d,u){super(null,o,a,l,c,h,i,s,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dl extends Ke{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Bi=new ne,Nl=new ne,cr=[],Ul=new hi,Lg=new ne,gs=new ve,vs=new ss;class Fl extends ve{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Dl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Lg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new hi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Bi),Ul.copy(t.boundingBox).applyMatrix4(Bi),this.boundingBox.union(Ul)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ss),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Bi),vs.copy(t.boundingSphere).applyMatrix4(Bi),this.boundingSphere.union(vs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(gs.geometry=this.geometry,gs.material=this.material,gs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vs.copy(this.boundingSphere),vs.applyMatrix4(n),t.ray.intersectsSphere(vs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Bi),Nl.multiplyMatrices(n,Bi),gs.matrixWorld=Nl,gs.raycast(t,cr);for(let o=0,a=cr.length;o<a;o++){const l=cr[o];l.instanceId=s,l.object=this,e.push(l)}cr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Dl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ih(new Float32Array(i*this.count),i,this.count,Ur,an));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class sh extends ui{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ol=new ne,la=new Ea,hr=new ss,ur=new X;class Ig extends ae{constructor(t=new Ze,e=new sh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(i),hr.radius+=s,t.ray.intersectsSphere(hr)===!1)return;Ol.copy(i).invert(),la.copy(t.ray).applyMatrix4(Ol);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=u,v=p;g<v;g++){const f=c.getX(g);ur.fromBufferAttribute(d,f),Bl(ur,f,l,i,t,e,this)}}else{const u=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=u,v=p;g<v;g++)ur.fromBufferAttribute(d,g),Bl(ur,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Bl(r,t,e,n,i,s,o){const a=la.distanceSqToPoint(r);if(a<e){const l=new X;la.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class Pa extends Ze{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],o=[],a=[],l=[],c=new X,h=new Bt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const p=n+d/e*i;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Ne(o,3)),this.setAttribute("normal",new Ne(a,3)),this.setAttribute("uv",new Ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pa(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class La extends Ze{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new X,u=new X,p=[],g=[],v=[],f=[];for(let m=0;m<=n;m++){const _=[],M=m/n;let E=0;m===0&&o===0?E=.5/e:m===n&&l===Math.PI&&(E=-.5/e);for(let L=0;L<=e;L++){const A=L/e;d.x=-t*Math.cos(i+A*s)*Math.sin(o+M*a),d.y=t*Math.cos(o+M*a),d.z=t*Math.sin(i+A*s)*Math.sin(o+M*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),f.push(A+E,1-M),_.push(c++)}h.push(_)}for(let m=0;m<n;m++)for(let _=0;_<e;_++){const M=h[m][_+1],E=h[m][_],L=h[m+1][_],A=h[m+1][_+1];(m!==0||o>0)&&p.push(M,E,A),(m!==n-1||l<Math.PI)&&p.push(E,L,A)}this.setIndex(p),this.setAttribute("position",new Ne(g,3)),this.setAttribute("normal",new Ne(v,3)),this.setAttribute("uv",new Ne(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new La(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Dg extends he{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Cr extends ui{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ma,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _o extends Cr{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Bt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Te(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ot(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ot(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ot(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Ng extends ui{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ma,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}const zl={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Ug{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const Fg=new Ug;class Ia{constructor(t){this.manager=t!==void 0?t:Fg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ia.DEFAULT_MATERIAL_NAME="__DEFAULT";class Og extends Ia{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=zl.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=Ls("img");function l(){h(),zl.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(d){h(),i&&i(d),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class Bg extends Ia{constructor(t){super(t)}load(t,e,n,i){const s=new Ce,o=new Og(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class rh extends ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class zg extends rh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const xo=new ne,kl=new X,Hl=new X;class kg{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wa,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;kl.setFromMatrixPosition(t.matrixWorld),e.position.copy(kl),Hl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Hl),e.updateMatrixWorld(),xo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Hg extends kg{constructor(){super(new Ta(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vl extends rh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ae.DEFAULT_UP),this.updateMatrix(),this.target=new ae,this.shadow=new Hg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Vg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Gl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Gl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Gl(){return(typeof performance>"u"?Date:performance).now()}const Wl=new ne;class Gg{constructor(t,e,n=0,i=1/0){this.ray=new Ea(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new ba,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Wl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wl),this}intersectObject(t,e=!0,n=[]){return ca(t,this,n,e),n.sort(ql),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)ca(t[i],this,n,e);return n.sort(ql),n}}function ql(r,t){return r.distance-t.distance}function ca(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)ca(s[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:da}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=da);class cn{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new b);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new b);const n=this.elements,i=t.x,s=t.y,o=t.z;return e.x=n[0]*i+n[1]*s+n[2]*o,e.y=n[3]*i+n[4]*s+n[5]*o,e.z=n[6]*i+n[7]*s+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new cn);const n=this.elements,i=t.elements,s=e.elements,o=n[0],a=n[1],l=n[2],c=n[3],h=n[4],d=n[5],u=n[6],p=n[7],g=n[8],v=i[0],f=i[1],m=i[2],_=i[3],M=i[4],E=i[5],L=i[6],A=i[7],C=i[8];return s[0]=o*v+a*_+l*L,s[1]=o*f+a*M+l*A,s[2]=o*m+a*E+l*C,s[3]=c*v+h*_+d*L,s[4]=c*f+h*M+d*A,s[5]=c*m+h*E+d*C,s[6]=u*v+p*_+g*L,s[7]=u*f+p*M+g*A,s[8]=u*m+p*E+g*C,e}scale(t,e){e===void 0&&(e=new cn);const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new b);const n=3,i=4,s=[];let o,a;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)s[o+i*a]=this.elements[o+3*a];s[3+4*0]=t.x,s[3+4*1]=t.y,s[3+4*2]=t.z;let l=3;const c=l;let h;const d=4;let u;do{if(o=c-l,s[o+i*o]===0){for(a=o+1;a<c;a++)if(s[o+i*a]!==0){h=d;do u=d-h,s[u+i*o]+=s[u+i*a];while(--h);break}}if(s[o+i*o]!==0)for(a=o+1;a<c;a++){const p=s[o+i*a]/s[o+i*o];h=d;do u=d-h,s[u+i*a]=u<=o?0:s[u+i*a]-s[u+i*o]*p;while(--h)}}while(--l);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new cn);const e=3,n=6,i=Wg;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3;const l=a;let c;const h=n;let d;do{if(s=l-a,i[s+n*s]===0){for(o=s+1;o<l;o++)if(i[s+n*o]!==0){c=h;do d=h-c,i[d+n*s]+=i[d+n*o];while(--c);break}}if(i[s+n*s]!==0)for(o=s+1;o<l;o++){const u=i[s+n*o]/i[s+n*s];c=h;do d=h-c,i[d+n*o]=d<=s?0:i[d+n*o]-i[d+n*s]*u;while(--c)}}while(--a);s=2;do{o=s-1;do{const u=i[s+n*o]/i[s+n*s];c=n;do d=n-c,i[d+n*o]=i[d+n*o]-i[d+n*s]*u;while(--c)}while(o--)}while(--s);s=2;do{const u=1/i[s+n*s];c=n;do d=n-c,i[d+n*s]=i[d+n*s]*u;while(--c)}while(s--);s=2;do{o=2;do{if(d=i[e+o+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,o,d)}while(o--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,o=e+e,a=n+n,l=i+i,c=e*o,h=e*a,d=e*l,u=n*a,p=n*l,g=i*l,v=s*o,f=s*a,m=s*l,_=this.elements;return _[3*0+0]=1-(u+g),_[3*0+1]=h-m,_[3*0+2]=d+f,_[3*1+0]=h+m,_[3*1+1]=1-(c+g),_[3*1+2]=p-v,_[3*2+0]=d-f,_[3*2+1]=p+v,_[3*2+2]=1-(c+u),this}transpose(t){t===void 0&&(t=new cn);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const Wg=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class b{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new b);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,l=this.z;return e.x=a*s-l*i,e.y=l*n-o*s,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new b(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new b(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new cn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new b);const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return Math.sqrt((s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return(s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new b);const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new b),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new b),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new b),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=qg,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const o=Xg;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Xl),Xl.almostEquals(t,e)}clone(){return new b(this.x,this.y,this.z)}}b.ZERO=new b(0,0,0);b.UNIT_X=new b(1,0,0);b.UNIT_Y=new b(0,1,0);b.UNIT_Z=new b(0,0,1);const qg=new b,Xg=new b,Xl=new b;class Ye{constructor(t){t===void 0&&(t={}),this.lowerBound=new b,this.upperBound=new b,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,o=this.upperBound,a=n;s.copy(t[0]),a&&a.vmult(s,s),o.copy(s);for(let l=1;l<t.length;l++){let c=t[l];a&&(a.vmult(c,Yl),c=Yl),c.x>o.x&&(o.x=c.x),c.x<s.x&&(s.x=c.x),c.y>o.y&&(o.y=c.y),c.y<s.y&&(s.y=c.y),c.z>o.z&&(o.z=c.z),c.z<s.z&&(s.z=c.z)}return e&&(e.vadd(s,s),e.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new Ye().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,o=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,l=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return o&&a&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,o,a,l){const c=this.lowerBound,h=this.upperBound;t.copy(c),e.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),i.set(c.x,h.y,h.z),s.set(h.x,c.y,h.z),o.set(c.x,h.y,c.z),a.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(t,e){const n=$l,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,a,l,c,h,d);for(let u=0;u!==8;u++){const p=n[u];t.pointToLocal(p,p)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=$l,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,a,l,c,h,d);for(let u=0;u!==8;u++){const p=n[u];t.pointToWorld(p,p)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,p=Math.max(Math.max(Math.min(a,l),Math.min(c,h)),Math.min(d,u)),g=Math.min(Math.min(Math.max(a,l),Math.max(c,h)),Math.max(d,u));return!(g<0||p>g)}}const Yl=new b,$l=[new b,new b,new b,new b,new b,new b,new b,new b];class jl{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){const o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class oh{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class pe{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new b),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=Yg,i=$g;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new pe);const n=this.x,i=this.y,s=this.z,o=this.w,a=t.x,l=t.y,c=t.z,h=t.w;return e.x=n*h+o*a+i*c-s*l,e.y=i*h+o*l+s*a-n*c,e.z=s*h+o*c+n*l-i*a,e.w=o*h-n*a-i*l-s*c,e}inverse(t){t===void 0&&(t=new pe);const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const o=1/(e*e+n*n+i*i+s*s);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new pe),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new b);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,l=this.z,c=this.w,h=c*n+a*s-l*i,d=c*i+l*n-o*s,u=c*s+o*i-a*n,p=-o*n-a*i-l*s;return e.x=h*c+p*-o+d*-l-u*-a,e.y=d*c+p*-a+u*-o-h*-l,e.z=u*c+p*-l+h*-a-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s;const o=this.x,a=this.y,l=this.z,c=this.w;switch(e){case"YZX":const h=o*a+l*c;if(h>.499&&(n=2*Math.atan2(o,c),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(o,c),i=-Math.PI/2,s=0),n===void 0){const d=o*o,u=a*a,p=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*u-2*p),i=Math.asin(2*h),s=Math.atan2(2*o*c-2*a*l,1-2*d-2*p)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const s=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=l*o*a+s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a-l*c*h):i==="YXZ"?(this.x=l*o*a+s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a+l*c*h):i==="ZXY"?(this.x=l*o*a-s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a-l*c*h):i==="ZYX"?(this.x=l*o*a-s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a+l*c*h):i==="YZX"?(this.x=l*o*a+s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a-l*c*h):i==="XZY"&&(this.x=l*o*a-s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a+l*c*h),this}clone(){return new pe(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new pe);const i=this.x,s=this.y,o=this.z,a=this.w;let l=t.x,c=t.y,h=t.z,d=t.w,u,p,g,v,f;return p=i*l+s*c+o*h+a*d,p<0&&(p=-p,l=-l,c=-c,h=-h,d=-d),1-p>1e-6?(u=Math.acos(p),g=Math.sin(u),v=Math.sin((1-e)*u)/g,f=Math.sin(e*u)/g):(v=1-e,f=e),n.x=v*i+f*l,n.y=v*s+f*c,n.z=v*o+f*h,n.w=v*a+f*d,n}integrate(t,e,n,i){i===void 0&&(i=new pe);const s=t.x*n.x,o=t.y*n.y,a=t.z*n.z,l=this.x,c=this.y,h=this.z,d=this.w,u=e*.5;return i.x+=u*(s*d+o*h-a*c),i.y+=u*(o*d+a*l-s*h),i.z+=u*(a*d+s*c-o*l),i.w+=u*(-s*l-o*c-a*h),i}}const Yg=new b,$g=new b,jg={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class Et{constructor(t){t===void 0&&(t={}),this.id=Et.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}Et.idCounter=0;Et.types=jg;class Jt{constructor(t){t===void 0&&(t={}),this.position=new b,this.quaternion=new pe,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return Jt.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return Jt.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new b),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new b),n.vsub(t,i),e.conjugate(Kl),Kl.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new b),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new b),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new b),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const Kl=new pe;class As extends Et{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=t;super({type:Et.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new b;for(let s=0;s!==t.length;s++){const o=t[s],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;e[o[l]].vsub(e[o[c]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new b;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];As.computeNormal(i,s,o,e)}static computeNormal(t,e,n,i){const s=new b,o=new b;e.vsub(t,o),n.vsub(e,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,o,a,l,c){const h=new b;let d=-1,u=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),s.vmult(h,h);const v=h.dot(o);v>u&&(u=v,d=g)}const p=[];for(let g=0;g<n.faces[d].length;g++){const v=n.vertices[n.faces[d][g]],f=new b;f.copy(v),s.vmult(f,f),i.vadd(f,f),p.push(f)}d>=0&&this.clipFaceAgainstHull(o,t,e,p,a,l,c)}findSeparatingAxis(t,e,n,i,s,o,a,l){const c=new b,h=new b,d=new b,u=new b,p=new b,g=new b;let v=Number.MAX_VALUE;const f=this;if(f.uniqueAxes)for(let m=0;m!==f.uniqueAxes.length;m++){n.vmult(f.uniqueAxes[m],c);const _=f.testSepAxis(c,t,e,n,i,s);if(_===!1)return!1;_<v&&(v=_,o.copy(c))}else{const m=a?a.length:f.faces.length;for(let _=0;_<m;_++){const M=a?a[_]:_;c.copy(f.faceNormals[M]),n.vmult(c,c);const E=f.testSepAxis(c,t,e,n,i,s);if(E===!1)return!1;E<v&&(v=E,o.copy(c))}}if(t.uniqueAxes)for(let m=0;m!==t.uniqueAxes.length;m++){s.vmult(t.uniqueAxes[m],h);const _=f.testSepAxis(h,t,e,n,i,s);if(_===!1)return!1;_<v&&(v=_,o.copy(h))}else{const m=l?l.length:t.faces.length;for(let _=0;_<m;_++){const M=l?l[_]:_;h.copy(t.faceNormals[M]),s.vmult(h,h);const E=f.testSepAxis(h,t,e,n,i,s);if(E===!1)return!1;E<v&&(v=E,o.copy(h))}}for(let m=0;m!==f.uniqueEdges.length;m++){n.vmult(f.uniqueEdges[m],u);for(let _=0;_!==t.uniqueEdges.length;_++)if(s.vmult(t.uniqueEdges[_],p),u.cross(p,g),!g.almostZero()){g.normalize();const M=f.testSepAxis(g,t,e,n,i,s);if(M===!1)return!1;M<v&&(v=M,o.copy(g))}}return i.vsub(e,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,s,o){const a=this;As.project(a,t,n,i,Mo),As.project(e,t,s,o,yo);const l=Mo[0],c=Mo[1],h=yo[0],d=yo[1];if(l<d||h<c)return!1;const u=l-d,p=h-c;return u<p?u:p}calculateLocalInertia(t,e){const n=new b,i=new b;this.computeLocalAABB(i,n);const s=n.x-i.x,o=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*s*2*s+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,o,a){const l=new b,c=new b,h=new b,d=new b,u=new b,p=new b,g=new b,v=new b,f=this,m=[],_=i,M=m;let E=-1,L=Number.MAX_VALUE;for(let S=0;S<f.faces.length;S++){l.copy(f.faceNormals[S]),n.vmult(l,l);const P=l.dot(t);P<L&&(L=P,E=S)}if(E<0)return;const A=f.faces[E];A.connectedFaces=[];for(let S=0;S<f.faces.length;S++)for(let P=0;P<f.faces[S].length;P++)A.indexOf(f.faces[S][P])!==-1&&S!==E&&A.connectedFaces.indexOf(S)===-1&&A.connectedFaces.push(S);const C=A.length;for(let S=0;S<C;S++){const P=f.vertices[A[S]],H=f.vertices[A[(S+1)%C]];P.vsub(H,c),h.copy(c),n.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[E]),n.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),p.copy(P),n.vmult(p,p),e.vadd(p,p);const I=A.connectedFaces[S];g.copy(this.faceNormals[I]);const z=this.getPlaneConstantOfFace(I);v.copy(g),n.vmult(v,v);const k=z-v.dot(e);for(this.clipFaceAgainstPlane(_,M,v,k);_.length;)_.shift();for(;M.length;)_.push(M.shift())}g.copy(this.faceNormals[E]);const N=this.getPlaneConstantOfFace(E);v.copy(g),n.vmult(v,v);const w=N-v.dot(e);for(let S=0;S<_.length;S++){let P=v.dot(_[S])+w;if(P<=s&&(console.log(`clamped: depth=${P} to minDist=${s}`),P=s),P<=o){const H=_[S];if(P<=1e-6){const I={point:H,normal:v,depth:P};a.push(I)}}}}clipFaceAgainstPlane(t,e,n,i){let s,o;const a=t.length;if(a<2)return e;let l=t[t.length-1],c=t[0];s=n.dot(l)+i;for(let h=0;h<a;h++){if(c=t[h],o=n.dot(c)+i,s<0)if(o<0){const d=new b;d.copy(c),e.push(d)}else{const d=new b;l.lerp(c,s/(s-o),d),e.push(d)}else if(o<0){const d=new b;l.lerp(c,s/(s-o),d),e.push(d),e.push(c)}l=c,s=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new b);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new b);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let o,a,l,c,h,d,u=new b;for(let p=0;p<s.length;p++){u.copy(s[p]),e.vmult(u,u),t.vadd(u,u);const g=u;(o===void 0||g.x<o)&&(o=g.x),(c===void 0||g.x>c)&&(c=g.x),(a===void 0||g.y<a)&&(a=g.y),(h===void 0||g.y>h)&&(h=g.y),(l===void 0||g.z<l)&&(l=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(o,a,l),i.set(c,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new b);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const o=i[s];e.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];e.vmult(o,o)}}if(t)for(let s=0;s<n;s++){const o=i[s];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=new b;this.getAveragePointLocal(s);for(let o=0;o<this.faces.length;o++){let a=i[o];const l=e[n[o][0]],c=new b;t.vsub(l,c);const h=a.dot(c),d=new b;s.vsub(l,d);const u=a.dot(d);if(h<0&&u>0||h>0&&u<0)return!1}return-1}static project(t,e,n,i,s){const o=t.vertices.length,a=Kg;let l=0,c=0;const h=Zg,d=t.vertices;h.setZero(),Jt.vectorToLocalFrame(n,i,e,a),Jt.pointToLocalFrame(n,i,h,h);const u=h.dot(a);c=l=d[0].dot(a);for(let p=1;p<o;p++){const g=d[p].dot(a);g>l&&(l=g),g<c&&(c=g)}if(c-=u,l-=u,c>l){const p=c;c=l,l=p}s[0]=l,s[1]=c}}const Mo=[],yo=[];new b;const Kg=new b,Zg=new b;class Ds extends Et{constructor(t){super({type:Et.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=b,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new As({vertices:s,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new b),Ds.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)Hn.set(s[o][0],s[o][1],s[o][2]),e.vmult(Hn,Hn),t.vadd(Hn,Hn),n(Hn.x,Hn.y,Hn.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;un[0].set(s.x,s.y,s.z),un[1].set(-s.x,s.y,s.z),un[2].set(-s.x,-s.y,s.z),un[3].set(-s.x,-s.y,-s.z),un[4].set(s.x,-s.y,-s.z),un[5].set(s.x,s.y,-s.z),un[6].set(-s.x,s.y,-s.z),un[7].set(s.x,-s.y,s.z);const o=un[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const l=un[a];e.vmult(l,l),t.vadd(l,l);const c=l.x,h=l.y,d=l.z;c>i.x&&(i.x=c),h>i.y&&(i.y=h),d>i.z&&(i.z=d),c<n.x&&(n.x=c),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const Hn=new b,un=[new b,new b,new b,new b,new b,new b,new b,new b],Da={DYNAMIC:1,STATIC:2,KINEMATIC:4},Na={AWAKE:0,SLEEPY:1,SLEEPING:2};class St extends oh{constructor(t){t===void 0&&(t={}),super(),this.id=St.idCounter++,this.index=-1,this.world=null,this.vlambda=new b,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new b,this.previousPosition=new b,this.interpolatedPosition=new b,this.initPosition=new b,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new b,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new b,this.force=new b;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?St.STATIC:St.DYNAMIC,typeof t.type==typeof St.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=St.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new b,this.quaternion=new pe,this.initQuaternion=new pe,this.previousQuaternion=new pe,this.interpolatedQuaternion=new pe,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new b,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new b,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new b,this.invInertia=new b,this.invInertiaWorld=new cn,this.invMassSolve=0,this.invInertiaSolve=new b,this.invInertiaWorldSolve=new cn,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new b(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new b(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new Ye,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new b,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=St.AWAKE,this.wakeUpAfterNarrowphase=!1,t===St.SLEEPING&&this.dispatchEvent(St.wakeupEvent)}sleep(){this.sleepState=St.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===St.AWAKE&&n<i?(this.sleepState=St.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(St.sleepyEvent)):e===St.SLEEPY&&n>i?this.wakeUp():e===St.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(St.sleepEvent))}}updateSolveMassProperties(){this.sleepState===St.SLEEPING||this.type===St.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new b),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new b),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new b),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new b),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new b,s=new pe;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const o=t[s];o.updateBoundingSphereRadius();const a=e[s].length(),l=o.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=Jg,o=Qg,a=this.quaternion,l=this.aabb,c=t0;for(let h=0;h!==i;h++){const d=t[h];a.vmult(e[h],s),s.vadd(this.position,s),a.mult(n[h],o),d.calculateWorldAABB(s,o,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=e0,i=n0;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new b),this.type!==St.DYNAMIC)return;this.sleepState===St.SLEEPING&&this.wakeUp();const n=i0;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new b),this.type!==St.DYNAMIC)return;const n=s0,i=r0;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===St.DYNAMIC&&(this.sleepState===St.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new b),this.type!==St.DYNAMIC)return;this.sleepState===St.SLEEPING&&this.wakeUp();const n=e,i=o0;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=a0;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new b),this.type!==St.DYNAMIC)return;const n=l0,i=c0;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=h0;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Ds.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new b;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===St.DYNAMIC||this.type===St.KINEMATIC)||this.sleepState===St.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,p=h*t;i.x+=a.x*p*u.x,i.y+=a.y*p*u.y,i.z+=a.z*p*u.z;const g=d.elements,v=this.angularFactor,f=l.x*v.x,m=l.y*v.y,_=l.z*v.z;s.x+=t*(g[0]*f+g[1]*m+g[2]*_),s.y+=t*(g[3]*f+g[4]*m+g[5]*_),s.z+=t*(g[6]*f+g[7]*m+g[8]*_),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}St.idCounter=0;St.COLLIDE_EVENT_NAME="collide";St.DYNAMIC=Da.DYNAMIC;St.STATIC=Da.STATIC;St.KINEMATIC=Da.KINEMATIC;St.AWAKE=Na.AWAKE;St.SLEEPY=Na.SLEEPY;St.SLEEPING=Na.SLEEPING;St.wakeupEvent={type:"wakeup"};St.sleepyEvent={type:"sleepy"};St.sleepEvent={type:"sleep"};const Jg=new b,Qg=new pe,t0=new Ye,e0=new cn,n0=new cn;new cn;const i0=new b,s0=new b,r0=new b,o0=new b,a0=new b,l0=new b,c0=new b,h0=new b;class ah{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&St.STATIC||t.sleepState===St.SLEEPING)&&(e.type&St.STATIC||e.sleepState===St.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const s=u0;e.position.vsub(t.position,s);const o=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=d0,i=f0,s=p0,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],s[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const l=i[a].id,c=s[a].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];t.push(i[c]),e.push(s[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new b;t.position.vsub(e.position,n);const i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const u0=new b;new b;new pe;new b;const d0={keys:[]},f0=[],p0=[];new b;new b;new b;class m0 extends ah{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,s=i.length;let o,a;for(let l=0;l!==s;l++)for(let c=0;c!==l;c++)o=i[l],a=i[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class Ns{constructor(){this.rayFromWorld=new b,this.rayToWorld=new b,this.hitNormalWorld=new b,this.hitPointWorld=new b,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=a}}let lh,ch,hh,uh,dh,fh,ph;const Ua={CLOSEST:1,ANY:2,ALL:4};lh=Et.types.SPHERE;ch=Et.types.PLANE;hh=Et.types.BOX;uh=Et.types.CYLINDER;dh=Et.types.CONVEXPOLYHEDRON;fh=Et.types.HEIGHTFIELD;ph=Et.types.TRIMESH;class fe{get[lh](){return this._intersectSphere}get[ch](){return this._intersectPlane}get[hh](){return this._intersectBox}get[uh](){return this._intersectConvex}get[dh](){return this._intersectConvex}get[fh](){return this._intersectHeightfield}get[ph](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new b),e===void 0&&(e=new b),this.from=t.clone(),this.to=e.clone(),this.direction=new b,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=fe.ANY,this.result=new Ns,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||fe.ANY,this.result=e.result||new Ns,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Zl),So.length=0,t.broadphase.aabbQuery(t,Zl,So),this.intersectBodies(So),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const i=g0,s=v0;for(let o=0,a=t.shapes.length;o<a;o++){const l=t.shapes[o];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],s),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(l,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if(L0(s,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const o=this.from,a=this.to,l=this.direction,c=new b(0,0,1);e.vmult(c,c);const h=new b;o.vsub(n,h);const d=h.dot(c);a.vsub(n,h);const u=h.dot(c);if(d*u>0||o.distanceTo(a)<d)return;const p=c.dot(l);if(Math.abs(p)<this.precision)return;const g=new b,v=new b,f=new b;o.vsub(n,g);const m=-c.dot(g)/p;l.scale(m,v),o.vadd(v,f),this.reportIntersection(c,f,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const o=_0;o.from.copy(this.from),o.to.copy(this.to),Jt.pointToLocalFrame(n,e,o.from,o.from),Jt.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const a=x0;let l,c,h,d;l=c=0,h=d=t.data.length-1;const u=new Ye;o.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let p=l;p<h;p++)for(let g=c;g<d;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(p,g,u),!!u.overlapsRay(o)){if(t.getConvexTrianglePillar(p,g,!1),Jt.pointToWorldFrame(n,e,t.pillarOffset,dr),this._intersectConvex(t.pillarConvex,e,dr,i,s,Jl),this.result.shouldStop)return;t.getConvexTrianglePillar(p,g,!0),Jt.pointToWorldFrame(n,e,t.pillarOffset,dr),this._intersectConvex(t.pillarConvex,e,dr,i,s,Jl)}}}_intersectSphere(t,e,n,i,s){const o=this.from,a=this.to,l=t.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,u=h**2-4*c*d,p=M0,g=y0;if(!(u<0))if(u===0)o.lerp(a,u,p),p.vsub(n,g),g.normalize(),this.reportIntersection(g,p,s,i,-1);else{const v=(-h-Math.sqrt(u))/(2*c),f=(-h+Math.sqrt(u))/(2*c);if(v>=0&&v<=1&&(o.lerp(a,v,p),p.vsub(n,g),g.normalize(),this.reportIntersection(g,p,s,i,-1)),this.result.shouldStop)return;f>=0&&f<=1&&(o.lerp(a,f,p),p.vsub(n,g),g.normalize(),this.reportIntersection(g,p,s,i,-1))}}_intersectConvex(t,e,n,i,s,o){const a=S0,l=Ql,c=o&&o.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,p=this.direction,g=this.from,v=this.to,f=g.distanceTo(v),m=c?c.length:h.length,_=this.result;for(let M=0;!_.shouldStop&&M<m;M++){const E=c?c[M]:M,L=h[E],A=u[E],C=e,N=n;l.copy(d[L[0]]),C.vmult(l,l),l.vadd(N,l),l.vsub(g,l),C.vmult(A,a);const w=p.dot(a);if(Math.abs(w)<this.precision)continue;const S=a.dot(l)/w;if(!(S<0)){p.scale(S,Ue),Ue.vadd(g,Ue),nn.copy(d[L[0]]),C.vmult(nn,nn),N.vadd(nn,nn);for(let P=1;!_.shouldStop&&P<L.length-1;P++){dn.copy(d[L[P]]),fn.copy(d[L[P+1]]),C.vmult(dn,dn),C.vmult(fn,fn),N.vadd(dn,dn),N.vadd(fn,fn);const H=Ue.distanceTo(g);!(fe.pointInTriangle(Ue,nn,dn,fn)||fe.pointInTriangle(Ue,dn,nn,fn))||H>f||this.reportIntersection(a,Ue,s,i,E)}}}}_intersectTrimesh(t,e,n,i,s,o){const a=E0,l=R0,c=P0,h=Ql,d=b0,u=w0,p=T0,g=C0,v=A0,f=t.indices;t.vertices;const m=this.from,_=this.to,M=this.direction;c.position.copy(n),c.quaternion.copy(e),Jt.vectorToLocalFrame(n,e,M,d),Jt.pointToLocalFrame(n,e,m,u),Jt.pointToLocalFrame(n,e,_,p),p.x*=t.scale.x,p.y*=t.scale.y,p.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,p.vsub(u,d),d.normalize();const E=u.distanceSquared(p);t.tree.rayQuery(this,c,l);for(let L=0,A=l.length;!this.result.shouldStop&&L!==A;L++){const C=l[L];t.getNormal(C,a),t.getVertex(f[C*3],nn),nn.vsub(u,h);const N=d.dot(a),w=a.dot(h)/N;if(w<0)continue;d.scale(w,Ue),Ue.vadd(u,Ue),t.getVertex(f[C*3+1],dn),t.getVertex(f[C*3+2],fn);const S=Ue.distanceSquared(u);!(fe.pointInTriangle(Ue,dn,nn,fn)||fe.pointInTriangle(Ue,nn,dn,fn))||S>E||(Jt.vectorToWorldFrame(e,a,v),Jt.pointToWorldFrame(n,e,Ue,g),this.reportIntersection(v,g,s,i,C))}l.length=0}reportIntersection(t,e,n,i,s){const o=this.from,a=this.to,l=o.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case fe.ALL:this.hasHit=!0,c.set(o,a,t,e,n,i,l),c.hasHit=!0,this.callback(c);break;case fe.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l));break;case fe.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,ii),n.vsub(e,_s),t.vsub(e,Eo);const s=ii.dot(ii),o=ii.dot(_s),a=ii.dot(Eo),l=_s.dot(_s),c=_s.dot(Eo);let h,d;return(h=l*a-o*c)>=0&&(d=s*c-o*a)>=0&&h+d<s*l-o*o}}fe.CLOSEST=Ua.CLOSEST;fe.ANY=Ua.ANY;fe.ALL=Ua.ALL;const Zl=new Ye,So=[],_s=new b,Eo=new b,g0=new b,v0=new pe,Ue=new b,nn=new b,dn=new b,fn=new b;new b;new Ns;const Jl={faceList:[0]},dr=new b,_0=new fe,x0=[],M0=new b,y0=new b,S0=new b;new b;new b;const Ql=new b,E0=new b,b0=new b,w0=new b,T0=new b,A0=new b,C0=new b;new Ye;const R0=[],P0=new Jt,ii=new b,fr=new b;function L0(r,t,e){e.vsub(r,ii);const n=ii.dot(t);return t.scale(n,fr),fr.vadd(r,fr),e.distanceTo(fr)}class Wi extends ah{static checkBounds(t,e,n){let i,s;n===0?(i=t.position.x,s=e.position.x):n===1?(i=t.position.y,s=e.position.y):n===2&&(i=t.position.z,s=e.position.z);const o=t.boundingRadius,a=e.boundingRadius,l=i+o;return s-a<l}static insertionSortX(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.x<=i.aabb.lowerBound.x);s--)t[s+1]=t[s];t[s+1]=i}return t}static insertionSortY(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.y<=i.aabb.lowerBound.y);s--)t[s+1]=t[s];t[s+1]=i}return t}static insertionSortZ(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.z<=i.aabb.lowerBound.z);s--)t[s+1]=t[s];t[s+1]=i}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;const e=this.axisList;this._addBodyHandler=n=>{e.push(n.body)},this._removeBodyHandler=n=>{const i=e.indexOf(n.body);i!==-1&&e.splice(i,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,n){const i=this.axisList,s=i.length,o=this.axisIndex;let a,l;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==s;a++){const c=i[a];for(l=a+1;l<s;l++){const h=i[l];if(this.needBroadphaseCollision(c,h)){if(!Wi.checkBounds(c,h,o))break;this.intersectionTest(c,h,e,n)}}}}sortList(){const t=this.axisList,e=this.axisIndex,n=t.length;for(let i=0;i!==n;i++){const s=t[i];s.aabbNeedsUpdate&&s.updateAABB()}e===0?Wi.insertionSortX(t):e===1?Wi.insertionSortY(t):e===2&&Wi.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,n=0,i=0,s=0,o=0;const a=this.axisList,l=a.length,c=1/l;for(let p=0;p!==l;p++){const g=a[p],v=g.position.x;t+=v,e+=v*v;const f=g.position.y;n+=f,i+=f*f;const m=g.position.z;s+=m,o+=m*m}const h=e-t*t*c,d=i-n*n*c,u=o-s*s*c;h>d?h>u?this.axisIndex=0:this.axisIndex=2:d>u?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);const i=this.axisIndex;let s="x";i===1&&(s="y"),i===2&&(s="z");const o=this.axisList;e.lowerBound[s],e.upperBound[s];for(let a=0;a<o.length;a++){const l=o[a];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(e)&&n.push(l)}return n}}class I0{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class tc{constructor(){this.spatial=new b,this.rotational=new b}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class Os{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Os.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new tc,this.jacobianElementB=new tc,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,s=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*t-i*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return t.spatial.dot(s)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return t.multiplyVectors(s,a)+e.multiplyVectors(o,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,a=n.wlambda,l=i.wlambda;return t.multiplyVectors(s,a)+e.multiplyVectors(o,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,h=i.invMassSolve;return s.scale(c,ec),a.scale(h,nc),n.invInertiaWorldSolve.vmult(o,ic),i.invInertiaWorldSolve.vmult(l,sc),t.multiplyVectors(ec,ic)+e.multiplyVectors(nc,sc)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=s+o;return a.vmult(t.rotational,pr),c+=pr.dot(t.rotational),l.vmult(e.rotational,pr),c+=pr.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=D0;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Os.idCounter=0;const ec=new b,nc=new b,ic=new b,sc=new b,pr=new b,D0=new b;class N0 extends Os{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new b,this.rj=new b,this.ni=new b}computeB(t){const e=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,a=this.rj,l=U0,c=F0,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=s.velocity,p=s.angularVelocity;s.force,s.torque;const g=O0,v=this.jacobianElementA,f=this.jacobianElementB,m=this.ni;o.cross(m,l),a.cross(m,c),m.negate(v.spatial),l.negate(v.rotational),f.spatial.copy(m),f.rotational.copy(c),g.copy(s.position),g.vadd(a,g),g.vsub(i.position,g),g.vsub(o,g);const _=m.dot(g),M=this.restitution+1,E=M*u.dot(m)-M*h.dot(m)+p.dot(c)-d.dot(l),L=this.computeGiMf();return-_*e-E*n-t*L}getImpactVelocityAlongNormal(){const t=B0,e=z0,n=k0,i=H0,s=V0;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}}const U0=new b,F0=new b,O0=new b,B0=new b,z0=new b,k0=new b,H0=new b,V0=new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;class rc extends Os{constructor(t,e,n){super(t,e,-n,n),this.ri=new b,this.rj=new b,this.t=new b}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=G0,o=W0,a=this.t;n.cross(a,s),i.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),s.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}}const G0=new b,W0=new b;class Bs{constructor(t,e,n){n=I0.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Bs.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Bs.idCounter=0;class ts{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=ts.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}ts.idCounter=0;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new fe;new b;new b;new b;new b(1,0,0),new b(0,1,0),new b(0,0,1);new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;class q0 extends Et{constructor(){super({type:Et.types.PLANE}),this.worldNormal=new b,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e){return e===void 0&&(e=new b),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,i){wn.set(0,0,1),e.vmult(wn,wn);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),wn.x===1?i.x=t.x:wn.x===-1&&(n.x=t.x),wn.y===1?i.y=t.y:wn.y===-1&&(n.y=t.y),wn.z===1?i.z=t.z:wn.z===-1&&(n.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const wn=new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new Ye;new b;new Ye;new b;new b;new b;new b;new b;new b;new b;new Ye;new b;new Jt;new Ye;class X0{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class Y0 extends X0{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=e.bodies,c=l.length,h=t;let d,u,p,g,v,f;if(a!==0)for(let E=0;E!==c;E++)l[E].updateSolveMassProperties();const m=j0,_=K0,M=$0;m.length=a,_.length=a,M.length=a;for(let E=0;E!==a;E++){const L=o[E];M[E]=0,_[E]=L.computeB(h),m[E]=1/L.computeC()}if(a!==0){for(let A=0;A!==c;A++){const C=l[A],N=C.vlambda,w=C.wlambda;N.set(0,0,0),w.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let A=0;A!==a;A++){const C=o[A];d=_[A],u=m[A],f=M[A],v=C.computeGWlambda(),p=u*(d-v-C.eps*f),f+p<C.minForce?p=C.minForce-f:f+p>C.maxForce&&(p=C.maxForce-f),M[A]+=p,g+=p>0?p:-p,C.addToWlambda(p)}if(g*g<s)break}for(let A=0;A!==c;A++){const C=l[A],N=C.velocity,w=C.angularVelocity;C.vlambda.vmul(C.linearFactor,C.vlambda),N.vadd(C.vlambda,N),C.wlambda.vmul(C.angularFactor,C.wlambda),w.vadd(C.wlambda,w)}let E=o.length;const L=1/h;for(;E--;)o[E].multiplier=M[E]*L}return n}}const $0=[],j0=[],K0=[];class Z0{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class J0 extends Z0{constructor(){super(...arguments),this.type=b}constructObject(){return new b}}const oe={sphereSphere:Et.types.SPHERE,spherePlane:Et.types.SPHERE|Et.types.PLANE,boxBox:Et.types.BOX|Et.types.BOX,sphereBox:Et.types.SPHERE|Et.types.BOX,planeBox:Et.types.PLANE|Et.types.BOX,convexConvex:Et.types.CONVEXPOLYHEDRON,sphereConvex:Et.types.SPHERE|Et.types.CONVEXPOLYHEDRON,planeConvex:Et.types.PLANE|Et.types.CONVEXPOLYHEDRON,boxConvex:Et.types.BOX|Et.types.CONVEXPOLYHEDRON,sphereHeightfield:Et.types.SPHERE|Et.types.HEIGHTFIELD,boxHeightfield:Et.types.BOX|Et.types.HEIGHTFIELD,convexHeightfield:Et.types.CONVEXPOLYHEDRON|Et.types.HEIGHTFIELD,sphereParticle:Et.types.PARTICLE|Et.types.SPHERE,planeParticle:Et.types.PLANE|Et.types.PARTICLE,boxParticle:Et.types.BOX|Et.types.PARTICLE,convexParticle:Et.types.PARTICLE|Et.types.CONVEXPOLYHEDRON,cylinderCylinder:Et.types.CYLINDER,sphereCylinder:Et.types.SPHERE|Et.types.CYLINDER,planeCylinder:Et.types.PLANE|Et.types.CYLINDER,boxCylinder:Et.types.BOX|Et.types.CYLINDER,convexCylinder:Et.types.CONVEXPOLYHEDRON|Et.types.CYLINDER,heightfieldCylinder:Et.types.HEIGHTFIELD|Et.types.CYLINDER,particleCylinder:Et.types.PARTICLE|Et.types.CYLINDER,sphereTrimesh:Et.types.SPHERE|Et.types.TRIMESH,planeTrimesh:Et.types.PLANE|Et.types.TRIMESH};class Q0{get[oe.sphereSphere](){return this.sphereSphere}get[oe.spherePlane](){return this.spherePlane}get[oe.boxBox](){return this.boxBox}get[oe.sphereBox](){return this.sphereBox}get[oe.planeBox](){return this.planeBox}get[oe.convexConvex](){return this.convexConvex}get[oe.sphereConvex](){return this.sphereConvex}get[oe.planeConvex](){return this.planeConvex}get[oe.boxConvex](){return this.boxConvex}get[oe.sphereHeightfield](){return this.sphereHeightfield}get[oe.boxHeightfield](){return this.boxHeightfield}get[oe.convexHeightfield](){return this.convexHeightfield}get[oe.sphereParticle](){return this.sphereParticle}get[oe.planeParticle](){return this.planeParticle}get[oe.boxParticle](){return this.boxParticle}get[oe.convexParticle](){return this.convexParticle}get[oe.cylinderCylinder](){return this.convexConvex}get[oe.sphereCylinder](){return this.sphereConvex}get[oe.planeCylinder](){return this.planeConvex}get[oe.boxCylinder](){return this.boxConvex}get[oe.convexCylinder](){return this.convexConvex}get[oe.heightfieldCylinder](){return this.heightfieldCylinder}get[oe.particleCylinder](){return this.particleCylinder}get[oe.sphereTrimesh](){return this.sphereTrimesh}get[oe.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new J0,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new N0(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,h=i.material||e.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(a.restitution=c.restitution*h.restitution),a.si=s||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,s=t.si,o=t.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const h=s.material||n.material,d=o.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(c=h.friction*d.friction),c>0){const u=c*(a.frictionGravity||a.gravity).length();let p=n.invMass+i.invMass;p>0&&(p=1/p);const g=this.frictionEquationPool,v=g.length?g.pop():new rc(n,i,u*p),f=g.length?g.pop():new rc(n,i,u*p);return v.bi=f.bi=n,v.bj=f.bj=i,v.minForce=f.minForce=-u*p,v.maxForce=f.maxForce=u*p,v.ri.copy(t.ri),v.rj.copy(t.rj),f.ri.copy(t.ri),f.rj.copy(t.rj),t.ni.tangents(v.t,f.t),v.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),f.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),v.enabled=f.enabled=t.enabled,e.push(v,f),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Qn.setZero(),zi.setZero(),ki.setZero();const s=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==s?(Qn.vadd(e.ni,Qn),zi.vadd(e.ri,zi),ki.vadd(e.rj,ki)):(Qn.vsub(e.ni,Qn),zi.vadd(e.rj,zi),ki.vadd(e.ri,ki));const o=1/t;zi.scale(o,n.ri),ki.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Qn.normalize(),Qn.tangents(n.t,i.t)}getContacts(t,e,n,i,s,o,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const l=nv,c=iv,h=tv,d=ev;for(let u=0,p=t.length;u!==p;u++){const g=t[u],v=e[u];let f=null;g.material&&v.material&&(f=n.getContactMaterial(g.material,v.material)||null);const m=g.type&St.KINEMATIC&&v.type&St.STATIC||g.type&St.STATIC&&v.type&St.KINEMATIC||g.type&St.KINEMATIC&&v.type&St.KINEMATIC;for(let _=0;_<g.shapes.length;_++){g.quaternion.mult(g.shapeOrientations[_],l),g.quaternion.vmult(g.shapeOffsets[_],h),h.vadd(g.position,h);const M=g.shapes[_];for(let E=0;E<v.shapes.length;E++){v.quaternion.mult(v.shapeOrientations[E],c),v.quaternion.vmult(v.shapeOffsets[E],d),d.vadd(v.position,d);const L=v.shapes[E];if(!(M.collisionFilterMask&L.collisionFilterGroup&&L.collisionFilterMask&M.collisionFilterGroup)||h.distanceTo(d)>M.boundingSphereRadius+L.boundingSphereRadius)continue;let A=null;M.material&&L.material&&(A=n.getContactMaterial(M.material,L.material)||null),this.currentContactMaterial=A||f||n.defaultContactMaterial;const C=M.type|L.type,N=this[C];if(N){let w=!1;M.type<L.type?w=N.call(this,M,L,h,d,l,c,g,v,M,L,m):w=N.call(this,L,M,d,h,c,l,v,g,M,L,m),w&&m&&(n.shapeOverlapKeeper.set(M.id,L.id),n.bodyOverlapKeeper.set(g.id,v.id))}}}}}sphereSphere(t,e,n,i,s,o,a,l,c,h,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;const u=this.createContactEquation(a,l,t,e,c,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(l.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,i,s,o,a,l,c,h,d){const u=this.createContactEquation(a,l,t,e,c,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(i,mr),u.ni.scale(u.ni.dot(mr),oc),mr.vsub(oc,u.rj),-mr.dot(u.ni)<=t.radius){if(d)return!0;const p=u.ri,g=u.rj;p.vadd(n,p),p.vsub(a.position,p),g.vadd(i,g),g.vsub(l.position,g),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,i,s,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,o,a,l,t,e,d)}sphereBox(t,e,n,i,s,o,a,l,c,h,d){const u=this.v3pool,p=Rv;n.vsub(i,gr),e.getSideNormals(p,o);const g=t.radius;let v=!1;const f=Lv,m=Iv,_=Dv;let M=null,E=0,L=0,A=0,C=null;for(let O=0,j=p.length;O!==j&&v===!1;O++){const G=Tv;G.copy(p[O]);const Y=G.length();G.normalize();const ot=gr.dot(G);if(ot<Y+g&&ot>0){const lt=Av,nt=Cv;lt.copy(p[(O+1)%3]),nt.copy(p[(O+2)%3]);const At=lt.length(),K=nt.length();lt.normalize(),nt.normalize();const it=gr.dot(lt),ht=gr.dot(nt);if(it<At&&it>-At&&ht<K&&ht>-K){const gt=Math.abs(ot-Y-g);if((C===null||gt<C)&&(C=gt,L=it,A=ht,M=Y,f.copy(G),m.copy(lt),_.copy(nt),E++,d))return!0}}}if(E){v=!0;const O=this.createContactEquation(a,l,t,e,c,h);f.scale(-g,O.ri),O.ni.copy(f),O.ni.negate(O.ni),f.scale(M,f),m.scale(L,m),f.vadd(m,f),_.scale(A,_),f.vadd(_,O.rj),O.ri.vadd(n,O.ri),O.ri.vsub(a.position,O.ri),O.rj.vadd(i,O.rj),O.rj.vsub(l.position,O.rj),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}let N=u.get();const w=Pv;for(let O=0;O!==2&&!v;O++)for(let j=0;j!==2&&!v;j++)for(let G=0;G!==2&&!v;G++)if(N.set(0,0,0),O?N.vadd(p[0],N):N.vsub(p[0],N),j?N.vadd(p[1],N):N.vsub(p[1],N),G?N.vadd(p[2],N):N.vsub(p[2],N),i.vadd(N,w),w.vsub(n,w),w.lengthSquared()<g*g){if(d)return!0;v=!0;const Y=this.createContactEquation(a,l,t,e,c,h);Y.ri.copy(w),Y.ri.normalize(),Y.ni.copy(Y.ri),Y.ri.scale(g,Y.ri),Y.rj.copy(N),Y.ri.vadd(n,Y.ri),Y.ri.vsub(a.position,Y.ri),Y.rj.vadd(i,Y.rj),Y.rj.vsub(l.position,Y.rj),this.result.push(Y),this.createFrictionEquationsFromContact(Y,this.frictionResult)}u.release(N),N=null;const S=u.get(),P=u.get(),H=u.get(),I=u.get(),z=u.get(),k=p.length;for(let O=0;O!==k&&!v;O++)for(let j=0;j!==k&&!v;j++)if(O%3!==j%3){p[j].cross(p[O],S),S.normalize(),p[O].vadd(p[j],P),H.copy(n),H.vsub(P,H),H.vsub(i,H);const G=H.dot(S);S.scale(G,I);let Y=0;for(;Y===O%3||Y===j%3;)Y++;z.copy(n),z.vsub(I,z),z.vsub(P,z),z.vsub(i,z);const ot=Math.abs(G),lt=z.length();if(ot<p[Y].length()&&lt<g){if(d)return!0;v=!0;const nt=this.createContactEquation(a,l,t,e,c,h);P.vadd(I,nt.rj),nt.rj.copy(nt.rj),z.negate(nt.ni),nt.ni.normalize(),nt.ri.copy(nt.rj),nt.ri.vadd(i,nt.ri),nt.ri.vsub(n,nt.ri),nt.ri.normalize(),nt.ri.scale(g,nt.ri),nt.ri.vadd(n,nt.ri),nt.ri.vsub(a.position,nt.ri),nt.rj.vadd(i,nt.rj),nt.rj.vsub(l.position,nt.rj),this.result.push(nt),this.createFrictionEquationsFromContact(nt,this.frictionResult)}}u.release(S,P,H,I,z)}planeBox(t,e,n,i,s,o,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,o,a,l,t,e,d)}convexConvex(t,e,n,i,s,o,a,l,c,h,d,u,p){const g=$v;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,o,g,u,p)){const v=[],f=jv;t.clipAgainstHull(n,s,e,i,o,g,-100,100,v);let m=0;for(let _=0;_!==v.length;_++){if(d)return!0;const M=this.createContactEquation(a,l,t,e,c,h),E=M.ri,L=M.rj;g.negate(M.ni),v[_].normal.negate(f),f.scale(v[_].depth,f),v[_].point.vadd(f,E),L.copy(v[_].point),E.vsub(n,E),L.vsub(i,L),E.vadd(n,E),E.vsub(a.position,E),L.vadd(i,L),L.vsub(l.position,L),this.result.push(M),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(M,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}}sphereConvex(t,e,n,i,s,o,a,l,c,h,d){const u=this.v3pool;n.vsub(i,Nv);const p=e.faceNormals,g=e.faces,v=e.vertices,f=t.radius;let m=!1;for(let _=0;_!==v.length;_++){const M=v[_],E=Bv;o.vmult(M,E),i.vadd(E,E);const L=Ov;if(E.vsub(n,L),L.lengthSquared()<f*f){if(d)return!0;m=!0;const A=this.createContactEquation(a,l,t,e,c,h);A.ri.copy(L),A.ri.normalize(),A.ni.copy(A.ri),A.ri.scale(f,A.ri),E.vsub(i,A.rj),A.ri.vadd(n,A.ri),A.ri.vsub(a.position,A.ri),A.rj.vadd(i,A.rj),A.rj.vsub(l.position,A.rj),this.result.push(A),this.createFrictionEquationsFromContact(A,this.frictionResult);return}}for(let _=0,M=g.length;_!==M&&m===!1;_++){const E=p[_],L=g[_],A=zv;o.vmult(E,A);const C=kv;o.vmult(v[L[0]],C),C.vadd(i,C);const N=Hv;A.scale(-f,N),n.vadd(N,N);const w=Vv;N.vsub(C,w);const S=w.dot(A),P=Gv;if(n.vsub(C,P),S<0&&P.dot(A)>0){const H=[];for(let I=0,z=L.length;I!==z;I++){const k=u.get();o.vmult(v[L[I]],k),i.vadd(k,k),H.push(k)}if(wv(H,A,n)){if(d)return!0;m=!0;const I=this.createContactEquation(a,l,t,e,c,h);A.scale(-f,I.ri),A.negate(I.ni);const z=u.get();A.scale(-S,z);const k=u.get();A.scale(-f,k),n.vsub(i,I.rj),I.rj.vadd(k,I.rj),I.rj.vadd(z,I.rj),I.rj.vadd(i,I.rj),I.rj.vsub(l.position,I.rj),I.ri.vadd(n,I.ri),I.ri.vsub(a.position,I.ri),u.release(z),u.release(k),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult);for(let O=0,j=H.length;O!==j;O++)u.release(H[O]);return}else for(let I=0;I!==L.length;I++){const z=u.get(),k=u.get();o.vmult(v[L[(I+1)%L.length]],z),o.vmult(v[L[(I+2)%L.length]],k),i.vadd(z,z),i.vadd(k,k);const O=Uv;k.vsub(z,O);const j=Fv;O.unit(j);const G=u.get(),Y=u.get();n.vsub(z,Y);const ot=Y.dot(j);j.scale(ot,G),G.vadd(z,G);const lt=u.get();if(G.vsub(n,lt),ot>0&&ot*ot<O.lengthSquared()&&lt.lengthSquared()<f*f){if(d)return!0;const nt=this.createContactEquation(a,l,t,e,c,h);G.vsub(i,nt.rj),G.vsub(n,nt.ni),nt.ni.normalize(),nt.ni.scale(f,nt.ri),nt.rj.vadd(i,nt.rj),nt.rj.vsub(l.position,nt.rj),nt.ri.vadd(n,nt.ri),nt.ri.vsub(a.position,nt.ri),this.result.push(nt),this.createFrictionEquationsFromContact(nt,this.frictionResult);for(let At=0,K=H.length;At!==K;At++)u.release(H[At]);u.release(z),u.release(k),u.release(G),u.release(lt),u.release(Y);return}u.release(z),u.release(k),u.release(G),u.release(lt),u.release(Y)}for(let I=0,z=H.length;I!==z;I++)u.release(H[I])}}}planeConvex(t,e,n,i,s,o,a,l,c,h,d){const u=Wv,p=qv;p.set(0,0,1),s.vmult(p,p);let g=0;const v=Xv;for(let f=0;f!==e.vertices.length;f++)if(u.copy(e.vertices[f]),o.vmult(u,u),i.vadd(u,u),u.vsub(n,v),p.dot(v)<=0){if(d)return!0;const _=this.createContactEquation(a,l,t,e,c,h),M=Yv;p.scale(p.dot(v),M),u.vsub(M,M),M.vsub(n,_.ri),_.ni.copy(p),u.vsub(i,_.rj),_.ri.vadd(n,_.ri),_.ri.vsub(a.position,_.ri),_.rj.vadd(i,_.rj),_.rj.vsub(l.position,_.rj),this.result.push(_),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,i,s,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,o,a,l,t,e,d)}sphereHeightfield(t,e,n,i,s,o,a,l,c,h,d){const u=e.data,p=t.radius,g=e.elementSize,v=a_,f=o_;Jt.pointToLocalFrame(i,o,n,f);let m=Math.floor((f.x-p)/g)-1,_=Math.ceil((f.x+p)/g)+1,M=Math.floor((f.y-p)/g)-1,E=Math.ceil((f.y+p)/g)+1;if(_<0||E<0||m>u.length||M>u[0].length)return;m<0&&(m=0),_<0&&(_=0),M<0&&(M=0),E<0&&(E=0),m>=u.length&&(m=u.length-1),_>=u.length&&(_=u.length-1),E>=u[0].length&&(E=u[0].length-1),M>=u[0].length&&(M=u[0].length-1);const L=[];e.getRectMinMax(m,M,_,E,L);const A=L[0],C=L[1];if(f.z-p>C||f.z+p<A)return;const N=this.result;for(let w=m;w<_;w++)for(let S=M;S<E;S++){const P=N.length;let H=!1;if(e.getConvexTrianglePillar(w,S,!1),Jt.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(H=this.sphereConvex(t,e.pillarConvex,n,v,s,o,a,l,t,e,d)),d&&H||(e.getConvexTrianglePillar(w,S,!0),Jt.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(H=this.sphereConvex(t,e.pillarConvex,n,v,s,o,a,l,t,e,d)),d&&H))return!0;if(N.length-P>2)return}}boxHeightfield(t,e,n,i,s,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,o,a,l,t,e,d)}convexHeightfield(t,e,n,i,s,o,a,l,c,h,d){const u=e.data,p=e.elementSize,g=t.boundingSphereRadius,v=s_,f=r_,m=i_;Jt.pointToLocalFrame(i,o,n,m);let _=Math.floor((m.x-g)/p)-1,M=Math.ceil((m.x+g)/p)+1,E=Math.floor((m.y-g)/p)-1,L=Math.ceil((m.y+g)/p)+1;if(M<0||L<0||_>u.length||E>u[0].length)return;_<0&&(_=0),M<0&&(M=0),E<0&&(E=0),L<0&&(L=0),_>=u.length&&(_=u.length-1),M>=u.length&&(M=u.length-1),L>=u[0].length&&(L=u[0].length-1),E>=u[0].length&&(E=u[0].length-1);const A=[];e.getRectMinMax(_,E,M,L,A);const C=A[0],N=A[1];if(!(m.z-g>N||m.z+g<C))for(let w=_;w<M;w++)for(let S=E;S<L;S++){let P=!1;if(e.getConvexTrianglePillar(w,S,!1),Jt.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(P=this.convexConvex(t,e.pillarConvex,n,v,s,o,a,l,null,null,d,f,null)),d&&P||(e.getConvexTrianglePillar(w,S,!0),Jt.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(P=this.convexConvex(t,e.pillarConvex,n,v,s,o,a,l,null,null,d,f,null)),d&&P))return!0}}sphereParticle(t,e,n,i,s,o,a,l,c,h,d){const u=Qv;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;const g=this.createContactEquation(l,a,e,t,c,h);u.normalize(),g.rj.copy(u),g.rj.scale(t.radius,g.rj),g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,i,s,o,a,l,c,h,d){const u=Kv;u.set(0,0,1),a.quaternion.vmult(u,u);const p=Zv;if(i.vsub(a.position,p),u.dot(p)<=0){if(d)return!0;const v=this.createContactEquation(l,a,e,t,c,h);v.ni.copy(u),v.ni.negate(v.ni),v.ri.set(0,0,0);const f=Jv;u.scale(u.dot(i),f),i.vsub(f,f),v.rj.copy(f),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxParticle(t,e,n,i,s,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,o,a,l,t,e,d)}convexParticle(t,e,n,i,s,o,a,l,c,h,d){let u=-1;const p=e_,g=n_;let v=null;const f=t_;if(f.copy(i),f.vsub(n,f),s.conjugate(ac),ac.vmult(f,f),t.pointIsInside(f)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let m=0,_=t.faces.length;m!==_;m++){const M=[t.worldVertices[t.faces[m][0]]],E=t.worldFaceNormals[m];i.vsub(M[0],lc);const L=-E.dot(lc);if(v===null||Math.abs(L)<Math.abs(v)){if(d)return!0;v=L,u=m,p.copy(E)}}if(u!==-1){const m=this.createContactEquation(l,a,e,t,c,h);p.scale(v,g),g.vadd(i,g),g.vsub(n,g),m.rj.copy(g),p.negate(m.ni),m.ri.set(0,0,0);const _=m.ri,M=m.rj;_.vadd(i,_),_.vsub(l.position,_),M.vadd(n,M),M.vsub(a.position,M),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,o,a,l,c,h,d){return this.convexHeightfield(e,t,i,n,o,s,l,a,c,h,d)}particleCylinder(t,e,n,i,s,o,a,l,c,h,d){return this.convexParticle(e,t,i,n,o,s,l,a,c,h,d)}sphereTrimesh(t,e,n,i,s,o,a,l,c,h,d){const u=uv,p=dv,g=fv,v=pv,f=mv,m=gv,_=Mv,M=hv,E=lv,L=yv;Jt.pointToLocalFrame(i,o,n,f);const A=t.radius;_.lowerBound.set(f.x-A,f.y-A,f.z-A),_.upperBound.set(f.x+A,f.y+A,f.z+A),e.getTrianglesInAABB(_,L);const C=cv,N=t.radius*t.radius;for(let I=0;I<L.length;I++)for(let z=0;z<3;z++)if(e.getVertex(e.indices[L[I]*3+z],C),C.vsub(f,E),E.lengthSquared()<=N){if(M.copy(C),Jt.pointToWorldFrame(i,o,M,C),C.vsub(n,E),d)return!0;let k=this.createContactEquation(a,l,t,e,c,h);k.ni.copy(E),k.ni.normalize(),k.ri.copy(k.ni),k.ri.scale(t.radius,k.ri),k.ri.vadd(n,k.ri),k.ri.vsub(a.position,k.ri),k.rj.copy(C),k.rj.vsub(l.position,k.rj),this.result.push(k),this.createFrictionEquationsFromContact(k,this.frictionResult)}for(let I=0;I<L.length;I++)for(let z=0;z<3;z++){e.getVertex(e.indices[L[I]*3+z],u),e.getVertex(e.indices[L[I]*3+(z+1)%3],p),p.vsub(u,g),f.vsub(p,m);const k=m.dot(g);f.vsub(u,m);let O=m.dot(g);if(O>0&&k<0&&(f.vsub(u,m),v.copy(g),v.normalize(),O=m.dot(v),v.scale(O,m),m.vadd(u,m),m.distanceTo(f)<t.radius)){if(d)return!0;const G=this.createContactEquation(a,l,t,e,c,h);m.vsub(f,G.ni),G.ni.normalize(),G.ni.scale(t.radius,G.ri),G.ri.vadd(n,G.ri),G.ri.vsub(a.position,G.ri),Jt.pointToWorldFrame(i,o,m,m),m.vsub(l.position,G.rj),Jt.vectorToWorldFrame(o,G.ni,G.ni),Jt.vectorToWorldFrame(o,G.ri,G.ri),this.result.push(G),this.createFrictionEquationsFromContact(G,this.frictionResult)}}const w=vv,S=_v,P=xv,H=av;for(let I=0,z=L.length;I!==z;I++){e.getTriangleVertices(L[I],w,S,P),e.getNormal(L[I],H),f.vsub(w,m);let k=m.dot(H);if(H.scale(k,m),f.vsub(m,m),k=m.distanceTo(f),fe.pointInTriangle(m,w,S,P)&&k<t.radius){if(d)return!0;let O=this.createContactEquation(a,l,t,e,c,h);m.vsub(f,O.ni),O.ni.normalize(),O.ni.scale(t.radius,O.ri),O.ri.vadd(n,O.ri),O.ri.vsub(a.position,O.ri),Jt.pointToWorldFrame(i,o,m,m),m.vsub(l.position,O.rj),Jt.vectorToWorldFrame(o,O.ni,O.ni),Jt.vectorToWorldFrame(o,O.ri,O.ri),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}}L.length=0}planeTrimesh(t,e,n,i,s,o,a,l,c,h,d){const u=new b,p=sv;p.set(0,0,1),s.vmult(p,p);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,u);const v=new b;v.copy(u),Jt.pointToWorldFrame(i,o,v,u);const f=rv;if(u.vsub(n,f),p.dot(f)<=0){if(d)return!0;const _=this.createContactEquation(a,l,t,e,c,h);_.ni.copy(p);const M=ov;p.scale(f.dot(p),M),u.vsub(M,M),_.ri.copy(M),_.ri.vsub(a.position,_.ri),_.rj.copy(u),_.rj.vsub(l.position,_.rj),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}}}const Qn=new b,zi=new b,ki=new b,tv=new b,ev=new b,nv=new pe,iv=new pe,sv=new b,rv=new b,ov=new b,av=new b,lv=new b;new b;const cv=new b,hv=new b,uv=new b,dv=new b,fv=new b,pv=new b,mv=new b,gv=new b,vv=new b,_v=new b,xv=new b,Mv=new Ye,yv=[],mr=new b,oc=new b,Sv=new b,Ev=new b,bv=new b;function wv(r,t,e){let n=null;const i=r.length;for(let s=0;s!==i;s++){const o=r[s],a=Sv;r[(s+1)%i].vsub(o,a);const l=Ev;a.cross(t,l);const c=bv;e.vsub(o,c);const h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const gr=new b,Tv=new b,Av=new b,Cv=new b,Rv=[new b,new b,new b,new b,new b,new b],Pv=new b,Lv=new b,Iv=new b,Dv=new b,Nv=new b,Uv=new b,Fv=new b,Ov=new b,Bv=new b,zv=new b,kv=new b,Hv=new b,Vv=new b,Gv=new b;new b;new b;const Wv=new b,qv=new b,Xv=new b,Yv=new b,$v=new b,jv=new b,Kv=new b,Zv=new b,Jv=new b,Qv=new b,ac=new pe,t_=new b;new b;const e_=new b,lc=new b,n_=new b,i_=new b,s_=new b,r_=[0],o_=new b,a_=new b;class cc{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,s=n.length,o=i.length;let a=0;for(let l=0;l<s;l++){let c=!1;const h=n[l];for(;h>i[a];)a++;c=h===i[a],c||hc(t,h)}a=0;for(let l=0;l<o;l++){let c=!1;const h=i[l];for(;h>n[a];)a++;c=n[a]===h,c||hc(e,h)}}}function hc(r,t){r.push((t&4294901760)>>16,t&65535)}const bo=(r,t)=>r<t?`${r}-${t}`:`${t}-${r}`;class l_{constructor(){this.data={keys:[]}}get(t,e){const n=bo(t,e);return this.data[n]}set(t,e,n){const i=bo(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=bo(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class c_ extends oh{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new b,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new b,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new m0,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new Y0,this.constraints=[],this.narrowphase=new Q0(this),this.collisionMatrix=new jl,this.collisionMatrixPrevious=new jl,this.bodyOverlapKeeper=new cc,this.shapeOverlapKeeper=new cc,this.contactmaterials=[],this.contactMaterialTable=new l_,this.defaultMaterial=new ts("default"),this.defaultContactMaterial=new Bs(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof Ns?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=fe.ALL,n.from=t,n.to=e,n.callback=i,wo.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=fe.ANY,n.from=t,n.to=e,n.result=i,wo.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=fe.CLOSEST,n.from=t,n.to=e,n.result=i,wo.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof St&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let s=0;s<i.length;s++){const o=i[s];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=ge.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=ge.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(ge.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=p_,i=m_,s=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,d=St.DYNAMIC;let u=-1/0;const p=this.constraints,g=f_;l.length();const v=l.x,f=l.y,m=l.z;let _=0;for(c&&(u=ge.now()),_=0;_!==s;_++){const I=o[_];if(I.type===d){const z=I.force,k=I.mass;z.x+=k*v,z.y+=k*f,z.z+=k*m}}for(let I=0,z=this.subsystems.length;I!==z;I++)this.subsystems[I].update();c&&(u=ge.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(h.broadphase=ge.now()-u);let M=p.length;for(_=0;_!==M;_++){const I=p[_];if(!I.collideConnected)for(let z=n.length-1;z>=0;z-=1)(I.bodyA===n[z]&&I.bodyB===i[z]||I.bodyB===n[z]&&I.bodyA===i[z])&&(n.splice(z,1),i.splice(z,1))}this.collisionMatrixTick(),c&&(u=ge.now());const E=d_,L=e.length;for(_=0;_!==L;_++)E.push(e[_]);e.length=0;const A=this.frictionEquations.length;for(_=0;_!==A;_++)g.push(this.frictionEquations[_]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,E,this.frictionEquations,g),c&&(h.narrowphase=ge.now()-u),c&&(u=ge.now()),_=0;_<this.frictionEquations.length;_++)a.addEquation(this.frictionEquations[_]);const C=e.length;for(let I=0;I!==C;I++){const z=e[I],k=z.bi,O=z.bj,j=z.si,G=z.sj;let Y;if(k.material&&O.material?Y=this.getContactMaterial(k.material,O.material)||this.defaultContactMaterial:Y=this.defaultContactMaterial,Y.friction,k.material&&O.material&&(k.material.friction>=0&&O.material.friction>=0&&k.material.friction*O.material.friction,k.material.restitution>=0&&O.material.restitution>=0&&(z.restitution=k.material.restitution*O.material.restitution)),a.addEquation(z),k.allowSleep&&k.type===St.DYNAMIC&&k.sleepState===St.SLEEPING&&O.sleepState===St.AWAKE&&O.type!==St.STATIC){const ot=O.velocity.lengthSquared()+O.angularVelocity.lengthSquared(),lt=O.sleepSpeedLimit**2;ot>=lt*2&&(k.wakeUpAfterNarrowphase=!0)}if(O.allowSleep&&O.type===St.DYNAMIC&&O.sleepState===St.SLEEPING&&k.sleepState===St.AWAKE&&k.type!==St.STATIC){const ot=k.velocity.lengthSquared()+k.angularVelocity.lengthSquared(),lt=k.sleepSpeedLimit**2;ot>=lt*2&&(O.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(k,O,!0),this.collisionMatrixPrevious.get(k,O)||(xs.body=O,xs.contact=z,k.dispatchEvent(xs),xs.body=k,O.dispatchEvent(xs)),this.bodyOverlapKeeper.set(k.id,O.id),this.shapeOverlapKeeper.set(j.id,G.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=ge.now()-u,u=ge.now()),_=0;_!==s;_++){const I=o[_];I.wakeUpAfterNarrowphase&&(I.wakeUp(),I.wakeUpAfterNarrowphase=!1)}for(M=p.length,_=0;_!==M;_++){const I=p[_];I.update();for(let z=0,k=I.equations.length;z!==k;z++){const O=I.equations[z];a.addEquation(O)}}a.solve(t,this),c&&(h.solve=ge.now()-u),a.removeAllEquations();const N=Math.pow;for(_=0;_!==s;_++){const I=o[_];if(I.type&d){const z=N(1-I.linearDamping,t),k=I.velocity;k.scale(z,k);const O=I.angularVelocity;if(O){const j=N(1-I.angularDamping,t);O.scale(j,O)}}}this.dispatchEvent(u_),c&&(u=ge.now());const S=this.stepnumber%(this.quatNormalizeSkip+1)===0,P=this.quatNormalizeFast;for(_=0;_!==s;_++)o[_].integrate(t,S,P);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=ge.now()-u),this.stepnumber+=1,this.dispatchEvent(h_);let H=!0;if(this.allowSleep)for(H=!1,_=0;_!==s;_++){const I=o[_];I.sleepTick(this.time),I.sleepState!==St.SLEEPING&&(H=!0)}this.hasActiveBodies=H}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(Tn,An),t){for(let s=0,o=Tn.length;s<o;s+=2)Ms.bodyA=this.getBodyById(Tn[s]),Ms.bodyB=this.getBodyById(Tn[s+1]),this.dispatchEvent(Ms);Ms.bodyA=Ms.bodyB=null}if(e){for(let s=0,o=An.length;s<o;s+=2)ys.bodyA=this.getBodyById(An[s]),ys.bodyB=this.getBodyById(An[s+1]),this.dispatchEvent(ys);ys.bodyA=ys.bodyB=null}Tn.length=An.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(Tn,An),n){for(let s=0,o=Tn.length;s<o;s+=2){const a=this.getShapeById(Tn[s]),l=this.getShapeById(Tn[s+1]);Cn.shapeA=a,Cn.shapeB=l,a&&(Cn.bodyA=a.body),l&&(Cn.bodyB=l.body),this.dispatchEvent(Cn)}Cn.bodyA=Cn.bodyB=Cn.shapeA=Cn.shapeB=null}if(i){for(let s=0,o=An.length;s<o;s+=2){const a=this.getShapeById(An[s]),l=this.getShapeById(An[s+1]);Rn.shapeA=a,Rn.shapeB=l,a&&(Rn.bodyA=a.body),l&&(Rn.bodyB=l.body),this.dispatchEvent(Rn)}Rn.bodyA=Rn.bodyB=Rn.shapeA=Rn.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new Ye;const wo=new fe,ge=globalThis.performance||{};if(!ge.now){let r=Date.now();ge.timing&&ge.timing.navigationStart&&(r=ge.timing.navigationStart),ge.now=()=>Date.now()-r}new b;const h_={type:"postStep"},u_={type:"preStep"},xs={type:St.COLLIDE_EVENT_NAME,body:null,contact:null},d_=[],f_=[],p_=[],m_=[],Tn=[],An=[],Ms={type:"beginContact",bodyA:null,bodyB:null},ys={type:"endContact",bodyA:null,bodyB:null},Cn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Rn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Cs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class di{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const g_=new Ta(-1,1,1,-1,0,1);class v_ extends Ze{constructor(){super(),this.setAttribute("position",new Ne([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ne([0,2,0,0,2,0],2))}}const __=new v_;class Br{constructor(t){this._mesh=new ve(__,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,g_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class x_ extends di{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof he?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=gn.clone(t.uniforms),this.material=new he({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Br(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class uc extends di{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class M_ extends di{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class y_{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Bt);this._width=n.width,this._height=n.height,e=new Fe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Xe}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new x_(Cs),this.copyPass.material.blending=Ie,this.clock=new Vg}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}uc!==void 0&&(o instanceof uc?n=!0:o instanceof M_&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Bt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class S_ extends di{constructor(t,e,n=null,i=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ot}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}}const E_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ot(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class es extends di{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new Bt(t.x,t.y):new Bt(256,256),this.clearColor=new Ot(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Fe(s,o,{type:Xe}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const u=new Fe(s,o,{type:Xe});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const p=new Fe(s,o,{type:Xe});p.texture.name="UnrealBloomPass.v"+d,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),o=Math.round(o/2)}const a=E_;this.highPassUniforms=gn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new he({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new Bt(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new X(1,1,1),new X(1,1,1),new X(1,1,1),new X(1,1,1),new X(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Cs;this.copyUniforms=gn.clone(h.uniforms),this.blendMaterial=new he({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Co,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ot,this.oldClearAlpha=1,this.basic=new Is,this.fsQuad=new Br(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new Bt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=es.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=es.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new he({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Bt(.5,.5)},direction:{value:new Bt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new he({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}es.BlurDirectionX=new Bt(1,0);es.BlurDirectionY=new Bt(0,1);class b_{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,n){return t[0]*e+t[1]*n}dot3(t,e,n,i){return t[0]*e+t[1]*n+t[2]*i}dot4(t,e,n,i,s){return t[0]*e+t[1]*n+t[2]*i+t[3]*s}noise(t,e){let n,i,s;const o=.5*(Math.sqrt(3)-1),a=(t+e)*o,l=Math.floor(t+a),c=Math.floor(e+a),h=(3-Math.sqrt(3))/6,d=(l+c)*h,u=l-d,p=c-d,g=t-u,v=e-p;let f,m;g>v?(f=1,m=0):(f=0,m=1);const _=g-f+h,M=v-m+h,E=g-1+2*h,L=v-1+2*h,A=l&255,C=c&255,N=this.perm[A+this.perm[C]]%12,w=this.perm[A+f+this.perm[C+m]]%12,S=this.perm[A+1+this.perm[C+1]]%12;let P=.5-g*g-v*v;P<0?n=0:(P*=P,n=P*P*this.dot(this.grad3[N],g,v));let H=.5-_*_-M*M;H<0?i=0:(H*=H,i=H*H*this.dot(this.grad3[w],_,M));let I=.5-E*E-L*L;return I<0?s=0:(I*=I,s=I*I*this.dot(this.grad3[S],E,L)),70*(n+i+s)}noise3d(t,e,n){let i,s,o,a;const c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),d=Math.floor(e+c),u=Math.floor(n+c),p=1/6,g=(h+d+u)*p,v=h-g,f=d-g,m=u-g,_=t-v,M=e-f,E=n-m;let L,A,C,N,w,S;_>=M?M>=E?(L=1,A=0,C=0,N=1,w=1,S=0):_>=E?(L=1,A=0,C=0,N=1,w=0,S=1):(L=0,A=0,C=1,N=1,w=0,S=1):M<E?(L=0,A=0,C=1,N=0,w=1,S=1):_<E?(L=0,A=1,C=0,N=0,w=1,S=1):(L=0,A=1,C=0,N=1,w=1,S=0);const P=_-L+p,H=M-A+p,I=E-C+p,z=_-N+2*p,k=M-w+2*p,O=E-S+2*p,j=_-1+3*p,G=M-1+3*p,Y=E-1+3*p,ot=h&255,lt=d&255,nt=u&255,At=this.perm[ot+this.perm[lt+this.perm[nt]]]%12,K=this.perm[ot+L+this.perm[lt+A+this.perm[nt+C]]]%12,it=this.perm[ot+N+this.perm[lt+w+this.perm[nt+S]]]%12,ht=this.perm[ot+1+this.perm[lt+1+this.perm[nt+1]]]%12;let gt=.6-_*_-M*M-E*E;gt<0?i=0:(gt*=gt,i=gt*gt*this.dot3(this.grad3[At],_,M,E));let bt=.6-P*P-H*H-I*I;bt<0?s=0:(bt*=bt,s=bt*bt*this.dot3(this.grad3[K],P,H,I));let Lt=.6-z*z-k*k-O*O;Lt<0?o=0:(Lt*=Lt,o=Lt*Lt*this.dot3(this.grad3[it],z,k,O));let yt=.6-j*j-G*G-Y*Y;return yt<0?a=0:(yt*=yt,a=yt*yt*this.dot3(this.grad3[ht],j,G,Y)),32*(i+s+o+a)}noise4d(t,e,n,i){const s=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let h,d,u,p,g;const v=(t+e+n+i)*l,f=Math.floor(t+v),m=Math.floor(e+v),_=Math.floor(n+v),M=Math.floor(i+v),E=(f+m+_+M)*c,L=f-E,A=m-E,C=_-E,N=M-E,w=t-L,S=e-A,P=n-C,H=i-N,I=w>S?32:0,z=w>P?16:0,k=S>P?8:0,O=w>H?4:0,j=S>H?2:0,G=P>H?1:0,Y=I+z+k+O+j+G,ot=o[Y][0]>=3?1:0,lt=o[Y][1]>=3?1:0,nt=o[Y][2]>=3?1:0,At=o[Y][3]>=3?1:0,K=o[Y][0]>=2?1:0,it=o[Y][1]>=2?1:0,ht=o[Y][2]>=2?1:0,gt=o[Y][3]>=2?1:0,bt=o[Y][0]>=1?1:0,Lt=o[Y][1]>=1?1:0,yt=o[Y][2]>=1?1:0,Ct=o[Y][3]>=1?1:0,U=w-ot+c,Ht=S-lt+c,Gt=P-nt+c,Dt=H-At+c,mt=w-K+2*c,jt=S-it+2*c,Ut=P-ht+2*c,R=H-gt+2*c,T=w-bt+3*c,x=S-Lt+3*c,B=P-yt+3*c,$=H-Ct+3*c,Z=w-1+4*c,et=S-1+4*c,Tt=P-1+4*c,pt=H-1+4*c,vt=f&255,Rt=m&255,st=_&255,ut=M&255,Wt=a[vt+a[Rt+a[st+a[ut]]]]%32,Pt=a[vt+ot+a[Rt+lt+a[st+nt+a[ut+At]]]]%32,Mt=a[vt+K+a[Rt+it+a[st+ht+a[ut+gt]]]]%32,kt=a[vt+bt+a[Rt+Lt+a[st+yt+a[ut+Ct]]]]%32,Vt=a[vt+1+a[Rt+1+a[st+1+a[ut+1]]]]%32;let Kt=.6-w*w-S*S-P*P-H*H;Kt<0?h=0:(Kt*=Kt,h=Kt*Kt*this.dot4(s[Wt],w,S,P,H));let V=.6-U*U-Ht*Ht-Gt*Gt-Dt*Dt;V<0?d=0:(V*=V,d=V*V*this.dot4(s[Pt],U,Ht,Gt,Dt));let at=.6-mt*mt-jt*jt-Ut*Ut-R*R;at<0?u=0:(at*=at,u=at*at*this.dot4(s[Mt],mt,jt,Ut,R));let J=.6-T*T-x*x-B*B-$*$;J<0?p=0:(J*=J,p=J*J*this.dot4(s[kt],T,x,B,$));let tt=.6-Z*Z-et*et-Tt*Tt-pt*pt;return tt<0?g=0:(tt*=tt,g=tt*tt*this.dot4(s[Vt],Z,et,Tt,pt)),27*(h+d+u+p+g)}}const vr={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new Bt},cameraProjectionMatrix:{value:new ne},cameraInverseProjectionMatrix:{value:new ne},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;

		uniform vec3 kernel[ KERNEL_SIZE ];

		uniform vec2 resolution;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;

		uniform float kernelRadius;
		uniform float minDistance; // avoid artifacts caused by neighbour fragments with minimal depth difference
		uniform float maxDistance; // avoid the influence of fragments which are too far away

		varying vec2 vUv;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {

			return texture2D( tDepth, screenPosition ).x;

		}

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		float getViewZ( const in float depth ) {

			#if PERSPECTIVE_CAMERA == 1

				return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );

			#else

				return orthographicDepthToViewZ( depth, cameraNear, cameraFar );

			#endif

		}

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {

			float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];

			vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );

			clipPosition *= clipW; // unprojection.

			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;

		}

		vec3 getViewNormal( const in vec2 screenPosition ) {

			return unpackRGBToNormal( texture2D( tNormal, screenPosition ).xyz );

		}

		void main() {

			float depth = getDepth( vUv );

			if ( depth == 1.0 ) {

				gl_FragColor = vec4( 1.0 ); // don't influence background
				
			} else {

				float viewZ = getViewZ( depth );

				vec3 viewPosition = getViewPosition( vUv, depth, viewZ );
				vec3 viewNormal = getViewNormal( vUv );

				vec2 noiseScale = vec2( resolution.x / 4.0, resolution.y / 4.0 );
				vec3 random = vec3( texture2D( tNoise, vUv * noiseScale ).r );

				// compute matrix used to reorient a kernel vector

				vec3 tangent = normalize( random - viewNormal * dot( random, viewNormal ) );
				vec3 bitangent = cross( viewNormal, tangent );
				mat3 kernelMatrix = mat3( tangent, bitangent, viewNormal );

				float occlusion = 0.0;

				for ( int i = 0; i < KERNEL_SIZE; i ++ ) {

					vec3 sampleVector = kernelMatrix * kernel[ i ]; // reorient sample vector in view space
					vec3 samplePoint = viewPosition + ( sampleVector * kernelRadius ); // calculate sample point

					vec4 samplePointNDC = cameraProjectionMatrix * vec4( samplePoint, 1.0 ); // project point and calculate NDC
					samplePointNDC /= samplePointNDC.w;

					vec2 samplePointUv = samplePointNDC.xy * 0.5 + 0.5; // compute uv coordinates

					float realDepth = getLinearDepth( samplePointUv ); // get linear depth from depth texture
					float sampleDepth = viewZToOrthographicDepth( samplePoint.z, cameraNear, cameraFar ); // compute linear depth of the sample view Z value
					float delta = sampleDepth - realDepth;

					if ( delta > minDistance && delta < maxDistance ) { // if fragment is before sample point, increase occlusion

						occlusion += 1.0;

					}

				}

				occlusion = clamp( occlusion / float( KERNEL_SIZE ), 0.0, 1.0 );

				gl_FragColor = vec4( vec3( 1.0 - occlusion ), 1.0 );

			}

		}`},_r={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;

		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		void main() {

			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},xr={uniforms:{tDiffuse:{value:null},resolution:{value:new Bt}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		void main() {

			vec2 texelSize = ( 1.0 / resolution );
			float result = 0.0;

			for ( int i = - 2; i <= 2; i ++ ) {

				for ( int j = - 2; j <= 2; j ++ ) {

					vec2 offset = ( vec2( float( i ), float( j ) ) ) * texelSize;
					result += texture2D( tDiffuse, vUv + offset ).r;

				}

			}

			gl_FragColor = vec4( vec3( result / ( 5.0 * 5.0 ) ), 1.0 );

		}`};class Gn extends di{constructor(t,e,n,i,s=32){super(),this.width=n!==void 0?n:512,this.height=i!==void 0?i:512,this.clear=!0,this.needsSwap=!1,this.camera=e,this.scene=t,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=new Map,this.generateSampleKernel(s),this.generateRandomKernelRotations();const o=new Ca;o.format=ci,o.type=li,this.normalRenderTarget=new Fe(this.width,this.height,{minFilter:Ae,magFilter:Ae,type:Xe,depthTexture:o}),this.ssaoRenderTarget=new Fe(this.width,this.height,{type:Xe}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new he({defines:Object.assign({},vr.defines),uniforms:gn.clone(vr.uniforms),vertexShader:vr.vertexShader,fragmentShader:vr.fragmentShader,blending:Ie}),this.ssaoMaterial.defines.KERNEL_SIZE=s,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new Ng,this.normalMaterial.blending=Ie,this.blurMaterial=new he({defines:Object.assign({},xr.defines),uniforms:gn.clone(xr.uniforms),vertexShader:xr.vertexShader,fragmentShader:xr.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new he({defines:Object.assign({},_r.defines),uniforms:gn.clone(_r.uniforms),vertexShader:_r.vertexShader,fragmentShader:_r.fragmentShader,blending:Ie}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new he({uniforms:gn.clone(Cs.uniforms),vertexShader:Cs.vertexShader,fragmentShader:Cs.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Ec,blendDst:Ro,blendEquation:Ln,blendSrcAlpha:Sc,blendDstAlpha:Ro,blendEquationAlpha:Ln}),this.fsQuad=new Br(null),this.originalClearColor=new Ot}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(t,e,n){switch(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this.renderPass(t,this.ssaoMaterial,this.ssaoRenderTarget),this.renderPass(t,this.blurMaterial,this.blurRenderTarget),this.output){case Gn.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=Ie,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case Gn.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=Ie,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case Gn.OUTPUT.Depth:this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:n);break;case Gn.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Ie,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case Gn.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=yc,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}renderPass(t,e,n,i,s){t.getClearColor(this.originalClearColor);const o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i!=null&&(t.setClearColor(i),t.setClearAlpha(s||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=a,t.setClearColor(this.originalClearColor),t.setClearAlpha(o)}renderOverride(t,e,n,i,s){t.getClearColor(this.originalClearColor);const o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i=e.clearColor||i,s=e.clearAlpha||s,i!=null&&(t.setClearColor(i),t.setClearAlpha(s||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this.originalClearColor),t.setClearAlpha(o)}setSize(t,e){this.width=t,this.height=e,this.ssaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.blurRenderTarget.setSize(t,e),this.ssaoMaterial.uniforms.resolution.value.set(t,e),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(t,e)}generateSampleKernel(t){const e=this.kernel;for(let n=0;n<t;n++){const i=new X;i.x=Math.random()*2-1,i.y=Math.random()*2-1,i.z=Math.random(),i.normalize();let s=n/t;s=Mu.lerp(.1,1,s*s),i.multiplyScalar(s),e.push(i)}}generateRandomKernelRotations(){const n=new b_,i=4*4,s=new Float32Array(i);for(let o=0;o<i;o++){const a=Math.random()*2-1,l=Math.random()*2-1,c=0;s[o]=n.noise3d(a,l,c)}this.noiseTexture=new ih(s,4,4,Ur,an),this.noiseTexture.wrapS=oi,this.noiseTexture.wrapT=oi,this.noiseTexture.needsUpdate=!0}overrideVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){e.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){const i=e.get(n);n.visible=i}),e.clear()}}Gn.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};const w_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class T_ extends di{constructor(){super();const t=w_;this.uniforms=gn.clone(t.uniforms),this.material=new Dg({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Br(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Qt.getTransfer(this._outputColorSpace)===re&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===wc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Tc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ac?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===fa?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Cc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Rc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class zr extends ve{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.camera=new qe;const n=this,i=e.color!==void 0?new Ot(e.color):new Ot(8355711),s=e.textureWidth||512,o=e.textureHeight||512,a=e.clipBias||0,l=e.shader||zr.ReflectorShader,c=e.multisample!==void 0?e.multisample:4,h=new Vn,d=new X,u=new X,p=new X,g=new ne,v=new X(0,0,-1),f=new ce,m=new X,_=new X,M=new ce,E=new ne,L=this.camera,A=new Fe(s,o,{samples:c,type:Xe}),C=new he({name:l.name!==void 0?l.name:"unspecified",uniforms:gn.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});C.uniforms.tDiffuse.value=A.texture,C.uniforms.color.value=i,C.uniforms.textureMatrix.value=E,this.material=C,this.onBeforeRender=function(N,w,S){if(u.setFromMatrixPosition(n.matrixWorld),p.setFromMatrixPosition(S.matrixWorld),g.extractRotation(n.matrixWorld),d.set(0,0,1),d.applyMatrix4(g),m.subVectors(u,p),m.dot(d)>0)return;m.reflect(d).negate(),m.add(u),g.extractRotation(S.matrixWorld),v.set(0,0,-1),v.applyMatrix4(g),v.add(p),_.subVectors(u,v),_.reflect(d).negate(),_.add(u),L.position.copy(m),L.up.set(0,1,0),L.up.applyMatrix4(g),L.up.reflect(d),L.lookAt(_),L.far=S.far,L.updateMatrixWorld(),L.projectionMatrix.copy(S.projectionMatrix),E.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),E.multiply(L.projectionMatrix),E.multiply(L.matrixWorldInverse),E.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(d,u),h.applyMatrix4(L.matrixWorldInverse),f.set(h.normal.x,h.normal.y,h.normal.z,h.constant);const P=L.projectionMatrix;M.x=(Math.sign(f.x)+P.elements[8])/P.elements[0],M.y=(Math.sign(f.y)+P.elements[9])/P.elements[5],M.z=-1,M.w=(1+P.elements[10])/P.elements[14],f.multiplyScalar(2/f.dot(M)),P.elements[2]=f.x,P.elements[6]=f.y,P.elements[10]=f.z+1-a,P.elements[14]=f.w,n.visible=!1;const H=N.getRenderTarget(),I=N.xr.enabled,z=N.shadowMap.autoUpdate;N.xr.enabled=!1,N.shadowMap.autoUpdate=!1,N.setRenderTarget(A),N.state.buffers.depth.setMask(!0),N.autoClear===!1&&N.clear(),N.render(w,L),N.xr.enabled=I,N.shadowMap.autoUpdate=z,N.setRenderTarget(H);const k=S.viewport;k!==void 0&&N.state.viewport(k),n.visible=!0},this.getRenderTarget=function(){return A},this.dispose=function(){A.dispose(),n.material.dispose()}}}zr.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};function kr(r){const t=Number(r);return Number.isFinite(t)?(Math.round(t)%1440+1440)%1440:720}function A_(r){const t=kr(r),e=Math.floor(t/60),n=t%60;return`${String(e).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function C_(r){const t=kr(r)/60;return t>=5&&t<7?"DAWN":t>=7&&t<11?"MORNING":t>=11&&t<14?"NOON":t>=14&&t<17?"AFTERNOON":t>=17&&t<19.5?"SUNSET":t>=19.5&&t<21.5?"DUSK":"NIGHT"}const Mr=[{t:0,top:[7,9,20],horizon:[10,12,24],fog:[6,8,16],sun:[.18,.22,.35],sunI:.04,hemi:.1,ground:[6,7,12]},{t:5.4,top:[18,22,48],horizon:[255,120,64],fog:[48,28,40],sun:[1,.48,.22],sunI:.55,hemi:.32,ground:[28,18,16]},{t:7,top:[92,148,214],horizon:[255,196,138],fog:[150,170,190],sun:[1,.86,.62],sunI:1.35,hemi:.72,ground:[42,40,36]},{t:12,top:[118,176,236],horizon:[186,214,238],fog:[168,188,210],sun:[1,.98,.92],sunI:2.15,hemi:1.12,ground:[48,46,42]},{t:16.2,top:[86,142,210],horizon:[255,168,96],fog:[160,150,140],sun:[1,.78,.48],sunI:1.55,hemi:.78,ground:[44,36,30]},{t:18.4,top:[28,36,78],horizon:[255,86,42],fog:[70,40,38],sun:[1,.38,.16],sunI:.62,hemi:.28,ground:[24,16,14]},{t:20.6,top:[8,10,24],horizon:[18,20,38],fog:[8,10,18],sun:[.2,.24,.4],sunI:.06,hemi:.12,ground:[8,8,14]},{t:24,top:[7,9,20],horizon:[10,12,24],fog:[6,8,16],sun:[.18,.22,.35],sunI:.04,hemi:.1,ground:[6,7,12]}];function ti(r,t,e){return r+(t-r)*e}function R_(r,t,e){return{top:r.top.map((n,i)=>ti(n,t.top[i],e)),horizon:r.horizon.map((n,i)=>ti(n,t.horizon[i],e)),fog:r.fog.map((n,i)=>ti(n,t.fog[i],e)),sun:r.sun.map((n,i)=>ti(n,t.sun[i],e)),ground:r.ground.map((n,i)=>ti(n,t.ground[i],e)),sunI:ti(r.sunI,t.sunI,e),hemi:ti(r.hemi,t.hemi,e)}}function mh(r){const t=kr(r)/60;let e=0;for(;e<Mr.length-1&&t>Mr[e+1].t;)e+=1;const n=Mr[e],i=Mr[e+1],s=(t-n.t)/Math.max(1e-4,i.t-n.t),o=R_(n,i,s),a=Math.sin((t-6)/12*Math.PI),l=(t-6)/12*Math.PI;return{...o,hour:t,elev:a,azim:l,night:t<5.2||t>20.2?1:t<6.4||t>19?.55:0,cssTop:`rgb(${o.top.map(c=>Math.round(c)).join(",")})`,cssHorizon:`rgb(${o.horizon.map(c=>Math.round(c)).join(",")})`}}const P_=[{id:"dawn",label:"DAWN",minutes:375},{id:"morning",label:"MORNING",minutes:540},{id:"noon",label:"NOON",minutes:720},{id:"sunset",label:"SUNSET",minutes:1110},{id:"night",label:"NIGHT",minutes:1320}],dc={KeyW:"forward",KeyS:"back",KeyA:"left",KeyD:"right",ShiftLeft:"sprint",ShiftRight:"sprint",KeyC:"crouch",KeyX:"prone",KeyQ:"leanLeft",KeyE:"leanRight"};function yr(r){const t="/soldatox/";return`${t.endsWith("/")?t:`${t}/`}${String(r).replace(/^\/+/,"")}`}const fc=.0022,L_=-1.45,I_=1.45,D_=2.15;function N_(r,t){const e={onPauseRequest:null},n=new Rg({canvas:r,antialias:!0,powerPreference:"high-performance"});n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.setSize(window.innerWidth,window.innerHeight,!1),n.shadowMap.enabled=!0,n.shadowMap.type=Mc,n.outputColorSpace=We,n.toneMapping=fa,n.toneMappingExposure=1.05;const i=new Pg;i.background=new Ot(7778540),i.fog=new Ra(11585756,40,160);const s=new qe(90,window.innerWidth/window.innerHeight,.08,2e3),o=new ae,a=new ae,l=new ae;o.position.set(0,1.7,8),i.add(o),o.add(a),a.add(l),l.add(s),s.position.set(0,0,0),s.rotation.set(0,0,0);let c=0,h=0,d=!1,u=!1,p=0,g=!1,v=!0,f=!1,m=0,_=0;const M=new zg(14147818,2763306,1);i.add(M);const E=new Vl(16777215,1.8);E.castShadow=!0,E.shadow.mapSize.set(2048,2048),E.shadow.camera.near=1,E.shadow.camera.far=160,E.shadow.camera.left=-50,E.shadow.camera.right=50,E.shadow.camera.top=50,E.shadow.camera.bottom=-50,E.shadow.bias=-25e-5,i.add(E),i.add(E.target);const L=new Vl(10205183,.15);i.add(L);const A=new he({side:De,depthWrite:!1,fog:!1,toneMapped:!1,uniforms:{top:{value:new Ot(7778540)},horizon:{value:new Ot(13624565)},groundCol:{value:new Ot(657930)},sunDir:{value:new X(.2,.9,.2)},sunColor:{value:new Ot(1,.96,.82)},night:{value:0},rain:{value:0},time:{value:0}},vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        vec4 clip = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_Position = clip.xyww;
      }
    `,fragmentShader:`
      varying vec3 vDir;
      uniform vec3 top;
      uniform vec3 horizon;
      uniform vec3 groundCol;
      uniform vec3 sunDir;
      uniform vec3 sunColor;
      uniform float night;
      uniform float rain;
      uniform float time;
      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
      }
      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
      }
      float fbm(vec2 p) {
        float v = 0.0;
        v += noise(p) * 0.5;
        v += noise(p * 2.03) * 0.25;
        v += noise(p * 4.11) * 0.125;
        v += noise(p * 8.07) * 0.0625;
        return v;
      }
      void main() {
        vec3 dir = normalize(vDir);
        float elev = clamp(dir.y * 0.5 + 0.5, 0.0, 1.0);
        vec3 col;
        if (elev > 0.28) {
          float t = clamp((elev - 0.28) / 0.72, 0.0, 1.0);
          col = mix(horizon, top, pow(t, 0.82));
        } else {
          float t = clamp(elev / 0.28, 0.0, 1.0);
          col = mix(groundCol, horizon, pow(t, 1.35));
        }
        vec3 sdir = normalize(sunDir);
        float sunDot = max(dot(dir, sdir), 0.0);
        float disk = pow(sunDot, 860.0);
        float glow = pow(sunDot, 8.0) * 0.32;
        float halo = pow(sunDot, 2.0) * 0.14;
        float sunAmt = (1.0 - night) * (1.0 - rain * 0.94);
        col += sunColor * (disk * 1.55 + glow + halo) * sunAmt;
        float moonDot = max(dot(dir, -sdir), 0.0);
        col += vec3(0.82, 0.88, 1.0) * pow(moonDot, 1200.0) * night * (1.0 - rain);
        if (dir.y > -0.08) {
          vec2 uv = dir.xz / max(dir.y + 0.42, 0.06);
          uv += sdir.xz * 0.12 + vec2(time * 0.003, time * 0.002);
          float c = fbm(uv * mix(1.8, 3.6, rain));
          float cover = mix(0.22, 0.88, rain);
          float clouds = smoothstep(1.0 - cover, 1.05, c);
          vec3 cloudCol = mix(vec3(0.93, 0.95, 0.98), mix(horizon, vec3(0.36, 0.39, 0.43), 0.55), rain);
          cloudCol = mix(cloudCol, sunColor, glow * 0.35 * (1.0 - rain));
          col = mix(col, cloudCol, clouds * mix(0.32, 0.84, rain) * smoothstep(-0.05, 0.2, dir.y));
        }
        if (rain > 0.5) {
          col = mix(col, mix(horizon, vec3(0.34, 0.38, 0.42), 0.5), 0.22);
        }
        gl_FragColor = vec4(col, 1.0);
      }
    `}),C=new ve(new La(12,64,32),A);C.frustumCulled=!1,C.renderOrder=-100,i.add(C);const N=new Ze,w=new Float32Array(700*3);for(let Q=0;Q<700;Q+=1){const y=Math.random()*Math.PI*2,D=Math.acos(Math.random()*.78+.08);w[Q*3]=Math.sin(D)*Math.cos(y)*7.4,w[Q*3+1]=Math.cos(D)*7.4,w[Q*3+2]=Math.sin(D)*Math.sin(y)*7.4}N.setAttribute("position",new Ke(w,3));const S=new Ig(N,new sh({color:16777215,size:.035,sizeAttenuation:!1,transparent:!0,opacity:0,depthWrite:!1,fog:!1,toneMapped:!1}));S.frustumCulled=!1,C.add(S);const P=2600,H=new Float32Array(P*4);for(let Q=0;Q<P;Q+=1)H[Q*4]=(Math.random()-.5)*64,H[Q*4+1]=Math.random()*24,H[Q*4+2]=(Math.random()-.5)*64,H[Q*4+3]=16+Math.random()*18;const I=new ae,z=new Fl(new vn(.012,.58,.012),new Is({color:13228006,transparent:!0,opacity:.42,depthWrite:!1,side:sn,fog:!0}),P);z.frustumCulled=!1,z.visible=!1,z.renderOrder=4,i.add(z);const k=160,O=Array.from({length:k},()=>({x:0,z:0,t:99,life:.3}));let j=0;const G=new ae,Y=new Fl(new Pa(1,14),new Is({color:14017262,transparent:!0,opacity:.55,depthWrite:!1,side:sn}),k);Y.frustumCulled=!1,Y.visible=!1,Y.renderOrder=3,i.add(Y);const ot=new Zc(256,{type:Xe,colorSpace:We}),lt=new jc(.3,280,ot);i.add(lt);const nt=new ve(new Qi(140,140,128,128),new _o({color:4867908,roughness:1,metalness:.04,envMap:ot.texture,envMapIntensity:.7}));nt.rotation.x=-Math.PI/2,nt.receiveShadow=!0,nt.material.userData.pbr=!0,i.add(nt);const At=new zr(new Qi(90,90),{clipBias:.003,textureWidth:1024,textureHeight:1024,color:8227736});At.rotation.x=-Math.PI/2,At.position.y=.035,At.visible=!1,At.material.transparent=!0,At.material.depthWrite=!1,At.material.uniforms.uTime={value:0},At.material.onBeforeCompile=Q=>{Q.vertexShader=Q.vertexShader.replace("void main() {",`varying vec2 vWorldXZ;
void main() {
	vWorldXZ = (modelMatrix * vec4(position, 1.0)).xz;`),Q.fragmentShader=Q.fragmentShader.replace("uniform vec3 color;",`uniform vec3 color;
uniform float uTime;
varying vec2 vWorldXZ;`).replace("gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );",`
        vec2 cell = vWorldXZ * 0.095;
        vec2 gv = fract(cell) - 0.5;
        float n = fract(sin(dot(floor(cell), vec2(27.1, 91.7))) * 43758.5453);
        vec2 stretch = vec2(1.0, 0.62 + n * 0.5);
        float ripple = sin(length(vWorldXZ) * 7.5 - uTime * 6.0) * 0.04;
        float blob = 1.0 - smoothstep(0.08 + n * 0.06, 0.34 + n * 0.16, length(gv * stretch) + ripple);
        blob *= step(0.22, n);
        vec3 wet = mix(blendOverlay(base.rgb, color), base.rgb * vec3(0.78, 0.84, 0.9), 0.28);
        gl_FragColor = vec4(wet, blob * 0.78);
        `),Q.uniforms.uTime=At.material.uniforms.uTime},i.add(At),F_(nt);const K=new _o({color:3948614,roughness:.42,metalness:.28,envMap:ot.texture,envMapIntensity:.9}),it=new _o({color:9081244,roughness:.18,metalness:.92,envMap:ot.texture,envMapIntensity:1.4}),ht=new c_({gravity:new b(0,-22,0)});ht.broadphase=new Wi(ht),ht.allowSleep=!0,ht.solver.iterations=10,ht.defaultContactMaterial.friction=0,ht.defaultContactMaterial.restitution=0;const gt=new ts("ground"),bt=new ts("player");ht.addContactMaterial(new Bs(bt,gt,{friction:0,restitution:0}));const Lt=new St({mass:0,shape:new q0,material:gt});Lt.quaternion.setFromEuler(-Math.PI/2,0,0),ht.addBody(Lt);const yt=.85,Ct=new St({mass:90,shape:new Ds(new b(.32,yt,.32)),position:new b(0,yt+.02,8),fixedRotation:!0,allowSleep:!1,linearDamping:0,material:bt});Ct.allowSleep=!1,ht.addBody(Ct);const U=[];for(let Q=0;Q<22;Q+=1){const y=.7+Math.random()*.9,D=.7+Math.random()*1.1,q=.7+Math.random()*.9,W=Q%5===0?it:K,F=new ve(new vn(y,D,q),W);let rt=(Math.random()-.5)*48,ft=(Math.random()-.5)*48;Math.hypot(rt,ft-8)<4&&(ft+=8),F.position.set(rt,D/2+.03,ft),F.castShadow=!0,F.receiveShadow=!0,i.add(F);const ct=new St({mass:0,type:St.STATIC,shape:new Ds(new b(y/2,D/2,q/2)),position:new b(rt,D/2+.03,ft)});ht.addBody(ct),U.push({mesh:F,body:ct,origin:{x:rt,y:D/2+.03,z:ft}})}const Ht=U_(),Gt=Ht.group;Gt.visible=!1,i.add(Gt);const Dt={stance:"stand",lean:0,active:!1},mt={forward:!1,back:!1,left:!1,right:!1,sprint:!1,crouch:!1,prone:!1,leanLeft:!1,leanRight:!1};function jt(){mt.forward=!1,mt.back=!1,mt.left=!1,mt.right=!1,mt.sprint=!1,mt.crouch=!1,mt.prone=!1,mt.leanLeft=!1,mt.leanRight=!1}function Ut(){var y;const Q=(y=document.activeElement)==null?void 0:y.tagName;return g||Q==="INPUT"||Q==="TEXTAREA"}function R(Q,y){if(y&&Ut())return;if(!y){const q=dc[Q.code];if(q&&(mt[q]=!1),Ut())return}if(Q.code==="KeyV"&&y&&Dt.active&&!Rt){u=!u;return}const D=dc[Q.code];D&&(mt[D]=y,Q.preventDefault())}const T=Q=>R(Q,!0),x=Q=>R(Q,!1);window.addEventListener("keydown",T,!0),window.addEventListener("keyup",x,!0);function B(Q){!d||!Dt.active||Rt||(c-=Q.movementX*fc,h-=Q.movementY*fc,h=Math.max(L_,Math.min(I_,h)),o.rotation.set(0,c,0),a.rotation.set(h,0,0))}document.addEventListener("mousemove",B);let $=performance.now(),Z=0,et=0,Tt=0,pt=performance.now(),vt=!0,Rt=!1,st=!1,ut=null,Wt=null,Pt=null,Mt=0;const kt=new b,Vt=new b,Kt=new Ns;function V(){return kt.set(Ct.position.x,Ct.position.y,Ct.position.z),Vt.set(Ct.position.x,Ct.position.y-yt-.14,Ct.position.z),Kt.reset(),ht.raycastClosest(kt,Vt,{skipBackfaces:!0},Kt),Kt.hasHit&&Kt.body!==Ct?!0:Ct.position.y<=yt+.1&&Ct.velocity.y<=.4}const at=new X,J=new X,tt=new Gg,dt=new X;function zt(){return Dt.stance==="prone"?.42:Dt.stance==="crouch"?1.05:1.7}function Yt(){return Dt.stance==="prone"?1:Dt.stance==="crouch"?1.9:mt.sprint?5:3.1}function le(Q,y,D){const q=mt.sprint?7.4:4.6;y&&D&&(m+=Q*q);const W=y&&D?mt.sprint?.72:.5:0;_+=(W-_)*Math.min(1,Q*8);const F=Math.sin(m)*_;Ht.armL.rotation.x=F,Ht.armR.rotation.x=-F,Ht.legL.rotation.x=-F*1.08,Ht.legR.rotation.x=F*1.08,Ht.body.rotation.x=_*.1,Dt.stance==="crouch"?Ht.group.scale.set(1,.78,1):Dt.stance==="prone"?Ht.group.scale.set(1,.38,1):Ht.group.scale.set(1,1,1)}function me(Q,y){const D=O[j%k];j+=1,D.x=Q,D.z=y,D.t=0,D.life=.22+Math.random()*.18}function Zt(Q){const y=f&&st;if(z.visible=y,Y.visible=y,At.visible=y,!y)return;At.material.uniforms.uTime.value+=Q;const D=o.position.x,q=o.position.z;for(let W=0;W<P;W+=1){const F=W*4;H[F+1]-=H[F+3]*Q,H[F]+=1.35*Q,H[F+1]<=.02&&(me(D+H[F],q+H[F+2]),H[F]=(Math.random()-.5)*64,H[F+1]=10+Math.random()*16,H[F+2]=(Math.random()-.5)*64,H[F+3]=16+Math.random()*18),I.position.set(D+H[F],H[F+1],q+H[F+2]),I.rotation.set(.12,0,.08),I.updateMatrix(),z.setMatrixAt(W,I.matrix)}z.instanceMatrix.needsUpdate=!0;for(let W=0;W<k;W+=1){const F=O[W];F.t+=Q;const rt=Math.min(1,F.t/F.life),ct=F.t<F.life?.04+rt*.34:1e-4;G.position.set(F.x,.04,F.z),G.scale.set(ct,ct,ct),G.rotation.set(-Math.PI/2,0,0),G.updateMatrix(),Y.setMatrixAt(W,G.matrix)}Y.instanceMatrix.needsUpdate=!0,Y.material.opacity=.5}function Me(Q){return new Ot(Q[0]/255,Q[1]/255,Q[2]/255)}function Oe(){const Q=t().graphics,y=Q.rayTracing||Q.reflections==="ultra"||Q.reflections==="high"?1.25:Q.reflections==="off"?.18:.6,D=f?1:0;nt.material.roughness=D?.32:1,nt.material.metalness=D?.08:.04,nt.material.envMapIntensity=y*(D?1.9:.62),nt.material.color.setHex(D?12961996:16777215)}function fi(Q){const y=mh(Q);A.uniforms.top.value.copy(Me(y.top)),A.uniforms.horizon.value.copy(Me(y.horizon)),A.uniforms.groundCol.value.copy(Me(y.ground)),A.uniforms.night.value=y.night,A.uniforms.rain.value=f?1:0,A.uniforms.sunColor.value.setRGB(y.sun[0],y.sun[1],y.sun[2]),i.background=Me(f?y.horizon:y.top),i.fog.color.copy(Me(y.fog)),f&&i.fog.color.lerp(new Ot(6055792),.45),M.color.copy(Me(y.top)),M.groundColor.copy(Me(y.ground)),M.intensity=y.hemi*(f?.68:1);const D=90,q=Math.max(y.elev,-.25)*D;E.position.set(Math.cos(y.azim)*D,q,Math.sin(y.azim)*D),E.target.position.set(0,0,0),E.color.setRGB(y.sun[0],y.sun[1],y.sun[2]),E.intensity=Math.max(0,y.sunI)*(f?.18:1),A.uniforms.sunDir.value.copy(E.position).normalize(),L.position.copy(E.position).multiplyScalar(-1).setY(Math.abs(E.position.y)+18),L.intensity=f?.02:.05+y.night*.35,S.material.opacity=f?0:y.night,S.visible=!f&&y.night>.05,n.toneMappingExposure=f?.58+(1-y.night)*.12:.82+(1-y.night)*.35,Oe()}function xn(){const Q=t().graphics,y=new Bt;if(n.getSize(y),ut=new y_(n),ut.setSize(y.x,y.y),ut.addPass(new S_(i,s)),Wt=null,Pt=null,Q.ao&&Q.postProcessing)try{Pt=new Gn(i,s,y.x,y.y),Pt.kernelRadius=12,Pt.minDistance=.002,Pt.maxDistance=.08,ut.addPass(Pt)}catch{Pt=null}if(Q.bloom&&Q.postProcessing)try{Wt=new es(new Bt(y.x,y.y),.16,.38,.9),ut.addPass(Wt)}catch{Wt=null}ut.addPass(new T_)}function pi(){const Q=t().graphics,y=Math.min(window.devicePixelRatio,Q.pixelRatio||1);n.setPixelRatio(y),n.shadowMap.enabled=Q.shadows!=="off";const D=24+Q.viewDistance/100*160;i.fog.near=D*.22,i.fog.far=D,f&&(i.fog.near*=.5,i.fog.far*=.72),E.castShadow=Q.shadows!=="off";const W={low:512,medium:1024,high:2048,ultra:4096}[Q.shadowQuality]||1024;E.shadow.mapSize.set(W,W);const F=Q.rayTracing||Q.reflections==="ultra"||Q.reflections==="high"?1.25:Q.reflections==="off"?.15:.55;K.envMapIntensity=F,it.envMapIntensity=F+.3,Oe();try{xn()}catch{ut=null}}function os(){const Q=t().screen;s.fov=Q.fov,s.updateProjectionMatrix(),gi()}function zs(Q){if(Q==="native")return{w:window.innerWidth,h:window.innerHeight};const[y,D]=Q.split("x").map(Number);return{w:y,h:D}}function mi(Q,y){const D={"16:9":1.7777777777777777,"16:10":1.6,"4:3":1.3333333333333333,"21:9":2.3333333333333335};return Q==="auto"?y:D[Q]||y}function gi(){const Q=t().screen,y=document.getElementById("world"),D=window.innerWidth,q=window.innerHeight;let{w:W,h:F}=zs(Q.resolution),rt=mi(Q.aspect,W/F);const ft=!!Q.stretched;if(ft&&Q.aspect==="auto"&&(rt=4/3),F=Math.round(W/rt),ft)y.classList.remove("is-letterboxed"),y.classList.add("is-stretched"),r.style.width="100%",r.style.height="100%";else{y.classList.remove("is-stretched");const Ft=Math.min(D/W,q/F),wt=Math.round(W*Ft),$t=Math.round(F*Ft),ie=Q.resolution!=="native"||Q.aspect!=="auto";y.classList.toggle("is-letterboxed",ie),r.style.width=ie?`${wt}px`:"100%",r.style.height=ie?`${$t}px`:"100%"}n.setSize(W,F,!1),ut==null||ut.setSize(W,F),Pt==null||Pt.setSize(W,F),s.aspect=W/F,s.updateProjectionMatrix();const ct=.35+Q.brightness/100*1.25,xt=.7+Q.contrast/100*.8,It=Rt?"blur(16px) ":"";r.style.filter=`${It}brightness(${ct}) contrast(${xt})`}async function vi(Q){try{Q==="fullscreen"||Q==="borderless"?document.fullscreenElement||await document.documentElement.requestFullscreen():document.fullscreenElement&&await document.exitFullscreen()}catch{}}function as(){!Dt.active||Rt||r.requestPointerLock()}function ls(){d=document.pointerLockElement===r}function cs(){if(!v)return 9999;const Q=t().screen.fpsLimit;if(!Q||Q==="unlimited")return 9999;const y=Number(Q);return Number.isFinite(y)&&y>0?y:9999}function ks(Q){if(!vt)return;requestAnimationFrame(ks);const y=cs(),D=Math.min(.05,Math.max(0,(Q-$)/1e3));if($=Q,st){if(Dt.active&&!Rt){mt.prone?Dt.stance="prone":mt.crouch?Dt.stance="crouch":Dt.stance="stand";const ft=(mt.leanLeft?.16:0)+(mt.leanRight?-.16:0);Dt.lean+=(ft-Dt.lean)*Math.min(1,D*10),l.rotation.set(0,0,Dt.lean);const ct=new X;mt.forward&&(ct.z-=1),mt.back&&(ct.z+=1),mt.left&&(ct.x-=1),mt.right&&(ct.x+=1);const xt=ct.lengthSq()>0?Yt():0;xt&&ct.normalize();const It=Math.sin(c),Ft=Math.cos(c),wt=(ct.x*Ft+ct.z*It)*xt,$t=(-ct.x*It+ct.z*Ft)*xt,ie=V();Ct.wakeUp(),Ct.velocity.x=wt,Ct.velocity.z=$t,ht.step(1/60,D,4),Ct.velocity.x=wt,Ct.velocity.z=$t,o.position.x=Ct.position.x,o.position.z=Ct.position.z,o.position.y=Ct.position.y-yt+zt();for(const se of U)se.mesh.position.copy(se.body.position),se.mesh.quaternion.copy(se.body.quaternion);Gt.position.set(Ct.position.x,Ct.position.y-yt,Ct.position.z),Gt.rotation.y=c,le(D,xt>.2,ie)}p+=((u?1:0)-p)*Math.min(1,D*1.85),Gt.visible=Dt.active,Ht.head.visible=p>.4,Ht.armL.visible=p>.4,Ht.armR.visible=p>.4,Ht.body.visible=p>.4,Ht.legL.visible=p>.4,Ht.legR.visible=p>.4;const rt=p*D_;if(s.position.set(0,p*.28,rt),p>.05){s.getWorldPosition(at);const ft=new X(o.position.x,o.position.y,o.position.z);dt.subVectors(at,ft);const ct=dt.length();if(ct>.2){dt.normalize(),tt.set(ft,dt),tt.far=ct,tt.near=.15;const xt=tt.intersectObjects(U.map(It=>It.mesh).concat(nt),!1);if(xt.length&&xt[0].distance<ct){const It=Math.max(.35,xt[0].distance-.2);s.position.set(0,p*.28,It/ct*rt)}}}Zt(D),A.uniforms.time.value=Q*.001,s.getWorldPosition(J),C.position.copy(J)}if(y<9e3&&Q<Z||(Z=y<9e3?Q+1e3/y:0,et+=1,Mt+=1,Q-pt>=500&&(Tt=Math.min(y,Math.round(et*1e3/(Q-pt))),et=0,pt=Q),!st))return;const q=t().graphics;if(q.reflections!=="off"&&Mt%(f?2:7)===0){lt.position.copy(o.position),lt.position.y=Math.max(.6,o.position.y*.45),C.visible=!0;const F=f;F&&(z.visible=!1,Y.visible=!1,At.visible=!1),lt.update(n,i),F&&(z.visible=!0,Y.visible=!0,At.visible=!0)}if((q.postProcessing||q.rayTracing)&&ut)try{ut.render()}catch{n.render(i,s)}else n.render(i,s)}return requestAnimationFrame(ks),fi(720),Object.assign(e,{startPlay(Q=720,y={}){Dt.active=!0,Rt=!1,st=!0,u=!1,p=0,c=0,h=0,Dt.lean=0,f=!!y.rain,g=!1,m=0,_=0,jt(),Ct.position.set(0,yt+.02,8),Ct.velocity.set(0,0,0),Ct.angularVelocity.set(0,0,0),Ct.wakeUp();for(const D of U)D.body.position.set(D.origin.x,D.origin.y,D.origin.z),D.body.velocity.set(0,0,0),D.body.angularVelocity.set(0,0,0),D.body.quaternion.set(0,0,0,1),D.mesh.position.copy(D.body.position),D.mesh.quaternion.copy(D.body.quaternion);o.position.set(0,1.7,8),o.rotation.set(0,0,0),a.rotation.set(0,0,0),l.rotation.set(0,0,0),s.position.set(0,0,0),s.rotation.set(0,0,0),Gt.visible=!0,Ht.head.visible=!1,Ht.armL.visible=!1,Ht.armR.visible=!1,fi(Q),pi(),os(),r.addEventListener("click",as),document.addEventListener("pointerlockchange",ls)},stopPlay(){Dt.active=!1,Rt=!1,st=!1,d=!1,u=!1,f=!1,g=!1,z.visible=!1,Y.visible=!1,At.visible=!1,jt(),document.pointerLockElement&&document.exitPointerLock(),r.removeEventListener("click",as),document.removeEventListener("pointerlockchange",ls)},setPaused(Q){Rt=Q,st=!0,Q&&document.pointerLockElement&&document.exitPointerLock(),d=!1,gi()},setWorldLive(Q){st=Q},setTimeOfDay:fi,getFps:()=>Math.min(Tt,cs()),applyGraphics:pi,applyScreen:os,setDisplayMode:vi,setControlLock(Q){g=!!Q,g&&jt()},setFpsMax(Q){v=Number(Q)!==0},getFpsMax:()=>v?1:0,getFpsCap:()=>cs(),resize:gi,dispose(){vt=!1,window.removeEventListener("keydown",T,!0),window.removeEventListener("keyup",x,!0),document.removeEventListener("mousemove",B)}}),e}function U_(){const r=new Gi,t=new Cr({color:13010498,roughness:.7}),e=new Cr({color:4025149,roughness:.75}),n=new Cr({color:2898522,roughness:.75}),i=new ve(new vn(.34,.34,.34),t);i.position.y=1.52;const s=new ve(new vn(.38,.5,.2),e);s.position.y=1.1;function o(d,u,p,g,v,f){const m=new Gi;m.position.set(v,f,0);const _=new ve(new vn(d,u,p),g);return _.position.y=-u/2,_.castShadow=!0,_.receiveShadow=!0,m.add(_),r.add(m),m}const a=o(.12,.48,.12,e,-.26,1.32),l=o(.12,.48,.12,e,.26,1.32),c=o(.14,.62,.14,n,-.1,.77),h=o(.14,.62,.14,n,.1,.77);return i.castShadow=!0,s.castShadow=!0,r.add(i,s),{group:r,head:i,body:s,armL:a,armR:l,legL:c,legR:h}}function F_(r){const t=new Bg,e=28,n=(s,o)=>(s.wrapS=oi,s.wrapT=oi,s.repeat.set(e,e),s.anisotropy=8,s.colorSpace=o,s.needsUpdate=!0,s),i=r.material;i.map=n(t.load(yr("textures/cobble/diff.jpg")),We),i.normalMap=n(t.load(yr("textures/cobble/nor.png")),on),i.normalScale.set(1.4,1.4),i.roughnessMap=n(t.load(yr("textures/cobble/rough.png")),on),i.displacementMap=n(t.load(yr("textures/cobble/disp.png")),on),i.displacementScale=.1,i.displacementBias=-.03,i.color.set(16777215),i.needsUpdate=!0}const Ss=[{id:"sandbox",name:"SANDBOX",art:"sandbox",locked:!1},{id:"range",name:"MAP",art:"soon",locked:!0},{id:"factory",name:"MAP",art:"soon",locked:!0},{id:"harbor",name:"MAP",art:"soon",locked:!0},{id:"outpost",name:"MAP",art:"soon",locked:!0}],O_=[["native","NATIVE"],["1280x720","1280 x 720"],["1366x768","1366 x 768"],["1600x900","1600 x 900"],["1920x1080","1920 x 1080"],["2560x1440","2560 x 1440"],["3840x2160","3840 x 2160"]];function B_(r,{settings:t,engine:e,onQuitToMenu:n}){let i="menu",s="menu",o=null,a=720,l="clear",c="",h=4,d="sandbox",u=null,p=[],g=!1,v=0,f=!1;r.innerHTML=`
    <section class="screen is-on" data-screen="menu">
      <h1 class="title-xl">SolDatoX</h1>
      <nav class="menu-stack">
        <button class="menu-btn" data-act="play">Play</button>
        <button class="menu-btn" data-act="multi">Multiplayer</button>
        <button class="menu-btn" data-act="mods">Mods</button>
        <button class="menu-btn" data-act="options">Options</button>
        <button class="menu-btn" data-act="exit">Exit</button>
      </nav>
    </section>

    <section class="screen" data-screen="loading">
      <h1 class="title-xl">SolDatoX</h1>
      <div class="loading-center">
        <div class="loading-label">LOADING</div>
        <div class="loading-bar"><span></span></div>
        <div class="loading-hint" id="load-hint">PREPARING</div>
      </div>
    </section>

    <section class="screen" data-screen="maps">
      <h1 class="title-xl compact">SELECT MAP</h1>
      <div class="maps-wrap">
        <div class="maps-grid" id="maps-grid"></div>
      </div>
      <button class="corner-btn left" data-act="back-maps">BACK</button>
      <button class="corner-btn right is-hidden" id="play-map" data-act="start-map">PLAY</button>
    </section>

    <section class="screen" data-screen="time">
      <h1 class="title-xl compact">TIME OF DAY</h1>
      <div class="time-stage">
        <div class="time-sky" id="time-sky"><div class="time-rain"></div></div>
        <div class="time-clock" id="time-clock">12:00</div>
        <div class="time-period" id="time-period">NOON</div>
        <div class="preset-row time-presets">
          ${P_.map(R=>`<button class="chip" data-minutes="${R.minutes}">${R.label}</button>`).join("")}
        </div>
        <div class="weather-label">WEATHER</div>
        <div class="preset-row time-presets">
          <button class="chip" data-weather="clear">CLEAR</button>
          <button class="chip" data-weather="rain">RAIN</button>
        </div>
        <div class="time-slider-wrap">
          <input class="slider" id="time-slider" type="range" min="0" max="1439" value="720" />
        </div>
      </div>
      <button class="corner-btn left" data-act="back-time">BACK</button>
      <button class="corner-btn right" data-act="play-time">PLAY</button>
    </section>

    <section class="screen" data-screen="options">
      <h1 class="title-xl compact">OPTIONS</h1>
      <div class="options-tabs">
        <button class="tab-btn is-active" data-tab="screen">SCREEN</button>
        <button class="tab-btn" data-tab="graphics">GRAPHICS</button>
        <button class="tab-btn" data-tab="audio">AUDIO</button>
        <button class="tab-btn" data-tab="extra">EXTRA</button>
      </div>
      <div class="options-body" id="options-body"></div>
      <button class="corner-btn left" data-act="back-options">BACK</button>
    </section>

    <section class="screen" data-screen="mp-name">
      <h1 class="title-xl compact">NAME</h1>
      <div class="mp-form">
        <div class="opt-label">PLAYER NAME</div>
        <input class="mp-input" id="mp-player-name" maxlength="16" autocomplete="off" spellcheck="false" placeholder="ENTER NAME" />
      </div>
      <button class="corner-btn left" data-act="back-mp-name">BACK</button>
      <button class="corner-btn right is-disabled" id="mp-name-go" data-act="mp-name-go">CONTINUE</button>
    </section>

    <section class="screen" data-screen="mp-hub">
      <h1 class="title-xl compact">MULTIPLAYER</h1>
      <div class="mp-form">
        <div class="mp-signed" id="mp-signed"></div>
        <nav class="mp-hub-nav">
          <button class="menu-btn" data-act="mp-create">Create Match</button>
          <button class="menu-btn" data-act="mp-join">Join Match</button>
        </nav>
      </div>
      <button class="corner-btn left" data-act="back-mp-hub">BACK</button>
    </section>

    <section class="screen" data-screen="mp-create">
      <h1 class="title-xl compact">CREATE MATCH</h1>
      <div class="mp-form">
        <div class="opt-row">
          <div class="opt-label">LOBBY NAME</div>
          <div class="opt-control">
            <input class="mp-input mp-input-row" id="mp-lobby-name" maxlength="18" autocomplete="off" spellcheck="false" placeholder="NAME" />
          </div>
        </div>
        <div class="opt-row">
          <div class="opt-label">PLAYERS</div>
          <div class="opt-control mp-chips" id="mp-max-chips">
            <button type="button" class="chip" data-mp-max="2">2</button>
            <button type="button" class="chip is-on" data-mp-max="4">4</button>
            <button type="button" class="chip" data-mp-max="8">8</button>
            <button type="button" class="chip" data-mp-max="16">16</button>
          </div>
        </div>
        <div class="opt-label" style="margin-top:18px">MAP</div>
        <div class="mp-maps" id="mp-maps"></div>
      </div>
      <button class="corner-btn left" data-act="back-mp-create">BACK</button>
      <button class="corner-btn right" data-act="mp-create-go">CREATE</button>
    </section>

    <section class="screen" data-screen="mp-join">
      <h1 class="title-xl compact">JOIN MATCH</h1>
      <div class="mp-form">
        <div class="mp-row-list" id="mp-join-list"></div>
      </div>
      <button class="corner-btn left" data-act="back-mp-join">BACK</button>
    </section>

    <section class="screen" data-screen="mp-lobby">
      <h1 class="title-xl compact" id="mp-lobby-title">LOBBY</h1>
      <div class="mp-form">
        <div class="mp-lobby-meta" id="mp-lobby-meta"></div>
        <ul class="mp-players" id="mp-players"></ul>
        <div class="mp-note">MENU TEST ONLY</div>
      </div>
      <button class="corner-btn left" data-act="back-mp-lobby">BACK</button>
      <button class="corner-btn right" data-act="mp-start">START</button>
    </section>

    <section class="screen" data-screen="pause">
      <h1 class="title-xl">PAUSE</h1>
      <nav class="menu-stack">
        <button class="menu-btn" data-act="resume">Resume</button>
        <button class="menu-btn" data-act="options-pause">Options</button>
        <button class="menu-btn" data-act="quit">Quit</button>
      </nav>
    </section>

    <section class="screen" data-screen="exit">
      <div class="exit-screen">
        <h1 class="title-xl" style="position:relative;top:auto;left:auto">SolDatoX</h1>
      </div>
    </section>

    <div class="overlay-msg" id="toast" hidden></div>

    <div class="dev-console" id="dev-console" hidden>
      <div class="dev-console-log" id="dev-console-log"></div>
      <label class="dev-console-row">
        <span>]</span>
        <input id="dev-console-input" maxlength="180" autocomplete="off" spellcheck="false" />
      </label>
    </div>

    <div class="hud-layer" id="hud" hidden>
      <div class="crosshair" id="crosshair">
        <span class="n"></span><span class="s"></span><span class="w"></span><span class="e"></span>
        <span class="dot"></span><span class="ring"></span>
      </div>
      <div class="hud-hp" id="hud-hp">
        <span class="hp-cur">100</span><span class="hp-rest">/100</span>
      </div>
      <div class="fps-readout" id="fps"></div>
      <div class="chat-box" id="chat">
        <input id="chat-input" maxlength="120" placeholder="SAY..." />
      </div>
      <div class="inv-box" id="inv">
        <div class="inv-title">INVENTORY</div>
        <div class="inv-grid">
          ${Array.from({length:15},()=>'<div class="inv-slot"></div>').join("")}
        </div>
      </div>
    </div>
  `;const m=r.querySelector("#maps-grid");m.innerHTML=Ss.map(R=>`
    <button class="map-card ${R.locked?"is-locked":""}" data-map="${R.id}" ${R.locked?"disabled":""}>
      <div class="map-art ${R.art}"></div>
      ${R.locked?'<div class="map-tag">COMING SOON</div>':""}
      <div class="map-name">${R.name}</div>
    </button>`).join("");const _=r.querySelector("#mp-maps");_.innerHTML=Ss.map(R=>`
    <button class="map-card ${R.locked?"is-locked":"is-selected"}" data-mp-map="${R.id}" ${R.locked?"disabled":""}>
      <div class="map-art ${R.art}"></div>
      ${R.locked?'<div class="map-tag">COMING SOON</div>':""}
      <div class="map-name">${R.name}</div>
    </button>`).join(""),To(r);function M(R){i=R,r.querySelectorAll(".screen").forEach(B=>{B.classList.toggle("is-on",B.dataset.screen===R),B.classList.toggle("is-over-game",R==="options"&&s==="pause"&&B.dataset.screen==="options")});const T=document.getElementById("world"),x=R==="none"||R==="pause"||R==="options"&&s==="pause";if(T.classList.toggle("is-paused",R==="pause"),T.classList.toggle("is-options-over-game",R==="options"&&s==="pause"),T.classList.toggle("is-playing",R==="none"),T.classList.toggle("is-live",x),e.setWorldLive(x),R==="loading"){const B=r.querySelector(".loading-bar span");B.style.animation="none",B.offsetWidth,B.style.animation="loadfill 1.15s ease forwards"}}function E(){i==="game"&&(f=!0,j(),e.setPaused(!0),r.querySelector("#hud").hidden=!0,M("pause"),window.setTimeout(()=>{f=!1},80))}function L(R){return R.code==="Backquote"||R.key==="`"||R.key==="~"}function A(){const R=r.querySelector("#dev-console");R.hidden=!1,R.classList.add("is-on");const T=r.querySelector("#dev-console-log");T.dataset.ready||(T.dataset.ready="1",w("Console ready. Type fps_max 1 or fps_max 0"));const x=r.querySelector("#dev-console-input");x.value="",x.focus(),e.setControlLock(!0)}function C(){const R=r.querySelector("#dev-console");R.classList.remove("is-on"),R.hidden=!0,r.querySelector("#dev-console-input").blur(),e.setControlLock(!1)}function N(){return r.querySelector("#dev-console").classList.contains("is-on")}function w(R){const T=r.querySelector("#dev-console-log"),x=document.createElement("div");x.textContent=R,T.appendChild(x),T.scrollTop=T.scrollHeight}function S(R){const T=R.trim();if(!T)return;w(`] ${T}`);const[x,B]=T.split(/\s+/);if(x.toLowerCase()==="fps_max"){if(B===void 0){w(`"fps_max" = "${e.getFpsMax()}" (cap ${e.getFpsCap()})`);return}if(B==="1"){e.setFpsMax(1),w('"fps_max" = "1"'),w(`cap ${e.getFpsCap()} (settings)`);return}if(B==="0"){e.setFpsMax(0),w('"fps_max" = "0"'),w("cap 9999");return}w("usage: fps_max 1 | fps_max 0");return}w(`unknown command: ${x}`)}let P=0;function H(R){const T=r.querySelector("#toast");T.textContent=R,T.hidden=!1,T.classList.remove("is-on"),T.offsetWidth,T.classList.add("is-on"),clearTimeout(P),P=window.setTimeout(()=>{T.classList.remove("is-on"),T.hidden=!0},1400)}function I(R,T){r.querySelector("#load-hint").textContent=T,R==="quit-menu"&&(r.querySelector("#hud").hidden=!0,r.querySelector("#chat").classList.remove("is-on"),r.querySelector("#inv").classList.remove("is-on"),e.setControlLock(!1),C()),M("loading"),clearTimeout(v),v=window.setTimeout(()=>{R==="game"?z():R==="quit-menu"?(k(),M("menu"),n==null||n()):M(R)},1200)}function z(){M("none"),document.getElementById("world").classList.add("is-playing"),r.querySelector("#hud").hidden=!1,G(),e.startPlay(a,{rain:l==="rain"}),i="game",g=!1,r.querySelector("#hud").classList.remove("is-stealth")}function k(){e.stopPlay(),document.getElementById("world").classList.remove("is-playing","is-paused","is-options-over-game","is-live"),r.querySelector("#hud").hidden=!0,r.querySelector("#chat").classList.remove("is-on"),r.querySelector("#inv").classList.remove("is-on"),e.setControlLock(!1),C(),g=!1,r.querySelector("#hud").classList.remove("is-stealth")}function O(){r.querySelector("#chat").classList.add("is-on");const T=r.querySelector("#chat-input");T.value="",T.focus(),e.setControlLock(!0)}function j(){r.querySelector("#chat").classList.remove("is-on"),r.querySelector("#chat-input").blur(),e.setControlLock(!1)}function G(){const R=t.extra;document.documentElement.style.setProperty("--hud",R.hudColor);const T=r.querySelector("#hud"),x=R.hudScale/100;T.style.opacity=String(R.hudOpacity/100),T.style.transform="none",T.style.setProperty("--hud-scale",String(x)),r.querySelectorAll(".crosshair").forEach(B=>z_(B,R)),r.querySelector("#fps").style.display=R.showFps?"block":"none"}function Y(){qi(t.audio),e.applyGraphics(),e.applyScreen(),e.setDisplayMode(t.screen.displayMode),G(),_h(t)}function ot(R){s=R,Ct("screen"),M("options")}r.addEventListener("click",R=>{var Tt,pt,vt;try{_c()}catch{}const T=R.target.closest("[data-act]"),x=T==null?void 0:T.dataset.act,B=(Tt=R.target.closest("[data-map]"))==null?void 0:Tt.dataset.map,$=R.target.closest("[data-mp-map]"),Z=(pt=R.target.closest("[data-tab]"))==null?void 0:pt.dataset.tab,et=R.target.closest("[data-mp-max]");x&&yt(x,T.dataset),B&&!((vt=R.target.closest(".map-card"))!=null&&vt.disabled)&&lt(B),$&&!$.disabled&&ht($.dataset.mpMap),et&&(h=Number(et.dataset.mpMax),r.querySelectorAll("[data-mp-max]").forEach(Rt=>Rt.classList.toggle("is-on",Rt===et)),Ee()),Z&&Ct(Z)}),r.querySelector("#mp-player-name").addEventListener("input",K),r.addEventListener("keydown",R=>{R.key==="Enter"&&(R.target.id==="mp-player-name"&&(R.preventDefault(),yt("mp-name-go")),R.target.id==="mp-lobby-name"&&(R.preventDefault(),yt("mp-create-go")))});function lt(R){const T=Ss.find(x=>x.id===R);!T||T.locked||(o=R,r.querySelectorAll(".map-card").forEach(x=>x.classList.toggle("is-selected",x.dataset.map===R)),r.querySelector("#play-map").classList.remove("is-hidden"),Ee())}function nt(){r.querySelector("#play-map").classList.add("is-hidden")}function At(R){return R.replace(/[^a-zA-Z0-9 ]/g,"").trim().slice(0,16).toUpperCase()}function K(){const R=At(r.querySelector("#mp-player-name").value).length>=2;r.querySelector("#mp-name-go").classList.toggle("is-disabled",!R)}function it(){M("mp-name");const R=r.querySelector("#mp-player-name");R.value=c,K(),window.setTimeout(()=>R.focus(),40)}function ht(R){const T=Ss.find(x=>x.id===R);!T||T.locked||(d=R,r.querySelectorAll("#mp-maps .map-card").forEach(x=>x.classList.toggle("is-selected",x.dataset.mpMap===R)),Ee())}function gt(){r.querySelector("#mp-join-list").innerHTML=p.map(R=>`
      <button class="mp-lobby-row" data-act="mp-join-go" data-id="${R.id}">
        <span>${R.name}</span>
        <span class="meta">${R.people.length}/${R.max}</span>
        <span class="meta">${R.map}</span>
      </button>`).join(""),To(r)}function bt(){if(!u)return;r.querySelector("#mp-lobby-title").textContent=u.name,r.querySelector("#mp-lobby-meta").textContent=`${u.map}  ·  ${u.people.length} / ${u.max}`;const R=[];for(let T=0;T<u.max;T+=1){const x=u.people[T];x?R.push(`<li class="${x===c?"is-you":""}">${x}${x===c?"  (YOU)":""}</li>`):R.push('<li class="is-empty">—</li>')}r.querySelector("#mp-players").innerHTML=R.join(""),M("mp-lobby")}function Lt(R){const T=p.find(x=>x.id===R);if(T){if(!T.people.includes(c)){if(T.people.length>=T.max){H("LOBBY FULL");return}T.people.push(c)}u=T,Mi(),bt()}}function yt(R,T={}){if(R==="play")Mi(),I("maps","MAP LIST");else if(R==="multi")Ee(),it();else if(R==="mp-name-go"){const x=At(r.querySelector("#mp-player-name").value);if(x.length<2)return;c=x,r.querySelector("#mp-signed").textContent=c,Mi(),M("mp-hub")}else if(R==="back-mp-name")hn(),M("menu");else if(R==="back-mp-hub")hn(),it();else if(R==="mp-create")Ee(),r.querySelector("#mp-lobby-name").value="",h=4,d="sandbox",r.querySelectorAll("[data-mp-max]").forEach(x=>x.classList.toggle("is-on",x.dataset.mpMax==="4")),r.querySelectorAll("#mp-maps .map-card").forEach(x=>x.classList.toggle("is-selected",x.dataset.mpMap==="sandbox")),M("mp-create");else if(R==="back-mp-create")hn(),M("mp-hub");else if(R==="mp-create-go"){const x=At(r.querySelector("#mp-lobby-name").value);if(x.length<2){r.querySelector("#mp-lobby-name").focus();return}const B=Ss.find($=>$.id===d);if(!B||B.locked)return;u={id:`L${Date.now()}`,name:x,map:B.name,max:h,people:[c]},p.push(u),Mi(),bt()}else if(R==="mp-join")Ee(),gt(),M("mp-join");else if(R==="mp-join-go")Lt(T.id);else if(R==="back-mp-join")hn(),M("mp-hub");else if(R==="back-mp-lobby")hn(),u=null,M("mp-hub");else if(R==="mp-start")Ee(),H("COMING SOON");else if(R==="mods")Ee(),H("COMING SOON");else if(R==="options")Ee(),ot("menu");else if(R==="exit")hn(),M("exit");else if(R==="back-maps")hn(),o=null,nt(),M("menu");else if(R==="start-map"){if(!o)return;Mi(),jt(),M("time")}else R==="back-time"?(hn(),M("maps")):R==="play-time"?(Mi(),I("game",o.toUpperCase())):R==="back-options"?(hn(),Y(),M(s),s==="pause"&&e.setPaused(!0)):R==="resume"?(Ee(),C(),e.setPaused(!1),e.setControlLock(!1),M("none"),r.querySelector("#hud").hidden=!1,i="game"):R==="options-pause"?(Ee(),C(),e.setPaused(!0),ot("pause")):R==="quit"&&(hn(),C(),I("quit-menu","QUIT"))}function Ct(R){r.querySelectorAll(".tab-btn").forEach(x=>x.classList.toggle("is-active",x.dataset.tab===R));const T=r.querySelector("#options-body");R==="screen"&&(T.innerHTML=U()),R==="graphics"&&(T.innerHTML=Ht()),R==="audio"&&(T.innerHTML=Gt()),R==="extra"&&(T.innerHTML=Dt()),mt(T,R),To(T),R==="extra"&&G()}function U(){return`
      ${Ve("resolution","RESOLUTION",O_,t.screen.resolution)}
      ${Ve("aspect","ASPECT RATIO",[["auto","AUTO"],["16:9","16:9"],["16:10","16:10"],["4:3","4:3"],["21:9","21:9"]],t.screen.aspect)}
      ${Ge("stretched","STRETCHED",t.screen.stretched)}
      ${Ve("displayMode","DISPLAY MODE",[["windowed","WINDOWED"],["borderless","BORDERLESS"],["fullscreen","FULL SCREEN"]],t.screen.displayMode)}
      ${k_(t.screen.brightness)}
      ${Re("contrast","CONTRAST",t.screen.contrast,0,100)}
      ${Re("fov","FIELD OF VIEW",t.screen.fov,60,120)}
      ${Ge("vsync","VSYNC",t.screen.vsync)}
      ${Ve("fpsLimit","FRAME LIMIT",[["unlimited","UNLIMITED"],["30","30"],["60","60"],["120","120"],["144","144"],["240","240"]],t.screen.fpsLimit)}
    `}function Ht(){const R=t.graphics;return`
      <div class="opt-row stack">
        <div class="opt-label">PRESET</div>
        <div class="preset-row">${["lowest","low","medium","high","epic","maximum"].map(B=>`<button class="chip ${R.preset===B?"is-on":""}" data-preset="${B}">${B}</button>`).join("")}${R.preset==="custom"?'<button class="chip is-on">CUSTOM</button>':""}</div>
      </div>
      ${Ve("shadows","SHADOWS",[["off","OFF"],["low","LOW"],["medium","MEDIUM"],["high","HIGH"],["ultra","ULTRA"]],R.shadows)}
      ${Ve("shadowQuality","SHADOW QUALITY",[["low","LOW"],["medium","MEDIUM"],["high","HIGH"],["ultra","ULTRA"]],R.shadowQuality)}
      ${Ve("antiAliasing","ANTI ALIASING",[["off","OFF"],["fxaa","FXAA"],["smaa","SMAA"],["taa","TAA"],["msaa2","MSAA 2X"],["msaa4","MSAA 4X"],["msaa8","MSAA 8X"]],R.antiAliasing)}
      ${Ve("textures","TEXTURES",[["lowest","LOWEST"],["low","LOW"],["medium","MEDIUM"],["high","HIGH"],["epic","EPIC"],["max","MAXIMUM"]],R.textures)}
      ${Ve("effects","EFFECTS",[["lowest","LOWEST"],["low","LOW"],["medium","MEDIUM"],["high","HIGH"],["epic","EPIC"],["max","MAXIMUM"]],R.effects)}
      ${Re("viewDistance","VIEW DISTANCE",R.viewDistance,10,100)}
      ${Ge("ao","AMBIENT OCCLUSION",R.ao)}
      ${Ge("bloom","BLOOM",R.bloom)}
      ${Ge("motionBlur","MOTION BLUR",R.motionBlur)}
      ${Ve("reflections","REFLECTIONS",[["off","OFF"],["low","LOW"],["medium","MEDIUM"],["high","HIGH"],["ultra","ULTRA"]],R.reflections)}
      ${Ve("particles","PARTICLES",[["lowest","LOWEST"],["low","LOW"],["medium","MEDIUM"],["high","HIGH"],["epic","EPIC"],["max","MAXIMUM"]],R.particles)}
      ${Ve("anisotropic","ANISOTROPIC",[["1","1X"],["2","2X"],["4","4X"],["8","8X"],["16","16X"]],String(R.anisotropic))}
      ${Ge("postProcessing","POST PROCESSING",R.postProcessing)}
      ${Ge("rayTracing","RAY TRACING",R.rayTracing)}
    `}function Gt(){const R=t.audio;return`
      ${Re("master","MASTER",R.master,0,100)}
      ${Re("music","MUSIC",R.music,0,100)}
      ${Re("ambient","AMBIENT",R.ambient,0,100)}
      ${Re("sfx","SFX",R.sfx,0,100)}
      ${Re("ui","UI",R.ui,0,100)}
      ${Re("voice","VOICE",R.voice,0,100)}
      ${Ge("muteUnfocused","MUTE UNFOCUSED",R.muteUnfocused)}
    `}function Dt(){const R=t.extra;return`
      ${Ao("hudColor","HUD COLOR",R.hudColor)}
      ${Ao("crosshairColor","CROSSHAIR COLOR",R.crosshairColor)}
      ${Ve("crosshairStyle","CROSSHAIR STYLE",[["cross","CROSS"],["cross-dot","CROSS DOT"],["dot","DOT"],["t","T"],["circle","CIRCLE"]],R.crosshairStyle)}
      ${Re("crosshairLength","CROSSHAIR LENGTH",R.crosshairLength,2,20)}
      ${Re("crosshairThickness","CROSSHAIR THICKNESS",R.crosshairThickness,1,8)}
      ${Re("crosshairGap","CROSSHAIR GAP",R.crosshairGap,0,18)}
      ${Ge("crosshairDot","CENTER DOT",R.crosshairDot)}
      ${Ge("crosshairOutline","CROSSHAIR OUTLINE",R.crosshairOutline)}
      <div class="opt-row stack">
        <div class="opt-label">PREVIEW</div>
        <div class="xh-preview">
          <div class="crosshair" id="xh-preview">
            <span class="n"></span><span class="s"></span><span class="w"></span><span class="e"></span>
            <span class="dot"></span><span class="ring"></span>
          </div>
        </div>
      </div>
      ${Ao("damageColor","DAMAGE COLOR",R.damageColor)}
      ${Re("hudOpacity","HUD OPACITY",R.hudOpacity,20,100)}
      ${Re("hudScale","HUD SCALE",R.hudScale,70,140)}
      ${Re("radarOpacity","RADAR OPACITY",R.radarOpacity,0,100)}
      ${Ge("showFps","SHOW FPS",R.showFps)}
      ${Ge("showPing","SHOW PING",R.showPing)}
      ${Ge("hitMarkers","HIT MARKERS",R.hitMarkers)}
    `}function mt(R,T){R.querySelectorAll("[data-preset]").forEach(x=>{x.addEventListener("click",()=>{Ee(),xh(t,x.dataset.preset),Y(),Ct("graphics")})}),R.querySelectorAll(".drop").forEach(x=>{const B=x.dataset.key;x.querySelector(".drop-btn").addEventListener("click",()=>{R.querySelectorAll(".drop").forEach($=>$.classList.toggle("is-open",$===x&&!x.classList.contains("is-open")))}),x.querySelectorAll("[data-val]").forEach($=>{$.addEventListener("click",()=>{Ee();const Z=$.dataset.val;if(T==="screen"&&(t.screen[B]=Z),T==="graphics"){const et=B==="anisotropic"?Number(Z):Z;Wr(t,B,et)}T==="extra"&&(t.extra[B]=Z),Y(),Ct(T)})})}),R.querySelectorAll(".slider").forEach(x=>{x.addEventListener("input",()=>{const B=x.dataset.key,$=Number(x.value);if(x.parentElement.querySelector(".slider-val").textContent=String($),B==="brightness"){const Z=R.querySelector("[data-bright-scene]");Z&&(Z.style.filter=`brightness(${.35+$/100*1.25})`)}T==="screen"&&(t.screen[B]=$),T==="graphics"&&Wr(t,B,$),T==="audio"&&(t.audio[B]=$),T==="extra"&&(t.extra[B]=$),Y()})}),R.querySelectorAll(".toggle").forEach(x=>{x.addEventListener("click",()=>{Ee();const B=x.dataset.key,$=!(T==="screen"?t.screen[B]:T==="graphics"?t.graphics[B]:T==="audio"?t.audio[B]:t.extra[B]);T==="screen"&&(t.screen[B]=$),T==="graphics"&&Wr(t,B,$),T==="audio"&&(t.audio[B]=$),T==="extra"&&(t.extra[B]=$),Y(),Ct(T)})}),R.querySelectorAll(".color-field").forEach(x=>{x.addEventListener("input",()=>{t.extra[x.dataset.key]=x.value,Y()})})}function jt(){a=kr(a);const R=mh(a),T=r.querySelector("#time-clock"),x=r.querySelector("#time-period"),B=r.querySelector("#time-slider"),$=r.querySelector("#time-sky");T.textContent=A_(a),x.textContent=C_(a),B.value=String(a),$.style.background=`linear-gradient(180deg, ${R.cssTop} 0%, ${R.cssHorizon} 72%, #000 100%)`,$.classList.toggle("is-rain",l==="rain"),r.querySelectorAll("[data-minutes]").forEach(Z=>{Z.classList.toggle("is-on",Number(Z.dataset.minutes)===a)}),r.querySelectorAll("[data-weather]").forEach(Z=>{Z.classList.toggle("is-on",Z.dataset.weather===l)})}r.querySelector("#time-slider").addEventListener("input",R=>{a=Number(R.target.value),jt()}),r.querySelectorAll("[data-minutes]").forEach(R=>{R.addEventListener("click",()=>{Ee(),a=Number(R.dataset.minutes),jt()})}),r.querySelectorAll("[data-weather]").forEach(R=>{R.addEventListener("click",()=>{Ee(),l=R.dataset.weather,jt()})}),jt(),e.onPauseRequest=E,window.addEventListener("keydown",R=>{if(L(R)){if(i!=="pause")return;R.preventDefault(),N()?C():A();return}if(N()){if(R.code==="Tab"){R.preventDefault();return}if(R.code==="Escape"){R.preventDefault(),C();return}if(R.code==="Enter"){R.preventDefault();const B=r.querySelector("#dev-console-input");S(B.value),B.value="";return}return}if(R.code==="Tab"){if(R.preventDefault(),f)return;i==="game"?E():i==="pause"&&yt("resume");return}if(R.code==="Escape"){if(f)return;i==="pause"?yt("resume"):i==="options"?yt("back-options"):i==="maps"?yt("back-maps"):i==="time"?yt("back-time"):i==="mp-name"?yt("back-mp-name"):i==="mp-hub"?yt("back-mp-hub"):i==="mp-create"?yt("back-mp-create"):i==="mp-join"?yt("back-mp-join"):i==="mp-lobby"?yt("back-mp-lobby"):i==="game"&&(R.preventDefault(),E());return}if(i!=="game")return;if(r.querySelector("#chat").classList.contains("is-on")){(R.code==="Enter"||R.code==="Escape")&&(R.preventDefault(),j());return}if(R.code==="KeyU"){R.preventDefault(),g=!g,r.querySelector("#hud").classList.toggle("is-stealth",g);return}if(R.code==="KeyT"){R.preventDefault(),O();return}(R.code==="AltLeft"||R.code==="AltRight")&&(R.preventDefault(),r.querySelector("#inv").classList.toggle("is-on"))}),window.addEventListener("blur",()=>{t.audio.muteUnfocused&&qi({master:0,ui:0})}),window.addEventListener("focus",()=>qi(t.audio));function Ut(){var R;if(requestAnimationFrame(Ut),t.extra.showFps&&i==="game"){const T=((R=e.getFpsCap)==null?void 0:R.call(e))||9999,x=Math.min(e.getFps(),T);r.querySelector("#fps").textContent=`${x} FPS`}}return Ut(),Y(),{show:M,getScreen:()=>i}}function To(r){r.querySelectorAll(".menu-btn, .corner-btn, .tab-btn, .map-card:not(.is-locked), .chip, .drop-btn, .toggle, .mp-lobby-row").forEach(t=>{t.dataset.hoverBound||(t.dataset.hoverBound="1",t.addEventListener("mouseenter",()=>{try{Mh()}catch{}}))})}function z_(r,t){const e=t.crosshairStyle||"cross";r.dataset.style=e,r.classList.toggle("has-outline",!!t.crosshairOutline),r.classList.toggle("has-dot",!!t.crosshairDot||e==="cross-dot"||e==="dot"),r.style.setProperty("--ch-len",`${t.crosshairLength}px`),r.style.setProperty("--ch-th",`${t.crosshairThickness}px`),r.style.setProperty("--ch-gap",`${t.crosshairGap}px`),r.style.setProperty("--ch-color",t.crosshairColor)}function Ve(r,t,e,n){var s;const i=((s=e.find(o=>o[0]===n))==null?void 0:s[1])??n;return`<div class="opt-row">
    <div class="opt-label">${t}</div>
    <div class="opt-control">
      <div class="drop" data-key="${r}">
        <button type="button" class="drop-btn">${i}</button>
        <div class="drop-list">${e.map(([o,a])=>`<button type="button" data-val="${o}">${a}</button>`).join("")}</div>
      </div>
    </div>
  </div>`}function Re(r,t,e,n,i){return`<div class="opt-row">
    <div class="opt-label">${t}</div>
    <div class="opt-control">
      <input class="slider" type="range" min="${n}" max="${i}" value="${e}" data-key="${r}" />
      <span class="slider-val">${e}</span>
    </div>
  </div>`}function k_(r){const t=.35+r/100*1.25;return`<div class="opt-row stack">
    <div class="opt-label">BRIGHTNESS</div>
    <div class="opt-control">
      <input class="slider" type="range" min="0" max="100" value="${r}" data-key="brightness" />
      <span class="slider-val">${r}</span>
    </div>
    <div class="bright-preview">
      <div class="bright-scene" data-bright-scene style="filter: brightness(${t})"></div>
      <div class="bright-scale"><span>DARK</span><span>BRIGHT</span></div>
    </div>
  </div>`}function Ge(r,t,e){return`<div class="opt-row">
    <div class="opt-label">${t}</div>
    <div class="opt-control">
      <button type="button" class="toggle ${e?"is-on":""}" data-key="${r}">${e?"ON":"OFF"}</button>
    </div>
  </div>`}function Ao(r,t,e){return`<div class="opt-row">
    <div class="opt-label">${t}</div>
    <div class="opt-control">
      <input class="color-field" type="color" value="${e}" data-key="${r}" />
    </div>
  </div>`}const Us=vh();qi(Us.audio);const H_=document.querySelector("#game-canvas"),ha=N_(H_,()=>Us);B_(document.querySelector("#ui-root"),{settings:Us,engine:ha,onQuitToMenu(){ha.resize()}});window.addEventListener("resize",()=>ha.resize());window.addEventListener("pointerdown",()=>_c(),{once:!0});document.addEventListener("visibilitychange",()=>{document.hidden&&Us.audio.muteUnfocused?qi({master:0,ui:0}):qi(Us.audio)});
