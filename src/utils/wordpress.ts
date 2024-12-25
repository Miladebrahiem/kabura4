/**
 * Converts a WordPress URL path to a React Router path
 */
export const convertWordPressPath = (path: string): string => {
  // Remove domain if present
  const cleanPath = path.replace(/^(?:https?:\/\/)?[^\/]+/, '');
  
  // Remove trailing slash
  return cleanPath.replace(/\/$/, '');
};