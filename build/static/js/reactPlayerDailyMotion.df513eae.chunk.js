(self.webpackChunkmy_react_app=self.webpackChunkmy_react_app||[]).push([[328],{5145:(e,t,r)=>{var a,o=Object.create,s=Object.defineProperty,n=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,l=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty,u=(e,t,r,a)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let o of i(t))p.call(e,o)||o===r||s(e,o,{get:()=>t[o],enumerable:!(a=n(t,o))||a.enumerable});return e},h=(e,t,r)=>(((e,t,r)=>{t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!==typeof t?t+"":t,r),r),c={};((e,t)=>{for(var r in t)s(e,r,{get:t[r],enumerable:!0})})(c,{default:()=>f}),e.exports=(a=c,u(s({},"__esModule",{value:!0}),a));var y=((e,t,r)=>(r=null!=e?o(l(e)):{},u(!t&&e&&e.__esModule?r:s(r,"default",{value:e,enumerable:!0}),e)))(r(5043)),d=r(2206),m=r(1520);class f extends y.Component{constructor(){super(...arguments),h(this,"callPlayer",d.callPlayer),h(this,"onDurationChange",(()=>{const e=this.getDuration();this.props.onDuration(e)})),h(this,"mute",(()=>{this.callPlayer("setMuted",!0)})),h(this,"unmute",(()=>{this.callPlayer("setMuted",!1)})),h(this,"ref",(e=>{this.container=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){const{controls:t,config:r,onError:a,playing:o}=this.props,[,s]=e.match(m.MATCH_URL_DAILYMOTION);this.player?this.player.load(s,{start:(0,d.parseStartTime)(e),autoplay:o}):(0,d.getSDK)("https://api.dmcdn.net/all.js","DM","dmAsyncInit",(e=>e.player)).then((o=>{if(!this.container)return;const n=o.player;this.player=new n(this.container,{width:"100%",height:"100%",video:s,params:{controls:t,autoplay:this.props.playing,mute:this.props.muted,start:(0,d.parseStartTime)(e),origin:window.location.origin,...r.params},events:{apiready:this.props.onReady,seeked:()=>this.props.onSeek(this.player.currentTime),video_end:this.props.onEnded,durationchange:this.onDurationChange,pause:this.props.onPause,playing:this.props.onPlay,waiting:this.props.onBuffer,error:e=>a(e)}})}),a)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.callPlayer("seek",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}getDuration(){return this.player.duration||null}getCurrentTime(){return this.player.currentTime}getSecondsLoaded(){return this.player.bufferedTime}render(){const{display:e}=this.props,t={width:"100%",height:"100%",display:e};return y.default.createElement("div",{style:t},y.default.createElement("div",{ref:this.ref}))}}h(f,"displayName","DailyMotion"),h(f,"canPlay",m.canPlay.dailymotion),h(f,"loopOnEnded",!0)}}]);
//# sourceMappingURL=reactPlayerDailyMotion.df513eae.chunk.js.map