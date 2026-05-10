import React from "react";
import {
  Bell,
  CalendarDays,
  Check,
  ChevronRight,
  Clipboard,
  Code2,
  FileText,
  ListTodo,
  MessageCircle,
  Sparkles,
  Wand2
} from "lucide-react";
import linneaIcon from "./assets/app/linnea-icon.png";
import linneaHero from "./assets/pet/linnea-q.png";
import idleImage from "./assets/pet/linnea_state/_Idle_.png";
import talkingImage from "./assets/pet/linnea_state/_Talking_.png";
import thinkingImage from "./assets/pet/linnea_state/_Thinking_.png";
import happyImage from "./assets/pet/linnea_state/_Happy_.png";
import reminderImage from "./assets/pet/linnea_state/_Reminder_.png";
import sleepyImage from "./assets/pet/linnea_state/_Sleepy_.png";
import urgentImage from "./assets/pet/linnea_state/_Urgent_.png";
import restImage from "./assets/pet/linnea_state/_Rest_.png";

const themePresets = ["#5aa982", "#4d8fc8", "#d59a3a", "#c56c86", "#8a75c9", "#5c8f7a"];
const installerPath = "D:\\code\\desktoppet\\release\\Linnea Setup 1.0.8.exe";

const features = [
  {
    icon: MessageCircle,
    title: "自然语言记录",
    text: "直接告诉 Linnea 今天要做什么，她会把零散想法整理成可确认的任务草案。"
  },
  {
    icon: ListTodo,
    title: "确认后写入待办",
    text: "AI 先生成草案，用户确认后才保存，适合整理项目、标签、优先级和子任务。"
  },
  {
    icon: CalendarDays,
    title: "日历排程",
    text: "把待办放到日、周、月视图里，区分截止时间和真正计划执行的时间。"
  },
  {
    icon: FileText,
    title: "每日总结",
    text: "复盘已完成、待关注和未来风险，帮助每天收尾时快速看清任务状态。"
  },
  {
    icon: Wand2,
    title: "全局选区工具",
    text: "选中文字后快速总结、翻译或转成待办，减少在不同窗口之间来回切换。"
  },
  {
    icon: Code2,
    title: "Codex 工作流",
    text: "拖拽文件进入隔离副本，再把代码任务交给 Codex 会话处理。"
  }
];

const states = [
  { name: "Idle", image: idleImage, text: "安静陪伴，随时等待输入。" },
  { name: "Talking", image: talkingImage, text: "对话与任务捕获进行中。" },
  { name: "Thinking", image: thinkingImage, text: "正在整理草案和计划。" },
  { name: "Happy", image: happyImage, text: "任务保存或完成后的反馈。" },
  { name: "Reminder", image: reminderImage, text: "提醒到来时给出桌面提示。" },
  { name: "Urgent", image: urgentImage, text: "突出展示临近或逾期事项。" },
  { name: "Rest", image: restImage, text: "休息状态让桌面更轻松。" },
  { name: "Sleepy", image: sleepyImage, text: "长时间空闲后的低打扰状态。" }
];

function mixHex(color: string, base: string, baseWeight: number) {
  const foreground = hexToRgb(color);
  const background = hexToRgb(base);
  const mix = (channel: "r" | "g" | "b") =>
    Math.round(background[channel] * baseWeight + foreground[channel] * (1 - baseWeight));
  return `rgb(${mix("r")}, ${mix("g")}, ${mix("b")})`;
}

function hexToRgb(color: string) {
  const value = color.replace("#", "");
  return {
    r: Number.parseInt(value.slice(0, 2), 16),
    g: Number.parseInt(value.slice(2, 4), 16),
    b: Number.parseInt(value.slice(4, 6), 16)
  };
}

