import Breadcrumb from "../components/molecules/Breadcrumb";
import Table from "../components/organisms/Table";
import FOLDER_TABLE_DATA from "../utils/statics/folder-table-data";

const FolderPage = () => {
  return (
    <>
      <Breadcrumb />
      <div className="mx-10 my-6">
        <Table
          headers={FOLDER_TABLE_DATA.headers}
          data={FOLDER_TABLE_DATA.data}
        />
      </div>
    </>
  );
};

export default FolderPage;
