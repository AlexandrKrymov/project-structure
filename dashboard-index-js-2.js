(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{10:function(e,t,s){"use strict";function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}s.d(t,"a",(function(){return n}));class n{constructor(e,{data:t=[],url:s="",sorted:n={id:e.find(e=>e.sortable).id,order:"asc"},isSortLocally:a=!1,rowTemplate:i=(e=>`<div class="sortable-table__row">${e}</div>`)}={}){r(this,"element",void 0),r(this,"hasDataLoad",!0),r(this,"onClick",async e=>{const t=e.target.closest('[data-sortable="true"]');if(!t)return;const s=this.toggleOrder(t.dataset.order);t.dataset.order=s,t.append(this.subElements.arrow),await this.sort(t.dataset.id,s),this.sorted.id=t.dataset.id,this.sorted.order=s}),r(this,"onScroll",()=>{if(!this.hasDataLoad)return;const e=this.element.scrollHeight+this.element.offsetTop;document.documentElement.clientHeight+window.pageYOffset>=e-100&&!this.isLoading&&this.loadMore()}),r(this,"isLoading",!1),r(this,"start",0),r(this,"end",30),r(this,"step",30),r(this,"offset",this.end),r(this,"sortFunctions",{string:(e,t,s="asc")=>e.sort((e,r)=>{let n=e[t].localeCompare(r[t],["ru-RU","es-US"],{localeMatcher:"lookup",caseFirst:"upper"});return"desc"===s&&(n*=-1),n}),number:(e,t,s="asc")=>e.sort((e,r)=>{let n=e[t]-r[t];return"desc"===s&&(n*=-1),n}),date:(e,t,s="asc")=>e.sort((e,r)=>{let n=new Date(r[t])-new Date(e[t]);return"desc"===s&&(n*=-1),n})}),this.headersConfig=e,this.data=t,this.url=new URL(s),this.rowTemplate=i,this.sorted=n,this.isSortLocally=a,this.render()}async render(){const e=this.toHTML(this.getTemplate());this.element?this.element.innerHtml=e.innerHtml:this.element=e,this.subElements=this.getSubElements(this.element),this.addEventListeners(),await this.sort(this.sorted.id,this.sorted.order)}getTemplate(){return`\n      <div class="sortable-table">\n        ${this.getHeader()}\n        ${this.getBody()}\n        <div data-element="loading" class="loading-line sortable-table__loading-line"></div>\n        <div data-element="emptyPlaceholder" class="sortable-table__empty-placeholder">\n          <div>\n            <p>No products satisfies your filter criteria</p>\n            <button type="button" class="button-primary-outline" data-element="resetFilterBtn">Reset all filters</button>\n          </div>\n        </div>\n      </div>\n    `}getHeader(){return`\n      <div data-element="header" class="sortable-table__header sortable-table__row">${this.headersConfig.map(e=>this.getHeaderCell(e)).join("")}</div>\n    `}getHeaderCell({id:e="",title:t="",sortable:s=!1}={}){const r=this.sorted.id===e?this.getArrow():"";return`\n      <div class="sortable-table__cell" id="${e}" data-id="${e}" data-sortable="${s}" data-order="${this.sorted.order}">\n        <span>${t}</span>\n        ${r}\n      </div>\n    `}getDefaultCellTemplate(e){return`\n      <div class="sortable-table__cell">${e}</div>\n    `}getBody(){return`<div data-element="body" class="sortable-table__body">${this.getRows().join("")}</div>`}getRows(e=[]){return e.map(e=>{const t=this.headersConfig.map(t=>{const s=e[t.id];return t.template?t.template(s):this.getDefaultCellTemplate(s)});return this.getRow(t.join(""),e)})}getRow(e,t){return this.rowTemplate(e,t)}async sort(e=this.sorted.id,t=this.sorted.order){let s=this.isSortLocally?this.sortOnClient(e,t):await this.sortOnServer(e,t);this.subElements&&this.subElements.body&&(this.element.classList.remove("sortable-table_empty"),this.subElements.body.innerHTML=this.getRows(s).join("")),s.length||this.element.classList.add("sortable-table_empty")}sortOnClient(e,t){let s="";if(this.headersConfig.forEach(r=>{r.id===e?(r.order=t,s=r.sortType):r.order=!1}),s)return this.sortFunctions[s](this.data,e,t)}async sortOnServer(e,t){return await this.loadData(e,t)}async loadData(e,t,s=this.start,r=this.end){this.addLoader(),this.url.searchParams.set("_sort",e),this.url.searchParams.set("_order",t),this.url.searchParams.set("_start",s),this.url.searchParams.set("_end",r);try{const e=await fetch(this.url.toString()),t=await e.json();return this.removeLoader(),t}catch(e){console.error("Loading data error in sortable table",e)}}getArrow(){return'\n      <span data-element="arrow" class="sortable-table__sort-arrow">\n        <span class="sort-arrow"></span>\n      </span>\n    '}toHTML(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}toggleOrder(e){return{asc:"desc",desc:"asc"}[e]||"desc"}getSubElements(e){const t={};return[...e.querySelectorAll("[data-element]")].forEach(e=>{t[e.dataset.element]=e}),t}addEventListeners(){this.subElements.header.addEventListener("pointerdown",this.onClick),document.addEventListener("scroll",this.onScroll)}removeEventListeners(){this.subElements.header.removeEventListener("pointerdown",this.onClick),document.removeEventListener("scroll",this.onScroll)}async loadMore(){const e=this.offset,t=this.offset+this.step,s=await this.loadData(this.sorted.id,this.sorted.order,e,t);if(s.length){const e=document.createElement("div");e.innerHTML=this.getRows(s),this.subElements.body.append(...e.children),this.offset=t}else this.hasDataLoad=!1}addLoader(){this.isLoading=!0,this.element.classList.add("sortable-table_loading")}removeLoader(){this.isLoading=!1,this.element.classList.remove("sortable-table_loading")}remove(){this.element&&this.element.remove(),this.element=null}destroy(){this.remove(),this.removeEventListeners()}}},13:function(e,t,s){"use strict";function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}s.d(t,"a",(function(){return n}));class n{static formatDate(e){return e.toLocaleString("ru",{dateStyle:"short"})}constructor({from:e=new Date,to:t=new Date}={}){r(this,"element",null),r(this,"subElements",{}),r(this,"selectingFrom",!0),r(this,"selected",{from:new Date,to:new Date}),r(this,"onDocumentClick",e=>{const t=this.element.classList.contains("rangepicker_open"),s=this.element.contains(e.target);t&&!s&&this.close()}),this.showDateFrom=new Date(e),this.selected={from:e,to:t},this.render()}get template(){return`<div class="rangepicker">\n      <div class="rangepicker__input" data-elem="input">\n        <span data-elem="from">${n.formatDate(this.selected.from)}</span> -\n        <span data-elem="to">${n.formatDate(this.selected.to)}</span>\n      </div>\n      <div class="rangepicker__selector" data-elem="selector"></div>\n    </div>`}render(){const e=document.createElement("div");return e.innerHTML=this.template,this.element=e.firstElementChild,this.subElements=this.getSubElements(e),this.initEventListeners(),Promise.resolve(this.element)}getSubElements(e){const t={};for(const s of e.querySelectorAll("[data-elem]"))t[s.dataset.elem]=s;return t}initEventListeners(){const{input:e,selector:t}=this.subElements;document.addEventListener("pointerup",this.onDocumentClick,!0),e.addEventListener("pointerup",()=>this.toggle()),t.addEventListener("pointerup",e=>this.onSelectorClick(e))}toggle(){this.element.classList.toggle("rangepicker_open"),this.renderDateRangePicker()}onSelectorClick({target:e}){e.classList.contains("rangepicker__cell")&&this.onRangePickerCellClick(e)}close(){this.element.classList.remove("rangepicker_open")}renderDateRangePicker(){const e=new Date(this.showDateFrom),t=new Date(this.showDateFrom),{selector:s}=this.subElements;t.setMonth(t.getMonth()+1),s.innerHTML=`\n      <div class="rangepicker__selector-arrow"></div>\n      <div class="rangepicker__selector-control-left"></div>\n      <div class="rangepicker__selector-control-right"></div>\n      ${this.renderCalendar(e)}\n      ${this.renderCalendar(t)}\n    `;const r=s.querySelector(".rangepicker__selector-control-left"),n=s.querySelector(".rangepicker__selector-control-right");r.addEventListener("pointerup",()=>this.prev()),n.addEventListener("pointerup",()=>this.next()),this.renderHighlight()}prev(){this.showDateFrom.setMonth(this.showDateFrom.getMonth()-1),this.renderDateRangePicker()}next(){this.showDateFrom.setMonth(this.showDateFrom.getMonth()+1),this.renderDateRangePicker()}renderHighlight(){const{from:e,to:t}=this.selected;for(const s of this.element.querySelectorAll(".rangepicker__cell")){const{value:r}=s.dataset,n=new Date(r);s.classList.remove("rangepicker__selected-from"),s.classList.remove("rangepicker__selected-between"),s.classList.remove("rangepicker__selected-to"),e&&r===e.toISOString()?s.classList.add("rangepicker__selected-from"):t&&r===t.toISOString()?s.classList.add("rangepicker__selected-to"):e&&t&&n>=e&&n<=t&&s.classList.add("rangepicker__selected-between")}if(e){const t=this.element.querySelector(`[data-value="${e.toISOString()}"]`);t&&t.closest(".rangepicker__cell").classList.add("rangepicker__selected-from")}if(t){const e=this.element.querySelector(`[data-value="${t.toISOString()}"]`);e&&e.closest(".rangepicker__cell").classList.add("rangepicker__selected-to")}}renderCalendar(e){const t=new Date(e);t.setDate(1);const s=t.toLocaleString("ru",{month:"long"});let r=`<div class="rangepicker__calendar">\n      <div class="rangepicker__month-indicator">\n        <time datetime=${s}>${s}</time>\n      </div>\n      <div class="rangepicker__day-of-week">\n        <div>Пн</div><div>Вт</div><div>Ср</div><div>Чт</div><div>Пт</div><div>Сб</div><div>Вс</div>\n      </div>\n      <div class="rangepicker__date-grid">\n    `;var n;for(r+=`\n      <button type="button"\n        class="rangepicker__cell"\n        data-value="${t.toISOString()}"\n        style="--start-from: ${n=t.getDay(),1+(0===n?6:n-1)}">\n          ${t.getDate()}\n      </button>`,t.setDate(2);t.getMonth()===e.getMonth();)r+=`\n        <button type="button"\n          class="rangepicker__cell"\n          data-value="${t.toISOString()}">\n            ${t.getDate()}\n        </button>`,t.setDate(t.getDate()+1);return r+="</div></div>",r}onRangePickerCellClick(e){const{value:t}=e.dataset;if(t){const e=new Date(t);this.selectingFrom?(this.selected={from:e,to:null},this.selectingFrom=!1,this.renderHighlight()):(e>this.selected.from?this.selected.to=e:(this.selected.to=this.selected.from,this.selected.from=e),this.selectingFrom=!0,this.renderHighlight()),this.selected.from&&this.selected.to&&(this.dispatchEvent(),this.close(),this.subElements.from.innerHTML=n.formatDate(this.selected.from),this.subElements.to.innerHTML=n.formatDate(this.selected.to))}}dispatchEvent(){this.element.dispatchEvent(new CustomEvent("date-select",{bubbles:!0,detail:this.selected}))}remove(){this.element.remove(),document.removeEventListener("pointerup",this.onDocumentClick,!0)}destroy(){return this.remove(),this.element=null,this.subElements={},this.selectingFrom=!0,this.selected={from:new Date,to:new Date},this}}},5:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return h}));var r=s(13),n=s(10);class a extends Error{constructor(e,t,s){var r,n,a;super(s),a="FetchError",(n="name")in(r=this)?Object.defineProperty(r,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[n]=a,this.response=e,this.body=t}}function i(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}window.addEventListener("unhandledrejection",e=>{e.reason instanceof a&&alert(e.reason.message)});class o{constructor({url:e="",range:t={},label:s="",link:r="",value:n=0,formatHeading:a=(e=>e)}={}){i(this,"createLink",e=>`<a class="column-chart__link" href="${e}">View all</a>`),i(this,"createChartItem",({height:e,value:t})=>`<div style="--value: ${e}" data-tooltip="${t}"></div>`),this.url=e,this.range=t,this.data=[],this.label=s,this.value=n,this.link=r,this.formatHeading=a,this.chartHeight=50,this.render(),this.update(this.range.from,this.range.to)}async update(e,t){const s=new URL(this.url,"https://course-js.javascript.ru/");s.searchParams.set("from",e),s.searchParams.set("to",t);try{const e=await async function(e,t){let s,r;try{s=await fetch(e.toString(),t)}catch(e){throw new a(s,"Network error has occurred.")}if(!s.ok){let e=s.statusText;try{r=await s.json(),e=r.error&&r.error.message||r.data&&r.data.error&&r.data.error.message||e}catch(e){}let t=`Error ${s.status}: ${e}`;throw new a(s,r,t)}try{return await s.json()}catch(e){throw new a(s,null,e.message)}}(s);this.data=Object.values(e),this.maxValue=Math.max(...this.data),this.value=this.data.reduce((e,t)=>e+t,0);const t=this.getHeader(),r=this.getBody();return this.subElements.header.innerHTML=this.toHTML(t).innerHTML,this.subElements.body.innerHTML=this.toHTML(r).innerHTML,this.element.classList.remove("column-chart_loading"),e}catch(e){console.error(e)}}render(){this.element=this.toHTML(this.builder()),this.subElements=this.getSubElements(this.element)}builder(){return this.link=this.link?this.createLink(this.link):"",this.getTemplate()}getTemplate(){return`\n    <div class="column-chart ${this.data.length?"":"column-chart_loading"}" style="--chart-height: ${this.chartHeight};">\n      <div class="column-chart__title">\n        Total ${this.label}\n        ${this.link}\n      </div>\n      <div class="column-chart__container">\n        ${this.getHeader()}\n        ${this.getBody()}\n      </div>\n    </div>\n  `}getHeader(){return`<div data-element="header" class="column-chart__header">${this.formatHeading(this.value)}</div>`}getBody(){return`<div data-element="body" class="column-chart__chart">${this.data.map(e=>this.createChartItem({height:String(Math.floor(e*(this.chartHeight/this.maxValue))),value:(e/this.maxValue*100).toFixed(0)+"%"})).join("")}</div>`}getSubElements(e){const t={};return[...e.querySelectorAll("[data-element]")].forEach(e=>{t[e.dataset.element]=e}),t}remove(){this.element&&this.element.remove(),this.element=null}destroy(){this.remove()}toHTML(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}}var l=[{id:"images",title:"Image",sortable:!1,template:e=>`\n          <div class="sortable-table__cell">\n            <img class="sortable-table-image" alt="Image" src="${e[0].url}">\n          </div>\n        `},{id:"title",title:"Name",sortable:!0,sortType:"string"},{id:"quantity",title:"Quantity",sortable:!0,sortType:"number"},{id:"price",title:"Price",sortable:!0,sortType:"number"},{id:"status",title:"Status",sortable:!0,sortType:"number",template:e=>`<div class="sortable-table__cell">\n          ${e>0?"Active":"Inactive"}\n        </div>`}];function d(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class h{constructor(){d(this,"components",{}),d(this,"from",(()=>{const e=new Date;return e.setMonth(e.getMonth()-1),e})()),d(this,"to",new Date),d(this,"onChangeRange",e=>{this.from=e.detail.from,this.to=e.detail.to,this.updateComponents()})}render(){return this.initComponents(),this.element=this.toHTML(this.getTemplate()),this.renderComponents(),this.subElements=this.getSubElements(this.element),this.addEventListeners(),this.element}getTemplate(){return'\n      <div class="dashboard full-height flex-column">\n        <div class="content__top-panel">\n          <h2 class="page-title">Панель управления</h2>\n          <div data-rangePicker></div>\n        </div>\n        <div class="dashboard__charts">\n          <div data-ordersChart></div>\n          <div data-salesChart></div>\n          <div data-customersChart></div>\n        </div>\n        <h3 class="block-title">Лидеры продаж</h3>\n        <div data-sortableTable></div>\n      </div>\n    '}initComponents(){const e=new r.a({from:this.from,to:this.to});e.element.dataset.element="rangePicker";const t=new o({label:"orders",link:"/sales",url:"api/dashboard/orders",range:{from:this.from,to:this.to}});t.element.classList.add("dashboard__chart_orders"),t.element.dataset.element="ordersChart";const s=new o({label:"sales",formatHeading:e=>"$"+e,url:"api/dashboard/sales",range:{from:this.from,to:this.to}});s.element.classList.add("dashboard__chart_sales"),s.element.dataset.element="salesChart";const n=new o({label:"customers",url:"api/dashboard/customers",range:{from:this.from,to:this.to}});n.element.classList.add("dashboard__chart_customers"),n.element.dataset.element="customersChart";const a=this.initSortableTable();this.components={rangePicker:e,ordersChart:t,salesChart:s,customersChart:n,sortableTable:a}}initSortableTable(){const e=new URL("api/dashboard/bestsellers","https://course-js.javascript.ru/");e.searchParams.set("from",this.from.toISOString()),e.searchParams.set("to",this.to.toISOString());const t=new n.a(l,{url:e.toString()});return t.element.dataset.element="sortableTable",t}renderComponents(){for(const e of Object.entries(this.components))this.element.querySelector(`[data-${e[0]}]`).replaceWith(e[1].element)}updateComponents(){this.components.ordersChart.update(this.from,this.to),this.components.salesChart.update(this.from,this.to),this.components.customersChart.update(this.from,this.to);const e=this.initSortableTable();this.subElements.sortableTable.replaceWith(e.element),this.components.sortableTable.destroy(),this.components.sortableTable=e}getSubElements(e){const t={};return[...e.querySelectorAll("[data-element]")].forEach(e=>{t[e.dataset.element]=e}),t}addEventListeners(){document.addEventListener("date-select",this.onChangeRange)}remove(){this.element&&this.element.remove(),this.element=null}destroy(){this.remove();for(const e of Object.values(this.components))e.destroy()}toHTML(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}}}}]);
//# sourceMappingURL=dashboard-index-js-2.js.map