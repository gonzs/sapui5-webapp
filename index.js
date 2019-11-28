sap.ui.define([
	"sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
	"use strict";
	
	new ComponentContainer({
		name:"sapui5-webapp",
		settings:{
			id:"webapp"
		},
		async:true
	}).placeAt("content");
});