/*!CK:1882378198!*//*1429102161,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["+ClWy"]); }

__d("QuickSandHeader",["sha256","Int64"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();function i(j,k){"use strict";this.$QuickSandHeader0=1<<k;this.$QuickSandHeader1=this.$QuickSandHeader0/2;this.$QuickSandHeader2=h.fromInt(this.$QuickSandHeader1-1);this.$QuickSandHeader3=[];this.$QuickSandHeader4=0;this.$QuickSandHeader5=0;this.$QuickSandHeader6=0;this.$QuickSandHeader7=0;var l=g(j),m=this.$QuickSandHeader8(this.$QuickSandHeader9(l)),n=this.$QuickSandHeader8(this.$QuickSandHeader9(l).slice(8));this.$QuickSandHeader3.push(m.xor(h.fromString('736f6d6570736575',16)));this.$QuickSandHeader3.push(n.xor(h.fromString('646f72616e646f6d',16)));this.$QuickSandHeader3.push(m.xor(h.fromString('6c7967656e657261',16)));this.$QuickSandHeader3.push(n.xor(h.fromString('7465646279746573',16)));}i.prototype.sipEdge=function(j){"use strict";return [this.sipNode(j,0),this.sipNode(j,1)];};i.prototype.sipNode=function(j,k){"use strict";return this.$QuickSandHeadera(2*j+k).and(this.$QuickSandHeader2).toInt();};i.prototype.getSize=function(){"use strict";return this.$QuickSandHeader0;};i.prototype.getHalfSize=function(){"use strict";return this.$QuickSandHeader1;};i.prototype.$QuickSandHeaderb=function(j,k){"use strict";return j.shiftLeft(k).or(j.shiftRightUnsigned(64-k));};i.prototype.$QuickSandHeader8=function(j){"use strict";var k=new h.fromInt(j[0]),l=h.fromInt(j[1]).shiftLeft(8),m=h.fromInt(j[2]).shiftLeft(16),n=h.fromInt(j[3]).shiftLeft(24),o=h.fromInt(j[4]).shiftLeft(32),p=h.fromInt(j[5]).shiftLeft(40),q=h.fromInt(j[6]).shiftLeft(48),r=h.fromInt(j[7]).shiftLeft(56);return k.or(l).or(m).or(n).or(o).or(p).or(q).or(r);};i.prototype.$QuickSandHeaderc=function(){"use strict";this.$QuickSandHeader4=this.$QuickSandHeader4.add(this.$QuickSandHeader5);this.$QuickSandHeader6=this.$QuickSandHeader6.add(this.$QuickSandHeader7);this.$QuickSandHeader5=this.$QuickSandHeaderb(this.$QuickSandHeader5,13);this.$QuickSandHeader7=this.$QuickSandHeaderb(this.$QuickSandHeader7,16);this.$QuickSandHeader5=this.$QuickSandHeader5.xor(this.$QuickSandHeader4);this.$QuickSandHeader7=this.$QuickSandHeader7.xor(this.$QuickSandHeader6);this.$QuickSandHeader4=this.$QuickSandHeaderb(this.$QuickSandHeader4,32);this.$QuickSandHeader6=this.$QuickSandHeader6.add(this.$QuickSandHeader5);this.$QuickSandHeader4=this.$QuickSandHeader4.add(this.$QuickSandHeader7);this.$QuickSandHeader5=this.$QuickSandHeaderb(this.$QuickSandHeader5,17);this.$QuickSandHeader7=this.$QuickSandHeaderb(this.$QuickSandHeader7,21);this.$QuickSandHeader5=this.$QuickSandHeader5.xor(this.$QuickSandHeader6);this.$QuickSandHeader7=this.$QuickSandHeader7.xor(this.$QuickSandHeader4);this.$QuickSandHeader6=this.$QuickSandHeaderb(this.$QuickSandHeader6,32);};i.prototype.$QuickSandHeader9=function(j){"use strict";for(var k=[],l=0;l<j.length;l+=2)k.push(parseInt(j.substr(l,2),16));return k;};i.prototype.$QuickSandHeadera=function(j){"use strict";var k=h.fromInt(j);this.$QuickSandHeader4=this.$QuickSandHeader3[0];this.$QuickSandHeader5=this.$QuickSandHeader3[1];this.$QuickSandHeader6=this.$QuickSandHeader3[2];this.$QuickSandHeader7=this.$QuickSandHeader3[3].xor(k);for(var l=0;l<2;l++)this.$QuickSandHeaderc();this.$QuickSandHeader4=this.$QuickSandHeader4.xor(k);this.$QuickSandHeader6=this.$QuickSandHeader6.xor(h.fromString('ff',16));for(l=0;l<4;l++)this.$QuickSandHeaderc();return this.$QuickSandHeader4.xor(this.$QuickSandHeader5).xor(this.$QuickSandHeader6).xor(this.$QuickSandHeader7);};e.exports=i;},null);
__d("QuickSandSolver",["AsyncRequest","Base64","Form","QuickSandHeader","sha256"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();var l={solveAndEncode:function(m,n,o,p,q,r){var s=JSON.stringify([this.solve(m,n,o,p,q),r]);return h.encode(s);},solveAndUpdateForm:function(m,n,o,p,q,r,s){var t=this.solveAndEncode(m,n,o,p,q,s),u=document.getElementById(r);i.createHiddenInputs({qsstamp:t},u);},solveAndSendRequestBack:function(m,n){var o=this.solveAndEncode(n.__iterations,n.__header,n.__graphSizeShift,n.__proofSize,n.__edgePercentage,n.__blob);m.data.qsstamp=o;m.send();},solveAndCallAsyncController:function(m,n,o,p,q,r){var s=this.solveAndEncode(m,n,o,p,q,r);new g().setURI('/qs/').setData({qsstamp:s}).send();},solve:function(m,n,o,p,q){var r=[],s=n;for(var t=0;t<m;t++){r.push(l.solveOneIteration(s,o,p,q));s=l.hashList(r[t]);}return r;},solveOneIteration:function(m,n,o,p){var q=8192,r=new j(m,n),s=p*r.getSize()/100,t=[],u=[],v=[];for(var w=0;w<s;w++){var x=r.sipEdge(w),y=x[0],z=x[1];y+=1;z+=1+r.getHalfSize();var aa=t[y],ba=t[z];if(aa==z||ba==y)continue;u[0]=y;v[0]=z;var ca=l.path(aa,u,t,q),da=l.path(ba,v,t,q);if(u[ca]==v[da]){var ea=Math.min(ca,da);for(ca-=ea,da-=ea;u[ca]!=v[da];ca++,da++);var fa=ca+da+1;if(fa==o)return l.recoverSolution(ca,da,u,v,r,o,s);continue;}if(ca<da){while(ca--)t[u[ca+1]]=u[ca];t[y]=z;}else{while(da--)t[v[da+1]]=v[da];t[z]=y;}}return [];},path:function(m,n,o,p){var q=0;for(q=0;m;m=o[m]){if(++q>=p){while(q--&&n[q]!=m);if(q<0){throw "Maximum path length was exceeded";}else throw "Illegal cycle has occured";}n[q]=m;}return q;},recoverSolution:function(m,n,o,p,q,r,s){var t=function(){};t.prototype.add=function(z){this[z]=true;};t.prototype.remove=function(z){delete this[z];};var u=[],v=new t();v.add([o[0],p[0]]);while(m--)v.add([o[(m+1)&~1],o[(m|1)]]);while(n--)v.add([p[n|1],p[(n+1)&~1]]);var w=0;for(var x=0;x<s;x++){var y=[1+q.sipNode(x,0),1+q.getHalfSize()+q.sipNode(x,1)];if(y in v){u[w++]=x;v.remove(y);}}return u;},hashList:function(m){var n=m.join('-');return k(n);}};e.exports=l;},null);