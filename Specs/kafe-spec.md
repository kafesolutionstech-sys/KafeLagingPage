# Kafé · Especificação da marca e do site

> Documento de referência para desenvolver, manter e evoluir a landing page da Kafé.
> Versão 1.0 · outubro de 2026

> **Novembro de 2026 · novo visual.** Marca, cores, tipografia e regras de contraste (seções 2 a 4) continuam valendo.
> A oferta, o tom e a estrutura do site mudaram e as seções 1.1, 5, 6 e 10 estão desatualizadas nesses pontos:
> o PDV que funciona sem internet virou a oferta principal; entraram atendimento com IA no WhatsApp, tráfego pago,
> gestão de Instagram, a seção da reforma tributária e o "cardápio de kafés" para outros negócios; o site fala como
> empresa ("a gente") com o convite "Bora tomar um kafé?"; não há preço no site; saíram a apresentação em stories e a
> calculadora de comissão. A fonte de verdade da estrutura e dos textos é o `index.html`, e as regras resumidas estão no `CLAUDE.md`.

---

## 1. Visão geral

### 1.1 O que é a Kafé

A Kafé é uma empresa de tecnologia para restaurantes, com sede em Ourinhos-SP. Ela entrega quatro frentes:

| Frente | O que inclui |
|---|---|
| **Site e landing page** | Página própria do restaurante, rápida, responsiva e otimizada para o Google, com cardápio, horários, endereço e reservas |
| **Cardápio e delivery próprio** | Cardápio digital com pedido direto pelo WhatsApp ou painel, sem comissão de aplicativo |
| **Caixa, comandas e estoque** | Sistema de caixa (PDV) para mesas, balcão e delivery, app de comandas para garçom e controle de estoque integrado às vendas |
| **Instagram e marketing** | Presença digital e conteúdo para o restaurante ser lembrado e atrair clientes |

### 1.2 Objetivo do site

Converter donos de restaurantes, lanchonetes, choperias e comércios de alimentação de Ourinhos e região em **conversas no WhatsApp**.

Para isso, o site precisa:

1. Mostrar em poucos segundos o que a Kafé faz e para quem.
2. Convencer o dono de que ele **precisa** de presença digital e de um sistema próprio (dor + benefício).
3. Provar que a Kafé entrega, com clientes reais da região.
4. Levar a um único próximo passo: **falar no WhatsApp**.

**Métrica principal:** cliques nos botões de WhatsApp.
**Métricas secundárias:** cliques em "Ver projetos" e interação com o carrossel.

### 1.3 Público

- **Quem:** dono ou gerente de restaurante, lanchonete, pizzaria, hamburgueria, choperia ou distribuidora de alimentos
- **Onde:** Ourinhos, Chavantes e cidades vizinhas
- **Como chega:** pelo celular, vindo de Instagram, WhatsApp, indicação ou Google
- **O que sente:** paga caro em comissão de aplicativo, tem pouco tempo, não entende de tecnologia e desconfia de "agência"
- **O que quer:** vender mais, perder menos dinheiro no caixa e não depender de aplicativo

### 1.4 Posicionamento

> **Seu restaurante vendendo direto, sem comissão.**

A Kafé não vende "site". Vende pedido direto, caixa organizado e cliente que volta. O diferencial é ser feita por um desenvolvedor de software com experiência em grandes redes de food service, que atende pessoalmente e está na mesma região do cliente.

---

## 2. Marca

### 2.1 Nome

**Kafé**, escrito sempre com K maiúsculo no texto corrido e com acento agudo no é.

**Origem:** K.A.F. são as iniciais de **K**aique **A**ntunes **F**erreira, e a sigla se lê "café", que conecta a marca ao universo da comida.

**Camada de história:** Ferreira vem de *ferreiro*, quem trabalha com fogo e brasa. Isso dá origem à chama no acento do logo e à cor Brasa.

| Uso | Forma correta |
|---|---|
| Texto corrido | Kafé |
| Logo | kafé (minúsculo, com a chama) |
| Domínio e redes | kafe (sem acento) + complemento, ex.: `kafestudio.com.br`, `@kafestudio` |
| Errado | KAFÉ em caixa alta no logo, Kafe sem acento no texto, Café |

### 2.2 Logo principal: "Brasa"

Logotipo tipográfico: a palavra **kafé** em minúsculas, com o acento agudo substituído por uma **chama**.

