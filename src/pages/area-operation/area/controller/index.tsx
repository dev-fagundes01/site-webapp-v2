import { useParams } from 'react-router-dom';

import AgilityController from '../../agility/controller';
import BackEndController from '../../back-end/controller/index.controller';
import BusinessController from '../../business/controller';
import DataController from '../../data/controller/index.controller';
import DesignController from '../../design/controller/index.controller';
import DevopsController from '../../devops/controller';
import FrontEndController from '../../front-end/controller/index.controller';
import ProductController from '../../product/controller/index.controller';
import QAController from '../../quality-assurance-(qa)/controller/index.controller';
import SocialMediaController from '../../social-media/controller/index.controller';
import TechRecruiterController from '../../tech-recruiter/controller/index.controller';

const areaMap: Record<string, React.FC> = {
  agility: AgilityController,
  'back-end': BackEndController,
  business: BusinessController,
  data: DataController,
  design: DesignController,
  devops: DevopsController,
  'front-end': FrontEndController,
  product: ProductController,
  qa: QAController,
  'social-media': SocialMediaController,
  'tech-recruiter': TechRecruiterController,
};

const AreaController = () => {
  const { areaName } = useParams();

  const AreaComponent = areaMap[areaName || ''];

  if (!AreaComponent) {
    return <div>Área não encontrada</div>;
  }

  return <AreaComponent />;
};

export default AreaController;
