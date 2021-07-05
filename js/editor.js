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
  * Displays editor
  *
  */

 editor.toggleEditor = function() {
   
     
    var editor = document.getElementById( 'editor' )
        editorToggle = document.getElementById( 'editorToggle' );
        editorIsOpen = localStorage.getItem('editorOpen');

    console.log(editorToggle);
    console.log(editorIsOpen);

    if ( 'false' === editorIsOpen ) { 
        localStorage.setItem('editorOpen', true);   
        editor.classList.remove( 'hidden' );
        editorToggle.classList.remove( 'hidden' );
    } else {
        localStorage.setItem('editorOpen', false);  
        editor.classList.add( 'hidden' );
        editorToggle.classList.add( 'hidden' );   
    }

    




    //localStorage.setItem('editorOpen', true);
    console.log( 'clicked' );

};


var editorControl = document.getElementById( 'editorToggle' );

editorControl.addEventListener( 'click', (e) => editor.toggleEditor() );