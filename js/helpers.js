/**
 * Helper file for extra helper functions
 */

var helpers = {};

/**
 * Gets the page title from the DOM
 *
 * @returns title {DOM} The title of the page
 */
helpers.getPageTitleEl = function() {

  return document.getElementById( 'pageTitle' );

};

/**
 * Gets the page content wrapper from the DOM
 *
 * @returns content {DOM} The content wrapper for the page
 */
helpers.getPageContentEl = function() {

  return document.getElementById( 'pageContent' );

};
