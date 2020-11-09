import { palette } from "../palette";
import { typography } from "../typography";

export const MuiTableCellCustom = {
  root: {
    ...typography.body1,
    borderBottom: `1px solid ${palette.divider}`,
  },
};
