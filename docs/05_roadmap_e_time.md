# 5. Roadmap e Time

Este documento descreve o roadmap de execução da Baleia no contexto do **Colosseum Frontier** e a composição do time responsável por transformar a tese do projeto em um MVP tecnicamente defensável, demonstrável e evolutivo.

## 5.1 Objetivo do roadmap

Como a Baleia será submetida ao **Colosseum Frontier**, o roadmap precisa refletir o formato real do programa: um sprint online de cinco semanas, de **6 de abril de 2026 a 11 de maio de 2026**, com foco em construir um produto funcional, uma narrativa técnica clara e uma base real para continuidade pós-hackathon.

O roadmap foi estruturado para validar três hipóteses centrais do projeto:

- que o settlement entre agents em USDC na Solana pode ser operacionalizado com baixa fricção
- que essa infraestrutura pode ser traduzida em uma experiência compreensível para creators e usuários
- que a Baleia pode sair do hackathon como embrião de produto e não apenas como prova de conceito isolada

## 5.2 Fases de execução

### Fase 0: Preparação e alinhamento do escopo
**Período:** até 5 de abril de 2026

Antes do kickoff oficial, a prioridade é fechar o recorte técnico e narrativo do projeto. Nesta etapa, o trabalho se concentra em:

- consolidar a Baleia como protocolo de comunicação, settlement e reputação para sistemas multi-agent
- alinhar a arquitetura de referência do MVP, delimitando explicitamente o que ficará on-chain e o que ficará off-chain
- definir o escopo do núcleo do produto para o hackathon: `Baleia Settlement Program`, `Agent Registry`, `Settlement Service`, `Action Service` e fluxo canônico `request -> quote -> approve -> settle -> receipt`
- organizar o repositório, a documentação, o backlog e a divisão de responsabilidades do time
- garantir que o projeto entre no hackathon com uma proposta tecnicamente coesa e com um diferencial claro dentro do ecossistema Solana

### Fase 1: Prova de viabilidade do settlement
**Período:** semana 1, de 6 a 12 de abril de 2026

Na primeira semana, o foco é provar o caso central do produto: um agent pagando outro agent em USDC na Solana. O objetivo desta fase é reduzir o principal risco técnico da tese.

Nesta etapa, a execução se concentra em:

- implementar o esqueleto do fluxo de settlement em Devnet
- provisionar wallets e ATAs de USDC para os atores mínimos do sistema
- estruturar a primeira versão do `SettlementIntent`
- validar a gravação de referências por `request_id`
- publicar a primeira atualização de progresso com foco em viabilidade do caso de uso

Ao final desta fase, o resultado esperado é a demonstração de que o núcleo econômico da Baleia é tecnicamente executável.

### Fase 2: Construção do núcleo do protocolo
**Período:** semana 2, de 13 a 19 de abril de 2026

Com a viabilidade inicial validada, a prioridade passa a ser a construção do primeiro núcleo utilizável do produto. Nesta fase, o trabalho se concentra em:

- implementar a primeira versão do `Baleia Settlement Program`, com split de taxa, memo por `request_id` e prevenção de replay
- estruturar o `Agent Registry` com o modelo mínimo de `AgentProfile`
- construir o `Settlement Service` para materializar, enviar e reconciliar a transação
- construir o `Action Service` para suportar aprovações humanas no fluxo
- montar um cenário mínimo com dois agents internos para validar o ciclo completo de invocação e liquidação

Ao final desta fase, o resultado esperado é um MVP técnico funcional, ainda que restrito em escopo.

### Fase 3: Productização, experiência e instrumentação
**Período:** semanas 3 e 4, de 20 de abril a 3 de maio de 2026

Depois de estabilizar o núcleo do protocolo, a implementação precisa ser transformada em uma demonstração de produto compreensível e auditável. Nesta fase, o trabalho se concentra em:

- construir uma interface simples, mas suficiente para demonstrar onboarding, aprovação e execução
- incorporar fee abstraction como princípio de UX, deixando explícito que o usuário não precisa manter SOL para utilizar o fluxo principal
- integrar ou simular a conversão para USDC, de acordo com o escopo viável do MVP
- instrumentar logs, receipts e dados mínimos para analytics e reputação off-chain
- refinar a explicação técnica da solução para que jurados, creators e desenvolvedores entendam claramente o valor do protocolo

Ao final desta fase, o resultado esperado é que a Baleia seja percebida como produto e não apenas como infraestrutura isolada.

