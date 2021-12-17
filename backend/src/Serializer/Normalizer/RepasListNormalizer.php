<?php

declare(strict_types=1);

namespace App\Serializer\Normalizer;

use App\Entity\Repas;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;

class RepasListNormalizer implements NormalizerInterface
{

    private $objectNormalizer;

    public function __construct(ObjectNormalizer $objectNormalizer)
    {
        $this->objectNormalizer = $objectNormalizer;
    }

    public function normalize($object, ?string $format = null, array $context = [])
    {
        // $context['ignored_attributes'] = ['user', 'createdAt', 'updatedAt'];

        $object->setImgURL(
            !is_null($object->getImgURL())
                ? 'http://localhost:8000/' . $object->getImgURL()
                : 'http://localhost:8000/default.jpg'
        );

        return $this->objectNormalizer->normalize($object, $format, $context);
    }

    public function supportsNormalization($data, ?string $format = null)
    {
        return $data instanceof Repas;
    }
}
