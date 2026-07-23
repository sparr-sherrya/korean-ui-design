// 模态框组件
export default function Modal({ title = '', content = '', visible = false, onClose }) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal">
      <div class="modal-header">
        <h3>${title}</h3>
        <button class="modal-close" aria-label="关闭">&times;</button>
      </div>
      <div class="modal-body">${content}</div>
    </div>
  `;

  if (visible) {
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';
  }

  const close = () => {
    overlay.remove();
    document.body.style.overflow = '';
    if (onClose) onClose();
  };

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target.classList.contains('modal-close')) {
      close();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });

  return { overlay, close };
}
