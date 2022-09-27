/// <reference types="cypress"/>

//Variant 1
const HomeWork5 = ({ arg, expected }) =>
  function () {
    cy.visit("https://sanitarskyi-ngx-admin.herokuapp.com");
    cy.get('[alt="Material Dark Theme"]').click(); //Select the theme
    //Open the form
    cy.get("span.menu-title.ng-tns-c141-9").click(); //Forms
    cy.get("span.menu-title.ng-tns-c141-11").click(); //Form layouts

    //"Inline form" block
    cy.get('.col-md-12 [placeholder="Jane Doe"]')
      .clear()
      .type(arg[0])
      .should("contain.value", expected[0]); //First/Last Name

    cy.get('.col-md-12 [placeholder="Email"]')
      .clear()
      .type(arg[1])
      .should("contain.value", expected[1]); //Email

    cy.get(".form-inline.ng-untouched.ng-pristine.ng-valid .custom-checkbox")
      .click()
      .should("have.class", "checked"); //Checkbox

    cy.get(
      ".form-inline.ng-untouched.ng-pristine.ng-valid .appearance-filled.size-medium"
    ).click(); //Submit button
  };

it(
  `Type values in fields`,
  HomeWork5({
    arg: ["QA Max", "Test@test.com"],
    expected: ["QA Max", "Test@test.com"],
  })
);

//Variant 2

const params = [
  {
    arg: ["QA Max", "Test@test.com"],
    expected: ["QA Max", "Test@test.com"],
  },
  {
    arg: ["Max QA", "Test2@test.com"],
    expected: ["Max QA", "Test2@test.com"],
  },
];

params.forEach(({ arg, expected }) => {
  it(`Type ${arg} in fields`, () => {
    cy.visit("https://sanitarskyi-ngx-admin.herokuapp.com");
    cy.get('[alt="Material Dark Theme"]').click(); //Select the theme
    //Open the form
    cy.get("span.menu-title.ng-tns-c141-9").click(); //Forms
    cy.get("span.menu-title.ng-tns-c141-11").click(); //Form layouts

    //"Inline form" block
    cy.get('.col-md-12 [placeholder="Jane Doe"]')
      .clear()
      .type(arg[0])
      .should("contain.value", expected[0]); //First/Last Name

    cy.get('.col-md-12 [placeholder="Email"]')
      .clear()
      .type(arg[1])
      .should("contain.value", expected[1]); //Email

    cy.get(".form-inline.ng-untouched.ng-pristine.ng-valid .custom-checkbox")
      .click()
      .should("have.class", "checked"); //Checkbox

    cy.get(
      ".form-inline.ng-untouched.ng-pristine.ng-valid .appearance-filled.size-medium"
    ).click(); //Submit button
  });
});
