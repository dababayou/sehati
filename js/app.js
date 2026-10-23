/**
 * SEHATI Web Application Engine
 * Sehat Bersama Puasa Sunnah & Posbindu Masjid
 */

// Default Demo Data & State
const DEFAULT_STATE = {
  activeUser: 'pak_hasan', // 'pak_hasan' | 'ibu_siti' | 'bu_rina' | 'pak_budi'
  theme: 'light',
  currentTab: 'beranda', // 'beranda' | 'profil' | 'skrining' | 'rapor' | 'puasa' | 'nutrisi' | 'komunitas' | 'dasbor'
  currentMetric: 'gula', // 'gula' | 'tekanan' | 'pinggang'
  nutritionTab: 'berbuka', // 'berbuka' | 'sahur'
  reminders: {
    sahur: true,
    berbuka: true,
    skrining: true,
    evaluasi: false
  },
  users: {
    pak_hasan: {
      id: 'pak_hasan',
      name: 'Pak Hasan',
      role: 'jemaah',
      age: 58,
      gender: 'Laki-laki',
      mosque: 'Masjid Al-Falah',
      weight: 68,
      height: 165,
      waist: 89, // cm
      initialWaist: 92,
      bpSys: 124, // mmHg
      bpDia: 80,
      initialBp: '128/82',
      gdp: 108, // mg/dL
      initialGdp: 126,
      conditions: ['lansia', 'predm'],
      consent: true,
      fastingCount: 16,
      fastingTarget: 24,
      cycleWeek: 9,
      checkedInToday: false,
      screeningHistory: [
        { date: '01 Sep', week: 'Mg 1', gdp: 126, sys: 128, dia: 82, waist: 92, note: 'Pendaftaran awal siklus' },
        { date: '15 Sep', week: 'Mg 3', gdp: 122, sys: 126, dia: 82, waist: 91, note: 'Rutin puasa 2 minggu' },
        { date: '29 Sep', week: 'Mg 5', gdp: 118, sys: 125, dia: 80, waist: 90.5, note: 'Pola makan mulai diperbaiki' },
        { date: '13 Okt', week: 'Mg 7', gdp: 114, sys: 125, dia: 80, waist: 90, note: 'Gula darah mulai turun' },
        { date: '21 Okt', week: 'Mg 9', gdp: 108, sys: 124, dia: 80, waist: 89, note: 'Kondisi stabil, pertahankan' }
      ]
    },
    ibu_siti: {
      id: 'ibu_siti',
      name: 'Ibu Siti',
      role: 'jemaah',
      age: 64,
      gender: 'Perempuan',
      mosque: 'Masjid Al-Falah',
      weight: 74,
      height: 152,
      waist: 96,
      initialWaist: 98,
      bpSys: 146,
      bpDia: 92,
      initialBp: '150/95',
      gdp: 138,
      initialGdp: 148,
      conditions: ['lansia', 'dm', 'hipertensi'],
      consent: true,
      fastingCount: 12,
      fastingTarget: 24,
      cycleWeek: 9,
      checkedInToday: false,
      screeningHistory: [
        { date: '01 Sep', week: 'Mg 1', gdp: 148, sys: 150, dia: 95, waist: 98, note: 'Riwayat hipertensi' },
        { date: '15 Sep', week: 'Mg 3', gdp: 144, sys: 148, dia: 94, waist: 97.5, note: 'Keluhan pusing ringan' },
        { date: '29 Sep', week: 'Mg 5', gdp: 140, sys: 147, dia: 93, waist: 97, note: 'Dampingan nakes' },
        { date: '21 Okt', week: 'Mg 9', gdp: 138, sys: 146, dia: 92, waist: 96, note: 'Rekomendasi rujuk faskes' }
      ]
    },
    pak_budi: {
      id: 'pak_budi',
      name: 'Pak Budi Prasetyo',
      role: 'jemaah',
      age: 46,
      gender: 'Laki-laki',
      mosque: 'Masjid Al-Falah',
      weight: 65,
      height: 168,
      waist: 83,
      initialWaist: 86,
      bpSys: 118,
      bpDia: 78,
      initialBp: '122/80',
      gdp: 94,
      initialGdp: 104,
      conditions: [],
      consent: true,
      fastingCount: 18,
      fastingTarget: 24,
      cycleWeek: 9,
      checkedInToday: true,
      screeningHistory: [
        { date: '01 Sep', week: 'Mg 1', gdp: 104, sys: 122, dia: 80, waist: 86, note: 'Skrining awal mandiri' },
        { date: '29 Sep', week: 'Mg 5', gdp: 98, sys: 120, dia: 78, waist: 84.5, note: 'Kebugaran baik' },
        { date: '21 Okt', week: 'Mg 9', gdp: 94, sys: 118, dia: 78, waist: 83, note: 'Optimal' }
      ]
    },
    bu_rina: {
      id: 'bu_rina',
      name: 'Ibu Rina (Kader)',
      role: 'kader',
      age: 42,
      gender: 'Perempuan',
      mosque: 'Masjid Al-Falah',
      weight: 58,
      height: 160,
      waist: 76,
      initialWaist: 78,
      bpSys: 115,
      bpDia: 75,
      initialBp: '115/75',
      gdp: 88,
      initialGdp: 92,
      conditions: [],
      consent: true,
      fastingCount: 20,
      fastingTarget: 24,
      cycleWeek: 9,
      checkedInToday: true,
      screeningHistory: [
        { date: '01 Sep', week: 'Mg 1', gdp: 92, sys: 115, dia: 75, waist: 78, note: 'Kader posbindu' },
        { date: '21 Okt', week: 'Mg 9', gdp: 88, sys: 115, dia: 75, waist: 76, note: 'Prima' }
      ]
    }
  },
  communityMessages: [
    { id: 1, sender: 'Bu Rina', role: 'kader', text: 'Assalamualaikum Bapak Ibu jemaah. Jangan lupa bawa buku hasil skrining ya untuk posbindu Kamis sore ini.', time: '16:15', reacts: ['👍 12', '🤲 5'] },
    { id: 2, sender: 'Pak Hasan', role: 'jemaah', text: 'Alhamdulillah, lingkar pinggang saya turun 3 cm dan gula darah stabil 108!', time: '16:40', reacts: ['🎉 8'] },
    { id: 3, sender: 'dr. Dina', role: 'nakes', text: 'Masya Allah kabar baik, Pak Hasan! Terus pertahankan. Untuk jemaah lansia, bila merasa pusing lemas saat puasa, segera istirahat dan jangan ragu batalkan jika perlu.', time: '17:02', reacts: ['🙏 14'] },
    { id: 4, sender: 'Pak Hasan', role: 'me', text: 'Apakah saat berbuka boleh minum air teh manis hangat sedikit, Dok?', time: '17:10', reacts: [] }
  ],
  symptomsHistory: []
};

