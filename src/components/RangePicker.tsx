import React, { useState } from "react";
import { Range } from "react-range";

interface RangePickerProps {
  title: string;
  min: number;
  max: number;
  unit?: string;
}

export default function RangePicker({
  title,
  min,
  max,
  unit,
}: RangePickerProps) {
  const [values, setValues] = useState<number[]>([min, max]);

  const STEP = 1;

  return (
    <>
      <div className="flex flex-row justify-between mb-2">
        <span className="font-semibold text-gray-700 w-fit">
          {" "}
          <h3>{title}</h3>
        </span>
        <span className="text-black opacity-70 font-medium text-[1.4rem]">
          {values[0]} - {values[1]} {unit}
        </span>
      </div>

      <div className="w-full px-4 pb-4">
        <Range
          step={STEP}
          min={min}
          max={max}
          values={values}
          onChange={(vals: number[]) => setValues(vals)}
          renderTrack={({
            props,
            children,
          }: {
            props: any;
            children: React.ReactNode;
          }) => (
            <div
              {...props}
              className="h-2 w-full rounded-full bg-(--clr-gray) relative"
            >
              <div
                className="absolute h-2 rounded-full bg-[#E94057] "
                style={{
                  left: `${((values[0] - min) / (max - min)) * 100}%`,
                  width: `${((values[1] - values[0]) / (max - min)) * 100}%`,
                }}
              />
              {children}
            </div>
          )}
          renderThumb={({ props }: { props: any }) => (
            <div
              {...props}
              className="h-10 w-10 rounded-full bg-[#E94057] border-4 border-white shadow-lg"
            />
          )}
        />
      </div>
    </>
  );
}
