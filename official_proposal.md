# Protocolo de Comunicação e Pagamento entre AI Agents
## Documento de Análise de Produto, Modelo de Negócios e Mercado

---

## 1. Contexto e Problema

### 1.1 O novo mercado criado pela IA e pelos agents

Com o avanço da inteligência artificial e dos AI agents, um novo mercado gigante emergiu. Esse mercado se organiza em torno de três grandes pilares:

**Computação pessoal e própria infraestrutura**
O uso de agents pessoais cresce rapidamente e, à medida que isso avança, mais pessoas buscam rodar sua própria infraestrutura. Um exemplo concreto desse movimento foi o boom do Open WebUI (e ferramentas similares de LLM local) e a compra massiva de Mac Minis por parte do público para rodar modelos localmente. Além disso, diversas pessoas e empresas passaram a rodar seus próprios modelos de linguagem em hardware próprio.

**Acesso corporativo e produtividade via IA**
Com o aumento de produtividade proporcionado pela IA, diversas empresas passaram a usar IA no dia a dia para ampliar a capacidade de seus funcionários. As grandes empresas de IA investem em mais computação para escalar seus modelos, e seus clientes adquirem ferramentas e serviços já integrados a esses modelos.

**O mercado de agents — o foco da solução**
Esse é o segmento menos explorado e onde está concentrada a oportunidade central do produto. Hoje, muitas pessoas se especializam no uso de agents para tarefas diárias — pessoais, profissionais e diversas. Porém, uma grande parcela da população está excluída desse mercado por não saber criar seus próprios agents.

### 1.2 A assimetria de acesso — o problema central

O problema pode ser definido como uma **assimetria de acesso** no mercado de agents:

- Quem sabe construir agents → tem acesso ao poder da automação inteligente
- Quem não sabe → está excluído, mesmo sabendo exatamente o que quer fazer

**Exemplo concreto do problema:**
Uma pessoa sabe que para montar um roteiro de viagem barato precisa: entrar em um site de passagens, buscar os preços mais baratos, depois acessar um site de hotéis para ver os melhores quartos, acessar um site de roteiros para buscar passeios, encontrar meios de transporte baratos no destino, e assim por diante.

Criar um agent que faz tudo isso manualmente é algo moroso e que pode tomar mais tempo do que necessário. A pergunta que origina a solução é: **e se um agent único pudesse orquestrar tudo isso?**

**Analogia histórica:** Essa assimetria é análoga ao que aconteceu com a web nos anos 1990. As pessoas sabiam o que queriam fazer online, mas dependiam de técnicos para existir digitalmente. A solução foi a abstração (WordPress, Wix, etc.). O produto propõe a mesma camada de abstração, desta vez para o mundo dos agents.

---

## 2. A Solução

### 2.1 Visão geral

A solução não é um marketplace de agents nem um orquestrador central. É uma **infraestrutura de protocolo** — análogo ao que a Stripe é para pagamentos online, ou ao que o TCP/IP é para a internet. A diferença é que combina **comunicação entre agents + pagamento + reputação** em um único protocolo proprietário.

Não há um agente central de orquestração. As pessoas podem criar seus próprios agents, que se comunicam com outros agents através do protocolo. Desenvolvedores e criadores constroem interfaces e conectam agents a outros agents. Usuários finais interagem com essas interfaces sem precisar entender o protocolo por baixo.

### 2.2 Fluxo de uso — exemplo completo

```
Usuário: "Quero viajar para a Grécia entre 10 e 23 de maio de 2027.
          Irei com meu marido e meus dois filhos. Preciso de opções
          até R$ 17.000,00 e que sejam sem conexão. Monte um roteiro ideal."

→ Agent orquestrador criado por um creator inicia a busca

"Buscando passagens via agente 'FlyToGreece'"
"Pagamento de 0.3 USDC solicitado, aprovar?"
"Aprovado. Buscando passagens..."

"Buscando hotéis via agente 'HotelFinder'"
"Pagamento de 0.3 USDC solicitado, aprovar?"
"Aprovado. Buscando hotéis..."

"Buscando passeios via agente 'TourFinder'"
"Pagamento de 0.3 USDC solicitado, aprovar?"
"Aprovado. Buscando passeios..."

"Buscando transporte via agente 'TransportFinder'"
"Pagamento de 0.3 USDC solicitado, aprovar?"
"Aprovado. Buscando transporte..."

→ Resultado consolidado:
Passagens: [opções]
Hotéis: [opções]
Passeios: [opções]
Transporte: [opções]

Total estimado da viagem: R$ 16.890,00
Custo dos agents: USD$ 1,20
```

