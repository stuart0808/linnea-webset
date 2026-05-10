import React from "react";
import {
  Bell,
  CalendarDays,
  Check,
  ChevronRight,
  Code2,
  Download,
  ExternalLink,
  FileText,
  Globe2,
  ListTodo,
  MessageCircle,
  Sparkles,
  Wand2
} from "lucide-react";
import linneaIcon from "./assets/app/linnea-icon.png";
import linneaHero from "./assets/pet/linnea-q.png";
import happyImage from "./assets/pet/linnea_state/_Happy_.png";
import idleImage from "./assets/pet/linnea_state/_Idle_.png";
import reminderImage from "./assets/pet/linnea_state/_Reminder_.png";
import restImage from "./assets/pet/linnea_state/_Rest_.png";
import sleepyImage from "./assets/pet/linnea_state/_Sleepy_.png";
import talkingImage from "./assets/pet/linnea_state/_Talking_.png";
import thinkingImage from "./assets/pet/linnea_state/_Thinking_.png";
import urgentImage from "./assets/pet/linnea_state/_Urgent_.png";

type Locale = "zh-CN" | "en-US" | "ja-JP" | "ko-KR";
type TextPair = [string, string];
interface SiteCopy {
  nav: { features: string; themes: string; gallery: string; download: string };
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    download: string;
    explore: string;
    latest: string;
    taskCard: string;
    reminderCard: string;
  };
  features: { eyebrow: string; title: string; body: string; items: TextPair[] };
  workflow: { eyebrow: string; title: string; steps: TextPair[] };
  themes: {
    eyebrow: string;
    title: string;
    body: string;
    aria: string;
    switchAria: string;
    previewTitle: string;
    previewBody: string;
    previewButton: string;
  };
  states: { eyebrow: string; title: string; body: string; items: TextPair[] };
  download: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
    notes: string;
    latest: string;
    platform: string;
    installer: string;
    size: string;
    published: string;
    getStarted: string;
    installTitle: string;
    installSteps: TextPair[];
    history: string;
    previous: string;
    historyBody: string;
    all: string;
    download: string;
    releaseNotes: string;
  };
}

const localeOptions: Array<{ locale: Locale; label: string }> = [
  { locale: "zh-CN", label: "中文" },
  { locale: "en-US", label: "EN" },
  { locale: "ja-JP", label: "日本語" },
  { locale: "ko-KR", label: "한국어" }
];

const themePresets = ["#5aa982", "#4d8fc8", "#d59a3a", "#c56c86", "#8a75c9", "#5c8f7a"];
const allReleasesUrl = "https://github.com/stuart0808/linnea-desktop-pet/releases/";

const latestRelease = {
  version: "v1.0.9",
  date: "2026-05-10",
  file: "Linnea-Setup-1.0.9.exe",
  size: "110 MB",
  notesUrl: "https://github.com/stuart0808/linnea-desktop-pet/releases/tag/v1.0.9",
  downloadUrl: "https://github.com/stuart0808/linnea-desktop-pet/releases/download/v1.0.9/Linnea-Setup-1.0.9.exe"
};

const releaseHistory = [
  ["v1.0.5", "2026-05-09", "Linnea-Setup-1.0.5.exe"],
  ["v1.0.4", "2026-05-08", "Linnea.Setup.1.0.4.exe"],
  ["v1.0.3", "2026-05-08", "Linnea.Setup.1.0.3.exe"],
  ["v1.0.2", "2026-05-08", "Linnea.Setup.1.0.2.exe"],
  ["v1.0.0", "2026-05-07", "Linnea.Setup.1.0.0.exe"],
  ["v0.4.0", "2026-05-06", "Linnea.Setup.0.4.0.exe"],
  ["v0.3.0", "2026-05-06", "Linnea.Setup.0.3.0.exe"]
].map(([version, date, file]) => ({
  version,
  date,
  file,
  size: "110 MB",
  notesUrl: `https://github.com/stuart0808/linnea-desktop-pet/releases/tag/${version}`,
  downloadUrl: `https://github.com/stuart0808/linnea-desktop-pet/releases/download/${version}/${file}`
}));

const featureIcons = [MessageCircle, ListTodo, CalendarDays, FileText, Wand2, Code2];
const stateImages = [idleImage, talkingImage, thinkingImage, happyImage, reminderImage, urgentImage, restImage, sleepyImage];

