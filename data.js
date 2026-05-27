// 大会の日付（年, 月-1, 日, 時, 分, 秒）
const TARGET_DATE = new Date(2026, 5, 11, 9, 0, 0);

// ============================================================
// スケジュールデータ
// status: "upcoming"=予定 / "live"=進行中 / "done"=終了
// result: 結果（まだなら null のまま）
// ============================================================
const scheduleData = [
  // ===== 1日目 (6/11) =====
  { id: 1,  day: 1, time: "09:00", event: "開会式",                    place: "陸上競技場(放送)",  category: "式典",         status: "upcoming", result: null },

  // サッカー
  { id: 10, day: 1, time: "09:35", event: "サッカー ①・④",            place: "陸上競技場",        category: "サッカー",     status: "upcoming", result: null },
  { id: 11, day: 1, time: "10:10", event: "サッカー ②・⑤",            place: "陸上競技場",        category: "サッカー",     status: "upcoming", result: null },
  { id: 12, day: 1, time: "10:45", event: "サッカー ③・⑥",            place: "陸上競技場",        category: "サッカー",     status: "upcoming", result: null },
  { id: 13, day: 1, time: "11:20", event: "サッカー ⑦・⑪",            place: "陸上競技場",        category: "サッカー",     status: "upcoming", result: null },
  { id: 14, day: 1, time: "13:05", event: "サッカー ⑧・⑫",            place: "陸上競技場",        category: "サッカー",     status: "upcoming", result: null },
  { id: 15, day: 1, time: "13:40", event: "サッカー ⑨・⑬",            place: "陸上競技場",        category: "サッカー",     status: "upcoming", result: null },
  { id: 16, day: 1, time: "14:15", event: "サッカー ⑩・⑭",            place: "陸上競技場",        category: "サッカー",     status: "upcoming", result: null },
  { id: 17, day: 1, time: "14:50", event: "サッカー ⑮・⑰",            place: "陸上競技場",        category: "サッカー",     status: "upcoming", result: null },

  // ソフトボール
  { id: 20, day: 1, time: "09:30", event: "ソフトボール ①・④",        place: "野球場",            category: "ソフトボール", status: "upcoming", result: null },
  { id: 21, day: 1, time: "10:25", event: "ソフトボール ②・⑤",        place: "野球場",            category: "ソフトボール", status: "upcoming", result: null },
  { id: 22, day: 1, time: "11:20", event: "ソフトボール ③・⑥",        place: "野球場",            category: "ソフトボール", status: "upcoming", result: null },
  { id: 23, day: 1, time: "12:55", event: "ソフトボール ⑦・⑪",        place: "野球場",            category: "ソフトボール", status: "upcoming", result: null },
  { id: 24, day: 1, time: "13:50", event: "ソフトボール ⑧・⑫",        place: "野球場",            category: "ソフトボール", status: "upcoming", result: null },
  { id: 25, day: 1, time: "14:45", event: "ソフトボール ⑨・⑬",        place: "野球場",            category: "ソフトボール", status: "upcoming", result: null },

  // バスケットボール
  { id: 30, day: 1, time: "09:30", event: "バスケ ①・④",              place: "第一体育館",        category: "バスケ",       status: "upcoming", result: null },
  { id: 31, day: 1, time: "10:00", event: "バスケ ②・⑤",              place: "第一体育館",        category: "バスケ",       status: "upcoming", result: null },
  { id: 32, day: 1, time: "10:30", event: "バスケ ③・⑥",              place: "第一体育館",        category: "バスケ",       status: "upcoming", result: null },
  { id: 33, day: 1, time: "11:00", event: "バスケ ⑦・⑪",              place: "第一体育館",        category: "バスケ",       status: "upcoming", result: null },
  { id: 34, day: 1, time: "11:30", event: "バスケ ⑧・⑫",              place: "第一体育館",        category: "バスケ",       status: "upcoming", result: null },
  { id: 35, day: 1, time: "12:00", event: "バスケ ⑨・⑬",              place: "第一体育館",        category: "バスケ",       status: "upcoming", result: null },
  { id: 36, day: 1, time: "12:30", event: "バスケ ⑩・⑭",              place: "第一体育館",        category: "バスケ",       status: "upcoming", result: null },
  { id: 37, day: 1, time: "13:00", event: "バスケ ⑮・⑯",              place: "第一体育館",        category: "バスケ",       status: "upcoming", result: null },
  { id: 38, day: 1, time: "13:30", event: "女子バスケ ①・②",          place: "第一体育館",        category: "バスケ",       status: "upcoming", result: null },
  { id: 39, day: 1, time: "14:00", event: "バスケ ⑰・⑱",              place: "第一体育館",        category: "バスケ",       status: "upcoming", result: null },
  { id: 40, day: 1, time: "14:30", event: "バスケ ⑲",                  place: "第一体育館",        category: "バスケ",       status: "upcoming", result: null },
  { id: 41, day: 1, time: "15:00", event: "バスケ ⑳",                  place: "第一体育館",        category: "バスケ",       status: "upcoming", result: null },
  { id: 42, day: 1, time: "15:30", event: "バスケ決勝",                place: "第一体育館",        category: "バスケ",       status: "upcoming", result: null },

  // バレーボール
  { id: 50, day: 1, time: "09:35", event: "バレー ①・④",              place: "第二体育館",        category: "バレー",       status: "upcoming", result: null },
  { id: 51, day: 1, time: "10:15", event: "バレー ②・⑤",              place: "第二体育館",        category: "バレー",       status: "upcoming", result: null },
  { id: 52, day: 1, time: "10:55", event: "バレー ③・⑥",              place: "第二体育館",        category: "バレー",       status: "upcoming", result: null },
  { id: 53, day: 1, time: "11:35", event: "バレー ⑦・⑪",              place: "第二体育館",        category: "バレー",       status: "upcoming", result: null },
  { id: 54, day: 1, time: "13:00", event: "バレー ⑧・⑫",              place: "第二体育館",        category: "バレー",       status: "upcoming", result: null },
  { id: 55, day: 1, time: "13:40", event: "バレー ⑨・⑬",              place: "第二体育館",        category: "バレー",       status: "upcoming", result: null },
  { id: 56, day: 1, time: "14:20", event: "バレー ⑩・⑭",              place: "第二体育館",        category: "バレー",       status: "upcoming", result: null },
  { id: 57, day: 1, time: "15:00", event: "バレー ⑮・⑰",              place: "第二体育館",        category: "バレー",       status: "upcoming", result: null },

  // ソフトテニス
  { id: 60, day: 1, time: "10:00", event: "ソフトテニス ①②③",        place: "テニスコート",      category: "テニス",       status: "upcoming", result: null },
  { id: 61, day: 1, time: "11:00", event: "ソフトテニス ④⑤⑥",        place: "テニスコート",      category: "テニス",       status: "upcoming", result: null },
  { id: 62, day: 1, time: "12:45", event: "ソフトテニス ⑦⑧⑨",        place: "テニスコート",      category: "テニス",       status: "upcoming", result: null },
  { id: 63, day: 1, time: "13:45", event: "ソフトテニス ⑩⑪⑫",        place: "テニスコート",      category: "テニス",       status: "upcoming", result: null },
  { id: 64, day: 1, time: "14:45", event: "ソフトテニス ⑬⑭⑮",        place: "テニスコート",      category: "テニス",       status: "upcoming", result: null },

  // Eスポーツ
  { id: 70, day: 1, time: "09:30", event: "Eスポーツ ①・②",           place: "大講義室",          category: "Eスポーツ",    status: "upcoming", result: null },
  { id: 71, day: 1, time: "10:15", event: "Eスポーツ ③・④",           place: "大講義室",          category: "Eスポーツ",    status: "upcoming", result: null },
  { id: 72, day: 1, time: "11:00", event: "Eスポーツ ⑤・⑥",           place: "大講義室",          category: "Eスポーツ",    status: "upcoming", result: null },
  { id: 73, day: 1, time: "11:45", event: "Eスポーツ ⑦・⑧",           place: "大講義室",          category: "Eスポーツ",    status: "upcoming", result: null },
  { id: 74, day: 1, time: "13:05", event: "Eスポーツ ⑨・⑩",           place: "大講義室",          category: "Eスポーツ",    status: "upcoming", result: null },
  { id: 75, day: 1, time: "13:50", event: "Eスポーツ ⑪・⑫",           place: "大講義室",          category: "Eスポーツ",    status: "upcoming", result: null },
  { id: 76, day: 1, time: "14:35", event: "Eスポーツ ⑬・⑭",           place: "大講義室",          category: "Eスポーツ",    status: "upcoming", result: null },

  // ===== 2日目 (6/12) =====
  // サッカー
  { id: 100, day: 2, time: "09:35", event: "サッカー ⑯・⑱",           place: "陸上競技場",        category: "サッカー",     status: "upcoming", result: null },
  { id: 101, day: 2, time: "10:10", event: "サッカー ⑲・⑳",           place: "陸上競技場",        category: "サッカー",     status: "upcoming", result: null },
  { id: 102, day: 2, time: "11:00", event: "サッカー ㉑（決勝）",      place: "陸上競技場",        category: "サッカー",     status: "upcoming", result: null },

  // ソフトボール
  { id: 110, day: 2, time: "09:30", event: "ソフトボール ⑩・⑭",       place: "野球場",            category: "ソフトボール", status: "upcoming", result: null },
  { id: 111, day: 2, time: "10:30", event: "ソフトボール ⑮・⑰",       place: "野球場",            category: "ソフトボール", status: "upcoming", result: null },
  { id: 112, day: 2, time: "11:30", event: "ソフトボール ⑯・⑱",       place: "野球場",            category: "ソフトボール", status: "upcoming", result: null },
  { id: 113, day: 2, time: "13:05", event: "ソフトボール ⑲・⑳",       place: "野球場",            category: "ソフトボール", status: "upcoming", result: null },
  { id: 114, day: 2, time: "14:05", event: "ソフトボール決勝 ㉑",      place: "野球場",            category: "ソフトボール", status: "upcoming", result: null },

  // バスケ
  { id: 120, day: 2, time: "09:30", event: "バドミントン ①②③",        place: "第一体育館",        category: "バドミントン", status: "upcoming", result: null },
  { id: 121, day: 2, time: "10:05", event: "バドミントン ④⑤⑥",        place: "第一体育館",        category: "バドミントン", status: "upcoming", result: null },
  { id: 122, day: 2, time: "10:40", event: "バドミントン ⑦⑧⑨",        place: "第一体育館",        category: "バドミントン", status: "upcoming", result: null },
  { id: 123, day: 2, time: "11:15", event: "バドミントン ⑩⑪⑫",        place: "第一体育館",        category: "バドミントン", status: "upcoming", result: null },
  { id: 124, day: 2, time: "11:50", event: "バドミントン ⑬⑭⑮",        place: "第一体育館",        category: "バドミントン", status: "upcoming", result: null },
  { id: 125, day: 2, time: "12:50", event: "バドミントン ⑯⑰⑱",        place: "第一体育館",        category: "バドミントン", status: "upcoming", result: null },
  { id: 126, day: 2, time: "14:00", event: "バドミントン ⑲・⑳",        place: "第一体育館",        category: "バドミントン", status: "upcoming", result: null },
  { id: 127, day: 2, time: "14:45", event: "バドミントン決勝",         place: "第一体育館",        category: "バドミントン", status: "upcoming", result: null },

  // バレー
  { id: 130, day: 2, time: "09:35", event: "バレー ⑯・⑱",             place: "第二体育館",        category: "バレー",       status: "upcoming", result: null },
  { id: 131, day: 2, time: "10:15", event: "女子バレー ①・②",         place: "第二体育館",        category: "バレー",       status: "upcoming", result: null },
  { id: 132, day: 2, time: "10:50", event: "バレー ⑲",                 place: "第二体育館",        category: "バレー",       status: "upcoming", result: null },
  { id: 133, day: 2, time: "11:30", event: "バレー ⑳",                 place: "第二体育館",        category: "バレー",       status: "upcoming", result: null },
  { id: 134, day: 2, time: "13:05", event: "バレー決勝 ㉑",            place: "第二体育館",        category: "バレー",       status: "upcoming", result: null },

  // ソフトテニス
  { id: 140, day: 2, time: "09:30", event: "ソフトテニス ⑯⑰⑱",       place: "テニスコート",      category: "テニス",       status: "upcoming", result: null },
  { id: 141, day: 2, time: "10:25", event: "ソフトテニス ⑲・⑳",       place: "テニスコート",      category: "テニス",       status: "upcoming", result: null },
  { id: 142, day: 2, time: "11:20", event: "ソフトテニス決勝",        place: "テニスコート",      category: "テニス",       status: "upcoming", result: null },

  // Eスポーツ
  { id: 150, day: 2, time: "09:50", event: "Eスポーツ ⑮・⑯",          place: "大講義室",          category: "Eスポーツ",    status: "upcoming", result: null },
  { id: 151, day: 2, time: "10:35", event: "Eスポーツ ⑰・⑱",          place: "大講義室",          category: "Eスポーツ",    status: "upcoming", result: null },
  { id: 152, day: 2, time: "11:20", event: "Eスポーツ ⑲・⑳",          place: "大講義室",          category: "Eスポーツ",    status: "upcoming", result: null },
  { id: 153, day: 2, time: "13:00", event: "Eスポーツ ㉑",             place: "大講義室",          category: "Eスポーツ",    status: "upcoming", result: null },
  { id: 154, day: 2, time: "13:00", event: "Eスポーツ決勝",            place: "大講義室",          category: "Eスポーツ",    status: "upcoming", result: null },

  // リレー
  { id: 160, day: 2, time: "14:00", event: "リレー Aブロック第一試合", place: "陸上競技場",        category: "リレー",       status: "upcoming", result: null },
  { id: 161, day: 2, time: "14:00", event: "リレー Bブロック第一試合", place: "陸上競技場",        category: "リレー",       status: "upcoming", result: null },
  { id: 162, day: 2, time: "14:25", event: "リレー Aブロック第二試合", place: "陸上競技場",        category: "リレー",       status: "upcoming", result: null },
  { id: 163, day: 2, time: "14:25", event: "リレー Bブロック第二試合", place: "陸上競技場",        category: "リレー",       status: "upcoming", result: null },
  { id: 164, day: 2, time: "14:50", event: "リレー Aブロック第三試合", place: "陸上競技場",        category: "リレー",       status: "upcoming", result: null },
  { id: 165, day: 2, time: "14:50", event: "リレー Bブロック第三試合", place: "陸上競技場",        category: "リレー",       status: "upcoming", result: null },
  { id: 166, day: 2, time: "15:20", event: "リレー A・Bブロック準決勝", place: "陸上競技場",       category: "リレー",       status: "upcoming", result: null },
  { id: 167, day: 2, time: "15:50", event: "リレー 全体決勝",          place: "陸上競技場",        category: "リレー",       status: "upcoming", result: null },

  // 女子バドミントン
  { id: 170, day: 2, time: "13:25", event: "女子バドミントン ①・②",   place: "第一体育館",        category: "バドミントン", status: "upcoming", result: null },
  { id: 171, day: 2, time: "14:00", event: "女子バドミントン ③",       place: "第一体育館",        category: "バドミントン", status: "upcoming", result: null },
  { id: 172, day: 2, time: "14:45", event: "女子バドミントン決勝",     place: "第一体育館",        category: "バドミントン", status: "upcoming", result: null },

  // 閉会式
  { id: 200, day: 2, time: "16:10", event: "閉会式・表彰",             place: "陸上競技場",        category: "式典",         status: "upcoming", result: null },
];

