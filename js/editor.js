/**
 * Code for the Editor
 */


/**
 * The main Editor object
 *
 */
var editor = {};

editor.currentContent = '';

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
editor.updateContent = function( event ) {

  event.preventDefault();
  model.updateContent( editor.currentContent );

};


/**
 * Dynamically fills the edit form based on the url
 *
 */
editor.fillEditForm = function( contentObj ) {

  var titleForm = helpers.getEditorTitleEl(),
      contentForm = helpers.getEditorContentEl(),
      updateBtn = helpers.getEditorUpdateBtnEl();

  titleForm.value = contentObj.title;
  contentForm.value = contentObj.content;

  editor.addFormListeners();
  updateBtn.addEventListener(
    'click',
    editor.updateContent,
    false
  );

};

/**
 * Adds event listeners for the title and content
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

}


/**
 * Listens for the editor toggle button
 *
 */
editor.listenEditorToggle = function( event ) {

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

  editor.currentContent = model.getCurrentContent();

  editorEl.classList.toggle( 'hidden' );
  toggleEl.classList.toggle( 'hidden' );

  if( false === toggleEl.classList.contains( 'hidden' ) ) {

    editor.fillEditForm( editor.currentContent );

  } else {

    // Remove event listeners from editor

  }

};
