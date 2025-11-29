import Button from '../../../components/.global/button';
import Subtitle from '../../../components/.global/subtitle';
import Text from '../../../components/.global/text';
import Title from '../../../components/.global/title';
import ImageBusiness from '../../../assets/image-business.png';
import Card from '../../../components/card';
import Carousel from '../../../components/.global/carousel';
import IconGitHub from '../../../assets/icon-github.svg';
import IconDocker from '../../../assets/icon-docker.svg';
import IconDeploy from '../../../assets/icon-deploy.svg';
import IconAWS from '../../../assets/icon-aws.svg';
import IconLinux from '../../../assets/icon-linux.svg';
import IconMonitoring from '../../../assets/icon-monitoring.svg';

const carouselItems = [
  {
    id: 1,
    title: 'SGitHub Actions',
    description: 'Para CI/CD.',
    icon: IconGitHub,
  },
  {
    id: 2,
    title: 'Docker + Compose',
    description: 'Gerenciamento de containers, e orquestração local.',
    icon: IconDocker,
  },
  {
    id: 3,
    title: 'Railway, Render, Vercel, Netlify',
    description: 'Para deploy de apps.',
    icon: IconDeploy,
  },
  {
    id: 4,
    title: 'AWS, GCP ou Azure',
    description: 'Para maior segurança e organização do código.',
    icon: IconAWS,
  },
  {
    id: 5,
    title: 'Linux',
    description: 'Para persistência de dados.',
    icon: IconLinux,
  },
  {
    id: 6,
    title: 'Monitoramento',
    description: 'Como Grafana, Logtail, ou ferramentas simples.',
    icon: IconMonitoring,
  },
];

const DevopsView = () => {
  return (
    <div className="design-page">
      <main
        className="design-content"
        role="main"
        aria-label="Conteúdo principal da página de devops"
      >
        <section aria-labelledby="devops-heading">
          <Subtitle marginBottom={36} marginTop={16}>
            Áreas de Atuação
          </Subtitle>
          <Title id="devops-heading" size={40}>
            DevOps
          </Title>

          <Text size={20} color="#323232" weight={400}>
            A área de DevOps é o elo entre o desenvolvimento de software e a
            operação dos sistemas. O objetivo é garantir que os produtos sejam
            entregues de forma segura, contínua e escalável, sem fricção entre o
            que o time desenvolve e o que vai para produção.
          </Text>

          <Text size={20} color="#323232" weight={400}>
            Se você gosta de automação, infraestrutura, monitoramento e
            processos, essa área pode ser a sua.
          </Text>

          <Button variant="primary">Faça parte!</Button>

          <div aria-live="polite" aria-atomic="true"></div>
        </section>
        <img src={ImageBusiness} alt="" width={410} height={411} />
      </main>

      <div>
        <Card
          titleMarginTop={60}
          title="O que você aprende e faz como DevOps na SouJunior"
          titleTextAlign="center"
          description="A atuação em DevOps na SouJunior envolve apoiar o fluxo de desenvolvimento
                e entrega, ajudando os times a rodarem de forma fluida e com menos erros."
          descriptionTextAlign="center"
          descriptionWidth={998}
          descriptionSize={20}
          descriptionColor="#323232"
          descriptionWeight={400}
          descriptionBlockMargin={28}
          titleList="Algumas atividades que você pode explorar:"
          titleListWeight={700}
          titleListAlign="center"
          titleListSize={20}
          list={[
            'Criar e manter pipelines de CI/CD (integração e entrega contínua).',
            'Automatizar tarefas repetitivas de deploy, build e testes.',
            'Monitorar ambientes e garantir que o sistema esteja estável.',
            'Criar containers com Docker e organizar ambientes com Docker Compose.',
            'Trabalhar com versionamento e organização de ambientes (dev, staging, prod).',
            'Apoiar os times com boas práticas de Git, GitHub Actions e documentação.',
          ]}
          listSize={20}
          listColor="#323232"
          listWeight={400}
          listLineHeight="140%"
        />
      </div>

      <Carousel
        title="Tecnologias e ferramentas que você pode usar:"
        items={carouselItems}
      />

      <Card
        titleMarginTop={60}
        title="Por que atuar com DevOps na SouJunior?"
        titleTextAlign="center"
        list={[
          'Aprender com demandas reais e desafios práticos.',
          'Colaborar com desenvolvedores frontend e backend.',
          'Entender o ciclo completo de desenvolvimento e entrega.',
          'Ter contato com ferramentas usadas no mercado.',
          'Desenvolver habilidades que te diferenciam em processos seletivos.',
        ]}
        listSize={20}
        listColor="#323232"
        listWeight={400}
        listLineHeight="140%"
      />

      <div style={{ margin: 'auto', textAlign: 'center' }}>
        <Card
          titleMarginTop={60}
          title="Junte-se a nós e faça parte dessa jornada transformadora!"
          description="Sua contribuição pode ser um passo importante para impulsionar
            carreiras e transformar o futuro de muitos profissionais da área tech."
          descriptionTextAlign="center"
          descriptionWidth={670}
          descriptionBlockMargin={24}
          buttonText="Faça parte!"
          buttonVariant="primary"
        />
      </div>
    </div>
  );
};

export default DevopsView;
