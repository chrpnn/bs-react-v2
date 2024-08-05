import{R as f,h as X,_ as He,i as qe,k as ze,l as Ve,m as We,C as Ze,r as le,S as Xe,F as Ke,j as r,b as Ye,d as Je,g as ue,n as Qe,e as M,q as Ce,w as Q,o as xe,p as et,u as tt,t as K,v as nt,a as st,x as ne,y as ee,z as ot}from"./index-P98SA6Id.js";import{u as se}from"./useAuth-_kAC9Tn6.js";import{F as rt}from"./Footer-B0Cxkp2R.js";const at=f.createContext({}),be=!0;function it({baseColor:e,highlightColor:t,width:n,height:s,borderRadius:o,circle:a,direction:i,duration:c,enableAnimation:l=be}){const d={};return i==="rtl"&&(d["--animation-direction"]="reverse"),typeof c=="number"&&(d["--animation-duration"]=`${c}s`),l||(d["--pseudo-element-display"]="none"),(typeof n=="string"||typeof n=="number")&&(d.width=n),(typeof s=="string"||typeof s=="number")&&(d.height=s),(typeof o=="string"||typeof o=="number")&&(d.borderRadius=o),a&&(d.borderRadius="50%"),typeof e<"u"&&(d["--base-color"]=e),typeof t<"u"&&(d["--highlight-color"]=t),d}function O({count:e=1,wrapper:t,className:n,containerClassName:s,containerTestId:o,circle:a=!1,style:i,...c}){var l,d,h;const _=f.useContext(at),w={...c};for(const[m,x]of Object.entries(c))typeof x>"u"&&delete w[m];const b={..._,...w,circle:a},p={...i,...it(b)};let C="react-loading-skeleton";n&&(C+=` ${n}`);const u=(l=b.inline)!==null&&l!==void 0?l:!1,g=[],y=Math.ceil(e);for(let m=0;m<y;m++){let x=p;if(y>e&&m===y-1){const E=(d=x.width)!==null&&d!==void 0?d:"100%",S=e%1,U=typeof E=="number"?E*S:`calc(${E} * ${S})`;x={...x,width:U}}const A=f.createElement("span",{className:C,style:x,key:m},"‌");u?g.push(A):g.push(f.createElement(f.Fragment,{key:m},A,f.createElement("br",null)))}return f.createElement("span",{className:s,"data-testid":o,"aria-live":"polite","aria-busy":(h=b.enableAnimation)!==null&&h!==void 0?h:be},t?g.map((m,x)=>f.createElement(t,{key:x},m)):g)}const ct="_root_49eoy_1",lt="_avatarGroup_49eoy_8",ut="_notificationGroup_49eoy_26",dt="_logoutBtn_49eoy_30",V={root:ct,avatarGroup:lt,notificationGroup:ut,logoutBtn:dt},ht="/bs-react-v2/assets/Default-CMLk5FkX.jpg",ft="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.9453%201.25C13.5778%201.24998%2012.4754%201.24996%2011.6085%201.36652C10.7084%201.48754%209.95048%201.74643%209.34857%202.34835C8.82363%202.87328%208.55839%203.51836%208.41916%204.27635C8.28387%205.01291%208.25799%205.9143%208.25196%206.99583C8.24966%207.41003%208.58357%207.74768%208.99778%207.74999C9.41199%207.7523%209.74964%207.41838%209.75194%207.00418C9.75803%205.91068%209.78643%205.1356%209.89448%204.54735C9.99859%203.98054%2010.1658%203.65246%2010.4092%203.40901C10.686%203.13225%2011.0746%202.9518%2011.8083%202.85315C12.5637%202.75159%2013.5648%202.75%2015.0002%202.75H16.0002C17.4356%202.75%2018.4367%202.75159%2019.1921%202.85315C19.9259%202.9518%2020.3144%203.13225%2020.5912%203.40901C20.868%203.68577%2021.0484%204.07435%2021.1471%204.80812C21.2486%205.56347%2021.2502%206.56459%2021.2502%208V16C21.2502%2017.4354%2021.2486%2018.4365%2021.1471%2019.1919C21.0484%2019.9257%2020.868%2020.3142%2020.5912%2020.591C20.3144%2020.8678%2019.9259%2021.0482%2019.1921%2021.1469C18.4367%2021.2484%2017.4356%2021.25%2016.0002%2021.25H15.0002C13.5648%2021.25%2012.5637%2021.2484%2011.8083%2021.1469C11.0746%2021.0482%2010.686%2020.8678%2010.4092%2020.591C10.1658%2020.3475%209.99859%2020.0195%209.89448%2019.4527C9.78643%2018.8644%209.75803%2018.0893%209.75194%2016.9958C9.74964%2016.5816%209.41199%2016.2477%208.99778%2016.25C8.58357%2016.2523%208.24966%2016.59%208.25196%2017.0042C8.25799%2018.0857%208.28387%2018.9871%208.41916%2019.7236C8.55839%2020.4816%208.82363%2021.1267%209.34857%2021.6517C9.95048%2022.2536%2010.7084%2022.5125%2011.6085%2022.6335C12.4754%2022.75%2013.5778%2022.75%2014.9453%2022.75H16.0551C17.4227%2022.75%2018.525%2022.75%2019.392%2022.6335C20.2921%2022.5125%2021.0499%2022.2536%2021.6519%2021.6517C22.2538%2021.0497%2022.5127%2020.2919%2022.6337%2019.3918C22.7503%2018.5248%2022.7502%2017.4225%2022.7502%2016.0549V7.94513C22.7502%206.57754%2022.7503%205.47522%2022.6337%204.60825C22.5127%203.70814%2022.2538%202.95027%2021.6519%202.34835C21.0499%201.74643%2020.2921%201.48754%2019.392%201.36652C18.525%201.24996%2017.4227%201.24998%2016.0551%201.25H14.9453Z'%20fill='%23ffffff80'/%3e%3cpath%20d='M15%2011.25C15.4142%2011.25%2015.75%2011.5858%2015.75%2012C15.75%2012.4142%2015.4142%2012.75%2015%2012.75H4.02744L5.98809%2014.4306C6.30259%2014.7001%206.33901%2015.1736%206.06944%2015.4881C5.79988%2015.8026%205.3264%2015.839%205.01191%2015.5694L1.51191%2012.5694C1.34567%2012.427%201.25%2012.2189%201.25%2012C1.25%2011.7811%201.34567%2011.573%201.51191%2011.4306L5.01191%208.43056C5.3264%208.16099%205.79988%208.19741%206.06944%208.51191C6.33901%208.8264%206.30259%209.29988%205.98809%209.56944L4.02744%2011.25H15Z'%20fill='%23ffffff80'/%3e%3c/svg%3e";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we="firebasestorage.googleapis.com",ye="storageBucket",pt=2*60*1e3,mt=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v extends Ke{constructor(t,n,s=0){super(Y(t),`Firebase Storage: ${n} (${Y(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,v.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Y(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var N;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(N||(N={}));function Y(e){return"storage/"+e}function oe(){const e="An unknown error occurred, please check the error payload for server response.";return new v(N.UNKNOWN,e)}function _t(e){return new v(N.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function gt(e){return new v(N.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Ct(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new v(N.UNAUTHENTICATED,e)}function xt(){return new v(N.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function bt(e){return new v(N.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function wt(){return new v(N.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function yt(){return new v(N.CANCELED,"User canceled the upload/download.")}function Nt(e){return new v(N.INVALID_URL,"Invalid URL '"+e+"'.")}function vt(e){return new v(N.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Rt(){return new v(N.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ye+"' property when initializing the app?")}function kt(){return new v(N.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function jt(){return new v(N.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Tt(e){return new v(N.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function te(e){return new v(N.INVALID_ARGUMENT,e)}function Ne(){return new v(N.APP_DELETED,"The Firebase app was deleted.")}function At(e){return new v(N.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function z(e,t){return new v(N.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function G(e){throw new v(N.INTERNAL_ERROR,"Internal error: "+e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let s;try{s=T.makeFromUrl(t,n)}catch{return new T(t,"")}if(s.path==="")return s;throw vt(t)}static makeFromUrl(t,n){let s=null;const o="([A-Za-z0-9.\\-_]+)";function a(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const i="(/(.*))?$",c=new RegExp("^gs://"+o+i,"i"),l={bucket:1,path:3};function d(x){x.path_=decodeURIComponent(x.path)}const h="v[A-Za-z0-9_]+",_=n.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",b=new RegExp(`^https?://${_}/${h}/b/${o}/o${w}`,"i"),p={bucket:1,path:3},C=n===we?"(?:storage.googleapis.com|storage.cloud.google.com)":n,u="([^?#]*)",g=new RegExp(`^https?://${C}/${o}/${u}`,"i"),m=[{regex:c,indices:l,postModify:a},{regex:b,indices:p,postModify:d},{regex:g,indices:{bucket:1,path:2},postModify:d}];for(let x=0;x<m.length;x++){const A=m[x],E=A.regex.exec(t);if(E){const S=E[A.indices.bucket];let U=E[A.indices.path];U||(U=""),s=new T(S,U),A.postModify(s);break}}if(s==null)throw Nt(t);return s}}class Et{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(e,t,n){let s=1,o=null,a=null,i=!1,c=0;function l(){return c===2}let d=!1;function h(...u){d||(d=!0,t.apply(null,u))}function _(u){o=setTimeout(()=>{o=null,e(b,l())},u)}function w(){a&&clearTimeout(a)}function b(u,...g){if(d){w();return}if(u){w(),h.call(null,u,...g);return}if(l()||i){w(),h.call(null,u,...g);return}s<64&&(s*=2);let m;c===1?(c=2,m=0):m=(s+Math.random())*1e3,_(m)}let p=!1;function C(u){p||(p=!0,w(),!d&&(o!==null?(u||(c=2),clearTimeout(o),_(0)):u||(c=1)))}return _(0),a=setTimeout(()=>{i=!0,C(!0)},n),C}function St(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(e){return e!==void 0}function Lt(e){return typeof e=="object"&&!Array.isArray(e)}function re(e){return typeof e=="string"||e instanceof String}function de(e){return ae()&&e instanceof Blob}function ae(){return typeof Blob<"u"}function he(e,t,n,s){if(s<t)throw te(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>n)throw te(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e,t,n){let s=t;return n==null&&(s=`https://${t}`),`${n}://${s}/v0${e}`}function ve(e){const t=encodeURIComponent;let n="?";for(const s in e)if(e.hasOwnProperty(s)){const o=t(s)+"="+t(e[s]);n=n+o+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var B;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(B||(B={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(e,t){const n=e>=500&&e<600,o=[408,429].indexOf(e)!==-1,a=t.indexOf(e)!==-1;return n||o||a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t,n,s,o,a,i,c,l,d,h,_,w=!0){this.url_=t,this.method_=n,this.headers_=s,this.body_=o,this.successCodes_=a,this.additionalRetryCodes_=i,this.callback_=c,this.errorCallback_=l,this.timeout_=d,this.progressCallback_=h,this.connectionFactory_=_,this.retry=w,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((b,p)=>{this.resolve_=b,this.reject_=p,this.start_()})}start_(){const t=(s,o)=>{if(o){s(!1,new W(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const i=c=>{const l=c.loaded,d=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,d)};this.progressCallback_!==null&&a.addUploadProgressListener(i),a.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(i),this.pendingConnection_=null;const c=a.getErrorCode()===B.NO_ERROR,l=a.getStatus();if(!c||Ot(l,this.additionalRetryCodes_)&&this.retry){const h=a.getErrorCode()===B.ABORT;s(!1,new W(!1,null,h));return}const d=this.successCodes_.indexOf(l)!==-1;s(!0,new W(d,a))})},n=(s,o)=>{const a=this.resolve_,i=this.reject_,c=o.connection;if(o.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());It(l)?a(l):a()}catch(l){i(l)}else if(c!==null){const l=oe();l.serverResponse=c.getErrorText(),this.errorCallback_?i(this.errorCallback_(c,l)):i(l)}else if(o.canceled){const l=this.appDelete_?Ne():yt();i(l)}else{const l=wt();i(l)}};this.canceled_?n(!1,new W(!1,null,!0)):this.backoffId_=Ut(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&St(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class W{constructor(t,n,s){this.wasSuccessCode=t,this.connection=n,this.canceled=!!s}}function Dt(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function Bt(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function $t(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Mt(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function Gt(e,t,n,s,o,a,i=!0){const c=ve(e.urlParams),l=e.url+c,d=Object.assign({},e.headers);return $t(d,t),Dt(d,n),Bt(d,a),Mt(d,s),new Pt(l,e.method,d,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,o,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Ht(...e){const t=Ft();if(t!==void 0){const n=new t;for(let s=0;s<e.length;s++)n.append(e[s]);return n.getBlob()}else{if(ae())return new Blob(e);throw new v(N.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function qt(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(e){if(typeof atob>"u")throw Tt("base-64");return atob(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class J{constructor(t,n){this.data=t,this.contentType=n||null}}function Vt(e,t){switch(e){case L.RAW:return new J(Re(t));case L.BASE64:case L.BASE64URL:return new J(ke(e,t));case L.DATA_URL:return new J(Zt(t),Xt(t))}throw oe()}function Re(e){const t=[];for(let n=0;n<e.length;n++){let s=e.charCodeAt(n);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const a=s,i=e.charCodeAt(++n);s=65536|(a&1023)<<10|i&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function Wt(e){let t;try{t=decodeURIComponent(e)}catch{throw z(L.DATA_URL,"Malformed data URL.")}return Re(t)}function ke(e,t){switch(e){case L.BASE64:{const o=t.indexOf("-")!==-1,a=t.indexOf("_")!==-1;if(o||a)throw z(e,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case L.BASE64URL:{const o=t.indexOf("+")!==-1,a=t.indexOf("/")!==-1;if(o||a)throw z(e,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=zt(t)}catch(o){throw o.message.includes("polyfill")?o:z(e,"Invalid character found")}const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}class je{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw z(L.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=Kt(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function Zt(e){const t=new je(e);return t.base64?ke(L.BASE64,t.rest):Wt(t.rest)}function Xt(e){return new je(e).contentType}function Kt(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t,n){let s=0,o="";de(t)?(this.data_=t,s=t.size,o=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=o}size(){return this.size_}type(){return this.type_}slice(t,n){if(de(this.data_)){const s=this.data_,o=qt(s,t,n);return o===null?null:new P(o)}else{const s=new Uint8Array(this.data_.buffer,t,n-t);return new P(s,!0)}}static getBlob(...t){if(ae()){const n=t.map(s=>s instanceof P?s.data_:s);return new P(Ht.apply(null,n))}else{const n=t.map(i=>re(i)?Vt(L.RAW,i).data:i.data_);let s=0;n.forEach(i=>{s+=i.byteLength});const o=new Uint8Array(s);let a=0;return n.forEach(i=>{for(let c=0;c<i.length;c++)o[a++]=i[c]}),new P(o,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(e){let t;try{t=JSON.parse(e)}catch{return null}return Lt(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function Jt(e,t){const n=t.split("/").filter(s=>s.length>0).join("/");return e.length===0?n:e+"/"+n}function Ae(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(e,t){return t}class j{constructor(t,n,s,o){this.server=t,this.local=n||t,this.writable=!!s,this.xform=o||Qt}}let Z=null;function en(e){return!re(e)||e.length<2?e:Ae(e)}function Ee(){if(Z)return Z;const e=[];e.push(new j("bucket")),e.push(new j("generation")),e.push(new j("metageneration")),e.push(new j("name","fullPath",!0));function t(a,i){return en(i)}const n=new j("name");n.xform=t,e.push(n);function s(a,i){return i!==void 0?Number(i):i}const o=new j("size");return o.xform=s,e.push(o),e.push(new j("timeCreated")),e.push(new j("updated")),e.push(new j("md5Hash",null,!0)),e.push(new j("cacheControl",null,!0)),e.push(new j("contentDisposition",null,!0)),e.push(new j("contentEncoding",null,!0)),e.push(new j("contentLanguage",null,!0)),e.push(new j("contentType",null,!0)),e.push(new j("metadata","customMetadata",!0)),Z=e,Z}function tn(e,t){function n(){const s=e.bucket,o=e.fullPath,a=new T(s,o);return t._makeStorageReference(a)}Object.defineProperty(e,"ref",{get:n})}function nn(e,t,n){const s={};s.type="file";const o=n.length;for(let a=0;a<o;a++){const i=n[a];s[i.local]=i.xform(s,t[i.server])}return tn(s,e),s}function Ue(e,t,n){const s=Te(t);return s===null?null:nn(e,s,n)}function sn(e,t,n,s){const o=Te(t);if(o===null||!re(o.downloadTokens))return null;const a=o.downloadTokens;if(a.length===0)return null;const i=encodeURIComponent;return a.split(",").map(d=>{const h=e.bucket,_=e.fullPath,w="/b/"+i(h)+"/o/"+i(_),b=ie(w,n,s),p=ve({alt:"media",token:d});return b+p})[0]}function on(e,t){const n={},s=t.length;for(let o=0;o<s;o++){const a=t[o];a.writable&&(n[a.server]=e[a.local])}return JSON.stringify(n)}class Se{constructor(t,n,s,o){this.url=t,this.method=n,this.handler=s,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(e){if(!e)throw oe()}function rn(e,t){function n(s,o){const a=Ue(e,o,t);return Ie(a!==null),a}return n}function an(e,t){function n(s,o){const a=Ue(e,o,t);return Ie(a!==null),sn(a,o,e.host,e._protocol)}return n}function Le(e){function t(n,s){let o;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?o=xt():o=Ct():n.getStatus()===402?o=gt(e.bucket):n.getStatus()===403?o=bt(e.path):o=s,o.status=n.getStatus(),o.serverResponse=s.serverResponse,o}return t}function cn(e){const t=Le(e);function n(s,o){let a=t(s,o);return s.getStatus()===404&&(a=_t(e.path)),a.serverResponse=o.serverResponse,a}return n}function ln(e,t,n){const s=t.fullServerUrl(),o=ie(s,e.host,e._protocol),a="GET",i=e.maxOperationRetryTime,c=new Se(o,a,an(e,n),i);return c.errorHandler=cn(t),c}function un(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function dn(e,t,n){const s=Object.assign({},n);return s.fullPath=e.path,s.size=t.size(),s.contentType||(s.contentType=un(null,t)),s}function hn(e,t,n,s,o){const a=t.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function c(){let m="";for(let x=0;x<2;x++)m=m+Math.random().toString().slice(2);return m}const l=c();i["Content-Type"]="multipart/related; boundary="+l;const d=dn(t,s,o),h=on(d,n),_="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+d.contentType+`\r
\r
`,w=`\r
--`+l+"--",b=P.getBlob(_,s,w);if(b===null)throw kt();const p={name:d.fullPath},C=ie(a,e.host,e._protocol),u="POST",g=e.maxUploadRetryTime,y=new Se(C,u,rn(e,n),g);return y.urlParams=p,y.headers=i,y.body=b.uploadData(),y.errorHandler=Le(t),y}class fn{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=B.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=B.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=B.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,s,o){if(this.sent_)throw G("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),o!==void 0)for(const a in o)o.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,o[a].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw G("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw G("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw G("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw G("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class pn extends fn{initXhr(){this.xhr_.responseType="text"}}function Oe(){return new pn}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t,n){this._service=t,n instanceof T?this._location=n:this._location=T.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new $(t,n)}get root(){const t=new T(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ae(this._location.path)}get storage(){return this._service}get parent(){const t=Yt(this._location.path);if(t===null)return null;const n=new T(this._location.bucket,t);return new $(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw At(t)}}function mn(e,t,n){e._throwIfRoot("uploadBytes");const s=hn(e.storage,e._location,Ee(),new P(t,!0),n);return e.storage.makeRequestWithTokens(s,Oe).then(o=>({metadata:o,ref:e}))}function _n(e){e._throwIfRoot("getDownloadURL");const t=ln(e.storage,e._location,Ee());return e.storage.makeRequestWithTokens(t,Oe).then(n=>{if(n===null)throw jt();return n})}function gn(e,t){const n=Jt(e._location.path,t),s=new T(e._location.bucket,n);return new $(e.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(e){return/^[A-Za-z]+:\/\//.test(e)}function xn(e,t){return new $(e,t)}function Pe(e,t){if(e instanceof ce){const n=e;if(n._bucket==null)throw Rt();const s=new $(n,n._bucket);return t!=null?Pe(s,t):s}else return t!==void 0?gn(e,t):e}function bn(e,t){if(t&&Cn(t)){if(e instanceof ce)return xn(e,t);throw te("To use ref(service, url), the first argument must be a Storage instance.")}else return Pe(e,t)}function fe(e,t){const n=t==null?void 0:t[ye];return n==null?null:T.makeFromBucketSpec(n,e)}function wn(e,t,n,s={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:o}=s;o&&(e._overrideAuthToken=typeof o=="string"?o:Ve(o,e.app.options.projectId))}class ce{constructor(t,n,s,o,a){this.app=t,this._authProvider=n,this._appCheckProvider=s,this._url=o,this._firebaseVersion=a,this._bucket=null,this._host=we,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=pt,this._maxUploadRetryTime=mt,this._requests=new Set,o!=null?this._bucket=T.makeFromBucketSpec(o,this._host):this._bucket=fe(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=T.makeFromBucketSpec(this._url,t):this._bucket=fe(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){he("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){he("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new $(this,t)}_makeRequest(t,n,s,o,a=!0){if(this._deleted)return new Et(Ne());{const i=Gt(t,this._appId,s,o,n,this._firebaseVersion,a);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(t,n){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,s,o).getPromise()}}const pe="@firebase/storage",me="0.12.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const De="storage";function yn(e,t,n){return e=X(e),mn(e,t,n)}function Be(e){return e=X(e),_n(e)}function $e(e,t){return e=X(e),bn(e,t)}function Me(e=ze(),t){e=X(e);const s=He(e,De).getImmediate({identifier:t}),o=qe("storage");return o&&Nn(s,...o),s}function Nn(e,t,n,s={}){wn(e,t,n,s)}function vn(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return new ce(n,s,o,t,Xe)}function Rn(){We(new Ze(De,vn,"PUBLIC").setMultipleInstances(!0)),le(pe,me,""),le(pe,me,"esm2017")}Rn();const kn="_root_pjnaa_1",jn="_active_pjnaa_17",Tn="_modal_pjnaa_22",An="_modalFadeIn_pjnaa_1",En="_formGroup_pjnaa_43",Un="_form_pjnaa_43",Sn="_label_pjnaa_57",In="_fileLabel_pjnaa_65",Ln="_borderText_pjnaa_79",On="_fileInput_pjnaa_84",Pn="_fileName_pjnaa_93",Dn="_input_pjnaa_105",Bn="_button_pjnaa_134",k={root:kn,active:jn,modal:Tn,modalFadeIn:An,formGroup:En,form:Un,label:Sn,fileLabel:In,borderText:Ln,fileInput:On,fileName:Pn,input:Dn,button:Bn};function $n({active:e,setActive:t,user:n}){const[s,o]=f.useState((n==null?void 0:n.displayName)||""),[a,i]=f.useState(null),[c,l]=f.useState(""),[d,h]=f.useState(""),_=C=>{o(C.target.value)},w=C=>{const u=C.target.files[0];u&&(i(u),h(u.name))},b=async C=>{const u=M(ue,"users"),g=Ce(u,Q("name","==",C));return(await xe(g)).empty},p=async()=>{if(!n){console.error("User is not defined");return}if(s.length<5||s.length>20){l("Имя пользователя должно содержать от 5 до 20 символов.");return}if(!new RegExp("^(?![-_])[a-zA-Z0-9-_]{3,20}(?<![-_])$").test(s)){l("Имя пользователя должно включать только латинские буквы, цифры, дефисы или подчеркивания. Никнейм не должен начинаться или заканчиваться дефисом или подчеркиванием.");return}try{if(s&&!await b(s)){l("Имя пользователя уже занято");return}const u={};if(s&&(u.displayName=s),a){const g=Me(),y=$e(g,`avatars/${n.uid}`);await yn(y,a);const m=await Be(y);u.photoURL=m}if(Object.keys(u).length>0){await Ye(n,u);const g=Je(ue,"users",n.uid);await Qe(g,{name:s||n.displayName,...a&&{avatarURL:u.photoURL}})}t(!1)}catch(u){console.error("Ошибка при обновлении профиля:",u),l("Ошибка при обновлении профиля")}};return r.jsx("div",{className:e?`${k.root} ${k.active}`:k.root,onClick:()=>t(!1),children:r.jsx("div",{className:e?`${k.modal} ${k.active}`:k.modal,onClick:C=>C.stopPropagation(),children:r.jsxs("div",{className:k.formGroup,children:[r.jsx("h2",{children:"Изменить профиль"}),r.jsxs("form",{className:k.form,children:[r.jsxs("label",{className:k.label,children:[r.jsx("input",{className:k.input,type:"text",value:s,onChange:_,placeholder:"Новое имя"}),r.jsx("span",{className:k.borderText,children:"Новое имя"})]}),r.jsxs("label",{className:k.fileLabel,children:[r.jsx("input",{className:k.fileInput,type:"file",accept:"image/*",onChange:w}),r.jsx("span",{className:k.borderText,children:"Загрузить аватар"}),d&&r.jsx("span",{className:k.fileName,children:d})]}),c&&r.jsx("p",{className:k.error,children:c}),r.jsx("button",{className:k.button,onClick:p,type:"button",children:"Сохранить"})]})]})})})}function Mn(){const{user:e}=et(),t=tt(),[n,s]=K.useState(!1),[o,a]=K.useState(!0);K.useEffect(()=>{e&&a(!1)},[e]);const i=async()=>{try{await nt(st),t("/start")}catch(l){console.error("Ошибка при выходе:",l)}},c=()=>{s(!0)};return r.jsxs("div",{children:[r.jsxs("div",{className:V.root,children:[r.jsxs("div",{className:V.avatarGroup,onClick:c,children:[o?r.jsx(O,{circle:!0,height:48,width:48,baseColor:"#cccccc20",highlightColor:"#cccccc50"}):r.jsx("img",{src:(e==null?void 0:e.photoURL)||ht,alt:"avatar"}),r.jsxs("p",{children:["Привет!",r.jsx("br",{}),o?r.jsx(O,{width:89,baseColor:"#cccccc20",highlightColor:"#cccccc50"}):e?e.displayName:"Guest"]})]}),r.jsx("div",{className:V.notificationGroup,children:r.jsx("button",{className:V.logoutBtn,onClick:i,children:r.jsx("img",{src:ft,alt:"logout"})})})]}),r.jsx($n,{active:n,setActive:s,user:e})]})}const Gn="_root_7ukno_1",Fn="_gameContainer_7ukno_1",Hn="_gameName_7ukno_13",qn="_gameDate_7ukno_17",zn="_gameStatus_7ukno_22",F={root:Gn,gameContainer:Fn,gameName:Hn,gameDate:qn,gameStatus:zn};function Vn(e){const t=new Date(e),n=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],s=t.getDate(),o=n[t.getMonth()],a=t.getFullYear();return`${s} ${o} ${a}`}function Wn({id:e,date:t,gameName:n,status:s}){return r.jsx("div",{className:F.root,children:r.jsxs("div",{className:F.gameContainer,children:[r.jsxs("div",{children:[r.jsx("p",{className:F.gameDate,children:Vn(t)}),r.jsx("p",{className:F.gameName,children:n})]}),r.jsx("p",{className:F.gameStatus,style:{color:s==="win"?"#43C465cc":"#F14985cc"},children:s})]},e)})}const Zn="_root_1bih8_1",Xn="_searchInput_1bih8_5",_e={root:Zn,searchInput:Xn};function Kn({searchValue:e,setSearchValue:t}){return r.jsx("div",{className:_e.root,children:r.jsx("input",{type:"text",placeholder:"Поиск по игре...",value:e,onChange:n=>t(n.target.value),className:_e.searchInput})})}const Yn="_root_1gegz_1",Jn="_titleGroup_1gegz_5",Qn="_toggleShowAll_1gegz_10",es="_container_1gegz_17",H={root:Yn,titleGroup:Jn,toggleShowAll:Qn,container:es};function ts({setGameCount:e,setPercentWinsCount:t}){const[n,s]=f.useState([]),[o,a]=f.useState(""),[i,c]=f.useState(!1),[l,d]=f.useState(!0),h=se(),_=f.useMemo(()=>n.slice().sort((b,p)=>new Date(p.date)-new Date(b.date)),[n]);f.useEffect(()=>{const b=ne();(async()=>{if(h)try{const C=M(b,`users/${h.uid}/games`),u=o.toLowerCase()?Ce(C,Q("gameName",">=",o.toLowerCase()),Q("gameName","<=",o.toLowerCase()+"")):C;console.log("ищем",u);const g=ee(u,y=>{const m=y.docs.map(x=>({id:x.id,...x.data()}));s(m),e(m.length),t(m.filter(x=>x.status==="win").length/m.length*100),d(!1)});return()=>g()}catch(C){console.error("Error fetching the games data:",C),d(!1)}})()},[h,o,e,t]);const w=i?_:_.slice(0,3);return r.jsxs("div",{className:H.root,children:[r.jsxs("div",{className:H.titleGroup,children:[r.jsx("h2",{children:"History"}),r.jsx("button",{className:H.toggleShowAll,onClick:()=>c(!i),children:i?"Hide":"Show all"})]}),r.jsx(Kn,{searchValue:o,setSearchValue:a}),l?r.jsxs("div",{className:H.container,children:[r.jsx(O,{height:72,borderRadius:12,marginBottom:12,baseColor:"#cccccc07",highlightColor:"#cccccc10"}),r.jsx(O,{height:72,borderRadius:12,marginBottom:12,baseColor:"#cccccc07",highlightColor:"#cccccc10"}),r.jsx(O,{height:72,borderRadius:12,marginBottom:12,baseColor:"#cccccc07",highlightColor:"#cccccc10"})]}):r.jsx("div",{className:H.container,children:w.map((b,p)=>r.jsx(Wn,{...b},b.id))})]})}const ns="_root_74n2e_1",ss={root:ns},os="data:image/svg+xml,%3csvg%20style='fill:%23ffffff80'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2050%2050'%20width='50px'%20height='50px'%3e%3cpath%20d='M%2025%202%20C%2012.309295%202%202%2012.309295%202%2025%20C%202%2037.690705%2012.309295%2048%2025%2048%20C%2037.690705%2048%2048%2037.690705%2048%2025%20C%2048%2012.309295%2037.690705%202%2025%202%20z%20M%2025%204%20C%2036.609824%204%2046%2013.390176%2046%2025%20C%2046%2036.609824%2036.609824%2046%2025%2046%20C%2013.390176%2046%204%2036.609824%204%2025%20C%204%2013.390176%2013.390176%204%2025%204%20z%20M%2024%2013%20L%2024%2024%20L%2013%2024%20L%2013%2026%20L%2024%2026%20L%2024%2037%20L%2026%2037%20L%2026%2026%20L%2037%2026%20L%2037%2024%20L%2026%2024%20L%2026%2013%20L%2024%2013%20z'/%3e%3c/svg%3e";function rs({setModalActive:e}){return r.jsxs("div",{className:ss.root,onClick:()=>e(!0),children:[r.jsx("img",{src:os,alt:"add button"}),r.jsx("p",{children:"Add result"})]})}const as="_root_1ksz9_1",is="_active_1ksz9_17",cs="_formGroup_1ksz9_21",ls="_form_1ksz9_21",us="_label_1ksz9_33",ds="_input_1ksz9_39",hs="_borderText_1ksz9_52",fs="_button_1ksz9_66",ps="_modal_1ksz9_79",ms="_modalFadeIn_1ksz9_1",R={root:as,active:is,formGroup:cs,form:ls,label:us,input:ds,borderText:hs,button:fs,modal:ps,modalFadeIn:ms};function _s({active:e,setActive:t}){const[n,s]=f.useState(""),[o,a]=f.useState(""),[i,c]=f.useState("win"),[l,d]=f.useState([]),[h,_]=f.useState(""),w=ne(),b=se();f.useEffect(()=>{(async()=>{try{const y=(await xe(M(w,"boardgames"))).docs.map(m=>({id:m.id,...m.data()}));d(y)}catch(g){console.error("Error fetching games:",g)}})()},[w]);const p=async()=>{if(!h||!h.name){alert("Please select a game.");return}const u={gameName:h.name,date:o,status:i,createdAt:new Date};try{await ot(M(w,`users/${b.uid}/games`),u),t(!1),console.log("Document written"),s(""),a(""),c("win")}catch(g){console.error("Error adding game result:",g)}},C=u=>{const g=u.target.value;console.log(g);const y=l.find(m=>m.name===g);_(y)};return r.jsx("div",{className:e?`${R.root} ${R.active}`:R.root,onClick:()=>t(!1),children:r.jsx("div",{className:e?`${R.modal} ${R.active}`:R.modal,onClick:u=>u.stopPropagation(),children:r.jsxs("div",{className:R.formGroup,children:[r.jsx("h2",{children:"Добавить результат"}),r.jsxs("div",{className:R.form,children:[r.jsxs("label",{className:R.label,children:[r.jsxs("select",{className:R.input,value:h?h.name:"",onChange:C,children:[r.jsx("option",{value:"",children:"Выбери игру"}),l.map(u=>r.jsx("option",{value:u.name,children:u.name.toUpperCase()},u.id))]}),r.jsx("span",{className:R.borderText,children:"Название игры"})]}),r.jsxs("label",{className:R.label,children:[r.jsx("input",{className:R.input,type:"date",value:o,onChange:u=>a(u.target.value)}),r.jsx("span",{className:R.borderText,children:"Дата игры"})]}),r.jsxs("label",{className:R.label,children:[r.jsxs("select",{className:R.input,value:i,onChange:u=>c(u.target.value),children:[r.jsx("option",{value:"win",children:"Win"}),r.jsx("option",{value:"lose",children:"Lose"})]}),r.jsx("span",{className:R.borderText,children:"Результат"})]}),r.jsx("button",{className:R.button,onClick:()=>{p()},children:"Add Game"})]})]})})})}const gs="_root_yf4hh_1",Cs="_description_yf4hh_27",ge={root:gs,description:Cs};function xs({id:e,date:t,gameName:n,status:s,count:o,gameStats:a,imageUrl:i}){return r.jsxs("div",{className:ge.root,children:[r.jsx("img",{src:i||"https://page-images.websim.ai/Carcassonne_1024x1024xHDQ9l7SLW9TYfKZJgxb004f20d958db.jpg",alt:""}),r.jsxs("div",{className:ge.description,children:[r.jsx("h3",{children:n?n.toUpperCase():"Untitled"}),r.jsxs("p",{children:["Игр всего: ",o]}),r.jsxs("p",{children:["Побед: ",a.find(c=>c.gameName===n).wins," "]}),r.jsxs("p",{children:["Поражений: ",o-a.find(c=>c.gameName===n).wins," "]}),r.jsxs("p",{children:["WR: ",100*(a.find(c=>c.gameName===n).wins/o).toFixed(2)," %"]})]})]},e)}const bs="_root_v45ej_1",ws="_infoBlock_v45ej_7",ys="_title_v45ej_31",D={root:bs,infoBlock:ws,title:ys},Ns="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M7.26279%203.25871C7.38317%202.12953%208.33887%201.25%209.5%201.25H14.5C15.6611%201.25%2016.6168%202.12953%2016.7372%203.25871C17.5004%203.27425%2018.1602%203.31372%2018.7236%203.41721C19.4816%203.55644%2020.1267%203.82168%2020.6517%204.34661C21.2536%204.94853%2021.5125%205.7064%2021.6335%206.60651C21.75%207.47348%2021.75%208.5758%2021.75%209.94339V16.0531C21.75%2017.4207%2021.75%2018.523%2021.6335%2019.39C21.5125%2020.2901%2021.2536%2021.048%2020.6517%2021.6499C20.0497%2022.2518%2019.2919%2022.5107%2018.3918%2022.6317C17.5248%2022.7483%2016.4225%2022.7483%2015.0549%2022.7483H8.94513C7.57754%2022.7483%206.47522%2022.7483%205.60825%2022.6317C4.70814%2022.5107%203.95027%2022.2518%203.34835%2021.6499C2.74643%2021.048%202.48754%2020.2901%202.36652%2019.39C2.24996%2018.523%202.24998%2017.4207%202.25%2016.0531V9.94339C2.24998%208.5758%202.24996%207.47348%202.36652%206.60651C2.48754%205.7064%202.74643%204.94853%203.34835%204.34661C3.87328%203.82168%204.51835%203.55644%205.27635%203.41721C5.83977%203.31372%206.49963%203.27425%207.26279%203.25871ZM7.26476%204.75913C6.54668%204.77447%205.99332%204.81061%205.54735%204.89253C4.98054%204.99664%204.65246%205.16382%204.40901%205.40727C4.13225%205.68403%203.9518%206.07261%203.85315%206.80638C3.75159%207.56173%203.75%208.56285%203.75%209.99826V15.9983C3.75%2017.4337%203.75159%2018.4348%203.85315%2019.1901C3.9518%2019.9239%204.13225%2020.3125%204.40901%2020.5893C4.68577%2020.866%205.07435%2021.0465%205.80812%2021.1451C6.56347%2021.2467%207.56458%2021.2483%209%2021.2483H15C16.4354%2021.2483%2017.4365%2021.2467%2018.1919%2021.1451C18.9257%2021.0465%2019.3142%2020.866%2019.591%2020.5893C19.8678%2020.3125%2020.0482%2019.9239%2020.1469%2019.1901C20.2484%2018.4348%2020.25%2017.4337%2020.25%2015.9983V9.99826C20.25%208.56285%2020.2484%207.56173%2020.1469%206.80638C20.0482%206.07261%2019.8678%205.68403%2019.591%205.40727C19.3475%205.16382%2019.0195%204.99664%2018.4527%204.89253C18.0067%204.81061%2017.4533%204.77447%2016.7352%204.75913C16.6067%205.87972%2015.655%206.75%2014.5%206.75H9.5C8.345%206.75%207.39326%205.87972%207.26476%204.75913ZM9.5%202.75C9.08579%202.75%208.75%203.08579%208.75%203.5V4.5C8.75%204.91421%209.08579%205.25%209.5%205.25H14.5C14.9142%205.25%2015.25%204.91421%2015.25%204.5V3.5C15.25%203.08579%2014.9142%202.75%2014.5%202.75H9.5ZM10.2419%2011.7896C10.0126%2011.87%209.75%2012.1207%209.75%2012.6967C9.75%2012.9113%209.89122%2013.2423%2010.2595%2013.6681C10.6081%2014.0712%2011.0686%2014.4542%2011.4865%2014.7609C11.7128%2014.9269%2011.8202%2015.0034%2011.9061%2015.0488C11.9605%2015.0775%2011.9756%2015.0776%2012%2015.0776C12.0244%2015.0776%2012.0395%2015.0775%2012.0939%2015.0488C12.1798%2015.0034%2012.2872%2014.9269%2012.5135%2014.7609C12.9314%2014.4542%2013.3919%2014.0713%2013.7405%2013.6681C14.1088%2013.2423%2014.25%2012.9113%2014.25%2012.6967C14.25%2012.1207%2013.9874%2011.87%2013.7581%2011.7896C13.5078%2011.7019%2013.0442%2011.7299%2012.5187%2012.2331C12.2287%2012.5108%2011.7713%2012.5108%2011.4813%2012.2331C10.9558%2011.7299%2010.4922%2011.7019%2010.2419%2011.7896ZM12%2010.7343C11.2837%2010.2628%2010.475%2010.1184%209.74566%2010.3741C8.81246%2010.7012%208.25%2011.5995%208.25%2012.6967C8.25%2013.4666%208.6912%2014.1479%209.1249%2014.6493C9.57819%2015.1735%2010.1391%2015.6327%2010.5992%2015.9703C10.6225%2015.9874%2010.646%2016.0047%2010.6697%2016.0223C11.021%2016.282%2011.4207%2016.5775%2012%2016.5776C12.5793%2016.5776%2012.9791%2016.282%2013.3303%2016.0223C13.354%2016.0047%2013.3775%2015.9874%2013.4008%2015.9703C13.8609%2015.6327%2014.4218%2015.1735%2014.8751%2014.6493C15.3088%2014.1479%2015.75%2013.4666%2015.75%2012.6967C15.75%2011.5995%2015.1875%2010.7012%2014.2543%2010.3741C13.525%2010.1184%2012.7163%2010.2628%2012%2010.7343Z'%20fill='%23fff'/%3e%3c/svg%3e",vs="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M12%202.75C6.89137%202.75%202.75%206.89137%202.75%2012C2.75%2017.1086%206.89137%2021.25%2012%2021.25C17.1086%2021.25%2021.25%2017.1086%2021.25%2012C21.25%206.89137%2017.1086%202.75%2012%202.75ZM1.25%2012C1.25%206.06294%206.06294%201.25%2012%201.25C17.9371%201.25%2022.75%206.06294%2022.75%2012C22.75%2017.9371%2017.9371%2022.75%2012%2022.75C6.06294%2022.75%201.25%2017.9371%201.25%2012ZM8.39747%2015.5534C8.64413%2015.2206%209.11385%2015.1508%209.44661%2015.3975C10.175%2015.9373%2011.0541%2016.25%2012%2016.25C12.9459%2016.25%2013.825%2015.9373%2014.5534%2015.3975C14.8862%2015.1508%2015.3559%2015.2206%2015.6025%2015.5534C15.8492%2015.8862%2015.7794%2016.3559%2015.4466%2016.6025C14.4742%2017.3233%2013.285%2017.75%2012%2017.75C10.715%2017.75%209.5258%2017.3233%208.55339%2016.6025C8.22062%2016.3559%208.15082%2015.8862%208.39747%2015.5534Z'%20fill='%23fff'/%3e%3cpath%20d='M16%2010.5C16%2011.3284%2015.5523%2012%2015%2012C14.4477%2012%2014%2011.3284%2014%2010.5C14%209.67157%2014.4477%209%2015%209C15.5523%209%2016%209.67157%2016%2010.5Z'%20fill='%23fff'/%3e%3cpath%20d='M10%2010.5C10%2011.3284%209.55229%2012%209%2012C8.44772%2012%208%2011.3284%208%2010.5C8%209.67157%208.44772%209%209%209C9.55229%209%2010%209.67157%2010%2010.5Z'%20fill='%23fff'/%3e%3c/svg%3e",Rs="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M12%202.75C6.89137%202.75%202.75%206.89137%202.75%2012C2.75%2017.1086%206.89137%2021.25%2012%2021.25C17.1086%2021.25%2021.25%2017.1086%2021.25%2012C21.25%206.89137%2017.1086%202.75%2012%202.75ZM1.25%2012C1.25%206.06294%206.06294%201.25%2012%201.25C17.9371%201.25%2022.75%206.06294%2022.75%2012C22.75%2017.9371%2017.9371%2022.75%2012%2022.75C6.06294%2022.75%201.25%2017.9371%201.25%2012ZM8.55339%2016.3975C9.5258%2015.6767%2010.715%2015.25%2012%2015.25C13.285%2015.25%2014.4742%2015.6767%2015.4466%2016.3975C15.7794%2016.6441%2015.8492%2017.1138%2015.6025%2017.4466C15.3559%2017.7794%2014.8862%2017.8492%2014.5534%2017.6025C13.825%2017.0627%2012.9459%2016.75%2012%2016.75C11.0541%2016.75%2010.175%2017.0627%209.44661%2017.6025C9.11385%2017.8492%208.64413%2017.7794%208.39747%2017.4466C8.15082%2017.1138%208.22062%2016.6441%208.55339%2016.3975Z'%20fill='%23FFF'/%3e%3cpath%20d='M16%2010.5C16%2011.3284%2015.5523%2012%2015%2012C14.4477%2012%2014%2011.3284%2014%2010.5C14%209.67157%2014.4477%209%2015%209C15.5523%209%2016%209.67157%2016%2010.5Z'%20fill='%23fff'/%3e%3cpath%20d='M10%2010.5C10%2011.3284%209.55229%2012%209%2012C8.44772%2012%208%2011.3284%208%2010.5C8%209.67157%208.44772%209%209%209C9.55229%209%2010%209.67157%2010%2010.5Z'%20fill='%23fff'/%3e%3c/svg%3e";function ks({uniqueGames:e,gameStats:t}){const n=l=>{let d=null,h=0;return l.forEach(_=>{_.count>h&&(h=_.count,d=_)}),{maxCount:h,maxObject:d}},s=l=>{if(l.length===0)return{maxWinGame:null,minWinGame:null};let d=l[0],h=l[0];return l.forEach(_=>{_.winPercentage>d.winPercentage&&(d=_),_.winPercentage<h.winPercentage&&(h=_)}),{maxWinGame:d,minWinGame:h}},{maxCount:o,maxObject:a}=n(e),{maxWinGame:i,minWinGame:c}=s(t);return r.jsxs("div",{className:D.root,children:[r.jsxs("div",{className:D.infoBlock,children:[r.jsx("img",{src:Ns,alt:"Popular"}),r.jsx("p",{className:D.title,children:a&&a.gameName?a.gameName.toUpperCase():"Untitled"}),r.jsxs("p",{children:["Партий всего: ",o]})]}),r.jsxs("div",{className:D.infoBlock,children:[r.jsx("img",{src:vs,alt:"Smile"}),r.jsx("p",{className:D.title,children:i&&i.gameName?i.gameName.toUpperCase():"Untitled"}),r.jsxs("p",{children:["Побед: ",i?i.winPercentage.toFixed(1):0," %"]})]}),r.jsxs("div",{className:D.infoBlock,children:[r.jsx("img",{src:Rs,alt:"Sad"}),r.jsx("p",{className:D.title,children:c&&c.gameName?c.gameName.toUpperCase():"Untitled"}),r.jsxs("p",{children:["Побед: ",c?c.winPercentage.toFixed(1):0," %"]})]})]})}const js="_root_1xek3_1",Ts="_titleGroup_1xek3_5",As="_toggleShowAll_1xek3_10",Es="_cards_1xek3_17",q={root:js,titleGroup:Ts,toggleShowAll:As,cards:Es};function Us(){const[e,t]=f.useState([]),[n,s]=f.useState({}),[o,a]=f.useState([]),[i,c]=f.useState([]),[l,d]=f.useState(!1),[h,_]=f.useState(!0),w=l?o:o.slice(0,4),b=se();return f.useEffect(()=>{if(!b){console.error("User is not defined");return}const p=ne(),C=Me();(async()=>{try{const g=M(p,`users/${b.uid}/games`),y=ee(g,A=>{const E=A.docs.map(S=>({id:S.id,...S.data()}));t(E)}),m=M(p,"boardgames"),x=ee(m,async A=>{const E=A.docs.map(U=>({id:U.id,...U.data()})),S={};for(const U of E){const Ge=$e(C,U.imageURL),Fe=await Be(Ge);S[U.name]=Fe}s(S),_(!1)});return()=>{y(),x()}}catch(g){console.error("Error fetching the games data:",g),_(!1)}})()},[b]),f.useEffect(()=>{const p={};e.forEach(u=>{p[u.gameName]||(p[u.gameName]={...u,count:0,wins:0}),p[u.gameName].count+=1,u.status==="win"&&(p[u.gameName].wins+=1)});const C=Object.values(p).map(u=>({...u,winPercentage:u.wins/u.count*100}));a(Object.values(p)),c(C)},[e]),r.jsxs("div",{className:q.root,children:[r.jsxs("div",{className:q.titleGroup,children:[r.jsx("h2",{children:"Games"}),r.jsx("button",{className:q.toggleShowAll,onClick:()=>d(!l),children:l?"Hide":"Show all"})]}),r.jsx(ks,{uniqueGames:o,gameStats:i}),h?r.jsxs("div",{className:q.cards,children:[r.jsx(O,{height:200,width:165,borderRadius:12,marginBottom:12,baseColor:"#cccccc07",highlightColor:"#cccccc10"}),r.jsx(O,{height:200,width:165,borderRadius:12,marginBottom:12,baseColor:"#cccccc07",highlightColor:"#cccccc10"}),r.jsx(O,{height:200,width:165,borderRadius:12,marginBottom:12,baseColor:"#cccccc07",highlightColor:"#cccccc10"}),r.jsx(O,{height:200,width:165,borderRadius:12,marginBottom:12,baseColor:"#cccccc07",highlightColor:"#cccccc10"})]}):r.jsx("div",{className:q.cards,children:w.map((p,C)=>r.jsx(xs,{gameStats:i,imageUrl:n[p.gameName],...p},p.id))})]})}const Ss="_root_qd0jo_1",Is="_topInfo_qd0jo_6",Ls="_topInfoResult_qd0jo_13",Os="_total_qd0jo_20",Ps="_counter_qd0jo_32",Ds="_describe_qd0jo_39",Bs="_main_qd0jo_44",I={root:Ss,topInfo:Is,topInfoResult:Ls,total:Os,counter:Ps,describe:Ds,main:Bs};function Fs({}){const[e,t]=f.useState(!1),[n,s]=f.useState(0),[o,a]=f.useState(0),i=Math.round(o*10)/10;return r.jsxs("div",{className:I.root,children:[r.jsxs("div",{className:I.topInfo,children:[r.jsx(Mn,{}),r.jsxs("div",{className:I.topInfoResult,children:[r.jsxs("div",{className:I.total,children:[r.jsx("p",{className:I.counter,children:n}),r.jsx("p",{className:I.describe,children:"total games"})]}),r.jsxs("div",{className:I.total,children:[r.jsxs("p",{className:I.counter,children:[i," %"]}),r.jsx("p",{className:I.describe,children:"percent wins"})]})]}),r.jsx(rs,{setModalActive:t}),r.jsx(_s,{active:e,setActive:t})]}),r.jsxs("div",{className:I.main,children:[r.jsx(ts,{setGameCount:s,setPercentWinsCount:a}),r.jsx(Us,{})]}),r.jsx(rt,{})]})}export{Fs as default};