// Initialize State from LocalStorage if available
let state = (function() {
  try {
    const saved = localStorage.getItem('sehati_state_v1');
    if (saved) {
      return Object.assign({}, DEFAULT_STATE, JSON.parse(saved));
    }
  } catch (e) {
    console.warn('LocalStorage not available, using in-memory state');
  }
  return JSON.parse(JSON.stringify(DEFAULT_STATE));
})();

function saveState() {
  try {
    localStorage.setItem('sehati_state_v1', JSON.stringify(state));
  } catch (e) {
    console.warn('Failed saving state to LocalStorage', e);
  }
}

// ============================================================
// AUDIO SYNTHESIZER FOR SAHUR & IFTAR ALARM (Web Audio API)
// ============================================================
class SoundEngine {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playIslamicChime() {
    this.init();
    if (!this.ctx) return;

    // Harmonic pentatonic peaceful chime sequence (D - F# - A - D - E)
    const notes = [
      { freq: 293.66, time: 0 },       // D4
      { freq: 369.99, time: 0.25 },    // F#4
      { freq: 440.00, time: 0.5 },     // A4
      { freq: 587.33, time: 0.8 },     // D5
      { freq: 659.25, time: 1.15 }     // E5
    ];

    const now = this.ctx.currentTime;
    notes.forEach(note => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(note.freq, now + note.time);

      gain.gain.setValueAtTime(0, now + note.time);
      gain.gain.linearRampToValueAtTime(0.28, now + note.time + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + note.time + 1.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + note.time);
      osc.stop(now + note.time + 1.25);
    });
  }

  playSahurChime() {
    this.init();
    if (!this.ctx) return;

    // Warm soft bell for wake-up Sahur (C4, E4, G4, C5)
    const notes = [
      { freq: 261.63, time: 0 },
      { freq: 329.63, time: 0.3 },
      { freq: 392.00, time: 0.6 },
      { freq: 523.25, time: 0.95 }
    ];

    const now = this.ctx.currentTime;
    notes.forEach(note => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(note.freq, now + note.time);

      gain.gain.setValueAtTime(0, now + note.time);
      gain.gain.linearRampToValueAtTime(0.3, now + note.time + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + note.time + 1.4);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + note.time);
      osc.stop(now + note.time + 1.45);
    });
  }
}

const soundEngine = new SoundEngine();

// ============================================================
// COUNTDOWN TIMER TO IFTAR / SAHUR
// ============================================================
let countdownInterval = null;

function initCountdown() {
  if (countdownInterval) clearInterval(countdownInterval);

  function getTargetTime() {
    const now = new Date();
    // Berbuka default is 17:55, Sahur default is 03:50
    const iftar = new Date(now);
    iftar.setHours(17, 55, 0, 0);

    const sahur = new Date(now);
    sahur.setHours(3, 50, 0, 0);

    // If currently between 04:00 and 17:55 -> count to Iftar
    if (now < iftar && now >= sahur) {
      return { target: iftar, label: 'menuju waktu berbuka puasa' };
    }
    // Else count to next Sahur
    let nextSahur = new Date(sahur);
    if (now >= iftar) {
      nextSahur.setDate(nextSahur.getDate() + 1);
    }
    return { target: nextSahur, label: 'menuju waktu sahur berikutnya' };
  }

  function update() {
    const { target, label } = getTargetTime();
    const now = new Date();
    let diff = Math.floor((target - now) / 1000);

    if (diff < 0) diff = 0;

    const h = Math.floor(diff / 3600);
    const m = Math.floor((diff % 3600) / 60);
    const s = diff % 60;

    const pad = n => String(n).padStart(2, '0');
    const timeStr = `${pad(h)}:${pad(m)}:${pad(s)}`;

    // Update all countdown elements on page
    document.querySelectorAll('.js-countdown-time').forEach(el => {
      el.textContent = timeStr;
    });
    document.querySelectorAll('.js-countdown-label').forEach(el => {
      el.textContent = label;
    });
  }

  update();
  countdownInterval = setInterval(update, 1000);
}

