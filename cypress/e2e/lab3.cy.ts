describe('Casos de prueba de Decasa',()=> {

    beforeEach(() => {
        cy.visit('https://www.decasa.cr/mi-cuenta/')
    })
    it('Realiza la creacion del usuario', () => {
        cy.get('#reg_email').click().type('aaaaaaaaaaa@aaa.com').blur()
        cy.get('#reg_password').click().type('-*1234ABCabc').blur()

        //cy.get('#mragree').click()
        //cy.get('#mr-login').click()
        cy.get('input[name="register"]').contains('Registrar').click()
        cy.url().should('eq','https://www.decasa.cr/mi-cuenta/')
    })
    it('Ingresa sesion con el usuario previamente creado',()=>{
        cy.get('#username').click().type('aaaaaaaaaaa@aaa.com').blur()
        cy.get('#password').click().type('-*1234ABCabc').blur()
        cy.get('input[name="login"]').contains('Iniciar Sesión').click()
        cy.url().should('eq','https://www.decasa.cr/mi-cuenta/')
    })
    // afterEach(() => {
    //     //cy.get('a[href="https://www.decasa.cr/mi-cuenta/customer-logout/"]').click()
    //     cy.url().should('eq','https://www.decasa.cr/')
    // })
})