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

  view.loadMenu();

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

view.loadBlogPost = function( url, type ) {

  var post;

  console.log( type );

  if ( 'page' === type) {

    post = model.getPages();

  } else {

    post = model.getPosts();

  }

  for( i = 0, max = post.length; i < max; i++  ) {

    if (post[i].slug === url) {

      var titleEl = helpers.getPageTitleEl(),
      contentEl = helpers.getPageContentEl();

      titleEl.innerHTML = post[i].title;
      contentEl.innerHTML = post[i].content;
      
      break;
  
    }
  }

};


/**
 * Displays a single post or page based on URL
 *
 * @param string {url} URL for post or page
 */

view.loadContent = function( url ) {

  var pages = model.getPages();

  for( i = 0, max = pages.length; i < max; i++  ) {

    if (pages[i].slug === url) {
      
        return view.loadBlogPost( url, 'page' );
    
    } else if ( null === url ) {

        return view.loadBlogPost( 'home', 'page' );

    }
 
  }
  
  return view.loadBlogPost( url, 'post' );
}


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
 * @param array {posts} Posts to create links for
 * @return object {mainEl} Final markup for menu
 */

view.loadMenu = function( ) {

  var pages = model.getPages();
      mainMenu = document.querySelector( '#mainNav ul' );
 
  for( i = 0, max = pages.length; i < max; i++  ) {
  
    mainMenu.appendChild( view.createMenuItem( pages[i] ) );
  
  }

}


/**
 * Creates a Menu Item for a Page
 *
 * @param object {page} Page to create menu item for
 * @return object {menuItemEl} Final markup for menu item
 */


view.createMenuItem = function ( page ) {
  
  var  menuItemEl = document.createElement( 'li' ),
       menuLink = document.createElement( 'a' ),
       menuText = document.createTextNode( page.title );
       
  menuLink.appendChild( menuText );
  menuLink.href = '#' + page.slug;
  menuItemEl.appendChild( menuLink );
 
  return menuItemEl;

}



/**
 * Creates Markup for Blog Posts
 *
 * @param object {post} Post to create markup for
 * @return object {articleEl} Final post markup
 */

view.createPostMarkup = function( post ) {

  var  articleEl = document.createElement( 'article' ),
       titleEl = document.createElement( 'h3' ),
       titleLink = document.createElement( 'a' ),
       titleText = document.createTextNode( post.title ),
       contentEl = document.createElement( 'div' );

 titleLink.appendChild( titleText );
 titleLink.href = '#' + post.slug;
 titleEl.appendChild( titleLink );

 contentEl.appendChild( document.createTextNode( post.content ) );

 articleEl.appendChild( titleEl );
 articleEl.appendChild( contentEl );

 return articleEl;

};
