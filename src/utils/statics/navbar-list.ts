import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faChartColumn,
  faCubes,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCirclePlay,
  faCircleQuestion,
  faFolder,
} from "@fortawesome/free-regular-svg-icons";

export interface ListItem {
  name: string;
  iconName: IconDefinition;
  active: boolean;
}

const MENU_OPTIONS: ListItem[] = [
  {
    name: "Dashboard",
    iconName: faCubes,
    active: false,
  },
  {
    name: "Videos",
    iconName: faFolder,
    active: true,
  },
  {
    name: "Player",
    iconName: faCirclePlay,
    active: false,
  },
  {
    name: "Analytics",
    iconName: faChartColumn,
    active: false,
  },
  {
    name: "Configuraciones",
    iconName: faGear,
    active: false,
  },
  {
    name: "Ayuda",
    iconName: faCircleQuestion,
    active: false,
  },
];

export default MENU_OPTIONS;
