/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2018, OAF2E
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */
 
$(function () {

  function scrollLock () {
    var scrollPosition = [
      self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
      self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
    ];
    var $html = $('html, body'); // it would make more sense to apply this to body, but IE7 won't have that
    $html.data('scroll-position', scrollPosition);
    $html.data('previous-overflow', $html.css('overflow'));
    $html.css('overflow', 'hidden');
    window.scrollTo(scrollPosition[0], scrollPosition[1]);
  }

  function scrollUnlock () {
    var $html = $('html, body'); // it would make more sense to apply this to body, but IE7 won't have that
    var scrollPosition = $html.data('scroll-position');
    $html.css('overflow', $html.data('previous-overflow'));
    window.scrollTo(scrollPosition[0], scrollPosition[1]);
  }
  
  // 點開選單
  $('#menu-button').click(function() {
    $('#menu').addClass('show');
    $('#menu-cover').addClass('show');

    // 當選單出現後把 scroll 功能關閉
    scrollLock();
  });

  // 點擊選單後面的灰色，所以要關閉選單
  $('#menu-cover').click(function() {
    $('#menu').removeClass('show');
    $('#menu-cover').removeClass('show');

    // 當選單出現後把 scroll 功能恢復
    scrollUnlock();
  });

});