# Boas Práticas em Desenvolvimento Web

## 🎯 Objetivo

Reunir recomendações técnicas e padrões de desenvolvimento para JavaScript e CSS que aumentam a resiliência do código e a consistência visual entre navegadores.

## 📝 Resumo

Este material compila diretrizes sobre o tratamento defensivo de erros em funções JavaScript, a importância de construir uma biblioteca de utilitários própria para ganho de produtividade e a aplicação estratégica de CSS Resets ou Normalize no início de novos projetos.

## 📚 Conteúdo

### 1. Robustez e Segurança em Funções (JavaScript)
Para garantir que seu código seja menos propenso a erros e mais fácil de manter:
*   **Validação de Parâmetros**: É uma boa prática verificar se todos os parâmetros necessários foram validados antes da execução da lógica principal da função.
*   **Valores Padrão**: Forneça valores padrão para parâmetros opcionais. Isso evita que a função quebre caso algum dado não seja enviado.
*   **Criação de Bibliotecas de Utilitários**: Ao longo da carreira, é comum repetir as mesmas tarefas. Crie sua própria biblioteca de funções utilitárias (`utils.js`) para centralizar essas soluções e facilitar o reaproveitamento em diferentes projetos.

### 2. Consistência com CSS Normalize e Reset
A escolha da estratégia base para o CSS deve ser uma das primeiras decisões de um projeto:
*   **Frameworks (ex: Tailwind)**: Geralmente já trazem seus próprios sistemas de reset/normalize integrados.
*   **Projetos do Zero**: Recomenda-se iniciar com o `modern-normalize`. Ele ajusta o `border-box` global e corrige bugs comuns e problemas de acessibilidade dos navegadores.
*   **Estética Personalizada**: Se você não deseja a aparência padrão do navegador, utilize um CSS Reset (como o exemplo abaixo). Isso economiza muito tempo de estilização repetitiva.
*   **Timing**: Decida o uso do reset no início do projeto; adicioná-lo tardiamente pode causar regressões visuais imprevisíveis.

#### Exemplo de Reset Moderno:
```css
@import "modern-normalize";

:root {
  line-height: 1.5;
}

/* Remove margens de elementos de bloco comuns */
h1, h2, h3, h4, h5, figure, p, ol, ul {
  margin: 0;
}

/* Ajusta listas para quando são usadas apenas como containers de layout */
ol[role="list"], ul[role="list"] {
  list-style: none;
  padding-inline: 0;
}

/* Faz com que títulos herdem estilos de fonte para maior controle */
h1, h2, h3, h4, h5 {
  font-size: inherit;
  font-weight: inherit;
}

/* Imagens responsivas e sem espaço extra inferior */
img {
  display: block;
  max-inline-size: 100%;
}
```

---
*Referências: [MDN - Function return values](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Return_values) e [Matt Brictson - CSS normalize and reset](https://mattbrictson.com/blog/css-normalize-and-reset).*
