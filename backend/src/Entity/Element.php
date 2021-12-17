<?php

namespace App\Entity;

use App\Repository\ElementRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ElementRepository::class)
 */
class Element
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $qte;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $prix_unitaire;

    /**
     * @ORM\ManyToOne(targetEntity=Repas::class, inversedBy="elements")
     * @ORM\JoinColumn(nullable=false)
     */
    private $repos;

    /**
     * @ORM\ManyToOne(targetEntity=Stock::class, inversedBy="elements")
     * @ORM\JoinColumn(nullable=false)
     */
    private $stokes;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getQte(): ?int
    {
        return $this->qte;
    }

    public function setQte(int $qte): self
    {
        $this->qte = $qte;

        return $this;
    }

    public function getPrixUnitaire(): ?int
    {
        return $this->prix_unitaire;
    }

    public function setPrixUnitaire(?int $prix_unitaire): self
    {
        $this->prix_unitaire = $prix_unitaire;

        return $this;
    }

    public function getRepos(): ?Repas
    {
        return $this->repos;
    }

    public function setRepos(?Repas $repos): self
    {
        $this->repos = $repos;

        return $this;
    }

    public function getStokes(): ?Stock
    {
        return $this->stokes;
    }

    public function setStokes(?Stock $stokes): self
    {
        $this->stokes = $stokes;

        return $this;
    }
}