// ============================================================
// HEALTH EVALUATOR & RAPORT LOGIC
// ============================================================
function evaluateHealth(user) {
  const latest = user.screeningHistory[user.screeningHistory.length - 1] || {
    gdp: user.gdp,
    sys: user.bpSys,
    dia: user.bpDia,
    waist: user.waist
  };

  const gdp = latest.gdp;
  const sys = latest.sys;
  const dia = latest.dia;
  const waist = latest.waist;
  const isMale = user.gender === 'Laki-laki';

  let status = 'normal'; // 'normal' | 'waspada' | 'rujuk'
  let reasons = [];

  // 1. Gula Darah Puasa (GDP)
  // Normal: < 100, Pre-diabetes: 100-125, DM / Rujuk: >= 126
  if (gdp >= 126) {
    status = 'rujuk';
    reasons.push(`Gula darah puasa ${gdp} mg/dL (ambang diabetes)`);
  } else if (gdp >= 100) {
    if (status !== 'rujuk') status = 'waspada';
    reasons.push(`Gula darah puasa ${gdp} mg/dL (pre-diabetes)`);
  }

  // 2. Tekanan Darah (Hipertensi stage 2 >= 140/90 -> Rujuk, Pre-hipertensi 120-139/80-89 -> Waspada)
  if (sys >= 140 || dia >= 90) {
    status = 'rujuk';
    reasons.push(`Tekanan darah ${sys}/${dia} mmHg (hipertensi tingkat 2)`);
  } else if (sys >= 120 || dia >= 80) {
    if (status !== 'rujuk') status = 'waspada';
    reasons.push(`Tekanan darah ${sys}/${dia} mmHg (pre-hipertensi)`);
  }

  // 3. Lingkar Pinggang (Pria >= 90 cm, Wanita >= 80 cm)
  const waistThreshold = isMale ? 90 : 80;
  if (waist >= waistThreshold) {
    if (status === 'normal') status = 'waspada';
    reasons.push(`Lingkar pinggang ${waist} cm melebihi batas ideal (${waistThreshold} cm)`);
  }

  // 4. Kondisi khusus
  if (user.conditions.includes('dm') && user.conditions.includes('hipertensi')) {
    status = 'rujuk';
  }

  let config = {
    status,
    title: '',
    badgeClass: '',
    chipClass: '',
    pointerPercent: 20,
    description: '',
    todos: [],
    primaryAction: '',
    secondaryAction: ''
  };

  if (status === 'normal') {
    config.title = 'Alhamdulillah, Kondisi Normal';
    config.badgeClass = 'ok';
    config.chipClass = 'ok';
    config.pointerPercent = 18;
    config.description = 'Semua parameter kesehatan dalam rentang optimal. Tubuh merespons puasa sunnah dan pola hidup sehat dengan sangat baik.';
    config.todos = [
      'Pertahankan puasa Senin dan Kamis secara istiqomah',
      'Terapkan panduan Piring Sehat gizi seimbang saat sahur dan berbuka',
      'Skrining rutin setiap 4 minggu di Posbindu Masjid'
    ];
    config.primaryAction = 'Bagikan ke Komunitas';
    config.secondaryAction = 'Lihat Rekomendasi Menu';
  } else if (status === 'waspada') {
    config.title = 'Perlu Waspada (Pre-Kondisi)';
    config.badgeClass = 'warn';
    config.chipClass = 'warn';
    config.pointerPercent = 50;
    config.description = 'Sedikit di atas rentang sehat. Masih sangat berpotensi dinormalkan dengan disiplin puasa sunnah dan perbaikan pola makan.';
    config.todos = [
      'Lanjutkan puasa Senin dan Kamis untuk memulihkan sensitivitas insulin',
      'Hindari gorengan dan batasi minuman manis pekat saat berbuka',
      'Jalan santai 20-30 menit setiap hari / jalan kaki ke masjid',
      'Ukur ulang gula darah & tensi 2 minggu lagi di Posbindu'
    ];
    config.primaryAction = 'Tanya Kader Posbindu';
    config.secondaryAction = 'Konsultasi Menu Sehat';
  } else {
    config.title = 'Rekomendasi Rujuk ke Puskesmas';
    config.badgeClass = 'risk';
    config.chipClass = 'risk';
    config.pointerPercent = 84;
    config.description = 'Terdapat parameter yang melampaui batas aman. Sangat dianjurkan pemeriksaan lanjutan ke dokter Puskesmas untuk konfirmasi lab dan tatalaksana medis.';
    config.todos = [
      'Bawa rekap data SEHATI ini saat berkunjung ke Poli Puskesmas',
      'Dampingi puasa dengan pengawasan nakes, jangan ragu berbuka jika pusing/lemas',
      'Diskusikan obat rutin dan penyesuaian jam minum saat berpuasa',
      'Hubungi kader Bu Rina untuk penjadwalan pendampingan'
    ];
    config.primaryAction = 'Jadwalkan ke Puskesmas';
    config.secondaryAction = 'Hubungi Kader Pendamping';
  }

  return { config, latest, reasons };
}

