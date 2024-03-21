import { Fragment } from "react/jsx-runtime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Header, Data } from "../../models/table-model";
import { useNavigate } from "react-router-dom";

interface TableProps {
  headers: Header[];
  data: Data[];
}

const Table = ({ headers, data }: TableProps) => {
  const navigate = useNavigate();
  const navigateTo = (value: any) => {
    if (value !== "selectable") navigate("/videos/be-master");
  };

  return (
    <>
      <table className="w-full text-sm">
        <thead>
          <tr>
            {headers.map((header: Header, index: number) => (
              <th
                className={`border-b border-b-gray p-3 ${
                  header.value === "name" ? "text-left" : ""
                }`}
                key={index}
              >
                {header.selectable && <input type="checkbox" />}
                {header.title || ""}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row: Data, rowIndex: number) => (
            <tr className="hover:bg-gray" key={rowIndex}>
              {headers.map((header: Header, colIndex: number) => (
                <td
                  key={colIndex}
                  className={`${
                    header.value !== "name" ? "text-center" : ""
                  } border-b border-b-gray p-3 cursor-pointer ${header.width}`}
                  onClick={() => navigateTo(header.value)}
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
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
