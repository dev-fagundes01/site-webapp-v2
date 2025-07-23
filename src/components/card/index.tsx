import Subtitle from '../.global/subtitle';
import Title from '../.global/title';
import { CardContainer } from './card.styles';
import { CardProps } from './types';
import Image from '../.global/image';
import Text from '../.global/text';

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  titleAs = 'h2',
  titleSize = 24,
  subtitle,
  description,
  descriptionSize = 16,
  descriptionColor = '#323232',
  descriptionWeight = 400,
  onClick,
}) => {
  return (
    <CardContainer onClick={onClick}>
      {imageSrc && <Image src={imageSrc} alt={title} role="img" />}
      <div>
        <Title as={titleAs} size={titleSize}>
          {title}
        </Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {description && (
          <Text
            size={descriptionSize}
            color={descriptionColor}
            weight={descriptionWeight}
          >
            {description}
          </Text>
        )}
      </div>
    </CardContainer>
  );
};

export default Card;
