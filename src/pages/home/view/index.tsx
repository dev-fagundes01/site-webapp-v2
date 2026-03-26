import ImageMascote from '../../../assets/mascote.png';
import Avatar from '../../../components/.global/avatar';
import Title from '../../../components/.global/title';
import Text from '../../../components/.global/text';
import Card from '../../../components/card';
import Carousel from '../../../components/carousel';
import IconBusiness from '../../../assets/icon-business.png';
import IconTechRecruiter from '../../../assets/icon-techrecruiter.png';
import IconProduct from '../../../assets/icon-produto.png';
import IconAgile from '../../../assets/icon-agil.png';
import IconSocialMedia from '../../../assets/icon-socialmedia.png';
import IconDesigner from '../../../assets/icon-ui.png';
import IconFront from '../../../assets/icon-front.png';
import IconBack from '../../../assets/icon-back.png';
import IconData from '../../../assets/icon-data2.png';
import IconQA from '../../../assets/icon-qa.png';
import IconDevOps from '../../../assets/icon-devops.png';
import SkillsCarousel from '../../../components/skills.carousel';
import type { SkillItem } from '../../../components/skills.carousel';

import {
  AreasContainer,
  AreasContent,
  AreasTextContent,
  CarouselContainer,
  HomeButton,
  HomeContainer,
  HomeContent,
  HomeTextContent,
  TestimonialAuthor,
  TestimonialCard,
  TestimonialColumn,
} from './styles';
import { HOME_TESTIMONIALS } from './testimonialsData';

const carouselItems: SkillItem[] = [
  {
    id: 1,
    img: IconBusiness,
    title: 'Business',
    area: 'business',
  },
  {
    id: 2,
    img: IconTechRecruiter,
    title: 'Tech Recruiter',
    area: 'tech-recruiter',
  },
  {
    id: 3,
    img: IconProduct,
    title: 'Produto',
    area: 'product',
  },
  {
    id: 4,
    img: IconAgile,
    title: 'Ágil',
    area: 'agility',
  },
  {
    id: 5,
    img: IconSocialMedia,
    title: 'Social Media',
    area: 'social-media',
  },
  {
    id: 6,
    img: IconDesigner,
    title: 'UI & UX Designer',
    area: 'design',
  },
  {
    id: 7,
    img: IconFront,
    title: 'Front-end',
    area: 'front-end',
  },
  {
    id: 8,
    img: IconBack,
    title: 'Back-end',
    area: 'back-end',
  },
  {
    id: 9,
    img: IconData,
    title: 'Dados',
    area: 'data',
  },
  {
    id: 10,
    img: IconQA,
    title: 'QA',
    area: 'qa',
  },
  {
    id: 11,
    img: IconDevOps,
    title: 'DevOps',
    area: 'devops',
  },
];

const HomeView = () => {
  return (
    <>
      <HomeContainer>
        <HomeContent>
          <HomeTextContent>
            <Title id="home-heading" color="white" size={40}>
              Desenvolva habilidades no mercado Tech
            </Title>

            <Text size={20} color="white" weight={300} marginBlock={0}>
              Na SouJunior, você trabalha com produtos digitais e adquire
              habilidades valiosas para a sua carreira.
            </Text>

            <Text size={20} color="white" weight={300} marginBlock={0}>
              Você terá chance de desenvolver suas competências e aprofundar o
              seu conhecimento em áreas de seu interesse, aumentando assim suas
              chances de sucesso na sua trajetória profissional.
            </Text>

            <HomeButton
              href="https://stars.soujunior.tech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Faça Parte
            </HomeButton>
          </HomeTextContent>

          <img src={ImageMascote} alt="" width={443} height={443} />
        </HomeContent>
      </HomeContainer>

      <section
        id="sobre-nos"
        style={{
          minHeight: '70vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
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
          marginBlock="0"
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
          descriptionColor="#323232"
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
            <span style={{ fontSize: '2.25rem', fontWeight: 300 }}>+ 200</span>
            <br />
            <span style={{ fontWeight: 600 }}>Participantes</span>
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
            <span style={{ fontSize: '2.25rem', fontWeight: 300 }}>+ 200</span>
            <br />
            <span style={{ fontWeight: 600 }}>Participantes</span>
          </p>{' '}
          <p style={{ fontSize: '1.5rem', textAlign: 'center' }}>
            <span style={{ fontSize: '2.25rem', fontWeight: 300 }}>+ 200</span>
            <br />
            <span style={{ fontWeight: 600 }}>Participantes</span>
          </p>
        </div>
        <hr
          style={{ width: '400px', marginTop: '3rem', marginInline: 'auto' }}
        />
      </section>

      <AreasContainer>
        <AreasContent>
          <AreasTextContent>
            <Title
              color="#003986"
              size={40}
              textAlign="center"
              marginBottom={20}
            >
              Áreas de atuação
            </Title>
            <Text size={16} color="#323232" weight={400} marginBlock={0}>
              Aqui na SouJunior, atuam profissionais iniciantes das diversas
              áreas que compõem uma empresa de tecnologia.
            </Text>
            <Text size={16} color="#323232" weight={400} marginBlock={0}>
              Confira abaixo as áreas de atuação que temos em nosso quadro
              atualmente:
            </Text>
          </AreasTextContent>
          <CarouselContainer>
            <SkillsCarousel items={carouselItems} />
          </CarouselContainer>
        </AreasContent>
      </AreasContainer>

      <section
        id="depoimentos"
        aria-label="Depoimentos"
        style={{
          margin: '4rem auto 0',
          paddingBottom: '3rem',
          maxWidth: '1220px',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Title
            as="h2"
            color="#001633"
            size={48}
            fontWeight={700}
            textAlign="center"
            marginBottom={0}
          >
            Depoimentos
          </Title>
          <Text
            as="p"
            color="#001633"
            size={24}
            weight={600}
            lineHeight={1.2}
            textAlign="center"
            marginBlock={12}
          >
            O que falam sobre a SouJunior
          </Text>
        </div>

        <Carousel
          items={HOME_TESTIMONIALS}
          renderItem={(t) => (
            <TestimonialColumn key={t.id}>
              <TestimonialCard>
                <Text
                  as="p"
                  color="#FFFFFF"
                  size={15}
                  weight={400}
                  lineHeight={1.45}
                  marginBlock={0}
                >
                  {t.quote}
                </Text>
              </TestimonialCard>
              <TestimonialAuthor>
                <Avatar src={t.avatarSrc || ''} alt={t.avatarAlt || ''} />
                <Text
                  as="p"
                  color="#323232"
                  size={18}
                  weight={500}
                  marginBlock={10}
                  textAlign="center"
                >
                  {t.name}
                </Text>
                <Text
                  as="p"
                  color="#323232"
                  size={14}
                  weight={400}
                  marginBlock={0}
                  textAlign="center"
                >
                  {t.role}
                </Text>
              </TestimonialAuthor>
            </TestimonialColumn>
          )}
        />
      </section>
    </>
  );
};

export default HomeView;
