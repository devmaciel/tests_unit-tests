/// <reference types="Cypress" />

// it("Meu primeiro teste", () => {
//   console.log("Olá mundo!");
// });

// it("Visitando a página do google e fazendo uma pesquisa", () => {
// 	cy.visit("https://www.google.com");
// 	cy.get(".gLFyf").type("do a barrel roll");
//   // cy.get(".FPdoLc > center > .gNO89b").click();
//   cy.get('.aajZCb > .tfB0Bf > center > .gNO89b').click();
// });

before(() => {
	// cy.visit(
	// 	"https://cliente.submarino.com.br/simple-login/cadastro/pf?next=https%3A%2F%2Fwww.submarino.com.br%2F%3Fepar%3Dbp_br_00_go_sch_brand_geral%26opn%3DGOOGLESEARCH%26WT.srch%3D1%26gclid%3DCj0KCQiA-rj9BRCAARIsANB_4AAiklHJkvp5gjJ7130IJeq-BgSSxBy8HqEusCp6g4JI13GSTUBtN9UaAl4OEALw_wcB"
	// );
	cy.visit("https://github.com/join?return_to=%2FdevMaciel&source=login");
});

// beforeEach(() => {
// 	cy.visit("https://github.com");
// });

describe("Cadastro no github", () => {
	it("Username", () => {
		cy.get("#user_login")
			.type("teste9")
			.should("have.value", "devmaciel_teste");
	});

	it("Email", () => {
		cy.get("#user_email")
			.type("teste09@gmail.com")
			.should("have.value", "devmaciel_teste@gmail.com");
	});

	it("Password", () => {
		cy.get("#user_password").type("Teste696969@!");
  });
  
  it("Checkbox", () => {
		cy.get("#all_emails").click();
	});
});

// describe("Este é um describe", () => {
// 	it.skip("Este é o primeiro it", () => {});

// 	it("Este é o segundo it", () => {});

// 	describe.only("Este é o segundo describe", () => {});
// });

// it("Realizar cadastro de nova conta no Submarino", () => {
// 	cy.get("#email-input").type("teste@gmail.com").type('{enter}');
// });

// it("Busca", () => {
// 	cy.visit("https://www.submarino.com.br/");
// 	cy.get("input[name=conteudo]").clear().type("laptop");

// 	cy.get("#lgpd-accept").click();
// });
