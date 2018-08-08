describe("Signup Component Render Check", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/register");
  });
  it("Should Render on DOM", () => {
    cy.contains("Sign Up").should("be.visible");
    cy.contains("Create your OORA-Connect account").should("be.visible");
    cy.get("input[placeholder='Name']").should("exist");
    cy.get("input[placeholder='Email Address']").should("exist");
    cy.contains("This site uses Gravatar so if you want a profile image, use a Gravatar email").should("be.visible");
    cy.get("input[placeholder='Password']").should("exist");
    cy.get("input[placeholder='Confirm Password']").should("exist");    
    cy.get('input[type="submit"]').should("exist");
  });
});
