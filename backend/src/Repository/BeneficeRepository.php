<?php

namespace App\Repository;

use App\Entity\Benefice;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Benefice|null find($id, $lockMode = null, $lockVersion = null)
 * @method Benefice|null findOneBy(array $criteria, array $orderBy = null)
 * @method Benefice[]    findAll()
 * @method Benefice[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BeneficeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Benefice::class);
    }

    // /**
    //  * @return Benefice[] Returns an array of Benefice objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('b.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Benefice
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
