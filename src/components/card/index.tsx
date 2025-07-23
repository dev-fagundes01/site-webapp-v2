import Subtitle from '../.global/subtitle';
import Title from '../.global/title';
import { CardContainer } from './card.styles';
import { CardProps } from './types';
import Image from '../.global/image';
import Text from '../.global/text';
import List from '../.global/list';

const Card: React.FC<CardProps> = ({
  width,
  imageSrc,
  title,
  titleAs = 'h2',
  titleSize = 24,
  marginTop,
  subtitle,
  description,
  descriptionLineHeight = 1.5,
  descriptionSize = 16,
  descriptionColor = '#323232',
  descriptionWeight = 400,
  list,
  listSize = 16,
  listColor = '#000000',
  listWeight = 400,
  onClick,
}) => {
  return (
    <CardContainer onClick={onClick}>
      {imageSrc && <Image src={imageSrc} alt={title} role="img" />}
      <div>
        <Title as={titleAs} size={titleSize} marginTop={marginTop}>
          {title}
        </Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {description && (
          <Text
            width={width}
            lineHeight={descriptionLineHeight}
            size={descriptionSize}
            color={descriptionColor}
            weight={descriptionWeight}
          >
            {description}
          </Text>          
        )}
        {list && list.length > 0 && (
          <List list={list} size={listSize} color={listColor} weight={listWeight}/>
        )}
      </div>
    </CardContainer>
  );
};

export default Card;
