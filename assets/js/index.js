/**
 * Main JS file for Casper behaviours
 */

/* globals jQuery, document */
(function ($) {
  'use strict';

  var $document, $htmlBody;

  $htmlBody = $('html, body');
  $document = $(document);

  $document.ready(function () {
    var $postContent = $('.post-content');
    $postContent.fitVids();

    $('.scroll-down').arctic_scroll();

    $('.menu-button, .nav-cover, .nav-close').on('click', function (e) {
      e.preventDefault();
      $('body').toggleClass('nav-opened nav-closed');
    });

  });

  // Arctic Scroll by Paul Adam Davis
  // https://github.com/PaulAdamDavis/Arctic-Scroll
  $.fn.arctic_scroll = function (options) {
    var defaults, allOptions;

    defaults = {
      elem:  $(this),
      speed: 500
    };

    allOptions = $.extend(defaults, options);

    allOptions.elem.click(function (event) {
      var $this, offset, position, toMove;

      event.preventDefault();

      $this    = $(this);
      offset   = ($this.attr('data-offset')) ? $this.attr('data-offset') : false;
      position = ($this.attr('data-position')) ? $this.attr('data-position') : false;

      if (offset) {
        toMove = parseInt(offset, 10);
        $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top + toMove)}, allOptions.speed);
      }
      else if (position) {
        toMove = parseInt(position, 10);
        $htmlBody.stop(true, false).animate({scrollTop: toMove}, allOptions.speed);
      }
      else {
        $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top)}, allOptions.speed);
      }
    });

  };
})(jQuery);