// ============================================================
// SVG CHART ENGINE
// ============================================================
function renderScreeningChart(user, metric) {
  const history = user.screeningHistory;
  if (!history || history.length === 0) return '';

  const width = 320;
  const height = 150;
  const padLeft = 32;
  const padRight = 20;
  const padTop = 22;
  const padBottom = 28;

  let values = [];
  let yMin = 0;
  let yMax = 200;
  let normalMin = 0;
  let normalMax = 0;
  let unit = '';
  let label = '';

  if (metric === 'gula') {
    values = history.map(h => h.gdp);
    yMin = 70;
    yMax = 160;
    normalMin = 70;
    normalMax = 100;
    unit = 'mg/dL';
    label = 'Gula Darah Puasa';
  } else if (metric === 'tekanan') {
    values = history.map(h => h.sys);
    yMin = 90;
    yMax = 170;
    normalMin = 90;
    normalMax = 120;
    unit = 'mmHg';
    label = 'Tekanan Darah Sistol';
  } else {
    // waist
    values = history.map(h => h.waist);
    yMin = 65;
    yMax = 110;
    normalMin = 65;
    normalMax = user.gender === 'Laki-laki' ? 90 : 80;
    unit = 'cm';
    label = 'Lingkar Pinggang';
  }

  // Calculate coordinates
  const n = values.length;
  const xStep = n > 1 ? (width - padLeft - padRight) / (n - 1) : 0;

  function getY(val) {
    const clamped = Math.max(yMin, Math.min(yMax, val));
    const ratio = (clamped - yMin) / (yMax - yMin);
    return height - padBottom - ratio * (height - padTop - padBottom);
  }

  const points = values.map((val, idx) => ({
    x: padLeft + idx * xStep,
    y: getY(val),
    val: val,
    item: history[idx]
  }));

  // Path data
  let pathD = '';
  points.forEach((pt, i) => {
    if (i === 0) pathD += `M ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`;
    else pathD += ` L ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`;
  });

  // Area under path
  const firstPt = points[0];
  const lastPt = points[points.length - 1];
  const baselineY = height - padBottom;
  const areaD = `${pathD} L ${lastPt.x.toFixed(1)} ${baselineY} L ${firstPt.x.toFixed(1)} ${baselineY} Z`;

  // Normal zone rect
  const normY1 = getY(normalMax);
  const normY2 = getY(normalMin);
  const normHeight = normY2 - normY1;

  // Delta comparison
  const initialVal = values[0];
  const currentVal = values[values.length - 1];
  const delta = currentVal - initialVal;
  const isImprovement = delta <= 0;
  const deltaText = delta === 0 ? 'stabil' : `${isImprovement ? 'turun' : 'naik'} ${Math.abs(delta)} ${unit}`;

  // Build SVG string
  let svg = `
    <div class="row between" style="align-items:flex-end;margin-bottom:8px">
      <div>
        <div class="meta">${label}</div>
        <div class="delta">${currentVal} <span style="font-size:12px;font-weight:600;color:var(--muted)">${unit}</span></div>
      </div>
      <span class="chip ${isImprovement ? 'ok' : 'risk'}">${deltaText}</span>
    </div>

    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Grafik ${label}">
      <defs>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#2E8B72" stop-opacity="0.25"/>
          <stop offset="100%" stop-color="#2E8B72" stop-opacity="0.02"/>
        </linearGradient>
      </defs>

      <!-- Rentang Sehat Rect -->
      <rect x="${padLeft}" y="${normY1}" width="${width - padLeft - padRight}" height="${normHeight}" rx="4" fill="var(--ok-soft)" opacity="0.8"/>
      <text x="${padLeft + 6}" y="${normY1 + 12}" font-size="9" fill="var(--ok-dark)" font-weight="700" font-family="inherit">Rentang Sehat</text>

      <!-- Grid lines -->
      <g stroke="var(--line)" stroke-width="1" stroke-dasharray="3 3">
        <line x1="${padLeft}" y1="${normY1}" x2="${width - padRight}" y2="${normY1}" />
        <line x1="${padLeft}" y1="${baselineY}" x2="${width - padRight}" y2="${baselineY}" stroke-dasharray="0" />
      </g>

      <!-- Area -->
      <path d="${areaD}" fill="url(#chartGrad)"/>

      <!-- Line -->
      <path d="${pathD}" fill="none" stroke="var(--g500)" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>

      <!-- Points & labels -->
      ${points.map((pt, i) => {
        const isLatest = i === points.length - 1;
        const color = isLatest ? 'var(--amber)' : 'var(--card)';
        const strokeColor = isLatest ? 'var(--amber)' : 'var(--g500)';
        return `
          <g class="chart-point" style="cursor:pointer" onclick="showChartTooltip('${pt.item.date}: ${pt.val} ${unit} (${pt.item.note})')">
            <circle cx="${pt.x}" cy="${pt.y}" r="${isLatest ? 5.5 : 4}" fill="${color}" stroke="${strokeColor}" stroke-width="2.2"/>
            <text x="${pt.x}" y="${height - 10}" font-size="8.5" fill="var(--muted)" text-anchor="middle" font-family="inherit">${pt.item.week}</text>
          </g>
        `;
      }).join('')}
    </svg>
  `;

  return svg;
}

function showChartTooltip(msg) {
  showToast(msg, 'info');
}

// ============================================================
// UI RENDERING CONTROLLER
// ============================================================
function getCurrentUser() {
  return state.users[state.activeUser] || state.users.pak_hasan;
}

function renderApp() {
  const user = getCurrentUser();
  const evaluation = evaluateHealth(user);

  // Update Global Active User Display
  document.querySelectorAll('.js-user-name').forEach(el => {
    el.textContent = user.name;
  });
  document.querySelectorAll('.js-user-role-badge').forEach(el => {
    el.textContent = user.role === 'kader' ? 'Kader Posbindu' : 'Jemaah Masjid';
    el.className = `badge ${user.role === 'kader' ? 'kader' : 'jemaah'}`;
  });
  const initials = user.name.replace(/[^a-zA-Z\s]/g, '').trim().split(/\s+/).map(n => n[0]).slice(0, 2).join('').toUpperCase();
  document.querySelectorAll('.js-user-avatar').forEach(el => {
    el.textContent = initials;
    if (user.role === 'kader') el.classList.add('kader');
    else el.classList.remove('kader');
  });

  // Calculate IMT
  const heightM = user.height / 100;
  const imt = (user.weight / (heightM * heightM)).toFixed(1);
  let imtCategory = 'Normal';
  if (imt < 18.5) imtCategory = 'Kurus';
  else if (imt >= 25 && imt < 30) imtCategory = 'Kelebihan BB';
  else if (imt >= 30) imtCategory = 'Obesitas';

  // 1. Render Beranda
  renderBeranda(user, evaluation);

  // 2. Render Profil Jemaah
  renderProfil(user, imt, imtCategory);

  // 3. Render Skrining & Tren
  renderSkrining(user);

  // 4. Render Rapor
  renderRapor(user, evaluation);

  // 5. Render Puasa (Kalender, check-in ring, heatmap, symptoms)
  renderPuasa(user);

  // 6. Render Nutrisi & Piring Sehat
  renderNutrisi();

  // 7. Render Komunitas
  renderKomunitas();

  // 8. Render Dasbor Kader (Hanya untuk Kader Posbindu)
  const isKader = user && user.role === 'kader';
  if (!isKader && state.currentTab === 'dasbor') {
    state.currentTab = 'beranda';
  }

  if (isKader) {
    renderDasborKader();
  }

  // Sembunyikan atau tampilkan navigasi Dasbor Posbindu hanya untuk Kader
  document.querySelectorAll('[data-tab="dasbor"]').forEach(el => {
    el.style.display = isKader ? 'flex' : 'none';
  });

  // Highlight active tabs in both Phone & Desktop modes
  document.querySelectorAll('.desk-nav-btn, .mob-tab-item').forEach(btn => {
    const tabName = btn.dataset.tab;
    if (tabName === state.currentTab) {
      btn.classList.add('active');
      btn.classList.add('on');
    } else {
      btn.classList.remove('active');
      btn.classList.remove('on');
    }
  });

  // Show active screen inside container
  document.querySelectorAll('.screen-view').forEach(screen => {
    if (screen.dataset.screen === state.currentTab) {
      screen.style.display = 'block';
    } else {
      screen.style.display = 'none';
    }
  });
}

