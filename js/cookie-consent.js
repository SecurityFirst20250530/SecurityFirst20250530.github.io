/**
 * Cookie Consent Banner & Common Utilities
 */

(function() {
  'use strict';

  // ===================== Cookie Banner =====================
  var COOKIE_KEY = 'cookie_consent';

  function initCookieBanner() {
    var banner = document.getElementById('cookie-banner');
    if (!banner) return;

    var consent = localStorage.getItem(COOKIE_KEY);
    if (consent === 'accepted' || consent === 'declined') {
      banner.classList.remove('show');
      return;
    }

    banner.classList.add('show');

    var acceptBtn = document.getElementById('cookie-accept');
    var declineBtn = document.getElementById('cookie-decline');

    if (acceptBtn) {
      acceptBtn.addEventListener('click', function() {
        localStorage.setItem(COOKIE_KEY, 'accepted');
        banner.classList.remove('show');
      });
    }

    if (declineBtn) {
      declineBtn.addEventListener('click', function() {
        localStorage.setItem(COOKIE_KEY, 'declined');
        banner.classList.remove('show');
      });
    }
  }

  // ===================== Back to Top =====================
  function initBackToTop() {
    var btn = document.getElementById('back-to-top');
    if (!btn) return;

    function toggleVisibility() {
      if (window.scrollY > 300) {
        btn.classList.add('show');
      } else {
        btn.classList.remove('show');
      }
    }

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility();

    btn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ===================== Search Filter =====================
  function initSearchFilter() {
    var searchInput = document.getElementById('tool-search');
    if (!searchInput) return;

    var cards = document.querySelectorAll('.tool-card');

    function filterCards() {
      var query = searchInput.value.trim().toLowerCase();
      var hasVisible = false;

      cards.forEach(function(card) {
        var text = card.textContent.toLowerCase();
        if (text.indexOf(query) !== -1) {
          card.style.display = '';
          hasVisible = true;
        } else {
          card.style.display = 'none';
        }
      });

      var noResult = document.getElementById('no-results');
      if (noResult) {
        noResult.style.display = hasVisible ? 'none' : 'block';
      }
    }

    searchInput.addEventListener('input', filterCards);
  }

  // ===================== Initialize =====================
  document.addEventListener('DOMContentLoaded', function() {
    initCookieBanner();
    initBackToTop();
    initSearchFilter();
  });
})();
