<?php

namespace App\Controller;

use App\Entity\Stock;
use App\Repository\StockRepository;
use Doctrine\ORM\EntityManagerInterface;
use FOS\RestBundle\Controller\AbstractFOSRestController;
use FOS\RestBundle\Controller\Annotations\RequestParam;
use FOS\RestBundle\Controller\Annotations as Rest;
use FOS\RestBundle\Request\ParamFetcher;
use Symfony\Component\HttpFoundation\Response;

class StockController extends AbstractFOSRestController
{

    private $stockRepo;
    private $em;
    public function __construct(StockRepository $stockRepo, EntityManagerInterface $em)
    {
        $this->stockRepo = $stockRepo;
        $this->em = $em;
    }

    /**
     * GET all stock
     * 
     * @return Stock[]
     */
    public function getStocksAction()
    {
        return $this->view($this->stockRepo->findAll(), Response::HTTP_OK);
    }

    /**
     * 
     * @return Stock[]
     */
    public function getStocksAvailableAction()
    {
        return $this->view($this->stockRepo->findBy(['isAvailable' => 1]), Response::HTTP_OK);
    }

    /**
     * 
     * @return Stock[]
     * @Rest\RequestParam(name="type", description="filter stock", nullable=false)
     */
    public function postStocksFilterAction(ParamFetcher $paramFetcher)
    {
        $stock = null;
        switch (($paramFetcher->get('type'))) {
            case '1':
                return $stock = $this->stockRepo->findBy(['isAvailable' => 1]);

            case '2':
                return $stock = $this->stockRepo->findBy(['isAvailable' => 0]);

            default:
                return $stock = $this->stockRepo->findAll();
        }
        return $this->view($stock, Response::HTTP_OK);
    }

    /**
     * @Rest\RequestParam(name="libelle", description="libelle stock", nullable=false)
     * @Rest\RequestParam(name="type_qte", description="type quantité", nullable=false)
     * @Rest\RequestParam(name="qte", description="quanité stock ", nullable=false)
     * @param ParamFetcher $paramFetcher
     */
    public function postStocksAction(ParamFetcher $paramFetcher)
    {
        $libelle = ($paramFetcher->get('libelle'));
        $type_qte = ($paramFetcher->get('type_qte'));
        $qte = ($paramFetcher->get('qte'));

        if (!empty(trim($libelle)) && !is_null($type_qte) && !is_null($qte)) {

            $stock = new Stock();
            $stock->setLibelle($libelle);
            $stock->setTypeQte($type_qte);
            $stock->setIsAvailable(true);
            $stock->setQte($qte);

            $this->em->persist($stock);
            $this->em->flush();

            return $this->view(['message' => "stock ajout avec succés."], Response::HTTP_CREATED);
        }
        return $this->view(['message' => "erreur creattion stock."], Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
