/**
 * File for displaying editor
 */


/**
 * Main view object
 *
 */
 var editor = {};


 /**
  * Calls initial View methods
  *
  */
 editor.init = function() {
 
 
 }
 
 
 /**
  * Displays editor based on toggle status
  *
  */

 editor.toggleEditor = function() {
   
     
    var editorScreen = document.getElementById( 'editor' )
        editorToggle = document.getElementById( 'editorToggle' );
        editorIsOpen = localStorage.getItem('editorOpen');

    if ( 'false' === editorIsOpen ) { 
  
        localStorage.setItem('editorOpen', true);   
        editorScreen.classList.remove( 'hidden' );
        editorToggle.classList.remove( 'hidden' );
        document.getElementById( 'editTitle' ).value = editor.getContentTitle();
        document.getElementById( 'editContent' ).value = editor.getContent();
  
    } else {
  
        localStorage.setItem('editorOpen', false);  
        editorScreen.classList.add( 'hidden' );
        editorToggle.classList.add( 'hidden' );   

    }
};


var editorControl = document.getElementById( 'editorToggle' );

editorControl.addEventListener( 'click', (e) => {
    
        e.preventDefault();
        editor.toggleEditor()

    } 
);

 /**
  * Displays content title
  *
  */

editor.getContentTitle = function() {

    var contentTitle = document.getElementById( 'pageTitle' ).innerText;
    return contentTitle;

}

 /**
  * Displays content 
  *
  */

editor.getContent = function() {

    var contentPage = document.getElementById( 'pageContent' ).innerText; 
    return contentPage;
    
}

 /**
  * Preview page title change 
  *
  */


editor.modifyTitle = function( e ) {

    var pageTitle = document.getElementById( 'pageTitle' );
    pageTitle.innerText = e.target.value;

}

/**
  * Preview page content change 
  *
  */

editor.modifyContent = function( e ) {

    var pageContent = document.getElementById( 'pageContent' );
    pageContent.innerText = e.target.value;

}

var editTitle = document.querySelector( 'input#editTitle' );
editTitle.addEventListener( 'input', ( e ) => editor.modifyTitle ( e ) );

var editContent = document.querySelector( 'textarea#editContent' );
editContent.addEventListener( 'input', ( e ) => editor.modifyContent( e ) );

/**
  * Close Editor on page change 
  *
  */

 editor.closeEditor = function() {

    var editorScreen = document.getElementById( 'editor' )
    editorToggle = document.getElementById( 'editorToggle' );
    editorIsOpen = localStorage.getItem('editorOpen');

    localStorage.setItem('editorOpen', false);  
    editorScreen.classList.add( 'hidden' );
    editorToggle.classList.add( 'hidden' );   

 }

 /** 
  * Save changes
  */

var editUpdateButton = document.getElementById( 'editUpdateBtn' );
editUpdateButton.addEventListener( 'click', ( e ) => editor.updateButton( e ) );

editor.updateButton = function( e ) {

        
    e.preventDefault();
    editor.updateContent( editor.findSlug( router.getSlug() ) );
    view.clearMainMenu();

}

 /**
  * Find item to update
  */

editor.findSlug = function( slug ) {

    var pages = model.getLocalStore().pages;

    if ( pages.findIndex(x => x.slug === slug ) > -1) {
        
        return [ 'pages', pages.findIndex(x => x.slug === slug ) ];

    } else {

        var posts = model.getLocalStore().posts;
        
        return [ 'posts', posts.findIndex(x => x.slug === slug ) ];

    }

}

editor.updateContent = function( contentToUpdate ) {


    var content = '';
    var store = JSON.parse( localStorage.getItem( 'vanillaPress' ) );

    if ( contentToUpdate[0] === 'pages' ) {

        content = store.pages[contentToUpdate[1]];

    } else {

        content = store.posts[contentToUpdate[1]];

    }

    content.title = editTitle.value;
    content.content = editContent.value;

    store = JSON.stringify( store );

    model.updateLocalStore( store );
    
}