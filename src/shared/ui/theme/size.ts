export type Size =
  | "no-size"
  | "xSmall"
  | "small"
  | "medium"
  | "large"
  | "xLarge";

export const iconSizes: Partial<Record<Size, string>> = {
  xSmall: "w-[16px] h-[16px] min-h-[16px] min-w-[16px]",
  small: "w-[20px] h-[20px] min-h-[20px] min-w-[20px]",
  medium: "w-[24px] h-[24px] min-h-[24px] min-w-[24px]",
  large: "w-[32px] h-[32px] min-h-[32px] min-w-[32px]",
  xLarge: "w-[40px] h-[40px] min-h-[40px] min-w-[40px]",
};

export const pillSizes: Partial<Record<Size, string>> = {
  small: "px-[8px] py-[4px] text-[12px]",
  medium: "px-[12px] py-[4px] font-medium text-[14px]",
};
