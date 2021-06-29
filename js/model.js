/**
 * Model file for working with data
 */

/**
 * Main Model Object
 *
 */

var model = {};

/**
 * Initializes the Model
 *
 */
model.init = function() {

  model.updateLocalStore( jsonData );
  console.log( jsonData );

}

/**
  * Gets posts from local store
  *
  * @return store {object} Object of posts
  */

model.getPosts = function() {

  var posts = model.getLocalStore()['posts'];
  return posts;

}

/**
 * Get a single post based on url slug
 *
 * @param slug {string} The slug for the post
 * @return post {object} Single post
 *
 */

model.getPost = function( slug ) {

  var posts = model.getLocalStore()['posts'];

  // Get the post from store based on the slug
  for( i = 0, max = posts.length; i < max; i++  ) {

    if( slug === posts[i].slug ) {
      return posts[i];
    }

  }

  return null;

}

/**
  * Gets pages from local store
  *
  * @return pages {array} Array of pages
  */




/**
  * Gets content from local store
  *
  * @return store {object} Native JavaScript object from local store
  */

model.getLocalStore = function() {

  var store = JSON.parse( localStorage.getItem( 'vanillaPress' ) );

  return store;

}

/**
  * Saves temporary store to local storage.
  *
  * @param store {object} Native JavaScript object with site data
  */

model.updateLocalStore = function( store ) {

  localStorage.setItem( 'vanillaPress', store );

}

/**
  * Deletes data from local storage
  *
  */

model.removeLocalStore = function() {

  localStorage.removeItem( 'vanillaPress' );

}
