# Site Webapp V2 - Sou Junior

Uma aplicação React moderna construída com TypeScript, focada em acessibilidade e experiência do usuário inclusiva.

## 📋 Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias](#tecnologias)
- [Instalação](#instalação)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Acessibilidade](#acessibilidade)
- [Testes](#testes)
- [Internacionalização](#internacionalização)
- [Contribuição](#contribuição)
- [Deployment](#deployment)

## 🎯 Sobre o Projeto

Este projeto foi desenvolvido pela Sou Junior como uma aplicação web moderna que prioriza:

- **Acessibilidade**: Seguindo diretrizes WCAG 2.1 AA
- **Performance**: Otimizado para carregamento rápido
- **Usabilidade**: Interface intuitiva e responsiva
- **Manutenibilidade**: Código limpo e bem estruturado

## 🚀 Tecnologias

### Principais

- **React 18.3.1** - Biblioteca para interfaces de usuário
- **TypeScript 4.9.5** - Tipagem estática
- **React Router DOM 7.6.2** - Roteamento
- **Styled Components 6.1.19** - CSS-in-JS
- **React i18next 14.1.3** - Internacionalização

### Ferramentas de Desenvolvimento

- **Jest 30.0.2** - Framework de testes
- **Cypress 14.5.0** - Testes E2E
- **ESLint** - Linting de código
- **Puppeteer 24.10.2** - Testes visuais

### Analytics e Monitoramento

- **React GA4 2.1.0** - Google Analytics 4
- **Web Vitals 2.1.4** - Métricas de performance

## 📦 Instalação

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos

```bash
# Clone o repositório
git clone [URL_DO_REPOSITORIO]

# Entre no diretório
cd site-webapp-v2

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env

# Inicie o servidor de desenvolvimento
npm start
```

## 🔧 Scripts Disponíveis

### Desenvolvimento

```bash
# Inicia o servidor de desenvolvimento
npm start
# Acesse http://localhost:3000

# Build para produção
npm run build

# Ejetar configurações (irreversível)
npm run eject
```

### Testes

```bash
# Executa todos os testes em modo watch
npm test

# Executa apenas testes unitários
npm run test:unit

# Atualiza snapshots dos testes
npm run test:unit:update

# Executa testes de componente com Cypress
npm run cypress:open

# Executa testes E2E
npm run cypress:run
```

## 📁 Estrutura do Projeto

```
src/
├── components/           # Componentes reutilizáveis
│   ├── .global/         # Componentes globais
│   │   ├── error-boundary/
│   │   ├── link/
│   │   └── loading/
│   └── header/          # Cabeçalho da aplicação
├── hooks/               # Hooks customizados
│   └── useAccessibility.ts
├── i18n/               # Configurações de internacionalização
│   ├── locales/        # Arquivos de tradução
│   │   ├── pt.json
│   │   ├── en.json
│   │   └── es.json
│   └── i18n.ts
├── pages/              # Páginas da aplicação
│   ├── design/         # Sistema de design
│   └── projects/       # Projetos
├── services/           # Serviços e APIs
├── styles/             # Estilos globais
│   └── accessibility.css
├── types/              # Definições de tipos
├── utils/              # Utilitários
│   └── enums/
└── assets/             # Recursos estáticos
```

## ♿ Acessibilidade

Este projeto segue rigorosamente as diretrizes **WCAG 2.1 AA**, implementando:

### Recursos Implementados

#### 🎯 Navegação por Teclado

- **Skip links**: "Pular para o conteúdo principal"
- **Ordem de foco lógica**: Navegação sequencial intuitiva
- **Indicadores visuais**: Estados de foco bem definidos
- **Suporte completo**: Enter, Space, Tab, Shift+Tab, Arrow keys

#### 🎨 Contraste e Cores

- **Razão de contraste**: Mínimo 4.5:1 para texto normal
- **Alto contraste**: Suporte ao modo de alto contraste do sistema
- **Cores acessíveis**: Paleta otimizada para daltonismo

#### 🗣️ Tecnologia Assistiva

- **ARIA labels**: Descrições detalhadas para screen readers
- **Live regions**: Anúncios dinâmicos acessíveis
- **Roles semânticos**: banner, main, navigation, button, link
- **Screen reader announcer**: Hook customizado para anúncios

#### 📱 Responsividade

- **Touch targets**: Mínimo 44x44px para elementos interativos
- **Design fluido**: Adaptação para todos os tamanhos de tela
- **Zoom até 200%**: Sem perda de funcionalidade

### Componentes Acessíveis

#### Link Component

```typescript
// Exemplo de uso
<Link
  onClick={handleClick}
  ariaLabel="Navegar para página sobre nós"
  role="button"
>
  Sobre Nós
</Link>
```

#### Header Component

- Navegação principal com `role="navigation"`
- Logo com texto alternativo descritivo
- Links com aria-labels específicos

#### Error Boundary

- Tratamento acessível de erros
- Mensagens claras e acionáveis
- Anúncios automáticos para screen readers

### Hooks de Acessibilidade

```typescript
// useScreenReaderAnnouncer
const { announce } = useScreenReaderAnnouncer();
announce("Página carregada com sucesso", "polite");

// useFocusManagement
const { focusMainContent, focusFirstError } = useFocusManagement();

// useAssistiveTechnology
const { isScreenReaderActive, prefersReducedMotion } = useAssistiveTechnology();
```

### Checklist WCAG 2.1 AA ✅

#### Perceptível

- ✅ 1.1.1: Imagens com texto alternativo
- ✅ 1.3.1: HTML semântico e estruturado
- ✅ 1.3.2: Ordem de leitura lógica
- ✅ 1.4.3: Contraste mínimo (4.5:1)
- ✅ 1.4.10: Reflow responsivo
- ✅ 1.4.11: Contraste para elementos não-textuais

#### Operável

- ✅ 2.1.1: Funcionalidade por teclado
- ✅ 2.1.2: Sem armadilhas de teclado
- ✅ 2.4.1: Skip links implementados
- ✅ 2.4.3: Ordem de foco lógica
- ✅ 2.4.7: Foco visível
- ✅ 2.5.5: Tamanho mínimo de toque (44px)

#### Compreensível

- ✅ 3.1.1: Idioma da página definido
- ✅ 3.2.1: Foco sem mudanças inesperadas
- ✅ 3.3.2: Labels e instruções claras

#### Robusto

- ✅ 4.1.1: HTML válido
- ✅ 4.1.2: ARIA adequado
- ✅ 4.1.3: Mensagens de status

### CSS de Acessibilidade

```css
/* Classes utilitárias incluídas */
.sr-only {
  /* Conteúdo apenas para screen readers */
}
.skip-link {
  /* Links de pular navegação */
}

/* Media queries de acessibilidade */
@media (prefers-reduced-motion: reduce) {
  /* Reduz animações */
}
@media (prefers-contrast: high) {
  /* Aumenta contraste */
}
```

### Testes de Acessibilidade Recomendados

#### Ferramentas Automatizadas

- **axe-core**: Integrado nos testes E2E
- **Lighthouse**: Auditoria de acessibilidade
- **WAVE**: Extensão para análise visual

#### Testes Manuais

1. **Navegação por teclado**: Tab, Shift+Tab, Enter, Space, Arrow keys
2. **Screen readers**: NVDA (Windows), VoiceOver (Mac), TalkBack (Android)
3. **Zoom**: Teste até 200% de zoom
4. **Alto contraste**: Modo de alto contraste do sistema

## 🧪 Testes

### Estrutura de Testes

```
tests/
├── unit/               # Testes unitários
│   ├── components/     # Testes de componentes
│   ├── hooks/          # Testes de hooks
│   ├── pages/          # Testes de páginas
│   └── utils/          # Testes de utilitários
├── component/          # Testes de componente (Cypress)
│   └── src/pages/
└── setup/              # Configurações de teste
    ├── customMatchers.ts
    ├── pngSnapshotMatcher.ts
    └── visualTestsSetup.ts
```

### Tipos de Teste

#### Testes Unitários (Jest)

```bash
# Executar todos os testes unitários
npm run test:unit

# Executar com watch mode
npm test

# Atualizar snapshots
npm run test:unit:update
```

**Exemplo de teste de componente:**

```typescript
describe("Header Component", () => {
  it("should render with accessibility attributes", () => {
    render(<Header links={mockLinks} />);

    const navigation = screen.getByRole("navigation");
    expect(navigation).toBeInTheDocument();
    expect(navigation).toHaveAttribute("aria-label", "Navegação principal");
  });

  it("should handle keyboard navigation", async () => {
    const mockClick = jest.fn();
    render(<Header links={[{ label: "Home", onClick: mockClick }]} />);

    const link = screen.getByRole("menuitem");
    await user.keyboard("{Tab}{Enter}");

    expect(mockClick).toHaveBeenCalled();
  });
});
```

#### Testes Visuais (Jest + Puppeteer)

- **Screenshot testing**: Comparação pixel-perfect
- **Cross-browser**: Validação em diferentes navegadores
- **Responsive**: Testes em múltiplas resoluções

```typescript
// Exemplo de teste visual
it("should match screenshot", async () => {
  const image = await page.screenshot();
  expect(image).toMatchImageSnapshot({
    threshold: 0.2,
    customDiffConfig: { threshold: 0.1 },
  });
});
```

#### Testes E2E (Cypress)

```bash
# Abrir interface do Cypress
npx cypress open

# Executar testes headless
npx cypress run
```

**Exemplo de teste E2E:**

```typescript
describe("Design Page", () => {
  it("should navigate and be accessible", () => {
    cy.visit("/design");
    cy.checkA11y(); // Verificação de acessibilidade

    cy.get('[data-cy="navigation-link"]')
      .should("be.visible")
      .and("have.attr", "aria-label");
  });
});
```

### Matchers Customizados

O projeto inclui matchers personalizados para facilitar os testes:

```typescript
// setup/customMatchers.ts
expect.extend({
  toBeAccessible: element => {
    // Verificações de acessibilidade customizadas
  },
  toHaveCorrectFocusOrder: container => {
    // Verificação da ordem de foco
  },
});
```

## 🌍 Internacionalização

### Idiomas Suportados

- 🇧🇷 Português (pt)
- 🇺🇸 Inglês (en)
- 🇪🇸 Espanhol (es)

### Configuração

```typescript
// i18n/i18n.ts
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "pt",
    debug: process.env.NODE_ENV === "development",
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
  });
```

### Uso nos Componentes

```typescript
import { useTranslation } from "react-i18next";

const Component = () => {
  const { t } = useTranslation();

  return <h1>{t("pages.home.title")}</h1>;
};
```

### Estrutura dos Arquivos de Tradução

```json
// locales/pt.json
{
  "pages": {
    "home": {
      "title": "Bem-vindo à Sou Junior"
    }
  },
  "components": {
    "header": {
      "navigation": "Navegação principal"
    }
  }
}
```

## 🤝 Contribuição

### Guidelines de Desenvolvimento

1. **Acessibilidade**: Toda nova funcionalidade deve seguir WCAG 2.1 AA
2. **Testes**: Código novo deve ter cobertura de teste adequada
3. **TypeScript**: Use tipagem forte, evite `any`
4. **Commits**: Siga o padrão [Conventional Commits](https://conventionalcommits.org/)

### Fluxo de Contribuição

```bash
# 1. Fork o projeto
# 2. Crie uma branch para sua feature
git checkout -b feature/nova-funcionalidade

# 3. Faça suas alterações
# 4. Execute os testes
npm test
npm run test:unit

# 5. Verifique acessibilidade
npm run test:a11y

# 6. Commit suas mudanças
git commit -m "feat: adiciona nova funcionalidade acessível"

# 7. Push para sua branch
git push origin feature/nova-funcionalidade

# 8. Abra um Pull Request
```

### Checklist para PRs

- [ ] Código segue os padrões de acessibilidade
- [ ] Testes unitários adicionados/atualizados
- [ ] Testes de acessibilidade passando
- [ ] Documentação atualizada se necessário
- [ ] Sem breaking changes (ou documentados)
- [ ] Build está passando
- [ ] Screenshots para mudanças visuais

## 🚀 Deployment

### Build de Produção

```bash
# Gerar build otimizado
npm run build

# O build será criado na pasta 'build/'
```

### Variáveis de Ambiente

```env
# .env
REACT_APP_GA_MEASUREMENT_ID=G-XXXXXXXXXX
REACT_APP_API_URL=https://api.soujunior.org
REACT_APP_ENVIRONMENT=production
```

### Otimizações Incluídas

- **Code splitting**: Carregamento sob demanda
- **Tree shaking**: Remoção de código não utilizado
- **Minificação**: CSS e JavaScript otimizados
- **Service Worker**: Cache inteligente (se configurado)
- **Bundle analysis**: Análise de tamanho dos bundles

### Deploy Recomendado

- **Vercel**: Deploy automático via Git
- **Netlify**: CI/CD integrado
- **AWS S3 + CloudFront**: Para maior controle
- **GitHub Pages**: Para projetos open source

## 📊 Performance

### Métricas Monitoradas

- **Largest Contentful Paint (LCP)**: < 2.5s
- **First Input Delay (FID)**: < 100ms
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Time to Interactive (TTI)**: < 3.5s

### Ferramentas de Monitoramento

- **Web Vitals**: Métricas em tempo real
- **Google Analytics 4**: Comportamento do usuário
- **Lighthouse CI**: Auditoria contínua

## 📝 Licença

Este projeto está sob a licença [MIT](LICENSE).

## 🆘 Suporte

Para dúvidas ou problemas:

1. Verifique as [Issues abertas](../../issues)
2. Consulte a [documentação de acessibilidade](#acessibilidade)
3. Entre em contato com a equipe Sou Junior

---

**Feito com ❤️ pela equipe Sou Junior**

_Construindo um futuro mais inclusivo, um código por vez._
