const Sas = document.getElementById("SaS");
const pskaud=document.getElementById("pskaud");
const stopsong=document.getElementById("stopsong")

const audiomapAl1 ={
    "славкамилохинвпионерлагере":"music/ptcem/al1/SlvkMilhn.mp3",
    "большенедрузья":"BlshNdrz.mp3",
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
    "борода":"music/ptcem/al1/brd.mp3",
    "бородатая":"music/ptcem/al1/brd.mp3",
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
    "стигматпереводилка":"music/ptcem/al2/stigmat.np3",
    "стигмат-переводилка":"music/ptcem/al2/stigmat.mp3",
    "нумеруно":"music/ptcem/al2/numerouno.mp3",
    "нумероуно":"music/ptcem/al2/numerouno.mp3",
    "стараяподруга":"music/ptcem/al2/oldfriend.mp3",
    "безпримесей":"music/ptcem/al2/withoutother.mp3",
};

function SearchSong(Sas,stopsong, pskaud,audiomapAl1,audiomapAl2){

    Sas.addEventListener("change",() =>{
        const word=Sas.value.trim().toLowerCase().replace(/\s+/g, '');
        if(audiomapAl1[word]){
            pskaud.src=audiomapAl1[word];
            pskaud.play();
        }
        else if(audiomapAl2[word]){
            pskaud.src=audiomapAl2[word];
            pskaud.play(); }
        else{alert("Песня отсутствует");}
    })
    stopsong.addEventListener("click",()=>{
        pskaud.pause();
        pskaud.currentTime = 0; 
        pskaud.src="music/skratch.mp3";
        pskaud.play();
    })
};

SearchSong(Sas,stopsong, pskaud, audiomapAl1,audiomapAl2);