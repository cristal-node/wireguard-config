!function(r){"use strict";var c=function(r){var n,o=new Float64Array(16);if(r)for(n=0;n<r.length;n++)o[n]=r[n];return o},f=(new Uint8Array(16),new Uint8Array(32));f[0]=9;var u=c(),h=c([1]),v=c([56129,1]),w=c([30883,4953,19914,30187,55467,16705,2637,112,59544,30585,16505,36039,65139,11119,27886,20995]),y=c([61785,9906,39828,60374,45398,33411,5274,224,53552,61171,33010,6542,64743,22239,55772,9222]),t=c([54554,36645,11616,51542,42930,38181,51040,26924,56412,64982,57905,49316,21502,52590,14035,8553]),e=c([26200,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214]),g=c([41136,18958,6951,50414,58488,44335,6150,12099,55207,15867,153,11085,57099,20417,9344,11139]);function l(r,n,o,t){r[n]=o>>24&255,r[n+1]=o>>16&255,r[n+2]=o>>8&255,r[n+3]=255&o,r[n+4]=t>>24&255,r[n+5]=t>>16&255,r[n+6]=t>>8&255,r[n+7]=255&t}function A(r,n,o,t){return function(r,n,o,t,f){for(var e=0,a=0;a<f;a++)e|=r[n+a]^o[t+a];return(1&e-1>>>8)-1}(r,n,o,t,32)}function M(r,n){for(var o=0;o<16;o++)r[o]=0|n[o]}function i(r){for(var n,o=1,t=0;t<16;t++)n=r[t]+o+65535,o=Math.floor(n/65536),r[t]=n-65536*o;r[0]+=o-1+37*(o-1)}function U(r,n,o){for(var t,f=~(o-1),e=0;e<16;e++)t=f&(r[e]^n[e]),r[e]^=t,n[e]^=t}function s(r,n){for(var o,t,f=c(),e=c(),a=0;a<16;a++)e[a]=n[a];for(i(e),i(e),i(e),o=0;o<2;o++){for(f[0]=e[0]-65517,a=1;a<15;a++)f[a]=e[a]-65535-(f[a-1]>>16&1),f[a-1]&=65535;f[15]=e[15]-32767-(f[14]>>16&1),t=f[15]>>16&1,f[14]&=65535,U(e,f,1-t)}for(a=0;a<16;a++)r[2*a]=255&e[a],r[2*a+1]=e[a]>>8}function b(r,n){var o=new Uint8Array(32),t=new Uint8Array(32);return s(o,r),s(t,n),A(o,0,t,0)}function p(r){var n=new Uint8Array(32);return s(n,r),1&n[0]}function d(r,n){for(var o=0;o<16;o++)r[o]=n[2*o]+(n[2*o+1]<<8);r[15]&=32767}function E(r,n,o){for(var t=0;t<16;t++)r[t]=n[t]+o[t]}function k(r,n,o){for(var t=0;t<16;t++)r[t]=n[t]-o[t]}function F(r,n,o){var t=0,f=0,e=0,a=0,i=0,l=0,u=0,h=0,w=0,y=0,g=0,c=0,v=0,A=0,M=0,U=0,s=0,b=0,p=0,d=0,E=0,k=0,F=0,m=0,x=0,I=0,j=0,K=0,O=0,P=0,S=0,T=o[0],q=o[1],z=o[2],B=o[3],C=o[4],D=o[5],G=o[6],H=o[7],J=o[8],L=o[9],N=o[10],Q=o[11],R=o[12],V=o[13],W=o[14],X=o[15],o=n[0];t+=o*T,f+=o*q,e+=o*z,a+=o*B,i+=o*C,l+=o*D,u+=o*G,h+=o*H,w+=o*J,y+=o*L,g+=o*N,c+=o*Q,v+=o*R,A+=o*V,M+=o*W,U+=o*X,f+=(o=n[1])*T,e+=o*q,a+=o*z,i+=o*B,l+=o*C,u+=o*D,h+=o*G,w+=o*H,y+=o*J,g+=o*L,c+=o*N,v+=o*Q,A+=o*R,M+=o*V,U+=o*W,s+=o*X,e+=(o=n[2])*T,a+=o*q,i+=o*z,l+=o*B,u+=o*C,h+=o*D,w+=o*G,y+=o*H,g+=o*J,c+=o*L,v+=o*N,A+=o*Q,M+=o*R,U+=o*V,s+=o*W,b+=o*X,a+=(o=n[3])*T,i+=o*q,l+=o*z,u+=o*B,h+=o*C,w+=o*D,y+=o*G,g+=o*H,c+=o*J,v+=o*L,A+=o*N,M+=o*Q,U+=o*R,s+=o*V,b+=o*W,p+=o*X,i+=(o=n[4])*T,l+=o*q,u+=o*z,h+=o*B,w+=o*C,y+=o*D,g+=o*G,c+=o*H,v+=o*J,A+=o*L,M+=o*N,U+=o*Q,s+=o*R,b+=o*V,p+=o*W,d+=o*X,l+=(o=n[5])*T,u+=o*q,h+=o*z,w+=o*B,y+=o*C,g+=o*D,c+=o*G,v+=o*H,A+=o*J,M+=o*L,U+=o*N,s+=o*Q,b+=o*R,p+=o*V,d+=o*W,E+=o*X,u+=(o=n[6])*T,h+=o*q,w+=o*z,y+=o*B,g+=o*C,c+=o*D,v+=o*G,A+=o*H,M+=o*J,U+=o*L,s+=o*N,b+=o*Q,p+=o*R,d+=o*V,E+=o*W,k+=o*X,h+=(o=n[7])*T,w+=o*q,y+=o*z,g+=o*B,c+=o*C,v+=o*D,A+=o*G,M+=o*H,U+=o*J,s+=o*L,b+=o*N,p+=o*Q,d+=o*R,E+=o*V,k+=o*W,F+=o*X,w+=(o=n[8])*T,y+=o*q,g+=o*z,c+=o*B,v+=o*C,A+=o*D,M+=o*G,U+=o*H,s+=o*J,b+=o*L,p+=o*N,d+=o*Q,E+=o*R,k+=o*V,F+=o*W,m+=o*X,y+=(o=n[9])*T,g+=o*q,c+=o*z,v+=o*B,A+=o*C,M+=o*D,U+=o*G,s+=o*H,b+=o*J,p+=o*L,d+=o*N,E+=o*Q,k+=o*R,F+=o*V,m+=o*W,x+=o*X,g+=(o=n[10])*T,c+=o*q,v+=o*z,A+=o*B,M+=o*C,U+=o*D,s+=o*G,b+=o*H,p+=o*J,d+=o*L,E+=o*N,k+=o*Q,F+=o*R,m+=o*V,x+=o*W,I+=o*X,c+=(o=n[11])*T,v+=o*q,A+=o*z,M+=o*B,U+=o*C,s+=o*D,b+=o*G,p+=o*H,d+=o*J,E+=o*L,k+=o*N,F+=o*Q,m+=o*R,x+=o*V,I+=o*W,j+=o*X,v+=(o=n[12])*T,A+=o*q,M+=o*z,U+=o*B,s+=o*C,b+=o*D,p+=o*G,d+=o*H,E+=o*J,k+=o*L,F+=o*N,m+=o*Q,x+=o*R,I+=o*V,j+=o*W,K+=o*X,A+=(o=n[13])*T,M+=o*q,U+=o*z,s+=o*B,b+=o*C,p+=o*D,d+=o*G,E+=o*H,k+=o*J,F+=o*L,m+=o*N,x+=o*Q,I+=o*R,j+=o*V,K+=o*W,O+=o*X,M+=(o=n[14])*T,U+=o*q,s+=o*z,b+=o*B,p+=o*C,d+=o*D,E+=o*G,k+=o*H,F+=o*J,m+=o*L,x+=o*N,I+=o*Q,j+=o*R,K+=o*V,O+=o*W,P+=o*X,U+=(o=n[15])*T,f+=38*(b+=o*z),e+=38*(p+=o*B),a+=38*(d+=o*C),i+=38*(E+=o*D),l+=38*(k+=o*G),u+=38*(F+=o*H),h+=38*(m+=o*J),w+=38*(x+=o*L),y+=38*(I+=o*N),g+=38*(j+=o*Q),c+=38*(K+=o*R),v+=38*(O+=o*V),A+=38*(P+=o*W),M+=38*(S+=o*X),t=(o=1+(t+=38*(s+=o*q))+65535)-65536*(S=Math.floor(o/65536)),f=(o=f+S+65535)-65536*(S=Math.floor(o/65536)),e=(o=e+S+65535)-65536*(S=Math.floor(o/65536)),a=(o=a+S+65535)-65536*(S=Math.floor(o/65536)),i=(o=i+S+65535)-65536*(S=Math.floor(o/65536)),l=(o=l+S+65535)-65536*(S=Math.floor(o/65536)),u=(o=u+S+65535)-65536*(S=Math.floor(o/65536)),h=(o=h+S+65535)-65536*(S=Math.floor(o/65536)),w=(o=w+S+65535)-65536*(S=Math.floor(o/65536)),y=(o=y+S+65535)-65536*(S=Math.floor(o/65536)),g=(o=g+S+65535)-65536*(S=Math.floor(o/65536)),c=(o=c+S+65535)-65536*(S=Math.floor(o/65536)),v=(o=v+S+65535)-65536*(S=Math.floor(o/65536)),A=(o=A+S+65535)-65536*(S=Math.floor(o/65536)),M=(o=M+S+65535)-65536*(S=Math.floor(o/65536)),U=(o=U+S+65535)-65536*(S=Math.floor(o/65536)),t+=S-1+37*(S-1),t=(o=1+t+65535)-65536*(S=Math.floor(o/65536)),f=(o=f+S+65535)-65536*(S=Math.floor(o/65536)),e=(o=e+S+65535)-65536*(S=Math.floor(o/65536)),a=(o=a+S+65535)-65536*(S=Math.floor(o/65536)),i=(o=i+S+65535)-65536*(S=Math.floor(o/65536)),l=(o=l+S+65535)-65536*(S=Math.floor(o/65536)),u=(o=u+S+65535)-65536*(S=Math.floor(o/65536)),h=(o=h+S+65535)-65536*(S=Math.floor(o/65536)),w=(o=w+S+65535)-65536*(S=Math.floor(o/65536)),y=(o=y+S+65535)-65536*(S=Math.floor(o/65536)),g=(o=g+S+65535)-65536*(S=Math.floor(o/65536)),c=(o=c+S+65535)-65536*(S=Math.floor(o/65536)),v=(o=v+S+65535)-65536*(S=Math.floor(o/65536)),A=(o=A+S+65535)-65536*(S=Math.floor(o/65536)),M=(o=M+S+65535)-65536*(S=Math.floor(o/65536)),U=(o=U+S+65535)-65536*(S=Math.floor(o/65536)),r[0]=t+=S-1+37*(S-1),r[1]=f,r[2]=e,r[3]=a,r[4]=i,r[5]=l,r[6]=u,r[7]=h,r[8]=w,r[9]=y,r[10]=g,r[11]=c,r[12]=v,r[13]=A,r[14]=M,r[15]=U}function m(r,n){F(r,n,n)}function x(r,n){for(var o=c(),t=0;t<16;t++)o[t]=n[t];for(t=253;0<=t;t--)m(o,o),2!==t&&4!==t&&F(o,o,n);for(t=0;t<16;t++)r[t]=o[t]}function a(r,n,o){for(var t,f=new Uint8Array(32),e=new Float64Array(80),a=c(),i=c(),l=c(),u=c(),h=c(),w=c(),y=0;y<31;y++)f[y]=n[y];for(f[31]=127&n[31]|64,f[0]&=248,d(e,o),y=0;y<16;y++)i[y]=e[y],u[y]=a[y]=l[y]=0;for(a[0]=u[0]=1,y=254;0<=y;--y)U(a,i,t=f[y>>>3]>>>(7&y)&1),U(l,u,t),E(h,a,l),k(a,a,l),E(l,i,u),k(i,i,u),m(u,h),m(w,a),F(a,l,a),F(l,i,h),E(h,a,l),k(a,a,l),m(i,a),k(l,u,w),F(a,l,v),E(a,a,u),F(l,l,a),F(a,u,w),F(u,i,e),m(i,h),U(a,i,t),U(l,u,t);for(y=0;y<16;y++)e[y+16]=a[y],e[y+32]=l[y],e[y+48]=i[y],e[y+64]=u[y];var g=e.subarray(32),o=e.subarray(16);return x(g,g),F(o,o,g),s(r,o),0}var Q=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591];function I(r,n,o,t){for(var f,e,a,i,l,u,h,w,y,g,c,v,A,M,U,s,b,p,d,E,k,F,m=new Int32Array(16),x=new Int32Array(16),I=r[0],j=r[1],K=r[2],O=r[3],P=r[4],S=r[5],T=r[6],q=r[7],z=n[0],B=n[1],C=n[2],D=n[3],G=n[4],H=n[5],J=n[6],L=n[7],N=0;128<=t;){for(U=0;U<16;U++)m[U]=o[(s=8*U+N)+0]<<24|o[s+1]<<16|o[s+2]<<8|o[s+3],x[U]=o[s+4]<<24|o[s+5]<<16|o[s+6]<<8|o[s+7];for(U=0;U<80;U++)if(d=65535&(p=L),E=p>>>16,k=65535&(b=q),F=b>>>16,d+=65535&(p=((y=G)>>>14|(a=P)<<18)^(G>>>18|P<<14)^(P>>>9|G<<23)),E+=p>>>16,k+=65535&(b=(P>>>14|G<<18)^(P>>>18|G<<14)^(G>>>9|P<<23)),F+=b>>>16,d+=65535&(p=G&(g=H)^~G&(c=J)),E+=p>>>16,k+=65535&(b=P&(i=S)^~P&(l=T)),F+=b>>>16,b=Q[2*U],d+=65535&(p=Q[2*U+1]),E+=p>>>16,k+=65535&b,F+=b>>>16,b=m[U%16],E+=(p=x[U%16])>>>16,k+=65535&b,F+=b>>>16,k+=(E+=(d+=65535&p)>>>16)>>>16,d=65535&(p=M=65535&d|E<<16),E=p>>>16,k=65535&(b=A=65535&k|(F+=k>>>16)<<16),F=b>>>16,d+=65535&(p=(z>>>28|I<<4)^(I>>>2|z<<30)^(I>>>7|z<<25)),E+=p>>>16,k+=65535&(b=(I>>>28|z<<4)^(z>>>2|I<<30)^(z>>>7|I<<25)),F+=b>>>16,E+=(p=z&(h=B)^z&(w=C)^B&C)>>>16,k+=65535&(b=I&(f=j)^I&(e=K)^j&K),F+=b>>>16,u=65535&(k+=(E+=(d+=65535&p)>>>16)>>>16)|(F+=k>>>16)<<16,v=65535&d|E<<16,d=65535&(p=D),E=p>>>16,k=65535&(b=O),F=b>>>16,E+=(p=M)>>>16,k+=65535&(b=A),F+=b>>>16,j=I,K=f,O=e,P=65535&(k+=(E+=(d+=65535&p)>>>16)>>>16)|(F+=k>>>16)<<16,S=a,T=i,q=l,I=u,B=z,C=h,D=w,G=65535&d|E<<16,H=y,J=g,L=c,z=v,U%16==15)for(s=0;s<16;s++)b=m[s],d=65535&(p=x[s]),E=p>>>16,k=65535&b,F=b>>>16,b=m[(s+9)%16],d+=65535&(p=x[(s+9)%16]),E+=p>>>16,k+=65535&b,F+=b>>>16,A=m[(s+1)%16],d+=65535&(p=((M=x[(s+1)%16])>>>1|A<<31)^(M>>>8|A<<24)^(M>>>7|A<<25)),E+=p>>>16,k+=65535&(b=(A>>>1|M<<31)^(A>>>8|M<<24)^A>>>7),F+=b>>>16,A=m[(s+14)%16],E+=(p=((M=x[(s+14)%16])>>>19|A<<13)^(A>>>29|M<<3)^(M>>>6|A<<26))>>>16,k+=65535&(b=(A>>>19|M<<13)^(M>>>29|A<<3)^A>>>6),F+=b>>>16,F+=(k+=(E+=(d+=65535&p)>>>16)>>>16)>>>16,m[s]=65535&k|F<<16,x[s]=65535&d|E<<16;d=65535&(p=z),E=p>>>16,k=65535&(b=I),F=b>>>16,b=r[0],E+=(p=n[0])>>>16,k+=65535&b,F+=b>>>16,F+=(k+=(E+=(d+=65535&p)>>>16)>>>16)>>>16,r[0]=I=65535&k|F<<16,n[0]=z=65535&d|E<<16,d=65535&(p=B),E=p>>>16,k=65535&(b=j),F=b>>>16,b=r[1],E+=(p=n[1])>>>16,k+=65535&b,F+=b>>>16,F+=(k+=(E+=(d+=65535&p)>>>16)>>>16)>>>16,r[1]=j=65535&k|F<<16,n[1]=B=65535&d|E<<16,d=65535&(p=C),E=p>>>16,k=65535&(b=K),F=b>>>16,b=r[2],E+=(p=n[2])>>>16,k+=65535&b,F+=b>>>16,F+=(k+=(E+=(d+=65535&p)>>>16)>>>16)>>>16,r[2]=K=65535&k|F<<16,n[2]=C=65535&d|E<<16,d=65535&(p=D),E=p>>>16,k=65535&(b=O),F=b>>>16,b=r[3],E+=(p=n[3])>>>16,k+=65535&b,F+=b>>>16,F+=(k+=(E+=(d+=65535&p)>>>16)>>>16)>>>16,r[3]=O=65535&k|F<<16,n[3]=D=65535&d|E<<16,d=65535&(p=G),E=p>>>16,k=65535&(b=P),F=b>>>16,b=r[4],E+=(p=n[4])>>>16,k+=65535&b,F+=b>>>16,F+=(k+=(E+=(d+=65535&p)>>>16)>>>16)>>>16,r[4]=P=65535&k|F<<16,n[4]=G=65535&d|E<<16,d=65535&(p=H),E=p>>>16,k=65535&(b=S),F=b>>>16,b=r[5],E+=(p=n[5])>>>16,k+=65535&b,F+=b>>>16,F+=(k+=(E+=(d+=65535&p)>>>16)>>>16)>>>16,r[5]=S=65535&k|F<<16,n[5]=H=65535&d|E<<16,d=65535&(p=J),E=p>>>16,k=65535&(b=T),F=b>>>16,b=r[6],E+=(p=n[6])>>>16,k+=65535&b,F+=b>>>16,F+=(k+=(E+=(d+=65535&p)>>>16)>>>16)>>>16,r[6]=T=65535&k|F<<16,n[6]=J=65535&d|E<<16,d=65535&(p=L),E=p>>>16,k=65535&(b=q),F=b>>>16,b=r[7],E+=(p=n[7])>>>16,k+=65535&b,F+=b>>>16,F+=(k+=(E+=(d+=65535&p)>>>16)>>>16)>>>16,r[7]=q=65535&k|F<<16,n[7]=L=65535&d|E<<16,N+=128,t-=128}return t}function j(r,n,o){var t,f=new Int32Array(8),e=new Int32Array(8),a=new Uint8Array(256),i=o;for(f[0]=1779033703,f[1]=3144134277,f[2]=1013904242,f[3]=2773480762,f[4]=1359893119,f[5]=2600822924,f[6]=528734635,f[7]=1541459225,e[0]=4089235720,e[1]=2227873595,e[2]=4271175723,e[3]=1595750129,e[4]=2917565137,e[5]=725511199,e[6]=4215389547,e[7]=327033209,I(f,e,n,o),o%=128,t=0;t<o;t++)a[t]=n[i-o+t];for(a[o]=128,a[(o=256-128*(o<112?1:0))-9]=0,l(a,o-8,i/536870912|0,i<<3),I(f,e,a,o),t=0;t<8;t++)l(r,8*t,f[t],e[t])}function K(r,n){var o=c(),t=c(),f=c(),e=c(),a=c(),i=c(),l=c(),u=c(),h=c();k(o,r[1],r[0]),k(h,n[1],n[0]),F(o,o,h),E(t,r[0],r[1]),E(h,n[0],n[1]),F(t,t,h),F(f,r[3],n[3]),F(f,f,y),F(e,r[2],n[2]),E(e,e,e),k(a,t,o),k(i,e,f),E(l,e,f),E(u,t,o),F(r[0],a,i),F(r[1],u,l),F(r[2],l,i),F(r[3],a,u)}function O(r,n,o){for(var t=0;t<4;t++)U(r[t],n[t],o)}function P(r,n){var o=c(),t=c(),f=c();x(f,n[2]),F(o,n[0],f),F(t,n[1],f),s(r,t),r[31]^=p(o)<<7}function S(r,n,o){var t,f;for(M(r[0],u),M(r[1],h),M(r[2],h),M(r[3],u),f=255;0<=f;--f)O(r,n,t=o[f/8|0]>>(7&f)&1),K(n,r),K(r,r),O(r,n,t)}function T(r,n){var o=[c(),c(),c(),c()];M(o[0],t),M(o[1],e),M(o[2],h),F(o[3],t,e),S(r,o,n)}var q=new Float64Array([237,211,245,92,26,99,18,88,214,156,247,162,222,249,222,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16]);function z(r,n){for(var o,t,f,e=63;32<=e;--e){for(o=0,t=e-32,f=e-12;t<f;++t)n[t]+=o-16*n[e]*q[t-(e-32)],o=n[t]+128>>8,n[t]-=256*o;n[t]+=o,n[e]=0}for(t=o=0;t<32;t++)n[t]+=o-(n[31]>>4)*q[t],o=n[t]>>8,n[t]&=255;for(t=0;t<32;t++)n[t]-=o*q[t];for(e=0;e<32;e++)n[e+1]+=n[e]>>8,r[e]=255&n[e]}function B(r){for(var n=new Float64Array(64),o=0;o<64;o++)n[o]=r[o];for(o=0;o<64;o++)r[o]=0;z(r,n)}function C(r,n,o,t,f){for(var e=new Uint8Array(64),a=[c(),c(),c(),c()],i=0;i<32;i++)e[i]=t[i];e[0]&=248,e[31]&=127,e[31]|=64,T(a,e),P(e.subarray(32),a);a=128&e[63],o=f?function(r,n,o,t,f){new Uint8Array(64);var e,a,i=new Uint8Array(64),l=new Uint8Array(64),u=new Float64Array(64),h=[c(),c(),c(),c()];for(r[0]=254,e=1;e<32;e++)r[e]=255;for(e=0;e<32;e++)r[32+e]=t[e];for(e=0;e<o;e++)r[64+e]=n[e];for(e=0;e<64;e++)r[o+64+e]=f[e];for(j(l,r,o+128),B(l),T(h,l),P(r,h),e=0;e<32;e++)r[e+32]=t[32+e];for(j(i,r,o+64),B(i),e=0;e<64;e++)r[o+64+e]=0;for(e=0;e<64;e++)u[e]=0;for(e=0;e<32;e++)u[e]=l[e];for(e=0;e<32;e++)for(a=0;a<32;a++)u[e+a]+=i[e]*t[a];return z(r.subarray(32,o+64),u),o+64}(r,n,o,e,f):function(r,n,o,t){new Uint8Array(64);for(var f,e=new Uint8Array(64),a=new Uint8Array(64),i=new Float64Array(64),l=[c(),c(),c(),c()],u=0;u<o;u++)r[64+u]=n[u];for(u=0;u<32;u++)r[32+u]=t[u];for(j(a,r.subarray(32),o+32),B(a),T(l,a),P(r,l),u=0;u<32;u++)r[u+32]=t[32+u];for(j(e,r,o+64),B(e),u=0;u<64;u++)i[u]=0;for(u=0;u<32;u++)i[u]=a[u];for(u=0;u<32;u++)for(f=0;f<32;f++)i[u+f]+=e[u]*t[f];return z(r.subarray(32),i),o+64}(r,n,o,e);return r[63]|=a,o}function D(r,n){var o=c(),t=c(),f=c(),e=c(),a=c(),i=c(),l=c();if(M(r[2],h),d(r[1],n),m(f,r[1]),F(e,f,w),k(f,f,r[2]),E(e,r[2],e),m(a,e),m(i,a),F(l,i,a),F(o,l,f),F(o,o,e),function(r,n){for(var o=c(),t=0;t<16;t++)o[t]=n[t];for(t=250;0<=t;t--)m(o,o),1!==t&&F(o,o,n);for(t=0;t<16;t++)r[t]=o[t]}(o,o),F(o,o,f),F(o,o,e),F(o,o,e),F(r[0],o,e),m(t,r[0]),F(t,t,e),b(t,f)&&F(r[0],r[0],g),m(t,r[0]),F(t,t,e),b(t,f))return 1;p(r[0])===n[31]>>7&&k(r[0],u,r[0]),F(r[3],r[0],r[1])}function G(r,n,o,t){var f,e,a,i,e=(f=t,e=new Uint8Array(32),a=c(),i=c(),t=c(),d(a,f),E(i,a,h),k(t,a,h),x(i,i),F(i,i,t),s(e,i),e);return e[31]|=128&n[63],n[63]&=127,function(r,n,o,t){var f,e=new Uint8Array(32),a=new Uint8Array(64),i=[c(),c(),c(),c()],l=[c(),c(),c(),c()];if(o<64)return-1;if(D(l,t))return-1;for(f=0;f<o;f++)r[f]=n[f];for(f=0;f<32;f++)r[f+32]=t[f];if(j(a,r,o),B(a),S(i,l,a),T(l,n.subarray(32)),K(i,l),P(e,i),o-=64,A(n,0,e,0)){for(f=0;f<o;f++)r[f]=0;return-1}for(f=0;f<o;f++)r[f]=n[f+64];return o}(r,n,o,e)}function H(){for(var r,n=0;n<arguments.length;n++)if("[object Uint8Array]"!==(r=Object.prototype.toString.call(arguments[n])))throw new TypeError("unexpected type "+r+", use Uint8Array")}r.sharedKey=function(r,n){if(H(n,r),32!==n.length)throw new Error("wrong public key length");if(32!==r.length)throw new Error("wrong secret key length");var o=new Uint8Array(32);return a(o,r,n),o},r.signMessage=function(r,n,o){if(H(n,r),32!==r.length)throw new Error("wrong secret key length");if(o){if(H(o),64!==o.length)throw new Error("wrong random data length");var t=new Uint8Array(128+n.length);return C(t,n,n.length,r,o),new Uint8Array(t.subarray(0,64+n.length))}t=new Uint8Array(64+n.length);return C(t,n,n.length,r),t},r.openMessage=function(r,n){if(H(n,r),32!==r.length)throw new Error("wrong public key length");var o=new Uint8Array(n.length),r=G(o,n,n.length,r);if(r<0)return null;for(var t=new Uint8Array(r),f=0;f<t.length;f++)t[f]=o[f];return t},r.sign=function(r,n,o){if(H(r,n),32!==r.length)throw new Error("wrong secret key length");if(o&&(H(o),64!==o.length))throw new Error("wrong random data length");var t=new Uint8Array((o?128:64)+n.length);C(t,n,n.length,r,o);for(var f=new Uint8Array(64),e=0;e<f.length;e++)f[e]=t[e];return f},r.verify=function(r,n,o){if(H(n,o,r),64!==o.length)throw new Error("wrong signature length");if(32!==r.length)throw new Error("wrong public key length");for(var t=new Uint8Array(64+n.length),f=new Uint8Array(64+n.length),e=0;e<64;e++)t[e]=o[e];for(e=0;e<n.length;e++)t[e+64]=n[e];return 0<=G(f,t,t.length,r)},r.generateKeyPair=function(r){if(H(r),32!==r.length)throw new Error("wrong seed length");for(var n=new Uint8Array(32),o=new Uint8Array(32),t=0;t<32;t++)n[t]=r[t];return a(o,n,f),n[0]&=248,n[31]&=127,n[31]|=64,o[31]&=127,{public:o,private:n}}}("undefined"!=typeof module&&module.exports?module.exports:self.axlsign=self.axlsign||{});