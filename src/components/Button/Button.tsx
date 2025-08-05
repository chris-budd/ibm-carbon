import React from 'react';
import { Button as CarbonButton } from '@carbon/react';

export interface ButtonProps {
  /**
   * Button contents
   */
  children: React.ReactNode;
  /**
   * Button kind
   */
  kind?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger' | 'danger--tertiary' | 'danger--ghost';
  /**
   * Button size
   */
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /**
   * Disabled state
   */
  disabled?: boolean;
  /**
   * Click handler
   */
  onClick?: () => void;
  /**
   * Button type
   */
  type?: 'button' | 'submit' | 'reset';
}

/**
 * Carbon Button component wrapper
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  kind = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  type = 'button',
  ...props
}) => {
  return (
    <CarbonButton
      kind={kind}
      size={size}
      disabled={disabled}
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </CarbonButton>
  );
}; 