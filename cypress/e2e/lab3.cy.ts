describe('Casos de prueba de Decasa',()=> {

    beforeEach(() => {
        cy.visit('https://www.decasa.cr/mi-cuenta/')
    })
    //Nombre del Caso de Prueba: Registro del usuario
    //Objetivo: El objetivo es poder crear un usuario en la página de decasa
    // Resultado esperado: Se espera que el usuario se cree correctamente o que ya exista
    it('Realiza la creacion del usuario', () => {
        cy.get('#reg_email').click().type('aaaaaaaaaaa@aaa.com').blur()
        cy.get('#reg_password').click().type('-*1234ABCabc').blur()

        cy.get('input[name="register"]').contains('Registrar').click()
        cy.url().should('eq','https://www.decasa.cr/mi-cuenta/')
    })
    //Nombre del Caso de Prueba: Inicio de sesion
    //Objetivo: El objetivo es poder iniciar sesion con un usuario previamente creado
    // Resultado esperado: Se espera que el usuario inicie sesion correctamente
    it('Ingresa sesion con el usuario previamente creado',()=>{
        cy.get('#username').click().type('aaaaaaaaaaa@aaa.com').blur()
        cy.get('#password').click().type('-*1234ABCabc').blur()
        cy.get('input[name="login"]').contains('Iniciar Sesión').click()
        cy.url().should('eq','https://www.decasa.cr/mi-cuenta/')
    })
    afterEach(() => {
        cy.reload()
    })
})

describe('Casos de prueba de Decasa Compras', () => {
    // Casos de pruebas sobre el producto Cama blanca.
    beforeEach(() => {
        cy.visit('https://www.decasa.cr/producto/cama-blanco/');       
    });

    //Nombre del Caso de Prueba: AgregarProductoCarrito
    //Objetivo: El objetivo es que al darle al botón de AÑADIR AL CARRITO, este muestre un 1 en el ícono de la bolsa de shopping
    // Resultado esperado: Se espera un 1 debajo del icono de bolsa de compras 
    it('AgregarProductoCarrito', function() {
        
        cy.xpath('/html/body/div[1]/div[4]/div/div/div/div[2]/div/div[1]/div/div/div[2]/div/div/form/div[2]/button').click().then(function () {
            cy.wait(10000)
            cy.get('span[class="mini-cart-counter"]').should('have.text', '1');
        });
    })

    //Nombre del Caso de Prueba: VerProductoCarrito
    //Objetivo: El objetivo es ver el producto seleccionado dentro de la pantalla del carrito o bolsa de shopping
    // Resultado esperado: Se espera que el producto seleccionado, en este caso una cama blanca, se muestre dentro de la página del carrito de compras.
    it('VerProductoCarrito', function() {
        cy.xpath('/html/body/div[1]/div[4]/div/div/div/div[2]/div/div[1]/div/div/div[2]/div/div/form/div[2]/button').click().then(function () {
            cy.wait(10000)
            cy.get('span[class="mini-cart-counter"]').should('have.text', '1');
        });

        cy.xpath('/html/body/div[1]/header/div/div/div[4]/ul/li[2]/a/i').click().then(function () {
            cy.wait(200)
            cy.get('table').contains('td', 'Cama Blanco');
        });
    });

    afterEach(() => {
        cy.reload();
    });

})