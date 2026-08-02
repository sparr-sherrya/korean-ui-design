// 加载指示器组件
export default function Spinner({ size = 'medium', text = '' }) {
  const el = document.createElement('div');
  el.className = `spinner spinner-${size}`;
  el.innerHTML = `
    <span class="spinner-ring" aria-hidden="true"></span>
    ${text ? `<span class="spinner-text">${text}</span>` : ''}
  `;
  return el;
}

export function showSpinner(container, options) {
  const spinner = Spinner(options);
  container.appendChild(spinner);
  return spinner;
}

export function hideSpinner(spinner) {
  if (spinner) spinner.remove();
}
