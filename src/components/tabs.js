// 标签页组件
export default function Tabs({ items = [], active = 0, onChange }) {
  const el = document.createElement('div');
  el.className = 'tabs';

  const tabList = document.createElement('div');
  tabList.className = 'tabs-nav';
  tabList.setAttribute('role', 'tablist');

  const panels = items.map((item, index) => {
    const tab = document.createElement('button');
    tab.className = 'tabs-tab';
    tab.setAttribute('role', 'tab');
    tab.textContent = item.label;
    if (index === active) tab.classList.add('tabs-tab-active');
    tab.addEventListener('click', () => {
      switchTab(index);
      if (onChange) onChange(index, item);
    });
    tabList.appendChild(tab);

    const panel = document.createElement('div');
    panel.className = 'tabs-panel';
    panel.setAttribute('role', 'tabpanel');
    panel.hidden = index !== active;
    panel.innerHTML = item.content || '';
    return { tab, panel };
  });

  function switchTab(index) {
    panels.forEach(({ tab, panel }, i) => {
      tab.classList.toggle('tabs-tab-active', i === index);
      panel.hidden = i !== index;
    });
  }

  el.appendChild(tabList);
  panels.forEach(({ panel }) => el.appendChild(panel));
  return el;
}
