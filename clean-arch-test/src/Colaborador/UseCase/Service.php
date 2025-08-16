namespace Colaborador\UseCase;

use Colaborador\Entity\Colaborador;
use Colaborador\Adapter\RepositoryInterface;

class Service implements UseCaseInterface {
    private $repository;

    public function __construct(RepositoryInterface $repository) {
        $this->repository = $repository;
    }

    public function search(string $query) {
        return $this->repository->search($query)
    }

    public function findAll() {
        return $this->repository->findAll();
    }

    public function store(Colaborador $colaborador): int {
        return $this->repository->store($bookmark);
    }

    public function delete(int $id): bool {
        return $this->repository->delete($id);
    }
}
