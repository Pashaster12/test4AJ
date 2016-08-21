-- phpMyAdmin SQL Dump
-- version 4.0.10
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1:3306
-- Время создания: Авг 22 2016 г., 00:09
-- Версия сервера: 5.5.38-log
-- Версия PHP: 5.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `artjoker`
--

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `email` varchar(255) NOT NULL DEFAULT '',
  `territory` varchar(1000) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=13 ;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `territory`) VALUES
(1, 'Басенко Павел Иванович', 'pashaster1207@gmail.com', 'Донецька область'),
(2, 'Басенко Александр Потапович', 'potap@port.ua', 'смт Жовтневе, м.Нововолинськ, Волинська область'),
(3, 'Павлюк Семен Гнатович', 'sempav@rrr.ui', 'Автономна Республіка Крим'),
(4, 'Гадя Петрович Хренова', 'gadya@rrr.ui', 'Баглійський район міста, м.Дніпродзержинськ, Дніпропетровська область'),
(5, 'Уккук Енук Кепа', 'eroper@mail.ru', 'Київська область'),
(6, 'Уккук Енук Кеп', 'erope@mail.ru', 'м.Володимир-Волинський, Волинська область'),
(7, 'Николаев Сергей Степанович', 'rrytu@eed.ry', 'Дарницький район міста, м.Київ'),
(8, 'Уукукк Цууцу Кеуеун', 'rru@eed.ry', 'Гагарінський район міста, м.Севастополь'),
(9, 'Шщуцщущ Кееун Шшшцвц', 'wwee@qwwq.ry', 'Хмельницька область'),
(10, 'Шщуцщу Кееун Шшшцвц', 'we@qwwq.ry', 'Хмельницька область'),
(11, 'Петров Петр Петрович', 'petrov@gmail.com', 'с.Сонячне, м.Могилів-Подільський, Вінницька область'),
(12, 'Смирнов Петр Петрович', 'peov@gmail.com', 'Іллічівський район міста, м.Маріуполь, Донецька область');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
