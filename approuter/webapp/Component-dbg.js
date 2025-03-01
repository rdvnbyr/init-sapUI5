sap.ui.define(['sap/ui/core/UIComponent'], function (UIComponent) {
  'use strict';
  return UIComponent.extend('webapp.Component', {
    metadata: {
      manifest: 'json',
      interfaces: ['sap.ui.core.IAsyncContentCreation'],
    },
    init: function () {
      UIComponent.prototype.init.apply(this, arguments);
    },
  });
});
