export function useAcceptLanguage() {
  return navigator.languages[0] || navigator.language;
}
