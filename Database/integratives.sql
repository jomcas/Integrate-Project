-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 14, 2020 at 12:13 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `integratives`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `Username` varchar(100) NOT NULL,
  `Password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `Username`, `Password`) VALUES
(1, 'Admin', 'HelloWorld12345');

-- --------------------------------------------------------

--
-- Table structure for table `english_table`
--

CREATE TABLE `english_table` (
  `id` int(50) NOT NULL,
  `Lesson_Name` varchar(50) NOT NULL,
  `Score` varchar(50) NOT NULL,
  `Passing_Score` varchar(50) NOT NULL,
  `No_Items` varchar(50) NOT NULL,
  `Status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `filipino_table`
--

CREATE TABLE `filipino_table` (
  `id` int(50) NOT NULL,
  `Lesson_Name` varchar(50) NOT NULL,
  `Score` varchar(50) NOT NULL,
  `Passing_Score` varchar(50) NOT NULL,
  `No_Items` varchar(50) NOT NULL,
  `Status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `math_table`
--

CREATE TABLE `math_table` (
  `id` int(50) NOT NULL,
  `Lesson_Name` varchar(50) NOT NULL,
  `Score` varchar(50) NOT NULL,
  `Passing_Score` varchar(50) NOT NULL,
  `No_Items` varchar(50) NOT NULL,
  `Status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `reg_stud`
--

CREATE TABLE `reg_stud` (
  `id` int(11) NOT NULL,
  `Last_Name` varchar(255) NOT NULL,
  `First_Name` varchar(255) NOT NULL,
  `Birthday` varchar(255) NOT NULL,
  `Age` int(255) NOT NULL,
  `Guard_Name` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Phone_Num` varchar(50) NOT NULL,
  `Username` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `reg_stud`
--

INSERT INTO `reg_stud` (`id`, `Last_Name`, `First_Name`, `Birthday`, `Age`, `Guard_Name`, `Email`, `Phone_Num`, `Username`, `Password`) VALUES
(20, 'Oredina', 'Alfonso', '2011-04-06', 12, 'Madonna', 'alfs@gmail.com', '2147483647', 'Alfs12', 'HelloWorld12345'),
(44, 'Villanueva', 'MJ', '2011-02-01', 9, 'Gemma', 'Jelyka@gmail.com', '2147483647', 'Jelyka14', 'WalWal14'),
(45, 'Lagan', 'Joshua', '2011-03-02', 9, 'Abi', 'joshua@gmail.com', '2147483647', 'Joshua09', 'WildRift09'),
(46, 'Maritana', 'Gabrielle', '2011-11-05', 9, 'Anthony', 'Maritan@gmail.com', '09234567891', 'Maritana05', 'Maritana12'),
(47, 'Mercado', 'Jimuel', '2020-11-12', 10, 'Aira', 'mercadojimuel@gmail.com', '09856452152', 'Mercadojims', 'JImuel@12');

-- --------------------------------------------------------

--
-- Table structure for table `science_table`
--

CREATE TABLE `science_table` (
  `id` int(50) NOT NULL,
  `Lesson_Name` varchar(50) NOT NULL,
  `Score` varchar(50) NOT NULL,
  `Passing_Score` varchar(50) NOT NULL,
  `No_Items` varchar(50) NOT NULL,
  `Status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `english_table`
--
ALTER TABLE `english_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `filipino_table`
--
ALTER TABLE `filipino_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `math_table`
--
ALTER TABLE `math_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reg_stud`
--
ALTER TABLE `reg_stud`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `science_table`
--
ALTER TABLE `science_table`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `english_table`
--
ALTER TABLE `english_table`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `filipino_table`
--
ALTER TABLE `filipino_table`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `math_table`
--
ALTER TABLE `math_table`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reg_stud`
--
ALTER TABLE `reg_stud`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `science_table`
--
ALTER TABLE `science_table`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