**Construção:**

| Elemento | Especificação |
|---|---|
| Fonte | Bricolage Grotesque |
| Peso | 800 (ExtraBold) |
| Caixa | Minúsculas |
| Espaçamento entre letras | −0,04em |
| Altura da linha | 1 |
| Acento | Chama vetorial (SVG abaixo), no lugar do acento do é |
| Posição da chama | Base a 74% da altura da caixa do "e", a 30% da largura a partir da esquerda; largura de 42% do "e"; rotação de 22° |

**Vetor da chama** (viewBox `0 0 24 32`):

```svg
<path d="M12 1c2 6 8 9 8 17a8 8 0 0 1-16 0c0-4 2-6.5 4-8.5 0 3 1 5 3 5 1-4-.5-8 1-13.5z"/>
```

**Implementação em HTML/CSS** (a mesma usada no site):

```html
<a class="logo" aria-label="Kafé">
  <span aria-hidden="true">kaf</span><span class="logo__e" aria-hidden="true">e<svg viewBox="0 0 24 32"><path d="M12 1c2 6 8 9 8 17a8 8 0 0 1-16 0c0-4 2-6.5 4-8.5 0 3 1 5 3 5 1-4-.5-8 1-13.5z"/></svg></span>
</a>
```

```css
.logo { display:inline-flex; align-items:baseline; font-family:'Bricolage Grotesque'; font-weight:800; line-height:1; letter-spacing:-.04em; }
.logo__e { position:relative; display:inline-block; }
.logo__e svg { position:absolute; left:30%; bottom:74%; width:42%; height:auto; transform:rotate(22deg); overflow:visible; }
```

**Versões de cor:**

| Versão | Letras | Chama | Fundo |
|---|---|---|---|
| Positiva (padrão) | Espresso `#1F1410` | Brasa `#E4572E` | Crema ou Off-white |
| Negativa | Crema `#F4EADB` | Brasa `#E4572E` | Espresso |
| Sobre Brasa | Crema `#F4EADB` | Espresso `#1F1410` | Brasa (somente em tamanhos grandes) |

**Regras de uso:**

- Área de proteção: no mínimo a altura do "k" em volta do logo, sem outros elementos.
- Tamanho mínimo: 24px de altura na tela, 8mm impresso. Abaixo disso, use o ícone.
- Não esticar, não inclinar, não trocar a fonte, não aplicar sombra, gradiente ou contorno.
- Não colocar o logo sobre fotos sem uma camada escura ou clara por trás.
- A chama nunca muda de forma. A cor dela só muda na versão sobre Brasa.

### 2.3 Ícone secundário: "Xícara"

Para foto de perfil, favicon, ícone de app e espaços quadrados ou pequenos.

- Xícara sólida em Espresso, com alça
- Letra **K** em Bricolage Grotesque 800, na cor Crema, centralizada no corpo da xícara
- Três linhas de fumaça onduladas em Brasa, traço de 5 unidades, pontas arredondadas

**Vetor de referência** (viewBox `0 0 120 120`):

```svg
<path d="M38 34c-5-6 5-10 0-18M57 34c-5-6 5-10 0-18M76 34c-5-6 5-10 0-18" fill="none" stroke="#E4572E" stroke-width="5" stroke-linecap="round"/>
<path d="M96 54h4a12 12 0 0 1 0 24h-6" fill="none" stroke="#1F1410" stroke-width="8"/>
<path d="M18 44h78v28a30 30 0 0 1-30 30H48a30 30 0 0 1-30-30z" fill="#1F1410"/>
<text x="57" y="89" text-anchor="middle" font-family="Bricolage Grotesque" font-weight="800" font-size="44" fill="#F4EADB">K</text>
```

| Versão | Xícara e alça | K | Fumaça | Fundo |
|---|---|---|---|---|
| Clara | Espresso | Crema | Brasa | Crema, quadrado com cantos de 25% |
| Escura (avatar) | Crema | Espresso | Brasa | Espresso, círculo |
| Brasa | Espresso | Crema | Crema | Brasa, círculo |

**Favicon:** quadrado Espresso com cantos arredondados, K em Crema e uma chama Brasa no canto superior direito (`assets/img/favicon.svg`).

### 2.4 Selo (uso opcional)

