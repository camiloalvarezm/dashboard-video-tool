import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface TableModel {
  headers: Header[];
  data: Data[];
}

export interface Header {
  title?: string;
  value: string;
  selectable?: boolean;
  width?: string;
}

export interface Data {
  name: string;
  duration?: string;
  videos?: number;
  size: string;
  lastModified: string;
  iconName?: IconDefinition;
  selectable?: boolean;
}
