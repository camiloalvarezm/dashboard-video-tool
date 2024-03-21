import { Navigate, createBrowserRouter } from "react-router-dom";
import FolderPage from "../pages/FolderPage";
import LibraryPage from "../pages/LibraryPage";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Navigate to={"/videos"} />,
  },
  {
    path: "/videos",
    element: <LibraryPage />,
  },
  {
    path: "/videos/be-master",
    element: <FolderPage />,
  },
]);

export default router;
