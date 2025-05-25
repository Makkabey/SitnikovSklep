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

function SearchSong(Sas,stopsong, pskaud,audiomapAl1){

    Sas.addEventListener("change",() =>{
        const word=Sas.value.trim().toLowerCase().replace(/\s+/g, '');
        if(audiomapAl1[word]){
            pskaud.src=audiomapAl1[word];
            pskaud.play();
        }
        else{alert("Песня отсутствует");}
    })
    stopsong.addEventListener("click",()=>{
        pskaud.pause();
        pskaud.currentTime = 0; 
        pskaud.src="music/skratch.mp3";
        pskaud.play();
    })
};

SearchSong(Sas,stopsong, pskaud, audiomapAl1);