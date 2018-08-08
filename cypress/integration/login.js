describe("Login Component Render Check", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
  });
  it("Should Render on DOM", () => {
    cy.contains("Log In").should("be.visible");
    cy.contains("Sign in to your OORA-Connect account").should("be.visible");
    cy.get("input[placeholder='Email Address']").should("exist");
    cy.get("input[placeholder='Password']").should("exist");
    cy.get('input[type="submit"]').should("exist");
  });
});
