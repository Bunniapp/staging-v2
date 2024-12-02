"use strict";(self.webpackChunkinterface=self.webpackChunkinterface||[]).push([[988],{83988:(X,E,l)=>{l.r(E),l.d(E,{SIWEController:()=>h,W3mConnectingSiwe:()=>w,W3mConnectingSiweView:()=>S,createSIWEConfig:()=>V,formatMessage:()=>p.hwK,getAddressFromMessage:()=>R,getChainIdFromMessage:()=>k,getDidAddress:()=>p.q_h,getDidChainId:()=>p.aG$,mapToSIWX:()=>D,verifySignature:()=>$});var c=l(10467),M=l(98698),A=l(43689);const d=(0,A.BX)({status:"uninitialized"}),h={state:d,subscribeKey:(t,e)=>(0,M.u$)(d,t,e),subscribe:t=>(0,A.B1)(d,()=>t(d)),_getClient(){if(!d._client)throw new Error("SIWEController client not set");return d._client},getNonce(t){var e=this;return(0,c.A)(function*(){const o=yield e._getClient().getNonce(t);return e.setNonce(o),o})()},getSession(){var t=this;return(0,c.A)(function*(){try{const s=yield t._getClient().getSession();return s&&(t.setSession(s),t.setStatus("success")),s||void 0}catch{return}})()},createMessage(t){const s=this._getClient().createMessage(t);return this.setMessage(s),s},verifyMessage(t){var e=this;return(0,c.A)(function*(){return yield e._getClient().verifyMessage(t)})()},signIn(){var t=this;return(0,c.A)(function*(){return yield t._getClient().signIn()})()},signOut(){var t=this;return(0,c.A)(function*(){const e=t._getClient();yield e.signOut(),t.setStatus("ready"),t.setSession(void 0),e.onSignOut?.()})()},onSignIn(t){this._getClient().onSignIn?.(t)},onSignOut(){this._getClient().onSignOut?.()},setSIWEClient(t){var e=this;return(0,c.A)(function*(){d._client=(0,A.KR)(t),d.session=yield e.getSession(),d.status=d.session?"success":"ready"})()},setNonce(t){d.nonce=t},setStatus(t){d.status=t},setMessage(t){d.message=t},setSession(t){d.session=t,d.status=t?"success":"ready"}};var a=l(39411);const N={FIVE_MINUTES_IN_MS:3e5};class _{constructor(e){const{enabled:s=!0,nonceRefetchIntervalMs:o=N.FIVE_MINUTES_IN_MS,sessionRefetchIntervalMs:u=N.FIVE_MINUTES_IN_MS,signOutOnAccountChange:n=!0,signOutOnDisconnect:i=!0,signOutOnNetworkChange:r=!0,...g}=e;this.options={enabled:s,nonceRefetchIntervalMs:o,sessionRefetchIntervalMs:u,signOutOnDisconnect:i,signOutOnAccountChange:n,signOutOnNetworkChange:r},this.methods=g}getNonce(e){var s=this;return(0,c.A)(function*(){const o=yield s.methods.getNonce(e);if(!o)throw new Error("siweControllerClient:getNonce - nonce is undefined");return o})()}getMessageParams(){var e=this;return(0,c.A)(function*(){return(yield e.methods.getMessageParams?.())||{}})()}createMessage(e){const s=this.methods.createMessage(e);if(!s)throw new Error("siweControllerClient:createMessage - message is undefined");return s}verifyMessage(e){var s=this;return(0,c.A)(function*(){return yield s.methods.verifyMessage(e)})()}getSession(){var e=this;return(0,c.A)(function*(){const s=yield e.methods.getSession();if(!s)throw new Error("siweControllerClient:getSession - session is undefined");return s})()}signIn(){var e=this;return(0,c.A)(function*(){yield a.UG.requestSignMessage();const s=yield e.methods.getSession();if(!s)throw new Error("Error verifying SIWE signature");return s})()}signOut(){return(0,c.A)(function*(){const e=a.UG.getSIWX();return!!e&&(yield e.setSessions([]),!0)})()}}var p=l(33906);const b=/0x[a-fA-F0-9]{40}/u,U=/Chain ID: (?<temp1>\d+)/u;function R(t){return t.match(b)?.[0]||""}function k(t){return`eip155:${t.match(U)?.[1]||1}`}function $(t){return I.apply(this,arguments)}function I(){return(I=(0,c.A)(function*({address:t,message:e,signature:s,chainId:o,projectId:u}){let n=(0,p.quX)(t,e,s);return n||(n=yield(0,p.ucy)(t,e,s,o,u)),n})).apply(this,arguments)}var W=l(7420),m=l(38324);const P=m.AH`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;let w=class extends m.WF{constructor(){super(...arguments),this.dappImageUrl=a.Hd.state.metadata?.icons,this.walletImageUrl=a.Uj.state.connectedWalletInfo?.icon}firstUpdated(){const e=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");e?.[0]&&this.createAnimation(e[0],"translate(18px)"),e?.[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){return m.qy`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,s){e.animate([{transform:"translateX(0px)"},{transform:s}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};w.styles=P,w=function(t,e,s,o){var i,u=arguments.length,n=u<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,o);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(n=(u<3?i(n):u>3?i(e,s,n):i(e,s))||n);return u>3&&n&&Object.defineProperty(e,s,n),n}([(0,W.customElement)("w3m-connecting-siwe")],w);var x=l(5284),C=l(17629),v=function(t,e,s,o){var i,u=arguments.length,n=u<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,o);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(n=(u<3?i(n):u>3?i(e,s,n):i(e,s))||n);return u>3&&n&&Object.defineProperty(e,s,n),n};let S=class extends m.WF{constructor(){super(...arguments),this.dappName=a.Hd.state.metadata?.name,this.isSigning=!1,this.isCancelling=!1}render(){return m.qy`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="main"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}onSign(){var e=this;return(0,c.A)(function*(){e.isSigning=!0,a.En.sendEvent({event:"CLICK_SIGN_SIWX_MESSAGE",type:"track",properties:{network:a.WB.state.activeCaipNetwork?.caipNetworkId||"",isSmartAccount:a.Uj.state.preferredAccountType===C.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}});try{h.setStatus("loading");const s=yield h.signIn();return h.setStatus("success"),a.En.sendEvent({event:"SIWX_AUTH_SUCCESS",type:"track",properties:{network:a.WB.state.activeCaipNetwork?.caipNetworkId||"",isSmartAccount:a.Uj.state.preferredAccountType===C.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),s}catch{const u=a.Uj.state.preferredAccountType===C.Vl.ACCOUNT_TYPES.SMART_ACCOUNT;return a.Pt.showError(u?"This application might not support Smart Accounts":"Signature declined"),h.setStatus("error"),a.En.sendEvent({event:"SIWX_AUTH_ERROR",type:"track",properties:{network:a.WB.state.activeCaipNetwork?.caipNetworkId||"",isSmartAccount:u}})}finally{e.isSigning=!1}})()}onCancel(){var e=this;return(0,c.A)(function*(){e.isCancelling=!0,a.WB.state.activeCaipAddress?(yield a.x4.disconnect(),a.W3.close()):a.IN.push("Connect"),e.isCancelling=!1,a.En.sendEvent({event:"CLICK_CANCEL_SIWX",type:"track",properties:{network:a.WB.state.activeCaipNetwork?.caipNetworkId||"",isSmartAccount:a.Uj.state.preferredAccountType===C.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}})})()}};v([(0,x.wk)()],S.prototype,"isSigning",void 0),v([(0,x.wk)()],S.prototype,"isCancelling",void 0),S=v([(0,W.customElement)("w3m-connecting-siwe-view")],S);var y=l(40526);const O=[];function D(t){function e(){return s.apply(this,arguments)}function s(){return(s=(0,c.A)(function*(){try{const n=yield t.methods.getSession();if(!n)return;if(!n?.address)throw new Error("SIWE session is missing address");if(!n?.chainId)throw new Error("SIWE session is missing chainId");return n}catch(n){return void console.warn("AppKit:SIWE:getSession - error:",n)}})).apply(this,arguments)}function o(){return u.apply(this,arguments)}function u(){return(u=(0,c.A)(function*(){yield t.methods.signOut(),t.methods.onSignOut?.()})).apply(this,arguments)}return O.forEach(n=>n()),O.push(a.WB.subscribeKey("activeCaipNetwork",function(){var n=(0,c.A)(function*(i){if(!t.options.signOutOnNetworkChange)return;const r=yield e();r&&r.chainId!==y.LX.caipNetworkIdToNumber(i?.caipNetworkId)&&(yield o())});return function(i){return n.apply(this,arguments)}}()),a.WB.subscribeKey("activeCaipAddress",function(){var n=(0,c.A)(function*(i){if(!t.options.signOutOnDisconnect||i){if(t.options.signOutOnAccountChange){const r=yield e(),g=r?.address?.toLowerCase(),f=a.wE?.getPlainAddress(i)?.toLowerCase();r&&g!==f&&(yield o())}}else(yield e())&&(yield o())});return function(i){return n.apply(this,arguments)}}())),{createMessage:n=>(0,c.A)(function*(){const i=yield t.methods.getMessageParams?.();if(!i)throw new Error("Failed to get message params!");const r=yield t.getNonce(n.accountAddress),g=i.iat||(new Date).toISOString();return{nonce:r,version:"1",requestId:i.requestId,accountAddress:n.accountAddress,chainId:n.chainId,domain:i.domain,uri:i.uri,notBefore:i.nbf,resources:i.resources,statement:i.statement,expirationTime:i.exp,issuedAt:g,toString:()=>t.createMessage({...i,chainId:y.LX.caipNetworkIdToNumber(n.chainId)||1,address:`did:pkh:${n.chainId}:${n.accountAddress}`,nonce:r,version:"1",iat:g})}})(),addSession:n=>(0,c.A)(function*(){if(!y.LX.parseEvmChainId(n.data.chainId))return Promise.resolve();if(yield t.methods.verifyMessage(n))return t.methods.onSignIn?.({address:n.data.accountAddress,chainId:y.LX.parseEvmChainId(n.data.chainId)}),Promise.resolve();throw new Error("Failed to verify message")})(),revokeSession:(n,i)=>(0,c.A)(function*(){try{yield o()}catch(r){console.warn("AppKit:SIWE:revokeSession - signOut error",r)}})(),setSessions(n){var i=this;return(0,c.A)(function*(){if(0===n.length)try{yield o()}catch(r){console.warn("AppKit:SIWE:setSessions - signOut error",r)}else{const r=n.find(g=>g.data.chainId===a.WB.getActiveCaipNetwork()?.caipNetworkId)||n[0];yield i.addSession(r)}})()},getSessions:(n,i)=>(0,c.A)(function*(){try{if(!n.startsWith("eip155:"))return[{data:{accountAddress:i,chainId:n},message:"",signature:""}];const r=yield e(),g=`eip155:${r?.chainId}`,f=r?.address?.toLowerCase(),T=i?.toLowerCase();return r&&f===T&&g===n?[{data:{accountAddress:r.address,chainId:g},message:"",signature:""}]:[]}catch(r){return console.warn("AppKit:SIWE:getSessions - error:",r),[]}})()}}function V(t){return new _(t)}}}]);