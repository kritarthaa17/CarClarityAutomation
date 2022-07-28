import { should } from "chai"

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
        return cy.get('.cc-back-button'),should('exist')
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
    fillForm2() {
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
     fillForm3() {
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