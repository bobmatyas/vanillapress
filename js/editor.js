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
    var editorToggle = document.getElementById( 'editorToggle' );

    editor.classList.remove( 'hidden' );
    editorToggle.classList.remove( 'hidden' );

};


var editorControl = document.getElementById( 'editorToggle' );

editorControl.addEventListener( 'click', (e) => editor.toggleEditor() );