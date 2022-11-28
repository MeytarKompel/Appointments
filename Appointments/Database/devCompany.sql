-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 29, 2022 at 05:05 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `devCompany`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointments`
--

CREATE TABLE `appointments` (
  `appointId` int(11) NOT NULL,
  `teamId` int(11) NOT NULL,
  `startDate` datetime NOT NULL,
  `endDate` datetime NOT NULL,
  `description` varchar(50) NOT NULL,
  `appointRoom` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `appointments`
--

INSERT INTO `appointments` (`appointId`, `teamId`, `startDate`, `endDate`, `description`, `appointRoom`) VALUES
(1, 1, '2022-09-30 10:00:00', '2022-09-30 11:00:00', 'Bug Checking', 'Hefer Room'),
(2, 2, '2022-10-02 13:30:00', '2022-10-02 15:00:00', 'Technical DR', 'Amir Room'),
(3, 3, '2022-10-06 09:30:00', '2022-10-06 12:00:00', 'New Features Explanation', 'Big Green Room'),
(4, 4, '2022-10-09 14:00:00', '2022-10-09 18:01:10', 'New Branding Design', 'New Meeting Room');

-- --------------------------------------------------------

--
-- Table structure for table `devTeams`
--

CREATE TABLE `devTeams` (
  `teamId` int(11) NOT NULL,
  `teamName` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `devTeams`
--

INSERT INTO `devTeams` (`teamId`, `teamName`) VALUES
(1, 'IOS Team'),
(2, 'Java Team'),
(3, 'React Team'),
(4, 'UI Team');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`appointId`),
  ADD KEY `teamId` (`teamId`);

--
-- Indexes for table `devTeams`
--
ALTER TABLE `devTeams`
  ADD PRIMARY KEY (`teamId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `appointId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `devTeams`
--
ALTER TABLE `devTeams`
  MODIFY `teamId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `appointments`
--
ALTER TABLE `appointments`
  ADD CONSTRAINT `appointments_ibfk_1` FOREIGN KEY (`teamId`) REFERENCES `devTeams` (`teamId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
