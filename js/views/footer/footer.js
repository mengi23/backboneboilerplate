define([
  'jquery',
  'lodash',
  'backbone',
  'events',
  'text!templates/footer/footer.html',
  'libs/springy/springyui'
], function($, _, Backbone, Events, footerTemplate, Springy){
  var FooterView = Backbone.View.extend({
    el: '.footer',
    intialize: function () {

    }
  });

  return FooterView;
});
