import {
  type CSSProperties,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  onClickOutside: () => void;
  className?: string;
  ignoreClickRef?: React.RefObject<HTMLElement | null>;
};

export const Popover = ({
  children,
  onClickOutside,
  className = "",
  ignoreClickRef,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<CSSProperties>({});
  const [isPositioned, setIsPositioned] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInsideIgnored = ignoreClickRef?.current?.contains(target);
      const isInsidePopover = ref.current?.contains(target);

      if (isInsideIgnored || isInsidePopover) {
        return;
      }

      onClickOutside();
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClickOutside, ignoreClickRef]);

  useEffect(() => {
    const adjustPosition = () => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const newStyle: CSSProperties = {};

      if (rect.right > window.innerWidth) {
        newStyle.right = 0;
        newStyle.left = "auto";
      }
      if (rect.left < 0) {
        newStyle.left = 0;
      }
      if (rect.bottom > window.innerHeight) {
        newStyle.bottom = 0;
        newStyle.top = "auto";
      }
      if (rect.top < 0) {
        newStyle.top = 0;
      }

      setStyle(newStyle);
      setIsPositioned(true);
    };

    adjustPosition();
    window.addEventListener("resize", adjustPosition);
    return () => window.removeEventListener("resize", adjustPosition);
  }, []);

  return (
    <div
      ref={ref}
      className={clsx(
        "absolute z-10",
        isPositioned ? "visible" : "invisible",
        className,
      )}
      style={style}
    >
      {children}
    </div>
  );
};
