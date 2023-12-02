describe('visiting the frontpage', () => {

    it('I see error logs on cypress debugger showing me the line of my script yielding the failing line', () => {

      cy.visit("https://duckduckgo.com/");

      cy.get("input[type=text]")
      .should("have.attr", "placeholder")
      .and(
        "match",
        /Not existing line/
      );
  
    assert.deepEqual({}, {});
    })
})
