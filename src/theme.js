// 主题切换功能
const THEME_KEY = 'korean-ui-theme';

export function getTheme() {
  return document.body.classList.contains('dark-theme') ? 'dark' : 'light';
}

export function setTheme(theme) {
  document.body.classList.toggle('dark-theme', theme === 'dark');
  localStorage.setItem(THEME_KEY, theme);
}

export function initTheme() {
  if (localStorage.getItem(THEME_KEY) === 'dark') {
    document.body.classList.add('dark-theme');
  }
}

export function toggleTheme() {
  const next = getTheme() === 'dark' ? 'light' : 'dark';
  setTheme(next);
  return next;
}
