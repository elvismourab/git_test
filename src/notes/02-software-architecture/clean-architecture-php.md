# Exemplo de Clean Architecture com PHP

## 🎯 Objetivo

Este documento serve como um guia para um exemplo prático e minimalista de **Clean Architecture** em PHP. O objetivo é demonstrar como as camadas se comunicam e como a inversão de dependência é utilizada para criar um sistema desacoplado e testável.

## 📂 Estrutura de Arquivos

A estrutura do projeto é organizada por funcionalidade (`Colaborador`) e, dentro dela, por camadas da Clean Architecture:

```
.
└── Colaborador/
    ├── Adapter/
    │   ├── DatabaseRepository.php
    │   └── RepositoryInterface.php
    ├── Controller/
    │   └── IndexHandler.php
    ├── Entity/
    │   └── Colaborador.php
    └── UseCase/
        ├── Service.php
        └── UseCaseInterface.php
```

## 📚 Camadas

### 1. Entity (Entidade)

A camada mais interna. Representa os objetos e as regras de negócio mais puras do sistema. Não depende de nenhuma outra camada.

**`Entity/Colaborador.php`**
```php
<?php

namespace Colaborador\Entity;

class Colaborador
{
    public $id;
    public $nomeCompleto;
    public $cargo;
    public $setor;
}
```

### 2. Use Case (Caso de Uso)

Contém a lógica de negócio da aplicação. Orquestra o fluxo de dados, utilizando as entidades para realizar as ações. Note que o `Service` depende de uma `RepositoryInterface`, e não de uma implementação concreta.

**`UseCase/UseCaseInterface.php`**
```php
<?php

namespace Colaborador\UseCase;

use Colaborador\Entity\Colaborador;
use Colaborador\Adapter\RepositoryInterface;

interface UseCaseInterface
{
    public function __construct(RepositoryInterface $repository);
    public function search(string $query);
    public function findAll();
    public function store(Colaborador $colaborador): int;
    public function delete(int $id): bool;
}
```

**`UseCase/Service.php`**
```php
<?php

namespace Colaborador\UseCase;

use Colaborador\Entity\Colaborador;
use Colaborador\Adapter\RepositoryInterface;

class Service implements UseCaseInterface
{
    private $repository;

    public function __construct(RepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    public function search(string $query)
    {
        return $this->repository->search($query);
    }

    public function findAll()
    {
        return $this->repository->findAll();
    }

    public function store(Colaborador $colaborador): int
    {
        return $this->repository->store($colaborador);
    }

    public function delete(int $id): bool
    {
        return $this->repository->delete($id);
    }
}
```

### 3. Adapter (Adaptador)

A camada de "tradução". Conecta o mundo externo (frameworks, banco de dados) com os casos de uso. É aqui que a **inversão de dependência** acontece.

**`Adapter/RepositoryInterface.php`**
Define o contrato que o `Service` (Use Case) espera.

```php
<?php

namespace Colaborador\Adapter;

use Colaborador\Entity\Colaborador;

interface RepositoryInterface
{
    public function find(int $id): Colaborador;
    public function search(string $query);
    public function findAll();
    public function store(Colaborador $colaborador): int;
    public function delete(int $id): bool;
}
```

**`Adapter/DatabaseRepository.php`**
A implementação concreta do repositório, que poderia usar MySQL, PostgreSQL, etc. Esta classe implementa a `RepositoryInterface`.

```php
<?php

namespace Colaborador\Adapter;

use Colaborador\Entity\Colaborador;

class DatabaseRepository implements RepositoryInterface
{
    public function find(int $id): Colaborador
    {
        // implementação
    }

    public function search(string $query)
    {
        // implementação
    }

    public function findAll()
    {
        // implementação
    }

    public function store(Colaborador $colaborador): int
    {
        // implementação
    }

    public function delete(int $id): bool
    {
        // implementação
    }
}
```

### 4. Controller

O ponto de entrada da aplicação (framework/web). Recebe a requisição, chama o `Service` (Use Case) e retorna uma resposta.

**`Controller/IndexHandler.php`**
```php
<?php

namespace Colaborador\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Zend\Diactoros\Response\JsonResponse;
use Colaborador\UseCase\UseCaseInterface;

class IndexHandler implements RequestHandlerInterface
{
    private $service;

    public function __construct(UseCaseInterface $service)
    {
        $this->service = $service;
    }

    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $all = $this->service->findAll();
        return new JsonResponse($all);
    }
}
```

## 🔑 Conceito-Chave: Inversão de Dependência

O `Service` (Use Case) não depende diretamente do `DatabaseRepository`. Em vez disso, ele depende da `RepositoryInterface`. Isso permite que a implementação do repositório seja trocada sem que nenhuma linha de código no `Service` precise ser alterada, tornando o sistema flexível e fácil de testar.