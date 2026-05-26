# Objetos vs Arrays em JavaScript

## 🎯 Objetivo

Diferenciar as duas principais estruturas de dados em JavaScript, compreendendo suas formas de acesso e, principalmente, como elas se comportam em memória (Valor vs Referência).

## 📝 Resumo

Enquanto **Arrays** são coleções ordenadas de dados acessadas por índices numéricos, **Objetos** são coleções de pares chave-valor. Uma das diferenças mais críticas entre tipos primitivos e objetos/arrays é que os primeiros são manipulados por **valor**, enquanto os últimos são manipulados por **referência**.

## 📚 Conteúdo

### Diferença Fundamental
*   **Objetos**: Conjunto de dados acessados por chaves (strings). Ideal para representar entidades com propriedades (ex: um usuário com nome, idade, etc.).
*   **Arrays**: Conjunto de dados acessados através de um índice numérico (começando em 0). Ideal para listas de itens similares.
*   **Composição**: É comum e útil ter arrays de objetos (ex: uma lista de usuários) ou propriedades que são arrays dentro de objetos (ex: um usuário com uma lista de hobbies).

### Formas de Acesso
#### Objetos
As propriedades e métodos podem ser acessados de duas formas:
1.  **Notação de Ponto**: `objeto.propriedade`. É a forma mais comum e limpa.
2.  **Notação de Colchetes**: `objeto['propriedade']`. Necessária quando a chave é dinâmica (armazenada em uma variável) ou quando contém caracteres especiais (como espaços).

#### Arrays
Os dados são acessados exclusivamente através do índice numérico:
*   `arr[0]` (primeiro elemento)
*   `arr[arr.length - 1]` (último elemento)

### Tipos Primitivos vs Tipos de Objeto (Valor vs Referência)
Este é um dos conceitos mais importantes para evitar bugs em JavaScript:

*   **Tipos Primitivos (String, Number, Boolean, etc.)**: Passam seu **valor real**. 
    *   Se a variável `B` recebe o valor da variável `A`, elas são independentes. Alterações em `B` **não** repercutem em `A`.
*   **Tipos de Objeto (Object, Array, Function)**: Passam a **referência** (o endereço na memória).
    *   Se a variável `B` recebe o objeto da variável `A`, ambas apontam para o mesmo lugar. Qualquer alteração em `B` **vai repercutir** no objeto original, e essa mudança será observada em `A`.
