//@ui5-bundle ui5/Component-preload.js
sap.ui.predefine("ui5/Component", ["sap/ui/core/UIComponent"],function(n){"use strict";return n.extend("webapp.Component",{metadata:{manifest:"json",interfaces:["sap.ui.core.IAsyncContentCreation"]},init:function(){n.prototype.init.apply(this,arguments)}})});
sap.ui.predefine("ui5/controller/App.controller", ["sap/ui/core/mvc/Controller","sap/m/MessageToast","sap/ui/model/json/JSONModel"],function(e,t,n){"use strict";return e.extend("webapp.controller.App",{increment:function(){let e=this.getView().byId("counter");let t=parseInt(e.getText());t++;e.setText(t)},onInit:function(){}})});
sap.ui.require.preload({
	"ui5/manifest.json":'{"sap.app":{"id":"ui5","applicationVersion":{"version":"1.0.0"},"dataSources":{"postsAPI":{"uri":"/postsURL/jsonplaceholder.typicode.com/posts","type":"JSON"}}},"sap.ui5":{"rootView":{"viewName":"webapp.view.App","type":"XML","async":true,"id":"app"},"models":{"postsModel":{"dataSource":"postsAPI"}}}}',
	"ui5/view/App.view.xml":'<mvc:View\r\n    controllerName="webapp.controller.App"\r\n    xmlns:mvc="sap.ui.core.mvc"\r\n    xmlns="sap.m"><Button id="increment" text="Increment" press=".increment" /><Text id="counter" text="0" /><List\r\n        id="posts-list"\r\n        headerText="Posts from the Blog"\r\n        items="{postsModel>/}"\r\n    ><items><StandardListItem\r\n            title="{postsModel>title}"\r\n            description="{postsModel>body}"\r\n        /></items></List></mvc:View>'
});
//# sourceMappingURL=Component-preload.js.map