function renderBeranda(user, evaluation) {
  // Cycle streak and progress
  const ringPct = (user.fastingCount / user.fastingTarget) * 100;
  const strokeDashoffset = 107 - (107 * (user.fastingCount / user.fastingTarget));

  document.querySelectorAll('.js-streak-text').forEach(el => {
    el.textContent = `Puasa Kamis hari ini`;
  });
  document.querySelectorAll('.js-streak-sub').forEach(el => {
    el.textContent = `${user.fastingCount} dari ${user.fastingTarget} puasa siklus ini`;
  });

  document.querySelectorAll('.js-ring-mini-fg').forEach(el => {
    el.style.strokeDashoffset = strokeDashoffset;
  });

  // Status chip
  document.querySelectorAll('.js-beranda-status-chip').forEach(el => {
    el.className = `chip ${evaluation.config.chipClass}`;
    el.textContent = `Status: ${evaluation.config.status.toUpperCase()}`;
  });
}

function renderProfil(user, imt, imtCategory) {
  // Fill profile fields
  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.value = val;
  };

  setVal('prof-bb', user.weight);
  setVal('prof-tb', user.height);
  setVal('prof-lp', user.waist);
  setVal('prof-sys', user.bpSys);
  setVal('prof-dia', user.bpDia);
  setVal('prof-gdp', user.gdp);

  // Displays
  document.querySelectorAll('.js-prof-imt').forEach(el => {
    el.textContent = `${imt} (${imtCategory})`;
  });

  // Conditions checkboxes
  document.querySelectorAll('.js-cond-opt').forEach(opt => {
    const condKey = opt.dataset.cond;
    if (user.conditions.includes(condKey)) {
      opt.classList.add('sel');
    } else {
      opt.classList.remove('sel');
    }
  });

  // Special condition note
  const noteBox = document.getElementById('prof-cond-note');
  if (noteBox) {
    if (user.conditions.length > 0) {
      noteBox.style.display = 'flex';
      const condNames = user.conditions.map(c => {
        if (c === 'lansia') return 'Lansia 60+';
        if (c === 'hamil') return 'Sedang Hamil';
        if (c === 'dm') return 'Diabetes Melitus';
        if (c === 'predm') return 'Pre-Diabetes';
        if (c === 'hipertensi') return 'Hipertensi';
        return c;
      }).join(', ');
      noteBox.querySelector('.js-note-text').textContent =
        `Perhatian Medis (${condNames}): Jemaah wajib dipantau kader & nakes secara berkala selama menjalankan puasa.`;
    } else {
      noteBox.style.display = 'none';
    }
  }
}

function renderSkrining(user) {
  const chartHtml = renderScreeningChart(user, state.currentMetric);
  const container = document.getElementById('chart-container');
  if (container) container.innerHTML = chartHtml;
  const containerDesk = document.getElementById('chart-container-desk');
  if (containerDesk) containerDesk.innerHTML = chartHtml;

  // Summary Tiles
  const latest = user.screeningHistory[user.screeningHistory.length - 1];
  const initial = user.screeningHistory[0];

  const bpDelta = latest.sys - initial.sys;
  const waistDelta = (latest.waist - initial.waist).toFixed(1);

  document.querySelectorAll('.js-tile-bp').forEach(el => {
    el.textContent = `${latest.sys}/${latest.dia}`;
  });
  document.querySelectorAll('.js-tile-bp-delta').forEach(el => {
    el.innerHTML = bpDelta <= 0
      ? `<svg class="i" width="11" height="11"><use href="#down"/></svg> turun ${Math.abs(bpDelta)} poin`
      : `<span style="color:var(--risk)">naik ${bpDelta} poin</span>`;
  });

  document.querySelectorAll('.js-tile-waist').forEach(el => {
    el.textContent = `${latest.waist} cm`;
  });
  document.querySelectorAll('.js-tile-waist-delta').forEach(el => {
    el.innerHTML = waistDelta <= 0
      ? `<svg class="i" width="11" height="11"><use href="#down"/></svg> turun ${Math.abs(waistDelta)} cm`
      : `<span style="color:var(--risk)">naik ${waistDelta} cm</span>`;
  });
}

function renderRapor(user, evaluation) {
  const cfg = evaluation.config;
  const banner = document.getElementById('rapor-banner');
  if (banner) {
    banner.className = `result-banner ${cfg.status}`;
    banner.querySelector('.js-rapor-title').textContent = cfg.title;
    banner.querySelector('.js-rapor-desc').textContent = cfg.description;
    banner.querySelector('.js-rapor-chip').textContent = `Gula darah puasa ${evaluation.latest.gdp} mg/dL · Tensi ${evaluation.latest.sys}/${evaluation.latest.dia}`;

    // Pointer on scale gauge
    const pointer = banner.querySelector('.scale-gauge i');
    if (pointer) {
      pointer.style.left = `${cfg.pointerPercent}%`;
    }
  }

  // Next steps list
  const todoContainer = document.getElementById('rapor-todos');
  const todoHtml = cfg.todos.map(t => `
    <div class="todo-item">
      <span class="dot"><svg class="i"><use href="#check"/></svg></span>
      <span>${t}</span>
    </div>
  `).join('');

  if (todoContainer) todoContainer.innerHTML = todoHtml;
  const todoDesk = document.getElementById('rapor-todos-desk');
  if (todoDesk) todoDesk.innerHTML = todoHtml;

  // Actions
  const btnPrimary = document.getElementById('rapor-btn-primary');
  const btnSecondary = document.getElementById('rapor-btn-secondary');
  if (btnPrimary) btnPrimary.textContent = cfg.primaryAction;
  if (btnSecondary) btnSecondary.textContent = cfg.secondaryAction;
}

