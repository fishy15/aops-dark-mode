// ==UserScript==
// @name         AoPS Dark Mode
// @namespace    fishy15
// @version      0.1
// @description  Make the AoPS Website look nicer by using a dark theme.
// @author       fishy15
// @match        artofproblemsolving.com/*
// @require      http://code.jquery.com/jquery-latest.js
// @run-at       document-start
// @grant        none
// ==/UserScript==

$(document).ready(function() {
  'use strict';

  // colors
  var backgroundGray = '#262626';
  var darkBlue = '#00244f';
  var lighterBGGray = '#3d3d3d';

  var selector1 = '#community-all.cmty-page-topic #cmty-topic-view-top .cmty-category-cell,' +
    '#community-all.cmty-page-topic-list  #cmty-topic-view-top .cmty-category-cell,' +
    '#community-all #cmty-topic-view-left,' +
    '#community-all.cmty-page-topic-list  #cmty-no-topic-view-bottom,' +
    '#community-all .cmty-flat-top .cmty-category-cell-bottom'

	// makes parts of the screen to the background gray color
  $('#page-wrapper').css({
    'background-color': backgroundGray
  });

  $('.action-wrapper').css({
  	'background-color': backgroundGray
  });

  $('.menubar-wrapper').css({
  	'background-color': backgroundGray
  });

  $('.extra').css({
  	'background-color': backgroundGray
  });

  // uses a different color gray to differentiate the bar from other parts
  $('.extra > *').css({
  	'background-color': lighterBGGray
  });

  $('.extra-bottom').css({
  	'background-color': backgroundGray
  })

	// change various bars to have a darker blue background
  $('#breadcrumbs-wrapper').css({
    'background-color': darkBlue,
    boxShadow: 'none'
  });

  $('.bluebar-wrapper').css({
  	'background-color': darkBlue
  });

  //$('.cmty-tag-filter').css({'display': 'none'}); <- idk what this is

  // the shadow for the top section, doesn't seem to work for some reason
  $('*').css('box-shadow', 'none !important');

  console.log($(selector1).css('border-color'));

  // changes AoPS Logo Image so that there is no white border around the cube.
  $('#main-logo').css({
  	'background-image': 'url(https://vectr.com/tmp/b1GkDJN2er/b15PghKSu.svg?width=640&height=640&select=b15PghKSupage0)',
    'background-size': '270px 180px'
  });
});


/*
#community-all.cmty-page-topic #cmty-topic-view-top .cmty-category-cell,
#community-all.cmty-page-topic-list  #cmty-topic-view-top .cmty-category-cell,
#community-all #cmty-topic-view-left,
#community-allcmty-page-topic-list  #cmty-no-topic-view-bottom,
#community-all .cmty-flat-top .cmty-category-cell-bottom

these are the objects that use background shadow type 1
*/