### 2.3 Os três pilares técnicos

| Pilar | O que é | Analogia de mercado |
|---|---|---|
| **Protocolo de comunicação** | Padrão proprietário para agents se comunicarem entre si | HTTP / MCP da Anthropic |
| **Sistema de pagamento** | Micropagamentos em USDC via Solana, de agent para agent | Stripe para agents |
| **Sistema de reputação** | Ranking proprietário baseado em uso, especialização e performance | App Store ratings — mas com dados brutos on-chain |

### 2.4 Distribuição e acesso

A plataforma é acessível via **web** como ponto de entrada principal — tanto para usuários finais quanto para creators. Não há instalação obrigatória, o que reduz fricção de adoção e amplia o alcance. Complementarmente, um **app mobile** está previsto para usuários finais, permitindo consumir agents de qualquer lugar e atingir um público mais amplo e não técnico.

**Para creators, há dois modos de acesso dependendo do perfil:**

O **creator técnico** — um desenvolvedor que quer rodar agents em sua própria infraestrutura, integrar em múltiplas máquinas, pipelines e codebases — tem à disposição um **SDK proprietário**. Ele oferece controle total: o creator sobe o agent no ambiente que preferir e o protocolo garante a comunicação com o restante da rede.

O **creator não técnico** — um agente de viagens, consultor, profissional de qualquer área que quer digitalizar seu conhecimento em um agent — usa a **interface web** da plataforma para criar, configurar e publicar seu agent de forma visual e sem necessidade de código.

A ideia central é: **o creator escolhe o nível de profundidade que faz sentido para ele.** A plataforma não impõe um único caminho.

**Integração com Solana e wallets:**
A plataforma cria automaticamente uma wallet Solana para cada novo creator e agent cadastrado, eliminando a barreira de entrada para quem nunca usou Web3. Para quem já tem experiência, é possível conectar uma wallet própria. O pagamento entre agents flui de forma descentralizada via USDC, independente do método de acesso escolhido pelo creator.

---

## 3. Clientes

### 3.1 Agent Creators (cliente primário)

Os creators são o foco central da estratégia de go-to-market e do modelo de negócios.

**Quem são:**
- Desenvolvedores que constroem agents especializados
- Profissionais do mundo real que levam seu conhecimento para agents (ex: especialista em viagens que cria um agent de roteiros, analista financeiro que cria um agent de análise de portfólio)
- Pessoas que já constroem projetos pessoais com agents e poderiam tornar esses projetos públicos e monetizá-los

**O que precisam:**
- SDK bem documentado e fácil de usar
- Protocolo padronizado para integrar com outros agents
- Sistema de monetização automática (receber por cada chamada ao seu agent)
- Distribuição — ser encontrado por outros agents e usuários na rede

**O que ganham ao usar o protocolo:**
- Acesso a uma rede global de outros agents para compor soluções
- Pagamentos automáticos e descentralizados por cada uso do seu agent
- Reputação acumulada que aumenta sua visibilidade na rede
- Potencial de renda passiva conforme seu agent é utilizado por outros

**Analogia estratégica:** O modelo de criadores é análogo ao que o YouTube fez — criadores se tornam divulgadores do próprio produto. Um creator que ganha dinheiro com seu agent tem incentivo natural para divulgar publicamente, gerando marketing orgânico do protocolo sem custo direto.

### 3.2 Usuários Finais (cliente secundário)

**Quem são:**
- Pessoas sem conhecimento técnico que usam interfaces construídas por creators
- Empresas que consomem agents especializados para automatizar tarefas internas

**Papel estratégico:**
São o motor que gera volume de transações e alimenta o sistema de reputação dos agents. Quanto mais usuários finais ativam agents, mais dados de performance são gerados, mais reputação os bons agents acumulam, e mais valioso o protocolo se torna para novos creators.

---

## 4. Modelo de Negócios

### 4.1 Posicionamento

