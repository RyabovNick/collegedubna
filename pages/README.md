# PAGES

This directory contains your Application Views and Routes.
The framework reads all the `*.vue` files inside this directory and creates the router of your application.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/routing).

## Добавление новой страницы

1. Добавить её в базу - pages
2. Добавить .vue файл с шаблоном из about, speciality etc.
3. Поменять pageId в этом шаблоне в 2-х местах на id - 1 из таблицы в БД.
4. Store - pages - добавить в список страниц. Это какой-то костыль, но хочу, чтобы ошибка к каждой страницу (нахуа?), в итоге так.
