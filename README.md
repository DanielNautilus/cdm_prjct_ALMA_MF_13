# Добро пожаловать на ALMA MF

Проект представляет из многостраничное веб предложение с где все страницы взаимосвязаны 
Основная функция приложения - запись фидбека от студента в виде оценок, историй и отзывов

### Структура страниц

На сайте представлено несколько страниц: **институты/факультеты**, **кафедры**, **преподаватели**, **пользователь**, **рейтинги** а также основная страница

## Основная страница

На данной странице представлена общая статистика по сайту, к примеру: число активных пользователей оставивших свой фидбек, число оценённый преподавателей и т.п. 

## Станица институтов и факультетов
Данная страница представляет из себя лист со всеми институтами, представленном в грид вью, Присутствует фильтр : все институты, технические, социальные и т.п.
На странице присутствует поиск, ~~(мей би при прокрутке будет автоматом прогружаться)~~

### Детальная страница института

Представляет из себя страницу основной информации:

 1. Директор инст.
 2. Остальные должностные лица
 3. Кафедры в виде грид вью с краткой информацией

## Страница кафедры

Данная страница представляет из себя лист со всеми кафедрами, так же представленном в грид вью:

### Детальная страница кафедры
 Инфа о кафедре а также преподавательский состав:
 1. Зав.кафедры стоит во главе
 2. Все преподаватели кафедры

 

## Страница преподавателей

Так же грид вью со всеми преподавателями
Предусмотрен поиск, а так же фильтрация по кафедрам и технической/социальной направленности


### Детальная страница преподавателей

Основная функциональная страница где представленная основная инфа о преподавателе, а так же его общая оценка, критерии преподавателя представлены в виде пентагона, при наведении на каждый сегмент преподавателя отображается число отзывов с соответствующим баллами от 1 до 5

Возможности пользователя:
Если он зарегистрирован:
 - Составлять истории
 - Давать оценки
 - Оставлять мини комменты под преподавателем

Всё данное(кроме мини комментов) будет представлено в виде pop-up'ов 
Если не зарегистрирован - то лишь только просматривать три этих пункта

## Страница рейтинга

Страница представленная из трех табов: рейтинг институтов, рейтинг кафедр, рейтинг преподавателей
В каждом лишь по 10 позиций

## Страница пользователя

Представляет из себя никнейм и основные данные о пользователе, если он захотел их ввести(данные о обучении) и так же по разбытий по табам его фидбек: оставленные истории, оценки, комменты ~~(мб вывести это в страницу активности)~~

## Фреймворк

Ангуляр