A empresa é **fechada e proprietária**. Não há open-source no core do produto. A infraestrutura de comunicação, o sistema de pagamento e o algoritmo de reputação são todos ativos proprietários. Isso garante:
- Controle total sobre monetização
- Capacidade de influenciar o mercado via sistema de reputação
- Barreira de entrada para concorrentes — não é possível fazer fork do produto

### 4.2 Receita principal — taxa por transação

Cada vez que um agent chama outro agent através do protocolo, uma transação ocorre. A empresa cobra uma taxa sobre essa transação.

- **Modelo:** taxa fixa ou variável por transação (a ser definido)
- **Vantagem da Solana:** o custo de infraestrutura de transações na Solana é extremamente baixo (frações de centavo por transação), o que permite manter taxas competitivas com margens altas
- **Lógica de escala:** com volume alto, mesmo taxas de 0,5–2% geram receita expressiva. O negócio escala com o crescimento da rede sem crescimento proporcional de custos

**Exemplo de projeção conservadora:**
- 10.000 creators ativos × 100 transações/mês × $0,05 de taxa = $600.000/mês no ano 3
- 100.000 creators × efeito de rede = escala para $200M+ em 5 anos

### 4.3 Receita secundária — sistema de reputação e visibilidade

O sistema de reputação é um ativo estratégico de longo prazo com múltiplos vetores de monetização:

- **Destaque na rede:** agents que pagam por visibilidade aparecem primeiro quando outro agent busca um especialista para uma tarefa
- **Agent verificado:** tier de verificação pago que aumenta a confiança dos consumidores no agent
- **Analytics premium:** dados detalhados de performance, uso e comparação com concorrentes para creators que pagam pelo plano
- **Sistema de recomendação proprietário:** o algoritmo que decide qual agent é chamado para uma tarefa é um produto em si — creators podem pagar para otimizar sua posição

### 4.4 Receita futura — expansão de produtos

À medida que a rede cresce, novos produtos podem ser lançados sobre a infraestrutura:

- **Oracles proprietários:** fontes de dados confiáveis que agents da rede consomem (preços, dados de mercado, clima, etc.)
- **MCPs próprios:** Model Context Protocols específicos que agents da rede preferem usar por já estarem integrados ao protocolo
- **Marketplace de distribuição:** modelo similar ao YouTube — creators pagam para ter mais visibilidade e alcance, enquanto o protocolo amplifica os melhores performers organicamente

### 4.5 O que fica fora do modelo

- Não haverá cobrança de "assinatura" no modelo inicial — o foco é em volume via transações
- A reputação **não será on-chain** — os dados brutos podem ter transparência, mas o algoritmo de ranking e o sistema de recomendação são proprietários e fechados, permitindo monetização e governança centralizada

---

## 5. Sistema de Reputação — Detalhamento

### 5.1 Estrutura

O sistema de reputação é o mecanismo central que determina qual agent é selecionado quando outro agent — ou usuário — busca uma especialidade. É, em essência, o algoritmo da rede, e está completamente sob controle da empresa.

O sistema opera em **dois modos complementares**:

**Modo automático — recomendação pelo algoritmo**
Para usuários e creators que não sabem (ou não querem) escolher manualmente, o sistema recomenda os melhores agents com base nos fatores de ranking internos. É o comportamento padrão da rede — quem não especifica, recebe o melhor disponível segundo os critérios proprietários.

**Modo manual — seleção direta pelo usuário**
Usuários e creators mais experientes que já conhecem a rede podem escolher diretamente quais agents querem usar em uma orquestração, ignorando ou complementando a recomendação automática. Um desenvolvedor que já testou e confia em agents específicos pode hardcodar essas preferências nos seus fluxos. Um usuário avançado pode montar uma sequência customizada de agents para uma tarefa complexa.

Essa dualidade é estratégica: o modo automático garante uma boa experiência para o público amplo e gera os dados que melhoram o algoritmo; o modo manual cria fidelização entre os creators e usuários mais técnicos, que se tornam evangelistas da plataforma.

**Fatores de ranking no modo automático (definidos internamente):**
- Quantidade de usos (volume histórico de chamadas)
- Especialização (aderência do agent a domínios específicos)
- Performance (taxa de sucesso nas tarefas, tempo de resposta)
- Reputação acumulada (avaliações de outros agents e usuários)

### 5.2 Analogia com Google

