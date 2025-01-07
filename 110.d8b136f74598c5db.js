"use strict";(self.webpackChunkinterface=self.webpackChunkinterface||[]).push([[110],{2110:(k,b,a)=>{a.r(b),a.d(b,{W3mModal:()=>r});var u=a(467),t=a(9411),w=a(8131),d=a(8324),l=a(5284),v=a(6271);const y=d.AH`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  :host(.embedded) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host(.embedded) wui-card {
    max-width: 400px;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: var(--local-border-bottom-mobile-radius);
      border-bottom-right-radius: var(--local-border-bottom-mobile-radius);
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`;a(9179);var n=function(c,e,o,i){var m,h=arguments.length,s=h<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(c,e,o,i);else for(var p=c.length-1;p>=0;p--)(m=c[p])&&(s=(h<3?m(s):h>3?m(e,o,s):m(e,o))||s);return h>3&&s&&Object.defineProperty(e,o,s),s};const f="scroll-lock";let r=class extends d.WF{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.enableEmbedded=t.Hd.state.enableEmbedded,this.open=t.W3.state.open,this.caipAddress=t.WB.state.activeCaipAddress,this.caipNetwork=t.WB.state.activeCaipNetwork,this.shake=t.W3.state.shake,this.initializeTheming(),t.Np.prefetch(),this.unsubscribe.push(t.W3.subscribeKey("open",e=>e?this.onOpen():this.onClose()),t.W3.subscribeKey("shake",e=>this.shake=e),t.WB.subscribeKey("activeCaipNetwork",e=>this.onNewNetwork(e)),t.WB.subscribeKey("activeCaipAddress",e=>this.onNewAddress(e))),t.En.sendEvent({type:"track",event:"MODAL_LOADED"})}firstUpdated(){if(t.Hd.setEnableEmbedded(this.enableEmbedded),this.caipAddress){if(this.enableEmbedded)return void t.W3.close();this.onNewAddress(this.caipAddress)}}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.style.cssText=`\n      --local-border-bottom-mobile-radius: ${this.enableEmbedded?"clamp(0px, var(--wui-border-radius-l), 44px)":"0px"};\n    `,this.enableEmbedded?d.qy`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?d.qy`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return d.qy` <wui-card
      shake="${this.shake}"
      data-embedded="${(0,v.J)(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}onOverlayClick(e){var o=this;return(0,u.A)(function*(){e.target===e.currentTarget&&(yield o.handleClose())})()}handleClose(){return(0,u.A)(function*(){"UnsupportedChain"===t.IN.state.view||(yield t.UG.isSIWXCloseDisabled())?t.W3.shake():t.W3.close()})()}initializeTheming(){const{themeVariables:e,themeMode:o}=t.Wn.state,i=w.UiHelperUtil.getColorTheme(o);(0,w.initializeTheming)(e,i)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),t.Pt.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=f,e.textContent="\n      body {\n        touch-action: none;\n        overflow: hidden;\n        overscroll-behavior: contain;\n      }\n      w3m-modal {\n        pointer-events: auto;\n      }\n    ",document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${f}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;const e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",o=>{if("Escape"===o.key)this.handleClose();else if("Tab"===o.key){const{tagName:i}=o.target;i&&!i.includes("W3M-")&&!i.includes("WUI-")&&e?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}onNewAddress(e){var o=this;return(0,u.A)(function*(){const i=t.wE.getPlainAddress(e);o.caipAddress=e,yield t.UG.initializeIfEnabled(),(!i||o.enableEmbedded)&&t.W3.close()})()}onNewNetwork(e){if(!this.caipAddress)return this.caipNetwork=e,void t.IN.goBack();const o=this.caipNetwork?.caipNetworkId?.toString(),i=e?.caipNetworkId?.toString();o&&i&&o!==i&&"Unknown Network"!==this.caipNetwork?.name&&t.IN.goBack(),this.caipNetwork=e}};r.styles=y,n([(0,l.MZ)({type:Boolean})],r.prototype,"enableEmbedded",void 0),n([(0,l.wk)()],r.prototype,"open",void 0),n([(0,l.wk)()],r.prototype,"caipAddress",void 0),n([(0,l.wk)()],r.prototype,"caipNetwork",void 0),n([(0,l.wk)()],r.prototype,"shake",void 0),r=n([(0,w.customElement)("w3m-modal")],r)}}]);