import React from 'react';
import { Select as CarbonSelect, SelectItem } from '@carbon/react';

export interface SelectOption {
  value: string;
  text: string;
  disabled?: boolean;
}

export interface SelectProps {
  /**
   * Select id
   */
  id: string;
  /**
   * Label text
   */
  labelText: string;
  /**
   * Options for the select
   */
  options: SelectOption[];
  /**
   * Default selected value
   */
  defaultValue?: string;
  /**
   * Selected value (controlled)
   */
  value?: string;
  /**
   * Disabled state
   */
  disabled?: boolean;
  /**
   * Invalid state
   */
  invalid?: boolean;
  /**
   * Invalid text
   */
  invalidText?: string;
  /**
   * Helper text
   */
  helperText?: string;
  /**
   * Hide label
   */
  hideLabel?: boolean;
  /**
   * Size of select
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Change handler
   */
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  /**
   * Placeholder text
   */
  placeholder?: string;
}

/**
 * Carbon Select component wrapper
 */
export const Select: React.FC<SelectProps> = ({
  id,
  labelText,
  options,
  defaultValue,
  value,
  disabled = false,
  invalid = false,
  invalidText,
  helperText,
  hideLabel = false,
  size = 'md',
  onChange,
  placeholder = 'Choose an option',
  ...props
}) => {
  return (
    <CarbonSelect
      id={id}
      labelText={labelText}
      defaultValue={defaultValue}
      value={value}
      disabled={disabled}
      invalid={invalid}
      invalidText={invalidText}
      helperText={helperText}
      hideLabel={hideLabel}
      size={size}
      onChange={onChange}
      {...props}
    >
      <SelectItem value="" text={placeholder} />
      {options.map((option) => (
        <SelectItem
          key={option.value}
          value={option.value}
          text={option.text}
          disabled={option.disabled}
        />
      ))}
    </CarbonSelect>
  );
}; 