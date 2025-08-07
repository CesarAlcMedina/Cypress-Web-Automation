import {navigateTo} from '../support/page_object/navigationPage'


describe('Tes with page objects', () => {

    beforeEach('open application', () => {
        cy.visit('/')
    })


    it('Verify navigations acrross the pages', () => {

        navigateTo.formsLayoutsPage()
        navigateTo.datepickerPage()
        navigateTo.toasterPage()
        navigateTo.webTablesPage()
        navigateTo.tooltiPage()
        navigateTo.dialogPage()
    })
})