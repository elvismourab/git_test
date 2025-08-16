# Clean arquitecture

1. Independência de framework
2. Independência de interface de usuário
3. Independência de banco de dados
4. Independência de qualquer elemento externo
5. Testabilidade

---

1. Entidades - estruturação das tabelas do banco
2. Use cases - regras de negócio da aplicação, responsável pela comunicação com as entidades
3. Adapters - tradução para a comunicação com os elementos externos, nesta camada costumamos ter os controllers, presenters repositories, fateways?
4. Mundo externo (frameworks e drivers).
5. Nada proíbe que existam mais camadas, desde que não quebre a regra da dependência (as dependências devem apontar sempre para o nível mais alto).

---

* The inner layer defines interfaces, and the outer layers define implementation to these interfaces.

---

DDD
- Linguagem universal
- Domínio -> razão do negócio existir -> subdomínio -> contexto delimitado (bounded context)
- Estruturação estratégica -> definição do context map
- Tática -> pensar em implementações

---

Exemplo: clean-arch-test

1. É criada a entidade, a camada mais alta da estrutur (src/Colaborador/Entity/Colaborador.php)
2. Cria-se a interface dos useCases, que é responsável pelas operações realizadas (src/Colaborador/UseCase/UseCaseInterface.php)
3. Cria o service que implementa a interface dos useCases.
4. Criar o adaptador do banco de dados para a aplicação.
5. Criar o controller que chama o service solicitado.

* Aqui utilizamos o 5º princípio do SOLID, o DIP (Dependency Inversion Principle / Princípio da Inversão de Dependência) - Como não podemos saber nada das classes concretas que estão mais internas na arquitetura, nós injetamos uma abstração que serve como base para aquela classe concreta. Sempre dependa de abstrações, e não das estruturas concretas.
