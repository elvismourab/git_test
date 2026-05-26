# Guia de Uso: Gemini CLI

## 🎯 Objetivo

Dominar as funcionalidades, atalhos e fluxos de trabalho do Gemini CLI para maximizar a produtividade no desenvolvimento de software e na gestão de conhecimento.

## 📝 Resumo

O Gemini CLI é um agente autônomo projetado para interagir diretamente com o sistema de arquivos, executar comandos e auxiliar na tomada de decisões técnicas. Este guia cobre desde os atalhos de interface até estratégias avançadas de gerenciamento de sessões e fluxos de trabalho automatizados.

## 📚 Conteúdo

### 1. Interação e Atalhos Essenciais
O terminal do Gemini CLI possui recursos específicos para facilitar a alternância entre conversa e execução:
*   **`Tab`**: Alterna o foco para o shell interativo. Quando o Gemini executa um comando que requer entrada (como `vim` ou `ssh`), use `Tab` para digitar diretamente no processo.
*   **`/help`**: Exibe a lista de comandos internos disponíveis.
*   **`/bug`**: Atalho para reportar comportamentos inesperados do agente.

### 2. Gerenciamento de Sessão e Memória
Diferente de chats comuns, o Gemini CLI trabalha com persistência e contexto de diretório:
*   **Retomada de Conversa**: O histórico da sessão é mantido para fornecer contexto contínuo. Ao iniciar uma tarefa complexa, o Gemini utiliza o arquivo `MEMORY.md` (privado) ou `GEMINI.md` (compartilhado) para lembrar de convenções do projeto.
*   **Contexto de Arquivo**: Você pode passar arquivos específicos como contexto usando `@nome-do-arquivo` no prompt.

### 3. Modos de Operação
*   **Default Mode**: O modo padrão onde o agente executa tarefas e solicita confirmações para edições de arquivos e comandos de shell.
*   **Plan Mode**: Um ambiente seguro para pesquisa e design. Nele, o agente não pode modificar o código fonte, apenas criar arquivos de plano (`.md`). Útil para grandes refatorações.
*   **Auto-Edit Mode**: Ativado após a aprovação de um plano, permitindo que o agente execute as mudanças acordadas de forma autônoma.

### 4. Fluxos de Trabalho Recomendados
Para extrair o melhor do agente, utilize a estrutura **Research -> Strategy -> Execution**:

1.  **Investigação**: Peça para o agente analisar a estrutura do código (`list_directory`, `grep_search`).
2.  **Planejamento**: Utilize o `Plan Mode` para desenhar soluções complexas antes de aplicar mudanças.
3.  **Execução Cirúrgica**: Prefira solicitar edições específicas em vez de reescritas completas de arquivos grandes para economizar tokens e evitar efeitos colaterais.

### 5. Dicas de Produtividade
*   **Comandos Combinados**: O Gemini pode executar múltiplos comandos em paralelo. Você pode pedir, por exemplo: "Crie o componente X, atualize o teste Y e rode o linter".
*   **Documentação Viva**: Peça ao agente para atualizar seus arquivos de notas à medida que você aprende algo novo no projeto.
*   **Prevenção de Erros**: O agente sempre verifica o estado do git antes de grandes mudanças. Use isso a seu favor para manter o histórico limpo.
* Ao digitar **/resume** no prompt:
  * Navegador de Sessões: Abre uma interface interativa onde você pode usar as setas do teclado para navegar pelas sessões passadas.
  * Busca: Pressione / dentro dessa lista para filtrar as sessões por conteúdo ou ID.
  * Resumo: Pressione Enter na sessão desejada para carregá-la.
* Comandos Úteis no Terminal:
  * Listar sessões (sem entrar nelas): **gemini --list-sessions**
  * Retomar a última sessão: **gemini --resume**
  * Deletar uma sessão: **gemini --delete-session <id>** (ou pressione x dentro da lista do /resume).

---
*Dica de Ouro: O Gemini CLI é um "programador parceiro". Quanto mais contexto você fornecer sobre suas intenções (o "porquê"), melhor será a qualidade das sugestões técnicas.*
