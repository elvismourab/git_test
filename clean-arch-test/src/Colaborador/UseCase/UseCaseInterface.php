namespace Colaborador\UseCase;

use Colaborador\Entity\Colaborador;
use Colaborador\Adapter\RepositoryInterface;

interface UseCaseInterface {
    public function __construct(RepositoryInterface $repository);
    public function search(string $query);
    public function findAll();
    public function store(Colaborador $colaborador): int;
    public function delete(int $id): bool;
}
