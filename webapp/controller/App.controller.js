// import sap controller

sap.ui.define(
  [
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/resource/ResourceModel',
  ],
  function (Controller, MessageToast, JSONModel, ResourceModel) {
    'use strict';

    return Controller.extend('webapp.controller.App', {
      increment: function () {
        let textEl = this.getView().byId('counter');
        let count = parseInt(textEl.getText());
        count++;
        textEl.setText(count);
      },

      onInit: function () {
        let controller = this;
        let reqSettings = {
          url: '/user-api/currentUser',
          method: 'GET',
        };
        jQuery.ajax(reqSettings).done(function (response) {
          let userInformation = JSON.parse(response);
          controller
            .getView()
            .byId('appPanel')
            .setHeaderText('Welcome ' + userInformation.firstname);
        });
      },

      onListItemPress: function (oEvent) {
        const oItem = oEvent.getSource();
        const oRouter = this.getOwnerComponent().getRouter();
        const oBindingContext = oItem.getBindingContext('postsModel');
        oRouter.navTo('posts', {
          postId: window.encodeURIComponent(oBindingContext.sPath.substr(1)),
        });
      },
    });
  }
);
