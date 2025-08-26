# Clean Architecture

## 🎯 Objetivo

Este material de estudo explica o que é a Clean Architecture (Arquitetura Limpa), seus princípios fundamentais e como ela organiza o software em camadas para criar sistemas desacoplados, testáveis e fáceis de manter.

## 📝 Resumo

A Clean Architecture é uma abordagem de design de software que visa separar as preocupações, isolando as regras de negócio do sistema de detalhes de implementação como frameworks, bancos de dados e interfaces de usuário. A regra principal é que as dependências devem sempre apontar para o interior do sistema, garantindo que o núcleo da aplicação permaneça independente e testável.

## 📚 Conteúdo

### O que é Clean Architecture (Arquitetura Limpa)?

Imagine que você está construindo uma casa. Você não começa pelas tomadas e lâmpadas (detalhes externos). Você começa pela fundação e pela estrutura. A Clean Architecture aplica essa mesma ideia ao software.

O objetivo principal é criar um sistema organizado em camadas, onde o "coração" do software (as regras de negócio) não depende de detalhes externos como frameworks, bancos de dados ou interfaces de usuário.

### Os 5 Mandamentos da Clean Architecture

1.  **Independência de Framework:** Seu código principal não deve se importar se você usa Laravel, Spring, React, ou qualquer outro framework. O framework é uma ferramenta, não o centro do sistema.
2.  **Independência de Interface de Usuário:** A lógica de negócio não deve mudar se o sistema for usado por um site, um aplicativo de celular ou um terminal de comando.
3.  **Independência de Banco de Dados:** Você deve poder trocar seu banco de dados (de MySQL para PostgreSQL, por exemplo) sem precisar reescrever as regras de negócio.
4.  **Independência de qualquer elemento externo:** Qualquer serviço ou biblioteca externa é um detalhe que não deve afetar o núcleo da sua aplicação.
5.  **Testabilidade:** Como as regras de negócio são isoladas, é muito mais fácil criar testes para elas, garantindo que a parte mais importante do seu sistema funcione corretamente.

### As Camadas (Como a "Casa" é Organizada)

Pense em círculos, um dentro do outro. As coisas mais importantes ficam no centro, e as menos importantes, nas bordas.

1.  **Entidades (O Coração):** São as regras de negócio mais puras e os objetos principais do seu sistema. No exemplo do arquivo, seria o `Colaborador`. Elas não sabem nada sobre o mundo exterior.
2.  **Use Cases (Casos de Uso):** Representam as ações que o sistema pode fazer (as regras de negócio da aplicação). Por exemplo: "cadastrar um novo colaborador" ou "buscar todos os colaboradores". Eles usam as Entidades para realizar essas tarefas.
3.  **Adapters (Adaptadores):** É a camada que "traduz" a comunicação entre o mundo externo e os Casos de Uso. Aqui ficam os `Controllers` (que recebem requisições da web), `Repositories` (que falam com o banco de dados), etc. Eles adaptam os dados de um formato para o outro.
4.  **Mundo Externo:** Aqui estão os frameworks (Laravel, React), o banco de dados (MySQL), a interface do usuário (HTML, CSS), etc. São os "detalhes" que podem ser trocados.

### A Regra de Ouro: A Regra da Dependência

**As dependências devem apontar sempre para dentro.**

*   O Framework pode depender dos `Adapters`.
*   Os `Adapters` podem depender dos `Use Cases`.
*   Os `Use Cases` podem depender das `Entidades`.

**Mas NUNCA o contrário!** Uma `Entidade` (círculo mais interno) não pode saber quem é o `Controller` ou qual banco de dados está sendo usado (círculos mais externos).

É aqui que entra o **Princípio da Inversão de Dependência (o 'D' do SOLID)**. Em vez da camada de `Use Cases` depender diretamente de um `DatabaseRepository` (concreto), ela depende de uma `RepositoryInterface` (uma abstração, um "contrato"). Isso permite que você troque a implementação do banco de dados sem quebrar a camada de `Use Cases`.

### E o tal do DDD?

O arquivo menciona rapidamente o DDD (Domain-Driven Design). Pense no DDD como uma filosofia que ajuda a entender o "negócio" para o qual você está criando o software. A Clean Architecture é uma forma de **estruturar** o código a partir desse entendimento.

*   **Domínio:** É a área de conhecimento do negócio (ex: "Vendas", "Logística").
*   **Linguagem Universal:** Desenvolvedores e especialistas de negócio devem usar os mesmos termos para se referir às mesmas coisas.
