# Snapshots PNG - Componente Link

Este diretório contém snapshots PNG gerados automaticamente para o componente Link durante os testes unitários.

## Como funciona

- **Arquivos `.png`**: Placeholders PNG de 1x1 pixel, pois o ambiente Jest/JSDOM não suporta renderização visual real
- **Arquivos `.meta.json`**: Contém metadados importantes como HTML renderizado, timestamp e informações do teste

## Comandos úteis

```bash
# Executar testes e gerar/atualizar snapshots PNG
npm run test:unit -- -u

# Executar apenas testes do componente Link
npm run test:unit tests/unit/components/.global/link/
```

## Limitações atuais

⚠️ **Importante**: Os arquivos PNG gerados são placeholders, não imagens reais do componente renderizado.

Para snapshots visuais reais, considere usar:

- **Cypress**: Para testes E2E com screenshots reais
- **Playwright**: Para testes visuais cross-browser
- **Storybook**: Para documentação visual dos componentes

## Estrutura dos metadados

Cada arquivo `.meta.json` contém:

- `testName`: Nome do teste
- `timestamp`: Quando foi gerado
- `htmlContent`: HTML renderizado do componente
- `note`: Explicação sobre a natureza placeholder dos PNGs

## Para desenvolvedores

Estes arquivos são gerados automaticamente. Não edite manualmente.
Para atualizar snapshots, execute `npm run test:unit -- -u`.
