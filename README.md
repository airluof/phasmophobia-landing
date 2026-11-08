# Phasmophobia — Fan Landing Page

Неофициальная учебная фан-страница для игры Phasmophobia от Kinetic Games. Статичный одностраничный сайт на React + TypeScript + Vite.

## Локальная разработка

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
```

Готовые файлы попадают в каталог `dist/`.

## Деплой на GitHub Pages

Сайт настроен для деплоя в репозиторий `phasmophobia-landing`. Vite `base` установлен в `/phasmophobia-landing/`.

1. Запушьте код в репозиторий `phasmophobia-landing` на GitHub.
2. В настройках репозитория: Settings → Pages → Source = **GitHub Actions**.
3. Workflow `.github/workflows/deploy.yml` соберёт и опубликует сайт автоматически при пуше в `main`.

Сайт будет доступен по адресу: `https://<USERNAME>.github.io/phasmophobia-landing/`

## Дисклеймер

Неофициальная учебная фан-страница. Phasmophobia и связанные с ней материалы принадлежат Kinetic Games. Проект не связан с разработчиком или издателем. Изображения: официальный пресс-кит Kinetic Games.