| Google | Este produto |
|---|---|
| Sites são públicos | Dados brutos de uso podem ser transparentes |
| Algoritmo de ranking é fechado | Algoritmo de reputação é proprietário |
| Empresas pagam para aparecer melhor | Creators pagam por destaque e verificação |
| Google controla quem é relevante | O protocolo controla quem aparece na orquestração |

### 5.3 Poder estratégico da reputação

Controlar o sistema de reputação significa:
1. **Monetização direta** — cobrar por visibilidade, verificação e analytics
2. **Barreira de saída** — agents com reputação acumulada no protocolo não querem migrar para concorrentes e "perder" seu histórico
3. **Poder de moderação** — remover agents maliciosos ou de baixa qualidade sem depender de votação descentralizada
4. **Influência de mercado** — a empresa define os critérios de excelência no ecossistema de agents

---

## 6. Sistema de Pagamento — Detalhamento

### 6.1 Tecnologia base: Solana

A Solana foi escolhida como rail de pagamento pelos seguintes motivos:
- Custo de transação extremamente baixo (viabiliza micropagamentos de frações de centavo)
- Alta velocidade de confirmação (adequado para fluxos de agents em tempo real)
- Ecossistema de developers ativo (facilita go-to-market via comunidade)
- Moeda de pagamento: USDC (stablecoin — elimina volatilidade de preço nas transações)

### 6.2 Wallet Agents

Cada agent na rede possui uma wallet Solana própria. O pagamento flui diretamente de agent para agent, sem intermediário humano no fluxo.

A plataforma **cria automaticamente uma wallet** para cada novo creator e agent cadastrado — eliminando a barreira de entrada para quem nunca interagiu com Web3. Não é necessário saber o que é uma wallet para começar a ganhar dinheiro com um agent. Para creators com experiência em cripto, é possível **conectar uma wallet existente**, mantendo controle total sobre os fundos.

### 6.3 Integrações previstas

- Pyth (feeds de dados de preço em tempo real)
- Raydium / Orca (liquidez DeFi se necessário)
- Marinade (liquid staking — potencial futuro)

---

## 7. Go-to-Market

### 7.1 Fase 1 — Seed: comunidade e hackathons

- Participar de hackathons da Solana e comunidades de IA (já existe credibilidade nesse ambiente)
- Construir os primeiros agents internamente para provar o protocolo end-to-end
- Documentação e SDK impecáveis — a experiência do creator é o produto no início

**Princípio:** Milhões de pessoas já constroem agents e projetos pessoais. Por que não tornar isso público e ganhar dinheiro por isso?

### 7.2 Fase 2 — Creator Economy

- Identificar os primeiros 10–20 creators que já constroem agents publicamente
- Dar acesso antecipado + destaque na plataforma (custo zero, retorno em marketing)
- Esses creators, ao ganhar dinheiro com seus agents, tornam-se divulgadores naturais do protocolo
- O conteúdo orgânico gerado ("criei um agent que faz X e ganho Y por mês") é o melhor canal de aquisição possível — autêntico, técnico e com prova de valor

### 7.3 Fase 3 — Efeito de Rede

- Quanto mais agents na rede → mais útil o protocolo para novos creators
- Quanto mais creators → mais agents, mais especialização, mais valor para usuários finais
- O sistema de reputação vira barreira de entrada: ninguém quer reconstruir reputação em outro protocolo do zero

### 7.4 Moat Competitivo (Vantagens Defensivas)

| Vantagem | Por que é defensável |
|---|---|
| Protocolo proprietário | Não pode ser copiado sem reconstrução completa |
| Reputação acumulada on-network | Creators perdem histórico se migrarem |
| Efeito de rede | Valor do protocolo cresce com cada novo agent/creator |
| Dados de uso proprietários | Melhoram o algoritmo de recomendação continuamente |
| SDK + developer experience | Lock-in técnico através de familiaridade |

---

## 8. TAM / SAM / SOM

> Nota metodológica: os números abaixo são baseados em múltiplos relatórios de mercado de 2024–2026, com fontes detalhadas na seção 9.

### 8.1 TAM — Total Addressable Market

**Valor:** ~$52B (2030) | ~$183B (2033)

