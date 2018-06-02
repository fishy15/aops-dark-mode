// ==UserScript==
// @name         AoPS Dark Mode
// @namespace    fishy15
// @version      0.1
// @description  Make the AoPS Website look nicer by using a dark theme.
// @author       You
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
  // the weird url is the link to the svg file for the image
  $('#main-logo').css({
  	'background-image': 'url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjwh%0D%0ARE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cu%0D%0AdzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4x%0D%0AIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8v%0D%0Ad3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0%0D%0AIiB2aWV3Qm94PSIwIDAgNjQwIDY0MCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSI2NDAiPjxkZWZzPjxw%0D%0AYXRoIGQ9Ik03NS4xMyAzNy4yNUwxMDUuNzggNTQuOTFMMTM2LjQzIDM3LjI1TDEwNS43OCAxOS42%0D%0ATDc1LjEzIDM3LjI1WiIgaWQ9ImIxMnhWd0hRbHEiPjwvcGF0aD48cGF0aCBkPSJNNDEuMDggNTYu%0D%0AODdMNzEuNzMgNzQuNTJMMTAyLjM3IDU2Ljg3TDcxLjczIDM5LjIxTDQxLjA4IDU2Ljg3WiIgaWQ9%0D%0AImRKd1NLMVI2OSI+PC9wYXRoPjxwYXRoIGQ9Ik0xMDkuMTkgNTYuODdMMTM5LjgzIDc0LjUyTDE3%0D%0AMC40OCA1Ni44N0wxMzkuODMgMzkuMjFMMTA5LjE5IDU2Ljg3WiIgaWQ9ImI1dGtVQmlQNiI+PC9w%0D%0AYXRoPjxwYXRoIGQ9Ik0xNDMuMjQgNzYuNDhMMTczLjg5IDk0LjE0TDIwNC41NCA3Ni40OEwxNzMu%0D%0AODkgNTguODNMMTQzLjI0IDc2LjQ4WiIgaWQ9ImExUjhvcjVvUUciPjwvcGF0aD48cGF0aCBkPSJN%0D%0ANy4wMyA3Ni40OEwzNy42NyA5NC4xNEw2OC4zMiA3Ni40OEwzNy42NyA1OC44M0w3LjAzIDc2LjQ4%0D%0AWiIgaWQ9ImY3NFJ4cnJwaDkiPjwvcGF0aD48cGF0aCBkPSJNMzUuOTcgMjEwLjg1TDM1Ljk3IDE3%0D%0ANS41NEw1LjMyIDE1Ny44OUw1LjMyIDE5My4yTDM1Ljk3IDIxMC44NVoiIGlkPSJjSDdzTXdhQ1Ei%0D%0APjwvcGF0aD48cGF0aCBkPSJNNzAuMDMgMjMwLjQ3TDcwLjAzIDE5NS4xNkwzOS4zOCAxNzcuNTFM%0D%0AMzkuMzggMjEyLjgxTDcwLjAzIDIzMC40N1oiIGlkPSJhTHNsdXQ1MnIiPjwvcGF0aD48cGF0aCBk%0D%0APSJNMzUuOTcgMTcxLjYyTDM1Ljk3IDEzNi4zMUw1LjMzIDExOC42Nkw1LjMyIDE1My45N0wzNS45%0D%0ANyAxNzEuNjJaIiBpZD0iYmt2YUk1ZnRvIj48L3BhdGg+PHBhdGggZD0iTTM1Ljk3IDEzMi4zOUwz%0D%0ANS45NyA5Ny4wOEw1LjMzIDc5LjQzTDUuMzMgMTE0LjczTDM1Ljk3IDEzMi4zOVoiIGlkPSJkc1py%0D%0AN3Nyd0ciPjwvcGF0aD48cGF0aCBkPSJNMTA0LjA4IDI1MC4wOUwxMDQuMDggMjE0Ljc4TDczLjQz%0D%0AIDE5Ny4xMkw3My40MyAyMzIuNDNMMTA0LjA4IDI1MC4wOVoiIGlkPSJiMmlEU3QxRjJZIj48L3Bh%0D%0AdGg+PHBhdGggZD0iTTE3NS41OSAyMTAuODVMMTc1LjU5IDE3NS41NEwyMDYuMjQgMTU3Ljg5TDIw%0D%0ANi4yNCAxOTMuMkwxNzUuNTkgMjEwLjg1WiIgaWQ9ImFJNlpncWNrWiI+PC9wYXRoPjxwYXRoIGQ9%0D%0AIk0xNDEuNTQgMjMwLjQ3TDE0MS41NCAxOTUuMTZMMTcyLjE5IDE3Ny41MUwxNzIuMTkgMjEyLjgx%0D%0ATDE0MS41NCAyMzAuNDdaIiBpZD0iZDFYSlJyZnloIj48L3BhdGg+PHBhdGggZD0iTTE3NS41OSAx%0D%0ANzEuNjJMMTc1LjU5IDEzNi4zMUwyMDYuMjQgMTE4LjY2TDIwNi4yNCAxNTMuOTdMMTc1LjU5IDE3%0D%0AMS42MloiIGlkPSJjREZjZnBtTzYiPjwvcGF0aD48cGF0aCBkPSJNMTc1LjU5IDEzMi4zOUwxNzUu%0D%0ANTkgOTcuMDhMMjA2LjI0IDc5LjQzTDIwNi4yNCAxMTQuNzNMMTc1LjU5IDEzMi4zOVoiIGlkPSJm%0D%0AM2xOVTBKVWx5Ij48L3BhdGg+PHBhdGggZD0iTTEwNy40OSAyNTAuMDlMMTA3LjQ4IDIxNC43OEwx%0D%0AMzguMTMgMTk3LjEyTDEzOC4xMyAyMzIuNDNMMTA3LjQ5IDI1MC4wOVoiIGlkPSJhR0h0bTl4RmEi%0D%0APjwvcGF0aD48cGF0aCBkPSJNMTM2LjQzIDE5NC4xOEwxMDUuNzggMTc2LjUyTDc1LjEzIDE5NC4x%0D%0AOEwxMDUuNzggMjExLjgzTDEzNi40MyAxOTQuMThaIiBpZD0iZzFaMW1IMjVNUyI+PC9wYXRoPjxw%0D%0AYXRoIGQ9Ik0xNzAuNDggMTc0LjU2TDEzOS44MyAxNTYuOTFMMTA5LjE5IDE3NC41NkwxMzkuODMg%0D%0AMTkyLjIyTDE3MC40OCAxNzQuNTZaIiBpZD0iYjRLZk81dWl1cSI+PC9wYXRoPjxwYXRoIGQ9Ik0x%0D%0AMDIuMzggMTc0LjU2TDcxLjczIDE1Ni45MUw0MS4wOCAxNzQuNTZMNzEuNzMgMTkyLjIyTDEwMi4z%0D%0AOCAxNzQuNTZaIiBpZD0iYThNRUZyaGU4Ij48L3BhdGg+PHBhdGggZD0iTTE0MS41NCA3OS40M0wx%0D%0ANDEuNTQgMTE0LjczTDE3Mi4xOCAxMzIuMzlMMTcyLjE4IDk3LjA4TDE0MS41NCA3OS40M1oiIGlk%0D%0APSJhNmY1UmpLbEYiPjwvcGF0aD48cGF0aCBkPSJNMTA3LjQ4IDU5LjgxTDEwNy40OCA5NS4xMkwx%0D%0AMzguMTMgMTEyLjc3TDEzOC4xMyA3Ny40NkwxMDcuNDggNTkuODFaIiBpZD0iYkpYaFNBWWlGIj48%0D%0AL3BhdGg+PHBhdGggZD0iTTE0MS41NCAxMTguNjZMMTQxLjU0IDE1My45N0wxNzIuMTggMTcxLjYy%0D%0ATDE3Mi4xOCAxMzYuMzFMMTQxLjU0IDExOC42NloiIGlkPSJlRkVhZTF3YlkiPjwvcGF0aD48cGF0%0D%0AaCBkPSJNNzAuMDIgNzkuNDNMNzAuMDMgMTE0LjczTDM5LjM4IDEzMi4zOUwzOS4zOCA5Ny4wOEw3%0D%0AMC4wMiA3OS40M1oiIGlkPSJlOW9EYWdtbnJzIj48L3BhdGg+PHBhdGggZD0iTTEwNC4wOCA1OS44%0D%0AMUwxMDQuMDggOTUuMTJMNzMuNDMgMTEyLjc3TDczLjQzIDc3LjQ2TDEwNC4wOCA1OS44MVoiIGlk%0D%0APSJjVDVCbE1tIj48L3BhdGg+PHBhdGggZD0iTTcwLjAyIDExOC42Nkw3MC4wMyAxNTMuOTdMMzku%0D%0AMzggMTcxLjYyTDM5LjM4IDEzNi4zMUw3MC4wMiAxMTguNjZaIiBpZD0iZ2NaenVVME5TIj48L3Bh%0D%0AdGg+PHBhdGggZD0iTTEzOC4xMyAxMTguNjZMMTA3LjQ4IDEzNi4zMUwxMDcuNDggMTcxLjYyTDEz%0D%0AOC4xMyAxNTMuOTdMMTM4LjEzIDExOC42NloiIGlkPSJhNzJ1Y3VFVkx0Ij48L3BhdGg+PHBhdGgg%0D%0AZD0iTTEwNC4wOCAxNzEuNjJMMTA0LjA4IDEzNi4zMUw3My40MyAxMTguNjZMNzMuNDMgMTUzLjk3%0D%0ATDEwNC4wOCAxNzEuNjJaIiBpZD0iZmdhbXo5cU9DIj48L3BhdGg+PHBhdGggZD0iTTc1LjEzIDEx%0D%0ANS43MUwxMDUuNzggMTMzLjM3TDEzNi40MyAxMTUuNzFMMTA1Ljc4IDk4LjA2TDc1LjEzIDExNS43%0D%0AMVoiIGlkPSJiUXQweXdteSI+PC9wYXRoPjxwYXRoIGQ9Ik0zMjYuNjEgMTkwLjgzTDMxNi4zMiAx%0D%0ANjUuNjRMMjY4LjczIDE2NS42NEwyNTguNDQgMTkwLjgzTDIzMy4xOSAxOTAuODNMMjgxLjQzIDc3%0D%0ALjczTDMwNC4yNiA3Ny43M0wzNTIuNSAxOTAuODNMMzI2LjYxIDE5MC44M1pNMzA3LjQ3IDE0My44%0D%0AMkwyOTIuNTIgMTA3LjQxTDI3Ny41NyAxNDMuODJMMzA3LjQ3IDE0My44MloiIGlkPSJhNXJRbU1l%0D%0AVXFTIj48L3BhdGg+PHBhdGggZD0iTTQwMS43OCAxMDMuMzlMNDAzLjcxIDEwMy41N0w0MDUuNjEg%0D%0AMTAzLjgyTDQwNy40OSAxMDQuMTRMNDA5LjMzIDEwNC41Mkw0MTEuMTQgMTA0Ljk3TDQxMi45MSAx%0D%0AMDUuNDlMNDE0LjY1IDEwNi4wN0w0MTYuMzUgMTA2LjcxTDQxOC4wMSAxMDcuNDFMNDE5LjYzIDEw%0D%0AOC4xN0w0MjEuMjIgMTA4Ljk5TDQyMi43NiAxMDkuODZMNDI0LjI2IDExMC43OUw0MjUuNzEgMTEx%0D%0ALjc3TDQyNy4xMiAxMTIuOEw0MjguNDkgMTEzLjg4TDQyOS44IDExNS4wMUw0MzEuMDcgMTE2LjE5%0D%0ATDQzMi4yOCAxMTcuNDJMNDMzLjQ1IDExOC42OUw0MzQuNTYgMTIwTDQzNS42MiAxMjEuMzZMNDM2%0D%0ALjYzIDEyMi43Nkw0MzcuNTggMTI0LjJMNDM4LjQ3IDEyNS42N0w0MzkuMyAxMjcuMThMNDQwLjA3%0D%0AIDEyOC43M0w0NDAuNzggMTMwLjMxTDQ0MS40MyAxMzEuOTJMNDQyLjAyIDEzMy41N0w0NDIuNTQg%0D%0AMTM1LjI0TDQ0MyAxMzYuOTRMNDQzLjM5IDEzOC42N0w0NDMuNzEgMTQwLjQzTDQ0My45NiAxNDIu%0D%0AMjFMNDQ0LjE0IDE0NC4wMUw0NDQuMjUgMTQ1LjgzTDQ0NC4yOSAxNDcuNjhMNDQ0LjI5IDE0OEw0%0D%0ANDQuMjUgMTQ5Ljg0TDQ0NC4xNCAxNTEuNjZMNDQzLjk2IDE1My40N0w0NDMuNzEgMTU1LjI1TDQ0%0D%0AMy4zOCAxNTcuMDFMNDQyLjk5IDE1OC43NUw0NDIuNTMgMTYwLjQ2TDQ0MiAxNjIuMTRMNDQxLjQx%0D%0AIDE2My43OUw0NDAuNzYgMTY1LjQxTDQ0MC4wNCAxNjdMNDM5LjI2IDE2OC41Nkw0MzguNDIgMTcw%0D%0ALjA4TDQzNy41MiAxNzEuNTdMNDM2LjU3IDE3My4wMUw0MzUuNTUgMTc0LjQyTDQzNC40OSAxNzUu%0D%0ANzlMNDMzLjM3IDE3Ny4xMkw0MzIuMTkgMTc4LjRMNDMwLjk3IDE3OS42NEw0MjkuNjkgMTgwLjgz%0D%0ATDQyOC4zNyAxODEuOTdMNDI2Ljk5IDE4My4wN0w0MjUuNTcgMTg0LjExTDQyNC4xMSAxODUuMUw0%0D%0AMjIuNiAxODYuMDRMNDIxLjA1IDE4Ni45M0w0MTkuNDUgMTg3Ljc1TDQxNy44MiAxODguNTJMNDE2%0D%0ALjE0IDE4OS4yM0w0MTQuNDMgMTg5Ljg4TDQxMi42OCAxOTAuNDdMNDEwLjkgMTkwLjk5TDQwOS4w%0D%0AOCAxOTEuNDVMNDA3LjIyIDE5MS44NEw0MDUuMzQgMTkyLjE3TDQwMy40MiAxOTIuNDJMNDAxLjQ4%0D%0AIDE5Mi42TDM5OS41IDE5Mi43MUwzOTcuNSAxOTIuNzVMMzk1LjUyIDE5Mi43MkwzOTMuNTUgMTky%0D%0ALjYxTDM5MS42MiAxOTIuNDNMMzg5LjcyIDE5Mi4xOEwzODcuODUgMTkxLjg2TDM4NiAxOTEuNDdM%0D%0AMzg0LjIgMTkxLjAyTDM4Mi40MiAxOTAuNUwzODAuNjkgMTg5LjkyTDM3OC45OSAxODkuMjhMMzc3%0D%0ALjMyIDE4OC41OEwzNzUuNyAxODcuODJMMzc0LjEyIDE4Ny4wMUwzNzIuNTcgMTg2LjEzTDM3MS4w%0D%0ANyAxODUuMjFMMzY5LjYyIDE4NC4yM0wzNjguMjEgMTgzLjE5TDM2Ni44NSAxODIuMTFMMzY1LjUz%0D%0AIDE4MC45OEwzNjQuMjYgMTc5LjhMMzYzLjA1IDE3OC41N0wzNjEuODggMTc3LjNMMzYwLjc3IDE3%0D%0ANS45OUwzNTkuNzEgMTc0LjYzTDM1OC43IDE3My4yM0wzNTcuNzYgMTcxLjhMMzU2Ljg2IDE3MC4z%0D%0AMkwzNTYuMDMgMTY4LjgxTDM1NS4yNiAxNjcuMjZMMzU0LjU1IDE2NS42OEwzNTMuOSAxNjQuMDdM%0D%0AMzUzLjMxIDE2Mi40MkwzNTIuNzkgMTYwLjc1TDM1Mi4zMyAxNTkuMDVMMzUxLjk0IDE1Ny4zMkwz%0D%0ANTEuNjIgMTU1LjU2TDM1MS4zNyAxNTMuNzlMMzUxLjE5IDE1MS45OEwzNTEuMDggMTUwLjE2TDM1%0D%0AMS4wNCAxNDguMzJMMzUxLjA0IDE0OEwzNTEuMDggMTQ2LjE1TDM1MS4xOSAxNDQuMzNMMzUxLjM3%0D%0AIDE0Mi41MkwzNTEuNjIgMTQwLjc0TDM1MS45NSAxMzguOThMMzUyLjM0IDEzNy4yNEwzNTIuOCAx%0D%0AMzUuNTRMMzUzLjMzIDEzMy44NUwzNTMuOTIgMTMyLjJMMzU0LjU3IDEzMC41OEwzNTUuMjkgMTI4%0D%0ALjk5TDM1Ni4wNyAxMjcuNDNMMzU2LjkxIDEyNS45MUwzNTcuODEgMTI0LjQzTDM1OC43NiAxMjIu%0D%0AOThMMzU5Ljc3IDEyMS41N0wzNjAuODQgMTIwLjJMMzYxLjk2IDExOC44N0wzNjMuMTQgMTE3LjU5%0D%0ATDM2NC4zNiAxMTYuMzVMMzY1LjY0IDExNS4xNkwzNjYuOTYgMTE0LjAyTDM2OC4zNCAxMTIuOTJM%0D%0AMzY5Ljc2IDExMS44OEwzNzEuMjIgMTEwLjg5TDM3Mi43MyAxMDkuOTVMMzc0LjI4IDEwOS4wNkwz%0D%0ANzUuODggMTA4LjI0TDM3Ny41MSAxMDcuNDdMMzc5LjE5IDEwNi43NkwzODAuOSAxMDYuMTFMMzgy%0D%0ALjY1IDEwNS41MkwzODQuNDMgMTA1TDM4Ni4yNSAxMDQuNTRMMzg4LjExIDEwNC4xNUwzODkuOTkg%0D%0AMTAzLjgzTDM5MS45MSAxMDMuNTdMMzkzLjg1IDEwMy4zOUwzOTUuODMgMTAzLjI4TDM5Ny44MyAx%0D%0AMDMuMjRMMzk5LjgyIDEwMy4yOEw0MDEuNzggMTAzLjM5Wk0zOTQuNjkgMTI0LjRMMzkzLjM1IDEy%0D%0ANC41OUwzOTIuMDQgMTI0Ljg0TDM5MC43OCAxMjUuMTdMMzg5LjU3IDEyNS41NkwzODguNCAxMjYu%0D%0AMDFMMzg3LjI3IDEyNi41MkwzODYuMTkgMTI3LjFMMzg1LjE1IDEyNy43M0wzODQuMTYgMTI4LjQx%0D%0ATDM4My4yMiAxMjkuMTVMMzgyLjMzIDEyOS45NEwzODEuNDkgMTMwLjc4TDM4MC42OSAxMzEuNjZM%0D%0AMzc5Ljk1IDEzMi41OUwzNzkuMjYgMTMzLjU2TDM3OC42MiAxMzQuNTdMMzc4LjAzIDEzNS42MUwz%0D%0ANzcuNDkgMTM2LjdMMzc3LjAxIDEzNy44MUwzNzYuNTggMTM4Ljk2TDM3Ni4yMSAxNDAuMTRMMzc1%0D%0ALjg5IDE0MS4zNEwzNzUuNjMgMTQyLjU2TDM3NS40MiAxNDMuODFMMzc1LjI4IDE0NS4wOEwzNzUu%0D%0AMTkgMTQ2LjM3TDM3NS4xNiAxNDcuNjhMMzc1LjE2IDE0OEwzNzUuMTkgMTQ5LjNMMzc1LjI5IDE1%0D%0AMC41OUwzNzUuNDUgMTUxLjg3TDM3NS42NyAxNTMuMTJMMzc1Ljk1IDE1NC4zNkwzNzYuMjkgMTU1%0D%0ALjU3TDM3Ni42OSAxNTYuNzZMMzc3LjE1IDE1Ny45MkwzNzcuNjYgMTU5LjA1TDM3OC4yMyAxNjAu%0D%0AMTVMMzc4Ljg1IDE2MS4yMUwzNzkuNTIgMTYyLjIzTDM4MC4yNSAxNjMuMjJMMzgxLjAyIDE2NC4x%0D%0ANkwzODEuODUgMTY1LjA2TDM4Mi43MiAxNjUuOTJMMzgzLjYzIDE2Ni43MkwzODQuNiAxNjcuNDhM%0D%0AMzg1LjYgMTY4LjE4TDM4Ni42NSAxNjguODJMMzg3Ljc0IDE2OS40MUwzODguODggMTY5LjkzTDM5%0D%0AMC4wNSAxNzAuNEwzOTEuMjUgMTcwLjhMMzkyLjUgMTcxLjEzTDM5My43OCAxNzEuMzlMMzk1LjEg%0D%0AMTcxLjU4TDM5Ni40NSAxNzEuN0wzOTcuODMgMTcxLjc0TDM5OS4yNSAxNzEuN0w0MDAuNjQgMTcx%0D%0ALjU4TDQwMS45OSAxNzEuNEw0MDMuMjkgMTcxLjE0TDQwNC41NSAxNzAuODJMNDA1Ljc2IDE3MC40%0D%0AM0w0MDYuOTQgMTY5Ljk4TDQwOC4wNiAxNjkuNDdMNDA5LjE0IDE2OC44OUw0MTAuMTggMTY4LjI2%0D%0ATDQxMS4xNyAxNjcuNThMNDEyLjExIDE2Ni44NEw0MTMgMTY2LjA1TDQxMy44NCAxNjUuMjFMNDE0%0D%0ALjY0IDE2NC4zM0w0MTUuMzggMTYzLjRMNDE2LjA4IDE2Mi40M0w0MTYuNzIgMTYxLjQyTDQxNy4z%0D%0AMSAxNjAuMzhMNDE3Ljg0IDE1OS4zTDQxOC4zMiAxNTguMThMNDE4Ljc1IDE1Ny4wM0w0MTkuMTMg%0D%0AMTU1Ljg2TDQxOS40NCAxNTQuNjVMNDE5LjcxIDE1My40M0w0MTkuOTEgMTUyLjE4TDQyMC4wNiAx%0D%0ANTAuOTFMNDIwLjE1IDE0OS42Mkw0MjAuMTggMTQ4LjMyTDQyMC4xOCAxNDhMNDIwLjE0IDE0Ni42%0D%0AOUw0MjAuMDUgMTQ1LjRMNDE5Ljg5IDE0NC4xMkw0MTkuNjcgMTQyLjg3TDQxOS4zOCAxNDEuNjNM%0D%0ANDE5LjA0IDE0MC40Mkw0MTguNjQgMTM5LjIzTDQxOC4xOCAxMzguMDdMNDE3LjY3IDEzNi45NEw0%0D%0AMTcuMSAxMzUuODVMNDE2LjQ4IDEzNC43OEw0MTUuODEgMTMzLjc2TDQxNS4wOCAxMzIuNzdMNDE0%0D%0ALjMxIDEzMS44M0w0MTMuNDkgMTMwLjkzTDQxMi42MiAxMzAuMDdMNDExLjcgMTI5LjI3TDQxMC43%0D%0ANCAxMjguNTJMNDA5LjczIDEyNy44MUw0MDguNjggMTI3LjE3TDQwNy41OSAxMjYuNThMNDA2LjQ2%0D%0AIDEyNi4wNkw0MDUuMjkgMTI1LjU5TDQwNC4wOCAxMjUuMTlMNDAyLjgzIDEyNC44Nkw0MDEuNTUg%0D%0AMTI0LjZMNDAwLjI0IDEyNC40MUwzOTguODkgMTI0LjI5TDM5Ny41IDEyNC4yNUwzOTYuMDggMTI0%0D%0ALjI5TDM5NC42OSAxMjQuNFoiIGlkPSJiaXJDaEltcmEiPjwvcGF0aD48cGF0aCBkPSJNNTAyLjQy%0D%0AIDc4LjY1TDUwNC4zMyA3OC44TDUwNi4yIDc5TDUwOC4wMyA3OS4yNkw1MDkuODIgNzkuNTdMNTEx%0D%0ALjU2IDc5Ljk0TDUxMy4yNiA4MC4zN0w1MTQuOTIgODAuODRMNTE2LjUzIDgxLjM3TDUxOC4xIDgx%0D%0ALjk1TDUxOS42MiA4Mi41OEw1MjEuMSA4My4yNkw1MjIuNTIgODMuOTlMNTIzLjkxIDg0Ljc3TDUy%0D%0ANS4yNCA4NS41OUw1MjYuNTMgODYuNDZMNTI3Ljc2IDg3LjM4TDUyOC45NSA4OC4zNEw1MzAuMDkg%0D%0AODkuMzRMNTMxLjE3IDkwLjM5TDUzMi4yMSA5MS40OEw1MzMuMiA5Mi42MUw1MzQuMTMgOTMuNzhM%0D%0ANTM1LjAxIDk0Ljk5TDUzNS44NCA5Ni4yNEw1MzYuNjEgOTcuNTNMNTM3LjMzIDk4Ljg1TDUzOCAx%0D%0AMDAuMjFMNTM4LjYxIDEwMS42MUw1MzkuMTYgMTAzLjA0TDUzOS42NiAxMDQuNTFMNTQwLjEgMTA2%0D%0ALjAxTDU0MC40OSAxMDcuNTRMNTQwLjgxIDEwOS4xTDU0MS4wOCAxMTAuNjlMNTQxLjI5IDExMi4z%0D%0AMkw1NDEuNDQgMTEzLjk3TDU0MS41MyAxMTUuNjVMNTQxLjU2IDExNy4zNUw1NDEuNTYgMTE3LjY4%0D%0ATDU0MS41MyAxMTkuNkw1NDEuNDEgMTIxLjQ4TDU0MS4yMyAxMjMuMzFMNTQwLjk3IDEyNS4xTDU0%0D%0AMC42NCAxMjYuODNMNTQwLjI1IDEyOC41Mkw1MzkuNzggMTMwLjE2TDUzOS4yNSAxMzEuNzZMNTM4%0D%0ALjY2IDEzMy4zMUw1MzggMTM0LjhMNTM3LjI4IDEzNi4yNkw1MzYuNTEgMTM3LjY2TDUzNS42NyAx%0D%0AMzkuMDFMNTM0Ljc3IDE0MC4zMkw1MzMuODIgMTQxLjU4TDUzMi44MiAxNDIuNzlMNTMxLjc2IDE0%0D%0AMy45NUw1MzAuNjUgMTQ1LjA3TDUyOS40OSAxNDYuMTNMNTI4LjI4IDE0Ny4xNUw1MjcuMDIgMTQ4%0D%0ALjEyTDUyNS43MiAxNDkuMDRMNTI0LjM3IDE0OS45MUw1MjIuOTggMTUwLjczTDUyMS41NSAxNTEu%0D%0ANUw1MjAuMDggMTUyLjIzTDUxOC41NyAxNTIuOUw1MTcuMDIgMTUzLjUyTDUxNS40NCAxNTQuMUw1%0D%0AMTMuODIgMTU0LjYzTDUxMi4xNyAxNTUuMUw1MTAuNDkgMTU1LjUzTDUwOC43NyAxNTUuOUw1MDcu%0D%0AMDMgMTU2LjIzTDUwNS4yNiAxNTYuNTFMNTAzLjQ3IDE1Ni43M0w1MDEuNjUgMTU2LjkxTDQ5OS44%0D%0AMSAxNTcuMDRMNDk3Ljk0IDE1Ny4xMUw0OTYuMDYgMTU3LjE0TDQ3Ny4yNSAxNTcuMTRMNDc3LjI1%0D%0AIDE5MC44M0w0NTIuNDkgMTkwLjgzTDQ1Mi40OSA3OC41M0w0OTguNDcgNzguNTNMNTAwLjQ2IDc4%0D%0ALjU2TDUwMi40MiA3OC42NVpNNDc3LjI1IDEzNS4xNkw0OTYuODYgMTM1LjE2TDQ5OC4zNCAxMzQu%0D%0ANTlMNDk5Ljc3IDEzNC4wMUw1MDEuMTMgMTMzLjQzTDUwMi40NCAxMzIuODRMNTAzLjY4IDEzMi4y%0D%0ANEw1MDQuODcgMTMxLjY0TDUwNiAxMzEuMDJMNTA3LjA4IDEzMC40MUw1MDguMDkgMTI5Ljc4TDUw%0D%0AOS4wNSAxMjkuMTVMNTA5Ljk1IDEyOC41Mkw1MTAuNzkgMTI3Ljg3TDUxMS41NyAxMjcuMjJMNTEy%0D%0ALjMgMTI2LjU2TDUxMi45NyAxMjUuOUw1MTMuNTggMTI1LjIzTDUxNC4xMyAxMjQuNTVMNTE0LjYy%0D%0AIDEyMy44N0w1MTUuMDYgMTIzLjE4TDUxNS40MyAxMjIuNDhMNTE1Ljc1IDEyMS43OEw1MTYuMDEg%0D%0AMTIxLjA3TDUxNi4yMiAxMjAuMzVMNTE2LjM2IDExOS42Mkw1MTYuNDUgMTE4Ljg5TDUxNi40OCAx%0D%0AMTguMTZMNTE2LjQ4IDExNy44NEw1MTYuNDQgMTE2LjU4TDUxNi4zNCAxMTUuMzdMNTE2LjE3IDEx%0D%0ANC4yMUw1MTUuOTQgMTEzLjFMNTE1LjY0IDExMi4wM0w1MTUuMjggMTExTDUxNC44NiAxMTAuMDNM%0D%0ANTE0LjM4IDEwOS4xTDUxMy44MyAxMDguMjJMNTEzLjIzIDEwNy4zOUw1MTIuNTcgMTA2LjYxTDUx%0D%0AMS44NSAxMDUuODdMNTExLjA3IDEwNS4xOEw1MTAuMjQgMTA0LjU1TDUwOS4zNiAxMDMuOTZMNTA4%0D%0ALjQyIDEwMy40Mkw1MDcuNDMgMTAyLjkzTDUwNi40IDEwMi41TDUwNS4zMSAxMDIuMTFMNTA0LjE3%0D%0AIDEwMS43N0w1MDIuOTggMTAxLjQ5TDUwMS43NSAxMDEuMjVMNTAwLjQ4IDEwMS4wN0w0OTkuMTUg%0D%0AMTAwLjk0TDQ5Ny43OSAxMDAuODZMNDk2LjM4IDEwMC44M0w0NzcuMjUgMTAwLjgzTDQ3Ny4yNSAx%0D%0AMzUuMTZaIiBpZD0iZHFmRXdBYnpDIj48L3BhdGg+PHBhdGggZD0iTTU1Ny45NiAxNTYuOThDNTY4%0D%0ALjA5IDE2NS4zMiA1NzguNyAxNzAuNjIgNTkxLjU2IDE3MC42MkM2MDEuNjkgMTcwLjYyIDYwNy44%0D%0AIDE2Ni42IDYwNy44IDE2MC4wM0M2MDcuOCAxNTkuOTkgNjA3LjggMTU5Ljc0IDYwNy44IDE1OS43%0D%0AMUM2MDcuOCAxNTMuNDUgNjAzLjk0IDE1MC4yNCA1ODUuMTMgMTQ1LjQzQzU2Mi40NiAxMzkuNjYg%0D%0ANTQ3LjgzIDEzMy40IDU0Ny44MyAxMTEuMUM1NDcuODMgMTExLjA3IDU0Ny44MyAxMTAuODEgNTQ3%0D%0ALjgzIDExMC43OEM1NDcuODMgOTAuNDEgNTY0LjIyIDc2LjkzIDU4Ny4yMiA3Ni45M0M2MDMuNjIg%0D%0ANzYuOTMgNjE3LjYxIDgyLjA3IDYyOS4wMiA5MS4yMUM2MjcuNzQgOTMuMDcgNjE3LjQ0IDEwNy45%0D%0ANiA2MTYuMTYgMTA5LjgyQzYwNi4xOSAxMDIuOTIgNTk2LjM4IDk4Ljc1IDU4Ni45IDk4Ljc1QzU3%0D%0ANy40MSA5OC43NSA1NzIuNDMgMTAzLjA4IDU3Mi40MyAxMDguNTRDNTcyLjQzIDEwOC41NyA1NzIu%0D%0ANDMgMTA4LjgzIDU3Mi40MyAxMDguODZDNTcyLjQzIDExNi4yNCA1NzcuMjUgMTE4LjY0IDU5Ni43%0D%0AIDEyMy42MUM2MTkuNTMgMTI5LjU1IDYzMi40IDEzNy43MyA2MzIuNCAxNTcuM0M2MzIuNCAxNTcu%0D%0AMzQgNjMyLjQgMTU3LjU5IDYzMi40IDE1Ny42MkM2MzIuNCAxNzkuOTIgNjE1LjM2IDE5Mi40MyA1%0D%0AOTEuMDggMTkyLjQzQzU3NC4wNCAxOTIuNDMgNTU2LjgzIDE4Ni41IDU0My4zMyAxNzQuNDZDNTQ2%0D%0ALjI1IDE3MC45NyA1NTYuNDkgMTU4LjczIDU1Ny45NiAxNTYuOThaIiBpZD0iYjFyNEhFampuIj48%0D%0AL3BhdGg+PC9kZWZzPjxnPjxnPjx1c2UgeGxpbms6aHJlZj0iI2IxMnhWd0hRbHEiIG9wYWNpdHk9%0D%0AIjEiIGZpbGw9IiMwMDg0NDUiIGZpbGwtb3BhY2l0eT0iMSI+PC91c2U+PGc+PHVzZSB4bGluazpo%0D%0AcmVmPSIjYjEyeFZ3SFFscSIgb3BhY2l0eT0iMSIgZmlsbC1vcGFjaXR5PSIwIiBzdHJva2U9IiMw%0D%0AMDAwMDAiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLW9wYWNpdHk9IjAiPjwvdXNlPjwvZz48L2c+%0D%0APGc+PHVzZSB4bGluazpocmVmPSIjZEp3U0sxUjY5IiBvcGFjaXR5PSIxIiBmaWxsPSIjMDA4NDQ1%0D%0AIiBmaWxsLW9wYWNpdHk9IjEiPjwvdXNlPjxnPjx1c2UgeGxpbms6aHJlZj0iI2RKd1NLMVI2OSIg%0D%0Ab3BhY2l0eT0iMSIgZmlsbC1vcGFjaXR5PSIwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0%0D%0AaD0iMSIgc3Ryb2tlLW9wYWNpdHk9IjAiPjwvdXNlPjwvZz48L2c+PGc+PHVzZSB4bGluazpocmVm%0D%0APSIjYjV0a1VCaVA2IiBvcGFjaXR5PSIxIiBmaWxsPSIjMDA4NDQ1IiBmaWxsLW9wYWNpdHk9IjEi%0D%0APjwvdXNlPjxnPjx1c2UgeGxpbms6aHJlZj0iI2I1dGtVQmlQNiIgb3BhY2l0eT0iMSIgZmlsbC1v%0D%0AcGFjaXR5PSIwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLW9wYWNp%0D%0AdHk9IjAiPjwvdXNlPjwvZz48L2c+PGc+PHVzZSB4bGluazpocmVmPSIjYTFSOG9yNW9RRyIgb3Bh%0D%0AY2l0eT0iMSIgZmlsbD0iIzAwODQ0NSIgZmlsbC1vcGFjaXR5PSIxIj48L3VzZT48Zz48dXNlIHhs%0D%0AaW5rOmhyZWY9IiNhMVI4b3I1b1FHIiBvcGFjaXR5PSIxIiBmaWxsLW9wYWNpdHk9IjAiIHN0cm9r%0D%0AZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2Utb3BhY2l0eT0iMCI+PC91c2U+PC9n%0D%0APjwvZz48Zz48dXNlIHhsaW5rOmhyZWY9IiNmNzRSeHJycGg5IiBvcGFjaXR5PSIxIiBmaWxsPSIj%0D%0AMDA4NDQ1IiBmaWxsLW9wYWNpdHk9IjEiPjwvdXNlPjxnPjx1c2UgeGxpbms6aHJlZj0iI2Y3NFJ4%0D%0AcnJwaDkiIG9wYWNpdHk9IjEiIGZpbGwtb3BhY2l0eT0iMCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJv%0D%0Aa2Utd2lkdGg9IjEiIHN0cm9rZS1vcGFjaXR5PSIwIj48L3VzZT48L2c+PC9nPjxnPjx1c2UgeGxp%0D%0Abms6aHJlZj0iI2NIN3NNd2FDUSIgb3BhY2l0eT0iMSIgZmlsbD0iI2MzZGQ4OSIgZmlsbC1vcGFj%0D%0AaXR5PSIxIj48L3VzZT48Zz48dXNlIHhsaW5rOmhyZWY9IiNjSDdzTXdhQ1EiIG9wYWNpdHk9IjEi%0D%0AIGZpbGwtb3BhY2l0eT0iMCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9r%0D%0AZS1vcGFjaXR5PSIwIj48L3VzZT48L2c+PC9nPjxnPjx1c2UgeGxpbms6aHJlZj0iI2FMc2x1dDUy%0D%0AciIgb3BhY2l0eT0iMSIgZmlsbD0iI2MzZGQ4OSIgZmlsbC1vcGFjaXR5PSIxIj48L3VzZT48Zz48%0D%0AdXNlIHhsaW5rOmhyZWY9IiNhTHNsdXQ1MnIiIG9wYWNpdHk9IjEiIGZpbGwtb3BhY2l0eT0iMCIg%0D%0Ac3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1vcGFjaXR5PSIwIj48L3Vz%0D%0AZT48L2c+PC9nPjxnPjx1c2UgeGxpbms6aHJlZj0iI2JrdmFJNWZ0byIgb3BhY2l0eT0iMSIgZmls%0D%0AbD0iI2MzZGQ4OSIgZmlsbC1vcGFjaXR5PSIxIj48L3VzZT48Zz48dXNlIHhsaW5rOmhyZWY9IiNi%0D%0Aa3ZhSTVmdG8iIG9wYWNpdHk9IjEiIGZpbGwtb3BhY2l0eT0iMCIgc3Ryb2tlPSIjMDAwMDAwIiBz%0D%0AdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1vcGFjaXR5PSIwIj48L3VzZT48L2c+PC9nPjxnPjx1c2Ug%0D%0AeGxpbms6aHJlZj0iI2RzWnI3c3J3RyIgb3BhY2l0eT0iMSIgZmlsbD0iI2MzZGQ4OSIgZmlsbC1v%0D%0AcGFjaXR5PSIxIj48L3VzZT48Zz48dXNlIHhsaW5rOmhyZWY9IiNkc1pyN3Nyd0ciIG9wYWNpdHk9%0D%0AIjEiIGZpbGwtb3BhY2l0eT0iMCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEiIHN0%0D%0Acm9rZS1vcGFjaXR5PSIwIj48L3VzZT48L2c+PC9nPjxnPjx1c2UgeGxpbms6aHJlZj0iI2IyaURT%0D%0AdDFGMlkiIG9wYWNpdHk9IjEiIGZpbGw9IiNjM2RkODkiIGZpbGwtb3BhY2l0eT0iMSI+PC91c2U+%0D%0APGc+PHVzZSB4bGluazpocmVmPSIjYjJpRFN0MUYyWSIgb3BhY2l0eT0iMSIgZmlsbC1vcGFjaXR5%0D%0APSIwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLW9wYWNpdHk9IjAi%0D%0APjwvdXNlPjwvZz48L2c+PGc+PHVzZSB4bGluazpocmVmPSIjYUk2WmdxY2taIiBvcGFjaXR5PSIx%0D%0AIiBmaWxsPSIjMWYzZTdjIiBmaWxsLW9wYWNpdHk9IjEiPjwvdXNlPjxnPjx1c2UgeGxpbms6aHJl%0D%0AZj0iI2FJNlpncWNrWiIgb3BhY2l0eT0iMSIgZmlsbC1vcGFjaXR5PSIwIiBzdHJva2U9IiMwMDAw%0D%0AMDAiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLW9wYWNpdHk9IjAiPjwvdXNlPjwvZz48L2c+PGc+%0D%0APHVzZSB4bGluazpocmVmPSIjZDFYSlJyZnloIiBvcGFjaXR5PSIxIiBmaWxsPSIjMWYzZTdjIiBm%0D%0AaWxsLW9wYWNpdHk9IjEiPjwvdXNlPjxnPjx1c2UgeGxpbms6aHJlZj0iI2QxWEpScmZ5aCIgb3Bh%0D%0AY2l0eT0iMSIgZmlsbC1vcGFjaXR5PSIwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0i%0D%0AMSIgc3Ryb2tlLW9wYWNpdHk9IjAiPjwvdXNlPjwvZz48L2c+PGc+PHVzZSB4bGluazpocmVmPSIj%0D%0AY0RGY2ZwbU82IiBvcGFjaXR5PSIxIiBmaWxsPSIjMWYzZTdjIiBmaWxsLW9wYWNpdHk9IjEiPjwv%0D%0AdXNlPjxnPjx1c2UgeGxpbms6aHJlZj0iI2NERmNmcG1PNiIgb3BhY2l0eT0iMSIgZmlsbC1vcGFj%0D%0AaXR5PSIwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLW9wYWNpdHk9%0D%0AIjAiPjwvdXNlPjwvZz48L2c+PGc+PHVzZSB4bGluazpocmVmPSIjZjNsTlUwSlVseSIgb3BhY2l0%0D%0AeT0iMSIgZmlsbD0iIzFmM2U3YyIgZmlsbC1vcGFjaXR5PSIxIj48L3VzZT48Zz48dXNlIHhsaW5r%0D%0AOmhyZWY9IiNmM2xOVTBKVWx5IiBvcGFjaXR5PSIxIiBmaWxsLW9wYWNpdHk9IjAiIHN0cm9rZT0i%0D%0AIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2Utb3BhY2l0eT0iMCI+PC91c2U+PC9nPjwv%0D%0AZz48Zz48dXNlIHhsaW5rOmhyZWY9IiNhR0h0bTl4RmEiIG9wYWNpdHk9IjEiIGZpbGw9IiMxZjNl%0D%0AN2MiIGZpbGwtb3BhY2l0eT0iMSI+PC91c2U+PGc+PHVzZSB4bGluazpocmVmPSIjYUdIdG05eEZh%0D%0AIiBvcGFjaXR5PSIxIiBmaWxsLW9wYWNpdHk9IjAiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdp%0D%0AZHRoPSIxIiBzdHJva2Utb3BhY2l0eT0iMCI+PC91c2U+PC9nPjwvZz48Zz48dXNlIHhsaW5rOmhy%0D%0AZWY9IiNnMVoxbUgyNU1TIiBvcGFjaXR5PSIxIiBmaWxsPSIjMDA4NDQ1IiBmaWxsLW9wYWNpdHk9%0D%0AIjEiPjwvdXNlPjxnPjx1c2UgeGxpbms6aHJlZj0iI2cxWjFtSDI1TVMiIG9wYWNpdHk9IjEiIGZp%0D%0AbGwtb3BhY2l0eT0iMCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1v%0D%0AcGFjaXR5PSIwIj48L3VzZT48L2c+PC9nPjxnPjx1c2UgeGxpbms6aHJlZj0iI2I0S2ZPNXVpdXEi%0D%0AIG9wYWNpdHk9IjEiIGZpbGw9IiMwMDg0NDUiIGZpbGwtb3BhY2l0eT0iMSI+PC91c2U+PGc+PHVz%0D%0AZSB4bGluazpocmVmPSIjYjRLZk81dWl1cSIgb3BhY2l0eT0iMSIgZmlsbC1vcGFjaXR5PSIwIiBz%0D%0AdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLW9wYWNpdHk9IjAiPjwvdXNl%0D%0APjwvZz48L2c+PGc+PHVzZSB4bGluazpocmVmPSIjYThNRUZyaGU4IiBvcGFjaXR5PSIxIiBmaWxs%0D%0APSIjMDA4NDQ1IiBmaWxsLW9wYWNpdHk9IjEiPjwvdXNlPjxnPjx1c2UgeGxpbms6aHJlZj0iI2E4%0D%0ATUVGcmhlOCIgb3BhY2l0eT0iMSIgZmlsbC1vcGFjaXR5PSIwIiBzdHJva2U9IiMwMDAwMDAiIHN0%0D%0Acm9rZS13aWR0aD0iMSIgc3Ryb2tlLW9wYWNpdHk9IjAiPjwvdXNlPjwvZz48L2c+PGc+PHVzZSB4%0D%0AbGluazpocmVmPSIjYTZmNVJqS2xGIiBvcGFjaXR5PSIxIiBmaWxsPSIjYzNkZDg5IiBmaWxsLW9w%0D%0AYWNpdHk9IjEiPjwvdXNlPjxnPjx1c2UgeGxpbms6aHJlZj0iI2E2ZjVSaktsRiIgb3BhY2l0eT0i%0D%0AMSIgZmlsbC1vcGFjaXR5PSIwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMSIgc3Ry%0D%0Ab2tlLW9wYWNpdHk9IjAiPjwvdXNlPjwvZz48L2c+PGc+PHVzZSB4bGluazpocmVmPSIjYkpYaFNB%0D%0AWWlGIiBvcGFjaXR5PSIxIiBmaWxsPSIjYzNkZDg5IiBmaWxsLW9wYWNpdHk9IjEiPjwvdXNlPjxn%0D%0APjx1c2UgeGxpbms6aHJlZj0iI2JKWGhTQVlpRiIgb3BhY2l0eT0iMSIgZmlsbC1vcGFjaXR5PSIw%0D%0AIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLW9wYWNpdHk9IjAiPjwv%0D%0AdXNlPjwvZz48L2c+PGc+PHVzZSB4bGluazpocmVmPSIjZUZFYWUxd2JZIiBvcGFjaXR5PSIxIiBm%0D%0AaWxsPSIjYzNkZDg5IiBmaWxsLW9wYWNpdHk9IjEiPjwvdXNlPjxnPjx1c2UgeGxpbms6aHJlZj0i%0D%0AI2VGRWFlMXdiWSIgb3BhY2l0eT0iMSIgZmlsbC1vcGFjaXR5PSIwIiBzdHJva2U9IiMwMDAwMDAi%0D%0AIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLW9wYWNpdHk9IjAiPjwvdXNlPjwvZz48L2c+PGc+PHVz%0D%0AZSB4bGluazpocmVmPSIjZTlvRGFnbW5ycyIgb3BhY2l0eT0iMSIgZmlsbD0iIzFmM2U3YyIgZmls%0D%0AbC1vcGFjaXR5PSIxIj48L3VzZT48Zz48dXNlIHhsaW5rOmhyZWY9IiNlOW9EYWdtbnJzIiBvcGFj%0D%0AaXR5PSIxIiBmaWxsLW9wYWNpdHk9IjAiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIx%0D%0AIiBzdHJva2Utb3BhY2l0eT0iMCI+PC91c2U+PC9nPjwvZz48Zz48dXNlIHhsaW5rOmhyZWY9IiNj%0D%0AVDVCbE1tIiBvcGFjaXR5PSIxIiBmaWxsPSIjMWYzZTdjIiBmaWxsLW9wYWNpdHk9IjEiPjwvdXNl%0D%0APjxnPjx1c2UgeGxpbms6aHJlZj0iI2NUNUJsTW0iIG9wYWNpdHk9IjEiIGZpbGwtb3BhY2l0eT0i%0D%0AMCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1vcGFjaXR5PSIwIj48%0D%0AL3VzZT48L2c+PC9nPjxnPjx1c2UgeGxpbms6aHJlZj0iI2djWnp1VTBOUyIgb3BhY2l0eT0iMSIg%0D%0AZmlsbD0iIzFmM2U3YyIgZmlsbC1vcGFjaXR5PSIxIj48L3VzZT48Zz48dXNlIHhsaW5rOmhyZWY9%0D%0AIiNnY1p6dVUwTlMiIG9wYWNpdHk9IjEiIGZpbGwtb3BhY2l0eT0iMCIgc3Ryb2tlPSIjMDAwMDAw%0D%0AIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1vcGFjaXR5PSIwIj48L3VzZT48L2c+PC9nPjxnPjx1%0D%0Ac2UgeGxpbms6aHJlZj0iI2E3MnVjdUVWTHQiIG9wYWNpdHk9IjEiIGZpbGw9IiMxZjNlN2MiIGZp%0D%0AbGwtb3BhY2l0eT0iMSI+PC91c2U+PGc+PHVzZSB4bGluazpocmVmPSIjYTcydWN1RVZMdCIgb3Bh%0D%0AY2l0eT0iMSIgZmlsbC1vcGFjaXR5PSIwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0i%0D%0AMSIgc3Ryb2tlLW9wYWNpdHk9IjAiPjwvdXNlPjwvZz48L2c+PGc+PHVzZSB4bGluazpocmVmPSIj%0D%0AZmdhbXo5cU9DIiBvcGFjaXR5PSIxIiBmaWxsPSIjYzNkZDg5IiBmaWxsLW9wYWNpdHk9IjEiPjwv%0D%0AdXNlPjxnPjx1c2UgeGxpbms6aHJlZj0iI2ZnYW16OXFPQyIgb3BhY2l0eT0iMSIgZmlsbC1vcGFj%0D%0AaXR5PSIwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLW9wYWNpdHk9%0D%0AIjAiPjwvdXNlPjwvZz48L2c+PGc+PHVzZSB4bGluazpocmVmPSIjYlF0MHl3bXkiIG9wYWNpdHk9%0D%0AIjEiIGZpbGw9IiMwMDg0NDUiIGZpbGwtb3BhY2l0eT0iMSI+PC91c2U+PGc+PHVzZSB4bGluazpo%0D%0AcmVmPSIjYlF0MHl3bXkiIG9wYWNpdHk9IjEiIGZpbGwtb3BhY2l0eT0iMCIgc3Ryb2tlPSIjMDAw%0D%0AMDAwIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1vcGFjaXR5PSIwIj48L3VzZT48L2c+PC9nPjxn%0D%0APjx1c2UgeGxpbms6aHJlZj0iI2E1clFtTWVVcVMiIG9wYWNpdHk9IjEiIGZpbGw9IiMxZjNlN2Mi%0D%0AIGZpbGwtb3BhY2l0eT0iMSI+PC91c2U+PGc+PHVzZSB4bGluazpocmVmPSIjYTVyUW1NZVVxUyIg%0D%0Ab3BhY2l0eT0iMSIgZmlsbC1vcGFjaXR5PSIwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0%0D%0AaD0iMSIgc3Ryb2tlLW9wYWNpdHk9IjAiPjwvdXNlPjwvZz48L2c+PGc+PHVzZSB4bGluazpocmVm%0D%0APSIjYmlyQ2hJbXJhIiBvcGFjaXR5PSIxIiBmaWxsPSIjMWYzZTdjIiBmaWxsLW9wYWNpdHk9IjEi%0D%0APjwvdXNlPjxnPjx1c2UgeGxpbms6aHJlZj0iI2JpckNoSW1yYSIgb3BhY2l0eT0iMSIgZmlsbC1v%0D%0AcGFjaXR5PSIwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLW9wYWNp%0D%0AdHk9IjAiPjwvdXNlPjwvZz48L2c+PGc+PHVzZSB4bGluazpocmVmPSIjZHFmRXdBYnpDIiBvcGFj%0D%0AaXR5PSIxIiBmaWxsPSIjMWYzZTdjIiBmaWxsLW9wYWNpdHk9IjEiPjwvdXNlPjxnPjx1c2UgeGxp%0D%0Abms6aHJlZj0iI2RxZkV3QWJ6QyIgb3BhY2l0eT0iMSIgZmlsbC1vcGFjaXR5PSIwIiBzdHJva2U9%0D%0AIiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLW9wYWNpdHk9IjAiPjwvdXNlPjwvZz48%0D%0AL2c+PGc+PHVzZSB4bGluazpocmVmPSIjYjFyNEhFampuIiBvcGFjaXR5PSIxIiBmaWxsPSIjMWYz%0D%0AZTdjIiBmaWxsLW9wYWNpdHk9IjEiPjwvdXNlPjxnPjx1c2UgeGxpbms6aHJlZj0iI2IxcjRIRWpq%0D%0AbiIgb3BhY2l0eT0iMSIgZmlsbC1vcGFjaXR5PSIwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13%0D%0AaWR0aD0iMSIgc3Ryb2tlLW9wYWNpdHk9IjAiPjwvdXNlPjwvZz48L2c+PC9nPjwvc3ZnPg==)',
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
