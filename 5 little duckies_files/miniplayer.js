(function(g){var window=this;var r4=function(a,b){var c="ytp-miniplayer-button-bottom-right",d={D:"svg",U:{height:"18px",version:"1.1",viewBox:"0 0 22 18",width:"22px"},S:[{D:"g",U:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},S:[{D:"g",U:{transform:"translate(-1.000000, -3.000000)"},S:[{D:"polygon",U:{points:"0 0 24 0 24 24 0 24"}},{D:"path",U:{d:"M19,7 L5,7 L5,17 L19,17 L19,7 Z M23,19 L23,4.98 C23,3.88 22.1,3 21,3 L3,3 C1.9,3 1,3.88 1,4.98 L1,19 C1,20.1 1.9,21 3,21 L21,21 C22.1,21 23,20.1 23,19 Z M21,19.02 L3,19.02 L3,4.97 L21,4.97 L21,19.02 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Open video page";a.T().Z("kevlar_miniplayer_expand_top")&&(c="ytp-miniplayer-button-top-left",d={D:"svg",U:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},S:[{D:"g",U:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},S:[{D:"g",U:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},S:[{D:"path",U:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Expand");g.W.call(this,{D:"button",ka:["ytp-miniplayer-expand-watch-page-button","ytp-button",c],U:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button"},S:[d]});this.G=a;this.ya("click",this.onClick,this);this.Aa("title",g.FO(a,e,"i"));g.Zf(this,g.cP(b.Ob(),this.element))},s4=function(a){g.W.call(this,{D:"div",
K:"ytp-miniplayer-ui"});this.ii=!1;this.player=a;this.N(a,"minimized",this.Eh);this.N(a,"onStateChange",this.CQ)},t4=function(a){g.iO.call(this,a);
this.i=new s4(this.player);this.i.hide();g.ZN(this.player,this.i.element,4);a.qe()&&(this.load(),g.N(a.getRootNode(),"ytp-player-minimized",!0))};
g.u(r4,g.W);r4.prototype.onClick=function(){this.G.xa("onExpandMiniplayer")};g.u(s4,g.W);g.k=s4.prototype;
g.k.show=function(){this.ee=new g.gn(this.Jr,null,this);this.ee.start();if(!this.ii){this.tooltip=new g.dS(this.player,this);g.K(this,this.tooltip);g.ZN(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Qb=new g.YO(this.player);g.K(this,this.Qb);this.Ij=new g.W({D:"div",K:"ytp-miniplayer-scrim"});g.K(this,this.Ij);this.Ij.fa(this.element);this.N(this.Ij.element,"click",this.SF);var a=new g.W({D:"button",ka:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Close"},S:[g.$L()]});
g.K(this,a);a.fa(this.Ij.element);this.N(a.element,"click",this.xj);a=new r4(this.player,this);g.K(this,a);a.fa(this.Ij.element);g.S(this.player.T().experiments,"web_inline_player_enabled")&&(a=new g.PR(this.player,this),g.K(this,a),a.fa(this.Ij.element),a=new g.VQ(this.player,this),g.K(this,a),a.fa(this.Ij.element));this.Xm=new g.W({D:"div",K:"ytp-miniplayer-controls"});g.K(this,this.Xm);this.Xm.fa(this.Ij.element);this.N(this.Xm.element,"click",this.SF);var b=new g.W({D:"div",K:"ytp-miniplayer-button-container"});
g.K(this,b);b.fa(this.Xm.element);a=new g.W({D:"div",K:"ytp-miniplayer-play-button-container"});g.K(this,a);a.fa(this.Xm.element);var c=new g.W({D:"div",K:"ytp-miniplayer-button-container"});g.K(this,c);c.fa(this.Xm.element);this.nG=new g.$Q(this.player,this,!1);g.K(this,this.nG);this.nG.fa(b.element);b=new g.XQ(this.player,this);g.K(this,b);b.fa(a.element);this.nextButton=new g.$Q(this.player,this,!0);g.K(this,this.nextButton);this.nextButton.fa(c.element);this.Gi=new g.QR(this.player,this);g.K(this,
this.Gi);this.Gi.fa(this.Ij.element);this.Zc=new g.eR(this.player,this);g.K(this,this.Zc);g.ZN(this.player,this.Zc.element,4);this.Bu=new g.W({D:"div",K:"ytp-miniplayer-buttons"});g.K(this,this.Bu);g.ZN(this.player,this.Bu.element,4);a=new g.W({D:"button",ka:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Close"},S:[g.$L()]});g.K(this,a);a.fa(this.Bu.element);this.N(a.element,"click",this.xj);a=new g.W({D:"button",ka:["ytp-miniplayer-replay-button","ytp-button"],U:{"aria-label":"Close"},
S:[g.eM()]});g.K(this,a);a.fa(this.Bu.element);this.N(a.element,"click",this.KO);this.N(this.player,"presentingplayerstatechange",this.Xb);this.N(this.player,"appresize",this.Sa);this.N(this.player,"fullscreentoggled",this.Sa);this.Sa();this.ii=!0}0!==this.player.getPlayerState()&&g.W.prototype.show.call(this);this.Zc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.ee&&(this.ee.dispose(),this.ee=void 0);g.W.prototype.hide.call(this);this.player.qe()||(this.ii&&this.Zc.hide(),this.player.loadModule("annotations_module"))};
g.k.da=function(){this.ee&&(this.ee.dispose(),this.ee=void 0);g.W.prototype.da.call(this)};
g.k.xj=function(){this.player.stopVideo();this.player.xa("onCloseMiniplayer")};
g.k.KO=function(){this.player.playVideo()};
g.k.SF=function(a){if(a.target===this.Ij.element||a.target===this.Xm.element)g.S(this.player.T().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.cL(this.player.Va())?this.player.pauseVideo():this.player.playVideo():this.player.xa("onExpandMiniplayer")};
g.k.Eh=function(){g.N(this.player.getRootNode(),"ytp-player-minimized",this.player.qe())};
g.k.te=function(){this.Zc.Bb();this.Gi.Bb()};
g.k.Jr=function(){this.te();this.ee&&this.ee.start()};
g.k.Xb=function(a){g.V(a.state,32)&&this.tooltip.hide()};
g.k.Sa=function(){g.pR(this.Zc,0,this.player.Ja().getPlayerSize().width,!1);g.gR(this.Zc)};
g.k.CQ=function(a){this.player.qe()&&(0===a?this.hide():this.show())};
g.k.Ob=function(){return this.tooltip};
g.k.Ae=function(){return!1};
g.k.Oe=function(){return!1};
g.k.ji=function(){return!1};
g.k.Zz=function(){};
g.k.an=function(){};
g.k.Jq=function(){};
g.k.jn=function(){return null};
g.k.ij=function(){return new g.cg(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.tp=function(a,b,c,d,e){var f=0,h=d=0,l=g.Kg(a);if(b){c=g.pn(b,"ytp-prev-button")||g.pn(b,"ytp-next-button");var m=g.pn(b,"ytp-play-button"),n=g.pn(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Ig(b,this.element),h=b.x,f=b.y-12):n&&(h=g.pn(b,"ytp-miniplayer-button-top-left"),f=g.Ig(b,this.element),b=g.Kg(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.Ja().getPlayerSize().width;e=f+(e||0);l=g.Zd(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Gk=function(){};
g.k.ek=function(){return!1};g.u(t4,g.iO);t4.prototype.create=function(){};
t4.prototype.Ci=function(){return!1};
t4.prototype.load=function(){this.player.hideControls();this.i.show()};
t4.prototype.unload=function(){this.player.showControls();this.i.hide()};g.oO.miniplayer=t4;})(_yt_player);
