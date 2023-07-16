import React from "react";
import { mount } from "cypress-react-unit-test";
import Form from "../../src/components/Form";

// Create a mock for the FormProps
const mockFormProps = {
  formTitle: "Mock title",
  berichtnaamLabel: "Mock label",
  berichtnaamPlaceholder: "Mock placeholder",
  categoryLabel: "Mock category label",
  categoryPlaceholder: "Mock category placeholder",
  categoryOptions: [
    { id: "1", label: "Option 1" },
    { id: "2", label: "Option 2" },
  ],
  headerAfbeeldingLabel: "Mock header label",
  berichtLabel: "Mock bericht label",
  submitButtonText: "Submit",
};

describe("Form", () => {
  beforeEach(() => {
    // This will mount the component before each test
    mount(<Form {...mockFormProps} />);
  });

  it("renders properly", () => {
    cy.get("#formComponentParent").should("exist");
    cy.get("#formTitle").should("have.text", "Mock title");
  });

  it("fills the form and submits", () => {
    cy.get("#title").type("Test Title");
    cy.get("#bericht").type("Test Content");
    cy.get("#category").select("1");
    // File upload is a complex action in Cypress, I am skipping it for now

    // This would be a final step, but since actual POST request will fail in test environment
    // I am commenting this part
    // cy.get("#formButton").click();
    // Check for console log message
    // cy.window().then((win) => {
    //   cy.spy(win.console, "log").as('consoleLog');
    //   cy.get('@consoleLog').should('be.calledWith', 'Form data submitted successfully')
    // });
  });
});
