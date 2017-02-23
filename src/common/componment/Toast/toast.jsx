import React from 'react';
import BaseToast from './baseToast';

let baseToastInstance;
let noticeProcession = [];
let isShow = false;

function showToast(noticeProps) {

  function getToastInstance() {
    if (baseToastInstance) {
      return baseToastInstance;
    }

    let getToastInstance = BaseToast.newInstance();
    return getToastInstance;
  }

  function noticeClose(had_callBackFn) {
    return function() {
      isShow = false;
      if (noticeProcession.length == 0) {
        return null;
      } else {
        let nextNotoce = noticeProcession.shift();
        if (had_callBackFn) {
          had_callBackFn();
        }
        showToast(nextNotoce);
      }
    }
  }

  baseToastInstance = getToastInstance();
  if (isShow) {
    noticeProcession.push(noticeProps);
  } else {
    isShow = true;
    let notice = {};
    Object.assign(notice, noticeProps);

    if (!notice.closeCallBack) {
      notice.closeCallBack = noticeClose();
    } else {
      let had_callBackFn = notice.closeCallBack;
      notice.closeCallBack = noticeClose(had_callBackFn);
    }
    baseToastInstance.show(notice);
  }
}

const api = {
  show: function(noticeProps) {
    showToast(noticeProps);
  },
  destroy() {
    if (baseToastInstance) {
      baseToastInstance.destroy();
      baseToastInstance = null;
      noticeProcession = [];
      isShow = false;
    }
  },
}
export default api;


