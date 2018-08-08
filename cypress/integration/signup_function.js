describe("Signup Functionality Render Check", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/register");
  });
  it("Should give error messages on empty user registration", () => {
    cy.get('input[type="submit"]').click();
    cy.contains("Name field is required").should("be.visible");
    cy.contains("Email field is required").should("be.visible");
    cy.contains("Password field is required").should("be.visible");
    cy.contains("Confirm Password field is required").should("be.visible");
  });
  // it("Should navigate to dashboard on corrent user", () => {
  //   cy.get("input[placeholder='Email Address']").type(
  //     "rohith_gonela@yahoo.com"
  //   );
  //   cy.get("input[placeholder='Password']").type("qwerty");
  //   cy.get('input[type="submit"]').click();
  //   cy.contains("User not found").should("not.be.visible");
  //   cy.contains("Dashboard").should("be.visible");
  // });
});
