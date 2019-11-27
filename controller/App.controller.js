sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
	],function(Controller, MessageToast, JSONModel){
		"use strict";
		
		return Controller.extend("sapui5-webapp.controller.App",{
		onInit : function (){
			var oData = {
				recipient : {
					name: "World"
				}
			};
			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel);
		},
		onShowHello : function (){
			MessageToast.show("Hello World");
			var oData = {
				recipient: {
					name: "World !!!"	
				}
			};
			this.getView().setModel(new JSONModel(oData));
		}
		});
	});