import React from "react";
import { useFormik } from "formik";
import Select, { SingleValue, components } from "react-select";
import {
  Country,
  State,
  City,
  ICountry,
  IState,
  ICity,
} from "country-state-city";

type Option = { label: string; value: string };

interface LocationFormValues {
  country: Option | null;
  state: Option | null;
  city: Option | null;
}

// Custom placeholder component to mimic floating label
const FloatingPlaceholder = ({ innerProps, children }: any) => (
  <div
    {...innerProps}
    className="absolute left-2 top-3.5 text-gray-400 text-md pointer-events-none transition-all"
  >
    {children}
  </div>
);

export default function LocationPicker() {
  const formik = useFormik<LocationFormValues>({
    initialValues: { country: null, state: null, city: null },
    onSubmit: (values) => console.log(values),
  });

  const { values, setFieldValue, handleSubmit } = formik;

  const countries: Option[] = Country.getAllCountries().map((c: ICountry) => ({
    label: c.name,
    value: c.isoCode,
  }));

  const states: Option[] = values.country
    ? State.getStatesOfCountry(values.country.value).map((s: IState) => ({
        label: s.name,
        value: s.isoCode,
      }))
    : [];

  const cities: Option[] =
    values.country && values.state
      ? City.getCitiesOfState(values.country.value, values.state.value).map(
          (c: ICity) => ({
            label: c.name,
            value: c.name,
          })
        )
      : [];

  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      border: "1px solid #E8E6EA",
      borderRadius: "1rem",
      minHeight: 40,
      padding: "0 8px",
      boxShadow: state.isFocused ? "0 0 0 1px #E94057" : "none",
      "&:hover": { borderColor: "#E94057" },
      fontSize: "1.4rem", // ✅ control font size
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: "transparent",
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: "#111827",
      fontSize: "1.4rem", // ✅ selected value font size
    }),
    menu: (provided: any) => ({
      ...provided,
      borderRadius: "1rem",
      overflow: "hidden",
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#f3f3f3" : "white",
      color: "#111827",
      fontSize: "1.4rem", // ✅ dropdown option font size
    }),
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 flex gap-3.5">
      {/* Country */}
      <div className="relative flex-1">
        <Select<Option, false>
          options={countries}
          value={values.country}
          onChange={(value: SingleValue<Option>) => {
            setFieldValue("country", value);
            setFieldValue("state", null);
            setFieldValue("city", null);
          }}
          placeholder="Country"
          styles={customStyles}
        />
        {values.country === null && (
          <span className="absolute left-2 top-3.5 text-gray-400 text-md pointer-events-none transition-all">
            Country
          </span>
        )}
      </div>

      {/* State */}
      <div className="relative flex-1">
        <Select<Option, false>
          options={states}
          value={values.state}
          isDisabled={!values.country}
          onChange={(value: SingleValue<Option>) => {
            setFieldValue("state", value);
            setFieldValue("city", null);
          }}
          placeholder="State"
          styles={customStyles}
        />
        {values.state === null && (
          <span className="absolute left-2 top-3.5 text-gray-400 text-md pointer-events-none transition-all">
            State
          </span>
        )}
      </div>

      {/* City */}
      <div className="relative flex-1">
        <Select<Option, false>
          options={cities}
          value={values.city}
          isDisabled={!values.state}
          onChange={(value: SingleValue<Option>) =>
            setFieldValue("city", value)
          }
          placeholder="City"
          styles={customStyles}
        />
        {values.city === null && (
          <span className="absolute left-2 top-3.5 text-gray-400 text-md pointer-events-none transition-all">
            City
          </span>
        )}
      </div>
    </form>
  );
}