const copy: Record<Locale, SiteCopy> = {
  "zh-CN": {
    nav: { features: "功能", themes: "主题", gallery: "状态展示", download: "下载" },
    hero: {
      eyebrow: "Windows 桌面宠物助手",
      title: "陪你整理任务、提醒和每日计划的桌面小伙伴。",
      body: "Linnea 常驻在桌面上，帮你用自然语言记录任务，在重要时刻提醒你，并让一天的安排更清楚、更轻松。",
      download: "下载 Windows 版",
      explore: "查看功能",
      latest: `最新版：${latestRelease.version}，适用于 Windows x64。`,
      taskCard: "今天有 3 个任务已就绪",
      reminderCard: "15:00 提醒已设置"
    },
    features: {
      eyebrow: "核心功能",
      title: "从一个想法到一份可靠计划",
      body: "Linnea 让记录任务保持轻量，同时在写入待办前保留你的确认权。",
      items: [
        ["想到什么就告诉她", "用自然语言写下一句话，Linnea 会整理成清晰、可检查的任务草案。"],
        ["确认后才加入待办", "草案可以先编辑再确认，避免任务列表被不准确的内容打乱。"],
        ["安排真正的执行时间", "在日、周、月视图中规划任务，把截止时间和执行时间分开。"],
        ["每天结束时看清进展", "快速回顾完成情况、风险事项和明天需要优先处理的内容。"],
        ["选中文字即可处理", "在任意窗口选中文字后，可以总结、翻译或转成待办。"],
        ["从文件开始 Codex 会话", "把文件拖给 Linnea，在隔离工作区中启动 Codex 代码任务。"]
      ]
    },
    workflow: {
      eyebrow: "工作流",
      title: "让一天自然推进",
      steps: [
        ["捕获", "在想法溜走前，把它丢给 Linnea。"],
        ["检查", "编辑任务草案，只确认真正想保留的内容。"],
        ["排程", "选择这件事应该在什么时候完成。"],
        ["复盘", "查看进展、风险和下一步重点。"]
      ]
    },
    themes: {
      eyebrow: "主题预览",
      title: "让 Linnea 更适合你的桌面",
      body: "选择柔和的主题色，预览 Linnea 工作区如何随之变化。",
      aria: "选择主题色",
      switchAria: "切换主题色",
      previewTitle: "今天的计划",
      previewBody: "整理笔记、准备周报，也留出真正休息的时间。",
      previewButton: "确认任务草案"
    },
    states: {
      eyebrow: "Linnea 状态",
      title: "有表情的桌面陪伴",
      body: "当你对话、计划、完成任务或收到提醒时，Linnea 会以不同状态回应你。",
      items: [
        ["Idle", "安静陪伴你工作。"],
        ["Talking", "随时准备记录一句话或回答问题。"],
        ["Thinking", "正在把草案整理成有用结构。"],
        ["Happy", "任务推进时的小小反馈。"],
        ["Reminder", "重要事项到来时给你清晰提示。"],
        ["Urgent", "更醒目地提示不能再拖的任务。"],
        ["Rest", "节奏放缓时低调陪伴。"],
        ["Sleepy", "一天变慢时减少打扰。"]
      ]
    },
    download: {
      eyebrow: "Windows 下载",
      title: "下载 Linnea Windows 版",
      body: "安装最新 Windows 版本，把 Linnea 带到桌面上，用来记录任务、接收提醒、安排计划和每日复盘。",
      cta: "下载 Windows 版",
      notes: "发行说明",
      latest: "最新版本",
      platform: "平台",
      installer: "安装包",
      size: "大小",
      published: "发布时间",
      getStarted: "开始使用",
      installTitle: "三步完成安装",
      installSteps: [
        ["下载安装包", "从 GitHub Releases 下载最新 Windows 安装包。"],
        ["运行 .exe 文件", "按照安装向导选择安装位置并完成安装。"],
        ["从 Windows 启动 Linnea", "打开 Linnea，并配置提醒、主题和 AI 设置。"]
      ],
      history: "版本历史",
      previous: "历史 Windows 版本",
      historyBody: "如果你需要比较行为或回到旧版本，可以下载历史安装包。",
      all: "全部版本",
      download: "下载",
      releaseNotes: "说明"
    }
  },
  "en-US": {
    nav: { features: "Features", themes: "Themes", gallery: "Gallery", download: "Download" },
    hero: {
      eyebrow: "Windows desktop pet assistant",
      title: "A tiny desktop companion for tasks, reminders, and daily planning.",
      body: "Linnea stays on your desktop, helps you capture tasks in plain language, nudges you when it matters, and gives your day a calmer rhythm.",
      download: "Download for Windows",
      explore: "Explore features",
      latest: `Latest release: ${latestRelease.version} for Windows x64.`,
      taskCard: "3 tasks ready for today",
      reminderCard: "15:00 reminder is set"
    },
    features: {
      eyebrow: "Key Features",
      title: "From a quick thought to a plan you can trust",
      body: "Linnea keeps task capture light, but still gives you control before anything enters your list.",
      items: [
        ["Tell her what is on your mind", "Type a quick note in natural language and Linnea turns it into a clean task draft you can review."],
        ["Confirm before it becomes a task", "Drafts stay editable until you approve them, so your list stays intentional instead of noisy."],
        ["Plan time, not just deadlines", "Place work on a day, week, or month view and keep deadlines separate from scheduled focus time."],
        ["End the day with a clear picture", "Review what moved, what is at risk, and what deserves attention tomorrow."],
        ["Use selected text instantly", "Summarize, translate, or turn selected text into a task without leaving the window you are working in."],
        ["Start coding sessions from files", "Drop files into Linnea and start a Codex session from an isolated workspace."]
      ]
    },
    workflow: {
      eyebrow: "Workflow",
      title: "A simpler way to keep the day moving",
      steps: [
        ["Capture", "Drop a thought into Linnea before it slips away."],
        ["Review", "Edit the task draft and confirm only what you want."],
        ["Schedule", "Choose when the work should actually happen."],
        ["Reflect", "See progress, risks, and what deserves focus next."]
      ]
    },
    themes: {
      eyebrow: "Theme Preview",
      title: "Make Linnea feel at home on your desktop",
      body: "Choose a soft accent color and preview how Linnea's workspace changes around it.",
      aria: "Choose theme color",
      switchAria: "Switch theme color",
      previewTitle: "Today's plan",
      previewBody: "Review notes, prepare the weekly update, and take a real break.",
      previewButton: "Confirm task draft"
    },
    states: {
      eyebrow: "Linnea States",
      title: "A desktop companion with visible moods",
      body: "Linnea changes expression as you talk, plan, complete tasks, or receive reminders.",
      items: [
        ["Idle", "A quiet companion while you work."],
        ["Talking", "Ready for a quick note or question."],
        ["Thinking", "Organizing drafts into useful structure."],
        ["Happy", "A small celebration when tasks move forward."],
        ["Reminder", "A visible nudge when something needs attention."],
        ["Urgent", "A stronger signal for tasks that cannot wait."],
        ["Rest", "Low-key company during calmer moments."],
        ["Sleepy", "Less distraction when the day slows down."]
      ]
    },
    download: {
      eyebrow: "Windows download",
      title: "Download Linnea for Windows",
      body: "Install the latest Windows build and bring Linnea to your desktop for task capture, reminders, planning, and daily review.",
      cta: "Download for Windows",
      notes: "Release notes",
      latest: "Latest version",
      platform: "Platform",
      installer: "Installer",
      size: "Size",
      published: "Published",
      getStarted: "Get started",
      installTitle: "Install in three steps",
      installSteps: [
        ["Download the installer", "Use the latest Windows installer from GitHub Releases."],
        ["Run the .exe file", "Follow the setup wizard and choose where Linnea should be installed."],
        ["Launch Linnea from Windows", "Start Linnea and configure reminders, theme, and AI settings."]
      ],
      history: "Version history",
      previous: "Previous Windows builds",
      historyBody: "Choose an older installer if you need to compare behavior or return to a previous version.",
      all: "All releases",
      download: "Download",
      releaseNotes: "Notes"
    }
  },
  "ja-JP": {
    nav: { features: "機能", themes: "テーマ", gallery: "ギャラリー", download: "ダウンロード" },
    hero: {
      eyebrow: "Windows デスクトップペット助手",
      title: "タスク、リマインダー、毎日の計画を支える小さなデスクトップ相棒。",
      body: "Linnea はデスクトップに常駐し、自然な言葉でタスクを記録し、大事なタイミングで知らせ、1日を落ち着いて整えます。",
      download: "Windows 版をダウンロード",
      explore: "機能を見る",
      latest: `最新版：${latestRelease.version}、Windows x64 対応。`,
      taskCard: "今日のタスクが 3 件準備済み",
      reminderCard: "15:00 のリマインダーを設定済み"
    },
    features: {
      eyebrow: "主な機能",
      title: "ひとことのメモから信頼できる計画へ",
      body: "Linnea は記録を軽く保ちながら、リストに入れる前の確認も大切にします。",
      items: [
        ["思いついたことをそのまま伝える", "自然な言葉でメモすると、Linnea が確認しやすいタスク草案に整えます。"],
        ["確認してからタスク化", "草案は承認するまで編集できるので、リストをきれいに保てます。"],
        ["締切だけでなく時間も計画", "日・週・月ビューで作業時間を決め、締切と実行時間を分けて管理できます。"],
        ["1日の終わりに状況を把握", "進んだこと、リスク、明日見るべきことをすばやく確認できます。"],
        ["選択テキストをすぐ活用", "作業中の画面を離れずに、要約・翻訳・タスク化できます。"],
        ["ファイルから Codex セッションを開始", "ファイルを Linnea に渡し、隔離された作業スペースで Codex を始められます。"]
      ]
    },
    workflow: {
      eyebrow: "ワークフロー",
      title: "1日を自然に前へ進める",
      steps: [
        ["記録", "忘れる前に思いつきを Linnea に渡します。"],
        ["確認", "草案を編集し、残したい内容だけ承認します。"],
        ["予定化", "その作業をいつ進めるか決めます。"],
        ["振り返り", "進捗、リスク、次に集中することを確認します。"]
      ]
    },
    themes: {
      eyebrow: "テーマプレビュー",
      title: "Linnea をあなたのデスクトップになじませる",
      body: "やわらかなアクセントカラーを選び、ワークスペースの雰囲気をプレビューできます。",
      aria: "テーマカラーを選択",
      switchAria: "テーマカラーを切り替え",
      previewTitle: "今日の予定",
      previewBody: "メモを見直し、週報を準備し、きちんと休む時間も残します。",
      previewButton: "タスク草案を確認"
    },
    states: {
      eyebrow: "Linnea の状態",
      title: "表情で寄り添うデスクトップ相棒",
      body: "会話、計画、完了、リマインダーに合わせて Linnea の表情が変わります。",
      items: [
        ["Idle", "静かに作業を見守ります。"],
        ["Talking", "メモや質問をすぐ受け取れます。"],
        ["Thinking", "草案を使いやすい形に整理中です。"],
        ["Happy", "タスクが進んだ時の小さな反応です。"],
        ["Reminder", "必要な時に見える形で知らせます。"],
        ["Urgent", "急ぎのタスクをより強く知らせます。"],
        ["Rest", "落ち着いた時間に控えめに寄り添います。"],
        ["Sleepy", "1日がゆっくりになる時は邪魔を減らします。"]
      ]
    },
    download: {
      eyebrow: "Windows ダウンロード",
      title: "Linnea Windows 版をダウンロード",
      body: "最新の Windows ビルドをインストールして、タスク記録、リマインダー、計画、毎日の振り返りをデスクトップで使えます。",
      cta: "Windows 版をダウンロード",
      notes: "リリースノート",
      latest: "最新版",
      platform: "プラットフォーム",
      installer: "インストーラー",
      size: "サイズ",
      published: "公開日",
      getStarted: "はじめ方",
      installTitle: "3 ステップでインストール",
      installSteps: [
        ["インストーラーをダウンロード", "GitHub Releases から最新の Windows インストーラーを取得します。"],
        [".exe ファイルを実行", "セットアップウィザードに従ってインストールします。"],
        ["Windows から Linnea を起動", "Linnea を開き、リマインダー、テーマ、AI 設定を調整します。"]
      ],
      history: "バージョン履歴",
      previous: "過去の Windows ビルド",
      historyBody: "動作確認や以前のバージョンへ戻す必要がある場合は、過去のインストーラーを選べます。",
      all: "すべてのリリース",
      download: "ダウンロード",
      releaseNotes: "詳細"
    }
  },
  "ko-KR": {
    nav: { features: "기능", themes: "테마", gallery: "갤러리", download: "다운로드" },
    hero: {
      eyebrow: "Windows 데스크톱 펫 도우미",
      title: "작업, 알림, 하루 계획을 함께 정리하는 작은 데스크톱 동반자.",
      body: "Linnea는 데스크톱에 머물며 자연어로 작업을 기록하고, 필요한 순간에 알려 주고, 하루의 흐름을 더 차분하게 만들어 줍니다.",
      download: "Windows용 다운로드",
      explore: "기능 보기",
      latest: `최신 버전: ${latestRelease.version}, Windows x64 지원.`,
      taskCard: "오늘의 작업 3개가 준비됨",
      reminderCard: "15:00 알림 설정됨"
    },
    features: {
      eyebrow: "주요 기능",
      title: "짧은 생각을 신뢰할 수 있는 계획으로",
      body: "Linnea는 작업 기록을 가볍게 유지하면서도 목록에 들어가기 전 확인 과정을 제공합니다.",
      items: [
        ["생각나는 대로 말하기", "자연어로 짧게 적으면 Linnea가 확인하기 쉬운 작업 초안으로 정리합니다."],
        ["확인한 뒤 작업으로 저장", "초안은 승인하기 전까지 수정할 수 있어 목록을 깔끔하게 유지할 수 있습니다."],
        ["마감일뿐 아니라 실행 시간까지 계획", "일/주/월 보기에서 실제로 작업할 시간을 정하고 마감과 실행 시간을 나눠 관리합니다."],
        ["하루 끝에 흐름 확인", "진행된 일, 위험한 일, 내일 집중할 일을 빠르게 돌아봅니다."],
        ["선택한 텍스트 바로 활용", "작업 중인 창을 떠나지 않고 요약, 번역, 작업 생성을 할 수 있습니다."],
        ["파일에서 Codex 세션 시작", "파일을 Linnea에 놓고 격리된 작업 공간에서 Codex 세션을 시작합니다."]
      ]
    },
    workflow: {
      eyebrow: "워크플로",
      title: "하루를 더 자연스럽게 앞으로",
      steps: [
        ["기록", "생각이 사라지기 전에 Linnea에 맡깁니다."],
        ["검토", "작업 초안을 편집하고 필요한 것만 확인합니다."],
        ["일정화", "그 일을 실제로 언제 할지 정합니다."],
        ["회고", "진행 상황, 위험, 다음 집중점을 확인합니다."]
      ]
    },
    themes: {
      eyebrow: "테마 미리보기",
      title: "Linnea를 내 데스크톱에 어울리게",
      body: "부드러운 강조 색상을 고르고 Linnea 작업 공간이 어떻게 바뀌는지 미리 볼 수 있습니다.",
      aria: "테마 색상 선택",
      switchAria: "테마 색상 변경",
      previewTitle: "오늘의 계획",
      previewBody: "메모를 검토하고 주간 업데이트를 준비하며 진짜 휴식 시간도 남깁니다.",
      previewButton: "작업 초안 확인"
    },
    states: {
      eyebrow: "Linnea 상태",
      title: "표정이 있는 데스크톱 동반자",
      body: "대화, 계획, 완료, 알림 상황에 맞춰 Linnea의 표정이 달라집니다.",
      items: [
        ["Idle", "조용히 작업을 함께합니다."],
        ["Talking", "짧은 메모나 질문을 바로 받을 준비가 되어 있습니다."],
        ["Thinking", "초안을 쓸모 있는 구조로 정리합니다."],
        ["Happy", "작업이 진행될 때의 작은 반응입니다."],
        ["Reminder", "필요한 순간 눈에 띄게 알려 줍니다."],
        ["Urgent", "미룰 수 없는 작업을 더 강하게 표시합니다."],
        ["Rest", "차분한 시간에 낮은 존재감으로 함께합니다."],
        ["Sleepy", "하루가 느려질 때 방해를 줄입니다."]
      ]
    },
    download: {
      eyebrow: "Windows 다운로드",
      title: "Windows용 Linnea 다운로드",
      body: "최신 Windows 빌드를 설치하고 작업 기록, 알림, 계획, 하루 회고를 데스크톱에서 사용하세요.",
      cta: "Windows용 다운로드",
      notes: "릴리스 노트",
      latest: "최신 버전",
      platform: "플랫폼",
      installer: "설치 파일",
      size: "크기",
      published: "게시일",
      getStarted: "시작하기",
      installTitle: "세 단계로 설치",
      installSteps: [
        ["설치 파일 다운로드", "GitHub Releases에서 최신 Windows 설치 파일을 받습니다."],
        [".exe 파일 실행", "설치 마법사를 따라 설치 위치를 선택하고 진행합니다."],
        ["Windows에서 Linnea 실행", "Linnea를 열고 알림, 테마, AI 설정을 구성합니다."]
      ],
      history: "버전 기록",
      previous: "이전 Windows 빌드",
      historyBody: "동작을 비교하거나 이전 버전으로 돌아가야 할 때 과거 설치 파일을 선택할 수 있습니다.",
      all: "전체 릴리스",
      download: "다운로드",
      releaseNotes: "노트"
    }
  }
};

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

