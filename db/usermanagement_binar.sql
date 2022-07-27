-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 27, 2022 at 06:48 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `usermanagement_binar`
--

-- --------------------------------------------------------

--
-- Table structure for table `userhistory`
--

CREATE TABLE `userhistory` (
  `fullname` varchar(45) NOT NULL,
  `history` varchar(45) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fullname` varchar(45) NOT NULL,
  `status` varchar(10) NOT NULL DEFAULT 'active',
  `comment` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `fullname`, `status`, `comment`) VALUES
(1, 'asdaf@gmail.com', '$2a$10$T.rNMyn7XC5XSgfKN3/f1edFiEVnxuphwjdG6SiFsk5LHSbo7HJYy', 'alodi', 'active', ''),
(2, 'asf@gmail.com', '$2a$10$t.Q5/P/FMuy1.YcZZVQwqedzBkjooCy9TE1Mc1rla7Uhn7lZoL91e', 'alodiskywalk', 'active', ''),
(3, 'admin123@gmail.com', '$2a$10$UdOAAX/GIh/Zmg58IVSmOeyZDc9i2qWQtqDupsNIpPGn7UnZrBtP.', 'admin', 'active', ''),
(4, 'vito@gmail.com', '$2a$10$FmJtjCsIFrGf4SrSEqYk2.2oN2ha6UfX7UrZcgT.5LKSvgI7Y.f5e', 'vito', 'active', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
