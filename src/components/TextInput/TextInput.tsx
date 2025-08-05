import React from 'react';
import { TextInput as CarbonTextInput } from '@carbon/react';

export interface TextInputProps {
  /**
   * Input id
   */
  id: string;
  /**
   * Input label text
   */
  labelText: string;
  /**
   * Input placeholder
   */
  placeholder?: string;
  /**
   * Input value
   */
  value?: string;
  /**
   * Default value
   */
  defaultValue?: string;
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
   * Input size
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Input type
   */
  type?: 'text' | 'password' | 'email' | 'url' | 'tel';
  /**
   * Change handler
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Focus handler
   */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /**
   * Blur handler
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /**
   * Read only state
   */
  readOnly?: boolean;
}

/**
 * Carbon TextInput component wrapper
 */
export const TextInput: React.FC<TextInputProps> = ({
  id,
  labelText,
  placeholder,
  value,
  defaultValue,
  disabled = false,
  invalid = false,
  invalidText,
  helperText,
  hideLabel = false,
  size = 'md',
  type = 'text',
  onChange,
  onFocus,
  onBlur,
  readOnly = false,
  ...props
}) => {
  return (
    <CarbonTextInput
      id={id}
      labelText={labelText}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      disabled={disabled}
      invalid={invalid}
      invalidText={invalidText}
      helperText={helperText}
      hideLabel={hideLabel}
      size={size}
      type={type}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      readOnly={readOnly}
      {...props}
    />
  );
}; 