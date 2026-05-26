# Design System

## Colors

| Token | Hex | Uso |
|-------|-----|-----|
| Dark (bg) | `#0d1011` | Fundo principal da página |
| Dark warm | `#1e0304` | Fundo hero (tom vinhoso-escuro) |
| iFood Red | `#ea1d2c` | CTA primário, sublinha ativa do nav, seal, botões |
| Yellow | `#ffd000` | Destaque do canarinho, badges, label de coleção |
| Text cream | `#fff2d7` | Watermark tipográfico (opacidade 25%) |
| White | `#ffffff` | Texto corrido sobre dark |
| White dim | `rgba(255,255,255,0.6)` | Texto secundário |
| Dark red | `#821916` | Fundo dos dots laterais |
| Border red | `#5b110e` | Borda dos dots laterais |

## Typography

| Função | Fonte | Peso | Uso |
|--------|-------|------|-----|
| Display / Watermark | Druk Condensed Super | 900 | "CANARINHOS" watermark, número watermark do canarinho ativo |
| UI / Heading | Inter | 400–900 | Todo o restante: nav, h1, h2, body, labels |
| Year pills | Sul Sans Test | 900 (Black) | Seletores de ano nos cards holográficos |

### Escala tipográfica

- **Watermark hero**: `35vw` / `382px` máx — Druk, opacidade 25%
- **Section H2 grande**: `clamp(3rem, 5vw, 4.45rem)` — Inter Black
- **Section H2 medium**: `clamp(30px, 3.8vw, 56px)` — Inter Black
- **Section H2 "Como colecionar"**: `clamp(42px, 5vw, 72px)` — Inter Bold
- **Body**: `clamp(13px, 1.2vw, 17px)` — Inter Regular
- **Label badge**: `clamp(10px, 0.82vw, 11.9px)` — Inter Bold, tracking 1.5px
- **Nav**: `14px` — Inter Regular

## Motion

- **Scroll-driven**: Todos os estados de seção são controlados por `scrollYProgress` (Framer Motion).
- **Transição hero → coleção**: flash amarelo (`mix-blend-screen`) + sweep de luz branca.
- **Troca de Canarinho**: `opacity` fade 0.45s easeInOut nos elementos bg, imagem e número.
- **Seal**: `rotate` 0–360° ao longo do scroll total (contínuo).
- **Animações de entrada**: `easeOut` / spring para elementos principais.

## Layout

- Viewport fixo: `sticky top-0 h-screen`
- Conteúdo lateral esquerdo: `left-[7.8vw]` (consistente em todas as seções)
- Scroll progress bar: lateral direita, `right-5`, `top-[10vh]`, `h-[80vh]` — apenas `lg`
- Nav dots (Os Canarinhos): `right-[8.1vw] top-[22%]`
- Seal rotativo: `bottom-[8%] right-[7.8vw]`

## Rules

1. **Fundo sempre escuro**: Nunca usar background claro neste projeto.
2. **iFood Red apenas em ações**: Botões primários, CTA, underline ativo. Não usar como decoração.
3. **Yellow como destaque do canarinho**: Badges, labels de destaque, texto em tela escura.
4. **Druk apenas para watermarks**: O display tipográfico pesado é reservado aos elementos de fundo decorativos.
5. **Inter para toda a UI**: Nav, headings de seção, body, labels funcionais.
6. **Sul Sans Test apenas para year pills**: Seletores de ano dos cards holográficos.
7. **Scroll-driven, sem âncoras**: Não usar `href="#id"` para navegação — usar `scrollToProgress()`.
