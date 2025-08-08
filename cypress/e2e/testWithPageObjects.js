import { onFormLayoutsPage } from '../support/page_object/formLayoutPage'
import {navigateTo} from '../support/page_object/navigationPage'
import { onDatepickerPage } from '../support/page_object/datepickerPgae'


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

    it.only('Should submit Inline and Basic form and select date in the calendar', () => {
        navigateTo.formsLayoutsPage()
        onFormLayoutsPage.submitInlineFormWithNameAndEmail('Artem', 'test@test.com')
        onFormLayoutsPage.submitBasicFormWithEmamilAndPassword('test@test.com', 'password')
        navigateTo.datepickerPage()
        onDatepickerPage.selectCommonDatepickerFromToday(80)
    })
})