Círculo Espresso com um anel interno sutil, um **K** grande no centro com a chama acima e o texto circular **"TECNOLOGIA PARA RESTAURANTES • SITES • GESTÃO • DELIVERY •"** em DM Sans 700. Indicado para adesivos, embalagens e o selo "site feito pela Kafé" nos clientes.

### 2.5 Combinação da marca

- **Logo principal (Brasa):** site, cartão de visita, propostas, assinatura de e-mail
- **Ícone (Xícara):** foto de perfil do Instagram e WhatsApp, favicon, ícone de app
- **Selo:** materiais físicos

---

## 3. Cores

### 3.1 Paleta

| Nome | Hex | RGB | Papel |
|---|---|---|---|
| **Espresso** | `#1F1410` | 31, 20, 16 | Cor principal. Topo, menu, faixas escuras, textos |
| **Brasa** | `#E4572E` | 228, 87, 46 | Destaque. **Só** botões, chama do logo, detalhes e ênfases |
| **Off-white** | `#FFFBF5` | 255, 251, 245 | Fundo das seções de conteúdo |
| **Crema** | `#F4EADB` | 244, 234, 219 | Blocos de destaque, faixa de projetos, texto sobre Espresso |
| **Grão** | `#8A5A3B` | 138, 90, 59 | Uso mínimo. Detalhes pontuais. É o tom que mais puxa para o rústico |

### 3.2 Cores de apoio (interface)

| Nome | Hex | Uso |
|---|---|---|
| Brasa texto | `#B8401C` | Laranja escurecido para texto pequeno sobre fundo claro (ex.: rótulos das seções) |
| Café claro | `#3A2A22` | Superfícies e cartões sobre o Espresso |
| Texto suave | `#4A3428` | Parágrafos sobre fundo claro |
| Texto muted | `#6B4A33` | Legendas e textos secundários sobre fundo claro |
| Texto suave escuro | `#D9C8B4` | Parágrafos sobre Espresso |
| Borda | `#EADFCF` | Bordas de cartões e divisórias |
| Status novo | `#FCDCCF` / `#8F2F12` | Fundo / texto |
| Status em preparo | `#FDEBC8` / `#7A4A07` | Fundo / texto |
| Status concluído | `#D8F0DF` / `#1E5A32` | Fundo / texto |

### 3.3 Proporção

Em uma tela típica do site: **Espresso e Off-white dominam (cerca de 85%)**, Crema entra em blocos (cerca de 10%) e **Brasa fica em até 5%**. Quanto menos laranja, mais ele chama atenção para o botão.

### 3.4 Contraste (WCAG)

| Combinação | Contraste | Uso permitido |
|---|---|---|
| Espresso sobre Off-white | 17,5 : 1 | Qualquer texto |
| Crema sobre Espresso | 15,1 : 1 | Qualquer texto |
| Texto suave escuro `#D9C8B4` sobre Espresso | 11,0 : 1 | Qualquer texto |
| Texto muted `#6B4A33` sobre Off-white | 7,7 : 1 | Qualquer texto |
| Brasa texto `#B8401C` sobre Off-white | 5,4 : 1 | Qualquer texto |
| **Espresso sobre Brasa** | **4,9 : 1** | **Texto dos botões** |
| Brasa sobre Espresso | 4,9 : 1 | Rótulos e destaques no fundo escuro |
| Brasa sobre Off-white | 3,6 : 1 | Só texto grande (24px ou mais) e elementos gráficos |
| **Branco sobre Brasa** | **3,7 : 1** | **Não usar em texto de botão** |

**Regra de ouro:** texto sobre Brasa é sempre Espresso, nunca branco.

### 3.5 Tokens CSS

```css
:root {
  --espresso: #1F1410;
  --brasa: #E4572E;
  --brasa-texto: #B8401C;
  --offwhite: #FFFBF5;
  --crema: #F4EADB;
  --grao: #8A5A3B;
  --cafe-claro: #3A2A22;
  --texto-suave: #4A3428;
  --texto-muted: #6B4A33;
  --texto-dark-suave: #D9C8B4;
  --borda: #EADFCF;
}
```

---

## 4. Tipografia

| Papel | Fonte | Pesos | Onde |
|---|---|---|---|
| Títulos e logo | **Bricolage Grotesque** | 400, 700, 800 | Logo, H1, H2, H3, números grandes |
| Textos e interface | **DM Sans** | 400, 500, 700 | Parágrafos, menu, botões, rótulos |

