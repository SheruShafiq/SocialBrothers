// NavMenu.test.js

// import the necessary dependencies
import NavMenu from "../components/NavMenu";
import "../styles/NavMenu.scss";
import React from "react";

// Define the mock value object outside the test cases so it can be shared among them
const mockValue = {
  url: "http://example.com",
  heading: "Example Heading",
};

describe("NavMenu Component", () => {
  beforeEach(() => {
    // Mount the component with the mock value before each test case
    cy.mount(<NavMenu value={mockValue} />);
  });

  it("has the correct href attribute", () => {
    cy.get("a.headerLandingPageChildren").should(
      "have.attr",
      "href",
      mockValue.url
    ); // it has correct href
  });

  it("has the correct id attribute", () => {
    cy.get("a.headerLandingPageChildren").should(
      "have.attr",
      "id",
      mockValue.heading
    ); // it has correct id
  });

  it("displays the correct heading", () => {
    cy.get("a.headerLandingPageChildren").should("contain", mockValue.heading); // it has correct content
  });
});
