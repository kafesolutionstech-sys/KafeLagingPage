# Kafé · contexto do projeto

Landing page da Kafé, empresa de tecnologia e marketing para restaurantes (sistema de caixa/PDV que funciona sem internet, atendimento com IA no WhatsApp, tráfego pago, gestão de Instagram, site e delivery próprio). Fundador: Kaique Antunes. Atende Ourinhos-SP e região.

## Stack

HTML, CSS e JavaScript puro. Sem framework, sem build, sem dependências. Manter assim, a menos que o Kaique peça outra coisa.

## Marca

- Nome: **Kafé** (K.A.F. de Kaique Antunes Ferreira, lido como "café")
- Logo: palavra "kafé" em Bricolage Grotesque 800, minúscula, com o acento do é desenhado como uma chama (cor Brasa)
- Ícone secundário: xícara com K e fumaça
- Fontes: Bricolage Grotesque (títulos), DM Sans (textos)
- Cores (tokens em `css/styles.css`, `:root`):
  - Espresso `#1F1410`: topo, menu, textos
  - Brasa `#E4572E`: só botões e destaques
  - Off-white `#FFFBF5`: seções de conteúdo
  - Crema `#F4EADB`: blocos de destaque
  - Grão `#8A5A3B`: uso mínimo
- Regra de contraste: texto sobre Brasa é sempre Espresso, nunca branco. Para texto pequeno em laranja sobre fundo claro, usar `--brasa-texto` (`#B8401C`).

## Tom de voz

Português do Brasil, direto, falando com dono de restaurante, sem jargão técnico. Foco em benefício: caixa que não para, cliente atendido na hora, vender direto sem comissão.

- Fala como empresa ("a gente", "a Kafé"), não em nome do Kaique. O nome dele aparece só na seção "Quem faz a Kafé".
- Marketing divertido com o trocadilho do kafé: "Bora tomar um kafé?", "Puxa uma cadeira", cardápio de kafés. Sem esconder o que a Kafé faz.
- Função que o sistema ainda não tem leva a etiqueta "em breve" (`.soon`): hoje iFood, 99, nota fiscal (NFC-e) e acesso pelo celular.
- Reforma tributária e split payment: não citar datas (as fontes divergem) nem prometer que o sistema "faz o split". A Kafé cuida do sistema, o contador cuida do imposto.

Não inventar números, estatísticas ou depoimentos. Dado que não existe vira placeholder entre colchetes.

## Clientes no portfólio

- Recanto Restaurante e Choperia (Ourinhos-SP): sistema de caixa + app de comandas
- Santo Fogo (Chavantes-SP): delivery próprio de hambúrgueres
- Império Prime Alimentos (Ourinhos-SP): sistema de caixa + estoque

## Estrutura

- `index.html`: página única (topo com pedidos ao vivo, faixa que desliza, faixa de clientes, sistema com a demonstração "a internet caiu" e os blocos de funções, cardápio da Kafé com os serviços, reforma tributária, carrossel de projetos, como funciona, quem faz a Kafé, depoimento escondido com `hidden`, cardápio de kafés para outros negócios, dúvidas, chamada final, botão fixo do WhatsApp)
- `css/styles.css`: estilos, tokens no topo
- `js/main.js`: faíscas do topo (`[data-sparks]`), pedidos de exemplo (`[data-feed]`, lista em `ORDERS`), faixa que desliza (`[data-ticker]`), demonstração sem internet (`[data-offline]`), conversa da IA (`[data-chat]`, mensagens ficam no HTML), blocos `.reveal` que aparecem ao rolar e carrossel (`[data-carousel]`, bolinhas geradas a partir dos `<article>`). Também monta os links do WhatsApp (`data-wa` = mensagem pronta, número em `WA_NUMBER`) e o botão fixo (`[data-wa-float]`, some sobre os elementos com `data-wa-hide`). Com `prefers-reduced-motion`, tudo fica parado e com o conteúdo inteiro à mostra

## Posicionamento e oferta

- Oferta principal: PDV feito para o negócio do cliente, que roda no computador do restaurante (funciona sem internet) e pode subir para a nuvem. As funções reais vêm do sistema do Recanto (`C:\Dev\Recanto`, pasta `docs/`).
- Foco em restaurante no topo e na maior parte da página. Outros negócios ficam no "cardápio de kafés", mais abaixo.
- Sem preço no site. Tudo é orçamento na conversa.
- Seção "Quem faz a Kafé": empresas citadas vêm do currículo do Kaique (projetos via consultorias). Não acrescentar empresas sem confirmação.
- Acessibilidade: manter botões reais, `aria-label` em botões só com ícone, alvos de toque de 44px e respeito a `prefers-reduced-motion`
