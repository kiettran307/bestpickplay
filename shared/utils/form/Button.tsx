"use client";
import Link from "next/link";
import React, {
  MouseEvent,
  MutableRefObject,
  useEffect,
  useState,
} from "react";

type ButtonPropsType = {
  icon?: JSX.Element;
  text?: string;
  className?: string | any;
  iconClassName?: string | any;
  href?: string;
  iconPosition?: "start" | "end" | string;
  isLoading?: boolean;
  asyncLoading?: boolean;
  stopPropagation?: boolean;
  preventDefault?: boolean;
  innerRef?: MutableRefObject<HTMLAnchorElement | HTMLButtonElement>;
  disabled?: boolean;
  onClick?: (e?: MouseEvent) => any;
};

export function Button({
  href,
  text = "",
  icon,
  className = ``,
  iconPosition,
  asyncLoading,
  iconClassName,
  disabled,
  ...props
}: ButtonPropsType) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(props.isLoading as boolean);
  }, [props.isLoading]);
  let buttonStyle = `flex items-center px-4 py-2 font-semibold   hover:shadow`;

  const onClick = (
    event: MouseEvent<HTMLAnchorElement> | MouseEvent<HTMLButtonElement>
  ) => {
    if (!props.onClick) return;
    if (props.stopPropagation) event.stopPropagation();
    if (props.preventDefault) event.preventDefault();
    if (asyncLoading) {
      if (loading) return;

      setLoading(true);
      const promise = props.onClick(event);
      if (promise && promise.finally) {
        (promise as Promise<any>).finally(() => {
          setLoading(false);
        });
      } else {
        setLoading(false);
      }
    } else {
      props.onClick(event);
    }
  };

  return (
    <>
      {href ? (
        <Link
          href={href}
          ref={props.innerRef as MutableRefObject<HTMLAnchorElement>}
          target="_blank"
        >
          <button
            className={`${buttonStyle} ${className}`}
            onClick={(e) => onClick(e)}
          >
            {iconPosition === "start" && (
              <span className={`text-xl ${iconClassName}`}>{icon}</span>
            )}

            {text}

            {iconPosition === "end" && (
              <span className={`ml-3 text-xl ${iconClassName}`}>{icon}</span>
            )}
          </button>
        </Link>
      ) : (
        <button
          disabled={disabled}
          className={`${buttonStyle} ${className}`}
          onClick={(e) => onClick(e)}
          ref={props.innerRef as MutableRefObject<HTMLButtonElement>}
        >
          {iconPosition === "start" && (
            <span className={`text-xl ${iconClassName}`}>{icon}</span>
          )}

          {text}

          {iconPosition === "end" && (
            <span className={`ml-3 text-xl ${iconClassName}`}>{icon}</span>
          )}
        </button>
      )}
    </>
  );
}
