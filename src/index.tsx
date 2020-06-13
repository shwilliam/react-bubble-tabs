import React, { FC, HTMLAttributes, ReactChild } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
}

export const BubbleTabs: FC<Props> = ({ children }) => {
  return <nav>{children}</nav>;
};