// ============================================================
// 競技データ
// ============================================================
const eventData = [
  {
    icon: "⚽", name: "サッカー", meta: "7人制 クラス対抗トーナメント",
    place: "陸上競技場(グラウンド)",
    rule: "前後半10分ハーフ。7人制。同点はサドンデスPK。オフサイドなし。スパイク不可。"
  },
  {
    icon: "🏀", name: "バスケットボール", meta: "5人制 クラス対抗トーナメント",
    place: "第一体育館",
    rule: "前後半7分（決勝10分）。5人制。同点は3人フリースローで決定。ファールアウト・チームファウル適用なし。"
  },
  {
    icon: "🥎", name: "ソフトボール", meta: "9人制 クラス対抗トーナメント",
    place: "野球場",
    rule: "40分・3回制。9人制。同点は代表者3名ジャンケン（先に2勝）。盗塁なし。"
  },
  {
    icon: "🏐", name: "バレーボール", meta: "6人制 クラス対抗トーナメント",
    place: "第二体育館",
    rule: "25分（決勝35分）。1セット15点制3セットマッチ（決勝25点制）。ネット高2m30cm（女子2m15cm）。"
  },
  {
    icon: "🏸", name: "バドミントン", meta: "5人制 クラス対抗トーナメント",
    place: "第一体育館",
    rule: "40分。ダブルス2試合・シングルス1試合。1ゲーム15点制3ゲームマッチ。先に2試合勝利したチームが勝ち。"
  },
  {
    icon: "🎾", name: "ソフトテニス", meta: "ダブルス3組 クラス対抗トーナメント",
    place: "テニスコート",
    rule: "40分。ダブルス3試合。先に2試合勝利したチームが勝ち。"
  },
  {
    icon: "🎮", name: "Eスポーツ", meta: "大乱闘スマッシュブラザーズ SPECIAL",
    place: "大講義室",
    rule: "3ストック制 1vs1×3回（5分・終点・アイテムなし）。先に2試合勝利。コントローラー持ち込み可。"
  },
  {
    icon: "🏃", name: "リレー", meta: "8×100m クラス対抗",
    place: "陸上競技場",
    rule: "8人×100m。A・Bブロックに分け、各ブロック予選→準決勝→全体決勝。フライング2回で失格。スパイク不可。"
  },
];

