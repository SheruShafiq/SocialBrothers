import React from "react";
import { mount } from "cypress-react-unit-test";
import Pagination from "../../src/components/Pagination";

describe("Pagination", () => {
  beforeEach(() => {
    // Define a mock paginate function
    const paginate = cy.stub().as("paginate");

    mount(<Pagination totalPosts={11} postsPerPage={5} paginate={paginate} />);
  });

  it("renders properly", () => {
    // Check that the component rendered
    cy.get("#paginationList").should("exist");

    // With 11 total posts and 5 per page, there should be 3 pagination items
    // Two pages and one 'Volgende Pagina' button
    cy.get("#paginationListItem").should("have.length", 3);
  });

  it("invokes paginate function when item is clicked", () => {
    // Click on the first pagination item "1"
    cy.get("#paginationListItem").first().click();

    // Assert that paginate function was called once and with the correct argument
    cy.get("@paginate").should("have.been.calledOnceWith", 1);
  });

  it("should go to next page when 'Volgende Pagina' is clicked", () => {
    // Click on the last pagination item ('Volgende Pagina')
    cy.get("#paginationListItem").last().click();

    // Assert that paginate function was called once and with the correct argument
    cy.get("@paginate").should("have.been.calledOnceWith", 2);
  });
});
