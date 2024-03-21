import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faFolder } from "@fortawesome/free-regular-svg-icons";

export interface TableModel {
  headers: Header[];
  data: Data[];
}

export interface Header {
  title?: string;
  value: string
  selectable?: boolean;
  width?: string
}

export interface Data {
  name: string;
  videos: number;
  size: string;
  lastModified: string;
  iconName?: IconDefinition;
  selectable?: boolean;
}

const LIBRARY_TABLE_DATA: TableModel = {
  headers: [
    {
      selectable: true,
      value: "selectable",
      width: "w-14"
    },
    {
      title: "Nombre",
      value: "name",
      width: "w-7/12"
    },
    {
      title: "Videos",
      value: "videos"
    },
    {
      title: "Tamaño",
      value: "size"
    },
    {
      title: "Última modificación",
      value: "lastModified"
    },
  ],
  data: [
    {
      name: "Afiliado Master",
      videos: 8,
      size: "7.3 GB",
      lastModified: "30/may/2023",
      iconName: faFolder,
    },
    {
      name: "BeMaster",
      videos: 21,
      size: "1.4 GB",
      lastModified: "22/jun/2022",
      iconName: faFolder,
    },
  ],
};

export default LIBRARY_TABLE_DATA;
