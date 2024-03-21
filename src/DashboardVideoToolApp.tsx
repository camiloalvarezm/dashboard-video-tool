import MainTemplate from "./components/templates/MainTemplate";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";

const DashboardVideoToolApp = () => {
  return (
    <>
      <MainTemplate>
        <RouterProvider router={router} />
      </MainTemplate>
    </>
  );
};

export default DashboardVideoToolApp;
