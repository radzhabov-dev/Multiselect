export type Variant = "primary" | "secondary" | "success" | "danger";

export const variants: Partial<Record<Variant, string>> = {
  primary: "bg-button-primary-default text-white",
  secondary: "bg-surface-substrate",
  success: "bg-green-100 text-green-700",
  danger: "bg-red-100 text-red-700",
};
