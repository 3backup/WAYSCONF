/**
 * Remove +suffix from local part of email (e.g. user+tag@domain.com -> user@domain.com).
 */
export function clearEmailFromPrefix(email: string): string {
  return email.replace(/(\+\S+)@/, "@");
}

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function validateEmail(email: string): boolean {
  return EMAIL_REGEX.test(email);
}
