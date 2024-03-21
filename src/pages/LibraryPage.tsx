import Input from "../components/atoms/Input";
import Tabs from "../components/molecules/Tabs";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import TABS_OPTIONS from "../utils/statics/tabs";
import Table from "../components/organisms/Table";
import LIBRARY_TABLE_DATA from "../utils/statics/library-table-data";

const LibraryPage = () => {
  return (
    <>
      <div className="mx-10 my-6">
        <Tabs elements={TABS_OPTIONS}>
          <div>
            <div className="w-1/3 my-10">
              <Input
                title="Buscar Video"
                type="text"
                required
                iconName={faSearch}
              />
            </div>
            <Table
              headers={LIBRARY_TABLE_DATA.headers}
              data={LIBRARY_TABLE_DATA.data}
            />
          </div>
        </Tabs>
      </div>
    </>
  );
};

export default LibraryPage;
