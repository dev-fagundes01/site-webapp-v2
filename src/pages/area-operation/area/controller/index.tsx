import React from 'react';
import { useParams } from 'react-router-dom';

import AgilityController from '../../agility/controller/index';
import BackEndController from '../../back-end/controller/index.controller';
import BusinessController from '../../business/controller/index';
import DataController from '../../data/controller/index.controller';
import DesignController from '../../design/controller/index.controller';
import DevopsController from '../../devops/controller/index';
import FrontEndController from '../../front-end/controller/index.controller';
import ProductController from '../../product/controller/index.controller';
import QualityAssuranceController from '../../quality-assurance-(qa)/controller/index.controller';
import SocialMediaController from '../../social-media/controller/index.controller';
import TechRecruiterController from '../../tech-recruiter/controller/index.controller';

const areaComponentMap: Record<string, React.FC> = {
  business: BusinessController,
  'tech-recruiter': TechRecruiterController,
  produto: ProductController,
  agilidade: AgilityController,
  'social-media': SocialMediaController,
  design: DesignController,
  'front-end': FrontEndController,
  'back-end': BackEndController,
  dados: DataController,
  qa: QualityAssuranceController,
  'dev-ops': DevopsController,
};

const AreaController: React.FC = () => {
  const { areaName } = useParams<{ areaName: string }>();

  const AreaComponent = areaName ? areaComponentMap[areaName] : null;

  if (!AreaComponent) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Área não encontrada</h2>
        <p>A área "{areaName}" não foi localizada.</p>
      </div>
    );
  }

  return <AreaComponent />;
};

export default AreaController;
