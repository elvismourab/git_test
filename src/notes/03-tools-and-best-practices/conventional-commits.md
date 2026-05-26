# Conventional Commits

## 🎯 Objetivo

Este guia de estudo aprofunda o conhecimento sobre a especificação dos *Conventional Commits* e as melhores práticas para escrever mensagens de commit no Git, com o objetivo de melhorar a manutenibilidade, a colaboração e a automação em projetos de software.

## 📝 Resumo

Os *Conventional Commits* são uma convenção que adiciona semântica às mensagens de commit, permitindo que humanos e máquinas compreendam facilmente a natureza das alterações. A estrutura `tipo(escopo): descrição` é a base para criar um histórico de commits claro e padronizado, o que facilita a automação de versionamento e a geração de changelogs.

## 📚 Conteúdo

### Conventional Commits: Uma Visão Geral

A especificação *Conventional Commits* é uma convenção simples e poderosa que adiciona semântica às mensagens de commit. Ela permite que humanos e máquinas compreendam facilmente a natureza das alterações realizadas.

#### Estrutura Fundamental

A estrutura de uma mensagem de commit convencional é a seguinte:

```
<tipo>[escopo opcional]: <descrição>

[corpo opcional]

[rodapé(s) opcional(is)]
```

**Exemplo Prático:**

```
feat(api): adiciona endpoint para autenticação de usuários

Implementa a rota POST /login que valida as credenciais do usuário
e retorna um JSON Web Token (JWT) em caso de sucesso.

Resolves: #42
```

### Detalhando a Estrutura

#### 1. `<tipo>`: A Natureza da Mudança

O tipo é obrigatório e define a categoria da alteração. Os tipos mais comuns e essenciais são:

*   **`feat`**: Para a introdução de novas funcionalidades no código (corresponde ao `MINOR` em versionamento semântico).
*   **`fix`**: Para a correção de bugs (corresponde ao `PATCH` em versionamento semântico).

Outros tipos também são amplamente utilizados para manter a clareza do histórico:

*   **`build`**: Alterações que afetam o sistema de build ou dependências externas (ex: `gulp`, `broccoli`, `npm`).
*   **`chore`**: Outras alterações que não modificam o código-fonte ou os arquivos de teste (ex: atualização de tarefas do `grunt`).
*   **`ci`**: Alterações nos arquivos e scripts de configuração de CI (ex: `Travis`, `Circle`, `BrowserStack`).
*   **`docs`**: Alterações apenas na documentação.
*   **`perf`**: Uma alteração de código que melhora o desempenho.
*   **`refactor`**: Uma alteração de código que não corrige um bug nem adiciona uma funcionalidade.
*   **`style`**: Alterações que não afetam o significado do código (espaços em branco, formatação, ponto e vírgula ausente, etc.).
*   **`test`**: Adição de testes ausentes ou correção de testes existentes.

#### 2. `[escopo opcional]`: O Contexto da Mudança

O escopo é um substantivo que fornece contexto adicional para a alteração. Ele indica a parte do código que foi afetada.

*   **Exemplos**: `feat(autenticacao)`, `fix(perfil-usuario)`, `docs(contribuicao)`.

#### 3. `<descrição>`: A Essência da Mudança

A descrição é um resumo conciso da alteração. Deve seguir estas regras:

*   **Máximo de 50 caracteres**: Para garantir a legibilidade em diversas ferramentas Git.
*   **Modo Imperativo**: Comece com um verbo no imperativo. Ex: "adiciona", "corrige", "refatora" em vez de "adicionado", "corrigindo" ou "refatorado".
*   **Sem letra maiúscula no início e sem ponto final**: É uma convenção de estilo.

#### 4. `[corpo opcional]`: A Motivação e o Contexto

O corpo da mensagem é onde se detalha a alteração. Ele deve explicar o "porquê" da mudança, não o "como". O código já mostra o "como".

*   **Justifique a alteração**: Explique o problema que está sendo resolvido.
*   **Compare com o comportamento anterior**: Se for relevante, descreva como o código funcionava antes da mudança.
*   **Use parágrafos**: Separe o corpo da descrição com uma linha em branco.

#### 5. `[rodapé(s) opcional(is)]`: Metadados

O rodapé é usado para referenciar informações adicionais, como IDs de *issues* em sistemas de rastreamento.

*   **Breaking Changes**: Alterações que quebram a compatibilidade devem ser indicadas no início do rodapé com `BREAKING CHANGE:`.
*   **Exemplos**: `Reviewed-by: Z`, `Refs: #123`, `Fixes: #456`.

### As Sete Regras de Ouro de uma Ótima Mensagem de Commit

Estas regras, popularizadas por Chris Beams, são um complemento valioso ao *Conventional Commits* e servem como um guia para a excelência.

1.  **Separe o assunto do corpo com uma linha em branco.**
2.  **Limite a linha de assunto a 50 caracteres.**
3.  **Capitalize a linha de assunto (Nota: esta regra é frequentemente adaptada para minúsculas no contexto dos Conventional Commits).**
4.  **Não termine a linha de assunto com um ponto.**
5.  **Use o modo imperativo na linha de assunto.**
6.  **Use o corpo para explicar *o quê* e *porquê* vs. *como*.**
7.  **Quebre as linhas do corpo em 72 caracteres.**

## Conclusão

A adoção disciplinada do *Conventional Commits* e das boas práticas de escrita de mensagens de commit transcende a mera organização. Ela é um pilar para a automação de versionamento (ex: `semantic-release`), a geração automática de *changelogs* e, mais importante, para a criação de um histórico de projeto que seja claro, navegável e valioso para todos os colaboradores, presentes e futuros.

## 🔗 Referências

*   [Conventional Commits Specification](https://www.conventionalcommits.org/en/v1.0.0/)
*   [How to Write a Git Commit Message by Chris Beams](https://cbea.ms/git-commit/)
