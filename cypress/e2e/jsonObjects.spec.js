/// <reference types="cypress" />

describe('JSON Objects', () => {

    it('JSON Objects', () => {
        cy.openHomePage()

        const simpleObject = { "key": "value", "key2": "value2"}

        const simpleArrayOfValues =[ "value1", "value2", "value3"]

        const arrayOfObjects = [
            { "key": "value", "key2": "value2"},
            { "key": "value3", "key2": "value4"},
            { "key": "value5", "key2": "value6"}
        ]

        const typeOfData = {"string": "This is a string", "number": 10}

        const mix = {
            "FirstName": "Artem",
            "LastName": "Alcantara",
            "Age" : 30,
            "Students": [
                {
                    "FirstName": "Mark",
                    "LastName": "Smith",
                    "Age": 25
                },
                {
                    "FirstName": "John",
                    "LastName": "Doe",
                    "Age": 28   
                }
            ]
        }

        console.log(simpleObject.key)
        console.log(simpleObject['key2'])
        console.log(simpleArrayOfValues[1])
        console.log(arrayOfObjects[1].key)
        console.log(mix.Students[0].FirstName)


    })        

})