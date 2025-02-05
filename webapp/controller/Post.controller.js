sap.ui.define(
  ['sap/ui/core/mvc/Controller', 'sap/ui/core/routing/History', 'sap/ui/model/json/JSONModel'],
  function (Controller, History, JSONModel) {
    'use strict';
    return Controller.extend('webapp.controller.Post', {
      onInit: function () {
        let oRouter = this.getOwnerComponent().getRouter();
        oRouter.getRoute('posts').attachPatternMatched(this._onPostMatched, this);
      },

      _onPostMatched: function (oEvent) {
        const oPath = window.decodeURIComponent(oEvent.getParameter('arguments').postId);
        this.getView().bindElement({
          path: '/' + oPath,
          model: 'postsModel',
        });

        this._getPostById(oPath);
      },

      onNavBack: function () {
        const oHistory = History.getInstance();
        const sPreviousHash = oHistory.getPreviousHash();
        if (sPreviousHash !== undefined) {
          window.history.go(-1);
        } else {
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo('overview', {}, true);
        }
      },

      _getPostById: function (oPath) {
        const oView = this.getView();
        const data = oView.getModel('postsModel').getData();
        if (data.length === 0) {
          return {
            id: 0,
            title: 'No Data',
            content: 'No Data',
          };
        }

        const reqSettings = {
          url: `postsURL/jsonplaceholder.typicode.com/posts/${oPath}`,
          method: 'GET',
          Headers: {
            'Content-Type': 'application/json',
          },
        };

        jQuery.ajax(reqSettings).done(function (response) {
          console.log('response', response);
          oView.getModel('postsModel').setData(new JSONModel(response), 'postDetailModel');
        });
      },
    });
  }
);
