describe("The madlibs main form", () => {
    it("loads successfully", () => {
        cy.visit("http://localhost:3000")

        cy.get("nav")
            .should("be.visible")
            .within(() => {
                cy.get("h1")
                    .should("contain.text", "My Cool MadLibs")
                cy.get('a').should("be.visible")
                    .should("contain.text", 'Exit Site')
            })

            cy.get('h2').should("contain.text","Enter Your Choices!")
            cy.get("table").should("be.visible")
            .within(()=>{
                cy.get("tbody").should("be.visible")
            })

            cy.get("tr").should("have.length", 10)
            cy.get("button")
            .should("contain.text","Complete")
            .should("be.disabled")
    })

    it("activates the button when the form is filled in", ()=>{
        cy.get("input#animal").type("platypus")
        cy.get('input#action').type('caressing')
        cy.get('input#object').type('vacuum cleaner')
        cy.get('input#food').type('popcorn')
        cy.get('input#name').type('FLANJESUA THE ADORABLE')
        cy.get('input#drink').type('chocolate milk')
        cy.get('input#number').type('8')
        cy.get('input#adjective').type('flowery')
        cy.get('input#city').type('Copenhagen')
        cy.get('input#mood').type('inconsolable')

        cy.get("button").should("be.enabled")
    })

    it("shows the completed story with out input data", ()=>{
        
        const finalStory = `Once upon a time in Copenhagen, FLANJESUA THE ADORABLE got out of bed to start their day. To their surprise, sitting at the end of their bed was an enormous platypus caressing the vacuum cleaner.FLANJESUA THE ADORABLE felt so inconsolable, they knocked over the glass of chocolate milk on their bedside table.Suddenly, the platypus spoke..."You must answer 8 flowery questions, or I will steal your soul... and your popcorn!"`

        cy.get("button").click()

        // results after click
        cy.get('div.results').should('contain.text', finalStory).within(() => {
            cy.get('h2').should('contain.text', 'Results')
        })
    })
})


