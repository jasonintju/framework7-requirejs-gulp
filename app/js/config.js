define([], function () {
  'use strict';

  // var isWechat = /MicroMessenger/i.test(window.navigator.userAgent);

  return {
    cache: false,
    pushState: false,
    swipeBackPage: false,
    preloadPreviousPage: false,
    popupCloseByOutside: false,
    animateNavBackIcon: true,
    modalTitle: '系统消息',
    modalButtonOk: '确定',
    modalButtonCancel: '取消',
    smartSelectBackText: '完成',
    smartSelectBackTemplate: '<div class="left sliding"><a href="#" class="back link"><i class="icon icon-back"></i><span>{{backText}}</span></a></div>',
    smartSelectPopupCloseText: '关闭',
    smartSelectPickerCloseText: '完成',
    smartSelectBackOnSelect: true
  };
});
