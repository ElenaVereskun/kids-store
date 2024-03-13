import { MouseEventHandler } from "react";
import styles from "./styles.module.css";
import Image from "next/image";

export type TButton = {
  text?: string;
  type: "small" | "big";
  variant: "brown" | "brownMedium";
  borderRadius?: string;
  padding?: string;
  width?: string;
  gap?: string;
  icon?: string;
  marginTop?: string;
  lineHeight?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};

const Button = (props: TButton) => {
  const {
    text,
    type,
    variant,
    borderRadius,
    padding,
    width,
    gap,
    icon,
    marginTop,
    lineHeight,
    onClick,
  } = props;

  const buttonVariant = {
    brown: styles.brown,
    brownMedium: styles.brownMedium,
  };
  const typeButton = {
    small: styles.buttonSmall,
    big: styles.buttonBig,
  };

  return (
    <button
      className={`${typeButton[type]} ${buttonVariant[variant]}`}
      style={{
        borderRadius: borderRadius,
        padding,
        width,
        gap,
        marginTop: marginTop,
        lineHeight,
      }}
      onClick={onClick}
    >
      {text}
      {icon && (
        <Image
          className={styles.icon}
          src={icon}
          alt={`кнопка ${text}`}
          width={24}
          height={24}
        />
      )}
    </button>
  );
};

export default Button;
