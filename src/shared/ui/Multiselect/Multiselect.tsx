import { type MouseEvent, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { Icon, Pill, Popover } from "@/shared/ui";

type Props = {
  disabled?: boolean;
  onSelectionChange: (value: string[]) => void;
  onRightIconClick?: (event?: MouseEvent<HTMLDivElement>) => void;
  options: string[];
  placeholder?: string;
  selectedOptions?: string[];
};

export const MultiSelect = ({
  disabled = false,
  onSelectionChange,
  options,
  placeholder = "",
  selectedOptions = [],
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const safeValue = selectedOptions ?? [];

  const selectClasses = clsx(
    "flex items-center",
    "border-2 bg-white rounded-[16px] p-[16px]",
    disabled && "border-none bg-input-background-disabled",
  );

  const handleOptionClick = (optionValue: string) => {
    const newValue = [...safeValue];
    const index = newValue.indexOf(optionValue);

    if (index > -1) {
      newValue.splice(index, 1);
    } else {
      newValue.push(optionValue);
    }

    onSelectionChange(newValue);
  };

  useEffect(() => {
    if (options && options.length > 0) {
      setFilteredOptions(
        options.filter((option) =>
          option.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
      );
    } else {
      setFilteredOptions([]);
    }
  }, [searchTerm, options]);

  useEffect(() => {
    if (!isOpen) setSearchTerm("");
  }, [isOpen]);

  return (
    <div
      className="relative w-full cursor-pointer select-none"
      ref={containerRef}
    >
      <div
        className={selectClasses}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
      >
        <div className="hide-scrollbar grow overflow-x-auto">
          {placeholder && safeValue.length === 0 && <p>{placeholder}</p>}
          {safeValue.length > 0 && (
            <div className="flex gap-[8px]">
              {safeValue.map((val) => (
                <Pill
                  className="whitespace-nowrap"
                  variant="secondary"
                  key={"value-" + val}
                  onRemove={() => handleOptionClick(val)}
                >
                  {val}
                </Pill>
              ))}
            </div>
          )}
        </div>
        <Icon
          className={clsx(
            "min-w-[24px] transition-transform",
            isOpen && "rotate-180",
          )}
          name="chevron"
        />
      </div>
      {isOpen && (
        <Popover
          onClickOutside={() => setIsOpen(false)}
          ignoreClickRef={containerRef}
          className="w-full"
        >
          <div className="max-h-[320px] w-full translate-y-[4px] overflow-y-auto rounded-[16px] bg-white p-[4px] shadow-[0px_8px_16px_0px_#0000001A]">
            <input
              className="w-full rounded-[8px] bg-surface-default px-5 py-2 outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Поиск"
              onClick={(e) => e.stopPropagation()}
            />
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOptionClick(option);
                  }}
                  className="flex cursor-pointer items-center justify-between rounded-[8px] bg-white p-[8px] hover:bg-surface-default"
                  key={"option-" + option}
                >
                  <p>{option}</p>
                  <Icon
                    className={clsx(
                      "min-w-[24px]",
                      safeValue.includes(option) ? "visible" : "invisible",
                    )}
                    name="check-stroke"
                  />
                </div>
              ))
            ) : (
              <div className="rounded-[8px] bg-white p-[8px]">Нет данных</div>
            )}
          </div>
        </Popover>
      )}
    </div>
  );
};
