define([
  'jquery',
  'lodash',
  'backbone',
  'text!templates/sidebar/menu.html'
], function($, _, Backbone, sidebarMenuTemplate){
  var sidebarMenuView = Backbone.View.extend({
    el: '.sidebar',
    initialize: function () {
    },
    render: function () {
      $(this.el).html(sidebarMenuTemplate);
      $('a[href="' + window.location.hash + '"]').addClass('active');
    },
    events: {
      'click a': 'highlightMenuItem'
    },
    highlightMenuItem: function (ev) {
      $('.active').removeClass('active');
      $(ev.currentTarget).addClass('active');
    }
  })

  return sidebarMenuView;
});