As duas são gratuitas no Google Fonts:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,700;12..96,800&family=DM+Sans:wght@400;500;700&display=swap">
```

### 4.1 Escala

| Elemento | Fonte | Tamanho | Peso | Entrelinha | Espaçamento |
|---|---|---|---|---|---|
| H1 (topo) | Bricolage | `clamp(2.6rem, 5.4vw, 4.4rem)` | 800 | 1,02 | −0,035em |
| H2 (seções) | Bricolage | `clamp(2rem, 3.6vw, 3rem)` | 800 | 1,05 | −0,03em |
| Título de cena | Bricolage | `clamp(2rem, 4vw, 3.2rem)` | 800 | 1,04 | −0,03em |
| H3 (cards) | Bricolage | 24px | 800 | padrão | padrão |
| Nome do cliente | Bricolage | 34px | 800 | 1,08 | −0,02em |
| Texto de destaque | DM Sans | 1,2rem | 400 | 1,55 | padrão |
| Texto padrão | DM Sans | 16–17px | 400 | 1,55 | padrão |
| Rótulo de seção | DM Sans | 14px, caixa alta | 700 | padrão | 0,24em |
| Botão | DM Sans | 17px (16px no menu) | 700 | padrão | padrão |

---

## 5. Tom de voz

- **Português do Brasil, direto, de dono para dono.** Fala como quem atende pessoalmente.
- **Benefício antes de tecnologia.** "Pedido direto, sem comissão" em vez de "plataforma de e-commerce".
- **Frases curtas.** O leitor está no celular, entre um pedido e outro.
- **Sem jargão.** Nada de "solução omnichannel", "stack" ou "SaaS".
- **Sem números inventados.** Estatística, depoimento ou resultado só entra se for real. Enquanto não houver, fica entre colchetes como placeholder.
- **Metáforas de cozinha e mesa são bem-vindas**, com moderação: "mesa posta", "do primeiro clique ao fechamento do caixa".

Frases-assinatura aprovadas:

- *Seu restaurante vendendo direto, sem comissão.*
- *O cliente decide no celular antes de chegar na porta.*
- *Do primeiro clique ao fechamento do caixa.*
- *Clientes que já estão com a mesa posta.*

---

## 6. Estrutura do site

Página única (one-page), nesta ordem:

```
1. Topo (menu + chamada principal + prévia do produto)
2. Faixa "Quem já trabalha com a Kafé"
3. Apresentação animada "Por que seu restaurante precisa disso"
4. Serviços "O que a Kafé faz"
5. Projetos (carrossel de clientes)
6. Contato (chamada final)
7. Rodapé
```

### 6.1 Topo

**Fundo:** Espresso.

**Menu:** logo à esquerda; à direita os links Serviços (`#servicos`), Projetos (`#projetos`), Por que ter (`#por-que`) e o botão **Quero meu site** (`#contato`), em Brasa. No celular, os itens quebram linha.

**Chamada principal:**

| Elemento | Conteúdo |
|---|---|
| Rótulo | TECNOLOGIA PARA RESTAURANTES (em Brasa) |
| Título (H1) | Seu restaurante vendendo direto, sem comissão. |
| Texto | Site próprio, cardápio digital com pedido pelo WhatsApp e um sistema de caixa que conversa com tudo isso. Feito por quem desenvolve software para grandes redes de food service. |
| Botão principal | Falar no WhatsApp → `https://wa.me/55[DDD][NÚMERO]` |
| Botão secundário | Ver projetos → `#projetos` (contorno) |

**Prévia do produto (à direita, decorativa):**

- Painel **Pedidos** com três pedidos e status: #0233 · WhatsApp (Novo), #0232 · Mesa 4 (Em preparo), #0231 · Delivery (Saiu)
- Celular com **Cardápio**: nome do restaurante, imagem, dois pratos com preço e o botão "Pedir no WhatsApp"

Objetivo: mostrar logo de cara que a Kafé faz **software**, não só sites.

### 6.2 Faixa "Quem já trabalha com a Kafé"

**Fundo:** Espresso, com divisória superior em Café claro.

Rótulo à esquerda e, à direita, as três logos em círculos de 64px com o nome ao lado. Cada uma leva ao carrossel e abre o slide do cliente.

### 6.3 Apresentação animada

