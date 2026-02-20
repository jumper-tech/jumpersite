# Design System — Resumo para Implementação

## Fonte Principal: Haffer
- Font variable (100-900)
- Arquivos: haffer-variable.ttf, haffer-italic.ttf
- Fallback: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif
- Mono: JetBrains Mono

> **NOTA:** Se Haffer não estiver disponível como arquivo, usar Inter como substituta temporária e configurar @font-face quando os arquivos forem fornecidos.

## Escala Tipográfica (fluid)
```
h1: clamp(1.5rem, 1.25rem + 1.25vw, 2.25rem)  — weight 700, line-height 1.2
h2: clamp(1.25rem, 1.125rem + 0.625vw, 1.75rem) — weight 600, line-height 1.3
h3: clamp(1.125rem, 1rem + 0.625vw, 1.5rem)     — weight 600, line-height 1.3
h4: clamp(1rem, 0.9rem + 0.5vw, 1.25rem)         — weight 500, line-height 1.4
body: clamp(0.875rem, 0.8rem + 0.375vw, 1rem)     — weight 400, line-height 1.6
```

## Cores da Marca
```
Jumper Orange:  #FA4721  — hsl(14 95% 55%)  — CTAs, hover, accent
Black:          #000000  — Background dark mode
White:          #FFFFFF  — Background light mode, texto
Purple:         #8143A7  — hsl(273 44% 46%) — Accent secundário
Gray:           #C6CBD4  — hsl(220 13% 82%) — Borders
Dark Gray:      #3E3D40  — hsl(240 3% 25%)  — Cards dark
```

## Proporção: 40/30/15/5/5/5
Black e White dominam. Orange é a estrela accent. Purple, Gray e Dark Gray são coadjuvantes.

## Tema CSS
Usar `design-system/base-theme.css` como ponto de partida para o globals.css.
Adaptar as custom properties conforme necessário — o arquivo tem light mode e dark mode completos.

## Componentes (ver components-data.json)
- **JumperButton:** primary (slate-700 → orange hover), secondary, ghost, critical
- **JumperCard:** default, elevated, outlined, accent
- Os componentes usam CVA (class-variance-authority) para variantes

## Assets Disponíveis
- `public/assets/logos/` — X-White.png, X-Black.png, jumper-white.png, jumper-black.png
- `public/assets/gradients/` — organic-01 a organic-06 (gradientes orgânicos da marca)

## Padrões Visuais
- Border radius padrão: 0.5rem
- Animações: fade-in on scroll, hover transitions (200ms)
- Buttons: transição de cor no hover (slate → orange)
- Cards: sombra sutil, border, hover elevação
