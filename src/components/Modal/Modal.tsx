import React from 'react';
import { Modal as CarbonModal } from '@carbon/react';

export interface ModalProps {
  /**
   * Modal content
   */
  children: React.ReactNode;
  /**
   * Modal open state
   */
  open: boolean;
  /**
   * Close handler
   */
  onRequestClose: () => void;
  /**
   * Modal heading/title
   */
  modalHeading?: string;
  /**
   * Modal label (smaller text above heading)
   */
  modalLabel?: string;
  /**
   * Primary button text
   */
  primaryButtonText?: string;
  /**
   * Secondary button text
   */
  secondaryButtonText?: string;
  /**
   * Primary button click handler
   */
  onRequestSubmit?: () => void;
  /**
   * Secondary button click handler
   */
  onSecondarySubmit?: () => void;
  /**
   * Modal size
   */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /**
   * Disable primary button
   */
  primaryButtonDisabled?: boolean;
  /**
   * Show danger variant
   */
  danger?: boolean;
  /**
   * Prevent closing on outside click
   */
  preventCloseOnClickOutside?: boolean;
  /**
   * Alert modal (no buttons)
   */
  alert?: boolean;
  /**
   * Passive modal (no buttons, just close X)
   */
  passiveModal?: boolean;
}

/**
 * Carbon Modal component wrapper
 */
export const Modal: React.FC<ModalProps> = ({
  children,
  open,
  onRequestClose,
  modalHeading,
  modalLabel,
  primaryButtonText = 'Submit',
  secondaryButtonText = 'Cancel',
  onRequestSubmit,
  onSecondarySubmit,
  size = 'md',
  primaryButtonDisabled = false,
  danger = false,
  preventCloseOnClickOutside,
  alert = false,
  passiveModal = false,
  ...props
}) => {
  // Set preventCloseOnClickOutside based on modal type
  const shouldPreventClose = preventCloseOnClickOutside ?? (passiveModal ? false : true);
  return (
    <CarbonModal
      open={open}
      onRequestClose={onRequestClose}
      modalHeading={modalHeading}
      modalLabel={modalLabel}
      primaryButtonText={primaryButtonText}
      secondaryButtonText={secondaryButtonText}
      onRequestSubmit={onRequestSubmit}
      onSecondarySubmit={onSecondarySubmit}
      size={size}
      primaryButtonDisabled={primaryButtonDisabled}
      danger={danger}
      preventCloseOnClickOutside={shouldPreventClose}
      alert={alert}
      passiveModal={passiveModal}
      {...props}
    >
      {children}
    </CarbonModal>
  );
}; 