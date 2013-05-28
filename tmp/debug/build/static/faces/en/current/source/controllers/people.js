// ==========================================================================
// Project:   Faces.peopleController
// Copyright: @2013 My Company, Inc.
// ==========================================================================
/*globals Faces */

/** @class

  (Document Your Controller Here)

  @extends SC.ArrayController
*/
Faces.peopleController = SC.ArrayController.create(
/** @scope Faces.peopleController.prototype */ {

  orderBy: 'name'

});
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('faces');