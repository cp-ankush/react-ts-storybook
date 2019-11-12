import * as React from "react";
import "./Button.css";

export interface Props {
  /** This dictates what the button will say */
  children: React.ReactNode;
  /** This dictates what the button will do */
  onClick: () => void;
  /** Disable onclick
   * @default false
   */
  disabled?: boolean;
}

const noop = () => {};

export const Button = (props: Props) => {
  const { children, onClick, disabled = false } = props;
  const disabledclass = disabled ? "Button_disabled" : "";
  return (
    <div
      className={`Button ${disabledclass}`}
      onClick={!disabled ? onClick : noop}
    >
      <span>{children}</span>
    </div>
  );
};
