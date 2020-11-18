-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 16, 2020 at 04:44 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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
CREATE DATABASE integratives;

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

--
-- Dumping data for table `math_table`
--

INSERT INTO `math_table` (`id`, `Lesson_Name`, `Score`, `Passing_Score`, `No_Items`, `Status`) VALUES
(1, 'Subtraction', '4', '8', '10', 'failed'),
(2, 'Time', '4', '8', '10', 'failed'),
(3, 'Fraction', '6', '8', '10', 'failed'),
(4, 'Addition', '5', '8', '10', 'failed'),
(5, 'Money', '8', '8', '10', 'passed'),
(8, 'Counting Numbers', '9', '8', '10', 'passed');

-- --------------------------------------------------------

--
-- Table structure for table `progress`
--

CREATE TABLE `progress` (
  `progress_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `subject` varchar(10) NOT NULL,
  `done` int(11) NOT NULL,
  `total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `progress`
--

INSERT INTO `progress` (`progress_id`, `user_id`, `subject`, `done`, `total`) VALUES
(6, 49, 'ENGLISH', 0, 8),
(7, 49, 'FILIPINO', 0, 9),
(8, 49, 'SCIENCE', 0, 5),
(9, 49, 'MATH', 1, 8);

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
(47, 'Mercado', 'Jimuel', '2020-11-12', 10, 'Aira', 'mercadojimuel@gmail.com', '09856452152', 'Mercadojims', 'JImuel@12'),
(48, 'Kim', 'Dahyun', '2010-05-28', 10, 'Sana', 'dahyun@twice.com', '09191919191', 'dahyunimnida', 'Dahyun@123'),
(49, 'Arias', 'Benson', '1995-01-12', 25, 'Mamako', 'benson@gmail.com', '092856898745', 'benson@gmail.com', 'Benson123!');

-- --------------------------------------------------------

--
-- Table structure for table `science_table`
--

CREATE TABLE `science_table` (
  `user_fk` int(100) NOT NULL,
  `id` int(50) NOT NULL,
  `Lesson_Name` varchar(50) NOT NULL,
  `Score` varchar(50) NOT NULL,
  `Passing_Score` varchar(50) NOT NULL,
  `No_Items` varchar(50) NOT NULL,
  `Status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `science_table`
--

INSERT INTO `science_table` (`user_fk`, `id`, `Lesson_Name`, `Score`, `Passing_Score`, `No_Items`, `Status`) VALUES
(0, 1, 'Living Things', '8', '8', '10', 'passed'),
(0, 2, 'Plants', '7', '8', '10', 'failed'),
(0, 3, 'Animals', '6', '8', '10', 'failed'),
(0, 4, 'Non Living Things', '5', '9', '11', 'failed');

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
-- Indexes for table `progress`
--
ALTER TABLE `progress`
  ADD PRIMARY KEY (`progress_id`),
  ADD KEY `stud_progress_FK` (`user_id`);

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
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `progress`
--
ALTER TABLE `progress`
  MODIFY `progress_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `reg_stud`
--
ALTER TABLE `reg_stud`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `science_table`
--
ALTER TABLE `science_table`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `progress`
--
ALTER TABLE `progress`
  ADD CONSTRAINT `stud_progress_FK` FOREIGN KEY (`user_id`) REFERENCES `reg_stud` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
