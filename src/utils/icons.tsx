import Image from "next/image";

interface CreateIconComponentProps {
  iconPath: string;
  defaultSize?: number;
}

const createIconComponent = ({
  iconPath,
  defaultSize = 24,
}: CreateIconComponentProps) => {
  return function IconComponent({
    size = defaultSize,
    alt = "",
    className = "",
    ...props
  }) {
    return (
      <Image
        src={`/icons/${iconPath}`}
        width={size}
        height={size}
        alt={alt}
        className={className}
        {...props}
      />
    );
  };
};

export const ErrorIcon = createIconComponent({ iconPath: "error-icon.svg" });

export const SuccessIcon = createIconComponent({
  iconPath: "success-icon.svg",
});

export const ProfileIcon = createIconComponent({
  iconPath: "profile-icon.svg",
});

export const HamburgerIcon = createIconComponent({
  iconPath: "hamburger-icon.svg",
});

export const CloseIcon = createIconComponent({
  iconPath: "close-icon.svg",
});

export const LogoutIcon = createIconComponent({
  iconPath: "logout-icon.svg",
});

export const UpArrowIcon = createIconComponent({
  iconPath: "up-arrow-icon.svg",
});

export const DownArrowIcon = createIconComponent({
  iconPath: "down-arrow-icon.svg",
});

export const SearchIcon = createIconComponent({
  iconPath: "search-icon.svg",
});

export const UpChevronIcon = createIconComponent({
  iconPath: "up-chevron-icon.svg",
});

export const LeftChevronIcon = createIconComponent({
  iconPath: "left-chevron-icon.svg",
});

export const RightChevronIcon = createIconComponent({
  iconPath: "right-chevron-icon.svg",
});
