// ============================================================
// ★ data.js — 当日はここだけ編集！
// ============================================================

// 大会の日付
const TARGET_DATE = new Date(2026, 5, 11, 9, 0, 0);

// ============================================================
// 試合データ（全競技・試合単位）
// status: "upcoming"=予定 / "live"=進行中 / "done"=終了
// score1/score2: null=未入力, 数字=得点
// ============================================================
const matchData = [

  // ===== サッカー 1日目 =====
  { id: 's01',  day:1, time:'09:35', sport:'サッカー',    team1:'2C',   team2:'1-4',  venue:'陸上競技場', round:'1回戦①',  status:'upcoming', score1:null, score2:null },
  { id: 's02',  day:1, time:'09:35', sport:'サッカー',    team1:'2B',   team2:'1-3',  venue:'陸上競技場', round:'1回戦②',  status:'upcoming', score1:null, score2:null },
  { id: 's03',  day:1, time:'09:35', sport:'サッカー',    team1:'1-2',  team2:'2E',   venue:'陸上競技場', round:'1回戦③',  status:'upcoming', score1:null, score2:null },
  { id: 's04',  day:1, time:'10:10', sport:'サッカー',    team1:'2M',   team2:'1-1',  venue:'陸上競技場', round:'1回戦④',  status:'upcoming', score1:null, score2:null },
  { id: 's05',  day:1, time:'10:10', sport:'サッカー',    team1:'3E',   team2:'3B',   venue:'陸上競技場', round:'1回戦⑤',  status:'upcoming', score1:null, score2:null },
  { id: 's06',  day:1, time:'10:10', sport:'サッカー',    team1:'4M',   team2:'-',  venue:'陸上競技場', round:'1回戦⑥',  status:'upcoming', score1:null, score2:null },
  { id: 's07',  day:1, time:'10:45', sport:'サッカー',    team1:'-',  team2:'-',  venue:'陸上競技場', round:'2回戦⑦',  status:'upcoming', score1:null, score2:null },
  { id: 's08',  day:1, time:'10:45', sport:'サッカー',    team1:'-',  team2:'-',  venue:'陸上競技場', round:'2回戦⑧',  status:'upcoming', score1:null, score2:null },
  { id: 's09',  day:1, time:'10:45', sport:'サッカー',    team1:'-',  team2:'-',  venue:'陸上競技場', round:'2回戦⑨',  status:'upcoming', score1:null, score2:null },
  { id: 's10',  day:1, time:'10:45', sport:'サッカー',    team1:'-',  team2:'-',  venue:'陸上競技場', round:'2回戦⑩',  status:'upcoming', score1:null, score2:null },
  { id: 's11',  day:1, time:'11:20', sport:'サッカー',    team1:'4E',   team2:'専攻科', venue:'陸上競技場', round:'1回戦⑪', status:'upcoming', score1:null, score2:null },
  { id: 's12',  day:1, time:'13:05', sport:'サッカー',    team1:'-',  team2:'-',  venue:'陸上競技場', round:'準々決勝⑫', status:'upcoming', score1:null, score2:null },
  { id: 's13',  day:1, time:'13:40', sport:'サッカー',    team1:'-',  team2:'-',  venue:'陸上競技場', round:'準々決勝⑬', status:'upcoming', score1:null, score2:null },
  { id: 's14',  day:1, time:'14:15', sport:'サッカー',    team1:'-',  team2:'-',  venue:'陸上競技場', round:'準々決勝⑭', status:'upcoming', score1:null, score2:null },
  { id: 's15',  day:1, time:'14:50', sport:'サッカー',    team1:'-',  team2:'-',  venue:'陸上競技場', round:'準決勝⑮',  status:'upcoming', score1:null, score2:null },
  { id: 's17',  day:1, time:'14:50', sport:'サッカー',    team1:'3C',   team2:'教職員', venue:'陸上競技場', round:'1回戦⑰', status:'upcoming', score1:null, score2:null },

  // ===== サッカー 2日目 =====
  { id: 's16',  day:2, time:'09:35', sport:'サッカー',    team1:'-',  team2:'-',  venue:'陸上競技場', round:'準決勝⑯',  status:'upcoming', score1:null, score2:null },
  { id: 's18',  day:2, time:'09:35', sport:'サッカー',    team1:'5E',   team2:'-',  venue:'陸上競技場', round:'2回戦⑱',   status:'upcoming', score1:null, score2:null },
  { id: 's19',  day:2, time:'10:10', sport:'サッカー',    team1:'-',  team2:'-',  venue:'陸上競技場', round:'準決勝⑲',  status:'upcoming', score1:null, score2:null },
  { id: 's20',  day:2, time:'10:10', sport:'サッカー',    team1:'-',  team2:'-',  venue:'陸上競技場', round:'準決勝⑳',  status:'upcoming', score1:null, score2:null },
  { id: 's21',  day:2, time:'11:00', sport:'サッカー',    team1:'-',  team2:'-',  venue:'陸上競技場', round:'決勝㉑',   status:'upcoming', score1:null, score2:null },

  // ===== バスケ 1日目 =====
  { id: 'b01',  day:1, time:'09:30', sport:'バスケ',      team1:'1-4',  team2:'1-3',  venue:'第一体育館 Aコート', round:'1回戦①', status:'upcoming', score1:null, score2:null },
  { id: 'b02',  day:1, time:'09:30', sport:'バスケ',      team1:'2C',   team2:'2E',   venue:'第一体育館 Bコート', round:'1回戦②', status:'upcoming', score1:null, score2:null },
  { id: 'b03',  day:1, time:'09:30', sport:'バスケ',      team1:'4E',   team2:'5M',   venue:'第一体育館 Cコート', round:'1回戦③', status:'upcoming', score1:null, score2:null },
  { id: 'b04',  day:1, time:'10:00', sport:'バスケ',      team1:'2M',   team2:'-',  venue:'第一体育館 Aコート', round:'1回戦④', status:'upcoming', score1:null, score2:null },
  { id: 'b05',  day:1, time:'10:00', sport:'バスケ',      team1:'1-2',  team2:'2B',   venue:'第一体育館 Bコート', round:'1回戦⑤', status:'upcoming', score1:null, score2:null },
  { id: 'b06',  day:1, time:'10:00', sport:'バスケ',      team1:'5E',   team2:'-',  venue:'第一体育館 Cコート', round:'1回戦⑥', status:'upcoming', score1:null, score2:null },
  { id: 'b07',  day:1, time:'10:30', sport:'バスケ',      team1:'-',  team2:'-',  venue:'第一体育館 Aコート', round:'2回戦⑦', status:'upcoming', score1:null, score2:null },
  { id: 'b08',  day:1, time:'10:30', sport:'バスケ',      team1:'1-1',  team2:'-',  venue:'第一体育館 Bコート', round:'2回戦⑧', status:'upcoming', score1:null, score2:null },
  { id: 'b09',  day:1, time:'10:30', sport:'バスケ',      team1:'-',  team2:'-',  venue:'第一体育館 Cコート', round:'2回戦⑨', status:'upcoming', score1:null, score2:null },
  { id: 'b10',  day:1, time:'10:30', sport:'バスケ',      team1:'3M',   team2:'4M',   venue:'第一体育館 Dコート', round:'1回戦⑩', status:'upcoming', score1:null, score2:null },
  { id: 'b11',  day:1, time:'11:00', sport:'バスケ',      team1:'-',  team2:'-',  venue:'第一体育館 Aコート', round:'準々決勝⑪', status:'upcoming', score1:null, score2:null },
  { id: 'b12',  day:1, time:'11:30', sport:'バスケ',      team1:'-',  team2:'-',  venue:'第一体育館 Aコート', round:'準々決勝⑫', status:'upcoming', score1:null, score2:null },
  { id: 'b13',  day:1, time:'12:00', sport:'バスケ',      team1:'5B',   team2:'-',  venue:'第一体育館 Aコート', round:'準々決勝⑬', status:'upcoming', score1:null, score2:null },
  { id: 'b14',  day:1, time:'12:30', sport:'バスケ',      team1:'5C',   team2:'4B',   venue:'第一体育館 Bコート', round:'1回戦⑭',  status:'upcoming', score1:null, score2:null },
  { id: 'b15',  day:1, time:'13:00', sport:'バスケ',      team1:'-',  team2:'-',  venue:'第一体育館 Aコート', round:'準決勝⑮', status:'upcoming', score1:null, score2:null },
  { id: 'b16',  day:1, time:'13:00', sport:'バスケ',      team1:'-',  team2:'-',  venue:'第一体育館 Bコート', round:'準決勝⑯', status:'upcoming', score1:null, score2:null },
  { id: 'bw1',  day:1, time:'13:30', sport:'女子バスケ',  team1:'2年',  team2:'1年',  venue:'第一体育館', round:'1回戦①',  status:'upcoming', score1:null, score2:null },
  { id: 'b17',  day:1, time:'14:00', sport:'バスケ',      team1:'-',  team2:'-',  venue:'第一体育館 Aコート', round:'準々決勝⑰', status:'upcoming', score1:null, score2:null },
  { id: 'b18',  day:1, time:'14:00', sport:'バスケ',      team1:'3C',   team2:'-',  venue:'第一体育館 Bコート', round:'準々決勝⑱', status:'upcoming', score1:null, score2:null },
  { id: 'bw2',  day:1, time:'14:30', sport:'女子バスケ',  team1:'3年',  team2:'-',  venue:'第一体育館', round:'準決勝②',  status:'upcoming', score1:null, score2:null },
  { id: 'b19',  day:1, time:'14:30', sport:'バスケ',      team1:'専攻科', team2:'-', venue:'第一体育館 Aコート', round:'準決勝⑲', status:'upcoming', score1:null, score2:null },
  { id: 'b20',  day:1, time:'15:00', sport:'バスケ',      team1:'-',  team2:'-',  venue:'第一体育館 Aコート', round:'準決勝⑳', status:'upcoming', score1:null, score2:null },
  { id: 'bw3',  day:1, time:'15:00', sport:'女子バスケ',  team1:'5年',  team2:'-',  venue:'第一体育館', round:'決勝③',    status:'upcoming', score1:null, score2:null },
  { id: 'b21',  day:1, time:'15:30', sport:'バスケ',      team1:'-',  team2:'-',  venue:'第一体育館 Aコート', round:'決勝㉑',  status:'upcoming', score1:null, score2:null },

  // ===== ソフトボール 1日目 =====
  { id: 'sb01', day:1, time:'09:30', sport:'ソフトボール', team1:'1-3', team2:'1-1',  venue:'野球場', round:'1回戦①', status:'upcoming', score1:null, score2:null },
  { id: 'sb02', day:1, time:'10:25', sport:'ソフトボール', team1:'2B',  team2:'1-4',  venue:'野球場', round:'1回戦②', status:'upcoming', score1:null, score2:null },
  { id: 'sb03', day:1, time:'11:20', sport:'ソフトボール', team1:'2M',  team2:'2E',   venue:'野球場', round:'1回戦③', status:'upcoming', score1:null, score2:null },
  { id: 'sb04', day:1, time:'12:55', sport:'ソフトボール', team1:'2C',  team2:'1-2',  venue:'野球場', round:'1回戦④', status:'upcoming', score1:null, score2:null },
  { id: 'sb05', day:1, time:'13:50', sport:'ソフトボール', team1:'3M',  team2:'5M',   venue:'野球場', round:'1回戦⑤', status:'upcoming', score1:null, score2:null },
  { id: 'sb06', day:1, time:'14:45', sport:'ソフトボール', team1:'5E',  team2:'-',  venue:'野球場', round:'1回戦⑥', status:'upcoming', score1:null, score2:null },

  // ===== ソフトボール 2日目 =====
  { id: 'sb07', day:2, time:'09:30', sport:'ソフトボール', team1:'-', team2:'-',  venue:'野球場', round:'2回戦⑦',   status:'upcoming', score1:null, score2:null },
  { id: 'sb08', day:2, time:'09:30', sport:'ソフトボール', team1:'-', team2:'-',  venue:'野球場', round:'2回戦⑧',   status:'upcoming', score1:null, score2:null },
  { id: 'sb09', day:2, time:'09:30', sport:'ソフトボール', team1:'-', team2:'-',  venue:'野球場', round:'2回戦⑨',   status:'upcoming', score1:null, score2:null },
  { id: 'sb10', day:2, time:'09:30', sport:'ソフトボール', team1:'-', team2:'-',  venue:'野球場', round:'2回戦⑩',   status:'upcoming', score1:null, score2:null },
  { id: 'sb11', day:2, time:'10:30', sport:'ソフトボール', team1:'専攻科', team2:'4B', venue:'野球場', round:'1回戦⑪',  status:'upcoming', score1:null, score2:null },
  { id: 'sb12', day:2, time:'10:30', sport:'ソフトボール', team1:'-', team2:'-',  venue:'野球場', round:'準々決勝⑫', status:'upcoming', score1:null, score2:null },
  { id: 'sb13', day:2, time:'11:30', sport:'ソフトボール', team1:'-', team2:'-',  venue:'野球場', round:'準々決勝⑬', status:'upcoming', score1:null, score2:null },
  { id: 'sb14', day:2, time:'11:30', sport:'ソフトボール', team1:'-', team2:'-',  venue:'野球場', round:'準々決勝⑭', status:'upcoming', score1:null, score2:null },
  { id: 'sb15', day:2, time:'13:05', sport:'ソフトボール', team1:'-', team2:'-',  venue:'野球場', round:'準決勝⑮',  status:'upcoming', score1:null, score2:null },
  { id: 'sb16', day:2, time:'13:05', sport:'ソフトボール', team1:'-', team2:'-',  venue:'野球場', round:'準決勝⑯',  status:'upcoming', score1:null, score2:null },
  { id: 'sb17', day:2, time:'13:05', sport:'ソフトボール', team1:'-', team2:'-',  venue:'野球場', round:'準決勝⑰',  status:'upcoming', score1:null, score2:null },
  { id: 'sb18', day:2, time:'13:05', sport:'ソフトボール', team1:'-', team2:'-',  venue:'野球場', round:'準決勝⑱',  status:'upcoming', score1:null, score2:null },
  { id: 'sb19', day:2, time:'13:05', sport:'ソフトボール', team1:'-', team2:'-',  venue:'野球場', round:'準決勝⑲',  status:'upcoming', score1:null, score2:null },
  { id: 'sb20', day:2, time:'13:05', sport:'ソフトボール', team1:'-', team2:'-',  venue:'野球場', round:'準決勝⑳',  status:'upcoming', score1:null, score2:null },
  { id: 'sb21', day:2, time:'14:05', sport:'ソフトボール', team1:'-', team2:'-',  venue:'野球場', round:'決勝㉑',   status:'upcoming', score1:null, score2:null },

  // ===== バレー 1日目 =====
  { id: 'v01',  day:1, time:'09:35', sport:'バレー',      team1:'1-2',  team2:'1-1',  venue:'第二体育館 Aコート', round:'1回戦①', status:'upcoming', score1:null, score2:null },
  { id: 'v02',  day:1, time:'09:35', sport:'バレー',      team1:'2B',   team2:'1-3',  venue:'第二体育館 Bコート', round:'1回戦②', status:'upcoming', score1:null, score2:null },
  { id: 'v03',  day:1, time:'09:35', sport:'バレー',      team1:'2M',   team2:'2C',   venue:'第二体育館 Cコート', round:'1回戦③', status:'upcoming', score1:null, score2:null },
  { id: 'v04',  day:1, time:'10:15', sport:'バレー',      team1:'1-4',  team2:'2E',   venue:'第二体育館 Aコート', round:'1回戦④', status:'upcoming', score1:null, score2:null },
  { id: 'v05',  day:1, time:'10:15', sport:'バレー',      team1:'4C',   team2:'4B',   venue:'第二体育館 Bコート', round:'1回戦⑤', status:'upcoming', score1:null, score2:null },
  { id: 'v06',  day:1, time:'10:15', sport:'バレー',      team1:'5E',   team2:'-',  venue:'第二体育館 Cコート', round:'1回戦⑥', status:'upcoming', score1:null, score2:null },
  { id: 'v07',  day:1, time:'10:55', sport:'バレー',      team1:'-',  team2:'-',  venue:'第二体育館 Aコート', round:'2回戦⑦', status:'upcoming', score1:null, score2:null },
  { id: 'v08',  day:1, time:'10:55', sport:'バレー',      team1:'-',  team2:'-',  venue:'第二体育館 Bコート', round:'2回戦⑧', status:'upcoming', score1:null, score2:null },
  { id: 'v09',  day:1, time:'10:55', sport:'バレー',      team1:'-',  team2:'-',  venue:'第二体育館 Cコート', round:'2回戦⑨', status:'upcoming', score1:null, score2:null },
  { id: 'v10',  day:1, time:'10:55', sport:'バレー',      team1:'-',  team2:'-',  venue:'第二体育館 Dコート', round:'2回戦⑩', status:'upcoming', score1:null, score2:null },
  { id: 'v11',  day:1, time:'11:35', sport:'バレー',      team1:'5M',   team2:'3E',   venue:'第二体育館 Aコート', round:'1回戦⑪', status:'upcoming', score1:null, score2:null },
  { id: 'v12',  day:1, time:'13:00', sport:'バレー',      team1:'-',  team2:'-',  venue:'第二体育館 Aコート', round:'準々決勝⑫', status:'upcoming', score1:null, score2:null },
  { id: 'v13',  day:1, time:'13:40', sport:'バレー',      team1:'-',  team2:'-',  venue:'第二体育館 Aコート', round:'準々決勝⑬', status:'upcoming', score1:null, score2:null },
  { id: 'v14',  day:1, time:'14:20', sport:'バレー',      team1:'-',  team2:'-',  venue:'第二体育館 Aコート', round:'準々決勝⑭', status:'upcoming', score1:null, score2:null },
  { id: 'v15',  day:1, time:'15:00', sport:'バレー',      team1:'-',  team2:'-',  venue:'第二体育館 Aコート', round:'準決勝⑮', status:'upcoming', score1:null, score2:null },
  { id: 'v17',  day:1, time:'15:00', sport:'バレー',      team1:'専攻科', team2:'3B',  venue:'第二体育館 Bコート', round:'1回戦⑰', status:'upcoming', score1:null, score2:null },

  // ===== バレー 2日目 =====
  { id: 'v16',  day:2, time:'09:35', sport:'バレー',      team1:'-',  team2:'-',  venue:'第二体育館 Aコート', round:'準決勝⑯', status:'upcoming', score1:null, score2:null },
  { id: 'vw1',  day:2, time:'10:15', sport:'女子バレー',  team1:'4年',  team2:'3年',  venue:'第二体育館', round:'1回戦①',  status:'upcoming', score1:null, score2:null },
  { id: 'v18',  day:2, time:'10:15', sport:'バレー',      team1:'-',  team2:'-',  venue:'第二体育館 Bコート', round:'2回戦⑱', status:'upcoming', score1:null, score2:null },
  { id: 'v19',  day:2, time:'10:50', sport:'バレー',      team1:'-',  team2:'-',  venue:'第二体育館 Aコート', round:'準決勝⑲', status:'upcoming', score1:null, score2:null },
  { id: 'vw2',  day:2, time:'10:50', sport:'女子バレー',  team1:'5年',  team2:'-',  venue:'第二体育館', round:'準決勝②',  status:'upcoming', score1:null, score2:null },
  { id: 'v20',  day:2, time:'11:30', sport:'バレー',      team1:'-',  team2:'-',  venue:'第二体育館 Aコート', round:'準決勝⑳', status:'upcoming', score1:null, score2:null },
  { id: 'vw3',  day:2, time:'11:30', sport:'女子バレー',  team1:'1年',  team2:'-',  venue:'第二体育館', round:'決勝③',    status:'upcoming', score1:null, score2:null },
  { id: 'v21',  day:2, time:'13:05', sport:'バレー',      team1:'-',  team2:'-',  venue:'第二体育館 Aコート', round:'決勝㉑',  status:'upcoming', score1:null, score2:null },

  // ===== バドミントン 2日目 =====
  { id: 'bd01', day:2, time:'09:30', sport:'バドミントン', team1:'1-3', team2:'1-2',  venue:'第一体育館 Aコート', round:'1回戦①', status:'upcoming', score1:null, score2:null },
  { id: 'bd02', day:2, time:'09:30', sport:'バドミントン', team1:'2M',  team2:'1-4',  venue:'第一体育館 Bコート', round:'1回戦②', status:'upcoming', score1:null, score2:null },
  { id: 'bd03', day:2, time:'09:30', sport:'バドミントン', team1:'2C',  team2:'2B',   venue:'第一体育館 Cコート', round:'1回戦③', status:'upcoming', score1:null, score2:null },
  { id: 'bd04', day:2, time:'10:05', sport:'バドミントン', team1:'2E',  team2:'1-1',  venue:'第一体育館 Aコート', round:'1回戦④', status:'upcoming', score1:null, score2:null },
  { id: 'bd05', day:2, time:'10:05', sport:'バドミントン', team1:'3C',  team2:'4B',   venue:'第一体育館 Bコート', round:'1回戦⑤', status:'upcoming', score1:null, score2:null },
  { id: 'bd06', day:2, time:'10:05', sport:'バドミントン', team1:'3M',  team2:'-',  venue:'第一体育館 Cコート', round:'1回戦⑥', status:'upcoming', score1:null, score2:null },
  { id: 'bd07', day:2, time:'10:40', sport:'バドミントン', team1:'-', team2:'-',  venue:'第一体育館 Aコート', round:'2回戦⑦', status:'upcoming', score1:null, score2:null },
  { id: 'bd08', day:2, time:'10:40', sport:'バドミントン', team1:'-', team2:'-',  venue:'第一体育館 Bコート', round:'2回戦⑧', status:'upcoming', score1:null, score2:null },
  { id: 'bd09', day:2, time:'10:40', sport:'バドミントン', team1:'-', team2:'-',  venue:'第一体育館 Cコート', round:'2回戦⑨', status:'upcoming', score1:null, score2:null },
  { id: 'bd10', day:2, time:'11:15', sport:'バドミントン', team1:'-', team2:'-',  venue:'第一体育館 Aコート', round:'準々決勝⑩', status:'upcoming', score1:null, score2:null },
  { id: 'bd11', day:2, time:'11:15', sport:'バドミントン', team1:'3E',  team2:'5B',   venue:'第一体育館 Bコート', round:'1回戦⑪', status:'upcoming', score1:null, score2:null },
  { id: 'bd12', day:2, time:'11:15', sport:'バドミントン', team1:'-', team2:'-',  venue:'第一体育館 Cコート', round:'準々決勝⑫', status:'upcoming', score1:null, score2:null },
  { id: 'bd13', day:2, time:'11:50', sport:'バドミントン', team1:'-', team2:'-',  venue:'第一体育館 Aコート', round:'準々決勝⑬', status:'upcoming', score1:null, score2:null },
  { id: 'bd14', day:2, time:'11:50', sport:'バドミントン', team1:'-', team2:'-',  venue:'第一体育館 Bコート', round:'準々決勝⑭', status:'upcoming', score1:null, score2:null },
  { id: 'bd15', day:2, time:'11:50', sport:'バドミントン', team1:'-', team2:'-',  venue:'第一体育館 Cコート', round:'準々決勝⑮', status:'upcoming', score1:null, score2:null },
  { id: 'bd16', day:2, time:'12:50', sport:'バドミントン', team1:'-', team2:'-',  venue:'第一体育館 Aコート', round:'準決勝⑯', status:'upcoming', score1:null, score2:null },
  { id: 'bd17', day:2, time:'12:50', sport:'バドミントン', team1:'-', team2:'-',  venue:'第一体育館 Bコート', round:'準決勝⑰', status:'upcoming', score1:null, score2:null },
  { id: 'bd18', day:2, time:'12:50', sport:'バドミントン', team1:'-', team2:'-',  venue:'第一体育館 Cコート', round:'準決勝⑱', status:'upcoming', score1:null, score2:null },
  { id: 'bd19', day:2, time:'14:00', sport:'バドミントン', team1:'-', team2:'-',  venue:'第一体育館 Aコート', round:'準決勝⑲', status:'upcoming', score1:null, score2:null },
  { id: 'bd20', day:2, time:'14:00', sport:'バドミントン', team1:'-', team2:'-',  venue:'第一体育館 Bコート', round:'準決勝⑳', status:'upcoming', score1:null, score2:null },
  { id: 'bd21', day:2, time:'14:45', sport:'バドミントン', team1:'-', team2:'-',  venue:'第一体育館 Aコート', round:'決勝㉑',  status:'upcoming', score1:null, score2:null },
  { id: 'bdw1',day:2, time:'13:25', sport:'女子バドミントン', team1:'3年', team2:'5年', venue:'第一体育館', round:'1回戦①', status:'upcoming', score1:null, score2:null },
  { id: 'bdw2',day:2, time:'14:00', sport:'女子バドミントン', team1:'4年', team2:'-', venue:'第一体育館', round:'準決勝②', status:'upcoming', score1:null, score2:null },
  { id: 'bdw3',day:2, time:'14:45', sport:'女子バドミントン', team1:'-', team2:'-', venue:'第一体育館', round:'決勝③',   status:'upcoming', score1:null, score2:null },

  // ===== ソフトテニス 1日目 =====
  { id: 'st01', day:1, time:'10:00', sport:'ソフトテニス', team1:'1-4', team2:'1-2',  venue:'テニスコート A', round:'1回戦①', status:'upcoming', score1:null, score2:null },
  { id: 'st02', day:1, time:'10:00', sport:'ソフトテニス', team1:'2B',  team2:'2E',   venue:'テニスコート B', round:'1回戦②', status:'upcoming', score1:null, score2:null },
  { id: 'st03', day:1, time:'10:00', sport:'ソフトテニス', team1:'2M',  team2:'1-3',  venue:'テニスコート C', round:'1回戦③', status:'upcoming', score1:null, score2:null },
  { id: 'st04', day:1, time:'11:00', sport:'ソフトテニス', team1:'2C',  team2:'1-1',  venue:'テニスコート A', round:'1回戦④', status:'upcoming', score1:null, score2:null },
  { id: 'st05', day:1, time:'11:00', sport:'ソフトテニス', team1:'3C',  team2:'5E',   venue:'テニスコート B', round:'1回戦⑤', status:'upcoming', score1:null, score2:null },
  { id: 'st06', day:1, time:'11:00', sport:'ソフトテニス', team1:'5M',  team2:'-',  venue:'テニスコート C', round:'1回戦⑥', status:'upcoming', score1:null, score2:null },
  { id: 'st07', day:1, time:'12:45', sport:'ソフトテニス', team1:'-', team2:'-',  venue:'テニスコート A', round:'2回戦⑦', status:'upcoming', score1:null, score2:null },
  { id: 'st08', day:1, time:'12:45', sport:'ソフトテニス', team1:'-', team2:'-',  venue:'テニスコート B', round:'2回戦⑧', status:'upcoming', score1:null, score2:null },
  { id: 'st09', day:1, time:'12:45', sport:'ソフトテニス', team1:'-', team2:'-',  venue:'テニスコート C', round:'2回戦⑨', status:'upcoming', score1:null, score2:null },
  { id: 'st10', day:1, time:'13:45', sport:'ソフトテニス', team1:'-', team2:'-',  venue:'テニスコート A', round:'準々決勝⑩', status:'upcoming', score1:null, score2:null },
  { id: 'st11', day:1, time:'13:45', sport:'ソフトテニス', team1:'3E',  team2:'5C',   venue:'テニスコート B', round:'1回戦⑪', status:'upcoming', score1:null, score2:null },
  { id: 'st12', day:1, time:'13:45', sport:'ソフトテニス', team1:'-', team2:'-',  venue:'テニスコート C', round:'準々決勝⑫', status:'upcoming', score1:null, score2:null },
  { id: 'st13', day:1, time:'14:45', sport:'ソフトテニス', team1:'-', team2:'-',  venue:'テニスコート A', round:'準々決勝⑬', status:'upcoming', score1:null, score2:null },
  { id: 'st14', day:1, time:'14:45', sport:'ソフトテニス', team1:'-', team2:'-',  venue:'テニスコート B', round:'準々決勝⑭', status:'upcoming', score1:null, score2:null },
  { id: 'st15', day:1, time:'14:45', sport:'ソフトテニス', team1:'-', team2:'-',  venue:'テニスコート C', round:'準々決勝⑮', status:'upcoming', score1:null, score2:null },

  // ===== ソフトテニス 2日目 =====
  { id: 'st16', day:2, time:'09:30', sport:'ソフトテニス', team1:'-', team2:'-',  venue:'テニスコート A', round:'準決勝⑯', status:'upcoming', score1:null, score2:null },
  { id: 'st17', day:2, time:'09:30', sport:'ソフトテニス', team1:'-', team2:'-',  venue:'テニスコート B', round:'準決勝⑰', status:'upcoming', score1:null, score2:null },
  { id: 'st18', day:2, time:'09:30', sport:'ソフトテニス', team1:'専攻科', team2:'4C', venue:'テニスコート C', round:'1回戦⑱', status:'upcoming', score1:null, score2:null },
  { id: 'st19', day:2, time:'10:25', sport:'ソフトテニス', team1:'-', team2:'-',  venue:'テニスコート A', round:'準決勝⑲', status:'upcoming', score1:null, score2:null },
  { id: 'st20', day:2, time:'10:25', sport:'ソフトテニス', team1:'-', team2:'-',  venue:'テニスコート B', round:'準決勝⑳', status:'upcoming', score1:null, score2:null },
  { id: 'st21', day:2, time:'11:20', sport:'ソフトテニス', team1:'-', team2:'-',  venue:'テニスコート A', round:'決勝㉑',  status:'upcoming', score1:null, score2:null },

  // ===== Eスポーツ 1日目 =====
  { id: 'e01',  day:1, time:'09:30', sport:'Eスポーツ',   team1:'2C',  team2:'1-3',  venue:'大講義室 A台', round:'1回戦①', status:'upcoming', score1:null, score2:null },
  { id: 'e02',  day:1, time:'09:30', sport:'Eスポーツ',   team1:'2B',  team2:'2M',   venue:'大講義室 B台', round:'1回戦②', status:'upcoming', score1:null, score2:null },
  { id: 'e03',  day:1, time:'10:15', sport:'Eスポーツ',   team1:'1-4', team2:'1-1',  venue:'大講義室 A台', round:'1回戦③', status:'upcoming', score1:null, score2:null },
  { id: 'e04',  day:1, time:'10:15', sport:'Eスポーツ',   team1:'1-2', team2:'2E',   venue:'大講義室 B台', round:'1回戦④', status:'upcoming', score1:null, score2:null },
  { id: 'e05',  day:1, time:'11:00', sport:'Eスポーツ',   team1:'5B',  team2:'5C',   venue:'大講義室 A台', round:'1回戦⑤', status:'upcoming', score1:null, score2:null },
  { id: 'e06',  day:1, time:'11:00', sport:'Eスポーツ',   team1:'4C',  team2:'-',  venue:'大講義室 B台', round:'1回戦⑥', status:'upcoming', score1:null, score2:null },
  { id: 'e07',  day:1, time:'11:45', sport:'Eスポーツ',   team1:'-', team2:'-',  venue:'大講義室 A台', round:'2回戦⑦', status:'upcoming', score1:null, score2:null },
  { id: 'e08',  day:1, time:'11:45', sport:'Eスポーツ',   team1:'-', team2:'-',  venue:'大講義室 B台', round:'2回戦⑧', status:'upcoming', score1:null, score2:null },
  { id: 'e09',  day:1, time:'13:05', sport:'Eスポーツ',   team1:'-', team2:'-',  venue:'大講義室 A台', round:'2回戦⑨', status:'upcoming', score1:null, score2:null },
  { id: 'e10',  day:1, time:'13:05', sport:'Eスポーツ',   team1:'-', team2:'-',  venue:'大講義室 B台', round:'2回戦⑩', status:'upcoming', score1:null, score2:null },
  { id: 'e11',  day:1, time:'13:50', sport:'Eスポーツ',   team1:'3B',  team2:'4M',   venue:'大講義室 A台', round:'1回戦⑪', status:'upcoming', score1:null, score2:null },
  { id: 'e12',  day:1, time:'13:50', sport:'Eスポーツ',   team1:'-', team2:'-',  venue:'大講義室 B台', round:'準々決勝⑫', status:'upcoming', score1:null, score2:null },
  { id: 'e13',  day:1, time:'14:35', sport:'Eスポーツ',   team1:'-', team2:'-',  venue:'大講義室 A台', round:'準々決勝⑬', status:'upcoming', score1:null, score2:null },
  { id: 'e14',  day:1, time:'14:35', sport:'Eスポーツ',   team1:'-', team2:'-',  venue:'大講義室 B台', round:'準々決勝⑭', status:'upcoming', score1:null, score2:null },

  // ===== Eスポーツ 2日目 =====
  { id: 'e15',  day:2, time:'09:50', sport:'Eスポーツ',   team1:'-', team2:'-',  venue:'大講義室 A台', round:'準々決勝⑮', status:'upcoming', score1:null, score2:null },
  { id: 'e16',  day:2, time:'09:50', sport:'Eスポーツ',   team1:'-', team2:'-',  venue:'大講義室 B台', round:'準々決勝⑯', status:'upcoming', score1:null, score2:null },
  { id: 'e17',  day:2, time:'10:35', sport:'Eスポーツ',   team1:'-', team2:'-',  venue:'大講義室 A台', round:'準決勝⑰',  status:'upcoming', score1:null, score2:null },
  { id: 'e18',  day:2, time:'10:35', sport:'Eスポーツ',   team1:'-', team2:'-',  venue:'大講義室 B台', round:'準決勝⑱',  status:'upcoming', score1:null, score2:null },
  { id: 'e19',  day:2, time:'11:20', sport:'Eスポーツ',   team1:'-', team2:'-',  venue:'大講義室 A台', round:'準決勝⑲',  status:'upcoming', score1:null, score2:null },
  { id: 'e20',  day:2, time:'11:20', sport:'Eスポーツ',   team1:'-', team2:'-',  venue:'大講義室 B台', round:'準決勝⑳',  status:'upcoming', score1:null, score2:null },
  { id: 'e21',  day:2, time:'13:00', sport:'Eスポーツ',   team1:'-', team2:'-',  venue:'大講義室 A台', round:'決勝㉑',   status:'upcoming', score1:null, score2:null },

  // ===== リレー 2日目 =====
  { id: 'r01',  day:2, time:'14:00', sport:'リレー', team1:'2C・2E・2B・1-2', team2:'',  venue:'陸上競技場', round:'Aブロック第1試合', status:'upcoming', score1:null, score2:null },
  { id: 'r02',  day:2, time:'14:00', sport:'リレー', team1:'5C・5M・教職員・3C', team2:'', venue:'陸上競技場', round:'Bブロック第1試合', status:'upcoming', score1:null, score2:null },
  { id: 'r03',  day:2, time:'14:25', sport:'リレー', team1:'3E・専攻科・3M・4B', team2:'', venue:'陸上競技場', round:'Aブロック第2試合', status:'upcoming', score1:null, score2:null },
  { id: 'r04',  day:2, time:'14:25', sport:'リレー', team1:'2M・1-3・1-4・1-1', team2:'', venue:'陸上競技場', round:'Bブロック第2試合', status:'upcoming', score1:null, score2:null },
  { id: 'r05',  day:2, time:'14:50', sport:'リレー', team1:'5E・4M・4C',         team2:'', venue:'陸上競技場', round:'Aブロック第3試合', status:'upcoming', score1:null, score2:null },
  { id: 'r06',  day:2, time:'14:50', sport:'リレー', team1:'5B・3B・4E',         team2:'', venue:'陸上競技場', round:'Bブロック第3試合', status:'upcoming', score1:null, score2:null },
  { id: 'r07',  day:2, time:'15:20', sport:'リレー', team1:'-',                team2:'', venue:'陸上競技場', round:'Aブロック代表決定戦', status:'upcoming', score1:null, score2:null },
  { id: 'r08',  day:2, time:'15:20', sport:'リレー', team1:'-',                team2:'', venue:'陸上競技場', round:'Bブロック代表決定戦', status:'upcoming', score1:null, score2:null },
  { id: 'r09',  day:2, time:'15:50', sport:'リレー', team1:'-',                team2:'', venue:'陸上競技場', round:'全体決勝',           status:'upcoming', score1:null, score2:null },

  // ===== 式典 =====
  { id: 'c01',  day:1, time:'09:00', sport:'式典', team1:'開会式', team2:'',  venue:'陸上競技場(放送)', round:'', status:'upcoming', score1:null, score2:null },
  { id: 'c02',  day:2, time:'16:10', sport:'式典', team1:'閉会式・表彰', team2:'', venue:'陸上競技場', round:'', status:'upcoming', score1:null, score2:null },
];

// スポーツ一覧（フィルター用）
const sportList = ['サッカー','バスケ','女子バスケ','ソフトボール','バレー','女子バレー','バドミントン','女子バドミントン','ソフトテニス','Eスポーツ','リレー','式典'];

// スポーツアイコン
const sportIcons = {
  'サッカー':'⚽','バスケ':'🏀','女子バスケ':'🏀','ソフトボール':'🥎',
  'バレー':'🏐','女子バレー':'🏐','バドミントン':'🏸','女子バドミントン':'🏸',
  'ソフトテニス':'🎾','Eスポーツ':'🎮','リレー':'🏃','式典':'🎌'
};