**Função:** fazer o papel de um vídeo curto que convence o dono de que ele precisa de site, delivery, caixa e Instagram. Roda sozinha, no formato de stories.

**Cabeçalho da seção:**
- Rótulo: POR QUE SEU RESTAURANTE PRECISA DISSO
- Título: O cliente decide no celular antes de chegar na porta.

**Cenas** (5 segundos cada, em loop):

| # | Rótulo | Título | Texto | Visual |
|---|---|---|---|---|
| 1 | Antes de sair de casa | Seu cliente procura no Google. | Se ele não encontra cardápio, horário e endereço, ele escolhe o concorrente que aparece. | Busca "pizzaria perto de mim": o concorrente aparece completo e destacado; "Seu restaurante" aparece apagado, sem site |
| 2 | Cada pedido no aplicativo | Paga comissão. No seu site, não. | Com cardápio e pedido próprios, o cliente compra direto de você e o dinheiro fica no seu caixa. | Dois cartões: "App de delivery · Taxa · Comissão em todo pedido, para sempre" × "Seu site · 100% · O valor do pedido fica com você" |
| 3 | No Instagram | Quem aparece, é lembrado. | Posts bem feitos e frequentes trazem o cliente de volta e fazem a fila chegar até a sua porta. | Celular com perfil, grade de posts e "Prato novo da semana" com coração |
| 4 | No balcão | Caixa organizado é dinheiro que não some. | Mesas, balcão e delivery no mesmo sistema, com o fechamento do dia conferido em minutos. | Comprovante "Fechamento do dia · Conferido" com Mesas, Balcão, Delivery do site e Total |
| 5 | Tudo em um lugar só | A Kafé cuida do digital do seu restaurante. | Site, delivery próprio, sistema de caixa e Instagram, feitos por quem entende de restaurante e de software. | Quatro blocos: Site, Delivery, Caixa e Instagram (este em Brasa) |

**Comportamento:**
- Entrada de cada cena: o texto sobe e aparece em sequência (rótulo → título → texto, com 0,15s entre eles) e o visual cresce levemente (escala 0,9 → 1).
- Barra de progresso dividida em 5 segmentos, que se preenchem em Brasa. Cada segmento é um botão que pula para a cena.
- Botão de pausar e continuar à esquerda das barras.
- Pausa sozinha quando a aba não está visível.
- Com `prefers-reduced-motion`, começa pausada e sem animações.

### 6.4 Serviços

**Fundo:** Off-white.

- Rótulo: O QUE A KAFÉ FAZ
- Título: Do primeiro clique ao fechamento do caixa.

Três cards brancos com borda, ícone de traço em quadrado Espresso:

| Ícone | Título | Texto |
|---|---|---|
| Monitor | Site e landing page | Uma página rápida, bonita no celular e fácil de achar no Google, com cardápio, horários, endereço e botão de reserva. |
| Sacola | Cardápio e delivery próprio | O cliente escolhe no cardápio digital e o pedido chega pronto no WhatsApp ou no painel. Sem taxa de aplicativo por pedido. |
| Comprovante | Caixa, comandas e estoque | Sistema de caixa para mesas, balcão e delivery, com app de comandas para o garçom e estoque que baixa a cada venda. |

### 6.5 Projetos (carrossel)

**Fundo:** Crema.

- Rótulo: PROJETOS
- Título: Clientes que já estão com a mesa posta.
- Setas de anterior e próximo à direita do título

**Slides:** um por cliente. À esquerda, a logo em círculo de 260px com sombra, sobre um fundo na cor da marca do cliente. À direita, a etiqueta do serviço, o nome, a descrição e a cidade.

| Cliente | Serviço | Descrição | Cidade | Fundo |
|---|---|---|---|---|
| Recanto Restaurante e Choperia | Sistema de caixa + app de comandas | Caixa e comandas no mesmo sistema: o garçom lança o pedido pelo aplicativo, a cozinha recebe na hora e a conta fecha sem erro. | Ourinhos - SP | `#2A1D0A` |
| Santo Fogo | Delivery próprio | Delivery de hambúrgueres com pedido direto do cliente para a cozinha, sem passar por aplicativo de terceiros. | Chavantes - SP | `#3A1410` |
| Império Prime Alimentos | Sistema de caixa + estoque | Vendas e estoque no mesmo sistema: cada venda no caixa já baixa o produto do estoque, e o dono sabe o que tem e o que precisa repor. | Ourinhos - SP | `#1A1A1A` |

