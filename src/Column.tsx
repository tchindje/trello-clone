//import style component to style our component
import { ColumnContainerStyle, ColumnTitleStyle } from "./styles";

//importr Card component to pass it as child to comlumn component
import { Card } from "./Card";

import { FC } from "react";

//import AddNewItem for add new task
import { AddNewItem } from "./AddNewItem";

/*
    Here we define a type alias called ColumnProps
    and then specify it as the type of the first argument 
    of our functional component
*/
type ColumnProps = {
  text: string; // this field is required
  children?: React.ReactNode; // this field is not require
};

//
export const Column: FC<ColumnProps> = ({ text, children }: ColumnProps) => {
  return (
    <ColumnContainerStyle>
      <ColumnTitleStyle> {text}</ColumnTitleStyle>
      {children}
      <AddNewItem toggleButtonText="+ Add another Task" onAdd={console.log} dark />
    </ColumnContainerStyle>
  );
};



