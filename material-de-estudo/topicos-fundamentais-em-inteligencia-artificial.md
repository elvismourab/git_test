# Tópicos Fundamentais em Inteligência Artificial

## 🎯 Objetivo

Este material de estudo apresenta uma visão geral de tópicos essenciais em Inteligência Artificial, incluindo a engenharia de prompts para otimizar as respostas de modelos de linguagem, as técnicas de fine-tuning para especialização de modelos e o conceito de Small Language Models (SLMs).

## 📝 Resumo

A otimização de modelos de IA envolve tanto a criação de prompts eficazes (Prompt Engineering) quanto o ajuste fino (fine-tuning) com dados específicos. O fine-tuning pode ser supervisionado (SFT), para ensinar respostas corretas, ou baseado em preferência humana (DPO), para alinhar o modelo com o que os usuários consideram de alta qualidade. Além dos grandes modelos (LLMs), os Small Language Models (SLMs) oferecem uma alternativa especializada e focada em domínios específicos.

## 📚 Conteúdo

### 1. Prompt Engineering

**Prompt Engineering** é a arte e a ciência de criar *prompts* (comandos) de forma otimizada para obter as melhores respostas de um modelo de linguagem. As principais estratégias incluem:

*   **Escrever instruções claras:**
    *   Incluir detalhes específicos na sua consulta.
    *   Pedir ao modelo para adotar uma **persona** (ex: "Aja como um professor de história...").
    *   Usar delimitadores (como `---`, `"""` ou `<exemplo>`) para separar partes do *input*.
    *   Especificar os passos necessários para a conclusão de uma tarefa.
    *   Fornecer exemplos para guiar o modelo.
    *   Especificar o tamanho desejado para a saída.
    *   Fornecer um texto de referência e instruir o modelo a responder com citações desse texto.
*   **Dividir tarefas complexas:**
    *   Usar a **classificação de intenções** para identificar a instrução mais relevante para uma consulta.
    *   Em diálogos longos, resumir ou filtrar conversas anteriores.
    *   Resumir documentos grandes em partes e construir um resumo final recursivamente.
*   **Dar tempo para o modelo "pensar":**
    *   Instruir o modelo a resolver o problema internamente antes de dar a resposta final.
    *   Usar "monólogo interno" para ocultar o processo de raciocínio.
    *   Perguntar ao modelo se ele esqueceu de algo em etapas anteriores.
*   **Usar ferramentas externas:**
    *   Utilizar **pesquisa baseada em *embeddings*** para recuperar conhecimento de forma eficiente.
    *   Executar código para realizar cálculos precisos ou chamar APIs.
    *   Dar acesso do modelo a funções específicas.
*   **Testar sistematicamente:**
    *   Avaliar as saídas do modelo comparando-as com respostas de referência ("gold-standard").

### 2. Fine-tuning e Otimização de Modelos

#### 2.1 Conceitos e Parâmetros de Treinamento

O **fine-tuning** é o processo de ajustar um modelo pré-treinado com um conjunto de dados específico para uma tarefa particular. Para isso, alguns parâmetros são cruciais:

*   **Batch size:** Define quantos exemplos de treinamento o modelo processa por vez antes de atualizar seus pesos. O termo "epoch" pode ser dividido em vários "batches".
*   **Learning rate multiplier:** Um valor entre 1 e 10 que afeta a velocidade do aprendizado. Um valor baixo torna o aprendizado mais detalhista e lento, enquanto um valor alto pode fazer o modelo "pular" detalhes e não aprender corretamente.
*   **Number of epochs:** É o número de vezes que o modelo percorre todo o conjunto de dados de treinamento.

**Dados de Treinamento:**
*   O arquivo JSON deve seguir o formato da documentação.
*   É crucial ter um arquivo com **métricas de validação** para avaliar o modelo.
*   Cada exemplo no conjunto de dados deve ser formatado como uma conversa, com uma lista de mensagens (cada uma com `role`, `content` e opcionalmente `name`).
*   Dados de alta qualidade são mais importantes que uma grande quantidade de dados de baixa qualidade. Dobrar o número de exemplos de treinamento tende a gerar um aumento similar na qualidade do modelo.

#### 2.2 Fine-tuning Supervisionado (SFT) vs. Direct Preference Optimization (DPO)

| Característica | Fine-tuning Supervisionado (SFT) | Direct Preference Optimization (DPO) |
| :--- | :--- | :--- |
| **O que é?** | Ajuste de modelo com exemplos rotulados com **respostas corretas**. | Ajuste de modelo com base em **preferências humanas** (pares de respostas, uma preferida e outra não preferida). |
| **Como funciona?** | O modelo aprende a imitar a resposta ideal. | O modelo aprende a aumentar a probabilidade de gerar a resposta preferida. |
| **Objetivo** | Gerar respostas **certas** em tarefas específicas (ex: tradução, QA). | Gerar respostas que **agradam mais os humanos**, focando em qualidade e alinhamento ético. |

#### 2.3 A Escolha da "Seed" Randômica

A **seed** é um número usado para inicializar um gerador de números aleatórios, garantindo que experimentos reproduzam os mesmos resultados. O valor 42 é frequentemente usado como um padrão em ciência de dados e programação.

*   **Motivo:** A escolha é uma referência cultural ao livro "O Guia do Mochileiro das Galáxias", de Douglas Adams, onde 42 é a "resposta para a Vida, o Universo e Tudo Mais". É uma piada interna que se tornou um padrão de comunidade.

### 3. Small Language Models (SLMs)

Enquanto os LLMs (Large Language Models) são treinados em vastas quantidades de dados da internet, os **SLMs** (Small Language Models) são ajustados em **conjuntos de dados menores e especializados**.

*   **Vantagem:** Um SLM pode ser treinado especificamente para um setor ou tarefa, como a área da saúde. Por exemplo, um chatbot pode ser treinado apenas com dados médicos para dar respostas mais precisas e relevantes a perguntas sobre saúde, sem a necessidade de processar dados irrelevantes como poemas ou romances.
*   **Benefício:** Foco e especialização em um domínio específico, garantindo qualidade e precisão para casos de uso pontuais.