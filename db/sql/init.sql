CREATE DATABASE IF NOT EXISTS mclinktree;

USE mclinktree; 

CREATE TABLE IF NOT EXISTS `__EFMigrationsHistory` (
    `MigrationId` varchar(95) NOT NULL,
    `ProductVersion` varchar(32) NOT NULL,
    CONSTRAINT `PK___EFMigrationsHistory` PRIMARY KEY (`MigrationId`)
);

CREATE TABLE `CategoriaLink` (
    `Id` int NOT NULL AUTO_INCREMENT,
    `Nome` nvarchar(50) NOT NULL,
    `Descricao` longtext CHARACTER SET utf8mb4 NULL,
    `Ico` nvarchar(10) NOT NULL,
    `Posicao` int NOT NULL,
    `DtInclusao` datetime NOT NULL,
    `DtAtualizacao` datetime NULL,
    `Ativo` tinyint(1) NOT NULL,
    CONSTRAINT `PK_CategoriaLink` PRIMARY KEY (`Id`)
);

CREATE TABLE `Link` (
    `Id` int NOT NULL AUTO_INCREMENT,
    `Nome` longtext CHARACTER SET utf8mb4 NULL,
    `Descricao` longtext CHARACTER SET utf8mb4 NULL,
    `UrlLink` longtext CHARACTER SET utf8mb4 NULL,
    `DtInclusao` datetime(6) NOT NULL,
    `DtAlteracao` datetime(6) NOT NULL,
    `Ativo` tinyint(1) NOT NULL,
    CONSTRAINT `PK_Link` PRIMARY KEY (`Id`)
);

CREATE UNIQUE INDEX `IDX_UniqueCategoria` ON `CategoriaLink` (`Id`);

INSERT INTO `__EFMigrationsHistory` (`MigrationId`, `ProductVersion`)
VALUES ('20210306191811_DBInit', '3.1.12');

ALTER TABLE `Link` DROP COLUMN `DtAlteracao`;

ALTER TABLE `Link` MODIFY COLUMN `UrlLink` nvarchar(500) NOT NULL;

ALTER TABLE `Link` MODIFY COLUMN `Nome` nvarchar(50) NOT NULL;

ALTER TABLE `Link` MODIFY COLUMN `DtInclusao` datetime NOT NULL;

ALTER TABLE `Link` ADD `DtAtualizacao` datetime NULL;

CREATE UNIQUE INDEX `IDX_UniqueLink` ON `Link` (`Id`);

INSERT INTO `__EFMigrationsHistory` (`MigrationId`, `ProductVersion`)
VALUES ('20210306192636_UpdateLinkTable', '3.1.12');

ALTER TABLE `Link` ADD `IdCategoriaLink` int NOT NULL DEFAULT 0;

CREATE INDEX `IX_Link_IdCategoriaLink` ON `Link` (`IdCategoriaLink`);

ALTER TABLE `Link` ADD CONSTRAINT `FK_Link_CategoriaLink` FOREIGN KEY (`IdCategoriaLink`) REFERENCES `CategoriaLink` (`Id`);

INSERT INTO `__EFMigrationsHistory` (`MigrationId`, `ProductVersion`)
VALUES ('20210306193130_AddRelationshipLinkToCategoriaLink', '3.1.12');

ALTER TABLE `Link` ADD `CategoriaLinkId` int NULL;

CREATE INDEX `IX_Link_CategoriaLinkId` ON `Link` (`CategoriaLinkId`);

ALTER TABLE `Link` ADD CONSTRAINT `FK_Link_CategoriaLink_CategoriaLinkId` FOREIGN KEY (`CategoriaLinkId`) REFERENCES `CategoriaLink` (`Id`) ON DELETE RESTRICT;

INSERT INTO `__EFMigrationsHistory` (`MigrationId`, `ProductVersion`)
VALUES ('20210307011637_FixRelationShip', '3.1.12');

ALTER TABLE `Link` DROP FOREIGN KEY `FK_Link_CategoriaLink_CategoriaLinkId`;

ALTER TABLE `Link` DROP FOREIGN KEY `FK_Link_CategoriaLink`;

ALTER TABLE `Link` DROP INDEX `IX_Link_IdCategoriaLink`;

ALTER TABLE `Link` DROP COLUMN `IdCategoriaLink`;

ALTER TABLE `Link` MODIFY COLUMN `CategoriaLinkId` int NOT NULL;

ALTER TABLE `Link` ADD CONSTRAINT `FK_Link_CategoriaLink_CategoriaLinkId` FOREIGN KEY (`CategoriaLinkId`) REFERENCES `CategoriaLink` (`Id`) ON DELETE CASCADE;

INSERT INTO `__EFMigrationsHistory` (`MigrationId`, `ProductVersion`)
VALUES ('20210307011925_FixRelationShipAndRemoveWrongKey', '3.1.12');

