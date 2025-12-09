export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error('Failed to copy to clipboard:', error);
    return false;
  }
};

export const copyEmailToClipboard = async (emailUrl: string): Promise<string> => {
  const email = emailUrl.replace('mailto:', '');
  const success = await copyToClipboard(email);
  if (!success) {
    throw new Error('Failed to copy email');
  }
  return email;
};
