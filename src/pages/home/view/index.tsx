import ImageMascote from '../../../assets/mascote.png';
import Title from '../../../components/.global/title';
import Text from '../../../components/.global/text';

import {
  HomeButton,
  HomeContainer,
  HomeContent,
  HomeTextContent,
} from './styles';
import Card from '../../../components/card';

const HomeView = () => {
  return (
    <>
      <HomeContainer>
        <HomeContent>
          <HomeTextContent>
            <Title id="home-heading" color="white" size={40}>
              Desenvolva habilidades no mercado Tech
            </Title>

            <Text size={20} color="white" weight={300}>
              Na SouJunior, você trabalha com produtos digitais e adquire
              habilidades valiosas para a sua carreira.
            </Text>

            <Text size={20} color="white" weight={300}>
              Você terá chance de desenvolver suas competências e aprofundar o
              seu conhecimento em áreas de seu interesse, aumentando assim suas
              chances de sucesso na sua trajetória profissional.
            </Text>

            <HomeButton
              href="https://stars.soujunior.tech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Faça Parte!
            </HomeButton>
          </HomeTextContent>

          <img src={ImageMascote} alt="" width={443} height={443} />
        </HomeContent>
      </HomeContainer>

      <section style={{ margin: '0 auto', marginTop: '4rem' }}>
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

        <Title
          as="h3"
          width={244}
          color="#001633"
          size={32}
          fontWeight={600}
          marginTop={8}
          marginBottom={36}
        >
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
    </>
  );
};

export default HomeView;
