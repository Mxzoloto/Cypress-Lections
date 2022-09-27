/// <reference types="cypress"/>

it("homeWork1", () => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
    cy.get('[alt="Material Dark Theme"]').click(); //Select the theme
    //Open the form
    cy.get('span.menu-title.ng-tns-c141-9').click(); //Forms
    cy.get('span.menu-title.ng-tns-c141-11').click(); //Form layouts
    //"Inline form" block
    cy.get('.col-md-12 [placeholder="Jane Doe"]').type('First');//First/Last Name
    cy.get('.col-md-12 [placeholder="Email"]').type('Example@email.com'); //Email
    cy.get('.form-inline.ng-untouched.ng-pristine.ng-valid .custom-checkbox').click(); //Checkbox
    cy.get('.form-inline.ng-untouched.ng-pristine.ng-valid .appearance-filled.size-medium'); //Submit button
    //"Using the Grid" block
    cy.get('#inputEmail1').type('Example@email.com');//Email
    cy.get('#inputPassword2').type('TestPassword'); //Password
    cy.get('nb-radio-group :first-of-type > label > .inner-circle').click(); //Radiobutton 1 Убрать label и находит 3 варианта
    cy.get('nb-radio-group :nth-child(2) > label > .inner-circle').click(); //Radiobutton 2
    cy.get('nb-radio-group :last-of-type > label > .inner-circle'); //Radiobutton 3
    cy.get('.offset-sm-3.col-sm-9 [status="primary"]'); //"Sign in" button"
    //"Basic form" block
    cy.get('#exampleInputEmail1').type('Example@email.com');//Email
    cy.get('#exampleInputPassword1').type('TestPassword'); //Password
    cy.get('ngx-form-layouts :nth-child(2) .col-md-6 .custom-checkbox').click(); //Checkbox
    cy.get('button.appearance-filled.size-medium.shape-rectangle.status-danger.nb-transition'); //"Submit" button"
    //"Form without labels" block
    cy.get('div .form-group [placeholder="Recipients"]').type('ExampleRecipient');//Recipients
    cy.get('div .form-group [placeholder="Subject"]').type('TestSubject'); //Subject
    cy.get('textarea[placeholder="Message"]').type('TestMessage'); //Message
    cy.get('form.ng-untouched.ng-pristine.ng-valid [status="success"]'); //"Send" button"
    //"Block form" block
    cy.get('#inputFirstName').type('ExampleFirstName');//First Name
    cy.get('#inputLastName').type('ExampleLastName');//Last Name
    cy.get('#inputEmail').type('ExampleEmail');//Email
    cy.get('#inputWebsite').type('ExampleWebsite');//Website
    cy.get('nb-card-body > button'); //"Submit" button"
    //"Horizontal form" block
    cy.get('#inputEmail3').type('ExampleEmail');//Email
    cy.get('#inputPassword3').type('TestPassword'); //Password
    cy.get('ngx-form-layouts :nth-child(3) .col-md-6 .custom-checkbox').click(); //Checkbox Убрать .col-md-6 и находит 3 варианта.
    cy.get('.offset-sm-3.col-sm-9 [status="warning"]'); //"Sign in" button"
})
    
    
//nb-radio-group/nb-radio[1]/label/span[2]