function hexToRgba(color: string, alpha: number) {
  const { r, g, b } = hexToRgb(color);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function App() {
  const [accent, setAccent] = React.useState(themePresets[0]);
  const [copied, setCopied] = React.useState(false);

  const themeStyle = React.useMemo(
    () => ({
      "--accent": accent,
      "--accent-soft": mixHex(accent, "#ffffff", 0.83),
      "--accent-wash": mixHex(accent, "#ffffff", 0.93),
      "--accent-border": hexToRgba(accent, 0.25),
      "--accent-shadow": hexToRgba(accent, 0.18)
    } as React.CSSProperties),
    [accent]
  );

  async function copyInstallerPath() {
    try {
      await navigator.clipboard.writeText(installerPath);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <main className="site" style={themeStyle}>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Linnea 首页">
          <img src={linneaIcon} alt="" />
          <span>Linnea</span>
        </a>
        <nav>
          <a href="#features">功能</a>
          <a href="#themes">主题</a>
          <a href="#states">状态</a>
          <a href="#local">本地运行</a>
        </nav>
      </header>

      <section id="top" className="hero section">
        <div className="hero-copy">
          <span className="eyebrow"><Sparkles size={16} /> Windows desktop pet assistant</span>
          <h1>把桌宠、AI 待办和日程复盘放到同一个轻量助手里。</h1>
          <p>
            Linnea 是一个 Windows 桌面宠物应用。她可以陪你记录自然语言任务、确认待办草案、
            安排日历、发送提醒，并把代码工作流交给 Codex。
          </p>
          <div className="hero-actions">
            <button type="button" className="primary-action" onClick={copyInstallerPath}>
              <Clipboard size={18} /> {copied ? "已复制安装包路径" : "复制本地安装包路径"}
            </button>
            <a className="secondary-action" href="#features">
              查看功能 <ChevronRight size={18} />
            </a>
          </div>
          <div className="local-path">{installerPath}</div>
        </div>

        <div className="hero-visual" aria-label="Linnea 桌宠展示">
          <div className="hero-card task-card">
            <Check size={16} />
            <span>3 个待办已确认</span>
          </div>
          <img className="hero-pet" src={linneaHero} alt="Q 版 Linnea 桌面宠物" />
          <div className="hero-card reminder-card">
            <Bell size={16} />
            <span>15:00 提醒交周报</span>
          </div>
        </div>
      </section>

      <section id="features" className="section">
        <div className="section-heading">
          <span>Key Features</span>
          <h2>从一句话到可执行计划</h2>
          <p>页面结构参考简洁 SaaS 展示站，但内容围绕 Linnea 的桌面工作流重新设计。</p>
        </div>
        <div className="feature-grid">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article className="feature-card" key={feature.title}>
                <span className="feature-icon"><Icon size={20} /></span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="workflow section">
        <div className="section-heading">
          <span>Workflow</span>
          <h2>Linnea 的日常整理路径</h2>
        </div>
        <div className="workflow-steps">
          {["说出任务", "生成草案", "安排日历", "总结复盘"].map((step, index) => (
            <article key={step}>
              <span>{index + 1}</span>
              <strong>{step}</strong>
              <p>
                {index === 0 && "用自然语言把脑中的事项说出来。"}
                {index === 1 && "AI 拆解为待办，等待你确认。"}
                {index === 2 && "把任务放进具体执行时间块。"}
                {index === 3 && "检查完成度、风险和明天重点。"}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="themes" className="theme-section section">
        <div className="theme-copy">
          <span className="eyebrow">Theme Preview</span>
          <h2>选择应用里同款主题色</h2>
          <p>点击色块后，页面的按钮、边框、光影和预览区域会即时切换，模拟 Linnea 工作窗口里的主题偏好。</p>
          <div className="theme-picker" aria-label="选择主题色">
            {themePresets.map((color) => (
              <button
                key={color}
                type="button"
                className={accent === color ? "active" : ""}
                style={{ backgroundColor: color }}
                onClick={() => setAccent(color)}
                aria-label={`切换主题色 ${color}`}
              />
            ))}
          </div>
        </div>
        <div className="theme-preview">
          <div className="preview-window">
            <div className="preview-sidebar">
              <span />
              <span />
              <span />
            </div>
            <div className="preview-content">
              <strong>今天的计划</strong>
              <p>整理客户反馈，15:00 交周报。</p>
              <button type="button">确认写入待办</button>
            </div>
          </div>
        </div>
      </section>

      <section id="states" className="section">
        <div className="section-heading">
          <span>Linnea States</span>
          <h2>不同状态都可以成为网页上的展示资产</h2>
        </div>
        <div className="state-grid">
          {states.map((state) => (
            <article className="state-card" key={state.name}>
              <img src={state.image} alt={`Linnea ${state.name} 状态`} />
              <strong>{state.name}</strong>
              <p>{state.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="local" className="local-section section">
        <div>
          <span className="eyebrow">Local Build</span>
          <h2>本地使用方式</h2>
          <p>这个展示站是独立项目，不会修改桌面应用源码。桌面应用仍在 `D:\code\desktoppet` 中构建。</p>
        </div>
        <div className="command-panel">
          <code>cd D:\code\desktoppet</code>
          <code>npm install</code>
          <code>npm run dev</code>
          <code>npm run dist:win</code>
        </div>
      </section>
    </main>
  );
}
