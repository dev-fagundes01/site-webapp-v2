import Subtitle from '../.global/subtitle';
import Title from '../.global/title';
import { CardContainer } from './card.styles';
import { CardProps } from './types';
import Image from '../.global/image';
import Text from '../.global/text';
import List from '../.global/list';

const Card: React.FC<CardProps> = ({
  padding,
  onClick,

  imageSrc,

  title,
  titleAs = 'h2',
  titleSize,
  marginTop,

  subtitle,

  description,
  descriptionLineHeight,
  descriptionSize,
  descriptionColor,
  descriptionWeight,
  descriptionWidth,
  marginLeftDescription,

  list,
  listSize,
  listColor,
  listWeight,
}) => {
  return (
    <CardContainer onClick={onClick} padding={padding}>
      {imageSrc && <Image src={imageSrc} alt={title ?? ''} role="img" />}
      <div>
        <Title as={titleAs} size={titleSize} marginTop={marginTop}>
          {title}
        </Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {description && (
          <Text
            width={descriptionWidth}
            lineHeight={descriptionLineHeight}
            size={descriptionSize}
            color={descriptionColor}
            weight={descriptionWeight}
            marginLeft={marginLeftDescription}
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
