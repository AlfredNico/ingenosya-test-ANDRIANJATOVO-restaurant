<?php

namespace App\Entity;

use App\Repository\CommandeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CommandeRepository::class)
 */
class Commande
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
     * @ORM\ManyToOne(targetEntity=Repas::class, inversedBy="commandes")
     * @ORM\JoinColumn(nullable=false)
     */
    private $repas;

    /**
     * @ORM\OneToMany(targetEntity=Benefice::class, mappedBy="commande", orphanRemoval=true)
     */
    private $benefices;

    public function __construct()
    {
        $this->benefices = new ArrayCollection();
    }

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

    public function getRepas(): ?Repas
    {
        return $this->repas;
    }

    public function setRepas(?Repas $repas): self
    {
        $this->repas = $repas;

        return $this;
    }

    /**
     * @return Collection|Benefice[]
     */
    public function getBenefices(): Collection
    {
        return $this->benefices;
    }

    public function addBenefice(Benefice $benefice): self
    {
        if (!$this->benefices->contains($benefice)) {
            $this->benefices[] = $benefice;
            $benefice->setCommande($this);
        }

        return $this;
    }

    public function removeBenefice(Benefice $benefice): self
    {
        if ($this->benefices->removeElement($benefice)) {
            // set the owning side to null (unless already changed)
            if ($benefice->getCommande() === $this) {
                $benefice->setCommande(null);
            }
        }

        return $this;
    }
}
