import React from 'react';
import {
  InlineNotification,
  ToastNotification,
  ActionableNotification,
} from '@carbon/react';

export interface NotificationProps {
  /**
   * Notification title
   */
  title: string;
  /**
   * Notification subtitle/message
   */
  subtitle?: string;
  /**
   * Notification kind/type
   */
  kind?: 'error' | 'info' | 'info-square' | 'success' | 'warning' | 'warning-alt';
  /**
   * Notification variant
   */
  variant?: 'inline' | 'toast' | 'actionable';
  /**
   * Hide close button
   */
  hideCloseButton?: boolean;
  /**
   * Close handler
   */
  onClose?: () => void;
  /**
   * Click handler
   */
  onClick?: () => void;
  /**
   * Low contrast styling
   */
  lowContrast?: boolean;
  /**
   * Timeout for auto-close (toast only)
   */
  timeout?: number;
  /**
   * Action button text (actionable only)
   */
  actionButtonLabel?: string;
  /**
   * Action button handler (actionable only)
   */
  onActionButtonClick?: () => void;
  /**
   * Status icon description
   */
  statusIconDescription?: string;
  /**
   * Close button description
   */
  closeButtonDescription?: string;
}

/**
 * Carbon Notification component wrapper
 */
export const Notification: React.FC<NotificationProps> = ({
  title,
  subtitle,
  kind = 'info',
  variant = 'inline',
  hideCloseButton = false,
  onClose,
  onClick,
  lowContrast = false,
  timeout,
  actionButtonLabel,
  onActionButtonClick,
  statusIconDescription,
  closeButtonDescription = 'Close notification',
  ...props
}) => {
  const commonProps = {
    title,
    subtitle,
    kind,
    hideCloseButton,
    onClose,
    lowContrast,
    statusIconDescription,
    closeButtonDescription,
  };

  if (variant === 'toast') {
    return (
      <ToastNotification
        {...commonProps}
        timeout={timeout}
        {...props}
      />
    );
  }

  if (variant === 'actionable') {
    return (
      <ActionableNotification
        {...commonProps}
        actionButtonLabel={actionButtonLabel}
        onActionButtonClick={onActionButtonClick}
        {...props}
      />
    );
  }

  // Default to inline notification
  return (
    <InlineNotification
      {...commonProps}
      onClick={onClick}
      {...props}
    />
  );
}; 