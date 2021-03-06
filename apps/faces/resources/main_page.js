// ==========================================================================
// Project:   Faces - mainPage
// Copyright: @2013 My Company, Inc.
// ==========================================================================
/*globals Faces */

// This page describes the main user interface for your application.
Faces.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'topView mainView'.w(),
    topView: SC.ToolbarView.design({
        layout: {top: 0, right: 0, left: 0, height: 36},
        anchorLocation: SC.ANCHOR_TOP,
        childViews: 'labelView addButton'.w(),
        labelView: SC.LabelView.design({
            layout: {centerY: 0, left: 8, height: 24, width:200},
            controlSize: SC.LARGE_CONTROL_SIZE,
            fontWeight: SC.BOLD_WEIGHT,
            value: 'Faces'
        }),
        addButton: SC. ButtonView.design({
           layout: {centerY: 0, right: 12, height: 24, width:100},
           title: 'Add Yourself',
           target: 'Faces.peopleController',
           action: 'addPerson'
        })
    }),
    mainView: SC.ScrollView.design({
        layout: {top: 36, left: 0, right: 0, bottom: 0},
        backgroundColor: '#fff',
        contentView: SC.GridView.design({
            layout: {top: 10, left: 10, right: 10, bottom:10},
            rowHeight: 200,
            columnWidth: 200,
            contentBinding: 'Faces.peopleController.arrangedObjects',
            selectionBinding: 'Faced.peopleController.selection',
            exampleView: Faces.FaceView,
            classNames: ['face'],
            target: 'Faces.personController',
            action: 'visitWebsite',
            actOnSelect: YES 
        })  
    })
  })

});
