import { palette } from "../palette";

export const MuiTableRowCustom = {
  root: {
    "&$selected": {
      backgroundColor: palette.background.default,
    },
    "&$hover": {
      "&:hover": {
        backgroundColor: palette.background.default,
      },
    },
  },
};
