<?php

namespace App\Controller;

use App\Entity\Benefice;
use App\Entity\Commande;
use App\Entity\Repas;
use App\Repository\BeneficeRepository;
use App\Repository\CommandeRepository;
use Doctrine\ORM\EntityManagerInterface;
use FOS\RestBundle\Controller\AbstractFOSRestController;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\Annotations\RequestParam;
use FOS\RestBundle\Controller\Annotations as Rest;
use FOS\RestBundle\Request\ParamFetcher;

class CommandeController extends AbstractFOSRestController
{
    private $commandeRepo;
    private $beneficeRepo;
    private $em;
    public function __construct(CommandeRepository $commandeRepo, BeneficeRepository $beneficeRepo, EntityManagerInterface $em)
    {
        $this->commandeRepo = $commandeRepo;
        $this->beneficeRepo = $beneficeRepo;
        $this->em = $em;
    }

    /**
     * @return Commande[]
     */
    public function getCommandesAction()
    {
        return $this->view($this->commandeRepo->findAll(), Response::HTTP_OK);
    }

    /**
     * @return Benefice[]
     */
    public function getBeneficesAction()
    {
        return $this->view($this->beneficeRepo->findAll(), Response::HTTP_OK);
    }

    /**
     * @Rest\RequestParam(name="qte", description="quanité stock ", nullable=false)
     * @param ParamFetcher $paramFetcher
     * @param ParamFetcher $paramFetcher
     */
    public function postCommandeAction(Repas $repas, ParamFetcher $paramFetcher)
    {
        $qte = ($paramFetcher->get('qte'));

        if (!empty(trim($qte))) {

            $commande = new Commande();
            $commande->setQte($qte);
            $commande->setRepas($repas);
            $this->em->persist($commande);
            $this->em->flush();

            $benefice = new Benefice();
            $benefice->setCommande($commande);
            $benefice->setPrixTotal($qte * $repas->getPrixUnitaire());

            $this->em->persist($benefice);
            $this->em->flush();

            return $this->view(['message' => "commande ajout avec succés."], Response::HTTP_CREATED);
        }
        return $this->view(['message' => "erreur ajouter commande."], Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
