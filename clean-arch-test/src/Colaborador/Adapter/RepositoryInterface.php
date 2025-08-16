namespace Colaborador\Adapter

use Colaborador\Entity\Colaborador;

interface RepositoryInterface {
    public function find (int $id): Colaborador;
    public function search(string $query);
    public function findAll();
    public function store(Colaborador $colaborador): int;
    public function delete(int $id): bool;
}