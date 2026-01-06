import{i as W,C as j,A as T,O as N,a as S,b as _,c as qe,d,E as O,R as E,e as B,f as Lt,g as ge,h as de,H as $n,r as V,j as ue,T as bt,S as Le,M as Ht,k as Kt,l as Gt,m as Qt,w as Ae,n as le,o as xn,p as En,q as Nt,s as Jt,W as yt}from"./chunk-C-pHst2y.js";import{n as u,r as $,c as I,o as k,U as oe,i as Rn,t as _n,e as Sn}from"./chunk-CgVV9s36.js";import"./index.js";var Ie=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let me=class extends W{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=j.state.connectors,this.count=T.state.count,this.filteredCount=T.state.filteredWallets.length,this.isFetchingRecommendedWallets=T.state.isFetchingRecommendedWallets,this.unsubscribe.push(j.subscribeKey("connectors",t=>this.connectors=t),T.subscribeKey("count",t=>this.count=t),T.subscribeKey("filteredWallets",t=>this.filteredCount=t.length),T.subscribeKey("isFetchingRecommendedWallets",t=>this.isFetchingRecommendedWallets=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.find(c=>c.id==="walletConnect"),{allWallets:i}=N.state;if(!t||i==="HIDE"||i==="ONLY_MOBILE"&&!S.isMobile())return null;const o=T.state.featured.length,r=this.count+o,n=r<10?r:Math.floor(r/10)*10,s=this.filteredCount>0?this.filteredCount:n;let a=`${s}`;this.filteredCount>0?a=`${this.filteredCount}`:s<r&&(a=`${s}+`);const l=_.hasAnyConnection(qe.CONNECTOR_ID.WALLET_CONNECT);return d`
      <wui-list-wallet
        name="Search Wallet"
        walletIcon="search"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${a}
        tagVariant="info"
        data-testid="all-wallets"
        tabIdx=${k(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        ?disabled=${l}
        size="sm"
      ></wui-list-wallet>
    `}onAllWallets(){O.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),E.push("AllWallets",{redirectView:E.state.data?.redirectView})}};Ie([u()],me.prototype,"tabIdx",void 0);Ie([$()],me.prototype,"connectors",void 0);Ie([$()],me.prototype,"count",void 0);Ie([$()],me.prototype,"filteredCount",void 0);Ie([$()],me.prototype,"isFetchingRecommendedWallets",void 0);me=Ie([I("w3m-all-wallets-widget")],me);const Tn=B`
  :host {
    margin-top: ${({spacing:e})=>e[1]};
  }
  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1)
      ${({spacing:e})=>e[2]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }
`;var se=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let G=class extends W{constructor(){super(),this.unsubscribe=[],this.connectors=j.state.connectors,this.recommended=T.state.recommended,this.featured=T.state.featured,this.explorerWallets=T.state.explorerWallets,this.connections=_.state.connections,this.connectorImages=Lt.state.connectorImages,this.loadingTelegram=!1,this.unsubscribe.push(j.subscribeKey("connectors",t=>this.connectors=t),_.subscribeKey("connections",t=>this.connections=t),Lt.subscribeKey("connectorImages",t=>this.connectorImages=t),T.subscribeKey("recommended",t=>this.recommended=t),T.subscribeKey("featured",t=>this.featured=t),T.subscribeKey("explorerFilteredWallets",t=>{this.explorerWallets=t?.length?t:T.state.explorerWallets}),T.subscribeKey("explorerWallets",t=>{this.explorerWallets?.length||(this.explorerWallets=t)})),S.isTelegram()&&S.isIos()&&(this.loadingTelegram=!_.state.wcUri,this.unsubscribe.push(_.subscribeKey("wcUri",t=>this.loadingTelegram=!t)))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return d`
      <wui-flex flexDirection="column" gap="2"> ${this.connectorListTemplate()} </wui-flex>
    `}mapConnectorsToExplorerWallets(t,i){return t.map(o=>{if(o.type==="MULTI_CHAIN"&&o.connectors){const n=o.connectors.map(c=>c.id),s=o.connectors.map(c=>c.name),a=o.connectors.map(c=>c.info?.rdns),l=i?.find(c=>n.includes(c.id)||s.includes(c.name)||c.rdns&&(a.includes(c.rdns)||n.includes(c.rdns)));return o.explorerWallet=l??o.explorerWallet,o}const r=i?.find(n=>n.id===o.id||n.rdns===o.info?.rdns||n.name===o.name);return o.explorerWallet=r??o.explorerWallet,o})}processConnectorsByType(t,i=!0){const o=ge.sortConnectorsByExplorerWallet([...t]);return i?o.filter(ge.showConnector):o}connectorListTemplate(){const t=this.mapConnectorsToExplorerWallets(this.connectors,this.explorerWallets??[]),i=ge.getConnectorsByType(t,this.recommended,this.featured),o=this.processConnectorsByType(i.announced.filter(f=>f.id!=="walletConnect")),r=this.processConnectorsByType(i.injected),n=this.processConnectorsByType(i.multiChain.filter(f=>f.name!=="WalletConnect"),!1),s=i.custom,a=i.recent,l=this.processConnectorsByType(i.external.filter(f=>f.id!==qe.CONNECTOR_ID.COINBASE_SDK)),c=i.recommended,h=i.featured,R=ge.getConnectorTypeOrder({custom:s,recent:a,announced:o,injected:r,multiChain:n,recommended:c,featured:h,external:l}),C=this.connectors.find(f=>f.id==="walletConnect"),v=S.isMobile(),y=[];for(const f of R)switch(f){case"walletConnect":{!v&&C&&y.push({kind:"connector",subtype:"walletConnect",connector:C});break}case"recent":{ge.getFilteredRecentWallets().forEach(g=>y.push({kind:"wallet",subtype:"recent",wallet:g}));break}case"injected":{n.forEach(w=>y.push({kind:"connector",subtype:"multiChain",connector:w})),o.forEach(w=>y.push({kind:"connector",subtype:"announced",connector:w})),r.forEach(w=>y.push({kind:"connector",subtype:"injected",connector:w}));break}case"featured":{h.forEach(w=>y.push({kind:"wallet",subtype:"featured",wallet:w}));break}case"custom":{ge.getFilteredCustomWallets(s??[]).forEach(g=>y.push({kind:"wallet",subtype:"custom",wallet:g}));break}case"external":{l.forEach(w=>y.push({kind:"connector",subtype:"external",connector:w}));break}case"recommended":{ge.getCappedRecommendedWallets(c).forEach(g=>y.push({kind:"wallet",subtype:"recommended",wallet:g}));break}default:console.warn(`Unknown connector type: ${f}`)}return y.map((f,w)=>f.kind==="connector"?this.renderConnector(f,w):this.renderWallet(f,w))}renderConnector(t,i){const o=t.connector,r=de.getConnectorImage(o)||this.connectorImages[o?.imageId??""],s=(this.connections.get(o.chain)??[]).some(R=>$n.isLowerCaseMatch(R.connectorId,o.id));let a,l;t.subtype==="multiChain"?(a="multichain",l="info"):t.subtype==="walletConnect"?(a="qr code",l="accent"):t.subtype==="injected"||t.subtype==="announced"?(a=s?"connected":"installed",l=s?"info":"success"):(a=void 0,l=void 0);const c=_.hasAnyConnection(qe.CONNECTOR_ID.WALLET_CONNECT),h=t.subtype==="walletConnect"||t.subtype==="external"?c:!1;return d`
      <w3m-list-wallet
        displayIndex=${i}
        imageSrc=${k(r)}
        .installed=${!0}
        name=${o.name??"Unknown"}
        .tagVariant=${l}
        tagLabel=${k(a)}
        data-testid=${`wallet-selector-${o.id.toLowerCase()}`}
        size="sm"
        @click=${()=>this.onClickConnector(t)}
        tabIdx=${k(this.tabIdx)}
        ?disabled=${h}
        rdnsId=${k(o.explorerWallet?.rdns||void 0)}
        walletRank=${k(o.explorerWallet?.order)}
      >
      </w3m-list-wallet>
    `}onClickConnector(t){const i=E.state.data?.redirectView;if(t.subtype==="walletConnect"){j.setActiveConnector(t.connector),S.isMobile()?E.push("AllWallets"):E.push("ConnectingWalletConnect",{redirectView:i});return}if(t.subtype==="multiChain"){j.setActiveConnector(t.connector),E.push("ConnectingMultiChain",{redirectView:i});return}if(t.subtype==="injected"){j.setActiveConnector(t.connector),E.push("ConnectingExternal",{connector:t.connector,redirectView:i,wallet:t.connector.explorerWallet});return}if(t.subtype==="announced"){if(t.connector.id==="walletConnect"){S.isMobile()?E.push("AllWallets"):E.push("ConnectingWalletConnect",{redirectView:i});return}E.push("ConnectingExternal",{connector:t.connector,redirectView:i,wallet:t.connector.explorerWallet});return}E.push("ConnectingExternal",{connector:t.connector,redirectView:i})}renderWallet(t,i){const o=t.wallet,r=de.getWalletImage(o),s=_.hasAnyConnection(qe.CONNECTOR_ID.WALLET_CONNECT),a=this.loadingTelegram,l=t.subtype==="recent"?"recent":void 0,c=t.subtype==="recent"?"info":void 0;return d`
      <w3m-list-wallet
        displayIndex=${i}
        imageSrc=${k(r)}
        name=${o.name??"Unknown"}
        @click=${()=>this.onClickWallet(t)}
        size="sm"
        data-testid=${`wallet-selector-${o.id}`}
        tabIdx=${k(this.tabIdx)}
        ?loading=${a}
        ?disabled=${s}
        rdnsId=${k(o.rdns||void 0)}
        walletRank=${k(o.order)}
        tagLabel=${k(l)}
        .tagVariant=${c}
      >
      </w3m-list-wallet>
    `}onClickWallet(t){const i=E.state.data?.redirectView;if(t.subtype==="featured"){j.selectWalletConnector(t.wallet);return}if(t.subtype==="recent"){if(this.loadingTelegram)return;j.selectWalletConnector(t.wallet);return}if(t.subtype==="custom"){if(this.loadingTelegram)return;E.push("ConnectingWalletConnect",{wallet:t.wallet,redirectView:i});return}if(this.loadingTelegram)return;const o=j.getConnector({id:t.wallet.id,rdns:t.wallet.rdns});o?E.push("ConnectingExternal",{connector:o,redirectView:i}):E.push("ConnectingWalletConnect",{wallet:t.wallet,redirectView:i})}};G.styles=Tn;se([u({type:Number})],G.prototype,"tabIdx",void 0);se([$()],G.prototype,"connectors",void 0);se([$()],G.prototype,"recommended",void 0);se([$()],G.prototype,"featured",void 0);se([$()],G.prototype,"explorerWallets",void 0);se([$()],G.prototype,"connections",void 0);se([$()],G.prototype,"connectorImages",void 0);se([$()],G.prototype,"loadingTelegram",void 0);G=se([I("w3m-connector-list")],G);const In=B`
  :host {
    flex: 1;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    column-gap: ${({spacing:e})=>e[1]};
    color: ${({tokens:e})=>e.theme.textSecondary};
    border-radius: ${({borderRadius:e})=>e[20]};
    background-color: transparent;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-active='true'] {
    color: ${({tokens:e})=>e.theme.textPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundTertiary};
  }

  button:hover:enabled:not([data-active='true']),
  button:active:enabled:not([data-active='true']) {
    wui-text,
    wui-icon {
      color: ${({tokens:e})=>e.theme.textPrimary};
    }
  }
`;var Oe=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const Wn={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},kn={lg:"md",md:"sm",sm:"sm"};let we=class extends W{constructor(){super(...arguments),this.icon="mobile",this.size="md",this.label="",this.active=!1}render(){return d`
      <button data-active=${this.active}>
        ${this.icon?d`<wui-icon size=${kn[this.size]} name=${this.icon}></wui-icon>`:""}
        <wui-text variant=${Wn[this.size]}> ${this.label} </wui-text>
      </button>
    `}};we.styles=[V,ue,In];Oe([u()],we.prototype,"icon",void 0);Oe([u()],we.prototype,"size",void 0);Oe([u()],we.prototype,"label",void 0);Oe([u({type:Boolean})],we.prototype,"active",void 0);we=Oe([I("wui-tab-item")],we);const An=B`
  :host {
    display: inline-flex;
    align-items: center;
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[32]};
    padding: ${({spacing:e})=>e["01"]};
    box-sizing: border-box;
  }

  :host([data-size='sm']) {
    height: 26px;
  }

  :host([data-size='md']) {
    height: 36px;
  }
`;var Me=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let be=class extends W{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.size="md",this.activeTab=0}render(){return this.dataset.size=this.size,this.tabs.map((t,i)=>{const o=i===this.activeTab;return d`
        <wui-tab-item
          @click=${()=>this.onTabClick(i)}
          icon=${t.icon}
          size=${this.size}
          label=${t.label}
          ?active=${o}
          data-active=${o}
          data-testid="tab-${t.label?.toLowerCase()}"
        ></wui-tab-item>
      `})}onTabClick(t){this.activeTab=t,this.onTabChange(t)}};be.styles=[V,ue,An];Me([u({type:Array})],be.prototype,"tabs",void 0);Me([u()],be.prototype,"onTabChange",void 0);Me([u()],be.prototype,"size",void 0);Me([$()],be.prototype,"activeTab",void 0);be=Me([I("wui-tabs")],be);var Rt=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let He=class extends W{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.generateTabs();return d`
      <wui-flex justifyContent="center" .padding=${["0","0","4","0"]}>
        <wui-tabs .tabs=${t} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){const t=this.platforms.map(i=>i==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:i==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:i==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:i==="web"?{label:"Webapp",icon:"browser",platform:"web"}:i==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=t.map(({platform:i})=>i),t}onTabChange(t){const i=this.platformTabs[t];i&&this.onSelectPlatfrom?.(i)}};Rt([u({type:Array})],He.prototype,"platforms",void 0);Rt([u()],He.prototype,"onSelectPlatfrom",void 0);He=Rt([I("w3m-connecting-header")],He);const Bn=B`
  :host {
    display: block;
    width: 100px;
    height: 100px;
  }

  svg {
    width: 100px;
    height: 100px;
  }

  rect {
    fill: none;
    stroke: ${e=>e.colors.accent100};
    stroke-width: 3px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var Yt=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ke=class extends W{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const t=this.radius>50?50:this.radius,o=36-t,r=116+o,n=245+o,s=360+o*1.75;return d`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${t}
          stroke-dasharray="${r} ${n}"
          stroke-dashoffset=${s}
        />
      </svg>
    `}};Ke.styles=[V,Bn];Yt([u({type:Number})],Ke.prototype,"radius",void 0);Ke=Yt([I("wui-loading-thumbnail")],Ke);const Pn=B`
  wui-flex {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    padding-left: ${({spacing:e})=>e[3]};
    padding-right: ${({spacing:e})=>e[3]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:e})=>e[6]};
  }

  wui-text {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  wui-icon {
    width: 12px;
    height: 12px;
  }
`;var ot=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let xe=class extends W{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return d`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="inherit">${this.label}</wui-text>
        <wui-button variant="accent-secondary" size="sm">
          ${this.buttonLabel}
          <wui-icon name="chevronRight" color="inherit" size="inherit" slot="iconRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};xe.styles=[V,ue,Pn];ot([u({type:Boolean})],xe.prototype,"disabled",void 0);ot([u()],xe.prototype,"label",void 0);ot([u()],xe.prototype,"buttonLabel",void 0);xe=ot([I("wui-cta-button")],xe);const Ln=B`
  :host {
    display: block;
    padding: 0 ${({spacing:e})=>e[5]} ${({spacing:e})=>e[5]};
  }
`;var Xt=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ge=class extends W{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:t,app_store:i,play_store:o,chrome_store:r,homepage:n}=this.wallet,s=S.isMobile(),a=S.isIos(),l=S.isAndroid(),c=[i,o,n,r].filter(Boolean).length>1,h=oe.getTruncateString({string:t,charsStart:12,charsEnd:0,truncate:"end"});return c&&!s?d`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${()=>E.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!c&&n?d`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:i&&a?d`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:o&&l?d`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&S.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&S.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&S.openHref(this.wallet.homepage,"_blank")}};Ge.styles=[Ln];Xt([u({type:Object})],Ge.prototype,"wallet",void 0);Ge=Xt([I("w3m-mobile-download-links")],Ge);const Nn=B`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-wallet-image {
    width: 56px;
    height: 56px;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e[1]} * -1);
    bottom: calc(${({spacing:e})=>e[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: ${({durations:e})=>e.lg};
    transition-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:e})=>e[4]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:e})=>e["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  w3m-mobile-download-links {
    padding: 0px;
    width: 100%;
  }
`;var Q=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};class L extends W{constructor(){super(),this.wallet=E.state.data?.wallet,this.connector=E.state.data?.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=de.getConnectorImage(this.connector)??de.getWalletImage(this.wallet),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=_.state.wcUri,this.error=_.state.wcError,this.ready=!1,this.showRetry=!1,this.label=void 0,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(_.subscribeKey("wcUri",t=>{this.uri=t,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),_.subscribeKey("wcError",t=>this.error=t)),(S.isTelegram()||S.isSafari())&&S.isIos()&&_.state.wcUri&&this.onConnect?.()}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),_.setWcError(!1),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();const t=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let i="";return this.label?i=this.label:(i=`Continue in ${this.name}`,this.error&&(i="Connection declined")),d`
      <wui-flex
        data-error=${k(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="6"
      >
        <wui-flex gap="2" justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${k(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="6"> <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2","0","0","0"]}
        >
          <wui-text align="center" variant="lg-medium" color=${this.error?"error":"primary"}>
            ${i}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">${t}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?d`
                <wui-button
                  variant="neutral-secondary"
                  size="md"
                  ?disabled=${this.isRetrying||this.isLoading}
                  @click=${this.onTryAgain.bind(this)}
                  data-testid="w3m-connecting-widget-secondary-button"
                >
                  <wui-icon
                    color="inherit"
                    slot="iconLeft"
                    name=${this.secondaryBtnIcon}
                  ></wui-icon>
                  ${this.secondaryBtnLabel}
                </wui-button>
              `:null}
      </wui-flex>

      ${this.isWalletConnect?d`
              <wui-flex .padding=${["0","5","5","5"]} justifyContent="center">
                <wui-link
                  @click=${this.onCopyUri}
                  variant="secondary"
                  icon="copy"
                  data-testid="wui-link-copy"
                >
                  Copy link
                </wui-link>
              </wui-flex>
            `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links></wui-flex>
      </wui-flex>
    `}onShowRetry(){this.error&&!this.showRetry&&(this.showRetry=!0,this.shadowRoot?.querySelector("wui-button")?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}onTryAgain(){_.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.()}loaderTemplate(){const t=bt.state.themeVariables["--w3m-border-radius-master"],i=t?parseInt(t.replace("px",""),10):4;return d`<wui-loading-thumbnail radius=${i*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(S.copyToClopboard(this.uri),Le.showSuccess("Link copied"))}catch{Le.showError("Failed to copy")}}}L.styles=Nn;Q([$()],L.prototype,"isRetrying",void 0);Q([$()],L.prototype,"uri",void 0);Q([$()],L.prototype,"error",void 0);Q([$()],L.prototype,"ready",void 0);Q([$()],L.prototype,"showRetry",void 0);Q([$()],L.prototype,"label",void 0);Q([$()],L.prototype,"secondaryBtnLabel",void 0);Q([$()],L.prototype,"secondaryLabel",void 0);Q([$()],L.prototype,"isLoading",void 0);Q([u({type:Boolean})],L.prototype,"isMobile",void 0);Q([u()],L.prototype,"onRetry",void 0);var On=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ot=class extends L{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),O.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:E.state.view}})}async onConnectProxy(){try{this.error=!1;const{connectors:t}=j.state,i=t.find(o=>o.type==="ANNOUNCED"&&o.info?.rdns===this.wallet?.rdns||o.type==="INJECTED"||o.name===this.wallet?.name);if(i)await _.connectExternal(i,i.chain);else throw new Error("w3m-connecting-wc-browser: No connector found");Ht.close(),O.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.wallet?.name||"Unknown",view:E.state.view,walletRank:this.wallet?.order}})}catch(t){t instanceof Kt&&t.originalName===Gt.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?O.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:t.message}}):O.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:t?.message??"Unknown"}}),this.error=!0}}};Ot=On([I("w3m-connecting-wc-browser")],Ot);var Mn=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Mt=class extends L{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),O.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:E.state.view}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:t,name:i}=this.wallet,{redirect:o,href:r}=S.formatNativeUrl(t,this.uri);_.setWcLinking({name:i,href:r}),_.setRecentWallet(this.wallet),S.openHref(o,"_blank")}catch{this.error=!0}}};Mt=Mn([I("w3m-connecting-wc-desktop")],Mt);var We=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ye=class extends L{constructor(){if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=N.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:t,link_mode:i,name:o}=this.wallet,{redirect:r,redirectUniversalLink:n,href:s}=S.formatNativeUrl(t,this.uri,i);this.redirectDeeplink=r,this.redirectUniversalLink=n,this.target=S.isIframe()?"_top":"_self",_.setWcLinking({name:o,href:s}),_.setRecentWallet(this.wallet),this.preferUniversalLinks&&this.redirectUniversalLink?S.openHref(this.redirectUniversalLink,this.target):S.openHref(this.redirectDeeplink,this.target)}catch(t){O.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:t instanceof Error?t.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=Qt.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(_.subscribeKey("wcUri",()=>{this.onHandleURI()})),O.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:E.state.view}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onTryAgain(){_.setWcError(!1),this.onConnect?.()}};We([$()],ye.prototype,"redirectDeeplink",void 0);We([$()],ye.prototype,"redirectUniversalLink",void 0);We([$()],ye.prototype,"target",void 0);We([$()],ye.prototype,"preferUniversalLinks",void 0);We([$()],ye.prototype,"isLoading",void 0);ye=We([I("w3m-connecting-wc-mobile")],ye);var De={},Dn=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},Zt={},U={};let _t;const jn=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];U.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};U.getSymbolTotalCodewords=function(t){return jn[t]};U.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};U.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');_t=t};U.isKanjiModeEnabled=function(){return typeof _t<"u"};U.toSJIS=function(t){return _t(t)};var rt={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+i)}}e.isValid=function(o){return o&&typeof o.bit<"u"&&o.bit>=0&&o.bit<4},e.from=function(o,r){if(e.isValid(o))return o;try{return t(o)}catch{return r}}})(rt);function en(){this.buffer=[],this.length=0}en.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let i=0;i<t;i++)this.putBit((e>>>t-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var Un=en;function je(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}je.prototype.set=function(e,t,i,o){const r=e*this.size+t;this.data[r]=i,o&&(this.reservedBit[r]=!0)};je.prototype.get=function(e,t){return this.data[e*this.size+t]};je.prototype.xor=function(e,t,i){this.data[e*this.size+t]^=i};je.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var zn=je,tn={};(function(e){const t=U.getSymbolSize;e.getRowColCoords=function(o){if(o===1)return[];const r=Math.floor(o/7)+2,n=t(o),s=n===145?26:Math.ceil((n-13)/(2*r-2))*2,a=[n-7];for(let l=1;l<r-1;l++)a[l]=a[l-1]-s;return a.push(6),a.reverse()},e.getPositions=function(o){const r=[],n=e.getRowColCoords(o),s=n.length;for(let a=0;a<s;a++)for(let l=0;l<s;l++)a===0&&l===0||a===0&&l===s-1||a===s-1&&l===0||r.push([n[a],n[l]]);return r}})(tn);var nn={};const Fn=U.getSymbolSize,Dt=7;nn.getPositions=function(t){const i=Fn(t);return[[0,0],[i-Dt,0],[0,i-Dt]]};var on={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(r){return r!=null&&r!==""&&!isNaN(r)&&r>=0&&r<=7},e.from=function(r){return e.isValid(r)?parseInt(r,10):void 0},e.getPenaltyN1=function(r){const n=r.size;let s=0,a=0,l=0,c=null,h=null;for(let R=0;R<n;R++){a=l=0,c=h=null;for(let C=0;C<n;C++){let v=r.get(R,C);v===c?a++:(a>=5&&(s+=t.N1+(a-5)),c=v,a=1),v=r.get(C,R),v===h?l++:(l>=5&&(s+=t.N1+(l-5)),h=v,l=1)}a>=5&&(s+=t.N1+(a-5)),l>=5&&(s+=t.N1+(l-5))}return s},e.getPenaltyN2=function(r){const n=r.size;let s=0;for(let a=0;a<n-1;a++)for(let l=0;l<n-1;l++){const c=r.get(a,l)+r.get(a,l+1)+r.get(a+1,l)+r.get(a+1,l+1);(c===4||c===0)&&s++}return s*t.N2},e.getPenaltyN3=function(r){const n=r.size;let s=0,a=0,l=0;for(let c=0;c<n;c++){a=l=0;for(let h=0;h<n;h++)a=a<<1&2047|r.get(c,h),h>=10&&(a===1488||a===93)&&s++,l=l<<1&2047|r.get(h,c),h>=10&&(l===1488||l===93)&&s++}return s*t.N3},e.getPenaltyN4=function(r){let n=0;const s=r.data.length;for(let l=0;l<s;l++)n+=r.data[l];return Math.abs(Math.ceil(n*100/s/5)-10)*t.N4};function i(o,r,n){switch(o){case e.Patterns.PATTERN000:return(r+n)%2===0;case e.Patterns.PATTERN001:return r%2===0;case e.Patterns.PATTERN010:return n%3===0;case e.Patterns.PATTERN011:return(r+n)%3===0;case e.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(n/3))%2===0;case e.Patterns.PATTERN101:return r*n%2+r*n%3===0;case e.Patterns.PATTERN110:return(r*n%2+r*n%3)%2===0;case e.Patterns.PATTERN111:return(r*n%3+(r+n)%2)%2===0;default:throw new Error("bad maskPattern:"+o)}}e.applyMask=function(r,n){const s=n.size;for(let a=0;a<s;a++)for(let l=0;l<s;l++)n.isReserved(l,a)||n.xor(l,a,i(r,l,a))},e.getBestMask=function(r,n){const s=Object.keys(e.Patterns).length;let a=0,l=1/0;for(let c=0;c<s;c++){n(c),e.applyMask(c,r);const h=e.getPenaltyN1(r)+e.getPenaltyN2(r)+e.getPenaltyN3(r)+e.getPenaltyN4(r);e.applyMask(c,r),h<l&&(l=h,a=c)}return a}})(on);var st={};const ce=rt,Fe=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Ve=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];st.getBlocksCount=function(t,i){switch(i){case ce.L:return Fe[(t-1)*4+0];case ce.M:return Fe[(t-1)*4+1];case ce.Q:return Fe[(t-1)*4+2];case ce.H:return Fe[(t-1)*4+3];default:return}};st.getTotalCodewordsCount=function(t,i){switch(i){case ce.L:return Ve[(t-1)*4+0];case ce.M:return Ve[(t-1)*4+1];case ce.Q:return Ve[(t-1)*4+2];case ce.H:return Ve[(t-1)*4+3];default:return}};var rn={},at={};const Be=new Uint8Array(512),Qe=new Uint8Array(256);(function(){let t=1;for(let i=0;i<255;i++)Be[i]=t,Qe[t]=i,t<<=1,t&256&&(t^=285);for(let i=255;i<512;i++)Be[i]=Be[i-255]})();at.log=function(t){if(t<1)throw new Error("log("+t+")");return Qe[t]};at.exp=function(t){return Be[t]};at.mul=function(t,i){return t===0||i===0?0:Be[Qe[t]+Qe[i]]};(function(e){const t=at;e.mul=function(o,r){const n=new Uint8Array(o.length+r.length-1);for(let s=0;s<o.length;s++)for(let a=0;a<r.length;a++)n[s+a]^=t.mul(o[s],r[a]);return n},e.mod=function(o,r){let n=new Uint8Array(o);for(;n.length-r.length>=0;){const s=n[0];for(let l=0;l<r.length;l++)n[l]^=t.mul(r[l],s);let a=0;for(;a<n.length&&n[a]===0;)a++;n=n.slice(a)}return n},e.generateECPolynomial=function(o){let r=new Uint8Array([1]);for(let n=0;n<o;n++)r=e.mul(r,new Uint8Array([1,t.exp(n)]));return r}})(rn);const sn=rn;function St(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}St.prototype.initialize=function(t){this.degree=t,this.genPoly=sn.generateECPolynomial(this.degree)};St.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(t.length+this.degree);i.set(t);const o=sn.mod(i,this.genPoly),r=this.degree-o.length;if(r>0){const n=new Uint8Array(this.degree);return n.set(o,r),n}return o};var Vn=St,an={},he={},Tt={};Tt.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var Z={};const ln="[0-9]+",qn="[A-Z $%*+\\-./:]+";let Ne="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";Ne=Ne.replace(/u/g,"\\u");const Hn="(?:(?![A-Z0-9 $%*+\\-./:]|"+Ne+`)(?:.|[\r
]))+`;Z.KANJI=new RegExp(Ne,"g");Z.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");Z.BYTE=new RegExp(Hn,"g");Z.NUMERIC=new RegExp(ln,"g");Z.ALPHANUMERIC=new RegExp(qn,"g");const Kn=new RegExp("^"+Ne+"$"),Gn=new RegExp("^"+ln+"$"),Qn=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");Z.testKanji=function(t){return Kn.test(t)};Z.testNumeric=function(t){return Gn.test(t)};Z.testAlphanumeric=function(t){return Qn.test(t)};(function(e){const t=Tt,i=Z;e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(n,s){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?n.ccBits[0]:s<27?n.ccBits[1]:n.ccBits[2]},e.getBestModeForData=function(n){return i.testNumeric(n)?e.NUMERIC:i.testAlphanumeric(n)?e.ALPHANUMERIC:i.testKanji(n)?e.KANJI:e.BYTE},e.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},e.isValid=function(n){return n&&n.bit&&n.ccBits};function o(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+r)}}e.from=function(n,s){if(e.isValid(n))return n;try{return o(n)}catch{return s}}})(he);(function(e){const t=U,i=st,o=rt,r=he,n=Tt,s=7973,a=t.getBCHDigit(s);function l(C,v,y){for(let f=1;f<=40;f++)if(v<=e.getCapacity(f,y,C))return f}function c(C,v){return r.getCharCountIndicator(C,v)+4}function h(C,v){let y=0;return C.forEach(function(f){const w=c(f.mode,v);y+=w+f.getBitsLength()}),y}function R(C,v){for(let y=1;y<=40;y++)if(h(C,y)<=e.getCapacity(y,v,r.MIXED))return y}e.from=function(v,y){return n.isValid(v)?parseInt(v,10):y},e.getCapacity=function(v,y,f){if(!n.isValid(v))throw new Error("Invalid QR Code version");typeof f>"u"&&(f=r.BYTE);const w=t.getSymbolTotalCodewords(v),g=i.getTotalCodewordsCount(v,y),m=(w-g)*8;if(f===r.MIXED)return m;const b=m-c(f,v);switch(f){case r.NUMERIC:return Math.floor(b/10*3);case r.ALPHANUMERIC:return Math.floor(b/11*2);case r.KANJI:return Math.floor(b/13);case r.BYTE:default:return Math.floor(b/8)}},e.getBestVersionForData=function(v,y){let f;const w=o.from(y,o.M);if(Array.isArray(v)){if(v.length>1)return R(v,w);if(v.length===0)return 1;f=v[0]}else f=v;return l(f.mode,f.getLength(),w)},e.getEncodedBits=function(v){if(!n.isValid(v)||v<7)throw new Error("Invalid QR Code version");let y=v<<12;for(;t.getBCHDigit(y)-a>=0;)y^=s<<t.getBCHDigit(y)-a;return v<<12|y}})(an);var cn={};const vt=U,dn=1335,Jn=21522,jt=vt.getBCHDigit(dn);cn.getEncodedBits=function(t,i){const o=t.bit<<3|i;let r=o<<10;for(;vt.getBCHDigit(r)-jt>=0;)r^=dn<<vt.getBCHDigit(r)-jt;return(o<<10|r)^Jn};var un={};const Yn=he;function Ee(e){this.mode=Yn.NUMERIC,this.data=e.toString()}Ee.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};Ee.prototype.getLength=function(){return this.data.length};Ee.prototype.getBitsLength=function(){return Ee.getBitsLength(this.data.length)};Ee.prototype.write=function(t){let i,o,r;for(i=0;i+3<=this.data.length;i+=3)o=this.data.substr(i,3),r=parseInt(o,10),t.put(r,10);const n=this.data.length-i;n>0&&(o=this.data.substr(i),r=parseInt(o,10),t.put(r,n*3+1))};var Xn=Ee;const Zn=he,ut=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function Re(e){this.mode=Zn.ALPHANUMERIC,this.data=e}Re.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};Re.prototype.getLength=function(){return this.data.length};Re.prototype.getBitsLength=function(){return Re.getBitsLength(this.data.length)};Re.prototype.write=function(t){let i;for(i=0;i+2<=this.data.length;i+=2){let o=ut.indexOf(this.data[i])*45;o+=ut.indexOf(this.data[i+1]),t.put(o,11)}this.data.length%2&&t.put(ut.indexOf(this.data[i]),6)};var ei=Re,ti=function(t){for(var i=[],o=t.length,r=0;r<o;r++){var n=t.charCodeAt(r);if(n>=55296&&n<=56319&&o>r+1){var s=t.charCodeAt(r+1);s>=56320&&s<=57343&&(n=(n-55296)*1024+s-56320+65536,r+=1)}if(n<128){i.push(n);continue}if(n<2048){i.push(n>>6|192),i.push(n&63|128);continue}if(n<55296||n>=57344&&n<65536){i.push(n>>12|224),i.push(n>>6&63|128),i.push(n&63|128);continue}if(n>=65536&&n<=1114111){i.push(n>>18|240),i.push(n>>12&63|128),i.push(n>>6&63|128),i.push(n&63|128);continue}i.push(239,191,189)}return new Uint8Array(i).buffer};const ni=ti,ii=he;function _e(e){this.mode=ii.BYTE,typeof e=="string"&&(e=ni(e)),this.data=new Uint8Array(e)}_e.getBitsLength=function(t){return t*8};_e.prototype.getLength=function(){return this.data.length};_e.prototype.getBitsLength=function(){return _e.getBitsLength(this.data.length)};_e.prototype.write=function(e){for(let t=0,i=this.data.length;t<i;t++)e.put(this.data[t],8)};var oi=_e;const ri=he,si=U;function Se(e){this.mode=ri.KANJI,this.data=e}Se.getBitsLength=function(t){return t*13};Se.prototype.getLength=function(){return this.data.length};Se.prototype.getBitsLength=function(){return Se.getBitsLength(this.data.length)};Se.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let i=si.toSJIS(this.data[t]);if(i>=33088&&i<=40956)i-=33088;else if(i>=57408&&i<=60351)i-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);i=(i>>>8&255)*192+(i&255),e.put(i,13)}};var ai=Se,hn={exports:{}};(function(e){var t={single_source_shortest_paths:function(i,o,r){var n={},s={};s[o]=0;var a=t.PriorityQueue.make();a.push(o,0);for(var l,c,h,R,C,v,y,f,w;!a.empty();){l=a.pop(),c=l.value,R=l.cost,C=i[c]||{};for(h in C)C.hasOwnProperty(h)&&(v=C[h],y=R+v,f=s[h],w=typeof s[h]>"u",(w||f>y)&&(s[h]=y,a.push(h,y),n[h]=c))}if(typeof r<"u"&&typeof s[r]>"u"){var g=["Could not find a path from ",o," to ",r,"."].join("");throw new Error(g)}return n},extract_shortest_path_from_predecessor_list:function(i,o){for(var r=[],n=o;n;)r.push(n),i[n],n=i[n];return r.reverse(),r},find_path:function(i,o,r){var n=t.single_source_shortest_paths(i,o,r);return t.extract_shortest_path_from_predecessor_list(n,r)},PriorityQueue:{make:function(i){var o=t.PriorityQueue,r={},n;i=i||{};for(n in o)o.hasOwnProperty(n)&&(r[n]=o[n]);return r.queue=[],r.sorter=i.sorter||o.default_sorter,r},default_sorter:function(i,o){return i.cost-o.cost},push:function(i,o){var r={value:i,cost:o};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(hn);var li=hn.exports;(function(e){const t=he,i=Xn,o=ei,r=oi,n=ai,s=Z,a=U,l=li;function c(g){return unescape(encodeURIComponent(g)).length}function h(g,m,b){const p=[];let x;for(;(x=g.exec(b))!==null;)p.push({data:x[0],index:x.index,mode:m,length:x[0].length});return p}function R(g){const m=h(s.NUMERIC,t.NUMERIC,g),b=h(s.ALPHANUMERIC,t.ALPHANUMERIC,g);let p,x;return a.isKanjiModeEnabled()?(p=h(s.BYTE,t.BYTE,g),x=h(s.KANJI,t.KANJI,g)):(p=h(s.BYTE_KANJI,t.BYTE,g),x=[]),m.concat(b,p,x).sort(function(P,K){return P.index-K.index}).map(function(P){return{data:P.data,mode:P.mode,length:P.length}})}function C(g,m){switch(m){case t.NUMERIC:return i.getBitsLength(g);case t.ALPHANUMERIC:return o.getBitsLength(g);case t.KANJI:return n.getBitsLength(g);case t.BYTE:return r.getBitsLength(g)}}function v(g){return g.reduce(function(m,b){const p=m.length-1>=0?m[m.length-1]:null;return p&&p.mode===b.mode?(m[m.length-1].data+=b.data,m):(m.push(b),m)},[])}function y(g){const m=[];for(let b=0;b<g.length;b++){const p=g[b];switch(p.mode){case t.NUMERIC:m.push([p,{data:p.data,mode:t.ALPHANUMERIC,length:p.length},{data:p.data,mode:t.BYTE,length:p.length}]);break;case t.ALPHANUMERIC:m.push([p,{data:p.data,mode:t.BYTE,length:p.length}]);break;case t.KANJI:m.push([p,{data:p.data,mode:t.BYTE,length:c(p.data)}]);break;case t.BYTE:m.push([{data:p.data,mode:t.BYTE,length:c(p.data)}])}}return m}function f(g,m){const b={},p={start:{}};let x=["start"];for(let A=0;A<g.length;A++){const P=g[A],K=[];for(let ae=0;ae<P.length;ae++){const J=P[ae],ke=""+A+ae;K.push(ke),b[ke]={node:J,lastCount:0},p[ke]={};for(let dt=0;dt<x.length;dt++){const ne=x[dt];b[ne]&&b[ne].node.mode===J.mode?(p[ne][ke]=C(b[ne].lastCount+J.length,J.mode)-C(b[ne].lastCount,J.mode),b[ne].lastCount+=J.length):(b[ne]&&(b[ne].lastCount=J.length),p[ne][ke]=C(J.length,J.mode)+4+t.getCharCountIndicator(J.mode,m))}}x=K}for(let A=0;A<x.length;A++)p[x[A]].end=0;return{map:p,table:b}}function w(g,m){let b;const p=t.getBestModeForData(g);if(b=t.from(m,p),b!==t.BYTE&&b.bit<p.bit)throw new Error('"'+g+'" cannot be encoded with mode '+t.toString(b)+`.
 Suggested mode is: `+t.toString(p));switch(b===t.KANJI&&!a.isKanjiModeEnabled()&&(b=t.BYTE),b){case t.NUMERIC:return new i(g);case t.ALPHANUMERIC:return new o(g);case t.KANJI:return new n(g);case t.BYTE:return new r(g)}}e.fromArray=function(m){return m.reduce(function(b,p){return typeof p=="string"?b.push(w(p,null)):p.data&&b.push(w(p.data,p.mode)),b},[])},e.fromString=function(m,b){const p=R(m,a.isKanjiModeEnabled()),x=y(p),A=f(x,b),P=l.find_path(A.map,"start","end"),K=[];for(let ae=1;ae<P.length-1;ae++)K.push(A.table[P[ae]].node);return e.fromArray(v(K))},e.rawSplit=function(m){return e.fromArray(R(m,a.isKanjiModeEnabled()))}})(un);const lt=U,ht=rt,ci=Un,di=zn,ui=tn,hi=nn,Ct=on,$t=st,fi=Vn,Je=an,pi=cn,gi=he,ft=un;function mi(e,t){const i=e.size,o=hi.getPositions(t);for(let r=0;r<o.length;r++){const n=o[r][0],s=o[r][1];for(let a=-1;a<=7;a++)if(!(n+a<=-1||i<=n+a))for(let l=-1;l<=7;l++)s+l<=-1||i<=s+l||(a>=0&&a<=6&&(l===0||l===6)||l>=0&&l<=6&&(a===0||a===6)||a>=2&&a<=4&&l>=2&&l<=4?e.set(n+a,s+l,!0,!0):e.set(n+a,s+l,!1,!0))}}function wi(e){const t=e.size;for(let i=8;i<t-8;i++){const o=i%2===0;e.set(i,6,o,!0),e.set(6,i,o,!0)}}function bi(e,t){const i=ui.getPositions(t);for(let o=0;o<i.length;o++){const r=i[o][0],n=i[o][1];for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)s===-2||s===2||a===-2||a===2||s===0&&a===0?e.set(r+s,n+a,!0,!0):e.set(r+s,n+a,!1,!0)}}function yi(e,t){const i=e.size,o=Je.getEncodedBits(t);let r,n,s;for(let a=0;a<18;a++)r=Math.floor(a/3),n=a%3+i-8-3,s=(o>>a&1)===1,e.set(r,n,s,!0),e.set(n,r,s,!0)}function pt(e,t,i){const o=e.size,r=pi.getEncodedBits(t,i);let n,s;for(n=0;n<15;n++)s=(r>>n&1)===1,n<6?e.set(n,8,s,!0):n<8?e.set(n+1,8,s,!0):e.set(o-15+n,8,s,!0),n<8?e.set(8,o-n-1,s,!0):n<9?e.set(8,15-n-1+1,s,!0):e.set(8,15-n-1,s,!0);e.set(o-8,8,1,!0)}function vi(e,t){const i=e.size;let o=-1,r=i-1,n=7,s=0;for(let a=i-1;a>0;a-=2)for(a===6&&a--;;){for(let l=0;l<2;l++)if(!e.isReserved(r,a-l)){let c=!1;s<t.length&&(c=(t[s]>>>n&1)===1),e.set(r,a-l,c),n--,n===-1&&(s++,n=7)}if(r+=o,r<0||i<=r){r-=o,o=-o;break}}}function Ci(e,t,i){const o=new ci;i.forEach(function(l){o.put(l.mode.bit,4),o.put(l.getLength(),gi.getCharCountIndicator(l.mode,e)),l.write(o)});const r=lt.getSymbolTotalCodewords(e),n=$t.getTotalCodewordsCount(e,t),s=(r-n)*8;for(o.getLengthInBits()+4<=s&&o.put(0,4);o.getLengthInBits()%8!==0;)o.putBit(0);const a=(s-o.getLengthInBits())/8;for(let l=0;l<a;l++)o.put(l%2?17:236,8);return $i(o,e,t)}function $i(e,t,i){const o=lt.getSymbolTotalCodewords(t),r=$t.getTotalCodewordsCount(t,i),n=o-r,s=$t.getBlocksCount(t,i),a=o%s,l=s-a,c=Math.floor(o/s),h=Math.floor(n/s),R=h+1,C=c-h,v=new fi(C);let y=0;const f=new Array(s),w=new Array(s);let g=0;const m=new Uint8Array(e.buffer);for(let P=0;P<s;P++){const K=P<l?h:R;f[P]=m.slice(y,y+K),w[P]=v.encode(f[P]),y+=K,g=Math.max(g,K)}const b=new Uint8Array(o);let p=0,x,A;for(x=0;x<g;x++)for(A=0;A<s;A++)x<f[A].length&&(b[p++]=f[A][x]);for(x=0;x<C;x++)for(A=0;A<s;A++)b[p++]=w[A][x];return b}function xi(e,t,i,o){let r;if(Array.isArray(e))r=ft.fromArray(e);else if(typeof e=="string"){let c=t;if(!c){const h=ft.rawSplit(e);c=Je.getBestVersionForData(h,i)}r=ft.fromString(e,c||40)}else throw new Error("Invalid data");const n=Je.getBestVersionForData(r,i);if(!n)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=n;else if(t<n)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+n+`.
`);const s=Ci(t,i,r),a=lt.getSymbolSize(t),l=new di(a);return mi(l,t),wi(l),bi(l,t),pt(l,i,0),t>=7&&yi(l,t),vi(l,s),isNaN(o)&&(o=Ct.getBestMask(l,pt.bind(null,l,i))),Ct.applyMask(o,l),pt(l,i,o),{modules:l,version:t,errorCorrectionLevel:i,maskPattern:o,segments:r}}Zt.create=function(t,i){if(typeof t>"u"||t==="")throw new Error("No input text");let o=ht.M,r,n;return typeof i<"u"&&(o=ht.from(i.errorCorrectionLevel,ht.M),r=Je.from(i.version),n=Ct.from(i.maskPattern),i.toSJISFunc&&lt.setToSJISFunction(i.toSJISFunc)),xi(t,r,o,n)};var fn={},It={};(function(e){function t(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let o=i.slice().replace("#","").split("");if(o.length<3||o.length===5||o.length>8)throw new Error("Invalid hex color: "+i);(o.length===3||o.length===4)&&(o=Array.prototype.concat.apply([],o.map(function(n){return[n,n]}))),o.length===6&&o.push("F","F");const r=parseInt(o.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:r&255,hex:"#"+o.slice(0,6).join("")}}e.getOptions=function(o){o||(o={}),o.color||(o.color={});const r=typeof o.margin>"u"||o.margin===null||o.margin<0?4:o.margin,n=o.width&&o.width>=21?o.width:void 0,s=o.scale||4;return{width:n,scale:n?4:s,margin:r,color:{dark:t(o.color.dark||"#000000ff"),light:t(o.color.light||"#ffffffff")},type:o.type,rendererOpts:o.rendererOpts||{}}},e.getScale=function(o,r){return r.width&&r.width>=o+r.margin*2?r.width/(o+r.margin*2):r.scale},e.getImageWidth=function(o,r){const n=e.getScale(o,r);return Math.floor((o+r.margin*2)*n)},e.qrToImageData=function(o,r,n){const s=r.modules.size,a=r.modules.data,l=e.getScale(s,n),c=Math.floor((s+n.margin*2)*l),h=n.margin*l,R=[n.color.light,n.color.dark];for(let C=0;C<c;C++)for(let v=0;v<c;v++){let y=(C*c+v)*4,f=n.color.light;if(C>=h&&v>=h&&C<c-h&&v<c-h){const w=Math.floor((C-h)/l),g=Math.floor((v-h)/l);f=R[a[w*s+g]?1:0]}o[y++]=f.r,o[y++]=f.g,o[y++]=f.b,o[y]=f.a}}})(It);(function(e){const t=It;function i(r,n,s){r.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=s,n.width=s,n.style.height=s+"px",n.style.width=s+"px"}function o(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(n,s,a){let l=a,c=s;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),s||(c=o()),l=t.getOptions(l);const h=t.getImageWidth(n.modules.size,l),R=c.getContext("2d"),C=R.createImageData(h,h);return t.qrToImageData(C.data,n,l),i(R,c,h),R.putImageData(C,0,0),c},e.renderToDataURL=function(n,s,a){let l=a;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),l||(l={});const c=e.render(n,s,l),h=l.type||"image/png",R=l.rendererOpts||{};return c.toDataURL(h,R.quality)}})(fn);var pn={};const Ei=It;function Ut(e,t){const i=e.a/255,o=t+'="'+e.hex+'"';return i<1?o+" "+t+'-opacity="'+i.toFixed(2).slice(1)+'"':o}function gt(e,t,i){let o=e+t;return typeof i<"u"&&(o+=" "+i),o}function Ri(e,t,i){let o="",r=0,n=!1,s=0;for(let a=0;a<e.length;a++){const l=Math.floor(a%t),c=Math.floor(a/t);!l&&!n&&(n=!0),e[a]?(s++,a>0&&l>0&&e[a-1]||(o+=n?gt("M",l+i,.5+c+i):gt("m",r,0),r=0,n=!1),l+1<t&&e[a+1]||(o+=gt("h",s),s=0)):r++}return o}pn.render=function(t,i,o){const r=Ei.getOptions(i),n=t.modules.size,s=t.modules.data,a=n+r.margin*2,l=r.color.light.a?"<path "+Ut(r.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",c="<path "+Ut(r.color.dark,"stroke")+' d="'+Ri(s,n,r.margin)+'"/>',h='viewBox="0 0 '+a+" "+a+'"',C='<svg xmlns="http://www.w3.org/2000/svg" '+(r.width?'width="'+r.width+'" height="'+r.width+'" ':"")+h+' shape-rendering="crispEdges">'+l+c+`</svg>
`;return typeof o=="function"&&o(null,C),C};const _i=Dn,xt=Zt,gn=fn,Si=pn;function Wt(e,t,i,o,r){const n=[].slice.call(arguments,1),s=n.length,a=typeof n[s-1]=="function";if(!a&&!_i())throw new Error("Callback required as last argument");if(a){if(s<2)throw new Error("Too few arguments provided");s===2?(r=i,i=t,t=o=void 0):s===3&&(t.getContext&&typeof r>"u"?(r=o,o=void 0):(r=o,o=i,i=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(i=t,t=o=void 0):s===2&&!t.getContext&&(o=i,i=t,t=void 0),new Promise(function(l,c){try{const h=xt.create(i,o);l(e(h,t,o))}catch(h){c(h)}})}try{const l=xt.create(i,o);r(null,e(l,t,o))}catch(l){r(l)}}De.create=xt.create;De.toCanvas=Wt.bind(null,gn.render);De.toDataURL=Wt.bind(null,gn.renderToDataURL);De.toString=Wt.bind(null,function(e,t,i){return Si.render(e,i)});const Ti=.1,zt=2.5,ie=7;function mt(e,t,i){return e===t?!1:(e-t<0?t-e:e-t)<=i+Ti}function Ii(e,t){const i=Array.prototype.slice.call(De.create(e,{errorCorrectionLevel:t}).modules.data,0),o=Math.sqrt(i.length);return i.reduce((r,n,s)=>(s%o===0?r.push([n]):r[r.length-1].push(n))&&r,[])}const Wi={generate({uri:e,size:t,logoSize:i,padding:o=8,dotColor:r="var(--apkt-colors-black)"}){const s=[],a=Ii(e,"Q"),l=(t-2*o)/a.length,c=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];c.forEach(({x:f,y:w})=>{const g=(a.length-ie)*l*f+o,m=(a.length-ie)*l*w+o,b=.45;for(let p=0;p<c.length;p+=1){const x=l*(ie-p*2);s.push(Ae`
            <rect
              fill=${p===2?"var(--apkt-colors-black)":"var(--apkt-colors-white)"}
              width=${p===0?x-10:x}
              rx= ${p===0?(x-10)*b:x*b}
              ry= ${p===0?(x-10)*b:x*b}
              stroke=${r}
              stroke-width=${p===0?10:0}
              height=${p===0?x-10:x}
              x= ${p===0?m+l*p+10/2:m+l*p}
              y= ${p===0?g+l*p+10/2:g+l*p}
            />
          `)}});const h=Math.floor((i+25)/l),R=a.length/2-h/2,C=a.length/2+h/2-1,v=[];a.forEach((f,w)=>{f.forEach((g,m)=>{if(a[w][m]&&!(w<ie&&m<ie||w>a.length-(ie+1)&&m<ie||w<ie&&m>a.length-(ie+1))&&!(w>R&&w<C&&m>R&&m<C)){const b=w*l+l/2+o,p=m*l+l/2+o;v.push([b,p])}})});const y={};return v.forEach(([f,w])=>{y[f]?y[f]?.push(w):y[f]=[w]}),Object.entries(y).map(([f,w])=>{const g=w.filter(m=>w.every(b=>!mt(m,b,l)));return[Number(f),g]}).forEach(([f,w])=>{w.forEach(g=>{s.push(Ae`<circle cx=${f} cy=${g} fill=${r} r=${l/zt} />`)})}),Object.entries(y).filter(([f,w])=>w.length>1).map(([f,w])=>{const g=w.filter(m=>w.some(b=>mt(m,b,l)));return[Number(f),g]}).map(([f,w])=>{w.sort((m,b)=>m<b?-1:1);const g=[];for(const m of w){const b=g.find(p=>p.some(x=>mt(m,x,l)));b?b.push(m):g.push([m])}return[f,g.map(m=>[m[0],m[m.length-1]])]}).forEach(([f,w])=>{w.forEach(([g,m])=>{s.push(Ae`
              <line
                x1=${f}
                x2=${f}
                y1=${g}
                y2=${m}
                stroke=${r}
                stroke-width=${l/(zt/2)}
                stroke-linecap="round"
              />
            `)})}),s}},ki=B`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    background-color: ${({colors:e})=>e.white};
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
  }

  :host {
    border-radius: ${({borderRadius:e})=>e[4]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    box-shadow: inset 0 0 0 4px ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: ${({borderRadius:e})=>e[6]};
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }

  wui-icon > svg {
    width: inherit;
    height: inherit;
  }
`;var fe=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Y=class extends W{constructor(){super(...arguments),this.uri="",this.size=500,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),d`<wui-flex
      alignItems="center"
      justifyContent="center"
      class="wui-qr-code"
      direction="column"
      gap="4"
      width="100%"
      style="height: 100%"
    >
      ${this.templateVisual()} ${this.templateSvg()}
    </wui-flex>`}templateSvg(){return Ae`
      <svg viewBox="0 0 ${this.size} ${this.size}" width="100%" height="100%">
        ${Wi.generate({uri:this.uri,size:this.size,logoSize:this.arenaClear?0:this.size/4})}
      </svg>
    `}templateVisual(){return this.imageSrc?d`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?d`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:d`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};Y.styles=[V,ki];fe([u()],Y.prototype,"uri",void 0);fe([u({type:Number})],Y.prototype,"size",void 0);fe([u()],Y.prototype,"theme",void 0);fe([u()],Y.prototype,"imageSrc",void 0);fe([u()],Y.prototype,"alt",void 0);fe([u({type:Boolean})],Y.prototype,"arenaClear",void 0);fe([u({type:Boolean})],Y.prototype,"farcaster",void 0);Y=fe([I("wui-qr-code")],Y);const Ai=B`
  :host {
    display: block;
    background: linear-gradient(
      90deg,
      ${({tokens:e})=>e.theme.foregroundSecondary} 0%,
      ${({tokens:e})=>e.theme.foregroundTertiary} 50%,
      ${({tokens:e})=>e.theme.foregroundSecondary} 100%
    );
    background-size: 200% 100%;
    animation: shimmer 1s ease-in-out infinite;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-rounded='true']) {
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;var Ue=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ve=class extends W{constructor(){super(...arguments),this.width="",this.height="",this.variant="default",this.rounded=!1}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
    `,this.dataset.rounded=this.rounded?"true":"false",d`<slot></slot>`}};ve.styles=[Ai];Ue([u()],ve.prototype,"width",void 0);Ue([u()],ve.prototype,"height",void 0);Ue([u()],ve.prototype,"variant",void 0);Ue([u({type:Boolean})],ve.prototype,"rounded",void 0);ve=Ue([I("wui-shimmer")],ve);const Bi=B`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var mn=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ye=class extends L{constructor(){super(),this.basic=!1}firstUpdated(){this.basic||O.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:E.state.view}})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.forEach(t=>t())}render(){return this.onRenderProxy(),d`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","5","5","5"]}
        gap="5"
      >
        <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>
        <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0)}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const t=this.wallet?this.wallet.name:void 0;return _.setWcLinking(void 0),_.setRecentWallet(this.wallet),d` <wui-qr-code
      theme=${bt.state.themeMode}
      uri=${this.uri}
      imageSrc=${k(de.getWalletImage(this.wallet))}
      color=${k(bt.state.themeVariables["--w3m-qr-color"])}
      alt=${k(t)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const t=!this.uri||!this.ready;return d`<wui-button
      .disabled=${t}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      Copy link
      <wui-icon size="sm" color="inherit" name="copy" slot="iconRight"></wui-icon>
    </wui-button>`}};Ye.styles=Bi;mn([u({type:Boolean})],Ye.prototype,"basic",void 0);Ye=mn([I("w3m-connecting-wc-qrcode")],Ye);var Pi=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ft=class extends W{constructor(){if(super(),this.wallet=E.state.data?.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");O.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:E.state.view}})}render(){return d`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="5"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${k(de.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="md-regular" color="primary">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};Ft=Pi([I("w3m-connecting-wc-unsupported")],Ft);var wn=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Et=class extends L{constructor(){if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=Qt.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(_.subscribeKey("wcUri",()=>{this.updateLoadingState()})),O.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:E.state.view}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:t,name:i}=this.wallet,{redirect:o,href:r}=S.formatUniversalUrl(t,this.uri);_.setWcLinking({name:i,href:r}),_.setRecentWallet(this.wallet),S.openHref(o,"_blank")}catch{this.error=!0}}};wn([$()],Et.prototype,"isLoading",void 0);Et=wn([I("w3m-connecting-wc-web")],Et);const Li=B`
  :host([data-mobile-fullscreen='true']) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  :host([data-mobile-fullscreen='true']) wui-ux-by-reown {
    margin-top: auto;
  }
`;var $e=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let re=class extends W{constructor(){super(),this.wallet=E.state.data?.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=!!N.state.siwx,this.remoteFeatures=N.state.remoteFeatures,this.displayBranding=!0,this.basic=!1,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(N.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return N.state.enableMobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),d`
      ${this.headerTemplate()}
      <div class="platform-container">${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){return!this.remoteFeatures?.reownBranding||!this.displayBranding?null:d`<wui-ux-by-reown></wui-ux-by-reown>`}async initializeConnection(t=!1){if(!(this.platform==="browser"||N.state.manualWCControl&&!t))try{const{wcPairingExpiry:i,status:o}=_.state,{redirectView:r}=E.state.data??{};if(t||N.state.enableEmbedded||S.isPairingExpired(i)||o==="connecting"){const n=_.getConnections(le.state.activeChain),s=this.remoteFeatures?.multiWallet,a=n.length>0;await _.connectWalletConnect({cache:"never"}),this.isSiwxEnabled||(a&&s?(E.replace("ProfileWallets"),Le.showSuccess("New Wallet Added")):r?E.replace(r):Ht.close())}}catch(i){if(i instanceof Error&&i.message.includes("An error occurred when attempting to switch chain")&&!N.state.enableNetworkSwitch&&le.state.activeChain){le.setActiveCaipNetwork(xn.getUnsupportedNetwork(`${le.state.activeChain}:${le.state.activeCaipNetwork?.id}`)),le.showUnsupportedChainUI();return}i instanceof Kt&&i.originalName===Gt.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?O.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:i.message}}):O.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:i?.message??"Unknown"}}),_.setWcError(!0),Le.showError(i.message??"Connection error"),_.resetWcConnection(),E.goBack()}}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode"),this.platform="qrcode";return}if(this.platform)return;const{mobile_link:t,desktop_link:i,webapp_link:o,injected:r,rdns:n}=this.wallet,s=r?.map(({injected_id:y})=>y).filter(Boolean),a=[...n?[n]:s??[]],l=N.state.isUniversalProvider?!1:a.length,c=t,h=o,R=_.checkInstalled(a),C=l&&R,v=i&&!S.isMobile();C&&!le.state.noAdapters&&this.platforms.push("browser"),c&&this.platforms.push(S.isMobile()?"mobile":"qrcode"),h&&this.platforms.push("web"),v&&this.platforms.push("desktop"),!C&&l&&!le.state.noAdapters&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return d`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return d`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return d`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return d`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return d`<w3m-connecting-wc-qrcode ?basic=${this.basic}></w3m-connecting-wc-qrcode>`;default:return d`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?d`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(t){const i=this.shadowRoot?.querySelector("div");i&&(await i.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=t,i.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};re.styles=Li;$e([$()],re.prototype,"platform",void 0);$e([$()],re.prototype,"platforms",void 0);$e([$()],re.prototype,"isSiwxEnabled",void 0);$e([$()],re.prototype,"remoteFeatures",void 0);$e([u({type:Boolean})],re.prototype,"displayBranding",void 0);$e([u({type:Boolean})],re.prototype,"basic",void 0);re=$e([I("w3m-connecting-wc-view")],re);var kt=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Xe=class extends W{constructor(){super(),this.unsubscribe=[],this.isMobile=S.isMobile(),this.remoteFeatures=N.state.remoteFeatures,this.unsubscribe.push(N.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){if(this.isMobile){const{featured:t,recommended:i}=T.state,{customWallets:o}=N.state,r=En.getRecentWallets(),n=t.length||i.length||o?.length||r.length;return d`<wui-flex flexDirection="column" gap="2" .margin=${["1","3","3","3"]}>
        ${n?d`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return d`<wui-flex flexDirection="column" .padding=${["0","0","4","0"]}>
        <w3m-connecting-wc-view ?basic=${!0} .displayBranding=${!1}></w3m-connecting-wc-view>
        <wui-flex flexDirection="column" .padding=${["0","3","0","3"]}>
          <w3m-all-wallets-widget></w3m-all-wallets-widget>
        </wui-flex>
      </wui-flex>
      ${this.reownBrandingTemplate()} `}reownBrandingTemplate(){return this.remoteFeatures?.reownBranding?d` <wui-flex flexDirection="column" .padding=${["1","0","1","0"]}>
      <wui-ux-by-reown></wui-ux-by-reown>
    </wui-flex>`:null}};kt([$()],Xe.prototype,"isMobile",void 0);kt([$()],Xe.prototype,"remoteFeatures",void 0);Xe=kt([I("w3m-connecting-wc-basic-view")],Xe);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ni=e=>e.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pe=(e,t)=>{const i=e._$AN;if(i===void 0)return!1;for(const o of i)o._$AO?.(t,!1),Pe(o,t);return!0},Ze=e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while(i?.size===0)},bn=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),Di(t)}};function Oi(e){this._$AN!==void 0?(Ze(this),this._$AM=e,bn(this)):this._$AM=e}function Mi(e,t=!1,i=0){const o=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(o))for(let n=i;n<o.length;n++)Pe(o[n],!1),Ze(o[n]);else o!=null&&(Pe(o,!1),Ze(o));else Pe(this,e)}const Di=e=>{e.type==_n.CHILD&&(e._$AP??=Mi,e._$AQ??=Oi)};class ji extends Rn{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,o){super._$AT(t,i,o),bn(this),this.isConnected=t._$AU}_$AO(t,i=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),i&&(Pe(this,t),Ze(this))}setValue(t){if(Ni(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const At=()=>new Ui;class Ui{}const wt=new WeakMap,Bt=Sn(class extends ji{render(e){return Nt}update(e,[t]){const i=t!==this.G;return i&&this.G!==void 0&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),Nt}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let i=wt.get(t);i===void 0&&(i=new WeakMap,wt.set(t,i)),i.get(this.G)!==void 0&&this.G.call(this.ht,void 0),i.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?wt.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),zi=B`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    user-select: none;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({colors:e})=>e.neutrals300};
    border-radius: ${({borderRadius:e})=>e.round};
    border: 1px solid transparent;
    will-change: border;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  span:before {
    content: '';
    position: absolute;
    background-color: ${({colors:e})=>e.white};
    border-radius: 50%;
  }

  /* -- Sizes --------------------------------------------------------- */
  label[data-size='lg'] {
    width: 48px;
    height: 32px;
  }

  label[data-size='md'] {
    width: 40px;
    height: 28px;
  }

  label[data-size='sm'] {
    width: 32px;
    height: 22px;
  }

  label[data-size='lg'] > span:before {
    height: 24px;
    width: 24px;
    left: 4px;
    top: 3px;
  }

  label[data-size='md'] > span:before {
    height: 20px;
    width: 20px;
    left: 4px;
    top: 3px;
  }

  label[data-size='sm'] > span:before {
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
  }

  /* -- Focus states --------------------------------------------------- */
  input:focus-visible:not(:checked) + span,
  input:focus:not(:checked) + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    background-color: ${({tokens:e})=>e.theme.textTertiary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  input:focus-visible:checked + span,
  input:focus:checked + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  input:checked + span {
    background-color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  label[data-size='lg'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='md'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='sm'] > input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }

  /* -- Hover states ------------------------------------------------------- */
  label:hover > input:not(:checked):not(:disabled) + span {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  label:hover > input:checked:not(:disabled) + span {
    background-color: ${({colors:e})=>e.accent080};
  }

  /* -- Disabled state --------------------------------------------------- */
  label:has(input:disabled) {
    pointer-events: none;
    user-select: none;
  }

  input:not(:checked):disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:checked:disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:not(:checked):disabled + span::before {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  input:checked:disabled + span::before {
    background-color: ${({tokens:e})=>e.theme.textTertiary};
  }
`;var ct=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Te=class extends W{constructor(){super(...arguments),this.inputElementRef=At(),this.checked=!1,this.disabled=!1,this.size="md"}render(){return d`
      <label data-size=${this.size}>
        <input
          ${Bt(this.inputElementRef)}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("switchChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};Te.styles=[V,ue,zi];ct([u({type:Boolean})],Te.prototype,"checked",void 0);ct([u({type:Boolean})],Te.prototype,"disabled",void 0);ct([u()],Te.prototype,"size",void 0);Te=ct([I("wui-toggle")],Te);const Fi=B`
  :host {
    height: auto;
  }

  :host > wui-flex {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var yn=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let et=class extends W{constructor(){super(...arguments),this.checked=!1}render(){return d`
      <wui-flex>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-toggle
          ?checked=${this.checked}
          size="sm"
          @switchChange=${this.handleToggleChange.bind(this)}
        ></wui-toggle>
      </wui-flex>
    `}handleToggleChange(t){t.stopPropagation(),this.checked=t.detail,this.dispatchSwitchEvent()}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("certifiedSwitchChange",{detail:this.checked,bubbles:!0,composed:!0}))}};et.styles=[V,ue,Fi];yn([u({type:Boolean})],et.prototype,"checked",void 0);et=yn([I("wui-certified-switch")],et);const Vi=B`
  :host {
    position: relative;
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    gap: ${({spacing:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.textPrimary};
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  .wui-input-text-container {
    position: relative;
    display: flex;
  }

  input {
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
    color: inherit;
    background: transparent;
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[3]} ${({spacing:e})=>e[10]};
    font-size: ${({textSize:e})=>e.large};
    line-height: ${({typography:e})=>e["lg-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["lg-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
  }

  input[data-size='lg'] {
    padding: ${({spacing:e})=>e[4]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[4]} ${({spacing:e})=>e[10]};
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    }
  }

  input:disabled {
    cursor: unset;
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
  }

  input::placeholder {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  input:focus:enabled {
    border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    -webkit-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
    -moz-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
    box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  div.wui-input-text-container:has(input:disabled) {
    opacity: 0.5;
  }

  wui-icon.wui-input-text-left-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    left: ${({spacing:e})=>e[4]};
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  button.wui-input-text-submit-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[3]};
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    border-radius: ${({borderRadius:e})=>e[2]};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button.wui-input-text-submit-button:disabled {
    opacity: 1;
  }

  button.wui-input-text-submit-button.loading wui-icon {
    animation: spin 1s linear infinite;
  }

  button.wui-input-text-submit-button:hover {
    background: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  input:has(+ .wui-input-text-submit-button) {
    padding-right: ${({spacing:e})=>e[12]};
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  /* -- Keyframes --------------------------------------------------- */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;var q=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let M=class extends W{constructor(){super(...arguments),this.inputElementRef=At(),this.disabled=!1,this.loading=!1,this.placeholder="",this.type="text",this.value="",this.size="md"}render(){return d` <div class="wui-input-text-container">
        ${this.templateLeftIcon()}
        <input
          data-size=${this.size}
          ${Bt(this.inputElementRef)}
          data-testid="wui-input-text"
          type=${this.type}
          enterkeyhint=${k(this.enterKeyHint)}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder}
          @input=${this.dispatchInputChangeEvent.bind(this)}
          @keydown=${this.onKeyDown}
          .value=${this.value||""}
        />
        ${this.templateSubmitButton()}
        <slot class="wui-input-text-slot"></slot>
      </div>
      ${this.templateError()} ${this.templateWarning()}`}templateLeftIcon(){return this.icon?d`<wui-icon
        class="wui-input-text-left-icon"
        size="md"
        data-size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}templateSubmitButton(){return this.onSubmit?d`<button
        class="wui-input-text-submit-button ${this.loading?"loading":""}"
        @click=${this.onSubmit?.bind(this)}
        ?disabled=${this.disabled||this.loading}
      >
        ${this.loading?d`<wui-icon name="spinner" size="md"></wui-icon>`:d`<wui-icon name="chevronRight" size="md"></wui-icon>`}
      </button>`:null}templateError(){return this.errorText?d`<wui-text variant="sm-regular" color="error">${this.errorText}</wui-text>`:null}templateWarning(){return this.warningText?d`<wui-text variant="sm-regular" color="warning">${this.warningText}</wui-text>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};M.styles=[V,ue,Vi];q([u()],M.prototype,"icon",void 0);q([u({type:Boolean})],M.prototype,"disabled",void 0);q([u({type:Boolean})],M.prototype,"loading",void 0);q([u()],M.prototype,"placeholder",void 0);q([u()],M.prototype,"type",void 0);q([u()],M.prototype,"value",void 0);q([u()],M.prototype,"errorText",void 0);q([u()],M.prototype,"warningText",void 0);q([u()],M.prototype,"onSubmit",void 0);q([u()],M.prototype,"size",void 0);q([u({attribute:!1})],M.prototype,"onKeyDown",void 0);M=q([I("wui-input-text")],M);const qi=B`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.iconDefault};
    cursor: pointer;
    padding: ${({spacing:e})=>e[2]};
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
  }

  @media (hover: hover) {
    wui-icon:hover {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }
`;var vn=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let tt=class extends W{constructor(){super(...arguments),this.inputComponentRef=At(),this.inputValue=""}render(){return d`
      <wui-input-text
        ${Bt(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
        @inputChange=${this.onInputChange}
      >
        ${this.inputValue?d`<wui-icon
              @click=${this.clearValue}
              color="inherit"
              size="sm"
              name="close"
            ></wui-icon>`:null}
      </wui-input-text>
    `}onInputChange(t){this.inputValue=t.detail||""}clearValue(){const i=this.inputComponentRef.value?.inputElementRef.value;i&&(i.value="",this.inputValue="",i.focus(),i.dispatchEvent(new Event("input")))}};tt.styles=[V,qi];vn([u()],tt.prototype,"inputValue",void 0);tt=vn([I("wui-search-bar")],tt);const Hi=Ae`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,Ki=B`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 104px;
    width: 104px;
    row-gap: ${({spacing:e})=>e[2]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--apkt-path-network);
    clip-path: var(--apkt-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: ${({tokens:e})=>e.theme.foregroundSecondary};
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var Cn=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let nt=class extends W{constructor(){super(...arguments),this.type="wallet"}render(){return d`
      ${this.shimmerTemplate()}
      <wui-shimmer width="80px" height="20px"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?d` <wui-shimmer data-type=${this.type} width="48px" height="54px"></wui-shimmer>
        ${Hi}`:d`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}};nt.styles=[V,ue,Ki];Cn([u()],nt.prototype,"type",void 0);nt=Cn([I("wui-card-select-loader")],nt);const Gi=Jt`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var H=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let D=class extends W{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--apkt-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--apkt-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--apkt-spacing-${this.gap})`};
      padding-top: ${this.padding&&oe.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&oe.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&oe.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&oe.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&oe.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&oe.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&oe.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&oe.getSpacingStyles(this.margin,3)};
    `,d`<slot></slot>`}};D.styles=[V,Gi];H([u()],D.prototype,"gridTemplateRows",void 0);H([u()],D.prototype,"gridTemplateColumns",void 0);H([u()],D.prototype,"justifyItems",void 0);H([u()],D.prototype,"alignItems",void 0);H([u()],D.prototype,"justifyContent",void 0);H([u()],D.prototype,"alignContent",void 0);H([u()],D.prototype,"columnGap",void 0);H([u()],D.prototype,"rowGap",void 0);H([u()],D.prototype,"gap",void 0);H([u()],D.prototype,"padding",void 0);H([u()],D.prototype,"margin",void 0);D=H([I("wui-grid")],D);const Qi=B`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[0]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: clamp(0px, ${({borderRadius:e})=>e[4]}, 20px);
    transition:
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: ${({tokens:e})=>e.theme.textPrimary};
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:disabled > wui-flex > wui-text {
    color: ${({tokens:e})=>e.core.glass010};
  }

  [data-selected='true'] {
    background-color: ${({colors:e})=>e.accent020};
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: ${({colors:e})=>e.accent010};
    }
  }

  [data-selected='true']:active:enabled {
    background-color: ${({colors:e})=>e.accent010};
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var ee=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let z=class extends W{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.isImpressed=!1,this.explorerId="",this.walletQuery="",this.certified=!1,this.displayIndex=0,this.wallet=void 0,this.observer=new IntersectionObserver(t=>{t.forEach(i=>{i.isIntersecting?(this.visible=!0,this.fetchImageSrc(),this.sendImpressionEvent()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){const t=this.wallet?.badge_type==="certified";return d`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="1">
          <wui-text
            variant="md-regular"
            color="inherit"
            class=${k(t?"certified":void 0)}
            >${this.wallet?.name}</wui-text
          >
          ${t?d`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():d`
      <wui-wallet-image
        size="lg"
        imageSrc=${k(this.imageSrc)}
        name=${k(this.wallet?.name)}
        .installed=${this.wallet?.installed??!1}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return d`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=de.getWalletImage(this.wallet),!this.imageSrc&&(this.imageLoading=!0,this.imageSrc=await de.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}sendImpressionEvent(){!this.wallet||this.isImpressed||(this.isImpressed=!0,O.sendWalletImpressionEvent({name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.explorerId,view:E.state.view,query:this.walletQuery,certified:this.certified,displayIndex:this.displayIndex}))}};z.styles=Qi;ee([$()],z.prototype,"visible",void 0);ee([$()],z.prototype,"imageSrc",void 0);ee([$()],z.prototype,"imageLoading",void 0);ee([$()],z.prototype,"isImpressed",void 0);ee([u()],z.prototype,"explorerId",void 0);ee([u()],z.prototype,"walletQuery",void 0);ee([u()],z.prototype,"certified",void 0);ee([u()],z.prototype,"displayIndex",void 0);ee([u({type:Object})],z.prototype,"wallet",void 0);z=ee([I("w3m-all-wallets-list-item")],z);const Ji=B`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  w3m-all-wallets-list-item {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-inout-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-loading-spinner {
    padding-top: ${({spacing:e})=>e[4]};
    padding-bottom: ${({spacing:e})=>e[4]};
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var pe=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const Vt="local-paginator";let X=class extends W{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!T.state.wallets.length,this.wallets=T.state.wallets,this.recommended=T.state.recommended,this.featured=T.state.featured,this.filteredWallets=T.state.filteredWallets,this.mobileFullScreen=N.state.enableMobileFullScreen,this.unsubscribe.push(T.subscribeKey("wallets",t=>this.wallets=t),T.subscribeKey("recommended",t=>this.recommended=t),T.subscribeKey("featured",t=>this.featured=t),T.subscribeKey("filteredWallets",t=>this.filteredWallets=t))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),this.paginationObserver?.disconnect()}render(){return this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),d`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","3","3","3"]}
        gap="2"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){this.loading=!0;const t=this.shadowRoot?.querySelector("wui-grid");t&&(await T.fetchWalletsByPage({page:1}),await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(t,i){return[...Array(t)].map(()=>d`
        <wui-card-select-loader type="wallet" id=${k(i)}></wui-card-select-loader>
      `)}getWallets(){const t=[...this.featured,...this.recommended];this.filteredWallets?.length>0?t.push(...this.filteredWallets):t.push(...this.wallets);const i=S.uniqueBy(t,"id"),o=yt.markWalletsAsInstalled(i);return yt.markWalletsWithDisplayIndex(o)}walletsTemplate(){return this.getWallets().map((i,o)=>d`
        <w3m-all-wallets-list-item
          data-testid="wallet-search-item-${i.id}"
          @click=${()=>this.onConnectWallet(i)}
          .wallet=${i}
          explorerId=${i.id}
          certified=${this.badge==="certified"}
          displayIndex=${o}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){const{wallets:t,recommended:i,featured:o,count:r,mobileFilteredOutWalletsLength:n}=T.state,s=window.innerWidth<352?3:4,a=t.length+i.length;let c=Math.ceil(a/s)*s-a+s;return c-=t.length?o.length%s:0,r===0&&o.length>0?null:r===0||[...o,...t,...i].length<r-(n??0)?this.shimmerTemplate(c,Vt):null}createPaginationObserver(){const t=this.shadowRoot?.querySelector(`#${Vt}`);t&&(this.paginationObserver=new IntersectionObserver(([i])=>{if(i?.isIntersecting&&!this.loading){const{page:o,count:r,wallets:n}=T.state;n.length<r&&T.fetchWalletsByPage({page:o+1})}}),this.paginationObserver.observe(t))}onConnectWallet(t){j.selectWalletConnector(t)}};X.styles=Ji;pe([$()],X.prototype,"loading",void 0);pe([$()],X.prototype,"wallets",void 0);pe([$()],X.prototype,"recommended",void 0);pe([$()],X.prototype,"featured",void 0);pe([$()],X.prototype,"filteredWallets",void 0);pe([$()],X.prototype,"badge",void 0);pe([$()],X.prototype,"mobileFullScreen",void 0);X=pe([I("w3m-all-wallets-list")],X);const Yi=Jt`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
    height: auto;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var ze=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ce=class extends W{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.mobileFullScreen=N.state.enableMobileFullScreen,this.query=""}render(){return this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),this.onSearch(),this.loading?d`<wui-loading-spinner color="accent-primary"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)&&(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await T.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:t}=T.state,i=yt.markWalletsAsInstalled(t);return t.length?d`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","3","3","3"]}
        rowGap="4"
        columngap="2"
        justifyContent="space-between"
      >
        ${i.map((o,r)=>d`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(o)}
              .wallet=${o}
              data-testid="wallet-search-item-${o.id}"
              explorerId=${o.id}
              certified=${this.badge==="certified"}
              walletQuery=${this.query}
              displayIndex=${r}
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:d`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="3"
          flexDirection="column"
        >
          <wui-icon-box size="lg" color="default" icon="wallet"></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="secondary" variant="md-medium">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(t){j.selectWalletConnector(t)}};Ce.styles=Yi;ze([$()],Ce.prototype,"loading",void 0);ze([$()],Ce.prototype,"mobileFullScreen",void 0);ze([u()],Ce.prototype,"query",void 0);ze([u()],Ce.prototype,"badge",void 0);Ce=ze([I("w3m-all-wallets-search")],Ce);var Pt=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let it=class extends W{constructor(){super(...arguments),this.search="",this.badge=void 0,this.onDebouncedSearch=S.debounce(t=>{this.search=t})}render(){const t=this.search.length>=2;return d`
      <wui-flex .padding=${["1","3","3","3"]} gap="2" alignItems="center">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge==="certified"}
          @certifiedSwitchChange=${this.onCertifiedSwitchChange.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${t||this.badge?d`<w3m-all-wallets-search
            query=${this.search}
            .badge=${this.badge}
          ></w3m-all-wallets-search>`:d`<w3m-all-wallets-list .badge=${this.badge}></w3m-all-wallets-list>`}
    `}onInputChange(t){this.onDebouncedSearch(t.detail)}onCertifiedSwitchChange(t){t.detail?(this.badge="certified",Le.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})):this.badge=void 0}qrButtonTemplate(){return S.isMobile()?d`
        <wui-icon-box
          size="xl"
          iconSize="xl"
          color="accent-primary"
          icon="qrCode"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){E.push("ConnectingWalletConnect")}};Pt([$()],it.prototype,"search",void 0);Pt([$()],it.prototype,"badge",void 0);it=Pt([I("w3m-all-wallets-view")],it);const Xi=B`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      scale ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, scale;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-image {
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var te=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let F=class extends W{constructor(){super(...arguments),this.imageSrc="google",this.loading=!1,this.disabled=!1,this.rightIcon=!0,this.rounded=!1,this.fullSize=!1}render(){return this.dataset.rounded=this.rounded?"true":"false",d`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        tabindex=${k(this.tabIdx)}
      >
        <wui-flex gap="2" alignItems="center">
          ${this.templateLeftIcon()}
          <wui-flex gap="1">
            <slot></slot>
          </wui-flex>
        </wui-flex>
        ${this.templateRightIcon()}
      </button>
    `}templateLeftIcon(){return this.icon?d`<wui-image
        icon=${this.icon}
        iconColor=${k(this.iconColor)}
        ?boxed=${!0}
        ?rounded=${this.rounded}
      ></wui-image>`:d`<wui-image
      ?boxed=${!0}
      ?rounded=${this.rounded}
      ?fullSize=${this.fullSize}
      src=${this.imageSrc}
    ></wui-image>`}templateRightIcon(){return this.rightIcon?this.loading?d`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:d`<wui-icon name="chevronRight" size="lg" color="default"></wui-icon>`:null}};F.styles=[V,ue,Xi];te([u()],F.prototype,"imageSrc",void 0);te([u()],F.prototype,"icon",void 0);te([u()],F.prototype,"iconColor",void 0);te([u({type:Boolean})],F.prototype,"loading",void 0);te([u()],F.prototype,"tabIdx",void 0);te([u({type:Boolean})],F.prototype,"disabled",void 0);te([u({type:Boolean})],F.prototype,"rightIcon",void 0);te([u({type:Boolean})],F.prototype,"rounded",void 0);te([u({type:Boolean})],F.prototype,"fullSize",void 0);F=te([I("wui-list-item")],F);var Zi=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let qt=class extends W{constructor(){super(...arguments),this.wallet=E.state.data?.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return d`
      <wui-flex gap="2" flexDirection="column" .padding=${["3","3","4","3"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?d`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?d`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?d`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?d`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="md-medium" color="primary">Website</wui-text>
      </wui-list-item>
    `:null}openStore(t){t.href&&this.wallet&&(O.sendEvent({type:"track",event:"GET_WALLET",properties:{name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.wallet.id,type:t.type}}),S.openHref(t.href,"_blank"))}onChromeStore(){this.wallet?.chrome_store&&this.openStore({href:this.wallet.chrome_store,type:"chrome_store"})}onAppStore(){this.wallet?.app_store&&this.openStore({href:this.wallet.app_store,type:"app_store"})}onPlayStore(){this.wallet?.play_store&&this.openStore({href:this.wallet.play_store,type:"play_store"})}onHomePage(){this.wallet?.homepage&&this.openStore({href:this.wallet.homepage,type:"homepage"})}};qt=Zi([I("w3m-downloads-view")],qt);export{it as W3mAllWalletsView,Xe as W3mConnectingWcBasicView,qt as W3mDownloadsView};
