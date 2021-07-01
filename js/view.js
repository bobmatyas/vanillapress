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
 * Displays a single post on the page based on URL
 *
 */
view.loadBlogPost = function( url ) {

  var post = model.getPost( url ),
      titleEl = helpers.getPageTitleEl(),
      contentEl = helpers.getPageContentEl();

  titleEl.innerHTML = post.title;
  contentEl.innerHTML = post.content;

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
 * Creates Markup for Blog Posts
 *
 * @param {Object} post Post to create markup for
 * @return {Object} articleEl Final post markup
 */
 view.createPostMarkup = function( post ) {

   var articleEl = document.createElement( 'article' ),
       titleEl = document.createElement( 'h3' ),
       titleLink = document.createElement( 'a' ),
       title = document.createTextNode( post.title ),
       contentEl = document.createElement( 'div' );

   titleLink.appendChild( title );
   titleLink.href = '#' + post.slug;
   titleEl.appendChild( titleLink );
   contentEl.appendChild( document.createTextNode( post.content ) );

   articleEl.appendChild( titleEl );
   articleEl.appendChild( contentEl );

   return articleEl;

 };
