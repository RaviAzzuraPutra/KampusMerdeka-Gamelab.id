-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 20, 2022 at 08:19 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.4.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `belajar_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_member`
--

CREATE TABLE IF NOT EXISTS `tbl_member` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `creation_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `gender` tinyint(4) DEFAULT NULL,
  `status` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_member`
--

INSERT INTO `tbl_member` (`id`, `creation_time`, `update_time`, `username`, `password`, `name`, `gender`, `status`) VALUES
(1, '2022-04-20 13:03:09', '2022-04-20 13:03:09', 'Bima Gamelab', '123', 'bima', 0, 1),
(2, '2022-04-20 13:03:09', '2022-04-20 13:03:09', 'Candra Gamelab', '123', 'candra', 0, 1),
(3, '2022-04-20 13:03:09', '2022-04-20 13:03:09', 'Dewi Gamelab', '123', 'dewi', 1, 1),
(4, '2022-04-20 13:03:09', '2022-04-20 13:03:09', 'Berta Gamelab', '123', 'berta', 1, 0),
(5, '2022-04-20 13:03:09', '2022-04-20 13:03:09', 'Rendra Gamelab', '123', 'rendra', 0, 0),
(6, '2022-04-20 13:03:09', '2022-04-20 13:03:09', 'Fira Gamelab', '123', 'fira', 1, 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
