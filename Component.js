sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function(UIComponent, JSONModel, ResourceModel){
	"use strict";
	
	return UIComponent.extend("sapui5-webapp.Component", {
		metadata:{
			manifest: "json"
		},
		init: function (){
			UIComponent.prototype.init.apply(this,arguments);
			var oData = {
				recipient : {
					name : "World?"
				}
			};
			var oModel = new JSONModel(oData);
			this.setModel(oModel);
			
			var i18nModel = new ResourceModel({
				bundleName : "sapui5-webapp.i18n.i18n"
			});
			this.setModel(i18nModel, "i18n");
		}	
	});
});