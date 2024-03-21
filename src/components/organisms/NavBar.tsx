import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import videoToolLogo from "../../assets/images/dashboard-logo.svg";
import MENU_OPTIONS, { ListItem } from "../../utils/statics/navbar-list";

const NavBar = () => {
  return (
    <>
      <div>
        <div className="flex justify-center">
          <img src={videoToolLogo} alt="dashboard-logo" className="w-16" />
        </div>
        <nav className="mt-10">
          <ul>
            {MENU_OPTIONS.map((listItem: ListItem, index: number) => (
              <li
                className={`text-md py-3 px-3 mb-4 cursor-pointer rounded-md ${
                  listItem.active ? "text-white bg-purple" : "hover:bg-gray"
                }`}
                key={index}
              >
                <FontAwesomeIcon icon={listItem.iconName} className="ms-3 me-6" size="lg"/>
                {listItem.name}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