**Comportamento:**
- Troca sozinho a cada 6 segundos.
- Pausa com o mouse em cima ou com foco do teclado dentro do carrossel.
- Aceita arrastar para os lados no celular.
- Bolinhas de navegação abaixo; a ativa vira uma pílula Espresso de 32px.
- Transição: o slide aparece com fade, e a logo e os textos entram com a mesma animação das cenas.

**Para adicionar um cliente:** copiar um `<article class="slide">`, trocar logo, textos e `--slide-bg`. As bolinhas são geradas pelo JS.

### 6.6 Contato

Bloco Espresso com cantos de 24px:

- Título: Vamos colocar a mesa do seu restaurante online?
- Texto: Conversa rápida, sem compromisso. [SEU TELEFONE]
- Botão: **Falar com o Kaique** → WhatsApp

O nome do fundador no botão reforça o atendimento pessoal.

### 6.7 Rodapé

Linha simples com "© [ano] Kafé · Tecnologia para restaurantes" e "Ourinhos - SP". O ano é atualizado automaticamente.

---

## 7. Componentes

| Componente | Especificação |
|---|---|
| Botão principal | Fundo Brasa, texto Espresso 700, pílula (`border-radius: 999px`), altura mínima de 52px (44px no menu), sobe 1px no hover |
| Botão secundário | Contorno de 2px `#5A463A`, texto Crema; no hover a borda fica Crema |
| Rótulo de seção | DM Sans 14px, 700, caixa alta, espaçamento 0,24em; Brasa texto no fundo claro e Brasa no escuro |
| Card | Fundo branco, borda `#EADFCF`, cantos de 20px, padding de 32px |
| Pílula de status | 12px, 700, cantos totalmente arredondados, cores da seção 3.2 |
| Cantos | 12px (pequeno), 20px (padrão), 28px (grande) |
| Largura máxima | 1200px, com 24px de margem lateral |
| Espaço entre seções | 96px (64px no celular) |

---

## 8. Requisitos técnicos

- **Stack:** HTML, CSS e JavaScript puro, sem framework e sem build.
- **Responsivo:** feito para o celular primeiro; tudo empilha abaixo de 640px, sem rolagem horizontal.
- **Desempenho:** imagens com largura e altura definidas, fontes com `display=swap`, JS com `defer`.
- **Acessibilidade:**
  - Botões reais (`<button>`) e links reais (`<a href>`)
  - `aria-label` em todo botão que só tem ícone
  - Alvos de toque de no mínimo 44px
  - Foco visível com contorno Brasa de 3px
  - Contraste conforme a seção 3.4
  - Respeito a `prefers-reduced-motion`
- **SEO e compartilhamento:**
  - `<title>`: Kafé · Tecnologia para restaurantes
  - `description`: Site próprio, cardápio digital com pedido pelo WhatsApp, delivery próprio e sistema de caixa para restaurantes. Ourinhos e região.
  - Open Graph com título, descrição, URL e imagem de 1200x630
  - `lang="pt-BR"`
- **Hospedagem:** qualquer serviço de site estático (Vercel, Netlify ou Cloudflare Pages).

---

## 9. Arquivos

```
index.html                    página única
css/styles.css                estilos e tokens
js/main.js                    apresentação animada e carrossel
assets/img/favicon.svg        ícone da aba
assets/img/clientes/          logos dos clientes (recanto, santo-fogo, imperio-prime)
README.md                     como rodar e publicar
CLAUDE.md                     contexto para o Claude
```

---

## 10. Pendências

- [ ] Registrar o domínio e o @ do Instagram (verificar Registro.br e INPI nas classes 35 e 42)
- [ ] Número do WhatsApp nos links `wa.me`
- [ ] Telefone na seção de contato
- [ ] `og:url` com o domínio final
- [ ] Imagem de compartilhamento `og-image.png` (1200x630)
- [ ] Logos dos clientes em melhor qualidade, sem a borda dos prints do Instagram
- [ ] Prints reais dos sistemas e sites entregues para enriquecer os slides
- [ ] Trocar os textos de exemplo do mockup do topo (`[Seu restaurante]`, `[Prato 1]`, `[preço]`)
- [ ] Depoimento real de pelo menos um cliente
