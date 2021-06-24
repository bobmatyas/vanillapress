
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
    showPosts( posts );
  }

};

vanillaPress.init();

// Add your custom code starting here:

//console.log(posts);

/* home link */
document.querySelector( '#siteName a' ).addEventListener( 'click', function(event) {
    event.preventDefault();
    clearPosts();
    showPosts( posts );
  });


function showPosts( posts ) {
  for ( let i = 0; i < posts.length; i++ ) {
    displayPost( posts[i].id, posts[i].title, posts[i].content, posts[i].slug ) ;
  }
}

function clearPosts() {
  const posts = document.querySelectorAll( 'article' );
  for ( let i = 0; i < posts.length; i++ ) {
    document.getElementById( posts[i].id ).remove();
  }
}

function displayPost( id, title, content, slug ) {
  const postContainer = document.createElement('article');
  postContainer.setAttribute( 'id', postId( id ) );
  postContainer.appendChild( displayPostTitle( id, title, content, slug ) );
  postContainer.appendChild( displayPostBody( content ) );
  document.getElementById( 'pageContent' ).appendChild( postContainer );
}

function displayPostTitle( id, title, content, slug ) {
  const postTitle = document.createElement( 'h2' );
  const postLink = document.createElement( 'a' );
  postLink.setAttribute( 'href', hashLink( slug ) )
  postLink.addEventListener( 'click', (e) => displaySinglePost( e, id, title, content, slug ));
  postLink.innerText = title;
  postTitle.appendChild( postLink );
  return postTitle;
}

function displayPostBody( content ) {
  const postContent = document.createElement( 'div' );
  postContent.innerHTML = content;
  return postContent
}

function displaySinglePost( e, id, title, content, slug ) {
  e.preventDefault();
  clearPosts();
  displayPost( id, title, content, slug );

}

function displaySinglePostTitle( title ) {
  const postTitle = document.createElement( 'h2' );
  postTitle.innerText = title;
  return postTitle;
}

function postId ( id ) {
  return `id${id}`
}

function hashLink ( slug ) {
  return `#${slug}`
}

