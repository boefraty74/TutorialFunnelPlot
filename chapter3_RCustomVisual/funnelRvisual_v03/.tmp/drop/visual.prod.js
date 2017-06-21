var powerbi;!function(e){!function(e){!function(e){!function(e){!function(e){function t(e,t,n){void 0===e&&(e=[]);var a=e;return i(a),t&&(a.identityFields=t),n&&(a.source=n),a}function i(e,t){e.grouped=t?function(){return t}:function(){return n(e)}}function n(e){for(var t,i=[],n=0,a=e.length;n<a;n++){var r=e[n];if(!t||t.identity!==r.identity){if(t={values:[]},r.identity){t.identity=r.identity;var s=r.source;void 0!==s.groupName?t.name=s.groupName:s.displayName&&(t.name=s.displayName)}i.push(t)}t.values.push(r)}return i}e.createValueColumns=t,e.setGrouped=i,e.groupValues=n}(e.DataViewTransform||(e.DataViewTransform={}))}(e.dataview||(e.dataview={}))}(e.utils||(e.utils={}))}(e.extensibility||(e.extensibility={}))}(powerbi||(powerbi={}));var powerbi;!function(e){!function(e){!function(e){!function(e){!function(e){function t(e,t){if(!e||!e.length)return-1;var i=e[0];if(i.values&&i.values.length>0)for(var a=0,r=i.values.length;a<r;++a){var s=i.values[a];if(s&&s.source&&n(s.source,t))return a}return-1}function i(e,t){if(e&&e.length)for(var i=0,a=e.length;i<a;i++)if(n(e[i].source,t))return i;return-1}function n(e,t){var i=e.roles;return i&&i[t]}function a(e,t){return null!=e&&null!=e.metadata&&e.metadata.columns&&e.metadata.columns.some(function(e){return e.roles&&void 0!==e.roles[t]})}function r(e,t){return e&&e.source&&e.source.roles&&!0===e.source.roles[t]}e.getMeasureIndexOfRole=t,e.getCategoryIndexOfRole=i,e.hasRole=n,e.hasRoleInDataView=a,e.hasRoleInValueColumn=r}(e.DataRoleHelper||(e.DataRoleHelper={}))}(e.dataview||(e.dataview={}))}(e.utils||(e.utils={}))}(e.extensibility||(e.extensibility={}))}(powerbi||(powerbi={}));var powerbi;!function(e){!function(e){!function(e){!function(e){!function(e){function t(e,t,i){if(!e)return i;var n=e[t];return void 0===n?i:n}function i(e,i,n){var a=t(e,i);return a&&a.solid?a.solid.color:n}e.getValue=t,e.getFillColorByPropertyName=i}(e.DataViewObject||(e.DataViewObject={}))}(e.dataview||(e.dataview={}))}(e.utils||(e.utils={}))}(e.extensibility||(e.extensibility={}))}(powerbi||(powerbi={}));var powerbi;!function(e){!function(e){!function(e){!function(e){!function(t){function i(t,i,n){return t?e.DataViewObject.getValue(t[i.objectName],i.propertyName,n):n}function n(e,t,i){return e&&e[t]?e[t]:i}function a(e,t,n){var a=i(e,t);return a&&a.solid?a.solid.color:n}function r(e,t,n){var a=i(e,t,n);return a&&a.solid?a.solid.color:void 0===a||null===a||"object"==typeof a&&!a.solid?n:a}t.getValue=i,t.getObject=n,t.getFillColor=a,t.getCommonValue=r}(e.DataViewObjects||(e.DataViewObjects={}))}(e.dataview||(e.dataview={}))}(e.utils||(e.utils={}))}(e.extensibility||(e.extensibility={}))}(powerbi||(powerbi={}));var powerbi;!function(e){!function(t){!function(t){!function(t){var i=e.extensibility.utils.dataview.DataRoleHelper;!function(e){function t(e,t,n){if(e.categories&&e.categories.length>0){var a=e.categories[0];return a.source&&i.hasRole(a.source,t)&&i.hasRole(a.source,n)}return!1}function n(e){return void 0!==e.groupName?e.groupName:e.queryName}function a(e){var t=s(e);return null!=t&&!0===t.imageUrl}function r(e){var t=s(e);return null!=t&&!0===t.webUrl}function s(e){return e&&e.type&&e.type.misc}function o(e){return!!(e&&e.metadata&&e.metadata.columns&&e.metadata.columns.length)&&e.metadata.columns.some(function(e){return!0===a(e)})}e.categoryIsAlsoSeriesRole=t,e.getSeriesName=n,e.isImageUrlColumn=a,e.isWebUrlColumn=r,e.getMiscellaneousTypeDescriptor=s,e.hasImageUrlColumn=o}(t.converterHelper||(t.converterHelper={}))}(t.dataview||(t.dataview={}))}(t.utils||(t.utils={}))}(e.extensibility||(e.extensibility={}))}(powerbi||(powerbi={}));var powerbi;!function(e){!function(e){!function(e){!function(e){var t=function(){function t(){}return t.getDefault=function(){return new this},t.createPropertyIdentifier=function(e,t){return{objectName:e,propertyName:t}},t.parse=function(t){var i,n=this.getDefault();if(!t||!t.metadata||!t.metadata.objects)return n;i=n.getProperties();for(var a in i)for(var r in i[a]){var s=n[a][r];n[a][r]=e.DataViewObjects.getCommonValue(t.metadata.objects,i[a][r],s)}return n},t.isPropertyEnumerable=function(e){return!t.InnumerablePropertyPrefix.test(e)},t.enumerateObjectInstances=function(e,t){var i=e&&e[t.objectName];if(!i)return[];var n={objectName:t.objectName,selector:null,properties:{}};for(var a in i)i.hasOwnProperty(a)&&(n.properties[a]=i[a]);return{instances:[n]}},t.prototype.getProperties=function(){var e=this,i={};return Object.keys(this).forEach(function(n){if(t.isPropertyEnumerable(n)){var a=Object.keys(e[n]);i[n]={},a.forEach(function(e){t.isPropertyEnumerable(n)&&(i[n][e]=t.createPropertyIdentifier(n,e))})}}),i},t}();t.InnumerablePropertyPrefix=/^_/,e.DataViewObjectsParser=t}(e.dataview||(e.dataview={}))}(e.utils||(e.utils={}))}(e.extensibility||(e.extensibility={}))}(powerbi||(powerbi={}));var __extends=this&&this.__extends||function(e,t){function i(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)},powerbi;!function(e){!function(t){!function(t){!function(t){"use strict";var i=e.extensibility.utils.dataview.DataViewObjectsParser,n=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.rcv_script=new a,t}return __extends(t,e),t}(i);t.VisualSettings=n;var a=function(){function e(){}return e}();t.rcv_scriptSettings=a}(t.funnelRvisualFEB2CDB02BBC4EB8AE92F2027725A996||(t.funnelRvisualFEB2CDB02BBC4EB8AE92F2027725A996={}))}(t.visual||(t.visual={}))}(e.extensibility||(e.extensibility={}))}(powerbi||(powerbi={}));var powerbi;!function(e){!function(e){!function(e){!function(e){"use strict";var t=function(){function t(e){this.imageDiv=document.createElement("div"),this.imageDiv.className="rcv_autoScaleImageContainer",this.imageElement=document.createElement("img"),this.imageElement.className="rcv_autoScaleImage",this.imageDiv.appendChild(this.imageElement),e.element.appendChild(this.imageDiv),this.settings_funnel={lineColor:"blue",conf1:"0.95",conf2:"0.999"},this.settings_scatter={pointColor:"orange",weight:10,percentile:40,sparsify:!0},this.settings_axes={colLabel:"gray",textSize:12,scaleXformat:"comma",scaleYformat:"none",sizeTicks:"8",axisXisPercentage:!0}}return t.prototype.update=function(e){if(e&&e.type&&e.viewport&&e.dataViews&&0!==e.dataViews.length&&e.dataViews[0]){var i=e.dataViews[0];this.settings=t.parseSettings(i);var n=null;this.updateObjects(i.metadata.objects),i.scriptResult&&i.scriptResult.payloadBase64&&(n="data:image/png;base64,"+i.scriptResult.payloadBase64),this.imageElement.src=n||null,this.onResizing(e.viewport)}},t.prototype.onResizing=function(e){this.imageDiv.style.height=e.height+"px",this.imageDiv.style.width=e.width+"px"},t.parseSettings=function(t){return e.VisualSettings.parse(t)},t.prototype.updateObjects=function(t){this.settings_funnel={lineColor:e.getValue(t,"settings_funnel_params","lineColor","blue"),conf1:e.getValue(t,"settings_funnel_params","conf1","0.95"),conf2:e.getValue(t,"settings_funnel_params","conf2","0.999")},this.settings_scatter={pointColor:e.getValue(t,"settings_scatter_params","pointColor","orange"),weight:e.getValue(t,"settings_scatter_params","weight",10),percentile:e.getValue(t,"settings_scatter_params","percentile",40),sparsify:e.getValue(t,"settings_scatter_params","sparsify",!0)},this.settings_axes={colLabel:e.getValue(t,"settings_axes_params","colLabel","gray"),textSize:e.getValue(t,"settings_axes_params","textSize",12),scaleXformat:e.getValue(t,"settings_axes_params","scaleXformat","comma"),scaleYformat:e.getValue(t,"settings_axes_params","scaleYformat","none"),sizeTicks:e.getValue(t,"settings_axes_params","sizeTicks","8"),axisXisPercentage:e.getValue(t,"settings_axes_params","axisXisPercentage",!0)}},t.prototype.enumerateObjectInstances=function(t){var i=t.objectName,n=[];switch(i){case"settings_funnel_params":n.push({objectName:i,properties:{lineColor:this.settings_funnel.lineColor,conf1:this.settings_funnel.conf1,conf2:this.settings_funnel.conf2},selector:null});break;case"settings_scatter_params":n.push({objectName:i,properties:{pointColor:this.settings_scatter.pointColor,weight:e.inMinMax(this.settings_scatter.weight,1,50),percentile:this.settings_scatter.percentile,sparsify:this.settings_scatter.sparsify},selector:null});break;case"settings_axes_params":n.push({objectName:i,properties:{colLabel:this.settings_axes.colLabel,textSize:this.settings_axes.textSize,sizeTicks:this.settings_axes.sizeTicks,scaleXformat:this.settings_axes.scaleXformat,axisXisPercentage:this.settings_axes.axisXisPercentage,scaleYformat:this.settings_axes.scaleYformat},selector:null})}return n},t}();e.Visual=t}(e.funnelRvisualFEB2CDB02BBC4EB8AE92F2027725A996||(e.funnelRvisualFEB2CDB02BBC4EB8AE92F2027725A996={}))}(e.visual||(e.visual={}))}(e.extensibility||(e.extensibility={}))}(powerbi||(powerbi={}));var powerbi;!function(e){!function(e){!function(e){!function(e){function t(e,t,i,n){if(e){var a=e[t];if(a){var r=a[i];if(void 0!==r)return r}}return n}function i(e,t,i,n,a,r){if(e){var s=e[t];if(s){var o=s[i];if(o<a)return a;if(o>r)return r;if(void 0!==o)return o}}return n}function n(e,t,i,n,a,r){if(e){var s=e[t];if(s){var o=s[i];if(void 0!==o)return o>r?r:o<a?a:o}}return n}function a(e,t,i,n,a,r){return r&&t==i&&1==a?n:r&&t!=i&&0==a?n:e}function r(e,t){return"auto"!=t?"None":"auto"==t&&"None"==e?"fast":e}function s(e,t,i){return e<t?t:e>i?i:e}function o(e,t,i,n,a){var r=e.objects;if(r){var s=r[t];if(s){var o=s[i];if(o){var u=o[n];if(void 0!==u)return u}}}return a}e.getValue=t,e.getValueMinMax=i,e.getValueNumberMinMax=n,e.ifStringReturnString=a,e.ifStringReturnStringClustersMethod=r,e.inMinMax=s,e.getCategoricalObjectValue=o}(e.funnelRvisualFEB2CDB02BBC4EB8AE92F2027725A996||(e.funnelRvisualFEB2CDB02BBC4EB8AE92F2027725A996={}))}(e.visual||(e.visual={}))}(e.extensibility||(e.extensibility={}))}(powerbi||(powerbi={}));var powerbi;!function(e){!function(t){!function(t){t.funnelRvisualFEB2CDB02BBC4EB8AE92F2027725A996={name:"funnelRvisualFEB2CDB02BBC4EB8AE92F2027725A996",displayName:"funnelRvisual",class:"Visual",version:"1.0.0",apiVersion:"1.7.0",create:function(t){return new e.extensibility.visual.funnelRvisualFEB2CDB02BBC4EB8AE92F2027725A996.Visual(t)},custom:!0}}(t.plugins||(t.plugins={}))}(e.visuals||(e.visuals={}))}(powerbi||(powerbi={}));