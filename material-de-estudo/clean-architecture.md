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

