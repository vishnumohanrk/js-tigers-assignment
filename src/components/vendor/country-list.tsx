import 'server-only';

import { Suspense } from 'react';

async function getCountryList() {
  const resp = await fetch(
    'https://restcountries.com/v2/all?fields=name,alpha3Code'
  );
  const data: { name: string; alpha3Code: string }[] = await resp.json();

  return data;
}

async function Countries() {
  const countries = await getCountryList();

  return (
    <>
      <option value="">Select Country</option>
      {countries.map((i) => (
        <option key={i.alpha3Code} value={i.name}>
          {i.name}
        </option>
      ))}
    </>
  );
}

export function CountryList() {
  return (
    <Suspense>
      <Countries />
    </Suspense>
  );
}