function getInitialLocale(): Locale {
  const params = new URLSearchParams(window.location.search);
  const value = params.get("lang");
  return value === "en-US" || value === "ja-JP" || value === "ko-KR" || value === "zh-CN" ? value : "zh-CN";
}

export function App() {
  const [accent, setAccent] = React.useState(themePresets[0]);
  const [locale, setLocale] = React.useState<Locale>(getInitialLocale);
  const [route, setRoute] = React.useState(() => window.location.hash.replace("#", "") || "/");
  const text = copy[locale];

  React.useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  React.useEffect(() => {
    const updateRoute = () => setRoute(window.location.hash.replace("#", "") || "/");
    window.addEventListener("hashchange", updateRoute);
    return () => window.removeEventListener("hashchange", updateRoute);
  }, []);

  React.useEffect(() => {
    if (route === "/download") {
      window.scrollTo({ top: 0 });
      return;
    }
    window.requestAnimationFrame(() => {
      const target = document.getElementById(route === "/" ? "/" : route);
      if (target) target.scrollIntoView({ block: "start" });
    });
  }, [route]);

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

  const isDownloadPage = route === "/download";

  return (
    <main className="site" style={themeStyle}>
      <header className="topbar">
        <a className="brand" href="#/" aria-label="Linnea home">
          <img src={linneaIcon} alt="" />
          <span>Linnea</span>
        </a>
        <div className="topbar-actions">
          <nav>
            <a href="#/features">{text.nav.features}</a>
            <a href="#/themes">{text.nav.themes}</a>
            <a href="#/states">{text.nav.gallery}</a>
            <a className={isDownloadPage ? "active" : ""} href="#/download">{text.nav.download}</a>
          </nav>
          <LanguageSwitcher locale={locale} onChange={setLocale} />
        </div>
      </header>
      {isDownloadPage ? <DownloadPage text={text} /> : <HomePage text={text} accent={accent} setAccent={setAccent} />}
    </main>
  );
}

