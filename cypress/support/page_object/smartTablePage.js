import { last } from "rxjs-compat/operator/last"

export class SmartTable{

    updateAgeByFirstName(name, age) {
        
        cy.get('nb-card-body').contains('tr', name).then(tableRow => {
            cy.wrap(tableRow).find('.nb-edit').click()
            cy.wrap(tableRow).find('[placeholder="Age"]').clear().type(age)
            cy.wrap(tableRow).find('.nb-checkmark').click()
            cy.wrap(tableRow).find('td').eq(6).should('contain', age)

        })
    }

    addNewRecordWithFirstAndLastName(firstName, lastName) {
        
        cy.get('thead').find('.nb-plus').click()
        cy.get('thead').find('[ng2-st-thead-form-row=""] > :nth-child(3)').type(firstName)/*  */
        cy.get('thead').find('[ng2-st-thead-form-row=""] > :nth-child(4)').type(lastName)/*  */
        cy.get('.nb-checkmark').click()

        cy.get('tbody > :nth-child(1) > :nth-child(3)').should('contain', firstName)
        cy.get('tbody > :nth-child(1) > :nth-child(4)').should('contain', lastName)
    }

    deleteRowByIndex(index){
        const stub = cy.stub()

        cy.on('window:confirm', stub)
        cy.get('tbody tr').eq(index).find('.nb-trash').click().then(() =>{
            expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?')
        })
    }

}

export const onSmartTablePage = new SmartTable()