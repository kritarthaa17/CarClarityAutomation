import FinancePage from "../support/page-object/finance-page.po"

describe('Registration Page', () => {
    var financePage = new FinancePage();

    it('Should verify the headers and titles ', () => {
        financePage.visit()
        financePage.companyLogo()
        financePage.chatContainer()
        financePage.loanDetails()
        financePage.termInput()
        financePage.submitBtn()
    })

    it('Should fill up the form', () => {
        financePage.fillForm1()
        financePage.backBtn()
        financePage.haveAcarInMind()
        financePage.yesButton()
        financePage.stillDecidingBtn().click()
        financePage.howQuicklyPurchase()
        financePage.dropDown().click()
        financePage.within1month().click()
        financePage.submitBtn().click()
        financePage.purposeText()
        cy.wait(2000)
        financePage.businessUse().click()
        financePage.submitBtn().click()
        cy.wait(2000)
        financePage.workSituationTxt()
        financePage.workDetailStatus().click()
        financePage.iamAnEmployee().click()
        financePage.monthlyIncome().type("5000")
        financePage.submitBtn().click()
        cy.wait(2000)
        financePage.residencyTxt()
        financePage.residencyStatus().click()
        financePage.visaHolder().click()
        financePage.livingStatus().click()
        financePage.ownHome().click()
        financePage.submitBtn().click()
    })

})