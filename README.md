# Baleia Docs

Documentação da Baleia publicada com **Docusaurus** e preparada para deploy no **GitHub Pages**.

## Estrutura

- `docs/`: conteúdo principal da documentação
- `docusaurus.config.js`: configuração do site
- `sidebars.js`: navegação lateral
- `.github/workflows/deploy-docs.yml`: workflow de deploy automático

## Desenvolvimento local

Instale as dependências:

```bash
npm install
```

Inicie o ambiente local:

```bash
npm run start
```

Gere o build de produção:

```bash
npm run build
```

Sirva o build localmente:

```bash
npm run serve
```

## Deploy no GitHub Pages

O repositório já está configurado para deploy automático via GitHub Actions.

### Passos

1. Faça push para a branch `main`.
2. No GitHub, vá em `Settings > Pages`.
3. Em `Build and deployment`, selecione `GitHub Actions`.
4. Aguarde a execução do workflow `Deploy Docs`.

O site será publicado em:

```text
https://vintesta.github.io/baleia/
```

## Observações

- O `baseUrl` está configurado para o repositório `VinTesta/baleia`.
- Se o nome do repositório mudar, será necessário atualizar `docusaurus.config.js`.
