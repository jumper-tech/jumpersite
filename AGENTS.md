# AGENTS.md — Jumper Studio Site

## Missão
Construir o site institucional da Jumper Studio (jumper.studio) — um site de alta conversão que posiciona a Jumper como referência em performance digital com tracking avançado.

## Stack
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui como base, customizados com o design system Jumper
- **Animations:** Framer Motion (motion)
- **Deploy:** Vercel
- **Fonte:** Haffer (variable font) — fallback: Inter, system-ui, sans-serif
- **Ícones:** Lucide React

## Design System
Todos os tokens estão em `design-system/`. Seguir estritamente:

### Cores (ver `design-system/colors.json`)
- **Jumper Orange (#FA4721)** — CTA, hover, accent primário. Proporção: 15%
- **Black (#000000)** — Background principal (dark mode). Proporção: 40%
- **White (#FFFFFF)** — Background (light mode), texto. Proporção: 30%
- **Purple (#8143A7)** — Accent secundário, gradientes. Proporção: 5%
- **Gray (#C6CBD4)** — Borders, dividers. Proporção: 5%
- **Dark Gray (#3E3D40)** — Cards, containers. Proporção: 5%

### Regra: 40/30/15/5/5/5
Black e White dominam. Orange é a estrela. Purple, Gray e Dark Gray são coadjuvantes.

### Tipografia (ver `design-system/typography.json`)
- **Haffer** — fonte principal (heading + body), variable font, weights 300-900
- **JetBrains Mono** — código/dados técnicos
- Fluid scale com clamp() — ver typography.json para valores exatos

### Componentes Base (ver `design-system/components-data.json`)
- **JumperButton:** Primary (slate-700 → orange no hover), Secondary, Ghost, Critical
- **JumperCard:** Container com variantes (default, elevated, outlined, accent)
- **JumperInput:** Input com label flutuante e validação inline
- **JumperLoading:** Skeleton loader com gradiente animado
- **JumperLogo:** SVG responsivo com variantes (symbol, wordmark, full)
- **JumperBackground:** Background orgânico com gradientes da marca

### Tema CSS (ver `design-system/base-theme.css`)
O arquivo contém as CSS custom properties para light e dark mode. Usar como base do globals.css.

### Assets
- Logos: `public/assets/logos/` (X-White, X-Black, jumper-white, jumper-black)
- Gradientes orgânicos: `public/assets/gradients/` (6 variantes)

## Arquitetura do Site

```
app/
├── page.tsx                    ← Home
├── layout.tsx                  ← Layout global (nav + footer)
├── servicos/
│   ├── page.tsx                ← Overview de serviços
│   ├── arquitetura-de-performance/page.tsx
│   ├── tracking-avancado/page.tsx
│   └── jumperchat/page.tsx
├── cases/
│   ├── page.tsx                ← Grid de cases
│   └── [slug]/page.tsx         ← Case individual
├── sobre/page.tsx              ← Empresa + equipe
├── blog/
│   ├── page.tsx                ← Grid de artigos
│   └── [slug]/page.tsx         ← Artigo individual
├── diagnostico/page.tsx        ← Página de conversão (formulário)
└── contato/page.tsx            ← Fallback de contato
```

## Copy
A copy de cada página está em `copy/`. Cada arquivo contém o texto final — NÃO inventar ou alterar copy. Usar exatamente o que está nos arquivos.

## Referências Visuais
Ver `references/REFERENCES.md` para URLs e notas sobre o que aproveitar de cada referência.

## Diretrizes de Design

### Estética Geral
- **Dark mode first** — fundo escuro, texto claro, orange como destaque
- **Profissional-técnico** — não é agência de social media, é empresa de engenharia de performance
- **Limpo e espaçado** — generoso com whitespace, sem poluição visual
- **Animações sutis** — fade-in on scroll, hover states, parallax leve. Nada exagerado

### Padrões de Conversão
- **Header sticky** com CTA "Agendar Diagnóstico" sempre visível
- **WhatsApp floating button** em todas as páginas
- **CTAs contextuais** ao final de cada seção
- **Social proof inline** — logos e badges ao longo das páginas

### Mobile First
- Todo o design responsivo, mobile-first
- Touch targets mínimos de 44x44px
- Hamburger menu no mobile
- Formulário de diagnóstico otimizado para thumb

### Performance
- Lighthouse 90+
- Images otimizadas (Next Image)
- Fonts auto-hospedadas
- Lazy loading para seções below the fold

### SEO
- Meta tags dinâmicas por página
- Open Graph images
- Sitemap automático
- Structured data (Organization, LocalBusiness)

## Ordem de Execução
1. Setup do projeto Next.js + Tailwind + shadcn
2. Design system integrado (tema, fontes, componentes base)
3. Layout global (header + footer)
4. Home (página mais importante)
5. Páginas de serviço (3 páginas)
6. Cases
7. Sobre
8. Diagnóstico (conversão)
9. Blog (estrutura, sem conteúdo)
10. Contato
11. SEO + meta tags + sitemap
12. Deploy no Vercel

## O que NÃO fazer
- Não usar fontes genéricas (Inter, Roboto, Arial como primária)
- Não usar gradientes roxo-sobre-branco clichê
- Não fazer design genérico de "template de agência"
- Não inventar copy — usar os arquivos em `copy/`
- Não ignorar o design system — os tokens existem por um motivo
