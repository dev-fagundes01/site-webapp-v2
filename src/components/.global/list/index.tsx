import { ListContainer } from "./list.styles";
import { ListProps } from "./types";

const List: React.FC<ListProps> = ({ list, ...props }) => {
  return <ListContainer {...props}>{
    list?.map((item, index) => (
      <li key={index} role="listitem">
        {item}
      </li>
    ))
  }</ListContainer>;
};

export default List;