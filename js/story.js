'use strict';
/* Fictional story content. All secrets are documented in WALKTHROUGH.txt. */
const STORY={
 chapters:[['00','THE DISCOVERY','Wake the phone and follow the first call.'],['01','THE LAST MESSAGE','Recover the missing conversation.'],['02','03:17 AM','Listen closely to the last recording.'],['03','THE OTHER NUMBER','Find out which caller is lying.'],['04','THE MEMORY','Reconstruct the night of June 17.'],['05','THE FINAL CALL','Choose what happens to the unsent message.']],
 evidence:{note:['WALL NOTE','03:17 — E.'],photo:['POLAROID','JUNE 17, 2006'],message:['RECOVERED CHAT','EMMA / NOAH / UNKNOWN'],audio:['VOICE RECORDING','FOUR WORDS, FOUR NUMBERS'],image:['HALLWAY PHOTO','CLOCK 03:17'],call:['CALL LOG','NOAH: 03:10 / UNKNOWN: 03:16'],receipt:['SHOP RECEIPT','NOAH LEFT AT 03:12'],memory:['RECONSTRUCTED NIGHT','03:10 → 03:12 → 03:16 → 03:17'],letter:['UNSENT MESSAGE','FOR EMMA, NOT FROM EMMA']},
 scenes:{
 start:{chapter:0,title:'THE DISCOVERY',text:'June 17, 2006. A room with no address. A phone with no owner.\n\nThe handset is cold. A note on the wall reads 03:17. A photograph on the desk is dated June 17, 2006.',choices:[['Inspect the wall note','note'],['Inspect the photograph','photo'],['Wake the phone','pin']]},
 note:{chapter:0,title:'THE WALL NOTE',text:'DON’T FORGET.\n03:17 — E.\n\nFour digits, written in faded blue ink.',evidence:'note',choices:[['Look at the photograph','photo'],['Try the phone','pin']]},
 photo:{chapter:0,title:'THE POLAROID',text:'A figure stands in the doorway. On the back: “I was here.”\n\nThe date reads JUNE 17, 2006.',evidence:'photo',choices:[['Inspect the note','note'],['Wake the phone','pin']]},
 pin:{chapter:0,title:'SECURITY LOCK',text:'The phone asks for a four-digit PIN. * clears; # submits. You can also type below.',puzzle:'pin',hint:'Read the handwritten note on the wall. The time is the PIN.'},
 first:{chapter:0,title:'UNKNOWN NUMBER',text:'“You promised you would come back.”\n\nA message arrives at exactly 03:17 AM.',choices:[['Where am I?','replyA'],['Who are you?','replyB'],['This is not my phone.','replyC']]},
 replyA:{chapter:0,title:'UNKNOWN NUMBER',text:'“You remember the room. That is enough.”\n\nINCOMING CALL. The screen flashes EMMA.',choices:[['Answer the call','callYes'],['Decline the call','callNo']]},
 replyB:{chapter:0,title:'UNKNOWN NUMBER',text:'“You always ask that first.”\n\nINCOMING CALL. The screen flashes EMMA.',choices:[['Answer the call','callYes'],['Decline the call','callNo']]},
 replyC:{chapter:0,title:'UNKNOWN NUMBER',text:'“It was yours before it was mine.”\n\nINCOMING CALL. The screen flashes EMMA.',choices:[['Answer the call','callYes'],['Decline the call','callNo']]},
 callYes:{chapter:0,title:'THE FIRST CALL',text:'You answer. A voice whispers: “Emma? Is that you?”\n\nThe line disconnects. A locked conversation appears.',choices:[['Open the recovered conversation','chat']]},
 callNo:{chapter:0,title:'MISSED CALL',text:'You decline. A voicemail arrives: “Emma, please. I know you can hear me.”\n\nA locked conversation appears.',choices:[['Open the recovered conversation','chat']]},
 chat:{chapter:1,title:'THE LAST MESSAGE',text:'The recovered messages are out of order.\n\nEMMA: “Meet me at the shop.” (03:10)\nNOAH: “I left the shop.” (03:12)\nUNKNOWN: “Do not open the door.” (03:16)\nEMMA: “It is 03:17.” (03:17)\n\nEnter the four timestamps in chronological order, using the final two digits of each time.',evidence:'message',puzzle:'chat',hint:'The messages show 03:10, 03:12, 03:16 and 03:17. Enter the minutes in that order, with spaces.'},
 chatDone:{chapter:1,title:'A DELETED MESSAGE',text:'Recovered: “The door was already open.”\n\nA new audio file appears. Its filename is 0317.wav.',choices:[['Play the recording','recording']]},
 recording:{chapter:2,title:'03:17 AM',text:'A damaged recording plays: “One… nine… zero… six.”\n\nA photograph shows a clock frozen at 03:17. The recording contains the code to the locked image.',evidence:'audio',puzzle:'recording',hint:'Type the four numbers spoken aloud: one, nine, zero, six.'},
 recordingDone:{chapter:2,title:'THE HALLWAY',text:'The photo unlocks. At 03:17, the hallway is empty. But a shadow on the wall suggests the door was open before the picture was taken.',evidence:'image',choices:[['Inspect the call log','log']]},
 log:{chapter:3,title:'THE OTHER NUMBER',text:'NOAH says: “I was at the shop until 03:17.”\n\nCALL LOG: Noah called at 03:10. UNKNOWN called at 03:16.\n\nA receipt says NOAH LEFT THE SHOP at 03:12. Which statement contradicts the evidence?',evidence:'call',puzzle:'log',hint:'Compare Noah’s claim (until 03:17) with the receipt (left at 03:12). Choose Noah’s statement.'},
 logDone:{chapter:3,title:'THE CONTRADICTION',text:'Noah’s story does not match the receipt.\n\nUNKNOWN: “The last message was never sent. Put the night back in order.”',evidence:'receipt',choices:[['Reconstruct the night','timeline']]},
 timeline:{chapter:4,title:'THE MEMORY',text:'Arrange these events from earliest to latest:\n\nA — Unknown calls (03:16)\nB — Emma’s last message (03:17)\nC — Noah calls (03:10)\nD — Noah leaves the shop (03:12)',puzzle:'timeline',hint:'Order the events by their timestamps: 03:10, 03:12, 03:16, 03:17. Enter their letters.'},
 timelineDone:{chapter:4,title:'THE UNSENT LETTER',text:'The sequence returns. A hidden message unlocks:\n\n“Emma, I never left you behind. I was trying to warn you about the door. — N.”\n\nThe phone was preserving a message addressed TO Emma, not written BY her.',evidence:'memory',choices:[['Read the final message','final']]},
 final:{chapter:5,title:'THE FINAL CALL',text:'The message is still unsent. The phone offers three choices.\n\nYour earlier decisions are remembered. The final choice decides what the phone becomes.',evidence:'letter',choices:[['Send the missing message','truth'],['Delete the message forever','silence'],['Call UNKNOWN instead','loop']]},
 truth:{chapter:5,title:'ENDING 01 — THE TRUTH',text:'The message finally reaches Emma. The clock moves to 03:18.\n\nA final text arrives: “Thank you for remembering.”\n\nTHE END.',ending:'truth'},
 silence:{chapter:5,title:'ENDING 02 — THE SILENCE',text:'The message disappears. The screen fades to black.\n\nA small notification remains: “One draft was never delivered.”\n\nTHE END.',ending:'silence'},
 loop:{chapter:5,title:'ENDING 03 — THE LOOP',text:'UNKNOWN answers: “You promised you would come back.”\n\nThe clock returns to 03:17. On the desk, the photograph has changed.\n\nTHE END — OR THE BEGINNING?',ending:'loop'}
 }
};


