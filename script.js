const Sas = document.getElementById("SaS");
const pskaud=document.getElementById("pskaud");
const stopsong=document.getElementById("stopsong");
const tsbb=document.getElementById("TSBB");
const tsfb=document.getElementById("TSFB");
const polzun=document.getElementById("polzun");
const timer = document.getElementById("timer");
const pause = document.getElementById("pause");

const audiomapAl1 ={
    "славкамилохинвпионерлагере":"music/ptcem/al1/SlvkMilhn.mp3",
    "большенедрузья":"music/ptcem/al1/BlshNdrz.mp3",
    "трудовоэ":"music/ptcem/al1/Trdv.mp3",

    "хэллоустрэнжир":"music/ptcem/al1/HllStrng.mp3",
    "хэллоу,стрэнжир":"music/ptcem/al1/HllStrng.mp3",
    "хэллоу,стрэнжир!":"music/ptcem/al1/HllStrng.mp3",
    "хэллоустрэнжир!":"music/ptcem/al1/HllStrng.mp3",
    "хеллоустрэнжир":"music/ptcem/al1/HllStrng.mp3",
    "хеллоу,стрэнжир":"music/ptcem/al1/HllStrng.mp3",
    "хеллоу,стрэнжир!":"music/ptcem/al1/HllStrng.mp3",
    "хеллоустрэнжир!":"music/ptcem/al1/HllStrng.mp3",
    "хэлоустрэнжир":"music/ptcem/al1/HllStrng.mp3",
    "хэлоу,стрэнжир":"music/ptcem/al1/HllStrng.mp3",
    "хэлоу,стрэнжир!":"music/ptcem/al1/HllStrng.mp3",
    "хэлоустрэнжир!":"music/ptcem/al1/HllStrng.mp3",
    "хелоустрэнжир":"music/ptcem/al1/HllStrng.mp3",
    "хелоу,стрэнжир":"music/ptcem/al1/HllStrng.mp3",
    "хелоу,стрэнжир!":"music/ptcem/al1/HllStrng.mp3",
    "хелоустрэнжир!":"music/ptcem/al1/HllStrng.mp3",
    
    "катарсис":"music/ptcem/al1/Ktrss.mp3",
    "слезыпацана":"music/ptcem/al1/SlzPcn.mp3",
    "борода":"music/ptcem/al1/Brd.mp3",
    "бородатая":"music/ptcem/al1/Brd.mp3",
    "подробностиошкольнойжизни":"music/ptcem/al1/PoSZ.mp3",
    "любовьводинконец":"music/ptcem/al1/LvOK.mp3",
};

const audiomapAl2 ={
    "аморальноинтро":"music/ptcem/al2/AmoralIntro.mp3",
    "биохазард":"music/ptcem/al2/Biohazard.mp3",
    "ончужойонплохой":"music/ptcem/al2/hebad.mp3",
    "ончужой-онплохой":"music/ptcem/al2/hebad.mp3",
    "ончужой":"music/ptcem/al2/hebad.mp3",
    "фристайлполюбви":"music/ptcem/al2/freestyle.mp3",
    "пьющая":"music/ptcem/al2/drinking.mp3",
    "ялюблюлюдей":"music/ptcem/al2/lovepeople.mp3",
    "ялюблюлюдейнарасстоянииметра":"music/ptcem/al2/lovepeople.mp3",
    "ялюблюлюдей(нарасстоянииметра)":"music/ptcem/al2/lovepeople.mp3",
    "похабноемеждутречие":"music/ptcem/al2/between.mp3",
    "ненифер":"music/ptcem/al2/notnifer.mp3",
    "этопадучая":"music/ptcem/al2/falling.mp3",
    "великомученникголобородькотолик":"music/ptcem/al2/jesus.mp3",
    "великомученник":"music/ptcem/al2/jesus.mp3",
    "стигматпереводилка":"music/ptcem/al2/stigmat.mp3",
    "стигмат-переводилка":"music/ptcem/al2/stigmat.mp3",
    "нумеруно":"music/ptcem/al2/numerouno.mp3",
    "нумероуно":"music/ptcem/al2/numerouno.mp3",
    "стараяподруга":"music/ptcem/al2/oldfriend.mp3",
    "безпримесей":"music/ptcem/al2/withoutother.mp3",
};

