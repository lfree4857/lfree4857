'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function ScriptLoader() {
  useEffect(() => {
    // Scripts that require DOM to be fully loaded and interacted with (from index.html)
    if (typeof window !== 'undefined') {
      window.downloadImage = function() {
        const source = 'assets/image/cv-img.html';
        const fileName = 'test-image.html';
        var el = document.createElement("a");
        el.setAttribute("href", source);
        el.setAttribute("download", fileName);
        document.body.appendChild(el);
        el.click();
        el.remove();
      };
      
      // We rely on WOW.js and jQuery from the Scripts loaded below
      // Since they load asynchronously, we might need a small timeout or wait for load event
      const initWow = setInterval(() => {
        if (window.WOW) {
          new window.WOW().init();
          clearInterval(initWow);
        }
      }, 500);

      // DOM event bindings that used to be in index.html scripts
      const bindEvents = setInterval(() => {
        if (window.jQuery && window.$) {
          clearInterval(bindEvents);
          const $ = window.$;
          
          var btn = $('#button');
          $(window).scroll(function() {
            if ($(window).scrollTop() > 300) {
              btn.addClass('show');
            } else {
              btn.removeClass('show');
            }
          });
          
          btn.on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop:0}, '300');
          });

          $(window).scroll(function(){
            if ($(window).scrollTop() >= 113) {
              $('header').addClass('fixed-header');
              $('.banner-main-con').addClass('banner-main-con2');
            } else {
              $('header').removeClass('fixed-header');
              $('.banner-main-con').removeClass('banner-main-con2');
            }
          });
        }
      }, 500);
      
      return () => {
        clearInterval(initWow);
        clearInterval(bindEvents);
      };
    }
  }, []);

  return (
    <>
      <Script src="/js/wow.js" strategy="afterInteractive" />
      <Script src="/js/jquery-3.6.0.min.js" strategy="beforeInteractive" />
      <Script src="/ajax/jquery.validate/1.9/jquery.validate.js" strategy="afterInteractive" />
      <Script src="/js/popper.min.js" strategy="afterInteractive" />
      <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
      <Script src="/js/custom-script.js" strategy="afterInteractive" />
      <Script src="/js/contact-form.js" strategy="lazyOnload" />
    </>
  );
}
