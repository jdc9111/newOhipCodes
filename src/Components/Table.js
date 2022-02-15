import { diagCodes } from "./diagCodes";

const Table = (props) => {
  console.log(props.type);

  return (
    <div>
      <div className="overlow-x-auto mr-5">
        <table class="mx-2 table w-full table-compact">
          <thead>
            <tr>
              <th className="w-2/12">Code</th>
              <th className="w-10/12 whitespace-normal">Description</th>
            </tr>
          </thead>
          <tbody>
            {diagCodes
              .filter((code) => code.category === props.type)
              .map((filteredCode) => (
                <tr>
                  <td>{filteredCode.code}</td>

                  <td>
                    <div class="whitespace-normal">
                      {filteredCode.description}
                    </div>
                  </td>
                </tr>
              ))}
            {/*
            {skin.map((codes) => (
              <tr>
                <td>{codes.code}</td>
                <td>{codes.description}</td>
              </tr>
            ))}
            */}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Table;
