import { onFormLayoutsPage } from '../support/page_object/formLayoutPage'
import {navigateTo} from '../support/page_object/navigationPage'
import { onDatepickerPage } from '../support/page_object/datepickerPgae'
import { onSmartTablePage } from '../support/page_object/smartTablePage'
import '../support/commands'


describe('Tes with page objects', () => {

    beforeEach('open application', () => {
        cy.openHomePage()
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
        onDatepickerPage.selectDatepickerWithRangeFromToday(7, 14)
        navigateTo.webTablesPage()
        onSmartTablePage.updateAgeByFirstName('Mark', 30)
        onSmartTablePage.addNewRecordWithFirstAndLastName('Cesar', 'Alcantara')
        onSmartTablePage.deleteRowByIndex(0)
    })
})