# Product

## Register

brand

## Users

- **Visitante curioso**: Fã do iFood ou futebol brasileiro descobrindo a campanha.
- **Colecionador**: Usuário que fez pedidos e quer entender como completar a coleção.
- **Contexto**: Navegação em celular ou desktop; experiência visual imersiva e emocional.

## Product Purpose

Landing page promocional dos Canarinhos iFood — colecionáveis oficiais que celebram os 5 títulos mundiais do futebol brasileiro. O objetivo é engajar, emocionar e converter o usuário a fazer pedidos no iFood para colecionar os bonecos.

## Brand Personality

- **Visual**: Dark, bold, premium. Fundo escuro profundo (#0d1011), vermelho iFood (#ea1d2c) como acento de ação, amarelo (#ffd000) como destaque do canarinho.
- **Verbal**: Direto, épico, brasileiro. "Colecione a história da torcida."
- **Tom**: Energia de torcida, nostalgia de Copa do Mundo, exclusividade de colecionável.

## Architecture

Site de viewport único com scroll-driven. A altura total é `1600vh`; uma única `section sticky` ocupa `100vh` e as transições entre estados são trigadas por `scrollYProgress` via Framer Motion. Sem seções âncora convencionais.

## Sections (via scroll progress)

| Seção | Progress range |
|-------|----------------|
| Hero / Coleção | 0 – 0.11 |
| Os Canarinhos | 0.11 – 0.70 |
| Cards holográficos | 0.70 – 0.73 |
| Como colecionar | 0.73 – 1.0 |

## Anti-references

- UI genérica de e-commerce.
- Fundo claro ou tons pastéis.
- Animações lentas ou sem energia.
- Texto de marketing frio e corporativo.
