// utilities functions
import { UNITS } from "./API";

export function capitliseFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

export function getUnitsCode(units) {
  const { METRIC, IMPERIAL } = UNITS;
  switch (units) {
    case METRIC:
      return "\u2103";
    case IMPERIAL:
      return "\u2109";
    default:
      return "?";
  }
}
