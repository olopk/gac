export const isValid = (
  {
    nrRej,
    rodzajPojazdu,
    rokProdukcji,
    marka,
    model,
    typNadwozia,
    paliwo,
    pojemnosc,
    mocSilnika,
    imie,
    nazwisko,
    pesel,
    nrTelefonu,
  },
  hasRegNr
) => {
  if (hasRegNr) {
    return nrRej && pesel && nrTelefonu;
  } else {
    return (
      nrRej &&
      rodzajPojazdu &&
      rokProdukcji &&
      marka &&
      model &&
      typNadwozia &&
      paliwo &&
      pojemnosc &&
      mocSilnika &&
      imie &&
      nazwisko &&
      pesel &&
      nrTelefonu
    );
  }
};
