# Fundamentos do Ruby on Rails

## 🎯 Objetivo

Este material de estudo apresenta os conceitos fundamentais do framework Ruby on Rails (RoR), explorando sua filosofia de "Baterias Inclusas", sua arquitetura e a comparação estratégica com outros ecossistemas de desenvolvimento web.

## 📝 Resumo

O Ruby on Rails é um framework full-stack focado na felicidade do desenvolvedor e na velocidade de entrega (Time-to-Market). Diferente de frameworks modulares, o Rails oferece soluções nativas para quase todas as necessidades de uma aplicação moderna, desde a persistência de dados até o envio de e-mails e gerenciamento de arquivos. Sua convenção sobre configuração (*Convention over Configuration*) permite que desenvolvedores criem produtos robustos com menos código e decisões repetitivas.

## 📚 Conteúdo

### 1. A Filosofia "Baterias Inclusas"

O RoR entrega uma infraestrutura completa no momento da criação do projeto, eliminando a necessidade de selecionar e configurar dezenas de bibliotecas externas:

*   **Active Record (ORM):** Gerencia a interação com o banco de dados, tratando tabelas como classes Ruby e abstraindo a maior parte do SQL.
*   **Action Mailer:** Sistema integrado para criação e envio de e-mails.
*   **Active Storage:** Facilita o upload de arquivos para serviços de nuvem (como S3 ou Google Cloud) com mínima configuração.
*   **Segurança Nativa:** Proteções integradas contra ataques comuns como CSRF, XSS e SQL Injection.

### 2. Automatização e Qualidade de Código

O ecossistema Rails valoriza padrões de código consistentes através de ferramentas de automatização:

*   **RuboCop:** Atua como um linter e formatador de código, garantindo que o Ruby siga as melhores práticas da comunidade.
*   **ERB (Embedded Ruby):** Motor de templates padrão que permite injetar lógica Ruby diretamente no HTML. Para manter a qualidade, recomenda-se o uso de formatadores como o Prettier com plugins específicos para ERB.

### 3. Rails vs. Ecossistemas JavaScript (Next.js/React)

A escolha entre Rails e pilhas baseadas em JS/React depende do nível de controle e velocidade desejados:

| Recurso | Ruby on Rails | Next.js + React |
|---|---|---|
| **Arquitetura** | Monolito "Baterias Inclusas" (Tudo pronto). | Modular (Você escolhe e instala cada peça). |
| **Velocidade Inicial** | Altíssima para MVPs e desenvolvedores solo. | Alta, mas exige muitas decisões de bibliotecas (Auth, ORM). |
| **Banco de Dados** | Integrado e automático via Active Record. | Requer configuração manual de ORMs (ex: Prisma, Drizzle). |
| **Linguagem** | Foco em uma linguagem principal (Ruby). | Exige domínio de JS/TS e ecossistema React. |

### 4. O Caminho Moderno: Hotwire

Para criar interfaces altamente dinâmicas sem a complexidade de gerenciar um framework frontend separado (como React ou Vue), o Rails introduziu o **Hotwire**:

*   **Turbo:** Permite atualizações parciais da página enviando HTML diretamente do servidor, eliminando a necessidade de escrever muito JavaScript personalizado.
*   **Stimulus:** Um framework JS modesto focado em adicionar comportamento à marcação HTML existente, mantendo o controle no lado do servidor.
*   **Bulma/CSS:** O Rails se integra facilmente com frameworks CSS modernos como o Bulma, permitindo designs responsivos e elegantes com configuração simplificada (`rails new --css bulma`).
