import { useEffect } from 'react';
import {
  useScreenReaderAnnouncer,
  useFocusManagement,
} from '../../hooks/useAccessibility';
import Subtitle from '../../components/.global/subtitle';
import Text from '../../components/.global/text';
import Title from '../../components/.global/title';
import ImageDesign from '../../assets/areas-expertise/design.png';
import Button from '../../components/.global/button';
import Card from '../../components/card';

const HomeView: React.FC = () => {
  const { announce } = useScreenReaderAnnouncer();
  const { focusMainContent } = useFocusManagement();

  // Set page title for screen readers
  useEffect(() => {
    // Add meta description if not present
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Sistema de design da Sou Junior com componentes e diretrizes visuais',
      );
    }

    // Announce page change to screen readers
    announce('Página de Design System carregada');

    // Focus main content for better navigation
    setTimeout(() => {
      focusMainContent();
    }, 100);
  }, [announce, focusMainContent]);

  return (
    <div className="design-page">
      <main
        className="design-content"
        role="main"
        aria-label="Conteúdo principal da página de design"
      >
        <section aria-labelledby="design-heading">
          <Subtitle marginBottom={36} marginTop={16}>
            Área de Atuação
          </Subtitle>
          <Title size={40}>Design</Title>

          <Text color="#323232" weight={400}>
            Na área de Design, o foco está em criar experiências que sejam
            bonitas, intuitivas e centradas nas pessoas. Aqui, design não é só
            aparência, é sobre resolver problemas, facilitar jornadas e gerar
            conexões reais com quem usa o projeto.
          </Text>

          <Text color="#323232" weight={400}>
            Se você é uma pessoa criativa, curiosa e gosta de pensar em como as
            coisas funcionam para os outros, essa área tem muito a te oferecer.
          </Text>

          <Text color="#323232" weight={400}>
            Dentro do nosso projeto, temos cargos específicos para diferentes
            etapas e perfis do design.
          </Text>

          <Button variant="primary">Faça parte!</Button>

          {/* Placeholder for future content */}
          <div aria-live="polite" aria-atomic="true">
            {/* Dynamic content will be announced to screen readers */}
          </div>
        </section>
        <img
          src={ImageDesign}
          alt="Ilustração representando a atuação de design"
        />
      </main>

      <section style={{ margin: '0 auto' }}>
        <Title
          as="h2"
          textAlign="center"
          color="#001633"
          size={48}
          width={510}
          fontWeight={700}
          marginBottom={12}
        >
          Sobre a SouJunior
        </Title>

        <Card
          width={879}
          description={
            <>
              O projeto SouJunior, criado em 1º de julho de 2022 por Wouerner
              Brandão, surgiu da insatisfação com o mercado de tecnologia e da
              falta de oportunidades para iniciantes.
              <p style={{ marginBlock: '1rem' }}>
                Com mais de 120 voluntários, a iniciativa prepara profissionais
                juniores por meio da prática real, construção de produtos e
                vivência do dia a dia de uma empresa tech.{' '}
              </p>
              O projeto conta com mentores experientes que lideram os times e
              oferece um portfólio de produtos para dar visibilidade aos
              juniores, conectando-os a recrutadores e oportunidades. Participar
              da SouJunior proporciona experiência prática, networking, mentoria
              e acesso à primeira oportunidade no mercado.
            </>
          }
          descriptionSize={16}
          descriptionWeight={400}
          descriptionColor="#666666"
        />

        <Title as="h3" width={244} color="#001633" size={32} fontWeight={600}>
          Nosso impacto
        </Title>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <p
            style={{
              borderInlineEnd: '1px',
              borderInlineEndStyle: 'solid',
              borderInlineColor: '#666666',
              paddingRight: '10rem',
              fontSize: '1.5rem',
              textAlign: 'center',
            }}
          >
            + 200 <br /> Participantes
          </p>{' '}
          <p
            style={{
              borderInlineEnd: '1px',
              borderInlineEndStyle: 'solid',
              borderInlineColor: '#666666',
              paddingRight: '10rem',
              marginInline: '10rem',
              fontSize: '1.5rem',
              textAlign: 'center',
            }}
          >
            + 200 <br /> Participantes
          </p>{' '}
          <p style={{ fontSize: '1.5rem', textAlign: 'center' }}>
            + 200 <br /> Participantes
          </p>
        </div>
        <hr
          style={{ width: '400px', marginTop: '3rem', marginInline: 'auto' }}
        />
      </section>
    </div>
  );
};

export default HomeView;
