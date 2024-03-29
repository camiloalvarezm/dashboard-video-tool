import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

export interface Tab {
  title: string;
  iconName: IconDefinition;
  active: boolean;
}

const TABS_OPTIONS: Tab[] = [
  {
    title: "Biblioteca",
    iconName: faBarsStaggered,
    active: true,
  },
  {
    title: "Papelera",
    iconName: faTrashCan,
    active: false,
  },
];

export default TABS_OPTIONS;
