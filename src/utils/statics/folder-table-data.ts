import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { TableModel } from "../../models/table-model";

const FOLDER_TABLE_DATA: TableModel = {
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
      title: "Tamaño",
      value: "size",
    },
    {
      title: "Duración",
      value: "duration",
    },

    {
      title: "Última modificación",
      value: "lastModified",
    },
  ],
  data: [
    {
      name: "Entrenamiento.mp4",
      size: "7.3 GB",
      duration: "04:11:37",
      lastModified: "30/may/2023",
      iconName: faCirclePlay,
    },
    {
      name: "Salida-al-mercado-versión nueva.mp4",
      size: "1.4 GB",
      duration: "47:55",
      lastModified: "22/jun/2022",
      iconName: faCirclePlay,
    },
    {
      name: "Como-cerrar-una-venta.mp4",
      size: "284 MB",
      duration: "10:12",
      lastModified: "11/sep/2021",
      iconName: faCirclePlay,
    },
    {
      name: "Crea-un-ticket-valioso.mp4",
      size: "4.3 GB",
      duration: "03:50:22",
      lastModified: "21/jun/2023",
      iconName: faCirclePlay,
    },
    {
      name: "Conquista-el-mercado-digital.mp4",
      size: "500 MB",
      duration: "5:00",
      lastModified: "5/abr/2023",
      iconName: faCirclePlay,
    },
    {
      name: "Entrenamiento.mp4",
      size: "7.3 GB",
      duration: "04:11:37",
      lastModified: "30/may/2023",
      iconName: faCirclePlay,
    },
    {
      name: "Salida-al-mercado-versión nueva.mp4",
      size: "1.4 GB",
      duration: "47:55",
      lastModified: "22/jun/2022",
      iconName: faCirclePlay,
    },
    {
      name: "Como-cerrar-una-venta.mp4",
      size: "284 MB",
      duration: "10:12",
      lastModified: "11/sep/2021",
      iconName: faCirclePlay,
    },
    {
      name: "Crea-un-ticket-valioso.mp4",
      size: "4.3 GB",
      duration: "03:50:22",
      lastModified: "21/jun/2023",
      iconName: faCirclePlay,
    },
    {
      name: "Conquista-el-mercado-digital.mp4",
      size: "500 MB",
      duration: "5:00",
      lastModified: "5/abr/2023",
      iconName: faCirclePlay,
    },
  ],
};

export default FOLDER_TABLE_DATA;
