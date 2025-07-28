import Subtitle from "../.global/subtitle";
import Title from "../.global/title";
import { CardContainer } from "./card.styles";
import { CardProps } from "./types";
import Image from "../.global/image";
import Text from "../.global/text";
import List from "../.global/list";
import Button from "../.global/button";

const Card: React.FC<CardProps> = ({
  edgeSection,
  marginBlock,
  padding,
  width,
  onClick,

  imageSrc,

  title,
  titleAs = "h2",
  titleSize,
  marginTop,

  subtitle,

  description,
  descriptionLineHeight,
  descriptionSize,
  descriptionColor,
  descriptionWeight,
  descriptionWidth,
  descriptionBlockMargin,

  list,
  listSize,
  listColor,
  listWeight,

  buttonText,
  buttonVariant,
}) => {
  return (
    <CardContainer edgeSection={edgeSection} marginBlock={marginBlock} padding={padding} width={width}>
      {imageSrc && <Image src={imageSrc} alt={title ?? ""} role="img" />}

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
            marginBlock={descriptionBlockMargin}
          >
            {description}
          </Text>
        )}

        {list && list.length > 0 && (
          <List
            list={list}
            size={listSize}
            color={listColor}
            weight={listWeight}
          />
        )}
        {buttonText && (
          <Button variant={buttonVariant} onClick={onClick}>
            {buttonText}
          </Button>
        )}
      </div>
    </CardContainer>
  );
};

export default Card;
