import { type IconName, iconSizes, type Size } from "../theme";
import type { FC, MouseEvent } from "react";
import clsx from "clsx";

import Chevron from "./icons/Chevron";
import CheckStroke from "./icons/check-stroke";
import Close from "./icons/close";

type Props = {
  className?: string;
  name: IconName;
  onClick?: (event?: MouseEvent<HTMLDivElement>) => void;
  size?: Size;
};

const iconSvgList: Record<IconName, FC> = {
  chevron: Chevron,
  "check-stroke": CheckStroke,
  close: Close,
};

export const Icon: FC<Props> = ({
  className = "",
  name,
  onClick = () => {},
  size = "medium",
}) => {
  const SvgIcon = iconSvgList[name];
  const iconClasses = clsx(
    "flex items-center justify-center",
    iconSizes[size],
    className,
  );

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    onClick(e);
  };

  return (
    <div onClick={handleClick} className={iconClasses}>
      <SvgIcon />
    </div>
  );
};
