class FinancePage {
    visit() {
        cy.visit("/")
        cy.location("pathname").should("include", "lead-application/finance-3")
    }

    companyLogo(){
        return cy.get('.header-logo').should('exist')
    }

    chatContainer(){
        return cy.get('.chat-container').contains("Hi I’m Kate. I'm here to help you find the best car loan options.")
    }

    loanDetails(){
        return cy.contains('Loan details').should('exist')

    }

    purchasePriceInput(){
        return cy.get('input[name="approximate-purchase-price"]').should('exist')

    }
    
    depositInput(){
        return cy.get('input[name="deposit"]').should('exist')

    }

    termInput(){
        return cy.get('.select--input').should('exist')
    }

    termValue(){
        return cy.contains('2 years').should('exist')
    }

    balloonInput(){
        return cy.get('input[name="balloon"]').should('exist')

    }

    balloonInputClear(){
        return cy.get('input[name="balloon"]').clear()

    }

    submitBtn(){
        return cy.get('.submit-btn').contains('Continue').should('exist')
    }

    backBtn(){
        return cy.get('.cc-back-button').should('exist')
    }

    haveAcarInMind(){
        return cy.contains('Have a car in mind?').should('exist')
    }

    yesButton(){
        return cy.contains('Yes').should('exist')
    }

    stillDecidingBtn(){
        return cy.contains('Still deciding').should('exist')
    }

    howQuicklyPurchase(){
        return cy.contains('How quickly do you want to purchase?').should('exist')
    }

    dropDown(){
        return cy.get('.select--displayName').should('exist')
    }

    within1month(){
        return cy.contains('Within 1 month').should('exist')
    }

    purposeText(){
        return cy.contains('What will be the primary use of the vehicle?').should('exist')
    }

    personalUse(){
        return cy.contains('Personal use').should('exist')
    }

    businessUse(){
        return cy.contains('Business use').should('exist')
    }

    fillForm1() {
       cy.fixture('finance-data').then((data) => {
           this.purchasePriceInput().type(data.financeData.purchasePrice)
           this.depositInput().type(data.financeData.deposit)
           this.termInput().click()
           this.termValue().click()
           this.balloonInputClear()
           this.balloonInput().type(data.financeData.balloon)
           this.submitBtn().click()

       })
    }
}
export default FinancePage