-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 29, 2017 at 04:16 AM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 7.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `simchafund`
--

-- --------------------------------------------------------

--
-- Table structure for table `contributors`
--

CREATE TABLE `contributors` (
  `id` int(150) NOT NULL,
  `name` varchar(50) NOT NULL,
  `balance` int(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contributors`
--

INSERT INTO `contributors` (`id`, `name`, `balance`) VALUES
(21, 'Werner', 95),
(22, 'Wiess', 95),
(23, 'Leiff', 95),
(25, 'Alpert', 100),
(26, 'Berger', 85),
(27, 'Cohen', 85),
(28, 'Eisen', 95),
(29, 'Fried', 90),
(30, 'Heller', 95),
(31, 'Gross', 85),
(32, 'Klein', 95),
(33, 'Miller', 90),
(34, 'Pinter', 90),
(35, 'Reich', 90),
(36, 'Stein', 70);

-- --------------------------------------------------------

--
-- Table structure for table `details`
--

CREATE TABLE `details` (
  `donorid` int(150) NOT NULL,
  `simchaid` int(150) NOT NULL,
  `amount` int(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `details`
--

INSERT INTO `details` (`donorid`, `simchaid`, `amount`) VALUES
(26, 15, 5),
(28, 15, 5),
(31, 15, 15),
(22, 13, 5),
(21, 13, 5),
(35, 13, 5),
(33, 13, 5),
(30, 13, 5),
(29, 12, 10),
(33, 12, 5),
(32, 12, 5),
(36, 14, 15),
(36, 14, 15),
(27, 14, 15),
(25, 14, 5),
(26, 14, 5),
(35, 14, 5),
(26, 14, 5);

-- --------------------------------------------------------

--
-- Table structure for table `simchas`
--

CREATE TABLE `simchas` (
  `id` int(150) NOT NULL,
  `name` varchar(50) NOT NULL,
  `type` varchar(50) NOT NULL,
  `balance` int(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `simchas`
--

INSERT INTO `simchas` (`id`, `name`, `type`, `balance`) VALUES
(12, 'Katz', 'Bar Mitzva', 20),
(13, 'Green', 'Sheva Brachos', 25),
(14, 'Schwab', 'Bris', 65),
(15, 'Berlin', 'Affruf', 25);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contributors`
--
ALTER TABLE `contributors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `details`
--
ALTER TABLE `details`
  ADD KEY `donorid` (`donorid`),
  ADD KEY `simchaid` (`simchaid`);

--
-- Indexes for table `simchas`
--
ALTER TABLE `simchas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contributors`
--
ALTER TABLE `contributors`
  MODIFY `id` int(150) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
--
-- AUTO_INCREMENT for table `simchas`
--
ALTER TABLE `simchas`
  MODIFY `id` int(150) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `details`
--
ALTER TABLE `details`
  ADD CONSTRAINT `details_ibfk_1` FOREIGN KEY (`donorid`) REFERENCES `contributors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `details_ibfk_2` FOREIGN KEY (`simchaid`) REFERENCES `simchas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
