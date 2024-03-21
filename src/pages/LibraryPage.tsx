import Input from "../components/atoms/Input";
import Tabs from "../components/molecules/Tabs";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import TABS_OPTIONS from "../utils/statics/tabs";
import Table from "../components/organisms/Table";

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
            <Table />
          </div>
        </Tabs>
      </div>
    </>
  );
};

export default LibraryPage;
