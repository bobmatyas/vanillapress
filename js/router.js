/**
 * Router file for managing url changes
 */

/**
 * The main router object.
 *
 */

var router = {};

/**
 * Initializes the Router
 *
 */
router.init = function() {

  router.loadContent();
  router.listenPageChange();
  view.loadMenu();

};

/**
 * Gets the slug from the URL
 *
 * @return slug {string} Slug from URL
 */
router.getSlug = function() {

  slug = window.location.hash;

  if( "" === slug ) {

    return null;

  } else {

    return slug.substr( 1 );

  }

};

/**
 * Listener function for URL changes
 *
 */
router.listenPageChange = function() {

  window.addEventListener( 'hashchange', router.loadContent, false );

}


/**
 * Determines whether to load blog posts
 * or single post
 *
 */

router.loadContent = function() {

  var slug = router.getSlug();

  view.clearContent();
  
  console.log( slug )

  if( 'blog' === slug ) {

    view.loadBlogPosts();
 
  } else if( 'home' === slug ) {


  } else {

    view.loadContent( slug );

  }

}
