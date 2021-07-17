/**
 * Code for the Editor
 */


/**
 * The main Editor object
 *
 */
var editor = {};

// Add currentPost property


/**
 * Initializes the VanillaPress app
 *
 */

editor.init = function() {

  editor.listenEditorToggle();

};


/**
 * Updates local storage for post or page
 *
 */


/**
 * Dynamically fills the edit form based on the url
 *
 */
editor.fillEditForm = function( contentObj ) {

  var titleForm = helpers.getEditorTitleEl(),
      contentForm = helpers.getEditorContentEl();

  titleForm.value = contentObj.title;
  contentForm.value = contentObj.content;

  editor.addFormListeners();

};


/**
 * Adds event listeners to the form
 *
 */
editor.addFormListeners = function() {

  var titleForm = helpers.getEditorTitleEl(),
      contentForm = helpers.getEditorContentEl();

  titleForm.addEventListener(
    'input',
    view.updateTitleFromForm,
    false
  );
  contentForm.addEventListener(
    'input',
    view.updateContentFromForm,
    false
  );
  // Add listener for updateBtn

}


/**
 * Listens for the editor toggle button
 *
 */
editor.listenEditorToggle = function() {

  var toggleEl = helpers.getEditorToggleLink();

  toggleEl.addEventListener( 'click', function() {
    editor.toggle();
    event.preventDefault();
  }, false );

};

/**
 * Controls the toggle for the editor
 *
 */
editor.toggle = function() {

  var editorEl = helpers.getEditorEl(),
      toggleEl = helpers.getEditorToggleEl();

  // Set editor.currentContent

  editorEl.classList.toggle( 'hidden' );
  toggleEl.classList.toggle( 'hidden' );

  if( false === toggleEl.classList.contains( 'hidden' ) ) {

    editor.fillEditForm( model.getCurrentContent() );

  }

};