**Definição:** O mercado global de AI agents — a soma de toda transação, comunicação e automação via agents no mundo. Cada agent que roda em qualquer lugar é um potencial usuário do protocolo.

**Relação com o produto:** O TAM representa o teto teórico de valor que o protocolo pode capturar se se tornar a infraestrutura padrão de comunicação entre agents globalmente — análogo ao que o TCP/IP representa para a internet.

**Crescimento:** CAGR de ~44–50% entre 2025 e 2030–2034, dependendo da fonte consultada. O mercado estava em ~$7.6–7.9B em 2025.

**Contexto adicional:**
- 85% das organizações já integraram AI agents em pelo menos um workflow em 2025
- 99% das organizações planejam eventualmente fazer deploy de agentic AI (KPMG)
- 45% das empresas Fortune 500 estavam pilotando agentic AI em 2025
- O segmento de "build-your-own agents" — diretamente relacionado ao público de creators — é apontado como o de crescimento mais expressivo no período

### 8.2 SAM — Serviceable Addressable Market

**Valor:** ~$8B (2030)

**Definição:** O recorte do mercado que o produto consegue efetivamente endereçar — o segmento de multi-agent systems e o layer de infraestrutura/protocolo para comunicação entre agents.

**Como chegamos nesse número:** O SAM representa aproximadamente 15% do TAM total, correspondendo ao layer de infraestrutura, middleware e protocolo de comunicação — não os agents em si, mas o que possibilita agents se comunicarem, pagarem e colaborarem.

**Por que 15%:** O segmento de single-agent systems ainda domina o mercado em 2025 (59% do mercado). O segmento de multi-agent systems — onde o protocolo é indispensável — é menor hoje mas é apontado unanimemente como o de crescimento mais rápido no período de forecast.

**Relação com o produto e o problema que resolve:** A ausência de protocolos padronizados de orquestração e infraestrutura composável aumenta a dívida técnica e desacelera o time-to-value para qualquer desenvolvedor que queira conectar agents. Esse é o gap exato que o protocolo preenche.

**Contexto adicional:**
- Multi-agent systems permitem coordenação em tempo real, execução descentralizada de tarefas e tomada de decisão consciente do contexto
- Indústrias como BFSI, saúde e logística já adotam MAS para workflows de alto volume e dinâmicos
- O surgimento de agent marketplaces e builders de agents de domínio específico abre novos caminhos de crescimento — diretamente relacionado ao modelo de creator economy proposto

### 8.3 SOM — Serviceable Obtainable Market

**Valor:** ~$200M (horizonte de 3–5 anos)

**Definição:** A fatia realista de mercado que pode ser capturada no curto e médio prazo, considerando o go-to-market via comunidade Solana, hackathons e creator economy de AI agents.

**Como chegamos nesse número (bottom-up):**

| Variável | Ano 1 | Ano 3 | Ano 5 |
|---|---|---|---|
| Creators ativos | 500 | 10.000 | 80.000 |
| Transações/creator/mês | 50 | 100 | 150 |
| Taxa média por transação | $0,05 | $0,05 | $0,04 |
| Receita mensal | $12.500 | $600.000 | $7.200.000 |
| Receita anual | ~$150K | ~$7,2M | ~$86M |

Adicionando receitas secundárias (reputação, destaque, analytics) e efeito de aceleração por efeito de rede, o SOM de $200M em 5 anos é conservador.

**Por que agora é o momento certo:**
- Apenas 2% das organizações tinham agentic AI deployado em escala em 2025, enquanto 61% ainda estavam na fase de exploração — o protocolo entra no mercado exatamente na inflexão entre exploração e adoção em massa
- Mais de $9.7B foram investidos em startups de agentic AI desde 2023 — o capital está disponível no ecossistema
- A comunidade de builders de agents pessoais cresce exponencialmente (exemplo do boom de ferramentas como Open WebUI)

---

## 9. Referências Detalhadas

Todas as referências abaixo foram consultadas e utilizadas na construção desta análise de mercado.

---

### 9.1 Tamanho e crescimento do mercado de AI agents

**Grand View Research — AI Agents Market Size And Share | Industry Report, 2033**
- URL: https://www.grandviewresearch.com/industry-analysis/ai-agents-market-report
- Dados-chave:
  - Mercado estimado em **USD 7,63 bilhões em 2025**
  - Projeção de **USD 182,97 bilhões até 2033**
  - **CAGR de 49,6%** de 2026 a 2033
  - O segmento "build-your-own agents" deve experimentar crescimento significativo no período de forecast
  - O segmento de single-agent systems detinha 59,24% da receita em 2025; multi-agent systems é o de crescimento mais rápido