/* Extended canonical story: chapters 06–11, original chapters preserved. */
STORY.chapters.push(["06", "THE SECOND PHOTOGRAPH", "A picture taken after the final call."],["07", "THE HIDDEN FREQUENCY", "Tune the lost radio signal."],["08", "THE LOCKED DRAWER", "Find what Emma left behind."],["09", "THE WITNESS", "Listen to a witness who was never there."],["10", "THE UNDELIVERED LETTER", "Decide what the evidence really means."],["11", "THE LAST SIGNAL", "Send the message and close the case."]);
STORY.scenes["afterPhoto"]={"chapter": 6, "title": "THE SECOND PHOTOGRAPH", "text": "A second Polaroid slides from beneath the phone. It shows the same hallway, but the door is now closed. A faint number is written on its back: 21.\n\nSomeone took this picture after the call.", "choices": [["Continue", "radio"]], "evidence": "secondPhoto"};
STORY.scenes["radio"]={"chapter": 7, "title": "THE HIDDEN FREQUENCY", "text": "A voice leaks through the static: “The frequency is the year on the photograph, followed by the number on its back.”\n\nEnter the six-digit frequency.", "puzzle": "radio", "hint": "The year is 2006. The number on the second photo is 21."};
STORY.scenes["radioDone"]={"chapter": 7, "title": "A VOICE IN THE WALL", "text": "The static clears. Emma whispers: “The drawer was never locked to keep you out. It was locked to keep the letter safe.” A wooden click sounds beneath the desk.", "choices": [["Continue", "drawer"]]};
STORY.scenes["drawer"]={"chapter": 8, "title": "THE LOCKED DRAWER", "text": "A tiny combination lock guards the drawer. Its label reads: “The minute the clock stopped, twice.”\n\nEnter the four digits.", "puzzle": "drawer", "hint": "The clock stopped at 03:17. Repeat its minutes."};
STORY.scenes["drawerDone"]={"chapter": 8, "title": "THE SECOND ENVELOPE", "text": "Inside lies a photograph of Emma and Noah, torn in half. The missing half bears a witness’s name: MIRA.\n\nThe phone rings once, then stops.", "choices": [["Continue", "witness"]], "evidence": "envelope"};
STORY.scenes["witness"]={"chapter": 9, "title": "THE WITNESS", "text": "Mira says: “I heard the bell at 03:12. The hallway was empty at 03:17. The door had been opened before either of us arrived.”\n\nWhich time did Mira hear the bell?", "puzzle": "witness", "hint": "Mira heard the bell at 03:12."};
STORY.scenes["witnessDone"]={"chapter": 9, "title": "A SMALL LIE", "text": "The witness was there after all. She knew the bell’s exact time because she had been holding the second photograph.\n\nA folded letter falls from the back of the frame.", "choices": [["Continue", "letterRoom"]]};
STORY.scenes["letterRoom"]={"chapter": 10, "title": "THE UNDELIVERED LETTER", "text": "The letter reads: “If you find this, do not blame the one who called. The door was open before Noah arrived. I left the phone so that someone could finish the message.”\n\nThe clock begins ticking.", "choices": [["Continue", "lastSignal"]], "evidence": "secondLetter"};
STORY.scenes["lastSignal"]={"chapter": 11, "title": "THE LAST SIGNAL", "text": "The screen shows one final draft. Emma’s number is still saved.\n\nThere is no other ending to unlock: send the message, or leave it here until you are ready.", "choices": [["Continue", "truth"]]};
STORY.evidence.secondPhoto=["SECOND POLAROID","2006 / 21"];STORY.evidence.envelope=["TORN ENVELOPE","MIRA"];STORY.evidence.secondLetter=["EMMA’S LETTER","THE DOOR WAS ALREADY OPEN"];

