import { CardContainerStyle } from "./styles";

type CardProps = {
  text: string;
};

export const Card = ({ text }: CardProps) => {
  return <CardContainerStyle>{text}</CardContainerStyle>;
};
