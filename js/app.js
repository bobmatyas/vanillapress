
/**
 * Main app file.  Initializes app components.
 */


/**
 * The main app object.
 *
 */
var vanillaPress = {

  init: function() {

    // Add any functions here you want
    // to run to start the application
    console.log( jsonData );
    var posts = JSON.parse(jsonData);
  }

};

vanillaPress.init();

// Add your custom code starting here:

console.log(posts);

for ( var i = 0; i < posts.length; i++ ) {
  displayPost( posts[i].id, posts[i].title, posts[i].content) ;
}

function displayPost ( id, title, content ) {
  var postContainer = document.createElement('article');
  postContainer.setAttribute( 'id', postId( id ) );
  postContainer.appendChild( displayPostTitle( title ) );
  postContainer.appendChild( displayPostBody( content ) );
  document.getElementById( 'pageContent' ).appendChild( postContainer );
}

function displayPostTitle ( title ) {
  var postTitle = document.createElement( 'h2' );
  postTitle.innerText = title;
  return postTitle;
}

function displayPostBody ( content ) {
  var postContent = document.createElement( 'div' );
  postContent.innerHTML = content;
  return postContent
}

function postId ( id ) {
  return `id${id}`
}



