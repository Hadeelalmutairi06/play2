'use strict';
const $=id=>document.getElementById(id), KEY='tptky_complete_v1';
let lang='en';try{lang=localStorage.getItem('tptky_lang')==='ar'?'ar':'en'}catch(e){}
const UI_AR={"COMPLETE STORY": "القصة الكاملة", "THE CASE FILE": "ملف القضية", "YOUR FINDINGS": "الأدلة المكتشفة", "OBJECTIVE": "الهدف", "AN INTERACTIVE MYSTERY · 2006": "قصة غموض تفاعلية · 2006", "Some things<br/>should stay <em>lost.</em>": "بعض الأشياء<br/>كان ينبغي أن تبقى <em>مفقودة.</em>", "Someone left a phone behind.<br/>It has been waiting for you.": "ترك أحدهم هاتفًا خلفه.<br/>ومنذ ذلك الوقت وهو ينتظرك.", "CLICK THE PHONE TO WAKE IT": "اضغط على الهاتف لتشغيله", "A PHONE FOUND IN A ROOM THAT NO ONE REMEMBERS.": "هاتف عُثر عليه في غرفة لا يتذكرها أحد.", "✧ NEED A HINT?": "✧ هل تحتاج إلى تلميح؟", "◌ Progress saves automatically": "◌ يُحفظ التقدم تلقائيًا", "ALL SIX CHAPTERS — AN INTERACTIVE MYSTERY": "الفصول الستة — قصة غموض تفاعلية", "DON'T FORGET": "لا تنسَ", "JUNE 17, 2006": "17 يونيو 2006", "? HELP": "؟ مساعدة", "▤ CHAPTERS": "▤ الفصول", "↻ RESTART": "↻ إعادة البداية", "♫ SOUND OFF": "♫ الصوت مغلق", "♫ SOUND ON": "♫ الصوت يعمل", "No evidence collected yet.": "لم تُجمع أدلة بعد.", "CLICK THE PHONE TO CONTINUE": "اضغط على الهاتف للمتابعة", "✓ Progress saved on this device": "✓ حُفظ التقدم على هذا الجهاز", "! Local storage is unavailable": "! الحفظ المحلي غير متاح", "A SMALL HINT": "تلميح صغير", "LOOK CLOSER": "انظر بتمعّن", "GOT IT": "حسنًا", "HOW TO PLAY": "طريقة اللعب", "CONTINUE": "متابعة", "EVIDENCE FOUND": "تم العثور على دليل", "CHAPTERS": "الفصول", "CASE FILE": "ملف القضية", "LOCKED": "مقفل", "4-DIGIT PIN": "رمز PIN من أربعة أرقام", "Enter four digits": "أدخل أربعة أرقام", "MESSAGE ORDER": "ترتيب الرسائل", "RECORDING CODE": "رمز التسجيل", "Four digits": "أربعة أرقام", "WHO CONTRADICTS THE RECEIPT?": "أي عبارة تناقض الإيصال؟", "Select a statement": "اختر عبارة", "TIMELINE": "الخط الزمني", "Four letters, e.g. ABCD": "أربعة حروف مثل ABCD", "Choose an answer": "اختر إجابة", "Noah was at the shop until 03:17": "نوح كان في المتجر حتى 03:17", "Unknown called at 03:16": "اتصل المجهول الساعة 03:16", "Emma wrote at 03:17": "كتبت إيما الساعة 03:17", "UNLOCK →": "افتح ←", "✧ HINT": "✧ تلميح", "REPLAY FROM FINAL CHOICE": "تجربة نهاية أخرى", "RESTART STORY": "إعادة القصة", "Not quite. Recheck the evidence or request a hint.": "الإجابة غير صحيحة. راجع الأدلة أو اطلب تلميحًا.", "PUZZLE SOLVED": "تم حل اللغز!", "Replay unlocked chapters. Your evidence and ending history remain saved.": "أعد لعب الفصول المفتوحة. ستبقى الأدلة والاختيارات محفوظة.", "Restart the entire story? This clears your saved clues and choices.": "هل تريد إعادة القصة؟ ستُحذف الأدلة والاختيارات المحفوظة.", "WELCOME BACK · PROGRESS RESTORED": "مرحبًا بعودتك · استُعيد تقدمك", "Follow the story and investigate.": "تابع القصة وابحث عن الأدلة.", "Ending discovered. Replay to explore another.": "اكتُشفت نهاية. أعد اللعب لتجربة أخرى.", "Explore the room, read the dialogue and choose a response. Open CHAPTERS to revisit unlocked sections.": "استكشف الغرفة واقرأ الحوار واختر ردًا. افتح الفصول للعودة إلى المشاهد السابقة.", "Click the phone to begin. Use the story panel to read and make choices. Inspect the wall note and photograph. Solve five puzzles to unlock all six chapters. The phone keypad works for the first PIN. Your progress saves locally. CHAPTERS lets you replay unlocked chapters.": "اضغط على الهاتف للبدء. اقرأ القصة واختر ردودك، وافحص الورقة والصورة. حلّ خمسة ألغاز لفتح الفصول الستة. لوحة أزرار الهاتف تعمل في لغز PIN الأول. يُحفظ تقدمك تلقائيًا، ويمكنك إعادة الفصول المفتوحة."};
function tr(s){return lang==='ar'?(UI_AR[s]||s):s}
function sceneText(sc,id){return lang==='ar'?(AR_STORY.scenes[id]||sc):sc}
function sceneTitle(id){return sceneText(STORY.scenes[id],id).title}
function chapterTitle(i){return lang==='ar'?AR_STORY.chapters[i][0]:STORY.chapters[i][1]}
function chapterDescription(i){return lang==='ar'?AR_STORY.chapters[i][1]:STORY.chapters[i][2]}
function evidenceText(id,i){return lang==='ar'?AR_STORY.evidence[id][i]:STORY.evidence[id][i]}
function updateStatic(){document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';$('langBtn').textContent=lang==='ar'?'English':'العربية';let mappings=[['.chapter-tag','COMPLETE STORY'],['.scene-copy .eyebrow','AN INTERACTIVE MYSTERY · 2006'],['.scene-copy h1','Some things<br/>should stay <em>lost.</em>'],['.scene-copy p','Someone left a phone behind.<br/>It has been waiting for you.'],['.floor-caption','A PHONE FOUND IN A ROOM THAT NO ONE REMEMBERS.'],['.wall-note span',"DON'T FORGET"],['.polaroid small','JUNE 17, 2006'],['.sidebar .side-label:nth-of-type(1)','THE CASE FILE'],['#hintBtn','✧ NEED A HINT?'],['footer','ALL TWELVE CHAPTERS — AN INTERACTIVE MYSTERY']];for(let [sel,en] of mappings){let el=document.querySelector(sel);if(!el)continue;if(sel==='footer'){el.innerHTML='THE PHONE THAT KNOWS YOU <span>✳</span> '+tr(en)}else if(sel==='.sidebar .side-label:nth-of-type(1)'){el.firstChild.textContent=tr(en)+' '}else if(sel==='.scene-copy h1'||sel==='.scene-copy p')el.innerHTML=tr(en);else el.textContent=tr(en)}document.querySelectorAll('.sidebar .side-label').forEach((el,i)=>{if(i===0)el.firstChild.textContent=tr('THE CASE FILE')+' ';if(i===1)el.textContent=tr('YOUR FINDINGS');if(i===2)el.textContent=tr('OBJECTIVE')});$('helpBtn').textContent=tr('? HELP');$('chaptersBtn').textContent=tr('▤ CHAPTERS');$('restartBtn').textContent=tr('↻ RESTART')}
const fresh=()=>({scene:'start',chapter:0,evidence:[],choices:[],solved:[],sound:true,ending:null,pin:'',drafts:{},attempts:0,fileStage:0});
let state=fresh(), audioCtx,toastTimer;
let cinematicTimer=0, cinematicToken=0;
function chapterBeat(ch){const ar=['الهاتف يستيقظ…','رسالة حُذفت، لكنها لم تختفِ.','هناك صوت خلف التشويش.','أحدهم يكذب بشأن تلك الليلة.','الساعة لم تتوقف مصادفة.','المكالمة الأخيرة…','ظهرت صورة جديدة…','إشارة من الماضي…','ما الذي يخفيه الدرج؟','شاهد لم يُفصح عن الحقيقة…','رسالة لم تصل…','حان وقت الإرسال…'];const en=['THE PHONE IS WAKING…','DELETED DOES NOT MEAN GONE.','THERE IS A VOICE IN THE STATIC.','SOMEONE LIED ABOUT THAT NIGHT.','THE CLOCK DID NOT STOP BY ACCIDENT.','THE FINAL CALL…','ANOTHER PHOTOGRAPH…','A SIGNAL FROM THE PAST…','WHAT IS IN THE DRAWER?','THE WITNESS REMEMBERS…','THE UNSENT LETTER…','THE LAST SIGNAL…'];return (lang==='ar'?ar:en)[ch]||''}
function cinematicMoment(ch){const el=$('cinemaCaption');if(!el)return;clearTimeout(cinematicTimer);el.textContent=chapterBeat(ch);el.classList.add('visible');$('phone').classList.add('scene-change');cinematicTimer=setTimeout(()=>{el.classList.remove('visible');$('phone').classList.remove('scene-change')},1750)}
try{let v=JSON.parse(localStorage.getItem(KEY)||'null');if(v&&STORY.scenes[v.scene]&&Array.isArray(v.evidence)&&Array.isArray(v.solved))state={...fresh(),...v}}catch(e){}
function save(){try{localStorage.setItem(KEY,JSON.stringify(state));$('saveStatus').textContent=tr('✓ Progress saved on this device')}catch(e){$('saveStatus').textContent=tr('! Local storage is unavailable')}}
/* Diegetic effects supplied by the project owner. Browser audio starts on interaction. */
const FX = Object.fromEntries(Object.entries({
  gong:'gong.mp3', tape:'tape.mp3', vibration:'vibration.mp3',
  notification:'notification.mp3', ringtone:'ringtone.mp3'
}).map(([name,file])=>{const audio=new Audio('assets/audio/'+file);audio.preload='auto';return [name,audio]}));
const FX_VOLUME={gong:.22,tape:.19,vibration:.42,notification:.37,ringtone:.28};
let fxLast={};
function playFx(name){
  if(!state.sound||!FX[name])return;
  const now=performance.now();if(now-(fxLast[name]||-10000)<850)return;fxLast[name]=now;
  const a=FX[name];a.pause();a.currentTime=0;a.volume=FX_VOLUME[name]||.3;
  a.play().catch(err=>{console.warn('Audio playback:',name,err);if(err.name!=='NotAllowedError')toast(lang==='ar'?'تعذّر تشغيل المؤثر الصوتي. تحقّق من ملفات الصوت.':'Sound could not play. Check the audio files.');});
  if(name==='tape'||name==='ringtone')setTimeout(()=>{if(!a.paused){a.pause();a.currentTime=0}},name==='tape'?3400:5000);
}
function stopFx(){Object.values(FX).forEach(a=>{a.pause();a.currentTime=0})}
function sceneFx(id){
  if(id==='first'||id==='chatDone'||id==='final')playFx('notification');
  if(id==='replyA'||id==='replyB'||id==='replyC'||id==='callYes'||id==='callNo')playFx('ringtone');
  if(id==='recording'||id==='recordingDone'||id==='radio'||id==='radioDone')playFx('tape');
  if(id==='timelineDone'||id==='truth'||id==='silence'||id==='loop'||id==='letterRoom')playFx('gong');
  if(id==='pin'||id==='log'||id==='logDone'||id==='afterPhoto'||id==='drawerDone')playFx('vibration');
}
function tone(f=500){if(!state.sound)return;try{audioCtx=audioCtx||new(window.AudioContext||window.webkitAudioContext)();let o=audioCtx.createOscillator(),g=audioCtx.createGain();o.type='sine';o.frequency.value=f;g.gain.setValueAtTime(.035,audioCtx.currentTime);g.gain.exponentialRampToValueAtTime(.001,audioCtx.currentTime+.11);o.connect(g);g.connect(audioCtx.destination);o.start();o.stop(audioCtx.currentTime+.11)}catch(e){}}
function toast(s){$('toast').textContent=s;$('toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('show'),2500)}
function escapeHTML(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function addEvidence(id){if(id&&!state.evidence.includes(id)){state.evidence.push(id);toast((lang==='ar'?'✧ دليل: ':'✧ EVIDENCE: ')+evidenceText(id,0));tone(770)}}
function go(id){let scene=STORY.scenes[id];if(!scene)return;const previous=STORY.scenes[state.scene],chapterChanged=previous&&previous.chapter!==scene.chapter;state.scene=id;state.chapter=Math.max(state.chapter,scene.chapter);addEvidence(scene.evidence);if(scene.ending)state.ending=scene.ending;save();render();if(id==='pin'&&previous?.chapter===0&&state.choices.length===0){closePanel();setTimeout(()=>{if(state.scene==='pin')openPanel()},850)}else if(chapterChanged){closePanel();cinematicMoment(scene.chapter);const token=++cinematicToken;setTimeout(()=>{if(token===cinematicToken&&state.scene===id)openPanel()},1050)}else openPanel();if(id==='pin'||chapterChanged||id==='callYes'||id==='callNo'||id==='afterPhoto'||id==='lastSignal'){const phone=$('phone');phone.classList.remove('phone-buzz');void phone.offsetWidth;phone.classList.add('phone-buzz');setTimeout(()=>phone.classList.remove('phone-buzz'),800)}tone(chapterChanged?730:540);sceneFx(id)}
function render(){let sc=STORY.scenes[state.scene],ch=STORY.chapters[sc.chapter],localized=sceneText(sc,state.scene);$('phone').classList.toggle('awake',state.scene!=='start');$('chapterCount').textContent=ch[0]+' / '+String(STORY.chapters.length-1).padStart(2,'0');document.querySelector('.chapter-tag').textContent=(lang==='ar'?'الفصل ':'CHAPTER ')+ch[0];document.querySelector('.sidebar h2').innerHTML=escapeHTML(chapterTitle(sc.chapter).replace(' ','<br>')).replace('&lt;br&gt;','<br>');$('storyDescription').textContent=chapterDescription(sc.chapter);$('objective').textContent=sc.puzzle?lang==='ar'?'حلّ لغز '+localized.title+'.':'Solve the '+sc.title.toLowerCase()+' puzzle.':sc.ending?(lang==='ar'?'انتهت القصة، وقد حُفظت النهاية.':'The story has ended. Your ending is saved.'):tr('Follow the story and investigate.');$('sceneInstruction').textContent=state.scene==='start'?(lang==='ar'?'اضغط على الهاتف المغلق لفتحه':'CLICK THE CLOSED PHONE TO OPEN IT'):(lang==='ar'?'اضغط على شاشة الهاتف لمتابعة القصة':'CLICK THE PHONE SCREEN TO CONTINUE');$('chaptersBtn').disabled=!!state.ending;$('evidence').innerHTML=state.evidence.length?state.evidence.map(id=>'<div class="evidence-item">✧ '+escapeHTML(evidenceText(id,0))+'<small>'+escapeHTML(evidenceText(id,1))+'</small></div>').join(''):'<p class="empty-evidence">'+tr('No evidence collected yet.')+'</p>';$('inventory').textContent=(lang==='ar'?'الفصول المفتوحة: ':'CHAPTERS UNLOCKED: ')+(state.chapter+1)+'/'+STORY.chapters.length+' · '+(lang==='ar'?'الألغاز المحلولة: ':'PUZZLES SOLVED: ')+state.solved.length+'/8';let title=escapeHTML(localized.title),line=escapeHTML(localized.text.split('\n')[0]);$('phoneScreen').innerHTML='<div class="screen-head"><span>◖◖◖ ORBIT</span><span>03:17 ▰</span></div><div class="screen-title">'+title+'</div><div class="screen-body">'+line+'</div><div class="screen-foot"><span>OPEN</span><span>BACK</span></div>';$('soundBtn').textContent=tr(state.sound?'♫ SOUND ON':'♫ SOUND OFF');$('soundBtn').setAttribute('aria-pressed',String(state.sound));save()}
function closePanel(){$('gamePanel').classList.add('hidden');$('gamePanel').innerHTML=''}
function openPanel(){let sc=STORY.scenes[state.scene],localized=sceneText(sc,state.scene),panel=$('gamePanel');panel.classList.remove('hidden');let markup='<section class="game-card" role="dialog" aria-label="'+escapeHTML(localized.title)+'"><button class="close-x" data-close aria-label="'+(lang==='ar'?'إغلاق':'Close story panel')+'">×</button><div class="meta">CHAPTER '+String(sc.chapter).padStart(2,'0')+' · '+escapeHTML(chapterTitle(sc.chapter))+'</div><h2>'+escapeHTML(localized.title)+'</h2><p>'+escapeHTML(localized.text)+'</p>';
if(sc.puzzle){let specs={pin:[tr('4-DIGIT PIN'),tr('Enter four digits'),'numeric'],chat:[tr('MESSAGE ORDER'),'e.g. 10 12 16 17','text'],recording:[tr('RECORDING CODE'),tr('Four digits'),'numeric'],log:[tr('WHO CONTRADICTS THE RECEIPT?'),tr('Select a statement'),'select'],timeline:[tr('TIMELINE'),tr('Four letters, e.g. ABCD'),'text'],radio:[lang==='ar'?'التردد اللاسلكي':'RADIO FREQUENCY',lang==='ar'?'ستة أرقام':'Six digits','numeric'],drawer:[lang==='ar'?'رمز الدرج':'DRAWER CODE',lang==='ar'?'أربعة أرقام':'Four digits','numeric'],witness:[lang==='ar'?'وقت سماع الجرس':'BELL TIME',lang==='ar'?'أدخل الوقت':'Enter time','numeric']},sp=specs[sc.puzzle];markup+='<form id="puzzleForm"><label for="puzzleInput" class="meta">'+sp[0]+'</label>'+(sp[2]==='select'?'<select id="puzzleInput"><option value="">'+tr('Choose an answer')+'</option><option value="noah">'+tr('Noah was at the shop until 03:17')+'</option><option value="unknown">'+tr('Unknown called at 03:16')+'</option><option value="emma">'+tr('Emma wrote at 03:17')+'</option></select>':'<input id="puzzleInput" type="text" autocomplete="off" placeholder="'+sp[1]+'" maxlength="24" inputmode="'+(sp[2]==='numeric'?'numeric':'text')+'"/>')+'<div id="puzzleError" class="error" role="status"></div><div class="row-actions"><button type="submit">'+tr('UNLOCK →')+'</button><button type="button" id="puzzleHint">'+tr('✧ HINT')+'</button></div></form>'}
if(state.scene==='static')markup+=fileExplorerMarkup();
if(state.scene==='log')markup+=callLogMarkup();
if(sc.choices){markup+='<div class="choices">'+sc.choices.map(([label,id],i)=>'<button data-next="'+id+'">'+(i+1)+'. '+escapeHTML(lang==='ar'?(localized.choices?.[i]||label):label)+'</button>').join('')+'</div>'}if(sc.ending)markup+='<p class="ending-seal">'+(lang==='ar'?'انتهت القصة. حُفظت النهاية.':'THE END · Your ending is saved.')+'</p>';markup+='</section>';panel.innerHTML=markup;
panel.querySelector('[data-close]').onclick=closePanel;if(state.scene==='static')bindFileExplorer(panel);if(state.scene==='log')bindCallLog(panel);panel.querySelectorAll('[data-next]').forEach(b=>b.onclick=()=>{state.choices.push({from:state.scene,to:b.dataset.next});go(b.dataset.next)});if(sc.puzzle){const field=$('puzzleInput');if(state.scene==='log'&&!state.callLogViewed){$('puzzleForm').hidden=true;} field.value=(state.drafts||{})[state.scene]||'';field.addEventListener('input',()=>{state.drafts=state.drafts||{};state.drafts[state.scene]=field.value;save()});$('puzzleForm').onsubmit=e=>{e.preventDefault();solve(sc.puzzle,$('puzzleInput').value)};$('puzzleHint').onclick=()=>{$('puzzleError').textContent=(lang==='ar'?(localized.hint||sc.hint):sc.hint);$('puzzleError').className='success'}}let focus=panel.querySelector('#puzzleInput')||panel.querySelector('[data-next]')||panel.querySelector('[data-close]');if(focus)focus.focus({preventScroll:true})}
/* Interactive, persisted file investigation. No narrative auto-deletion. */
function fileExplorerMarkup(){
 const ar=lang==='ar',stage=state.fileStage||0;
 const title=ar?'ذاكرة الهاتف / التسجيلات':'PHONE MEMORY / RECORDINGS';
 const original=ar?'ملف صوتي تالف · 03:17':'Damaged audio · 03:17';
 const restored=ar?'ملف مجهول · لا يوجد تاريخ':'Unknown file · no timestamp';
 const intro=stage===0?(ar?'اختر الملف لفحصه، أو احذفه من ذاكرة الهاتف.':'Select the file to inspect it, or delete it from phone memory.'):
 stage===1?(ar?'هل تريد حذف الملف نهائيًا؟':'Delete this file permanently?'):
 stage===2?(ar?'حُذف الملف. انتظر...':'File deleted. Wait...'):
 (ar?'ظهر ملف لم يكن موجودًا قبل الحذف.':'A file that was not here before has appeared.');
 return '<div class="file-explorer" aria-live="polite"><div class="file-path">▤ '+title+'</div><p class="file-help">'+intro+'</p>'+
 (stage<=1?'<button class="file-tile" id="fileInspect" type="button"><span class="file-icon">♫</span><span><strong>0317.wav</strong><small>'+original+'</small></span></button>':
 stage===2?'<div class="file-empty">'+(ar?'المجلد فارغ':'Folder empty')+'</div>':
 '<button class="file-tile purple-file" id="filePlay" type="button"><span class="file-icon">♫</span><span><strong>LISTEN_ALONE.wav</strong><small>'+restored+'</small></span></button>')+
 (stage===0?'<div class="file-actions"><button type="button" id="fileDelete">'+(ar?'حذف الملف':'Delete file')+'</button></div>':'')+
 (stage===1?'<div class="file-actions"><button type="button" id="fileCancel">'+(ar?'إلغاء':'Cancel')+'</button><button type="button" id="fileConfirm">'+(ar?'تأكيد الحذف':'Confirm deletion')+'</button></div>':'')+
 (stage===3?'<p class="file-warning">'+(ar?'لم تتم استعادة هذا الملف من سلة المحذوفات.':'This file was not restored from the recycle bin.')+'</p>':'')+
 '</div>';
}
function bindFileExplorer(panel){
 const on=(id,fn)=>{const el=panel.querySelector('#'+id);if(el)el.addEventListener('click',fn)};
 const redraw=()=>{save();openPanel()};
 on('fileInspect',()=>toast(lang==='ar'?'الملف تالف. تعذّر تشغيله.':'File corrupted. Playback failed.'));
 on('fileDelete',()=>{state.fileStage=1;redraw()});
 on('fileCancel',()=>{state.fileStage=0;redraw()});
 on('fileConfirm',()=>{state.fileStage=2;redraw();playFx('vibration');$('phone').classList.add('phone-buzz');setTimeout(()=>{$('phone').classList.remove('phone-buzz');if(state.scene==='static'&&state.fileStage===2){state.fileStage=3;save();openPanel();playFx('notification')}},1250)});
 on('filePlay',()=>{playFx('tape');state.choices.push({from:'static',to:'recording'});save();go('recording')});
}
/* Interactive call log: examine the calls and the receipt before answering. */
function callLogMarkup(){
 const ar=lang==='ar',v=state.callLogViewed||{};
 const calls=[['noah','نوح','NOAH','03:10','↗'],['unknown','رقم مجهول','UNKNOWN','03:16','↙'],['emma','إيما','EMMA','03:17','✕']];
 const rows=calls.map(([id,arabic,english,time,icon])=>'<button class="call-row" type="button" data-call="'+id+'"><span class="call-icon">'+icon+'</span><span><strong>'+(ar?arabic:english)+'</strong><small>'+(ar?'17 يونيو 2006':'JUNE 17, 2006')+'</small></span><time>'+time+'</time></button>').join('');
 const details=v.selected==='noah'?(ar?'مكالمة صادرة إلى نوح، مدتها 38 ثانية.':'Outgoing call to Noah, 38 seconds.') :v.selected==='unknown'?(ar?'مكالمة واردة من رقم مخفي، مدتها 12 ثانية.':'Incoming hidden number, 12 seconds.') :v.selected==='emma'?(ar?'مكالمة فائتة من إيما.':'Missed call from Emma.') :'';
 return '<div class="call-log"><div class="file-path">☏ '+(ar?'سجل المكالمات':'CALL HISTORY')+'</div><p class="file-help">'+(ar?'افحص المكالمات ثم افتح الإيصال لتتحقق من رواية نوح.':'Inspect the calls, then open the receipt to verify Noah’s account.')+'</p>'+rows+(details?'<div class="call-detail">'+details+'</div>':'')+'<button class="receipt-toggle" id="showReceipt" type="button">▤ '+(ar?'افحص إيصال المتجر':'INSPECT SHOP RECEIPT')+'</button>'+(v.receipt?'<div class="shop-receipt"><b>'+(ar?'إيصال المتجر':'SHOP RECEIPT')+'</b><br>17 / 06 / 2006<br>'+(ar?'وقت مغادرة نوح:':'NOAH LEFT AT:')+' <strong>03:12</strong></div>':'')+'<p class="file-help">'+(ar?'يُفتح سؤال التحقيق بعد فحص إحدى المكالمات والإيصال.':'The investigation question unlocks after viewing a call and the receipt.')+'</p></div>';
}
function bindCallLog(panel){
 const redraw=()=>{save();openPanel()};
 panel.querySelectorAll('[data-call]').forEach(b=>b.onclick=()=>{state.callLogViewed=state.callLogViewed||{};state.callLogViewed.selected=b.dataset.call;redraw()});
 panel.querySelector('#showReceipt').onclick=()=>{state.callLogViewed=state.callLogViewed||{};state.callLogViewed.receipt=true;redraw()};
 const v=state.callLogViewed||{};const form=panel.querySelector('#puzzleForm');if(form)form.hidden=!(v.selected&&v.receipt);
}
function solve(type,value){let norm=value.toLowerCase().replace(/[^a-z0-9]/g,'');let answers={pin:'0317',chat:'10121617',recording:'1906',log:'noah',timeline:'cdab',radio:'200621',drawer:'1717',witness:'0312'},next={pin:'first',chat:'chatDone',recording:'recordingDone',log:'logDone',timeline:'timelineDone',radio:'radioDone',drawer:'drawerDone',witness:'witnessDone'};if(norm!==answers[type]){state.attempts++;save();$('puzzleError').className='error';$('puzzleError').textContent=tr('Not quite. Recheck the evidence or request a hint.');tone(190);return}if(!state.solved.includes(type))state.solved.push(type);state.pin='';if(state.drafts)delete state.drafts[state.scene];toast(tr('PUZZLE SOLVED'));go(next[type])}
function restart(){
  const wasPanelOpen=!$('gamePanel').classList.contains('hidden');
  closePanel();
  $('dialogEyebrow').textContent=lang==='ar'?'قرار مهم':'A NEW BEGINNING';
  $('dialogTitle').textContent=lang==='ar'?'إعادة القصة من البداية؟':'Restart the story?';
  $('dialogText').textContent=lang==='ar'?'تقدمك محفوظ الآن. إذا اخترت إعادة البداية، فستُحذف الأدلة والقرارات الحالية فقط. وإذا اخترت المتابعة، فستعود إلى الموضع الذي توقفت عنده.':'Your progress is safely saved. Restarting erases your current clues and choices. Continue keeps everything exactly where you stopped.';
  const extra=$('dialogExtra');
  extra.innerHTML='<div class="modal-actions"><button type="button" class="secondary" id="keepProgress"></button><button type="button" id="confirmRestart"></button></div>';
  $('keepProgress').textContent=lang==='ar'?'متابعة من حيث توقفت':'Keep my progress';
  $('confirmRestart').textContent=lang==='ar'?'نعم، ابدأ من جديد':'Yes, restart';
  $('dialogAction').style.display='none';
  $('dialogBackdrop').classList.remove('hidden');
  $('keepProgress').onclick=()=>{$('dialogBackdrop').classList.add('hidden');$('dialogAction').style.display='';if(wasPanelOpen)openPanel()};
  $('confirmRestart').onclick=()=>{const sound=state.sound;state=fresh();state.sound=sound;stopFx();save();$('dialogBackdrop').classList.add('hidden');$('dialogAction').style.display='';$('dialogExtra').innerHTML='';go('start')};
  $('keepProgress').focus();
}
function showChapters(){if(state.ending){toast(lang==='ar'?'اكتملت القصة. لإعادة التجربة استخدم زر إعادة البداية.':'The story is complete. Use Restart to begin again.');return}let items=STORY.chapters.map((ch,i)=>'<button '+(i>state.chapter?'disabled':'data-jump="'+i+'"')+'>'+ch[0]+' — '+escapeHTML(chapterTitle(i))+(i>state.chapter?(lang==='ar'?' · مقفل':' · LOCKED'):'')+'</button>').join('');$('gamePanel').classList.remove('hidden');$('gamePanel').innerHTML='<section class="game-card" role="dialog" aria-label="Chapters"><button class="close-x" data-close>×</button><div class="meta">CASE FILE</div><h2>CHAPTERS</h2><p class="muted">Replay unlocked chapters. Your evidence and ending history remain saved.</p><div class="choices">'+items+'</div></section>';$('gamePanel').querySelector('[data-close]').onclick=closePanel;$('gamePanel').querySelectorAll('[data-jump]').forEach(b=>b.onclick=()=>go(['start','chat','recording','log','timeline','final','afterPhoto','radio','drawer','witness','letterRoom','lastSignal'][Number(b.dataset.jump)]))}
$('wallNote').onclick=()=>{if(state.scene==='start'||state.scene==='note'||state.scene==='photo')go('note');else{addEvidence('note');render();toast(lang==='ar'?'03:17 — الورقة':'03:17 — THE NOTE')}};$('photoClue').onclick=()=>{if(['start','note','photo'].includes(state.scene))go('photo');else{addEvidence('photo');render();toast(tr('JUNE 17, 2006'))}};for(let id of ['wallNote','photoClue'])$(id).onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();$(id).click()}};
$('phoneLid').onclick=()=>{if(state.scene==='start'){if(state.sound)playFx('vibration');go('pin');return}openPanel()};$('selectKey').onclick=()=>{if(state.scene==='start')return;openPanel()};$('leftKey').onclick=()=>{if(state.scene!=='start')openPanel()};$('rightKey').onclick=()=>{if(state.scene!=='start')closePanel()};$('answerKey').onclick=()=>{if(state.scene==='replyA'||state.scene==='replyB'||state.scene==='replyC')go('callYes');else openPanel()};$('hangKey').onclick=()=>{if(state.scene==='replyA'||state.scene==='replyB'||state.scene==='replyC')go('callNo');else closePanel()};'123456789*0#'.split('').forEach(n=>{let b=document.createElement('button');b.className='digit';b.textContent=n;b.setAttribute('aria-label','Key '+n);b.onclick=()=>{if(state.scene==='start')return;if(state.scene==='pin'){if(n==='*')state.pin='';else if(n==='#'){solve('pin',state.pin);return}else if(state.pin.length<4)state.pin+=n;save();toast('PIN: '+('●'.repeat(state.pin.length)));if(state.pin.length===4)solve('pin',state.pin)}else openPanel()};$('digits').append(b)});
$('langBtn').onclick=()=>{lang=lang==='en'?'ar':'en';try{localStorage.setItem('tptky_lang',lang)}catch(e){}updateStatic();render();if(!$('gamePanel').classList.contains('hidden'))openPanel();if(!$('dialogBackdrop').classList.contains('hidden'))$('dialogBackdrop').classList.add('hidden')};$('soundBtn').onclick=()=>{state.sound=!state.sound;if(!state.sound)stopFx();render();tone(800);if(state.sound)playFx('notification')};$('hintBtn').onclick=()=>{let sc=STORY.scenes[state.scene];$('dialogEyebrow').textContent=tr('A SMALL HINT');$('dialogTitle').textContent=tr('LOOK CLOSER');$('dialogText').textContent=(lang==='ar'?(sceneText(sc,state.scene).hint||sc.hint):sc.hint)||tr('Explore the room, read the dialogue and choose a response. Open CHAPTERS to revisit unlocked sections.');$('dialogAction').style.display='';$('dialogExtra').innerHTML='';$('dialogAction').textContent=tr('GOT IT');$('dialogBackdrop').classList.remove('hidden')};$('helpBtn').onclick=()=>{$('dialogEyebrow').textContent=tr('HOW TO PLAY');$('dialogTitle').textContent='THE PHONE THAT KNOWS YOU';$('dialogText').textContent=tr('Open the folded phone, inspect the note and photograph, then enter the PIN. Follow twelve chapters and solve eight puzzles. Your progress saves locally. Restarting requires confirmation.');$('dialogAction').style.display='';$('dialogExtra').innerHTML='';$('dialogAction').textContent=tr('CONTINUE');$('dialogBackdrop').classList.remove('hidden')};$('dialogClose').onclick=$('dialogAction').onclick=()=>{$('dialogBackdrop').classList.add('hidden');$('dialogAction').style.display='';$('dialogExtra').innerHTML=''};$('dialogBackdrop').onclick=e=>{if(e.target===$('dialogBackdrop'))$('dialogBackdrop').classList.add('hidden')};$('restartBtn').onclick=restart;$('chaptersBtn').onclick=showChapters;document.addEventListener('keydown',e=>{if(e.key==='Escape'){closePanel();$('dialogBackdrop').classList.add('hidden')}if(state.scene==='pin'&&$('gamePanel').classList.contains('hidden')&&/^[0-9]$/.test(e.key)){state.pin=(state.pin+e.key).slice(-4);toast('PIN: '+'●'.repeat(state.pin.length));if(state.pin.length===4)solve('pin',state.pin)}});
updateStatic();render();if(state.scene!=='start'){toast(tr('WELCOME BACK · PROGRESS RESTORED'));openPanel()}


/* User-provided rain recording. Separate from game sound effects. */
const rainAudio = new Audio('assets/audio/rain.mp3');
rainAudio.loop = true;
rainAudio.preload = 'none';
rainAudio.volume = 0;
let rainEnabled = false;
let rainFade = null;
function rainLabel(){
  const b = $('rainBtn');
  b.textContent = rainEnabled ? (lang === 'ar' ? '☂ إيقاف المطر' : '☂ RAIN ON') : (lang === 'ar' ? '☂ تشغيل المطر' : '☂ RAIN OFF');
  b.setAttribute('aria-pressed', String(rainEnabled));
}
function fadeRain(target, pauseAtEnd = false){
  if(rainFade) cancelAnimationFrame(rainFade);
  const startVolume = rainAudio.volume;
  const started = performance.now();
  const duration = 850;
  function tick(now){
    const t = Math.min(1, (now - started) / duration);
    rainAudio.volume = Math.max(0, Math.min(1, startVolume + (target - startVolume) * t));
    if(t < 1) rainFade = requestAnimationFrame(tick);
    else {rainFade = null; if(pauseAtEnd && !rainEnabled) rainAudio.pause();}
  }
  rainFade = requestAnimationFrame(tick);
}
async function setRain(enabled){
  if(!enabled){rainEnabled = false; fadeRain(0, true); rainLabel(); return;}
  try{
    await rainAudio.play(); // Browsers require a user gesture to begin audio.
    rainEnabled = true;
    fadeRain(0.42);
  }catch(e){
    rainEnabled = false;
    toast(lang === 'ar' ? 'اضغط على زر المطر لتشغيل الصوت' : 'Tap the rain button to play audio');
  }
  rainLabel();
}
$('rainBtn').onclick = () => setRain(!rainEnabled);
$('langBtn').addEventListener('click', rainLabel);
window.addEventListener('pagehide', () => {rainAudio.pause();stopFx()});
rainLabel();

/* Main menu and cinematic entry. No change to STORY or existing save key. */
(function initStartMenu(){
  const $m=id=>document.getElementById(id);
  const menu=$m('startMenu'), curtain=$m('introCurtain');
  let entering=false;
  const hasProgress=()=>state.scene!=='start'||state.chapter>0||state.evidence.length>0||state.solved.length>0||Boolean(state.ending);
  function localizeMenu(){
    const ar=lang==='ar';
    $m('menuKicker').textContent=ar?'قصة غموض تفاعلية · 2006':'AN INTERACTIVE MYSTERY · 2006';
    $m('menuTagline').textContent=ar?'بعض المكالمات لم يكن ينبغي الرد عليها.':'Some calls were never meant to be answered.';
    $m('menuStart').textContent=ar?'▶ ابدأ اللعبة':'▶ START GAME';
    $m('menuContinue').textContent=ar?'متابعة اللعبة':'CONTINUE GAME';
    $m('menuSettings').textContent=ar?'الإعدادات':'SETTINGS';
    $m('menuLanguage').textContent=ar?'English':'العربية';
    $m('menuSound').textContent=state.sound?(ar?'♫ إيقاف الصوت':'♫ SOUND ON'):(ar?'♫ تشغيل الصوت':'♫ SOUND OFF');
    $m('menuRain').textContent=rainEnabled?(ar?'☂ إيقاف المطر':'☂ RAIN ON'):(ar?'☂ تشغيل المطر':'☂ RAIN OFF');
    $m('menuFooter').textContent=ar?'ضع سماعاتك. المطر يتذكّر.':'PUT ON YOUR HEADPHONES. THE RAIN REMEMBERS.';
    $m('menuBtn').textContent=ar?'⌂ القائمة':'⌂ MENU';
    $m('menuContinue').disabled=!hasProgress();
    $m('introCaption').textContent=ar?'17 يونيو 2006 · 03:17 صباحًا':'17 JUNE 2006 · 03:17 AM';
  }
  function showMenu(){
    entering=false;
    closePanel();
    $m('dialogBackdrop').classList.add('hidden');
    $m('dialogAction').style.display='';
    menu.hidden=false;
    menu.classList.remove('dismissed');
    curtain.classList.remove('active');
    document.body.classList.add('menu-active');
    localizeMenu();
    $m('menuStart').focus();
  }
  function enterGame(){
    if(entering)return;
    entering=true;
    localizeMenu();
    // Begin rain from the explicit START/CONTINUE gesture; preserve user choice if already playing.
    if(!rainEnabled)setRain(true);
    if(state.sound)playFx('gong');
    curtain.classList.add('active');
    menu.classList.add('dismissed');
    document.body.classList.remove('menu-active');
    window.setTimeout(()=>{
      menu.hidden=true;
      curtain.classList.remove('active');
      entering=false;
      if(hasProgress())openPanel();
      else $m('phoneLid').focus?.();
    },2200);
  }
  $m('menuStart').onclick=()=>{
    if(hasProgress()){
      // Reuse the existing, localized, explicit restart confirmation; never erase silently.
      menu.classList.add('dismissed');
      document.body.classList.remove('menu-active');
      restart();
      const confirm=$m('confirmRestart'),keep=$m('keepProgress');
      if(confirm)confirm.addEventListener('click',()=>{showMenu();enterGame()},{once:true});
      if(keep)keep.addEventListener('click',showMenu,{once:true});
      $m('dialogClose').addEventListener('click',showMenu,{once:true});
      return;
    }
    enterGame();
  };
  $m('menuContinue').onclick=()=>{if(hasProgress())enterGame()};
  $m('menuSettings').onclick=()=>{$m('menuSettingsPanel').hidden=!$m('menuSettingsPanel').hidden};
  $m('menuLanguage').onclick=()=>{$m('langBtn').click();localizeMenu()};
  $m('menuSound').onclick=()=>{$m('soundBtn').click();localizeMenu()};
  $m('menuRain').onclick=()=>{$m('rainBtn').click();localizeMenu()};
  $m('menuBtn').onclick=showMenu;
  $m('langBtn').addEventListener('click',localizeMenu);
  $m('soundBtn').addEventListener('click',localizeMenu);
  $m('rainBtn').addEventListener('click',()=>window.setTimeout(localizeMenu,50));
  // The old boot code may open a restored scene; hide that panel until CONTINUE.
  closePanel();
  showMenu();
})();
