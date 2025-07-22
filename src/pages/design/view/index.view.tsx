import React, { useEffect } from "react";
import Header from "../../../components/header";
import { HeaderProps } from "../../../components/header/types";
import {
  useScreenReaderAnnouncer,
  useFocusManagement,
} from "../../../hooks/useAccessibility";
import Subtitle from "../../../components/.global/subtitle";
import Text from "../../../components/.global/text";
import Title from "../../../components/.global/title";
import IlustracaoInterface from "../../../assets/conceito-d-interface-d-usuario-movel-ux.png";
import Imagem from "../../../assets/Imagem.png";

const DesignView: React.FC<HeaderProps> = ({ links }) => {
  const { announce } = useScreenReaderAnnouncer();
  const { focusMainContent } = useFocusManagement();

  // Set page title for screen readers
  useEffect(() => {
    document.title = "Design System - Sou Junior";

    // Add meta description if not present
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Sistema de design da Sou Junior com componentes e diretrizes visuais"
      );
    }

    // Announce page change to screen readers
    announce("Página de Design System carregada");

    // Focus main content for better navigation
    setTimeout(() => {
      focusMainContent();
    }, 100);
  }, [announce, focusMainContent]);

  return (
    <div className="design-page">
      <Header links={links} />

      {/* Main content area */}
      <main
        className="design-content"
        role="main"
        aria-label="Conteúdo principal da página de design"
      >
        <section aria-labelledby="design-heading">
          <Subtitle>Áreas de Atuação</Subtitle>
          <Title size={40}>Design</Title>

          <Text size={20} color='#323232' weight={400}>
            Na área de Design, o foco está em criar experiências que sejam
            bonitas, intuitivas e centradas nas pessoas. Aqui, design não é só
            aparência, é sobre resolver problemas, facilitar jornadas e gerar
            conexões reais com quem usa o projeto.
          </Text>

          <Text size={20} color='#323232' weight={400}>
            Se você é uma pessoa criativa, curiosa e gosta de pensar em como as
            coisas funcionam para os outros, essa área tem muito a te oferecer.
          </Text>

          <Text size={20} color='#323232' weight={400}>
            Dentro do nosso projeto, temos cargos específicos para diferentes
            etapas e perfis do design.
          </Text>

          <button>Faça parte!</button>

          {/* Placeholder for future content */}
          <div aria-live="polite" aria-atomic="true">
            {/* Dynamic content will be announced to screen readers */}
          </div>
        </section>
        <img src={IlustracaoInterface} alt="" />
      </main>

      <Title as='h2' size={32}>
        Conheça os cargos de Design que você pode explorar com a gente:
      </Title>

      <section
        className="design-content"
        style={{ borderColor: "#338AFF", borderWidth: "1px" }}
      >
        <img src={Imagem} alt="" />

        <div>
          <Title as='h3' size={24}>UX - User Experience</Title>
          <Text size={16} color='#323232' weight={400}>
            Aqui, você vai investigar dores e necessidades das pessoas usuárias,
            mapear jornadas, criar fluxos e wireframes. É uma área muito
            colaborativa, que conversa com Produto, Tech e Pesquisa.
          </Text>
          <ul style={{ marginLeft: "2rem" }}>
            <li>Criar fluxos e mapas de navegação.</li>
            <li>
              Fazer entrevistas e testes de usabilidade (junto da pesquisa).
            </li>
            <li>Prototipar soluções de forma iterativa.</li>
            <li>Garantir acessibilidade e clareza na experiência.</li>
          </ul>
        </div>
      </section>

      <section className='design-content' style={{display: 'block'}}>
        <div style={{margin: 'auto'}}>
          <Title as='h2' size={24} color='#0056b3'>Por que atuar com Design na SouJunior?</Title>
          <ul style={{ marginLeft: '13rem' }}>
            <li>
              Participar de entregas de verdade, com contexto e propósito.
            </li>
            <li>
              Trabalhar com pessoas de Produto, Tech, Marketing e Pesquisa.
            </li>
            <li>Desenvolver seu portfólio com segurança e acompanhamento.</li>
            <li>
              Aprender a colaborar, iterar e defender ideias com base em dados.
            </li>
          </ul>
        </div>

        <div style={{marginTop: '2rem'}}>
          <Title as='h2' size={24} color='#0056b3'>Junte-se a nós e faça parte dessa jornada transformadora!</Title>
          <Text size={20} color='#323232' weight={400}>Sua contribuição pode ser um passo importante para impulsionar 
          carreiras e transformar o futuro de muitos profissionais da área tech.</Text>
          <button>Faça parte!</button>
        </div>
      </section>
    </div>
  );
};

export default DesignView;
