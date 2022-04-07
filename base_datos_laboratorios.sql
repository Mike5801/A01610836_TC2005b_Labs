-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-04-2022 a las 16:22:26
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `base_datos_laboratorios`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `registrarPiezaMusical` (IN `U_nombre` VARCHAR(255), IN `U_descripcion` INT(255), IN `u_video` INT(255))  INSERT INTO piezasmusicales(nombre, video, descripcion) VALUES (U_nombre,U_descripcion, U_video)$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `piezasmusicales`
--

CREATE TABLE `piezasmusicales` (
  `idPiezaMusical` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `descripcion` varchar(400) NOT NULL,
  `video` varchar(700) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `privilegio`
--

CREATE TABLE `privilegio` (
  `idPrivilegio` int(11) NOT NULL,
  `accion` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `privilegio`
--

INSERT INTO `privilegio` (`idPrivilegio`, `accion`) VALUES
(1, 'inicioAdmin'),
(2, 'inicioGeneral');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `idRol` int(11) NOT NULL,
  `descripcion_rol` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`idRol`, `descripcion_rol`) VALUES
(1, 'admin'),
(2, 'vistaGeneral');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles_privilegios`
--

CREATE TABLE `roles_privilegios` (
  `idRol` int(11) NOT NULL,
  `idPrivilegio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `roles_privilegios`
--

INSERT INTO `roles_privilegios` (`idRol`, `idPrivilegio`) VALUES
(1, 1),
(2, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `username` varchar(40) NOT NULL,
  `password` varchar(200) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `created_At` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`username`, `password`, `nombre`, `created_At`) VALUES
('MiguelA', '$2a$12$sJJbJrHXSYrQmaNNewSu0eAuXO0am8LQNHhYzz/PZILoaaS.iHLhm', 'MiguelAdmin', '2022-04-04 15:05:52'),
('MiguelF', '$2a$12$0TYA8nkJPNODfhPD5a0yt.E6zYNKZug232Of8rgB4cr6KTwoKZmdK', 'Miguel Feng', '2022-04-04 15:04:04'),
('MiguelT', '$2a$12$h3CMRrJO/4HOLTdycO2F5OsqNMISx1PAWL30bImrZ2WpWx3/N2lFW', 'Miguel Tang', '2022-04-04 15:02:35'),
('MiguelW', '$2a$12$FU8BBDGuAciPnumJYtu37.PSpxMcsjBwz8J8wJEqrLGR6xeaSBy0q', 'Miguel Weiping', '2022-04-04 15:03:06'),
('MiguelWTF', '$2a$12$OZqejLvYVgZAOABPop./e./EusrGxCn.io62WjHddXoSXNm.ywV/.', 'Miguel Weiping Tang Feng', '2022-04-04 15:05:28');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_roles`
--

CREATE TABLE `usuarios_roles` (
  `username` varchar(40) NOT NULL,
  `idRol` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios_roles`
--

INSERT INTO `usuarios_roles` (`username`, `idRol`) VALUES
('MiguelA', 1),
('MiguelWTF', 1),
('MiguelW', 2),
('MiguelT', 2),
('MiguelF', 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `piezasmusicales`
--
ALTER TABLE `piezasmusicales`
  ADD PRIMARY KEY (`idPiezaMusical`);

--
-- Indices de la tabla `privilegio`
--
ALTER TABLE `privilegio`
  ADD PRIMARY KEY (`idPrivilegio`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`idRol`);

--
-- Indices de la tabla `roles_privilegios`
--
ALTER TABLE `roles_privilegios`
  ADD KEY `index_idRol` (`idRol`),
  ADD KEY `index_idPrivilegio` (`idPrivilegio`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`username`);

--
-- Indices de la tabla `usuarios_roles`
--
ALTER TABLE `usuarios_roles`
  ADD KEY `index_username` (`username`),
  ADD KEY `index_idRol` (`idRol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `piezasmusicales`
--
ALTER TABLE `piezasmusicales`
  MODIFY `idPiezaMusical` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `roles_privilegios`
--
ALTER TABLE `roles_privilegios`
  ADD CONSTRAINT `fk_Privileigo_Rol` FOREIGN KEY (`idPrivilegio`) REFERENCES `privilegio` (`idPrivilegio`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_Rol_Privilegio` FOREIGN KEY (`idRol`) REFERENCES `roles` (`idRol`);

--
-- Filtros para la tabla `usuarios_roles`
--
ALTER TABLE `usuarios_roles`
  ADD CONSTRAINT `fk_rol_usuarios` FOREIGN KEY (`idRol`) REFERENCES `roles` (`idRol`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_usuarios_rol` FOREIGN KEY (`username`) REFERENCES `usuarios` (`username`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