function LanguageSwitcher({ locale, onChange }: { locale: Locale; onChange(locale: Locale): void }) {
  return (
    <div className="language-switcher" aria-label="Language selector">
      <Globe2 size={15} />
      {localeOptions.map((option) => (
        <button
          key={option.locale}
          type="button"
          className={locale === option.locale ? "active" : ""}
          onClick={() => onChange(option.locale)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

function HomePage({
  text,
  accent,
  setAccent
}: {
  text: SiteCopy;
  accent: string;
  setAccent(color: string): void;
}) {
  return (
    <>
      <section id="/" className="hero section">
        <div className="hero-copy">
          <span className="eyebrow"><Sparkles size={16} /> {text.hero.eyebrow}</span>
          <h1>{text.hero.title}</h1>
          <p>{text.hero.body}</p>
          <div className="hero-actions">
            <a className="primary-action" href="#/download">
              <Download size={18} /> {text.hero.download}
            </a>
            <a className="secondary-action" href="#/features">
              {text.hero.explore} <ChevronRight size={18} />
            </a>
          </div>
          <div className="release-note">{text.hero.latest}</div>
        </div>

        <div className="hero-visual" aria-label="Linnea desktop pet preview">
          <div className="hero-card task-card">
            <Check size={16} />
            <span>{text.hero.taskCard}</span>
          </div>
          <img className="hero-pet" src={linneaHero} alt="Q版 Linnea desktop pet" />
          <div className="hero-card reminder-card">
            <Bell size={16} />
            <span>{text.hero.reminderCard}</span>
          </div>
        </div>
      </section>

      <section id="/features" className="section">
        <div className="section-heading">
          <span>{text.features.eyebrow}</span>
          <h2>{text.features.title}</h2>
          <p>{text.features.body}</p>
        </div>
        <div className="feature-grid">
          {text.features.items.map(([title, body], index) => {
            const Icon = featureIcons[index];
            return (
              <article className="feature-card" key={title}>
                <span className="feature-icon"><Icon size={20} /></span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="workflow section">
        <div className="section-heading">
          <span>{text.workflow.eyebrow}</span>
          <h2>{text.workflow.title}</h2>
        </div>
        <div className="workflow-steps">
          {text.workflow.steps.map(([title, body], index) => (
            <article key={title}>
              <span>{index + 1}</span>
              <strong>{title}</strong>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="/themes" className="theme-section section">
        <div className="theme-copy">
          <span className="eyebrow">{text.themes.eyebrow}</span>
          <h2>{text.themes.title}</h2>
          <p>{text.themes.body}</p>
          <div className="theme-picker" aria-label={text.themes.aria}>
            {themePresets.map((color) => (
              <button
                key={color}
                type="button"
                className={accent === color ? "active" : ""}
                style={{ backgroundColor: color }}
                onClick={() => setAccent(color)}
                aria-label={`${text.themes.switchAria} ${color}`}
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
              <strong>{text.themes.previewTitle}</strong>
              <p>{text.themes.previewBody}</p>
              <button type="button">{text.themes.previewButton}</button>
            </div>
          </div>
        </div>
      </section>

      <section id="/states" className="section">
        <div className="section-heading">
          <span>{text.states.eyebrow}</span>
          <h2>{text.states.title}</h2>
          <p>{text.states.body}</p>
        </div>
        <div className="state-grid">
          {text.states.items.map(([name, body], index) => (
            <article className="state-card" key={name}>
              <img src={stateImages[index]} alt={`Linnea ${name} state`} />
              <strong>{name}</strong>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function DownloadPage({ text }: { text: SiteCopy }) {
  return (
    <>
      <section className="download-hero section">
        <div className="download-copy">
          <span className="eyebrow"><Download size={16} /> {text.download.eyebrow}</span>
          <h1>{text.download.title}</h1>
          <p>{text.download.body}</p>
          <div className="hero-actions">
            <a className="primary-action" href={latestRelease.downloadUrl}>
              <Download size={18} /> {text.download.cta}
            </a>
            <a className="secondary-action" href={latestRelease.notesUrl} target="_blank" rel="noreferrer">
              {text.download.notes} <ExternalLink size={17} />
            </a>
          </div>
        </div>
        <div className="latest-card">
          <img src={happyImage} alt="Happy Linnea" />
          <span>{text.download.latest}</span>
          <strong>{latestRelease.version}</strong>
          <dl>
            <div><dt>{text.download.platform}</dt><dd>Windows x64</dd></div>
            <div><dt>{text.download.installer}</dt><dd>{latestRelease.file}</dd></div>
            <div><dt>{text.download.size}</dt><dd>{latestRelease.size}</dd></div>
            <div><dt>{text.download.published}</dt><dd>{latestRelease.date}</dd></div>
          </dl>
        </div>
      </section>

      <section className="install-section section">
        <div className="section-heading">
          <span>{text.download.getStarted}</span>
          <h2>{text.download.installTitle}</h2>
        </div>
        <div className="install-steps">
          {text.download.installSteps.map(([title, body], index) => (
            <article key={title}>
              <span>{index + 1}</span>
              <strong>{title}</strong>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="release-section section">
        <div className="section-heading release-heading">
          <div>
            <span>{text.download.history}</span>
            <h2>{text.download.previous}</h2>
            <p>{text.download.historyBody}</p>
          </div>
          <a className="secondary-action" href={allReleasesUrl} target="_blank" rel="noreferrer">
            {text.download.all} <ExternalLink size={17} />
          </a>
        </div>
        <div className="release-list">
          {releaseHistory.map((release) => (
            <article className="release-row" key={release.version}>
              <div>
                <strong>{release.version}</strong>
                <span>{release.date} · {release.size} · Windows x64</span>
              </div>
              <span className="release-file">{release.file}</span>
              <div className="release-actions">
                <a href={release.downloadUrl}>{text.download.download}</a>
                <a href={release.notesUrl} target="_blank" rel="noreferrer">{text.download.releaseNotes}</a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
