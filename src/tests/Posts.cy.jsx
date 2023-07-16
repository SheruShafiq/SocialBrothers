import React from "react";
import { mount } from "@cypress/react";
import Posts from "../../src/Posts";

describe("Posts", () => {
  beforeEach(() => {
    cy.intercept("http://frontend-case-api.sbdev.nl/api/posts*", {
      fixture: "posts.json",
    }).as("getPosts");

    // Mount the component
    mount(<Posts />);
  });

  it("renders and fetch posts properly", () => {
    // Verify that the intercept we set up was used
    cy.wait("@getPosts");
    cy.get("#PostsComponentParent").should("exist");

    // Since the mock response from the fixture 'posts.json' contains two posts, we expect two Post components to be rendered
    cy.get(".post").should("have.length", 2);
  });

  it("loads more posts when clicking on the 'Load more' button", () => {
    // Simulate click event on button
    cy.get("#postsButton").click();

    // Check the second intercept call
    cy.wait("@getPosts").its("request.url").should("include", "page=2");

    // Assuming the second page also has two posts, we should now have four posts in total
    cy.get(".post").should("have.length", 4);
  });
});

//  This is what the fixture 'posts.json' could look like:
// {
//     "data": [{
//       "id": "1",
//       "created_at": "2020-01-01T00:00:00Z",
//       "category": {
//         "name": "Test Category 1"
//       },
//       "title": "Test Title 1",
//       "content": "Test content 1"
//     }, {
//       "id": "2",
//       "created_at": "2020-01-02T00:00:00Z",
//       "category": {
//         "name": "Test Category 2"
//       },
//       "title": "Test Title 2",
//       "content": "Test content 2"
//     }]
//   }
