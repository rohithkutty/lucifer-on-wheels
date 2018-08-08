describe("Login functionality Render Check", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
  });
  it("Should give error on empty login submission", () => {
    cy.get('input[type="submit"]').click();
    cy.contains("Email field is required").should("be.visible");
    cy.contains("Password field is required").should("be.visible");
    
  });
  it("Should give error on invalid user", () => {
    cy.get("input[placeholder='Email Address']").type("a@b.com");
    cy.get("input[placeholder='Password']").type("password");
    cy.get('input[type="submit"]').click();
    cy.contains("User not found").should("be.visible");
  });
  it("Should give error on incorrect password", () => {
    cy.get("input[placeholder='Email Address']").type("rohith_gonela@yahoo.com");
    cy.get("input[placeholder='Password']").type("password");
    cy.get('input[type="submit"]').click();
    cy.contains("Password incorrect").should("be.visible");
  });
  it("Should navigate to dashboard on corrent user", () => {
    cy.get("input[placeholder='Email Address']").type("rohith_gonela@yahoo.com");
    cy.get("input[placeholder='Password']").type("qwerty");
    cy.get('input[type="submit"]').click();
    cy.contains("User not found").should("not.be.visible");
    cy.contains("Dashboard").should("be.visible");
  });
});
