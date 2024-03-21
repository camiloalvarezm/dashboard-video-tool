import { faFolder } from "@fortawesome/free-regular-svg-icons";
import { TableModel } from "../../models/table-model";

const LIBRARY_TABLE_DATA: TableModel = {
  headers: [
    {
      selectable: true,
      value: "selectable",
      width: "w-14",
    },
    {
      title: "Nombre",
      value: "name",
      width: "w-2/4",
    },
    {
      title: "Videos",
      value: "videos",
    },
    {
      title: "Tamaño",
      value: "size",
    },
    {
      title: "Última modificación",
      value: "lastModified",
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
    {
      name: "Comizzión",
      videos: 10,
      size: "284 MB",
      lastModified: "11/sep/2021",
      iconName: faFolder,
    },
    {
      name: "Creador de Contenido",
      videos: 2,
      size: "4.3 GB",
      lastModified: "21/jun/2023",
      iconName: faFolder,
    },
    {
      name: "Exportados Wil",
      videos: 14,
      size: "500 MB",
      lastModified: "5/abr/2023",
      iconName: faFolder,
    },
    {
      name: "Afiliado Master",
      videos: 6,
      size: "7.3 GB",
      lastModified: "30/may/2023",
      iconName: faFolder,
    },
    {
      name: "BeMaster",
      videos: 30,
      size: "1.4 GB",
      lastModified: "22/jun/2022",
      iconName: faFolder,
    },
    {
      name: "Comizzión",
      videos: 2,
      size: "284 MB",
      lastModified: "11/sep/2021",
      iconName: faFolder,
    },
    {
      name: "Creador de Contenido",
      videos: 8,
      size: "4.3 GB",
      lastModified: "21/jun/2023",
      iconName: faFolder,
    },
    {
      name: "Exportados Wil",
      videos: 14,
      size: "500 MB",
      lastModified: "5/abr/2023",
      iconName: faFolder,
    },
  ],
};

export default LIBRARY_TABLE_DATA;
