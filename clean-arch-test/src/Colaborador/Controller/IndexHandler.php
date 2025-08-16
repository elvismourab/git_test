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
