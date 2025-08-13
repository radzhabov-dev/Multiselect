import type { FC, MouseEvent, PropsWithChildren } from "react";
import { Icon, pillSizes, type Size } from "@/shared/ui";
import { type Variant, variants } from "@/shared/ui/Pill/variants.ts";
import clsx from "clsx";

type PillProps = {
  className?: string;
  onClick?: () => void;
  onRemove?: (event?: MouseEvent<HTMLDivElement>) => void;
  size?: Size;
  variant?: Variant;
};

export const Pill: FC<PropsWithChildren<PillProps>> = ({
  children,
  className = "",
  onClick,
  onRemove,
  size = "small",
  variant = "secondary",
}) => {
  const handleRemove = (event?: MouseEvent<HTMLDivElement>) => {
    event?.preventDefault();
    event?.stopPropagation();
    onRemove?.(event);
  };

  const classes = clsx(
    "flex items-center space-x-[4px] bg-surface-substrate rounded-[50px]",
    onClick && "cursor-pointer",
    onRemove ? "justify-between" : "justify-center",
    variants[variant],
    pillSizes[size],
    className,
  );

  return (
    <div onClick={() => onClick?.()} className={classes}>
      <span>{children}</span>
      {onRemove && (
        <Icon
          onClick={handleRemove}
          className="cursor-pointer"
          size="xSmall"
          name="close"
        />
      )}
    </div>
  );
};