function renderPuasa(user) {
  // Ring progress check-in
  const ring = document.getElementById('ringfg');
  const ringNum = document.getElementById('ringnum');
  const checkBtn = document.getElementById('checkbtn');
  const checkTxt = document.getElementById('checktxt');

  const maxCircumference = 465;
  const currentRatio = user.fastingCount / user.fastingTarget;
  const targetOffset = maxCircumference - maxCircumference * currentRatio;

  if (ring) ring.style.strokeDashoffset = targetOffset;
  if (ringNum) ringNum.textContent = user.fastingCount;

  // Sync desktop ring
  const ringDesk = document.querySelector('.js-ring-desk-fg');
  if (ringDesk) ringDesk.style.strokeDashoffset = targetOffset;
  const ringNumDesk = document.getElementById('ringnum-desk');
  if (ringNumDesk) ringNumDesk.textContent = user.fastingCount;

  if (checkBtn) {
    if (user.checkedInToday) {
      checkBtn.classList.add('done');
      checkBtn.setAttribute('aria-pressed', 'true');
      if (checkTxt) checkTxt.textContent = 'Alhamdulillah, Tercatat Hari Ini';
    } else {
      checkBtn.classList.remove('done');
      checkBtn.setAttribute('aria-pressed', 'false');
      if (checkTxt) checkTxt.textContent = 'Saya Puasa Hari Ini';
    }
  }

  // Heatmap 12 Weeks x 2 Days (Sen & Kam)
  let html = '<small></small>';
  for (let w = 1; w <= 12; w++) {
    html += `<small style="text-align:center">${w}</small>`;
  }
  const missed = { '0-4': 1, '1-6': 1 }; // sample missed
  ['Sen', 'Kam'].forEach((label, r) => {
    html += `<small>${label}</small>`;
    for (let w = 0; w < 12; w++) {
      let cls = '';
      if (w < 8) cls = missed[`${r}-${w}`] ? 'm' : 'd';
      else if (w === 8) cls = 'd';
      else if (w === 9 && r === 0) cls = 'd';
      else if (w === 9 && r === 1) cls = user.checkedInToday ? 'd' : 't';
      html += `<i class="${cls}" title="Minggu ${w + 1} (${label})"></i>`;
    }
  });

  const heat = document.getElementById('heat');
  if (heat) heat.innerHTML = html;
  const heatDesk = document.getElementById('heat-desk');
  if (heatDesk) heatDesk.innerHTML = html;
}

function renderNutrisi() {
  const sahurPanel = document.getElementById('menu-sahur-panel');
  const bukaPanel = document.getElementById('menu-buka-panel');
  if (sahurPanel && bukaPanel) {
    if (state.nutritionTab === 'sahur') {
      sahurPanel.style.display = 'block';
      bukaPanel.style.display = 'none';
    } else {
      sahurPanel.style.display = 'none';
      bukaPanel.style.display = 'block';
    }
  }

  document.querySelectorAll('.js-nutri-tab').forEach(btn => {
    if (btn.dataset.nutri === state.nutritionTab) {
      btn.classList.add('on');
    } else {
      btn.classList.remove('on');
    }
  });
}

function renderKomunitas() {
  // Komunitas WA is presented as an invitation portal to the official WhatsApp group
}

// Copy WhatsApp Group Link to clipboard
function copyWaLink() {
  const url = 'https://chat.whatsapp.com/IDSvEK6a4XtKrHEZlxlwxq?s=sw&p=a&mlu=4&ilr=4';
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(() => {
      showToast('Tautan undangan grup WhatsApp berhasil disalin ke clipboard!');
    }).catch(() => {
      fallbackCopyWa(url);
    });
  } else {
    fallbackCopyWa(url);
  }
}

function fallbackCopyWa(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try {
    document.execCommand('copy');
    showToast('Tautan undangan grup WhatsApp berhasil disalin ke clipboard!');
  } catch (err) {
    showToast('Silakan salin tautan undangan secara manual.', 'alert');
  }
  document.body.removeChild(ta);
}

function renderDasborKader() {
  // Render attendance bars
  const vals = [62, 68, 70, 74, 78, 80, 82, 84, 86, 88];
  let h = '';
  vals.forEach((v, i) => {
    h += `<i class="${i === vals.length - 1 ? 'last' : ''}" style="height:${v}%" title="Minggu ${i + 1}: ${v}% kehadiran"></i>`;
  });

  const b = document.getElementById('bars');
  if (b) b.innerHTML = h;
  const bd = document.getElementById('bars-desk');
  if (bd) bd.innerHTML = h;
}

// ============================================================
// EVENT HANDLERS & INTERACTIONS
// ============================================================

