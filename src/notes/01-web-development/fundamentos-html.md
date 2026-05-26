# Fundamentos de HTML

## 🎯 Objetivo

Este guia serve como uma referência dos conceitos e tags fundamentais do HTML, cobrindo desde a estrutura básica do documento até as tags mais comuns para formatação de conteúdo.

## 📚 Conteúdo

### Estrutura Básica (Boilerplate)

Todo documento HTML segue uma estrutura padrão que informa ao navegador como a página deve ser renderizada.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título da Página</title>
</head>
<body>
    <!-- Conteúdo visível da página -->
</body>
</html>
```

| Tag | Descrição |
| :--- | :--- |
| `<!DOCTYPE html>` | Define o tipo de documento como HTML5. É a primeira coisa que o navegador lê. |
| `<html lang="pt-BR">` | A tag raiz que engloba todo o conteúdo. O atributo `lang` é crucial para acessibilidade, indicando o idioma principal da página. |
| `<head>` | Contém metadados sobre o documento, como o título, codificação de caracteres e links para folhas de estilo. O conteúdo aqui não é visível na página. |
| `<meta charset="UTF-8">` | Especifica a codificação de caracteres do documento, garantindo que acentos e símbolos sejam exibidos corretamente. |
| `<meta name="viewport"...>` | Garante que a página seja renderizada corretamente em diferentes tamanhos de tela (design responsivo). |
| `<title>` | Define o título que aparece na aba ou na janela do navegador. É importante para SEO. |
| `<body>` | Contém todo o conteúdo visível da página, como textos, imagens, links, etc. |


### Tags Semânticas de Texto

Tags semânticas adicionam significado ao conteúdo, ajudando os navegadores e os mecanismos de busca a entender a estrutura da sua página.

| Tag | Descrição | Exemplo |
| :--- | :--- | :--- |
| `<strong>` | Indica que o texto tem grande importância, seriedade ou urgência. | `<strong>Cuidado:</strong> Piso molhado.` |
| `<em>` | Designa ênfase em um texto, alterando o sentido da frase. | `Eu *realmente* preciso de férias.` |
| `<mark>` | Destaca um texto com relevância em um determinado contexto. | `O termo foi <mark>mencionado</mark> no relatório.` |
| `<small>` | Para comentários secundários e textos pequenos, como direitos autorais. | `<small>&copy; 2025 Empresa.</small>` |
| `<del>` | Representa um texto que foi removido do documento. | `Preço: <del>R$ 99,99</del>` |
| `<ins>` | Representa um texto que foi inserido no documento. | `Preço: <ins>R$ 49,99</ins>` |
| `<sub>` | Define um texto subscrito, como em fórmulas químicas. | `A fórmula da água é H<sub>2</sub>O.` |
| `<sup>` | Define um texto sobrescrito, como em expoentes matemáticos. | `O resultado é 10<sup>3</sup>.` |

### Estrutura de Títulos

As tags de `<h1>` a `<h6>` definem uma hierarquia de títulos. É uma boa prática ter apenas um `<h1>` por página.

```html
<h1>Título Principal da Página</h1>
<h2>Uma Seção Importante</h2>
<h3>Um Subtópico</h3>
```

### Listas

Usadas para agrupar itens relacionados.

#### Lista Não Ordenada (`<ul>`)

Usada quando a ordem dos itens não é importante.

```html
<ul>
    <li>Pizza</li>
    <li>Coca-Cola</li>
    <li>Jack Daniels</li>
</ul>
```

#### Lista Ordenada (`<ol>`)

Usada quando a sequência dos itens é crucial.

```html
<ol>
    <li>Ligar o computador.</li>
    <li>Abrir o editor de código.</li>
    <li>Começar a programar.</li>
ol>
```

### Links

A tag `<a>` (âncora) é usada para criar links para outras páginas ou recursos.

| Tipo | Descrição | Exemplo |
| :--- | :--- | :--- |
| **Absoluto** | Aponta para um endereço completo e externo na web. | `<a href="https://www.google.com">Ir para o Google</a>` |
| **Relativo** | Aponta para um arquivo local, dentro do mesmo projeto. | `<a href="/contato.html">Página de Contato</a>` |

### Imagens

A tag `<img>` é usada para incorporar imagens. O atributo `alt` é fundamental para a acessibilidade, descrevendo a imagem para leitores de tela e em caso de falha no carregamento.

```html
<img src="caminho/para/imagem.jpg" alt="Descrição detalhada da imagem" width="200">
```

| Formato | Uso Ideal |
| :--- | :--- |
| **JPG** | Fotos e imagens com gradientes de cores complexos. |
| **PNG** | Imagens que precisam de fundo transparente, como logotipos e ícones. |
| **GIF** | Animações curtas e simples. |
| **SVG** | Gráficos vetoriais escaláveis, perfeitos para logotipos e ícones que precisam se adaptar a diferentes tamanhos sem perder qualidade. |
| **WebP** | Formato moderno que oferece alta qualidade com tamanhos de arquivo menores. |