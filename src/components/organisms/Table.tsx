import { Fragment } from "react/jsx-runtime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LIBRARY_TABLE_DATA, {
  Header,
  Data,
} from "../../utils/statics/folder-table-data";

const Table = () => {
  return (
    <>
      <table className="w-full text-sm">
        <thead>
          <tr>
            {LIBRARY_TABLE_DATA.headers.map((header: Header, index: number) => (
              <th className="border-b border-b-gray p-3" key={index}>
                {header.selectable && <input type="checkbox" />}
                {header.title || ""}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {LIBRARY_TABLE_DATA.data.map((row: Data, rowIndex: number) => (
            <tr className="hover:bg-gray" key={rowIndex}>
              {LIBRARY_TABLE_DATA.headers.map(
                (header: Header, colIndex: number) => (
                  <td
                    key={colIndex}
                    className={`${
                      header.value !== "name" ? "text-center" : ""
                    } border-b border-b-gray p-3 cursor-pointer ${
                      header.width
                    }`}
                  >
                    {header.selectable ? (
                      <input type="checkbox" checked={row.selectable} />
                    ) : header.value === "name" ? (
                      <Fragment>
                        {row.iconName && (
                          <FontAwesomeIcon
                            icon={row.iconName}
                            className="me-3 text-purple"
                            size="lg"
                          />
                        )}
                        {row.name}
                      </Fragment>
                    ) : header.value === "videos" ? (
                      row.videos
                    ) : header.value === "size" ? (
                      row.size
                    ) : header.value === "lastModified" ? (
                      row.lastModified
                    ) : header.value === "duration" ? (
                      row.duration
                    ) : null}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