// Toast Notification
function showToast(text, type = 'success') {
  let toast = document.getElementById('global-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  const iconSvg = type === 'alert'
    ? '<svg class="i" viewBox="0 0 24 24"><path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></svg>'
    : '<svg class="i"><use href="#bell"/></svg>';

  toast.innerHTML = `${iconSvg} <span>${text}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

// Navigation between views and tabs
function switchTab(tabName) {
  const user = getCurrentUser();
  if (tabName === 'dasbor' && (!user || user.role !== 'kader')) {
    showToast('Akses Terbatas: Dasbor hanya dapat diakses oleh Kader Posbindu.', 'alert');
    return;
  }
  state.currentTab = tabName;
  saveState();
  renderApp();
  if (window.scrollY > 0) {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', state.theme);
  saveState();
}

// Switch User Profile Demo
function switchUser(userId) {
  if (state.users[userId]) {
    state.activeUser = userId;
    const user = state.users[userId];
    if (user.role !== 'kader' && state.currentTab === 'dasbor') {
      state.currentTab = 'beranda';
    }
    saveState();
    renderApp();
    showToast(`Beralih ke profil ${state.users[userId].name}`, 'info');
    closeAllModals();
  }
}

// Fasting Check-in Button Handler
function handleFastingCheckin() {
  const user = getCurrentUser();
  user.checkedInToday = !user.checkedInToday;

  if (user.checkedInToday) {
    user.fastingCount = Math.min(user.fastingTarget, user.fastingCount + 1);
    soundEngine.playIslamicChime();
    showToast('Alhamdulillah! Keikutsertaan puasa hari ini berhasil dicatat.');
  } else {
    user.fastingCount = Math.max(0, user.fastingCount - 1);
    showToast('Check-in puasa dibatalkan.');
  }

  saveState();
  renderPuasa(user);
  renderBeranda(user, evaluateHealth(user));
}

// Symptom Reporter Handler
function handleSymptomReport(symptoms, note) {
  const user = getCurrentUser();
  const entry = {
    date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short' }),
    time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
    symptoms: symptoms,
    note: note
  };

  state.symptomsHistory.unshift(entry);
  saveState();

  // Smart First Aid Health Advice
  const hasSevere = symptoms.includes('Pusing') || symptoms.includes('Lemas Berkunang-kunang');
  const responseBox = document.getElementById('symptom-feedback-alert');

  if (responseBox) {
    responseBox.style.display = 'block';
    if (hasSevere) {
      responseBox.className = 'note' ;
      responseBox.style.background = 'var(--risk-soft)';
      responseBox.style.color = '#7A1812';
      responseBox.innerHTML = `
        <svg class="i" style="color:var(--risk)" width="20" height="20"><use href="#info"/></svg>
        <div>
          <b>⚠️ Perhatian Tenaga Medis:</b>
          <p style="margin-top:2px;font-size:11.5px">Gejala pusing dan lemas saat puasa bisa mengindikasikan <b>hipoglikemia</b> (gula darah drop) atau dehidrasi. Segera beristirahat di tempat teduh. Bila terasa dingin menggigil atau pandangan gelap, <b>segera batalkan puasa</b> dengan minum air hangat manis dan segera hubungi kader Bu Rina atau dokter Puskesmas.</p>
        </div>
      `;
    } else {
      responseBox.className = 'note';
      responseBox.style.background = 'var(--ok-soft)';
      responseBox.style.color = 'var(--ok-dark)';
      responseBox.innerHTML = `
        <svg class="i" width="20" height="20"><use href="#check"/></svg>
        <div>
          <b>Laporan Tersimpan:</b>
          <p style="margin-top:2px;font-size:11.5px">Alhamdulillah, kondisi kamu dicatat oleh sistem Posbindu. Tetap jaga hidrasi saat berbuka nanti malam.</p>
        </div>
      `;
    }
  }

  showToast('Laporan apa yang dirasakan berhasil dikirim ke kader.');
}

// Add New Screening Record
function handleAddScreening(gdpVal, sysVal, diaVal, waistVal, noteVal) {
  const user = getCurrentUser();
  const nextWeekNum = user.screeningHistory.length + 1;
  const now = new Date();
  const dateStr = now.toLocaleDateString('id-ID', { day: '2-digit', month: 'short' });

  const record = {
    date: dateStr,
    week: `Mg ${nextWeekNum}`,
    gdp: Number(gdpVal) || user.gdp,
    sys: Number(sysVal) || user.bpSys,
    dia: Number(diaVal) || user.bpDia,
    waist: Number(waistVal) || user.waist,
    note: noteVal || 'Pemeriksaan rutin posbindu'
  };

  user.screeningHistory.push(record);
  user.gdp = record.gdp;
  user.bpSys = record.sys;
  user.bpDia = record.dia;
  user.waist = record.waist;

  saveState();
  renderApp();
  closeAllModals();

  showToast(`Hasil skrining baru berhasil disimpan! Rapor kesehatan telah diperbarui.`);
}

// Save Profile Updates
function handleSaveProfile(formData) {
  const user = getCurrentUser();
  user.weight = Number(formData.weight) || user.weight;
  user.height = Number(formData.height) || user.height;
  user.waist = Number(formData.waist) || user.waist;
  user.bpSys = Number(formData.sys) || user.bpSys;
  user.bpDia = Number(formData.dia) || user.bpDia;
  user.gdp = Number(formData.gdp) || user.gdp;
  user.conditions = formData.conditions || user.conditions;

  saveState();
  renderApp();
  showToast('Data profil jemaah berhasil diperbarui.');
}

// Send Community Chat Message
function handleSendMessage(text) {
  if (!text || !text.trim()) return;

  const user = getCurrentUser();
  const now = new Date();
  const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

  const newMsg = {
    id: Date.now(),
    sender: user.name,
    role: 'me',
    text: text.trim(),
    time: timeStr,
    reacts: []
  };

  state.communityMessages.push(newMsg);
  saveState();
  renderKomunitas();

  // Simulated auto-reply from Kader or Nakes for quick assistance
  setTimeout(() => {
    let replyText = 'Waalaikumsalam. Terima kasih sudah mengabari ya. Jangan ragu konsultasi bila ada keluhan selama berpuasa.';
    let replier = 'Bu Rina';
    let replierRole = 'kader';

    const lower = text.toLowerCase();
    if (lower.includes('jadwal') || lower.includes('kapan') || lower.includes('skrining')) {
      replyText = 'Skrining Posbindu diadakan setiap Kamis sore pukul 17.15 di serambi Masjid Al-Falah menjelang berbuka ya Bapak/Ibu.';
    } else if (lower.includes('menu') || lower.includes('makan') || lower.includes('sahur') || lower.includes('buka')) {
      replyText = 'Untuk sahur, utamakan karbohidrat kompleks (oatmeal/nasi merah) dan lauk protein serta 3 gelas air putih agar tahan puasa.';
      replier = 'dr. Dina';
      replierRole = 'nakes';
    } else if (lower.includes('pusing') || lower.includes('lemas') || lower.includes('obat')) {
      replyText = 'Jika pusing berputar atau gemetar, segera istirahat ya. Jangan paksakan puasa bila membahayakan kondisi fisik.';
      replier = 'dr. Dina';
      replierRole = 'nakes';
    }

    state.communityMessages.push({
      id: Date.now() + 1,
      sender: replier,
      role: replierRole,
      text: replyText,
      time: `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`,
      reacts: ['🤲 3']
    });

    saveState();
    renderKomunitas();
  }, 1200);
}

// Modals management
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add('open');
}

function closeAllModals() {
  document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('open'));
}

// Authentication dummy switch
function enterApp() {
  document.getElementById('landing-view').style.display = 'none';
  document.getElementById('app-view').style.display = 'block';
  closeAllModals();
  renderApp();
  initCountdown();
  showToast(`Selamat datang di aplikasi SEHATI, ${getCurrentUser().name}`);
}

function logoutToLanding() {
  document.getElementById('landing-view').style.display = 'block';
  document.getElementById('app-view').style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================================
// INITIALIZATION ON DOM READY
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  // Set theme from state
  if (state.theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  // Setup tabs & clicks
  document.querySelectorAll('.desk-nav-btn, .mob-tab-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      if (tab) switchTab(tab);
    });
  });

  // Segctl metric switcher (Skrining)
  document.querySelectorAll('.js-seg-metric').forEach(btn => {
    btn.addEventListener('click', () => {
      state.currentMetric = btn.dataset.metric;
      document.querySelectorAll('.js-seg-metric').forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
      renderSkrining(getCurrentUser());
    });
  });

  // Nutrition subtabs (Sahur vs Buka)
  document.querySelectorAll('.js-nutri-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      state.nutritionTab = btn.dataset.nutri;
      renderNutrisi();
    });
  });

  // Fasting Check-in button
  const checkBtn = document.getElementById('checkbtn');
  if (checkBtn) {
    checkBtn.addEventListener('click', handleFastingCheckin);
  }

  // Reminder sound tests
  document.querySelectorAll('.js-test-sound-sahur').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.add('ringing');
      soundEngine.playSahurChime();
      showToast('⏰ Alarm Sahur Berbunyi! Bangun untuk sahur dan minum air putih.', 'alert');
      setTimeout(() => btn.classList.remove('ringing'), 2000);
    });
  });

  document.querySelectorAll('.js-test-sound-iftar').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.add('ringing');
      soundEngine.playIslamicChime();
      showToast('🌙 Alarm Waktu Berbuka! Selamat berbuka puasa, dahaga telah hilang...', 'alert');
      setTimeout(() => btn.classList.remove('ringing'), 2000);
    });
  });

  // Switch toggles for reminders
  document.querySelectorAll('.switch-toggle').forEach(sw => {
    sw.addEventListener('click', () => {
      sw.classList.toggle('on');
      showToast('Pengaturan pengingat diperbarui');
    });
  });

  // Symptom pills multi-select
  document.querySelectorAll('.symptom-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      chip.classList.toggle('selected');
    });
  });

  // Symptom submit button
  const btnSubmitSymptom = document.getElementById('btn-submit-symptom');
  if (btnSubmitSymptom) {
    btnSubmitSymptom.addEventListener('click', () => {
      const selected = Array.from(document.querySelectorAll('.symptom-chip.selected')).map(c => c.textContent.trim());
      const noteInput = document.getElementById('symptom-note-input');
      const note = noteInput ? noteInput.value : '';
      handleSymptomReport(selected, note);
    });
  }

  // Condition options multi-select in Profile
  document.querySelectorAll('.js-cond-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      opt.classList.toggle('sel');
      const user = getCurrentUser();
      const key = opt.dataset.cond;
      if (opt.classList.contains('sel')) {
        if (!user.conditions.includes(key)) user.conditions.push(key);
      } else {
        user.conditions = user.conditions.filter(c => c !== key);
      }
      renderProfil(user, (user.weight / ((user.height / 100) ** 2)).toFixed(1), 'Normal');
    });
  });

  // Profile save form
  const profForm = document.getElementById('form-profile');
  if (profForm) {
    profForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const conditions = Array.from(document.querySelectorAll('.js-cond-opt.sel')).map(el => el.dataset.cond);
      handleSaveProfile({
        weight: document.getElementById('prof-bb').value,
        height: document.getElementById('prof-tb').value,
        waist: document.getElementById('prof-lp').value,
        sys: document.getElementById('prof-sys').value,
        dia: document.getElementById('prof-dia').value,
        gdp: document.getElementById('prof-gdp').value,
        conditions: conditions
      });
    });
  }

  // Screening add form
  const screeningForm = document.getElementById('form-add-screening');
  if (screeningForm) {
    screeningForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const gdp = document.getElementById('input-gdp').value;
      const sys = document.getElementById('input-sys').value;
      const dia = document.getElementById('input-dia').value;
      const waist = document.getElementById('input-waist').value;
      const note = document.getElementById('input-note').value;
      handleAddScreening(gdp, sys, dia, waist, note);
    });
  }

  // Community Chat Input & Send
  const chatInput = document.getElementById('chat-input');
  const chatSendBtn = document.getElementById('chat-send-btn');
  if (chatSendBtn && chatInput) {
    chatSendBtn.addEventListener('click', () => {
      handleSendMessage(chatInput.value);
      chatInput.value = '';
    });
    chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        handleSendMessage(chatInput.value);
        chatInput.value = '';
      }
    });
  }

  // Quick Chat Chips
  document.querySelectorAll('.quick-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const txt = chip.dataset.query || chip.textContent;
      handleSendMessage(txt);
    });
  });

  // Modal triggers
  document.querySelectorAll('.js-open-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.dataset.modal;
      if (modalId) openModal(modalId);
    });
  });

  document.querySelectorAll('.js-close-modal').forEach(btn => {
    btn.addEventListener('click', closeAllModals);
  });

  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeAllModals();
    });
  });

  // Initial render
  renderApp();
  initCountdown();
});
