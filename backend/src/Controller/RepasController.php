<?php

namespace App\Controller;

use App\Entity\Element;
use App\Entity\Repas;
use App\Entity\Stock;
use App\Repository\ElementRepository;
use App\Repository\RepasRepository;
use App\Repository\StockRepository;
use Doctrine\ORM\EntityManagerInterface;
use FOS\RestBundle\Controller\AbstractFOSRestController;
use FOS\RestBundle\Controller\Annotations\RequestParam;
use FOS\RestBundle\Controller\Annotations as Rest;
use FOS\RestBundle\Request\ParamFetcher;
use Symfony\Component\HttpFoundation\Response;


class RepasController extends AbstractFOSRestController
{

    private $repasRepo;
    private $stockRepo;
    private $elementRepo;
    private $em;

    public function __construct(RepasRepository $repasRepo, StockRepository $stockRepo, ElementRepository $elementRepo, EntityManagerInterface $em)
    {
        $this->repasRepo = $repasRepo;
        $this->stockRepo = $stockRepo;
        $this->elementRepo = $elementRepo;
        $this->em = $em;
    }
    /**
     * GET all repas
     *
     * @return Repas[]
     */
    public function getRepasAction()
    {
        return $this->view($this->repasRepo->findAll(), Response::HTTP_OK);
    }

    /**
     * GET all repas
     *
     * @return Repas[]
     */
    public function getRepasVenteAction()
    {
        return $this->view($this->repasRepo->getVenteProduit(), Response::HTTP_OK);
    }

    /**
     * @param string $id
     */
    public function getRepasIngredientAction(string $id)
    {
        $element = $this->elementRepo->findIngrediant($id);

        return $this->view($element, Response::HTTP_CREATED);
    }

    /**
     * @return Repas[]
     */
    public function getRepasValidVenteAction()
    {
        return $this->view($this->repasRepo->findBy(['isVente' => 1]), Response::HTTP_CREATED);
    }

    /**
     * @param Repas $repas
     */
    public function getRepaToVenteAction(Repas $repas)
    {
        if (is_null($repas)) {
            return $this->view(['message' => "repas non trouvé."], Response::HTTP_NOT_FOUND);
        }

        if ($repas->getIsVente() === true) {
            $repas->setIsVente(!$repas->getIsVente());
            $this->em->persist($repas);
            $this->em->flush();
            return $this->view(['message' => "repas supprimer dans le vente."], Response::HTTP_CREATED);
        } else {
            $repas->setIsVente(!$repas->getIsVente());
            $this->em->persist($repas);
            $this->em->flush();
            return $this->view(['message' => "repas ajouter en vente."], Response::HTTP_CREATED);
        }
    }
    /**
     * @Rest\RequestParam(name="prix_unitaire", description="prix repas", nullable=false)
     * @param ParamFetcher $paramFetcher
     * @param Repas $repas
     */
    public function postRepaAddPriceAction(Repas $repas, ParamFetcher $paramFetcher)
    {
        if (is_null($repas)) {
            return $this->view(['message' => "repas non trouvé."], Response::HTTP_NOT_FOUND);
        }
        $prix_unitaire = ($paramFetcher->get('prix_unitaire'));

        if (!empty(trim($prix_unitaire))) {
            $repas->setPrixUnitaire($prix_unitaire);
            $this->em->persist($repas);
            $this->em->flush();
            return $this->view(['message' => "Prix repas ajouter avec succées."], Response::HTTP_CREATED);
        }
        return $this->view(['message' => "Errer."], Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Rest\RequestParam(name="libelle", description="libelle repas", nullable=false)
     * @Rest\RequestParam(name="prix_unitaire", description="Prix unitaire repas", nullable=false)
     * @Rest\FileParam(name="file", description="image repa", nullable=true, image=true)
     * @param ParamFetcher $paramFetcher
     */
    public function postRepasAction(ParamFetcher $paramFetcher)
    {
        $libelle = ($paramFetcher->get('libelle'));
        $prix_unitaire = ($paramFetcher->get('prix_unitaire'));
        $file =   trim($paramFetcher->get('file')) != "" ?  ($paramFetcher->get('file')) : '';

        if (!empty(trim($libelle))) {

            $repas = new Repas();
            $repas->setLibelle($libelle);
            $repas->setPrixUnitaire($prix_unitaire);

            if ($file) {
                $fileName = md5(uniqid()) . '.' . $file->guessClientExtension();
                $file->move(
                    $this->getParameter('uploads_directory'),
                    $fileName
                );
                $repas->setImgURL("/uploads_image/" . $fileName);
            }

            $this->em->persist($repas);
            $this->em->flush();

            return $this->view($repas, Response::HTTP_CREATED);
        }
        return $this->view(['message' => "erreur creattion repas."], Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    // * @Rest\RequestParam(name="id", description="id repas", nullable=false)
    /**
     * @Rest\RequestParam(name="inStock", description="in stock", nullable=false)
     * @Rest\RequestParam(name="noStock", description="no in stock", nullable=false)
     * @param ParamFetcher $paramFetcher
     */
    public function postRepasElementAction(Repas $repas, ParamFetcher $paramFetcher)
    {
        if (is_null($repas)) {
            return $this->view(['message' => "repas non trouvé."], Response::HTTP_NOT_FOUND);
        }

        // $id = ($paramFetcher->get('id'));
        $inStock = ($paramFetcher->get('inStock'));
        $noStock = ($paramFetcher->get('noStock'));

        foreach ($inStock as $key => $value) {
            // dd($value['labelle']);
            $stock = $this->stockRepo->find($value['id']);
            $qté_restant = $stock->getQte() - $value['qte'];
            $stock->setQte($qté_restant);
            $element = new Element();
            $element->setQte($value['qte']);
            $element->setPrixUnitaire($value['prix_unitaire']);
            $element->setRepos($repas);
            $element->setStokes($stock);

            $this->em->persist($stock);
            $this->em->persist($element);
        }

        foreach ($noStock as $key => $value) {
            $stock = new Stock();
            $stock->setLibelle($value['libelle']);
            $stock->setTypeQte($value['type_qte']);
            $stock->setIsAvailable($value['isAvailable']);
            $stock->setQte($value['qte']);

            $element = new Element();
            $element->setQte($value['qte']);
            // $element->setPrixUnitaire($value['prix_unitaire']);
            $element->setRepos($repas);
            $element->setStokes($stock);

            $this->em->persist($stock);
            $this->em->persist($element);
        }

        $repas->setIsValid(true);
        if (sizeof($noStock) == 0) {
            $repas->setIsElement(true);
        }
        $this->em->persist($repas);

        $this->em->flush();

        return $this->view(['message' => "Repas ajout avec succés"], Response::HTTP_OK);
    }
}
