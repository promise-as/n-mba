charset = 'UTF-8';
$(function () {
  // 单选
  $('.radio span').each(function () {
    $(this).click(function () {
      $(this).addClass('on').siblings().removeClass('on');
    });
  });

  // 多选
  $('.multiple span').each(function () {
    $(this).click(function () {
      $(this).toggleClass('on');
    });
  });

  // 弹窗按钮提交
  $('.dialog .submit').click(function () {
    var value = '';
    $('.dialog .item .on').each(function () {
      value += $(this).text() + '、';
    });
    $('.dialog .select').val(value);
  });

  // 显示弹窗
  $('.showDialog').click(function () {
    $('.dialog').show();
  });

  // 关闭底部
  closeArea('.bottom', '.bottom .close');
  // 关闭弹窗
  closeArea('.dialog', '.dialog .close');
  // 关闭右侧导航
  closeArea('.right-nav', '.right-nav .close');
  function closeArea(box, btn){
    $(btn).click(function(){
      $(box).hide();
    });
  }
  

  // 弹窗显示的次数
  if ($('.dialog').size() > 0) {
    midtc('.dialog', '.close', 10000, 30000, 2);
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

  // 轮播图
  $(".slideTxtBox").slide({ autoPlay: true });
});