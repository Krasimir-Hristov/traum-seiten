/**
 * Shared auth error sentinel values.
 * Used by both server actions and UI components to identify specific auth states.
 */
export const AUTH_ERRORS = {
  /** Returned when signup succeeds but email confirmation is required. */
  CONFIRM_EMAIL: 'IDENTIFIER_CONFIRM_EMAIL',
} as const;
