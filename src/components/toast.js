// 消息提示组件
const TYPES = {
  success: '✅',
  error: '❌',
  info: 'ℹ️'
};

export default function Toast({ type = 'info', message, duration = 3000 }) {
  const el = document.createElement('div');
  el.className = `toast toast-${type}`;
  el.innerHTML = `<span class="toast-icon">${TYPES[type] || TYPES.info}</span><span>${message}</span>`;
  document.body.appendChild(el);

  requestAnimationFrame(() => el.classList.add('toast-show'));

  setTimeout(() => {
    el.classList.remove('toast-show');
    el.classList.add('toast-hide');
    setTimeout(() => el.remove(), 300);
  }, duration);
}
