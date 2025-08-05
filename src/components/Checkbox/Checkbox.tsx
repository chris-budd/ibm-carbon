import React from 'react';
import { Checkbox as CarbonCheckbox } from '@carbon/react';

export interface CheckboxProps {
  /**
   * Checkbox label text
   */
  labelText: string;
  /**
   * Checkbox id
   */
  id: string;
  /**
   * Checked state
   */
  checked?: boolean;
  /**
   * Default checked state
   */
  defaultChecked?: boolean;
  /**
   * Disabled state
   */
  disabled?: boolean;
  /**
   * Indeterminate state
   */
  indeterminate?: boolean;
  /**
   * Change handler
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, data: { checked: boolean; id: string }) => void;
  /**
   * Helper text
   */
  helperText?: string;
  /**
   * Invalid state
   */
  invalid?: boolean;
  /**
   * Invalid text
   */
  invalidText?: string;
  /**
   * Read only state
   */
  readOnly?: boolean;
}

/**
 * Carbon Checkbox component wrapper
 */
export const Checkbox: React.FC<CheckboxProps> = ({
  labelText,
  id,
  checked,
  defaultChecked,
  disabled = false,
  indeterminate = false,
  onChange,
  helperText,
  invalid = false,
  invalidText,
  readOnly = false,
  ...props
}) => {
  return (
    <CarbonCheckbox
      labelText={labelText}
      id={id}
      checked={checked}
      defaultChecked={defaultChecked}
      disabled={disabled}
      indeterminate={indeterminate}
      onChange={onChange}
      helperText={helperText}
      invalid={invalid}
      invalidText={invalidText}
      readOnly={readOnly}
      {...props}
    />
  );
}; 