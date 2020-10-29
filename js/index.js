charset = 'UTF-8';
$(function () {
  // 点击事件
  // params: 按钮，类名，提交按钮，学历和工作时间
  function form(btn, className, submitBtn, userCon) {
    $(btn).each(function () {
      var that = this;
      $(that).click(function () {
        $(that).addClass(className).siblings().removeClass(className);
      });
    });
    $(submitBtn).click(function () {
      var $pa = $(this).parent().parent();
      var value = '';
      $pa.find('.' + className).each(function () {
        value += $(this).text() + '、';
      });
      $pa.find(userCon).val(value);
    });;
  }
  form('.sign-in .item span', 'on', '.submit-btn', '.user-con');

  // 显示弹窗
  $('.show-dialog').click(function () {
    $('.dialog').show();
  });

  // 关闭弹窗
  closeArea('.dialog', '.dialog .close');
  function closeArea(box, btn, site) {
    $(btn).click(function () {
      $(box).hide();
    });
  }

  // 弹窗显示的次数
  if ($('.dialog').size() > 0) {
    midtc('.dialog', '.close', 20000, 60000, 2);
  }
  function midtc(ele, c, f, a, n) {
    var $par = $(ele);
    var $num = 0;
    popupTc(f);
    $(c, $par).click(function () {
      $par.hide();
      $num++;
      if ($num <= n) {
        popupTc(a);
      }
    });
    function popupTc(d) {
      setTimeout(function () {
        $par.fadeIn(300);
      }, d);
    }
  }

  // 回到顶部
  $('.black-to-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    });
  });
});