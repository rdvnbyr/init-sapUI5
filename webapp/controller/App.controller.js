// import sap controller

sap.ui.define(
  ['sap/ui/core/mvc/Controller', 'sap/m/MessageToast', 'sap/ui/model/json/JSONModel'],
  function (Controller, MessageToast, JSONModel) {
    'use strict';

    return Controller.extend('webapp.controller.App', {
      increment: function () {
        let textEl = this.getView().byId('counter');
        let count = parseInt(textEl.getText());
        count++;
        textEl.setText(count);
      },

      onInit: function () {},
    });
  }
);
