// ==========================================================================
// Project:   Faces.personController
// Copyright: @2013 My Company, Inc.
// ==========================================================================
/*globals Faces */

/** @class

  (Document Your Controller Here)

  @extends SC.ObjectController
*/
Faces.personController = SC.ObjectController.create(
/** @scope Faces.personController.prototype */ {

  contentBinding: 'Faces.peopleController.selection',
  contentBindingDefault: SC.Binding.single(),
  
  visitWebsite: function(){
      if(this.get('content')){
          if (this.get('content').get('website') != ''){
            window.location = this.get('content').get('website');
          }
      }
  }

});
