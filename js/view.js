/**
 * View file for displaying content
 */


/**
 * Main view object
 *
 */
var view = {};


/**
 * Calls initial View methods
 *
 */
view.init = function() {

  view.createMainMenu();

}


/**
 * Gets blog posts and appends them to the page
 *
 */
view.loadBlogPosts = function() {

  var posts = model.getPosts(),
      postsMarkup = document.createDocumentFragment(),
      titleEl = helpers.getPageTitleEl(),
      contentEl = helpers.getPageContentEl();


  for ( var i = 0, max = posts.length; i < max; i++ ) {
    postsMarkup.appendChild( view.createPostMarkup( posts[i] ) );
  }

  contentEl.appendChild( postsMarkup );
  titleEl.innerHTML = 'Blog Posts';

};


/**
 * Displays a single post or page based on URL
 *
 */
 view.loadSingleContent = function( slug ) {

   var contentObj = model.getContent( slug ),
       titleEl = helpers.getPageTitleEl(),
       contentEl = helpers.getPageContentEl();


   titleEl.innerHTML = contentObj.title;
   contentEl.innerHTML = contentObj.content;

 };

/**
* Updates the main title for a page or post
*
*/
view.updateTitleFromForm = function() {

  var titleEl = helpers.getPageTitleEl(),
      title = helpers.getEditorTitleEl().value;

  titleEl.innerHTML = title;
  editor.currentContent.title = title;

};


/**
* Updates the main content for a page or post
*
*/
view.updateContentFromForm = function() {

  var contentEl = helpers.getPageContentEl(),
      content = helpers.getEditorContentEl().value;

  contentEl.innerHTML = content;
  editor.currentContent.content = content;

};


/**
 * Clears the page title and content from the page
 *
 */
view.clearContent = function() {
  var titleEl = helpers.getPageTitleEl(),
      contentEl = helpers.getPageContentEl();

  titleEl.innerHTML = '';
  contentEl.innerHTML = '';
};


/**
 * Creates Main Menu Links for Pages
 *
 */
 view.createMainMenu = function() {

   var pages = model.getPages(),
       menuMarkup = document.createDocumentFragment(),
       mainMenuEl = helpers.getMainMenuEl();

   for ( var i = 0, max = pages.length; i < max; i++ ) {
     // Create menu markup
     menuMarkup.appendChild( helpers.createMenuItem( pages[i] ) );
   }

   mainMenuEl.appendChild( menuMarkup );

 };


/**
 * Creates Markup for Blog Posts
 *
 * @param {Object} post Post to create markup for
 * @return {Object} articleEl Final post markup
 */
view.createPostMarkup = function( post ) {

  var articleEl = document.createElement( 'article' ),
      titleEl = document.createElement( 'h3' ),
      titleLink = helpers.createLink( post ),
      contentEl = document.createElement( 'div' );

  titleEl.appendChild( titleLink );
  contentEl.appendChild( document.createTextNode( post.content ) );

  articleEl.appendChild( titleEl );
  articleEl.appendChild( contentEl );

  return articleEl;

};
