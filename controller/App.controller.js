sap.ui.define([
   "sap/ui/core/mvc/Controller"
], function (Controller) {
   "use strict";
   return Controller.extend("sapui5-webapp.controller.App", {
   		onOpenDialog : function () {
			this.getOwnerComponent().openHelloDialog();
		}
   });
});