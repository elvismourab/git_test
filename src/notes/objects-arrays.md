What is the difference between objects and arrays?

Objetos são um conjunto de dados acessados por pares chave-valor, enquanto que arrays são conjuntos de dados acessados através de um índice.

É possível ter um array de objetos, e também uma propriedade do tipo array dentro de um objeto.

—

How do you access object properties?

As propriedades e métodos do objeto podem ser acessadas com as seguintes notações:

objeto.prop
objeto[‘prop’] (mais usado quando a notação de ponto não permite retornar o dado, como por exemplo uma string com espaço.

—

Os dados do array são acessados através do índice, por exemplo:

arr[0]
arr[30]

—

How do primitives and object types differ when you assign them to other variables, or pass them into functions?

Tipos primitivos passam o seu valor real para outras variáveis ou funções, se a variável ‘B’ recebeu o valor da variável ‘A’, alterações em ‘B’ não repercutem em ‘A’.

Objetos passam a referência do objeto armazenado para outras variáveis ou funções, se a variável ‘B’ recebeu o valor da variável ‘A’, qualquer alteração em ‘B’ vai repercutir no objeto, e essa mudança também será observada em ‘A’.