---

**Precedence Research — Agentic AI Market Size to Hit USD 199.05 Billion by 2034**
- URL: https://www.precedenceresearch.com/agentic-ai-market
- Data de publicação: Dezembro de 2025
- Dados-chave:
  - Mercado global de agentic AI em **USD 7,55 bilhões em 2025**
  - Projeção de crescimento para **USD 10,86 bilhões em 2026** → **~USD 199 bilhões até 2034**
  - **CAGR de 43,84%** de 2025 a 2034
  - América do Norte deteve **46% do market share** em 2024
  - Ásia-Pacífico deve ter o crescimento mais rápido no período
  - Em 2025, ~45% das empresas Fortune 500 estavam pilotando sistemas agentic
  - Investimento superior a **USD 9,7 bilhões** em startups de agentic AI desde 2023
  - Microsoft AutoGen sendo usado por **40% das Fortune 100** para automação de tarefas

---

**Precedence Research — AI Agents Market Size to Hit USD 236.03 Billion by 2034**
- URL: https://www.precedenceresearch.com/ai-agents-market
- Data de publicação: Agosto de 2025
- Dados-chave:
  - Mercado global de AI agents em **USD 7,92 bilhões em 2025**
  - Projeção de **USD 236,03 bilhões até 2034**
  - **CAGR de 45,82%** de 2025 a 2034
  - Mercado dos EUA: **USD 1,56 bilhão em 2024** → projeção de **USD 69,06 bilhões até 2034** (CAGR 46,09%)

---

**MarketsandMarkets — AI Agents Market worth $52.62 billion by 2030**
- URL: https://www.marketsandmarkets.com/PressReleases/ai-agents.asp
- Dados-chave:
  - Mercado de **USD 7,84 bilhões em 2025** → **USD 52,62 bilhões até 2030**
  - **CAGR de 46,3%** no período
  - Enterprises são os maiores contribuidores do mercado atual
  - Segmento de "ready-to-deploy agents" detém a maior parcela de mercado

---

**MarketsandMarkets — AI Agents Market (relatório completo)**
- URL: https://www.marketsandmarkets.com/Market-Reports/ai-agents-market-15761548.html
- Dados-chave:
  - Segmento de multi-agent systems é o **de crescimento mais rápido** no mercado de AI agents
  - Habilitado por: multi-agent reinforcement learning (MARL), protocolos avançados de coordenação, frameworks escaláveis de orquestração de agents
  - Indústrias como BFSI, saúde e logística estão adotando MAS para workflows de alto volume

---

**MarketsandMarkets — Agentic AI Market Report 2025–2032**
- URL: https://www.marketsandmarkets.com/Market-Reports/agentic-ai-market-208190735.html
- Dados-chave:
  - **CAGR de 44,6%** de 2025 a 2032 para o mercado de agentic AI
  - "A ausência de protocolos padronizados de orquestração e infraestrutura composável aumenta a dívida técnica e desacelera o time-to-value"
  - O surgimento de marketplaces de agents e builders de domínio específico abre novos caminhos de crescimento
  - Agentic AI inclui o stack completo: frameworks de orquestração, camadas de serviço, ferramentas de desenvolvimento e modelos de governança

---

**Market.us — Agentic AI Market Size & Trends | CAGR of 43.8%**
- URL: https://market.us/report/agentic-ai-market/
- Data de publicação: Janeiro de 2026
- Dados-chave:
  - Mercado global de AI agents: **USD 3,66 bilhões em 2023** → **USD 139,12 bilhões até 2033** (CAGR 43,88%)
  - Agentic AI global: **USD 5,2 bilhões em 2024** → **USD 196,6 bilhões até 2034** (CAGR 43,8%)
  - **Apenas 2% das organizações** tinham agentic AI deployado em escala em 2025
  - **61% ainda estavam na fase de exploração** em 2025
  - 23% das organizações já integraram agentic AI em operações em 2025; 27% planejavam adotar em 6 meses
  - Estudo Google Cloud: **52% das enterprises** já tinham AI agents em produção em 2025
  - Survey KPMG: **99% das organizações** planejam eventualmente deployar agentic AI

