import { classes } from "./classes";

const AsaClass = () => {
  return (
    <div>
      {classes.map((asa) => (
        <div className="mt-4 ml-2 mr-2 bg-gray-200 rounded-md">
          <div className="pl-3 pt-3 pb-3 pr-3">
            <h2 className="font-bold text-xl">{asa.class}</h2>
            <h3 className="pb-2 font-semibold text-lg">{asa.definition}</h3>
            <h4>{asa.examples}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};
export default AsaClass;
