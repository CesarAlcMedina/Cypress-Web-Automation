describe("First test suit", () => {
    it('First test', () =>{
        //put the code of the test
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //tag by name
        cy.get('input')
        //Tag By ID
        cy.get('#inputEmail1')
        //Tag By  Class Value
        cy.get('.input-full-width')
        //tag by attribute
        cy.get('[fullwidth]')
        //Tag by Attribute with value
        cy.get('[placeholder="Email"]')
        //By entire Class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')
        //by two Attributes
        cy.get('[placeholder="Email"][fullwidth]')
        //by tag, attribute id and class
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')
        //by cypress test ID
        cy.get('[data-cy="imputEmail1"]');

    })

    it('Second  test', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //theory
        //get() - find elements by locator globally
        //find() - find child elements by locator
        //contains() - find HTML element by text and locator


        cy.contains('Sign in')
        cy.contains('[status="warning"]', 'Sign in')
        cy.contains('nb-card', 'Horizontal form').find('button')
        cy.contains('nb-card', 'Horizontal form').contains('Sign in')

        //cypress chains and  DOM

        cy.get('#inputEmail3')
        .parents('form')
        .find('button')
        .should('contain', 'Sign in')
        .parents('form')
        .find('nb-checkbox')
        .click()
    })

    it('Save subject of command', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email')
        cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password')

        // CANT DO THING LIKE THIS
        // const usingTheGrid = cy.contains('nb-card', 'Using the Grid')
        // usingTheGrid.find('[for="inputEmail1"]').should('contain', 'Email')
        // usingTheGrid.find('[for="inputPassword2"]').should('contain', 'Password')

        // 1 Cypress Alias

        cy.contains('nb-card', 'Using the Grid').as('usingTheGrid')

        cy.get('@usingTheGrid').find('[for="inputEmail1"]').should('contain', 'Email')
        cy.get('@usingTheGrid').find('[for="inputPassword2"]').should('contain', 'Password')


        //Using the cypress Then method
        cy.contains('nb-card', 'Using the Grid').then( usingTheGrid => {
            cy.wrap(usingTheGrid).find('[for="inputEmail1"]').should('contain', 'Email')
            cy.wrap(usingTheGrid).find('[for="inputPassword2"]').should('contain', 'Password')
        })

    })             

    it.only('extract text values', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //get text from the element
        cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')

        cy.get('[for="exampleInputEmail1"]').then( label => {
            const labelText = label.text()
            expect(labelText).to.equal('Email address')
            cy.wrap(labelText).should('contain', 'Email address')
        })

        cy.get('[for="exampleInputEmail1"]').invoke('text').then( text => {
            expect(text).to.equal('Email address')
            cy.wrap(text).should('contain', 'Email address')
        })

        cy.get('[for="exampleInputEmail1"]').invoke('text').as('labelText').should('contain', 'Email address')
        cy.get('@labelText').should('contain', 'Email address')

        cy.get('[for="exampleInputEmail1"]').invoke('attr', 'class').then( classValue => {
            expect(classValue).to.equal('label') 
        })


        cy.get('#exampleInputEmail1').type('test@test.com')
        cy.get('#exampleInputEmail1').invoke('prop', 'value').should('contain', 'test@test.com').then(propertyValue => {
            expect(propertyValue).to.equal('test@test.com')
        })
     })
})