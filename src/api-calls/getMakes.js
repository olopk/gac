const getMakes = async (type) => {
  const request = await fetch(
    `https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/${type}?format=json`
  );
  const data = await request.json();

  try {
    const names = data.Results.map(({ MakeId, MakeName }) => {
      return { value: MakeId, label: MakeName };
    });

    return names;
  } catch (err) {
    console.log(err);
  }
};

export default getMakes;
