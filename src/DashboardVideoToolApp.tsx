import MainTemplate from "./components/templates/MainTemplate";
import FolderPage from "./pages/FolderPage";
import LibraryPage from "./pages/LibraryPage";

const DashboardVideoToolApp = () => {
  return (
    <>
      <MainTemplate>
        {/* <LibraryPage /> */}
        <FolderPage />
      </MainTemplate>
    </>
  );
};

export default DashboardVideoToolApp;
