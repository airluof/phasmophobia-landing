import { useState, useEffect, useCallback } from 'react';

const NAV_LINKS = [
  { href: '#about', label: 'Об игре' },
  { href: '#investigation', label: 'Расследование' },
  { href: '#equipment', label: 'Снаряжение' },
  { href: '#gallery', label: 'Галерея' },
];

const STEAM_URL = 'https://store.steampowered.com/app/739630/Phasmophobia/';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-950/85 backdrop-blur-md border-b border-steel-700/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Основная навигация">
        <a
          href="#top"
          className="font-display text-lg font-medium tracking-[0.22em] text-bone-50 transition-colors hover:text-signal-300 focus-visible-ring"
          onClick={() => setMenuOpen(false)}
        >
          PHASMOPHOBIA
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium tracking-wide text-steel-100 transition-colors hover:text-bone-50 focus-visible-ring"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={STEAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden border border-steel-500 px-5 py-2 text-sm font-medium tracking-wide text-bone-100 transition-all hover:border-signal-400 hover:text-signal-300 focus-visible-ring md:inline-block"
        >
          В Steam
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-bone-50 transition-colors hover:text-signal-300 focus-visible-ring md:hidden"
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            {menuOpen ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-steel-700/30 bg-ink-950/95 backdrop-blur-md transition-[max-height,opacity] duration-300 md:hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col px-5 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block border-b border-steel-700/20 py-4 text-base font-medium tracking-wide text-steel-100 transition-colors hover:text-signal-300 focus-visible-ring"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href={STEAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-steel-500 px-5 py-3 text-center text-sm font-medium tracking-wide text-bone-100 transition-all hover:border-signal-400 hover:text-signal-300 focus-visible-ring"
              onClick={() => setMenuOpen(false)}
            >
              Открыть в Steam
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="film-grain relative flex min-h-[100svh] items-end overflow-hidden">
      <img
        src="images/gameplay-equipment.webp"
        alt="Тёмный интерьер haunted-локации в Phasmophobia: исследователь с фонарём освещает пространство"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/55 to-ink-950/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/80 via-transparent to-ink-950/40" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-32 sm:px-8 sm:pb-28">
        <p className="mb-6 font-mono text-xs tracking-[0.28em] text-signal-300/80 animate-fade-in">
          ПАРАНОРМАЛЬНОЕ РАССЛЕДОВАНИЕ • КООПЕРАТИВНЫЙ ХОРРОР
        </p>
        <h1 className="max-w-3xl font-display text-4xl font-medium leading-[1.05] tracking-tight text-bone-50 text-balance animate-fade-in sm:text-6xl lg:text-7xl">
          ТЫ НЕ ОДИН.
          <br />
          И ЭТО НЕ СПАСЁТ.
        </h1>
        <p className="mt-7 max-w-xl text-base leading-relaxed text-steel-100 animate-fade-in sm:text-lg">
          Войди в место, где нарушены привычные правила. Собери доказательства, изучи поведение призрака и постарайся выбраться до того, как он начнёт охоту.
        </p>
        <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
          <a
            href="#investigation"
            className="group inline-flex items-center justify-center gap-3 bg-signal-500/15 border border-signal-400/50 px-7 py-3.5 text-sm font-medium tracking-wide text-signal-300 transition-all hover:bg-signal-500/25 hover:border-signal-400 focus-visible-ring"
          >
            Начать расследование
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12,5 19,12 12,19" />
            </svg>
          </a>
          <a
            href={STEAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-sm font-medium tracking-wide text-steel-100 underline decoration-steel-600 underline-offset-4 transition-colors hover:text-bone-50 hover:decoration-bone-50 focus-visible-ring"
          >
            Открыть в Steam
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-steel-300 transition-colors hover:text-signal-300 focus-visible-ring"
        aria-label="Прокрутить вниз"
      >
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase opacity-60">Листай</span>
        <svg width="16" height="22" viewBox="0 0 16 22" fill="none" stroke="currentColor" strokeWidth="1.2" className="animate-scroll-bounce">
          <rect x="1" y="1" width="14" height="20" rx="7" />
          <line x1="8" y1="5" x2="8" y2="9" />
        </svg>
      </a>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="film-grain relative bg-ink-900 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5 lg:col-start-1">
            <p className="mb-5 font-mono text-xs tracking-[0.28em] text-signal-300/70">01 — ОБ ИГРЕ</p>
            <h2 className="font-display text-3xl font-medium leading-[1.1] tracking-tight text-bone-50 text-balance sm:text-4xl lg:text-5xl">
              Каждое место хранит свою историю
            </h2>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-base leading-relaxed text-steel-100 sm:text-lg">
              Phasmophobia — кооперативный психологический хоррор. Команда исследователей входит в haunted-локации, использует специализированное снаряжение, собирает паранормальные улики и определяет тип призрака.
            </p>
            <p className="mt-5 text-base leading-relaxed text-steel-200">
              Каждое расследование — это tension между любопытством и страхом. Свет мигает, температура падает, оборудование ведёт себя непредсказуемо. Чем глубже копаешь, тем ближе охотничья фаза.
            </p>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-steel-700/40 pt-8">
              {['1–4 игрока', 'Кооперативный хоррор', 'Охота за доказательствами'].map((fact) => (
                <div key={fact} className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal-400" />
                  <span className="font-mono text-sm tracking-wide text-bone-100">{fact}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 overflow-hidden border border-steel-700/30 lg:mt-24">
          <img
            src="images/chronicle.png"
            alt="Сцена расследования из Phasmophobia: тёмная комната с приборами и записями паранормальной активности"
            loading="lazy"
            className="aspect-[16/9] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
          />
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  {
    letter: 'A',
    title: 'Войти',
    desc: 'Подготовить оборудование и исследовать локацию. Расставить приборы, осмотреть комнаты, почувствовать первые признаки присутствия.',
  },
  {
    letter: 'B',
    title: 'Зафиксировать',
    desc: 'Искать признаки паранормальной активности с помощью приборов: показания EMF, отклики Spirit Box, следы под UV-светом.',
  },
  {
    letter: 'C',
    title: 'Определить',
    desc: 'Сопоставить собранные улики и выбрать тип призрака. Каждое совпадение сужает круг подозреваемых — ошибка стоит дорого.',
  },
];

function Investigation() {
  return (
    <section id="investigation" className="film-grain relative bg-ink-950 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="mb-5 font-mono text-xs tracking-[0.28em] text-signal-300/70">02 — РАССЛЕДОВАНИЕ</p>
          <h2 className="font-display text-3xl font-medium leading-[1.1] tracking-tight text-bone-50 text-balance sm:text-4xl lg:text-5xl">
            Сначала доказательства.
            <br />
            Потом — имя.
          </h2>
        </div>

        {/* Desktop: horizontal timeline / Mobile: vertical */}
        <div className="mt-16 grid grid-cols-1 gap-px bg-steel-700/30 sm:mt-20 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <div
              key={step.letter}
              className="group relative bg-ink-950 p-8 transition-colors hover:bg-ink-850 sm:p-10"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-display text-5xl font-medium text-steel-600 transition-colors group-hover:text-signal-400/60">
                  {step.letter}
                </span>
                <span className="font-mono text-xs tracking-[0.2em] text-steel-300">ШАГ {i + 1}</span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-medium tracking-tight text-bone-50">{step.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-steel-200">{step.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 font-mono text-xs leading-relaxed tracking-wide text-steel-300/70">
          Это базовая последовательность — в игре возможны и другие подходы к расследованию.
        </p>
      </div>
    </section>
  );
}

const EQUIPMENT = [
  {
    name: 'EMF Reader',
    desc: 'Регистрирует электромагнитные всплески. Рост показаний — один из признаков близости призрака.',
  },
  {
    name: 'Spirit Box',
    desc: 'Улавливает голосовые отклики из радиоприёмника. Иногда призрак отвечает — если рядом никого нет.',
  },
  {
    name: 'UV Light',
    desc: 'Подсвечивает следы: отпечатки рук, следы ног, следы запаха, которые не видны обычным светом.',
  },
  {
    name: 'Video Camera',
    desc: 'Через ночную съёмку видны орбы — паранормальные частицы, парящие в воздухе локации.',
  },
  {
    name: 'Ghost Writing Book',
    desc: 'Открытая тетрадь, в которую призрак может вписать послание или нарисовать знак. Тихое ожидание и удача.',
  },
];

function Equipment() {
  return (
    <section id="equipment" className="film-grain relative bg-ink-900 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="mb-5 font-mono text-xs tracking-[0.28em] text-signal-300/70">03 — СНАРЯЖЕНИЕ</p>
            <h2 className="font-display text-3xl font-medium leading-[1.1] tracking-tight text-bone-50 text-balance sm:text-4xl lg:text-5xl">
              Твои инструменты — единственная опора
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-steel-200">
              В темноте приборы важнее интуиции. Они переводят невидимое в показания, которые можно зафиксировать и сопоставить.
            </p>

            <div className="mt-10 overflow-hidden border border-steel-700/30">
              <img
                src="images/uv-equipment.webp"
                alt="Игровой процесс Phasmophobia: сцена с оборудованием для расследования паранормальной активности"
                loading="lazy"
                className="aspect-[16/10] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <ul className="border-t border-steel-700/40">
              {EQUIPMENT.map((item, i) => (
                <li
                  key={item.name}
                  className="group border-b border-steel-700/40 transition-colors hover:bg-ink-850/50"
                >
                  <div className="flex items-start gap-5 py-6 sm:gap-8 sm:py-7">
                    <span className="mt-1 font-mono text-xs text-steel-400 tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-medium tracking-wide text-bone-50 transition-colors group-hover:text-signal-300">
                        {item.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-steel-200">{item.desc}</p>
                    </div>
                    <span className="mt-2 hidden h-2 w-2 rounded-full bg-steel-600 transition-colors group-hover:bg-signal-400 sm:block" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Coop() {
  return (
    <section className="film-grain relative overflow-hidden bg-ink-950 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <p className="mb-5 font-mono text-xs tracking-[0.28em] text-amber-400/80">04 — КОМАНДА</p>
            <h2 className="font-display text-3xl font-medium leading-[1.1] tracking-tight text-bone-50 text-balance sm:text-4xl lg:text-5xl">
              В темноте лучше не оставаться одному
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-steel-100">
              Phasmophobia поддерживает онлайн-кооператив до четырёх игроков. Распределите роли: один следит за мониторами в фургоне, другие заходят внутрь с приборами.
            </p>
            <p className="mt-5 max-w-md text-base leading-relaxed text-steel-200">
              Но расследование можно провести и в одиночку — тишина станет ощутимо плотнее, а каждый звук — значимее.
            </p>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
              {['Онлайн-кооператив', 'До 4 игроков', 'Одиночный режим'].map((fact) => (
                <div key={fact} className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span className="font-mono text-sm tracking-wide text-bone-100">{fact}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="overflow-hidden border border-steel-700/30">
              <img
                src="images/van.webp"
                alt="Фургон исследователей в Phasmophobia: мониторы и оборудование для наблюдения за локацией"
                loading="lazy"
                className="aspect-[16/10] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const GALLERY_IMAGES = [
  {
    src: 'images/gameplay-equipment.webp',
    alt: 'Тёмный интерьер haunted-локации в Phasmophobia: исследователь с фонарём',
    span: 'lg:col-span-8 lg:row-span-2',
    aspect: 'aspect-[16/9] lg:aspect-[16/10]',
  },
  {
    src: 'images/dark-interior.webp',
    alt: 'Камера в тёмном интерьере: съёмка паранормальной активности в Phasmophobia',
    span: 'lg:col-span-4',
    aspect: 'aspect-[4/3] lg:aspect-[4/5]',
  },
  {
    src: 'images/outdoor-location.png',
    alt: 'Внешний вид haunted-локации в Phasmophobia: дом под открытым небом',
    span: 'lg:col-span-4',
    aspect: 'aspect-[4/3] lg:aspect-[4/5]',
  },
  {
    src: 'images/chronicle.png',
    alt: 'Сцена расследования: тёмная комната с приборами и записями в Phasmophobia',
    span: 'lg:col-span-6',
    aspect: 'aspect-[16/9]',
  },
  {
    src: 'images/uv-equipment.webp',
    alt: 'Сцена с UV-оборудованием в Phasmophobia: поиск следов паранормальной активности',
    span: 'lg:col-span-6',
    aspect: 'aspect-[16/9]',
  },
];

function Gallery() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState<string>('');

  const closeLightbox = useCallback(() => {
    setLightboxSrc(null);
    setLightboxAlt('');
  }, []);

  useEffect(() => {
    if (!lightboxSrc) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxSrc, closeLightbox]);

  return (
    <section id="gallery" className="film-grain relative bg-ink-900 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="mb-5 font-mono text-xs tracking-[0.28em] text-signal-300/70">05 — ГАЛЕРЕЯ</p>
          <h2 className="font-display text-3xl font-medium leading-[1.1] tracking-tight text-bone-50 text-balance sm:text-4xl lg:text-5xl">
            Кадры из локаций
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-12 lg:auto-rows-auto">
          {GALLERY_IMAGES.map((img) => (
            <button
              key={img.src + img.span}
              type="button"
              onClick={() => {
                setLightboxSrc(img.src);
                setLightboxAlt(img.alt);
              }}
              className={`group relative overflow-hidden border border-steel-700/30 focus-visible-ring ${img.span}`}
              aria-label={`Открыть изображение: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className={`${img.aspect} h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]`}
              />
              <div className="absolute inset-0 bg-ink-950/0 transition-colors duration-300 group-hover:bg-ink-950/20 group-focus-visible:bg-ink-950/20" />
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-gradient-to-t from-ink-950/80 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                <span className="font-mono text-xs tracking-wide text-bone-100 line-clamp-1">{img.alt}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="shrink-0 text-signal-300">
                  <polyline points="15,3 21,3 21,9" />
                  <polyline points="9,21 3,21 3,15" />
                  <line x1="21" y1="3" x2="14" y2="10" />
                  <line x1="3" y1="21" x2="10" y2="14" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightboxSrc && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/95 p-4 backdrop-blur-sm animate-fade-in"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Просмотр изображения"
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center text-bone-50 transition-colors hover:text-signal-300 focus-visible-ring"
            aria-label="Закрыть"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>
          <img
            src={lightboxSrc}
            alt={lightboxAlt}
            className="max-h-[88vh] max-w-full object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="film-grain relative overflow-hidden bg-ink-950 py-24 sm:py-32 lg:py-40">
      <img
        src="images/dark-interior.webp"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/80 to-ink-950" />

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <p className="mb-6 font-mono text-xs tracking-[0.28em] text-amber-400/70">06 — ФИНАЛ</p>
        <h2 className="font-display text-3xl font-medium leading-[1.1] tracking-tight text-bone-50 text-balance sm:text-5xl lg:text-6xl">
          Свет может погаснуть.
          <br />
          Расследование — нет.
        </h2>
        <div className="mt-12">
          <a
            href={STEAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 border border-signal-400/50 bg-signal-500/10 px-8 py-4 text-sm font-medium tracking-wide text-signal-300 transition-all hover:bg-signal-500/20 hover:border-signal-400 focus-visible-ring"
          >
            Посмотреть Phasmophobia в Steam
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12,5 19,12 12,19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-steel-700/40 bg-ink-950 py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-md">
            <p className="font-display text-xl font-medium tracking-[0.22em] text-bone-50">PHASMOPHOBIA</p>
            <p className="mt-5 text-sm leading-relaxed text-steel-200">
              Неофициальная учебная фан-страница. Phasmophobia и связанные с ней материалы принадлежат Kinetic Games. Проект не связан с разработчиком или издателем.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:items-end">
            <a
              href="https://www.kineticgames.co.uk/phasmophobia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-steel-100 underline decoration-steel-600 underline-offset-4 transition-colors hover:text-bone-50 hover:decoration-bone-50 focus-visible-ring"
            >
              Официальная страница игры
            </a>
            <a
              href={STEAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-steel-100 underline decoration-steel-600 underline-offset-4 transition-colors hover:text-bone-50 hover:decoration-bone-50 focus-visible-ring"
            >
              Страница в Steam
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-steel-700/30 pt-6">
          <p className="font-mono text-xs tracking-wide text-steel-300/70">
            Изображения: официальный пресс-кит Kinetic Games.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-ink-950">
      <Header />
      <main>
        <Hero />
        <About />
        <Investigation />
        <Equipment />
        <Coop />
        <Gallery />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