const AR_STORY = {
  "chapters": [
    [
      "الاكتشاف",
      "أيقظ الهاتف وتابع المكالمة الأولى."
    ],
    [
      "الرسالة الأخيرة",
      "استعيدي المحادثة المفقودة."
    ],
    [
      "03:17 صباحًا",
      "أنصت جيدًا إلى التسجيل الأخير."
    ],
    [
      "الرقم الآخر",
      "اكتشف أي المتصلين يكذب."
    ],
    [
      "الذكرى",
      "أعد بناء أحداث ليلة 17 يونيو."
    ],
    [
      "المكالمة الأخيرة",
      "قرّر مصير الرسالة التي لم تُرسل."
    ]
  ],
  "evidence": {
    "note": [
      "ورقة الحائط",
      "03:17 — E."
    ],
    "photo": [
      "صورة بولارويد",
      "17 يونيو 2006"
    ],
    "message": [
      "محادثة مستعادة",
      "إيما / نوح / مجهول"
    ],
    "audio": [
      "تسجيل صوتي",
      "أربع كلمات، أربعة أرقام"
    ],
    "image": [
      "صورة الممر",
      "الساعة 03:17"
    ],
    "call": [
      "سجل المكالمات",
      "نوح: 03:10 / مجهول: 03:16"
    ],
    "receipt": [
      "إيصال المتجر",
      "غادر نوح الساعة 03:12"
    ],
    "memory": [
      "الليلة المعاد بناؤها",
      "03:10 ← 03:12 ← 03:16 ← 03:17"
    ],
    "letter": [
      "رسالة غير مرسلة",
      "إلى إيما، وليست من إيما"
    ]
  },
  "scenes": {
    "start": {
      "title": "الاكتشاف",
      "text": "17 يونيو 2006. غرفة بلا عنوان. هاتف بلا صاحب.\n\nالهاتف بارد. على الحائط ورقة مكتوب عليها 03:17، وعلى المكتب صورة سوفاريخ 17 يونيو 2006.",
      "choices": [
        "افحص الورقة على الحائط",
        "افحص الصورة",
        "شغّل الهاتف"
      ]
    },
    "note": {
      "title": "الورقة على الحائط",
      "text": "لا تنسَ.\n03:17 — E.\n\nأربعة أرقام مكتوبة بحبر أزرق باهت.",
      "choices": [
        "انظر إلى الصورة",
        "جرّب الهاتف"
      ]
    },
    "photo": {
      "title": "الصورة القديمة",
      "text": "شخص يقف عند الباب. على ظهر الصورة: «كنت هنا».\n\nالتاريخ: 17 يونيو 2006.",
      "choices": [
        "افحص الورقة",
        "شغّل الهاتف"
      ]
    },
    "pin": {
      "title": "قفل الحماية",
      "text": "يطلب الهاتف رمز PIN من أربعة أرقام. النجمة * للمسح، والمربع # للتأكيد. ويمكنك الكتابة في الخانة أدناه.",
      "choices": [],
      "hint": "اقرأ الورقة على الحائط. الوقت المكتوب هو الرمز."
    },
    "first": {
      "title": "رقم مجهول",
      "text": "«لقد وعدتِ بأن تعودي».\n\nتصل رسالة في تمام الساعة 03:17 صباحًا.",
      "choices": [
        "أين أنا؟",
        "من أنت؟",
        "هذا ليس هاتفي."
      ]
    },
    "replyA": {
      "title": "رقم مجهول",
      "text": "«تتذكرين الغرفة، وهذا يكفي».\n\nمكالمة واردة! يظهر على الشاشة اسم إيما.",
      "choices": [
        "ردّي على المكالمة",
        "ارفُضي المكالمة"
      ]
    },
    "replyB": {
      "title": "رقم مجهول",
      "text": "«دائمًا هذا أول سؤال تسألينه».\n\nمكالمة واردة! يظهر على الشاشة اسم إيما.",
      "choices": [
        "ردّي على المكالمة",
        "ارفُضي المكالمة"
      ]
    },
    "replyC": {
      "title": "رقم مجهول",
      "text": "«كان هاتفك قبل أن يصبح هاتفي».\n\nمكالمة واردة! يظهر على الشاشة اسم إيما.",
      "choices": [
        "ردّي على المكالمة",
        "ارفُضي المكالمة"
      ]
    },
    "callYes": {
      "title": "المكالمة الأولى",
      "text": "تردّين. يهمس صوت: «إيما؟ أنتِ؟»\n\nينقطع الاتصال، وتظهر محادثة مقفلة.",
      "choices": [
        "افتح المحادثة المستعادة"
      ]
    },
    "callNo": {
      "title": "مكالمة فائتة",
      "text": "ترفضين المكالمة. تصلك رسالة صوتية: «إيما، أرجوك. أعرف إنك تسمعيني».\n\nتظهر محادثة مقفلة.",
      "choices": [
        "افتح المحادثة المستعادة"
      ]
    },
    "chat": {
      "title": "الرسالة الأخيرة",
      "text": "الرسائل المستعادة ليست مرتبة.\n\nإيما: «قابلني عند المتجر» (03:10)\nنوح: «غادرت المتجر» (03:12)\nمجهول: «لا تفتحي الباب» (03:16)\nإيما: «الساعة الآن 03:17» (03:17)\n\nأدخل آخر رقمين من أوقات الرسائل بالترتيب الزمني، مع مسافات بين الأرقام.",
      "choices": [],
      "hint": "رتّبي الأوقات: 03:10 ثم 03:12 ثم 03:16 ثم 03:17. اكتبي الدقائق بالترتيب."
    },
    "chatDone": {
      "title": "رسالة محذوفة",
      "text": "تمت استعادة رسالة: «الباب كان مفتوحًا أصلًا».\n\nظهر تسجيل صوتي جديد باسم 0317.wav.",
      "choices": [
        "شغّل التسجيل"
      ]
    },
    "recording": {
      "title": "03:17 صباحًا",
      "text": "يعمل تسجيل تالف: «واحد… تسعة… صفر… ستة».\n\nتظهر صورة لساعة متوقفة عند 03:17. يحتوي التسجيل على رمز الصورة المقفلة.",
      "choices": [],
      "hint": "اكتبي الأرقام الأربعة التي سمعتِها: واحد، تسعة، صفر، ستة."
    },
    "recordingDone": {
      "title": "الممر",
      "text": "انفتحت الصورة. الممر فارغ عند 03:17، لكن ظلًّا على الجدار يوحي بأن الباب كان مفتوحًا قبل التقاطها.",
      "choices": [
        "افحص سجل المكالمات"
      ]
    },
    "log": {
      "title": "الرقم الآخر",
      "text": "يقول نوح: «كنت في المتجر حتى 03:17».\n\nسجل المكالمات: اتصل نوح الساعة 03:10، واتصل المجهول الساعة 03:16.\n\nيقول الإيصال إن نوح غادر المتجر الساعة 03:12. أي عبارة تناقض الأدلة؟",
      "choices": [],
      "hint": "قارني كلام نوح (حتى 03:17) بالإيصال (غادر 03:12). اختر عبارته."
    },
    "logDone": {
      "title": "التناقض",
      "text": "رواية نوح لا تطابق الإيصال.\n\nالمجهول: «الرسالة الأخيرة لم تُرسل أبدًا. أعد ترتيب أحداث الليلة».",
      "choices": [
        "أعد بناء أحداث الليلة"
      ]
    },
    "timeline": {
      "title": "الذكرى",
      "text": "رتّبي الأحداث من الأقدم إلى الأحدث:\n\nA — اتصال المجهول (03:16)\nB — آخر رسالة من إيما (03:17)\nC — اتصال نوح (03:10)\nD — مغادرة نوح المتجر (03:12)",
      "choices": [],
      "hint": "رتّبي الأوقات: 03:10 ثم 03:12 ثم 03:16 ثم 03:17. أدخل الحروف المقابلة."
    },
    "timelineDone": {
      "title": "الرسالة التي لم تُرسل",
      "text": "اكتمل التسلسل. ظهرت رسالة مخفية:\n\n«إيما، لم أتركك وحدك. كنت أحاول تحذيرك من الباب. — ن.»\n\nكان الهاتف يحتفظ برسالة موجّهة إلى إيما، لا رسالة كتسوفها إيما.",
      "choices": [
        "اقرأ الرسالة الأخيرة"
      ]
    },
    "final": {
      "title": "المكالمة الأخيرة",
      "text": "ما زالت الرسالة غير مرسلة. يعرض الهاتف ثلاثة خيارات.\n\nاختياراتك السابقة محفوظة، والقرار الأخير يحدد مصير الهاتف.",
      "choices": [
        "أرسلي الرسالة المفقودة",
        "احذفي الرسالة نهائيًا",
        "اتصلي بالمجهول بدلًا من ذلك"
      ]
    },
    "truth": {
      "title": "النهاية 01 — الحقيقة",
      "text": "تصل الرسالة أخيرًا إلى إيما. تتحرك الساعة إلى 03:18.\n\nتصل رسالة أخيرة: «شكرًا لأنك تذكرتِ».\n\nالنهاية.",
      "choices": []
    },
    "silence": {
      "title": "النهاية 02 — الصمت",
      "text": "تختفي الرسالة، وتصبح الشاشة سوداء.\n\nيبقى إشعار صغير: «مسودة واحدة لم يتم تسليمها».\n\nالنهاية.",
      "choices": []
    },
    "loop": {
      "title": "النهاية 03 — الحلقة",
      "text": "يرد المجهول: «لقد وعدتِ بأن تعودي».\n\nتعود الساعة إلى 03:17. على المكتب، تغيّرت الصورة.\n\nالنهاية… أو البداية؟",
      "choices": []
    }
  }
};