// ============================================================
// トーナメントデータ（バスケ試作版）
// score: null=未定, 数字=得点
// ============================================================
const tournamentData = {
  'バスケ': {
    rounds: ['1回戦A', '1回戦B', '1回戦C', '準々決勝', '準決勝', '決勝'],
    matches: [
      // 0: 1回戦A（試合①〜③ 同時進行）
      [
        { teams: [{name:'1-4', score:null}, {name:'1-3', score:null}] },
        { teams: [{name:'2C', score:null}, {name:'2E', score:null}] },
        { teams: [{name:'4E', score:null}, {name:'5M', score:null}] },
      ],
      // 1: 1回戦B（試合④〜⑥ 同時進行）
      [
        { teams: [{name:'2M', score:null}, {name:'TBD', score:null}] },  // ①勝者 vs 2M
        { teams: [{name:'1-2', score:null}, {name:'2B', score:null}] },
        { teams: [{name:'5E', score:null}, {name:'TBD', score:null}] },  // ③勝者 vs 5E
      ],
      // 2: 1回戦C（試合⑦〜⑩ 同時進行）
      [
        { teams: [{name:'TBD', score:null}, {name:'TBD', score:null}] }, // ④⑤勝者
        { teams: [{name:'1-1', score:null}, {name:'TBD', score:null}] }, // ⑥勝者 vs 1-1
        { teams: [{name:'3M', score:null}, {name:'4M', score:null}] },
        { teams: [{name:'4C', score:null}, {name:'3E', score:null}] },
      ],
      // 3: 準々決勝（試合⑪〜⑭ 同時進行）
      [
        { teams: [{name:'TBD', score:null}, {name:'TBD', score:null}] },
        { teams: [{name:'TBD', score:null}, {name:'TBD', score:null}] },
        { teams: [{name:'5B', score:null}, {name:'TBD', score:null}] },
        { teams: [{name:'5C', score:null}, {name:'4B', score:null}] },
      ],
      // 4: 準決勝
      [
        { teams: [{name:'TBD', score:null}, {name:'TBD', score:null}] }, // ⑮ A側
        { teams: [{name:'TBD', score:null}, {name:'TBD', score:null}] }, // ⑯ B側
      ],
      // 5: 決勝
      [
        { teams: [{name:'TBD', score:null}, {name:'TBD', score:null}] },
      ],
    ]
  },
  '女子バスケ': {
    rounds: ['1回戦', '準決勝', '決勝'],
    matches: [
      [
        { teams: [{name:'2年', score:null}, {name:'1年', score:null}] },
      ],
      [
        { teams: [{name:'3年', score:null}, {name:'TBD', score:null}] }, // ①勝者 vs 3年
      ],
      [
        { teams: [{name:'5年', score:null}, {name:'TBD', score:null}] }, // ②勝者 vs 5年 → 4年
        { teams: [{name:'TBD', score:null}, {name:'4年', score:null}] },
      ],
    ]
  }
};
