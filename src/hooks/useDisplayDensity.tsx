import { displayDensityOptions } from "@/layouts/SidebarLayout/static/displayDensityOptions";
import { GetAppsApiArg } from "@store/api/baseApi";
import { useState } from "react";

const DISPLAY_DENSITY_KEYS = ["Recent activity", "Created"];

// Hook to handle display density
export const useDisplayDensity = () => {
  const [displayDensity, setDisplayDensity] = useState<string[]>([]);

  // Wrap setDisplayDensity to automatically handle DISPLAY_DENSITY_KEYS
  // const wrappedSetDisplayDensity: typeof setDisplayDensity = (newValue) => {
  //   const valueToSet =
  //     typeof newValue === "function" ? newValue(displayDensity) : newValue;

  //   // If any new value is from DISPLAY_DENSITY_KEYS, keep only that one
  //   const hasOrderingValue = valueToSet.some((value) =>
  //     DISPLAY_DENSITY_KEYS.includes(value)
  //   );

  //   if (hasOrderingValue) {
  //     // Get the last ordering value from the new array
  //     const orderingValue = valueToSet
  //       .filter((value) => DISPLAY_DENSITY_KEYS.includes(value))
  //       .pop();

  //     // Keep all non-ordering values from the new array
  //     const otherValues = valueToSet.filter(
  //       (value) => !DISPLAY_DENSITY_KEYS.includes(value)
  //     );

  //     setDisplayDensity([...otherValues, orderingValue!]);
  //   } else {
  //     // If no ordering values, just set the new array as is
  //     setDisplayDensity(valueToSet);
  //   }
  // };

  const ordering = displayDensityOptions.find((option) =>
    displayDensity.includes(option.label)
  )?.value as GetAppsApiArg["ordering"];
  console.log(ordering, "ordering");
  return {
    displayDensity,
    setDisplayDensity,
    ordering,
  };
};