### Fase 4: Empacotamento da submissão
**Período:** semana 5, de 4 a 11 de maio de 2026

Na fase final do hackathon, o foco passa a ser qualidade de entrega, clareza de apresentação e robustez da submissão. Nesta etapa, o trabalho se concentra em:

- polir a demo principal e eliminar fricções no fluxo de apresentação
- revisar o repositório, o README e as instruções de execução
- consolidar a narrativa de por que a Baleia depende da Solana em nível arquitetural
- preparar vídeo, deck, documentação técnica e descrição final do projeto
- submeter o projeto com entregáveis consistentes, atualizações coerentes e uma narrativa integrada entre produto, arquitetura e mercado

Ao final desta fase, o resultado esperado é uma submissão competitiva tanto do ponto de vista técnico quanto do ponto de vista de posicionamento.

### Fase 5: Continuidade pós-hackathon
**Período:** maio de 2026 em diante

Caso a Baleia avance após o Frontier, o hackathon deve ser tratado como a primeira etapa de construção do produto e não como o encerramento do projeto. Nesta fase, o trabalho se concentra em:

- evoluir o MVP para um alpha privado com creators selecionados
- integrar componentes adicionais do stack, como Jupiter e Pyth, com maior robustez operacional
- amadurecer o mecanismo inicial de reputação e observabilidade
- estruturar a abertura gradual da rede para novos creators
- preparar a Baleia para mentoria, captação, aceleração e continuidade dentro do ecossistema Colosseum e Solana

## 5.3 Critérios de sucesso

O roadmap inicial será considerado bem-sucedido se, ao final desse ciclo, a Baleia conseguir:

- provar que um agent pode pagar outro agent em USDC com baixa fricção
- provar que o caso de uso central cabe dentro do escopo e do tempo do hackathon
- provar que creators podem publicar e monetizar agents sem precisar dominar Web3
- provar que a experiência do usuário final não depende da posse direta de SOL
- demonstrar que a Baleia gera evidência econômica suficiente para sustentar reputação, analytics e distribuição
- entregar uma submissão competitiva para o padrão de avaliação da Solana e da Colosseum

## 5.4 Composição do time

A estrutura do time foi definida para cobrir os três domínios considerados críticos para a Baleia: estratégia, arquitetura de produto e execução técnica.

- **Henrique Botti - Estratégia, Operações e Negócios**
  - **Responsabilidade no projeto:** estruturação estratégica, leitura de mercado, visão operacional e disciplina de execução.
  - **Capacidade principal:** experiência executiva em engenharia, operações, confiabilidade e transformação de sistemas complexos, contribuindo com visão de escala, processo e consistência operacional.
  - **Contato/Social:** [LinkedIn](https://www.linkedin.com/in/henrique-botti-6272571a0/)

- **Giovanna Britto - Produto, Engenharia e Comunicação**
  - **Responsabilidade no projeto:** articulação entre produto, documentação técnica, construção de solução e narrativa de submissão.
  - **Capacidade principal:** atuação na interseção entre desenvolvimento, pesquisa, estruturação conceitual e comunicação do projeto, ajudando a transformar a tese da Baleia em produto demonstrável e documentação clara.
  - **Contato/Social:** [LinkedIn](https://www.linkedin.com/in/giovanna-britto)

- **Vinicius Testa Passos - Engenharia de Software e Blockchain**
  - **Responsabilidade no projeto:** implementação do MVP, integração dos componentes técnicos e evolução do stack de execução.
  - **Capacidade principal:** experiência em desenvolvimento de software, APIs e iniciativas ligadas a blockchain, agregando velocidade de prototipação e capacidade de implementação do núcleo técnico.
  - **Contato/Social:** [LinkedIn](https://www.linkedin.com/in/vinicius-testa-passos)

## 5.5 Complementaridade do time

A principal vantagem da equipe está na composição entre visão estratégica, clareza de produto e capacidade de implementação.

- **Estratégia e operação:** a equipe consegue pensar a Baleia como infraestrutura, negócio e sistema operacional de mercado.
- **Produto e comunicação:** a equipe consegue traduzir uma tese técnica em narrativa clara para jurados, creators, parceiros e investidores.
- **Execução técnica:** a equipe consegue construir, testar, documentar e iterar o MVP dentro do ciclo do hackathon.

Essa composição é relevante porque a Baleia exige mais do que uma boa demo. O projeto depende de coerência entre arquitetura, modelo econômico, experiência do usuário e capacidade real de execução.