const audiomapAl3 ={
    "доброечувство":"music/ptcem/al3/goodfeel.mp3",
    "прочитатьтвоимысли":"music/ptcem/al3/readthinks.mp3",
    "крысоловы":"music/ptcem/al3/ratcatchers.mp3",
    "поездвпредвкушениистоит":"music/ptcem/al3/train.mp3",
    "поезд":"music/ptcem/al3/train.mp3",
    "тараканы":"music/ptcem/al3/train.mp3",
    "изгибгитарыжелтой":"music/ptcem/al3/yellowguitar.mp3",
    "джазовамелодия":"music/ptcem/al3/jazzmelody.mp3",
    "джазоваямелодия":"music/ptcem/al3/jazzmelody.mp3",
    "обж":"music/ptcem/al3/obj.mp3",
    "великийпоход":"music/ptcem/al3/bigway.mp3",
    "наноничтожество":"music/ptcem/al3/nanolooser.mp3",
    "ничтожество":"music/ptcem/al3/nanolooser.mp3",
    "дорожная":"music/ptcem/al3/way.mp3",
};

pause.addEventListener("click", () => {
  pause.textContent = (pause.textContent === "||") ? "⯈" : "||";
});

function SearchSong(pause,timer,Sas,stopsong, pskaud,audiomapAl1,audiomapAl2,audiomapAl3,polzun){
    Sas.addEventListener("change",() =>{
        const word=Sas.value.trim().toLowerCase().replace(/\s+/g, '');
        if(audiomapAl1[word]){
            pskaud.src=audiomapAl1[word];
            pskaud.play();
        }
        else if(audiomapAl2[word]){
            pskaud.src=audiomapAl2[word];
            pskaud.play(); }
        else if(audiomapAl3[word]){
            pskaud.src=audiomapAl3[word];
            pskaud.play(); }
        else{alert("Песня отсутствует");}
    })
    stopsong.addEventListener("click",()=>{
        pskaud.pause();
        pskaud.currentTime = 0; 
        pskaud.src="music/skratch.mp3";
        pskaud.play();
    })
    tsbb.addEventListener("click",()=>{
        pskaud.currentTime -= 10;
        pskaud.play();
    })
    tsfb.addEventListener("click",()=>{
        pskaud.currentTime += 10;
        pskaud.play();
    })
    pskaud.addEventListener("loadedmetadata", () => {
    polzun.max = pskaud.duration.toFixed(1);
    polzun.step = 1;
});

    pskaud.addEventListener("timeupdate", () => {
    polzun.value = Math.floor(pskaud.currentTime);
    });

    polzun.addEventListener("input", () => {
    pskaud.currentTime = polzun.value;
    });
    pskaud.addEventListener("timeupdate", () => {
    const current = Math.floor(pskaud.currentTime);
    const minutes = Math.floor(current / 60);
    const seconds = current % 60;
    timer.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    });
    pause.addEventListener("click",() =>{
    if(pskaud.paused){pskaud.play();}
    else{pskaud.pause();}
    });
};

const GITHUB_USER = 'Makkabey';
const GITHUB_REPO = 'SitnikovSklep';
const ISSUE_NUMBER = 1;
const GITHUB_TOKEN = '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';
const commentForm = document.getElementById('comment-form');
const commentsDiv = document.getElementById('commentssee');

loadComments();

commentForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const text = document.getElementById('text').value;

    if (!name || !text) {
        alert('Заполните все поля!');
        return;
    }

    try {
        await postComment(name, text);
        commentForm.reset();
        loadComments();
    } catch (error) {
        alert('Ошибка: что-то пошло не так');
    }
});

async function postComment(name, text) {
    const url = `https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/issues/${ISSUE_NUMBER}/comments`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `token ${GITHUB_TOKEN}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ body: `**${name}**: ${text}` }),
    });

    if (!response.ok) {
        throw new Error('Не удалось отправить комментарий');
    }
}
async function loadComments() {
    const url = `https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/issues/${ISSUE_NUMBER}/comments`;
    const response = await fetch(url);
    const comments = await response.json();

    commentsDiv.innerHTML = '';
    comments.forEach(comment => {
        const commentHTML = `
            <div class="comment">
                <strong>${comment.body.split('**')[1]}</strong>
                <p>${comment.body.split('**')[2]}</p>
                <small>${new Date(comment.created_at).toLocaleString()}</small>
            </div>
        `;
        commentsDiv.innerHTML += commentHTML;
    });
}

SearchSong(pause,timer,Sas,stopsong, pskaud, audiomapAl1,audiomapAl2,audiomapAl3,polzun);