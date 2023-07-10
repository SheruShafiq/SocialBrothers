import Header from "../components/Header";
import "../styles/Header.scss";
import React from "react";

describe("Header Component", () => {
  const mockLogo = { logo: "http://logo.com/logo.png" };
  const navMenuItems = [
    { heading: "Home", url: "http://www.home.com" },
    { heading: "Blog", url: "http://www.blog.com" },
  ];
  beforeEach(() => {
    // Mount the Header component with the mockLogo
    cy.mount(<Header Logo={mockLogo} navMenuItems={navMenuItems} />);
  });

  it("renders the Header component correctly", () => {
    cy.get("#headerLandingPage").should("exist");
  });
  it("renders the correct number of NavMenu components", () => {
    cy.get("a.headerLandingPageChildren").should("have.length", 2);
  });

  it("renders the NavMenu components with correct attributes", () => {
    const navMenuItems = [
      { heading: "Home", url: "http://www.home.com" },
      { heading: "Blog", url: "http://www.blog.com" },
    ];
    navMenuItems.forEach((item, index) => {
      cy.get("a.headerLandingPageChildren")
        .eq(index)
        .should("have.attr", "href", item.url)
        .and("have.attr", "id", item.heading)
        .and("contain", item.heading);
    });
  });
});
