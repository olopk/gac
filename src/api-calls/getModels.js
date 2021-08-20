import url from "./url";
import { format } from "date-fns";

const getModels = async ({ make, year, type }) => {
  const request = await fetch(
    `${url}/GetModelsForMakeYear/make/${make}/vehicletype/${type}${
      year ? `/modelyear/${format(year, "yyyy")}?format=json` : "?format=json"
    }`
  );

  const data = await request.json();

  try {
    const names = data.Results.map(({ Model_Name }) => {
      return { value: Model_Name, label: Model_Name };
    });

    return names;
  } catch (err) {
    console.log(err);
  }
};

export default getModels;
