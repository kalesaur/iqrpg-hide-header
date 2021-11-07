// ==UserScript==
// @name        Remove header - iqrpg.com
// @match       https://www.iqrpg.com/game.php
// @grant       none
// @version     1.0
// @author      kalesaur
// @noframes
// ==/UserScript==

window.addEventListener('load', function() {
    document.getElementsByClassName('header')[0].remove();
}, false);
