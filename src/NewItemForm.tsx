import { useState } from "react";
import {
  NewItemFormContainerStyle,
  NewItemButtonStyle,
  NewItemInputStyle,
} from "./styles";

type NewItemFormProps = {
  onAdd(text: string): void;
};

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState("");

  return (
    <NewItemFormContainerStyle>
      <NewItemInputStyle
        value={text}
        onChange={(e) => setText(e.target.value)} //the component  updte his  state when her
        //   input change
      />

      <NewItemButtonStyle onClick={() => onAdd(text)}>
        Create
      </NewItemButtonStyle>
    </NewItemFormContainerStyle>
  );
};
