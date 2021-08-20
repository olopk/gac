import url from "./url";

const getMakes = async (type) => {
  const request = await fetch(
    `${url}/GetMakesForVehicleType/${type}?format=json`
  );
  const data = await request.json();

  try {
    const names = data.Results.map(({ MakeName }) => {
      return { value: MakeName, label: MakeName };
    });

    return names;
  } catch (err) {
    console.log(err);
  }
};

export default getMakes;
