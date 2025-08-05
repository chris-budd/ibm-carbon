import React from 'react';
import { Tag as CarbonTag } from '@carbon/react';

export interface TagProps {
  /**
   * Tag children/content
   */
  children: React.ReactNode;
  /**
   * Tag type/color
   */
  type?: 'red' | 'magenta' | 'purple' | 'blue' | 'cyan' | 'teal' | 'green' | 'gray' | 'cool-gray' | 'warm-gray' | 'high-contrast' | 'outline';
  /**
   * Tag size
   */
  size?: 'sm' | 'md';
  /**
   * Disabled state
   */
  disabled?: boolean;
  /**
   * Filter tag (with close button)
   */
  filter?: boolean;
  /**
   * Click handler for filter tags
   */
  onClose?: () => void;
  /**
   * Click handler for the tag
   */
  onClick?: () => void;
  /**
   * Custom title/tooltip text
   */
  title?: string;
  /**
   * Render as clickable
   */
  renderIcon?: React.ComponentType<any>;
}

/**
 * Carbon Tag component wrapper
 */
export const Tag: React.FC<TagProps> = ({
  children,
  type = 'gray',
  size = 'md',
  disabled = false,
  filter = false,
  onClose,
  onClick,
  title,
  renderIcon,
  ...props
}) => {
  return (
    <CarbonTag
      type={type}
      size={size}
      disabled={disabled}
      filter={filter}
      onClose={onClose}
      onClick={onClick}
      title={title}
      renderIcon={renderIcon}
      {...props}
    >
      {children}
    </CarbonTag>
  );
}; 