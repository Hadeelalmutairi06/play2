/* EMMA 03:17 — one continuous, environment-gated 12-chapter investigation. */
(()=>{'use strict';
const $=id=>document.getElementById(id),KEY='emma0317-world-quest-v1';
const stages=[
{scene:'start',target:'note',title:['الاكتشاف','THE DISCOVERY'],task:['افحص ورقة الحائط ثم ارفع الهاتف الوردي.','Inspect the wall note, then pick up the pink phone.']},
{scene:'chat',target:'phone',title:['الرسالة الأخيرة','THE LAST MESSAGE'],task:['استخدم الهاتف ورتّب الرسائل زمنيًا.','Use the phone and put the messages in time order.'],answer:'10121617',hint:['الدقائق: 10 ثم 12 ثم 16 ثم 17.','The minutes are 10, 12, 16, 17.']},
{scene:'recording',target:'hall',title:['03:17 صباحًا','03:17 AM'],task:['افتح صورة الممر بالتسجيل، ثم اقترب من الباب.','Unlock the hallway image with the recording, then approach the door.'],answer:'1906',hint:['الأرقام المسموعة: واحد، تسعة، صفر، ستة.','The recording says one, nine, zero, six.']},
{scene:'log',target:'photo',title:['الرقم الآخر','THE OTHER NUMBER'],task:['افحص الصورة ثم قارن رواية نوح بالإيصال.','Inspect the photograph, then compare Noah’s story with the receipt.'],answer:'NOAH',hint:['قال نوح إنه بقي حتى 03:17، لكن الإيصال يقول 03:12.','Noah claimed 03:17; the receipt says 03:12.']},
{scene:'timeline',target:'clock',title:['الذكرى','THE MEMORY'],task:['افحص الساعة وأعد ترتيب الأحداث.','Inspect the clock and reconstruct the timeline.'],answer:'CDAB',hint:['نوح اتصل، ثم غادر، ثم اتصل المجهول، ثم كتبت إيما.','Noah called, left, UNKNOWN called, Emma wrote.']},
{scene:'final',target:'phone',title:['المكالمة الأخيرة','THE FINAL CALL'],task:['اقرأ المسودة واختر متابعة التحقيق بدل إنهائه مبكرًا.','Read the draft and continue investigating rather than ending early.']},
{scene:'afterPhoto',target:'photo',title:['الصورة الثانية','THE SECOND PHOTOGRAPH'],task:['افحص صورة البولارويد واقلبها لتجد الرقم 21.','Inspect the Polaroid and turn it over to find 21.']},
{scene:'radio',target:'radio-tuned',title:['التردد الخفي','THE HIDDEN FREQUENCY'],task:['اضبط الراديو في الغرفة على التردد الصحيح.','Tune the physical radio to the correct frequency.'],answer:'200621',hint:['السنة 2006 يتبعها الرقم 21.','The year 2006 followed by 21.']},
{scene:'drawer',target:'drawer-open',title:['الدرج المغلق','THE LOCKED DRAWER'],task:['افتح درج المكتب بالرمز المرتبط بالساعة.','Unlock the desk drawer using the stopped clock.'],answer:'1717',hint:['دقيقة توقف الساعة، مرتين.','Repeat the stopped clock’s minute.']},
{scene:'witness',target:'letter',title:['الشاهدة','THE WITNESS'],task:['التقط الرسالة المطوية في الممر ثم تحقق من شهادة ميرا.','Collect the folded hallway letter and verify Mira’s testimony.'],answer:'0312',hint:['سمعت ميرا الجرس عند 03:12.','Mira heard the bell at 03:12.']},
{scene:'letterRoom',target:'letter-taken',title:['الرسالة التي لم تصل','THE UNDELIVERED LETTER'],task:['افحص الرسالة، ثم اقرأ ما تركته إيما.','Inspect the letter, then read Emma’s words.']},
{scene:'lastSignal',target:'phone',title:['الإشارة الأخيرة','THE LAST SIGNAL'],task:['ارجع للهاتف وأرسل الرسالة الأخيرة.','Return to the phone and send the final message.']}
];
let progress={chapter:0,seen:[],solved:[],finished:false};try{const saved=JSON.parse(localStorage.getItem(KEY)||'null');if(saved&&Number.isInteger(saved.chapter))progress={...progress,...saved}}catch{}
const lang=()=>localStorage.getItem('phone3d-lang')==='ar'?0:1;const t=a=>a[lang()];const save=()=>localStorage.setItem(KEY,JSON.stringify(progress));
const terminal=$('storyFrame');if(!terminal)return;window.emmaQuestActive=true;
const text=(id)=>{const sc=STORY.scenes[id];if(!sc)return '';const ar=typeof AR_STORY!=='undefined'&&AR_STORY.scenes&&AR_STORY.scenes[id];return lang()===0&&ar?.text?ar.text:sc.text};
const safe=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function showBanner(){let c=stages[progress.chapter];$('questBanner').textContent=`${String(progress.chapter).padStart(2,'0')}/11 · ${t(c.task)}`;$('objective').textContent=t(c.task)}
function render(){const c=stages[progress.chapter],seen=progress.seen.includes(progress.chapter),solved=progress.solved.includes(progress.chapter),finish=progress.finished;
const sceneText=progress.chapter===5?t(['هذه المسودة لم تصل إلى إيما. في هذه النسخة يستمر التحقيق: لا تحذف الرسالة بعد، وابحث عن الصورة الثانية.','The draft never reached Emma. This investigation continues: do not delete it yet; find the second photograph.']):text(c.scene);let h=`<div class="quest-header"><span>EMMA · 03:17</span><strong>${String(progress.chapter).padStart(2,'0')} / 11</strong></div><div class="quest-progress"><span style="width:${finish?100:(progress.chapter/12)*100}%"></span></div><div class="quest-card"><small>${lang()===0?'الفصل':'CHAPTER'} ${String(progress.chapter).padStart(2,'0')}</small><h2>${safe(t(c.title))}</h2><p>${safe(sceneText)}</p><p class="quest-hint">✧ ${safe(t(c.task))}</p>`;
if(!seen)h+=`<p class="quest-locked">${safe(t(['ارجع للغرفة وابحث عن الدليل المطلوب أولًا.','Return to the room and investigate the required object first.']))}</p>`;
else if(c.answer&&!solved){h+=`<div class="quest-actions"><input id="questAnswer" aria-label="Puzzle answer" autocomplete="off" placeholder="${lang()===0?'الإجابة':'Your answer'}"><button id="questSolve">${lang()===0?'تحقق':'CHECK'}</button><button id="questHint">${lang()===0?'تلميح':'HINT'}</button></div><p id="questFeedback" aria-live="polite"></p>`}
else if(finish){h+=`<h2>03:18</h2><p>${safe(t(['شكرًا لأنك تذكّرت. انتهت القضية، لكن الباب ما زال يحمل أسراره.','Thank you for remembering. The case is closed, though the door keeps its secrets.']))}</p>`}
else h+=`<div class="quest-actions"><button id="questNext">${progress.chapter===11?(lang()===0?'إرسال الرسالة الأخيرة':'SEND THE LAST MESSAGE'):(lang()===0?'متابعة التحقيق ←':'CONTINUE INVESTIGATION →')}</button></div>`;
h+=`<div class="quest-actions"><button id="questLeave">${lang()===0?'↓ العودة إلى الغرفة':'↓ RETURN TO ROOM'}</button></div></div>`;terminal.innerHTML=h;
$('questLeave').onclick=()=>{$('phoneOverlay').classList.add('hidden')};
if($('questHint'))$('questHint').onclick=()=>{$('questFeedback').textContent=t(c.hint)};
if($('questSolve'))$('questSolve').onclick=()=>{const val=$('questAnswer').value.trim().toUpperCase().replace(/[\s:,-]/g,'');if(val===c.answer){progress.solved.push(progress.chapter);save();render()}else $('questFeedback').textContent=t(['الإجابة غير صحيحة؛ قارني الأدلة أو افتحي التلميح.','Not quite. Compare the evidence or open the hint.'])};
if($('questNext'))$('questNext').onclick=()=>{if(progress.chapter===11){progress.finished=true;save();render();$('questBanner').textContent='03:18 · '+t(['شكرًا لأنك تذكّرت.','Thank you for remembering.']);document.querySelector('#roomName').textContent='03:18 AM';return}progress.chapter++;save();showBanner();render();$('phoneOverlay').classList.add('hidden');};
}
window.addEventListener('emma-interact',e=>{const id=e.detail.id,c=stages[progress.chapter];if(id==='phone'){if([1,5,11].includes(progress.chapter)&&!progress.seen.includes(progress.chapter)){progress.seen.push(progress.chapter);save()}render();return}if(progress.chapter===0&&id==='note'){progress.seen.push(0);save();showBanner();return}if(progress.chapter===2&&id==='hall'||progress.chapter===3&&id==='photo'||progress.chapter===4&&id==='clock'||progress.chapter===6&&id==='photo'||progress.chapter===7&&id==='radio-tuned'||progress.chapter===8&&id==='drawer-open'||progress.chapter===9&&id==='letter'||progress.chapter===10&&id==='letter-taken'){if(!progress.seen.includes(progress.chapter)){progress.seen.push(progress.chapter);save();showBanner();render()}}});
// The phone must be picked up at each phone-only stage; later stages can be read once opened.
const oldPhone=$('putPhone').onclick;$('putPhone').onclick=()=>{$('phoneOverlay').classList.add('hidden')};
// The radio/drawer physical combination and narrative combination use the same answers.
function ensureOpen(){const c=stages[progress.chapter];if([1,5,11].includes(progress.chapter)&&!progress.seen.includes(progress.chapter)){progress.seen.push(progress.chapter);save()}render()}
$('phoneOverlay').addEventListener('transitionend',ensureOpen);document.addEventListener('click',e=>{if(e.target.closest('#phoneOverlay'))return;if(!$('phoneOverlay').classList.contains('hidden'))ensureOpen()});
// Refresh on language change, preserve existing in-world settings.
$('langEN').addEventListener('click',()=>{showBanner();render()});$('langAR').addEventListener('click',()=>{showBanner();render()});
$('restartGame').addEventListener('click',()=>{if(confirm(localStorage.getItem('phone3d-lang')==='ar'?'إعادة الفصول الاثني عشر من البداية؟':'Restart all twelve chapters?'))localStorage.removeItem(KEY)},true);
// Opening the phone must never require leaving the 3D world or loading the legacy page.
showBanner();render();
})();
