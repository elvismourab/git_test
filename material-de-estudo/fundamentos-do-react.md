## 📚 Material de Estudo: Fundamentos do React

---

### **Sumário**

1.  **Estrutura Básica de Componentes**
    * 1.1 Imports e Exports
    * 1.2 Interfaces e Tipagem
    * 1.3 O Bloco `return` e Lógicas
2.  **Hooks Fundamentais**
    * 2.1 `useState`
    * 2.2 `useEffect`
3.  **Hooks para Otimização (Memoização)**
    * 3.1 `useCallback`
    * 3.2 `useMemo`
4.  **Conceitos Avançados**
    * 4.1 Contextos
    * 4.2 Custom Hooks
    * 4.3 `Async/Await` e `try/catch/finally`
5.  **Boas Práticas e Fundamentos de Performance**
    * 5.1 Virtual DOM
    * 5.2 Boas Práticas de Código

---

### 1. Estrutura Básica de Componentes

Um componente React é a unidade fundamental de uma aplicação. Ele é responsável por renderizar um pedaço da interface do usuário.

#### 1.1 Imports e Exports

* **`import`**: Usado para importar outros componentes, bibliotecas ou funções necessárias. A arquitetura de componentes do React é projetada para ser modular e reutilizável.
* **`export`**: Todo componente deve ser exportado para que possa ser usado em outros arquivos da aplicação.
    * **`export default MeuComponente`**: Exporta o componente como o padrão do arquivo.
    * **`export const MeuComponente`**: Exporta um componente nomeado, que deve ser importado com o mesmo nome (`import { MeuComponente } from './caminho'`).

#### 1.2 Interfaces e Tipagem

* A **`interface`** define um "contrato" para o componente, especificando a estrutura e os tipos de dados das propriedades (`props`) que ele pode receber.
* O uso de **`?`** após o nome de uma propriedade (`onChange?: ...`) a torna **opcional**.
* A sintaxe **`React.FC`** (ou `FunctionComponent`) é uma tipagem que indica que o componente é uma função que recebe as propriedades definidas na interface, garantindo uma validação de tipos robusta.

#### 1.3 O Bloco `return` e Lógicas

* O **`return`** é o bloco que define o que será renderizado e exibido na tela. Ele sempre retorna elementos do React (JSX).
* É possível usar **operações lógicas** dentro do componente para controlar condicionalmente o que é exibido, com base nos **estados** ou nas **props**. Por exemplo, exibir um elemento somente se um `estado` for verdadeiro.

---

### 2. Hooks Fundamentais

Hooks são funções que permitem "conectar" o estado e o ciclo de vida do React a partir de componentes de função.

#### 2.1 `useState`

* **Função**: Define o estado local de um componente. É a forma de ter uma variável que, quando alterada, faz com que o componente seja renderizado novamente.
* **Sintaxe**: `const [estadoAtual, setEstadoAtual] = useState(valorInicial)`
* **Retorno**: Retorna um array com dois elementos: o **valor atual** do estado e uma **função para atualizá-lo**.

#### 2.2 `useEffect`

* **Função**: Usado para gerenciar **efeitos colaterais** (side effects), como chamadas de API, manipulação do DOM ou subscrições a eventos.
* **Controle de execução**: A execução do `useEffect` é controlada por um **array de dependências**:
    * **Sem array**: É executado após cada renderização.
    * **Array vazio (`[]`)**: É executado apenas uma vez, na primeira renderização do componente (equivalente ao `componentDidMount` de classes).
    * **Com dependências (`[valor1, valor2]`)**: É executado apenas quando uma das dependências muda.
* **Função de limpeza**: O `useEffect` pode retornar uma função para "limpar" os efeitos, como cancelar uma subscrição. Essa função é executada quando o componente é desmontado.

---

### 3. Hooks para Otimização (Memoização)

A memoização é uma técnica para otimizar a performance, evitando recálculos e renderizações desnecessárias.

#### 3.1 `useCallback`

* **Função**: Retorna uma **versão memoizada de uma função**. Isso significa que a função só será recriada se suas dependências (passadas no array) forem alteradas.
* **Quando usar**: É ideal para funções que são passadas como `props` para componentes filhos, evitando que esses componentes sejam renderizados novamente sem necessidade.

#### 3.2 `useMemo`

* **Função**: Retorna um **valor memoizado**. O valor só é recalculado se suas dependências mudarem.
* **Quando usar**: Para evitar que cálculos complexos sejam refeitos a cada renderização do componente.

---

### 4. Conceitos Avançados

#### 4.1 Contextos (Context API)

* **Função**: Resolve o problema de "prop drilling" (passar props manualmente por muitos níveis de componentes).
* **Como funciona**: Usado para compartilhar dados (como o tema da aplicação ou dados de usuário) entre componentes sem a necessidade de passá-los via `props` em cada nível da árvore de componentes. É composto por um `Provider` e um `Consumer` (usado via `useContext`).

#### 4.2 Custom Hooks

* **Função**: Permitem encapsular lógicas complexas e reutilizáveis em uma única função.
* **Convenção**: Por convenção, o nome de um *custom hook* deve começar com **`use`** (`useFetchData`, `useFormValidation`, etc.).
* **Benefício**: Simplifica a reutilização de lógicas de estado e efeitos, tornando o código mais limpo e fácil de manter.

#### 4.3 `Async/Await` e `try/catch/finally`

* **`async/await`**: Uma sintaxe moderna para lidar com **operações assíncronas** (que demoram um tempo para serem concluídas, como chamadas de API).
    * **`async`**: Define que uma função é assíncrona e sempre retornará uma `Promise`.
    * **`await`**: Pausa a execução da função `async` até que a `Promise` seja resolvida.
* **`try/catch/finally`**: Usado para gerenciar erros em operações que podem falhar, especialmente as assíncronas.
    * **`try`**: Bloco de código que será executado.
    * **`catch`**: Bloco executado se ocorrer uma exceção (`erro`) no `try`.
    * **`finally`**: Bloco que **sempre** é executado, independentemente de ter ocorrido um erro ou não (ótimo para limpeza de recursos).

---

### 5. Boas Práticas e Fundamentos de Performance

#### 5.1 Virtual DOM

* **O que é**: Uma representação leve do DOM (Document Object Model) real. O React utiliza essa técnica para otimizar as atualizações da interface.
* **Como funciona**: Quando o estado de um componente muda, o React cria uma nova árvore do Virtual DOM. Em seguida, ele compara (com o processo chamado *diffing*) a nova árvore com a anterior e, a partir dessa diferença, aplica as alterações mínimas e mais eficientes ao DOM real, economizando tempo e processamento.

#### 5.2 Boas Práticas de Código

* **Componentes pequenos e focados**: Mantenha os componentes com responsabilidades únicas.
* **Separação de lógica e apresentação**: Use *custom hooks* para gerenciar a lógica complexa (`fetch` de dados, validação de formulário) e mantenha os componentes focados na apresentação (`JSX`).
* **Tipagem forte**: Use TypeScript para garantir validação de tipos, o que torna a manutenção do código muito mais segura.
* **Testes unitários**: Escreva testes para componentes e *hooks* críticos.
