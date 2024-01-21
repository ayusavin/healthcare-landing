import { ReactElement } from "react";

export default interface ServiceCard {
  image: string;
  title: string;
  description: string;
  button?: ReactElement;
}
