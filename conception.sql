-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : ven. 17 déc. 2021 à 18:10
-- Version du serveur : 10.4.20-MariaDB
-- Version de PHP : 7.4.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `conception`
--

-- --------------------------------------------------------

--
-- Structure de la table `benefice`
--

CREATE TABLE `benefice` (
  `id` int(11) NOT NULL,
  `prix_total` int(11) NOT NULL,
  `commande_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `benefice`
--

INSERT INTO `benefice` (`id`, `prix_total`, `commande_id`, `created_at`, `updated_at`) VALUES
(1, 690, 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 691200, 3, '2021-12-17 19:03:12', '2021-12-17 19:03:12');

-- --------------------------------------------------------

--
-- Structure de la table `commande`
--

CREATE TABLE `commande` (
  `id` int(11) NOT NULL,
  `qte` int(11) NOT NULL,
  `repas_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `commande`
--

INSERT INTO `commande` (`id`, `qte`, `repas_id`, `created_at`, `updated_at`) VALUES
(1, 3, 30, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 2, 30, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 2, 3, '2021-12-17 19:03:11', '2021-12-17 19:03:11');

-- --------------------------------------------------------

--
-- Structure de la table `element`
--

CREATE TABLE `element` (
  `id` int(11) NOT NULL,
  `repos_id` int(11) NOT NULL,
  `stokes_id` int(11) NOT NULL,
  `qte` int(11) NOT NULL,
  `prix_unitaire` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `element`
--

INSERT INTO `element` (`id`, `repos_id`, `stokes_id`, `qte`, `prix_unitaire`) VALUES
(1, 11, 3, 5, 345),
(2, 20, 3, 6, 343),
(3, 20, 3, 6, 343),
(4, 20, 4, 34, NULL),
(5, 28, 1, 3, 3456),
(6, 28, 3, 5, 80),
(7, 28, 5, 4, NULL),
(8, 30, 1, 4, 2);

-- --------------------------------------------------------

--
-- Structure de la table `refresh_tokens`
--

CREATE TABLE `refresh_tokens` (
  `id` int(11) NOT NULL,
  `refresh_token` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `valid` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `repas`
--

CREATE TABLE `repas` (
  `id` int(11) NOT NULL,
  `libelle` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `img_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_valid` tinyint(1) NOT NULL,
  `prix_unitaire` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `is_element` tinyint(1) NOT NULL,
  `is_vente` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `repas`
--

INSERT INTO `repas` (`id`, `libelle`, `img_url`, `is_valid`, `prix_unitaire`, `created_at`, `updated_at`, `is_element`, `is_vente`) VALUES
(3, 'Frite', '/uploads_image/2d50829e6bbd458fc45f51ec87b6b33a.jpg', 1, '345600', '2021-12-16 07:45:32', '2021-12-17 17:22:11', 1, 1),
(4, 'Frite', '/uploads_image/ed782dc8ed965c896f6e0131fa11d6d4.jpg', 0, NULL, '2021-12-16 07:46:53', '2021-12-16 07:46:53', 0, 0),
(5, 'df', NULL, 0, NULL, '2021-12-16 10:26:21', '2021-12-16 10:26:21', 0, 0),
(6, 'pizza', NULL, 0, '335', '2021-12-16 16:29:53', '2021-12-16 16:29:53', 0, 0),
(7, 'omelette', NULL, 0, '23', '2021-12-16 16:36:29', '2021-12-16 16:36:29', 0, 0),
(8, 'pizza fromage', NULL, 0, '345', '2021-12-16 16:37:06', '2021-12-16 16:37:06', 0, 0),
(9, 'fe', NULL, 0, '345', '2021-12-16 16:37:48', '2021-12-16 16:37:48', 0, 0),
(10, 'oeuf dure', NULL, 0, '345', '2021-12-16 17:16:20', '2021-12-16 17:16:20', 0, 0),
(11, 'oeuf plat', NULL, 0, '345', '2021-12-16 17:17:15', '2021-12-16 17:17:15', 0, 0),
(12, 'pain choco', NULL, 0, '345', '2021-12-16 17:18:57', '2021-12-16 17:18:57', 0, 0),
(13, 'pain de raisin', NULL, 0, '345', '2021-12-16 17:21:57', '2021-12-16 17:21:57', 0, 0),
(14, 'fe', NULL, 0, '345', '2021-12-16 17:22:24', '2021-12-16 17:22:24', 0, 0),
(15, 'yaourt', NULL, 0, '34', '2021-12-16 17:27:50', '2021-12-16 17:27:50', 0, 0),
(16, 'salade de frite', NULL, 0, '345', '2021-12-16 17:28:27', '2021-12-16 17:28:27', 0, 0),
(17, 'poulet rotis', NULL, 0, '345', '2021-12-16 17:39:28', '2021-12-16 17:39:28', 0, 0),
(18, 'steacks salade', NULL, 0, '345', '2021-12-16 17:41:05', '2021-12-16 17:41:05', 0, 0),
(19, 'pizza feu de boi', NULL, 0, '34', '2021-12-16 17:47:15', '2021-12-16 17:47:15', 0, 0),
(20, 'mouse chocolat', NULL, 0, '23', '2021-12-16 17:49:49', '2021-12-16 17:49:49', 0, 0),
(21, 'Pizza', '/uploads_image/9733e3b359b2243455b8d57bca420d98.jpg', 0, '345', '2021-12-16 18:05:05', '2021-12-16 18:05:05', 0, 0),
(22, 'tarte feuille', NULL, 0, '34', '2021-12-16 18:09:03', '2021-12-16 18:09:03', 0, 0),
(23, 'salade frite', NULL, 0, '345', '2021-12-16 18:12:43', '2021-12-16 18:12:43', 0, 0),
(24, 'fe', NULL, 0, '345', '2021-12-16 18:14:52', '2021-12-16 18:14:52', 0, 0),
(25, 'meal', NULL, 0, '234', '2021-12-16 18:15:40', '2021-12-16 18:15:40', 0, 0),
(26, 'fritte', NULL, 0, '2345', '2021-12-16 18:16:21', '2021-12-16 18:16:21', 0, 0),
(27, 'poulet', NULL, 0, '345', '2021-12-16 18:17:49', '2021-12-16 18:17:49', 0, 0),
(28, 'cuisse de poulet', NULL, 0, '345', '2021-12-16 18:19:21', '2021-12-16 18:19:21', 0, 0),
(29, 'Omelette', NULL, 0, '450', '2021-12-16 19:08:32', '2021-12-16 19:08:32', 0, 0),
(30, 'halal', NULL, 1, '345', '2021-12-16 19:09:43', '2021-12-17 17:22:12', 1, 1),
(31, 'Poulet sauce frite', NULL, 0, '', '2021-12-17 09:45:18', '2021-12-17 09:45:18', 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `stock`
--

CREATE TABLE `stock` (
  `id` int(11) NOT NULL,
  `libelle` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type_qte` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `qte` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `stocks`
--

CREATE TABLE `stocks` (
  `id` int(11) NOT NULL,
  `libelle` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type_qte` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `qte` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `is_available` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `stocks`
--

INSERT INTO `stocks` (`id`, `libelle`, `type_qte`, `qte`, `created_at`, `updated_at`, `is_available`) VALUES
(1, 'Viande', 'g', 230, '2021-12-16 12:08:12', '2021-12-16 19:10:04', 1),
(2, 'Pomme de terre', 'g', 4590, '2021-12-16 12:08:15', '2021-12-16 12:08:15', 0),
(3, 'Frite', 'b', 55040, '2021-12-16 12:10:18', '2021-12-17 09:47:42', 1),
(4, 'mais bleu', 'g', 23900, '2021-12-16 17:54:08', '2021-12-17 08:31:14', 0),
(5, 'fraise', 'p', 45, '2021-12-16 18:20:05', '2021-12-16 18:20:05', 0);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `benefice`
--
ALTER TABLE `benefice`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_670D783982EA2E54` (`commande_id`);

--
-- Index pour la table `commande`
--
ALTER TABLE `commande`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_6EEAA67D1D236AAA` (`repas_id`);

--
-- Index pour la table `element`
--
ALTER TABLE `element`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_41405E39A213D4CB` (`repos_id`),
  ADD KEY `IDX_41405E39A9A85C2C` (`stokes_id`);

--
-- Index pour la table `refresh_tokens`
--
ALTER TABLE `refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_9BACE7E1C74F2195` (`refresh_token`);

--
-- Index pour la table `repas`
--
ALTER TABLE `repas`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `stock`
--
ALTER TABLE `stock`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `stocks`
--
ALTER TABLE `stocks`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `benefice`
--
ALTER TABLE `benefice`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `commande`
--
ALTER TABLE `commande`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `element`
--
ALTER TABLE `element`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `refresh_tokens`
--
ALTER TABLE `refresh_tokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `repas`
--
ALTER TABLE `repas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT pour la table `stock`
--
ALTER TABLE `stock`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `stocks`
--
ALTER TABLE `stocks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `benefice`
--
ALTER TABLE `benefice`
  ADD CONSTRAINT `FK_670D783982EA2E54` FOREIGN KEY (`commande_id`) REFERENCES `commande` (`id`);

--
-- Contraintes pour la table `commande`
--
ALTER TABLE `commande`
  ADD CONSTRAINT `FK_6EEAA67D1D236AAA` FOREIGN KEY (`repas_id`) REFERENCES `repas` (`id`);

--
-- Contraintes pour la table `element`
--
ALTER TABLE `element`
  ADD CONSTRAINT `FK_41405E39A213D4CB` FOREIGN KEY (`repos_id`) REFERENCES `repas` (`id`),
  ADD CONSTRAINT `FK_41405E39A9A85C2C` FOREIGN KEY (`stokes_id`) REFERENCES `stocks` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