/* Extra bilingual suspense beats. Original puzzle solutions and save format are unchanged. */
STORY.scenes["callYes"].choices = STORY.scenes["callYes"].choices.map(([label,id])=>[label,id==="chat"?"echo":id]);
STORY.scenes["echo"] = {"chapter": 0, "title": "THE SECOND VOICE", "text": "The call ends, but the speaker crackles again. A second voice whispers: “Do not read the last message aloud.”\n\nThe phone vibrates twice. In the call log, a number appears for one second and vanishes.", "choices": [["افتح المحادثة المستعادة", "chat"]]};
AR_STORY.scenes["echo"] = {"title": "الصوت الثاني", "text": "تنتهي المكالمة، لكن السماعة تشتغل مجددًا. صوت ثانٍ يهمس: «لا تقرئي الرسالة الأخيرة بصوت عالٍ».\n\nيهتز الهاتف مرتين. يظهر رقم في سجل المكالمات لثانية ثم يختفي.", "choices": ["افتح المحادثة المستعادة"]};
STORY.scenes["callNo"].choices = STORY.scenes["callNo"].choices.map(([label,id])=>[label,id==="chat"?"voicemail":id]);
STORY.scenes["voicemail"] = {"chapter": 0, "title": "THE VOICEMAIL", "text": "The missed call leaves a voicemail with seven seconds of silence. At the end: three faint knocks.\n\nA new notification reads: “She heard you decline.”", "choices": [["افتح المحادثة المستعادة", "chat"]]};
AR_STORY.scenes["voicemail"] = {"title": "البريد الصوتي", "text": "تترك المكالمة الفائتة تسجيلًا فيه سبع ثوانٍ من الصمت. في آخره ثلاث طرقات خافتة.\n\nيظهر إشعار جديد: «سمعتك وأنتِ ترفضين المكالمة».", "choices": ["افتح المحادثة المستعادة"]};
STORY.scenes["chatDone"].choices = STORY.scenes["chatDone"].choices.map(([label,id])=>[label,id==="recording"?"static":id]);
STORY.scenes["static"] = {"chapter": 1, "title": "THE FILE THAT REAPPEARED", "text": "A damaged audio file is stored on the phone. Inspect it and decide what to do.", "choices": []};
AR_STORY.scenes["static"] = {"title": "الملف الذي عاد", "text": "يوجد ملف صوتي تالف في ذاكرة الهاتف. افحصه وحدّد ما ستفعله به.", "choices": []};
STORY.scenes["recordingDone"].choices = STORY.scenes["recordingDone"].choices.map(([label,id])=>[label,id==="log"?"shadow":id]);
STORY.scenes["shadow"] = {"chapter": 2, "title": "THE MOVING SHADOW", "text": "You zoom into the hallway photograph. The shadow does not belong to the person behind the camera.\n\nA handwritten caption appears on the photo: “He said he had already left.”", "choices": [["افحص سجل المكالمات", "log"]]};
AR_STORY.scenes["shadow"] = {"title": "الظل المتحرك", "text": "تكبّرين صورة الممر. الظل لا يعود إلى الشخص الذي التقط الصورة.\n\nتظهر عبارة بخط اليد على الصورة: «قال إنه كان قد غادر».", "choices": ["افحص سجل المكالمات"]};
STORY.scenes["logDone"].choices = STORY.scenes["logDone"].choices.map(([label,id])=>[label,id==="timeline"?"unsent":id]);
STORY.scenes["unsent"] = {"chapter": 3, "title": "THE DRAFT", "text": "The phone receives a draft from its own number: “If the door opens again, do not follow the ringing.”\n\nThe timestamp is 03:18 — one minute after the clock stopped.", "choices": [["أعد ترتيب أحداث الليلة", "timeline"]]};
AR_STORY.scenes["unsent"] = {"title": "المسودة", "text": "يستقبل الهاتف مسودة من رقمه نفسه: «إذا فُتح الباب مرة أخرى، لا تتبعي صوت الرنين».\n\nتوقيت المسودة 03:18، بعد توقف الساعة بدقيقة.", "choices": ["أعد ترتيب أحداث الليلة"]};
STORY.scenes["timelineDone"].choices = STORY.scenes["timelineDone"].choices.map(([label,id])=>[label,id==="final"?"breath":id]);
STORY.scenes["breath"] = {"chapter": 4, "title": "ONE MORE CALL", "text": "The reconstructed night plays in your mind. Just before the last message, someone whispers Emma’s name.\n\nThe phone asks one question: “Do you want the truth, or do you want the room to stay quiet?”", "choices": [["تابع إلى المكالمة الأخيرة", "final"]]};
AR_STORY.scenes["breath"] = {"title": "مكالمة أخرى", "text": "تتكرر الليلة التي أعدتِ بناءها في ذهنك. قبل الرسالة الأخيرة مباشرة، يهمس أحدهم باسم إيما.\n\nيسألك الهاتف: «هل تريد معرفة الحقيقة، أم تفضّل أن تبقى الغرفة صامتة؟»", "choices": ["تابع إلى المكالمة الأخيرة"]};

