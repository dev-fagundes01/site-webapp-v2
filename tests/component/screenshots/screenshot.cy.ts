describe("Screenshot Tests", () => {
  it("should take a screenshot of the Header component", () => {
    cy.visit("/"); // Adjust the route to render the Header component
    cy.get("header").screenshot("header-screenshot");
  });

  it("should take a screenshot of the Design page view", () => {
    cy.visit("/design"); // Adjust the route to render the Design page
    cy.screenshot("design-page-screenshot");
  });
});
