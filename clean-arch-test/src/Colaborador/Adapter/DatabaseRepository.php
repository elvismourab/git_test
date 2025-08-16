namespace Colaborador\Adapter;

use Colaborador\Entity\Colaborador;

class DatabaseRepository implements RepositoryInterface {
    public function find(int $id) : Colaborador {
        //implementação
    }

    public function search(string $query) {
        //implementação
    }

    public function findAll() {
        //implementação
    }

    public function store(Colaborador $colaborador): int {
        //implementação
    }

    public function delete(int $id): bool {
        //implementação
    }
}