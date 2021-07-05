/**
 * Helper file for extra helper functions
 */

/**
 * Main helper object
 */
var helpers = {};


/**
 * Creates a list item with a link inside for menus
 *
 * @param {Object} page Page object to create menu item for
 * @return {Object} menuItemEl List item DOM object
 */

helpers.createMenuItem = function( contentObj ) {

  var menuItemEl = document.createElement( 'li' );

  menuItemEl.appendChild( helpers.createLink( contentObj ));

  return menuItemEl;

}

/**
 * Creates link
 *
 * @param {Object} page Page object to create link for
 * @return {Object} linkEl Link object
 */

helpers.createLink = function( contentObj ) {

    var linkEl = document.createElement( 'a' );
        linkTitle = document.createTextNode( contentObj.title );

    linkEl.appendChild( linkTitle );
    
    if( 'home' === contentObj.slug ) {
      linkEl.href = '#';
    } else {
      linkEl.href = '#' + contentObj.slug;
    }

    return linkEl;
    
};

/**
 * Gets the main menu element
 * @return {Object} Main menu DOM object
 */

 helpers.getMainMenuEl = function() {

  return document.querySelector( '#mainNav ul' );

};

/**
 * Gets page title from the DOM
 * @return {Object} Main page title DOM object
 */
helpers.getPageTitleEl = function() {

  return document.getElementById( 'pageTitle' );

};

/**
 * Gets page content from the DOM
 * @return {Object} Main content DOM object
 */
helpers.getPageContentEl = function() {

  return document.getElementById( 'pageContent' );

};
