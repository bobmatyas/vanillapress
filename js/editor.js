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
editTitle.addEventListener( 'input', ( e ) => editor.modifyTitle(e) );

var editContent = document.querySelector( 'textarea#editContent' );
editContent.addEventListener( 'input', ( e ) => editor.modifyContent(e) );

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