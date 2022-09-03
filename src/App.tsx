import { AppContainerStyle } from "./styles";
import "./index.css";

import { AddNewItem } from "./AddNewItem";
import { Column } from "./Column";
import { Card } from "./Card";

export const App = () => {
  return (
    <AppContainerStyle>
      <Column text="To Do">
        <Card text="Become Master in JS" />
      </Column>

      <Column text="In progress">
        <Card text="Learn TypeScript" />
      </Column>

      <Column text="Done">
        <Card text="Learn TypeScript" />
      </Column>
      <AddNewItem toggleButtonText="+ Add Another list" onAdd={console.log} />
    </AppContainerStyle>
  );
};
