"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[76698],{42279:(e,a,t)=>{t.r(a),t.d(a,{comp:()=>o,data:()=>n});var l=t(6254);const i={},o=(0,t(89596).A)(i,[["render",function(e,a){const t=(0,l.g2)("RouteLink");return(0,l.uX)(),(0,l.CE)("div",null,[a[7]||(a[7]=(0,l.Lk)("h1",{id:"tuya-ts0601-smoke-5",tabindex:"-1"},[(0,l.Lk)("a",{class:"header-anchor",href:"#tuya-ts0601-smoke-5"},[(0,l.Lk)("span",null,"Tuya TS0601_smoke_5")])],-1)),(0,l.Lk)("table",null,[a[6]||(a[6]=(0,l.Lk)("thead",null,[(0,l.Lk)("tr",null,[(0,l.Lk)("th"),(0,l.Lk)("th")])],-1)),(0,l.Lk)("tbody",null,[a[2]||(a[2]=(0,l.Lk)("tr",null,[(0,l.Lk)("td",null,"Model"),(0,l.Lk)("td",null,"TS0601_smoke_5")],-1)),(0,l.Lk)("tr",null,[a[1]||(a[1]=(0,l.Lk)("td",null,"Vendor",-1)),(0,l.Lk)("td",null,[(0,l.bF)(t,{to:"/supported-devices/#v=Tuya"},{default:(0,l.k6)((()=>a[0]||(a[0]=[(0,l.eW)("Tuya")]))),_:1})])]),a[3]||(a[3]=(0,l.Lk)("tr",null,[(0,l.Lk)("td",null,"Description"),(0,l.Lk)("td",null,"Smoke sensor")],-1)),a[4]||(a[4]=(0,l.Lk)("tr",null,[(0,l.Lk)("td",null,"Exposes"),(0,l.Lk)("td",null,"smoke, tamper, battery, fault_alarm, silence, alarm, linkquality")],-1)),a[5]||(a[5]=(0,l.Lk)("tr",null,[(0,l.Lk)("td",null,"Picture"),(0,l.Lk)("td",null,[(0,l.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TS0601_smoke_5.png",alt:"Tuya TS0601_smoke_5"})])],-1))])]),a[8]||(a[8]=(0,l.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="smoke-binary" tabindex="-1"><a class="header-anchor" href="#smoke-binary"><span>Smoke (binary)</span></a></h3><p>Indicates whether the device detected smoke. Value can be found in the published state on the <code>smoke</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> smoke is ON, if <code>false</code> OFF.</p><h3 id="tamper-binary" tabindex="-1"><a class="header-anchor" href="#tamper-binary"><span>Tamper (binary)</span></a></h3><p>Indicates whether the device is tampered. Value can be found in the published state on the <code>tamper</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> tamper is ON, if <code>false</code> OFF.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="fault-alarm-binary" tabindex="-1"><a class="header-anchor" href="#fault-alarm-binary"><span>Fault alarm (binary)</span></a></h3><p>Indicates whether a fault was detected. Value can be found in the published state on the <code>fault_alarm</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> fault alarm is ON, if <code>false</code> OFF.</p><h3 id="silence-binary" tabindex="-1"><a class="header-anchor" href="#silence-binary"><span>Silence (binary)</span></a></h3><p>Silence the alarm. Value can be found in the published state on the <code>silence</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;silence&quot;: NEW_VALUE}</code>. If value equals <code>true</code> silence is ON, if <code>false</code> OFF.</p><h3 id="alarm-binary" tabindex="-1"><a class="header-anchor" href="#alarm-binary"><span>Alarm (binary)</span></a></h3><p>Enable the alarm. Value can be found in the published state on the <code>alarm</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> alarm is ON, if <code>OFF</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',15))])}]]),n=JSON.parse('{"path":"/devices/TS0601_smoke_5.html","title":"Tuya TS0601_smoke_5 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya TS0601_smoke_5 control via MQTT","description":"Integrate your Tuya TS0601_smoke_5 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-04-27T17:39:26.000Z"},"headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Smoke (binary)","slug":"smoke-binary","link":"#smoke-binary","children":[]},{"level":3,"title":"Tamper (binary)","slug":"tamper-binary","link":"#tamper-binary","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Fault alarm (binary)","slug":"fault-alarm-binary","link":"#fault-alarm-binary","children":[]},{"level":3,"title":"Silence (binary)","slug":"silence-binary","link":"#silence-binary","children":[]},{"level":3,"title":"Alarm (binary)","slug":"alarm-binary","link":"#alarm-binary","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1735481254000},"filePathRelative":"devices/TS0601_smoke_5.md"}')}}]);