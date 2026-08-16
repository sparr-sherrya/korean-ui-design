# 我的项目 (My Project)

一个现代化的UI设计项目

## 项目简介

这是一个专注于用户界面设计的项目，提供简洁、美观、易用的UI组件和设计方案。

## 功能特性

- 🎨 现代化UI设计
- 📱 响应式布局
- ✨ 流畅的动画效果
- 🎯 用户体验优化
- 🔧 组件化设计
- 🌈 丰富的主题配色

## 技术栈

- HTML5 / CSS3
- JavaScript (ES6+)
- 现代前端框架
- UI/UX设计原则

## 快速开始

`ash
# 克隆项目
git clone https://github.com/wucald25641/my_project.git

# 进入项目目录
cd my_project

# 查看项目结构
ls -la
`

## 项目结构

`
my_project/
├── src/              # 源代码
│   ├── components/   # UI组件
│   ├── styles/       # 样式文件
│   └── assets/       # 静态资源
├── docs/             # 文档
├── examples/         # 示例
└── README.md         # 项目说明
`

## 组件文档

### Button 按钮

```js
import Button from './src/components/button.js';

<Button onClick={handleClick}>点击</Button>
```

### Input 输入框

```js
import Input from './src/components/input.js';

<Input placeholder="请输入内容" value={value} onChange={setValue} />
```

### Card 卡片

```js
import Card from './src/components/card.js';

<Card title="标题" className="custom-card">卡片内容</Card>
```

### Toast 消息提示

```js
import Toast from './src/components/toast.js';

Toast({ type: 'success', message: '保存成功' });
Toast({ type: 'error', message: '网络异常，请重试' });
```

### Modal 模态框

```js
import Modal from './src/components/modal.js';

const modal = Modal({ title: '确认删除', content: '删除后不可恢复' });
```

### Tabs 标签页

```js
import Tabs from './src/components/tabs.js';

const tabs = Tabs({
  items: [
    { label: '全部', content: '内容一' },
    { label: '已完成', content: '内容二' }
  ]
});
```

### Spinner 加载指示器

```js
import { showSpinner, hideSpinner } from './src/components/spinner.js';

const spinner = showSpinner(document.body, { text: '加载中...' });
hideSpinner(spinner);
```

## 设计原则

1. **简洁性** - 界面简洁，操作直观
2. **一致性** - 统一的设计语言和交互模式
3. **可访问性** - 支持多种设备和辅助功能
4. **性能优先** - 优化加载速度和运行效率

## 使用场景

- 📱 移动应用界面
- 🖥️ 桌面应用界面
- 🌐 网页界面设计
- 📊 数据可视化界面
- 🎮 游戏界面设计

## 贡献指南

欢迎提交Issue和Pull Request！

1. Fork 项目
2. 创建功能分支 (git checkout -b feature/AmazingFeature)
3. 提交更改 (git commit -m '添加某个功能')
4. 推送到分支 (git push origin feature/AmazingFeature)
5. 创建 Pull Request

## 许可证

MIT License

## 更新日志

- 2026-08-16: 更新组件文档与修复记录
- 2026-08-15: 添加暗色主题配色方案
- 2026-08-13: 优化 debounce/throttle 工具函数性能
- 2026-08-12: 添加组件统一入口 index.js
- 2026-08-10: 修复主题切换时组件样式未同步
- 2026-08-08: 登录页接入表单校验与提示组件
- 2026-08-06: 补充组件使用文档
- 2026-08-04: 添加标签页组件
- 2026-08-02: 添加加载指示器组件
- 2026-07-30: 修复输入框深色主题对比度
- 2026-07-28: 添加表单校验工具
- 2026-07-25: 抽取主题变量到 CSS 自定义属性
- 2026-07-23: 添加模态框组件
- 2026-07-21: 添加消息提示组件
- 2026-07-19: 修复卡片组件渲染错误- 2026-07-17: 更新中文README文档## UI组件库

已添加基础组件：按钮、输入框、卡片
// 修复按钮样式问题
## 修复记录
- 修复了按钮在移动端的点击区域问题
// 修复移动端问题
## 修复记录
- 修复移动端触摸事件问题
// 更新文档
## 更新日志
- 2025年4月: 添加主题切换功能
// 最新修复
- 2025年7月: 性能优化和bug修复