/* Literary Modern Standard Arabic for the expanded chapters. */
AR_STORY.chapters.push(["الصورة الثانية", "صورة التُقطت بعد المكالمة الأخيرة."],["التردد الخفي", "التقط الإشارة اللاسلكية المفقودة."],["الدرج المغلق", "اكتشف ما تركته إيما خلفها."],["الشاهد", "استمع إلى شاهد لم يكن هناك."],["الرسالة التي لم تصل", "اكتشف معنى الأدلة قبل اتخاذ القرار."],["الإشارة الأخيرة", "أرسل الرسالة وأنهِ القضية."]);
AR_STORY.scenes["afterPhoto"]={"title": "الصورة الثانية", "text": "تنزلق صورة بولارويد ثانية من أسفل الهاتف. يظهر فيها الممر ذاته، لكن الباب مغلق هذه المرة. وعلى ظهرها رقم باهت: 21.\n\nالتُقطت هذه الصورة بعد المكالمة.", "choices": ["متابعة"]};
AR_STORY.scenes["radio"]={"title": "التردد الخفي", "text": "يتسلل صوت عبر التشويش: «التردد هو سنة الصورة، يتبعها الرقم المكتوب على ظهرها».\n\nأدخل التردد المكوّن من ستة أرقام.", "hint": "السنة هي 2006، والرقم على ظهر الصورة الثانية هو 21."};
AR_STORY.scenes["radioDone"]={"title": "صوت خلف الجدار", "text": "ينقشع التشويش، ويهمس صوت إيما: «لم يُغلق الدرج لمنعك من الدخول، بل لحماية الرسالة». يُسمع صوت نقرة خشبية أسفل المكتب.", "choices": ["متابعة"]};
AR_STORY.scenes["drawer"]={"title": "الدرج المغلق", "text": "يحمي الدرج قفل صغير. وعلى بطاقته عبارة: «دقيقة توقف الساعة، مرتين».\n\nأدخل الأرقام الأربعة.", "hint": "توقفت الساعة عند 03:17. كرّر رقم الدقائق."};
AR_STORY.scenes["drawerDone"]={"title": "الظرف الثاني", "text": "داخل الدرج صورة ممزقة لإيما ونوح. على نصفها المفقود اسم شاهدة: ميرا.\n\nيرن الهاتف مرة واحدة، ثم يصمت.", "choices": ["متابعة"]};
AR_STORY.scenes["witness"]={"title": "الشاهد", "text": "تقول ميرا: «سمعت الجرس عند 03:12. كان الممر خاليًا عند 03:17. وكان الباب قد فُتح قبل وصولنا».\n\nفي أي وقت سمعت ميرا الجرس؟", "hint": "سمعت ميرا الجرس عند الساعة 03:12."};
AR_STORY.scenes["witnessDone"]={"title": "كذبة صغيرة", "text": "كانت الشاهدة هناك بالفعل. لقد عرفت وقت الجرس بدقة لأنها كانت تحمل الصورة الثانية.\n\nتسقط رسالة مطوية من خلف إطار الصورة.", "choices": ["متابعة"]};
AR_STORY.scenes["letterRoom"]={"title": "الرسالة التي لم تصل", "text": "تقول الرسالة: «إذا عثرت على هذا، فلا تَلُمْ من اتصل. كان الباب مفتوحًا قبل وصول نوح. تركت الهاتف حتى يتمكن أحدهم من إتمام الرسالة».\n\nتبدأ الساعة بالدق.", "choices": ["متابعة"]};
AR_STORY.scenes["lastSignal"]={"title": "الإشارة الأخيرة", "text": "تعرض الشاشة مسودة أخيرة. ما زال رقم إيما محفوظًا.\n\nلا توجد نهاية أخرى عليك فتحها: أرسل الرسالة، أو اتركها هنا حتى تصبح مستعدًا.", "choices": ["متابعة"]};
AR_STORY.evidence.secondPhoto=["الصورة الثانية","2006 / 21"];AR_STORY.evidence.envelope=["الظرف الممزق","ميرا"];AR_STORY.evidence.secondLetter=["رسالة إيما","كان الباب مفتوحًا بالفعل"];

STORY.scenes.timelineDone.choices=[["Inspect the second photograph","afterPhoto"]];AR_STORY.scenes.timelineDone.choices=["افحص الصورة الثانية"];
STORY.scenes.truth.text="The message reaches Emma. The clock finally moves to 03:18. One last notification appears: ‘Thank you for remembering.’ The screen goes dark. THE END.";AR_STORY.scenes.truth.text="تصل الرسالة إلى إيما. تتحرك الساعة أخيرًا إلى 03:18. يظهر إشعار أخير: «شكرًا لأنك تذكّرت». ثم تنطفئ الشاشة. النهاية.";
STORY.scenes.final.choices=[["Follow the new evidence","afterPhoto"]];AR_STORY.scenes.final.choices=["اتبع الأدلة الجديدة"];

/* The player discovers the call times rather than receiving them in exposition. */
STORY.scenes.log.text='Noah claims he remained at the shop until 03:17. Examine the call history and the shop receipt before choosing which claim contradicts the evidence.';
AR_STORY.scenes.log.text='يؤكد نوح أنه بقي في المتجر حتى الساعة 03:17. افتح سجل المكالمات، وافحص الإيصال بنفسك، ثم حدّد العبارة التي تناقض الأدلة.';