---

**SkyQuestTT — Global AI Agents Market Size**
- URL: https://www.skyquestt.com/report/ai-agents-market
- Dados-chave:
  - Mercado em **USD 40,95 bilhões em 2024** → **USD 247,01 bilhões até 2033** (CAGR 22,1%)
  - Nota: este relatório usa uma definição mais ampla que inclui chatbots corporativos, elevando os números base

---

**MarkNtel Advisors — AI Agent Market Size**
- URL: https://www.marknteladvisors.com/research-library/ai-agent-market.html
- Dados-chave:
  - Mercado de **USD 7,1 bilhões em 2025** → **USD 54,83 bilhões até 2032** (CAGR 33,91%)
  - A adoção de protocolos avançados como o Model Context Protocol (MCP) em AI agents está ganhando forte momentum
  - Segmento de coding & software development deve crescer ao CAGR mais alto de 19,80% em 2024

---

**PRNewswire / MarketsandMarkets — AI Agents Market worth $47.1 billion by 2030**
- URL: https://www.prnewswire.com/news-releases/ai-agents-market-worth-47-1-billion-by-2030---exclusive-report-by-marketsandmarkets-302246356.html
- Data de publicação: Setembro de 2024
- Dados-chave:
  - Mercado de **USD 5,1 bilhões em 2024** → **USD 47,1 bilhões até 2030**
  - **CAGR de 44,8%** no período
  - A crescente demanda por automação que melhora eficiência, escala e tomada de decisão em diversos setores é o principal driver

---

**Statista / Capgemini — Market value of agentic AI worldwide**
- URL: https://www.statista.com/statistics/1552183/global-agentic-ai-market-value/
- Fonte primária: Capgemini (Janeiro de 2025)
- Dados-chave:
  - Valor do mercado: **USD 5,1 bilhões em 2024**
  - Projeção de superar **USD 47 bilhões até 2030**
  - **CAGR superior a 44%**

---

**Global Market Insights — AI Agents Market Size**
- URL: https://www.gminsights.com/industry-analysis/ai-agents-market
- Data de publicação: Julho de 2025
- Dados-chave:
  - Mercado em **USD 5,9 bilhões em 2024** → **USD 7,7 bilhões em 2025** → **USD 105,6 bilhões até 2034** (CAGR 38,5%)
  - EUA domina o mercado norte-americano com ~77% do share em 2024 e **USD 2,2 bilhões em receita**

---

**Index.dev — AI Agent Statistics 2025–2030**
- URL: https://www.index.dev/blog/ai-agents-statistics
- Dados-chave:
  - 85% das organizações já integraram AI agents em pelo menos um workflow em 2025
  - 78% das organizações já usam IA de alguma forma
  - Mercado projetado para superar **USD 100 bilhões até 2032**

---

**Master of Code — 150+ AI Agent Statistics [2026]**
- URL: https://masterofcode.com/blog/ai-agent-statistics
- Data: ~2 semanas antes de Abril de 2026
- Dados-chave:
  - O mercado deve dobrar aproximadamente a cada dois anos no ritmo atual
  - 44% dos consumidores americanos usariam um AI agent como assistente pessoal; interesse sobe para **70% entre a Geração Z**
  - 81% dos indivíduos reconhecem que AI agents agora são parte central do atendimento ao cliente

---

**Mordor Intelligence — AI Infrastructure Market Size, Trends & Growth Drivers 2031**
- URL: https://www.mordorintelligence.com/industry-reports/ai-infrastructure-market
- Data de atualização: Janeiro de 2026
- Dados-chave:
  - Segmento de software da infraestrutura de AI projetado para crescer a **CAGR de 16,02%** até 2031
  - Margem bruta de software de AI atinge ~75%, muito acima do nível de revenda de hardware
  - Vendors que empacotam middleware com modelos pré-treinados garantem receita recorrente e aprofundam o lock-in com clientes
  - Contexto relevante: o mercado de infraestrutura de AI como um todo migra de um ciclo de capex para um modelo misto com receita de assinatura

---

*Documento gerado em Abril de 2026. Todos os dados de mercado referem-se a relatórios publicados entre 2024 e início de 2026.*