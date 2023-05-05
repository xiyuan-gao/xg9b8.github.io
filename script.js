window.onload = function() {
  document.querySelector("#home").style.display = "block";
  // hide other sections
  var sections = document.querySelectorAll("main > section");
  for (var i = 0; i < sections.length; i++) {
    if (sections[i].id !== "home") {
      sections[i].style.display = "none";
    }
  }
};

function showSection(sectionId) {
    const sections = document.querySelectorAll("main section");
    for (const section of sections) {
        if (section.id === sectionId) {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    }
};
//Maps
// Replace the placeholder data with your actual data
const locationsData = [
{Name:"Ejagham",Classification:"Ekoid",Country:"Nigeria",Latitude:5.54,Longitude:8.91,"ISO CODE":"etu",Linkiso:"https://iso639-3.sil.org/code/etu",GLOTTOCODE:"ejag1239",linkglot:"https://glottolog.org/resource/languoid/id/ejag1239"},
{Name:"Efutop",Classification:"Ekoid",Country:"Nigeria",Latitude:5.92,Longitude:8.35,"ISO CODE":"ofu",Linkiso:"https://iso639-3.sil.org/code/",GLOTTOCODE:"efut1242",linkglot:"https://glottolog.org/resource/languoid/id/efut1242"},
{Name:"Balep",Classification:"Ekoid",Country:"Nigeria",Latitude:6.06,Longitude:8.66,"ISO CODE":"x",Linkiso:"x",GLOTTOCODE:"bale1253",linkglot:"https://glottolog.org/resource/languoid/id/bale1253"},
{Name:"Nde",Classification:"Ekoid",Country:"Nigeria",Latitude:6.22,Longitude:8.47,"ISO CODE":"x",Linkiso:"x",GLOTTOCODE:"ndee1242",linkglot:"https://glottolog.org/resource/languoid/id/ndee1242"},
{Name:"Nselle",Classification:"Ekoid",Country:"Nigeria",Latitude:6.20,Longitude:8.54,"ISO CODE":"x",Linkiso:"x",GLOTTOCODE:"sel1238",linkglot:"https://glottolog.org/resource/languoid/id/sel1238"},
{Name:"Abanyom",Classification:"Ekoid",Country:"Nigeria",Latitude:6.31,Longitude:8.63,"ISO CODE":"abm",Linkiso:"https://iso639-3.sil.org/code/abm",GLOTTOCODE:"aban1242",linkglot:"https://glottolog.org/resource/languoid/id/aban1242"},
{Name:"Nkim",Classification:"Ekoid",Country:"Nigeria",Latitude:6.60,Longitude:8.77,"ISO CODE":"x",Linkiso:"x",GLOTTOCODE:"nkem1243",linkglot:"https://glottolog.org/resource/languoid/id/nkem1243"},
{Name:"Nnam",Classification:"Ekoid",Country:"Nigeria",Latitude:6.31,Longitude:8.49,"ISO CODE":"nbp",Linkiso:"https://iso639-3.sil.org/code/nbp",GLOTTOCODE:"nnam1238",linkglot:"https://glottolog.org/resource/languoid/id/nnam1238"},
{Name:"Ekajuk",Classification:"Ekoid",Country:"Nigeria",Latitude:6.46,Longitude:8.55,"ISO CODE":"eka",Linkiso:"https://iso639-3.sil.org/code/eka",GLOTTOCODE:"ekaj1238",linkglot:"https://glottolog.org/resource/languoid/id/ekaj1238"},
{Name:"Mbe",Classification:"Ekoid",Country:"Cameroon",Latitude:6.26,Longitude:11.09,"ISO CODE":"mfo",Linkiso:"https://iso639-3.sil.org/code/mfo",GLOTTOCODE:"mbee1249",linkglot:"https://glottolog.org/resource/languoid/id/mbee1249"},
{Name:"Tikar",Classification:"Ekoid",Country:"Cameroon",Latitude:5.87,Longitude:11.61,"ISO CODE":"tik",Linkiso:"https://iso639-3.sil.org/code/tik",GLOTTOCODE:"tika1246",linkglot:"https://glottolog.org/resource/languoid/id/tika1246"},
{Name:"Esimbi",Classification:"Tivoid",Country:"Cameroon",Latitude:6.50,Longitude:9.87,"ISO CODE":"ags",Linkiso:"https://iso639-3.sil.org/code/ags",GLOTTOCODE:"esim1238",linkglot:"https://glottolog.org/resource/languoid/id/esim1238"},
{Name:"Tiv",Classification:"Tivoid",Country:"Cameroon",Latitude:7.5,Longitude:8.8,"ISO CODE":"tiv",Linkiso:"https://iso639-3.sil.org/code/tiv",GLOTTOCODE:"tivv1240",linkglot:"https://glottolog.org/resource/languoid/id/tivv1240"},
{Name:"Afi",Classification:"Tivoid",Country:"Cameroon",Latitude:6.84,Longitude:10.97,"ISO CODE":"x",Linkiso:"x",GLOTTOCODE:"aman1261",linkglot:"https://glottolog.org/resource/languoid/id/aman1261"},
{Name:"Kamino",Classification:"Tivoid",Country:"Cameroon",Latitude:6.78,Longitude:10.95,"ISO CODE":"x",Linkiso:"x",GLOTTOCODE:"kami1257",linkglot:"https://glottolog.org/resource/languoid/id/kami1257"},
{Name:"Ugare",Classification:"Tivoid",Country:"Cameroon",Latitude:6.33,Longitude:9.87,"ISO CODE":"iyo",Linkiso:"https://iso639-3.sil.org/code/iyo",GLOTTOCODE:"mesa1245",linkglot:"https://glottolog.org/resource/languoid/id/mesa1245"},
{Name:"Oliti",Classification:"Central_Tivoid",Country:"Cameroon",Latitude:6.54,Longitude:9.50,"ISO CODE":"x",Linkiso:"x",GLOTTOCODE:"olit1238",linkglot:"https://glottolog.org/resource/languoid/id/olit1238"},
{Name:"Evand",Classification:"Central_Tivoid",Country:"Cameroon",Latitude:6.35,Longitude:9.46,"ISO CODE":"bzz",Linkiso:"https://iso639-3.sil.org/code/bzz",GLOTTOCODE:"evan1238",linkglot:"https://glottolog.org/resource/languoid/id/evan1238"},
{Name:"Caka-Batanga",Classification:"Central_Tivoid",Country:"Cameroon",Latitude:6.27,Longitude:9.78,"ISO CODE":"x",Linkiso:"x",GLOTTOCODE:"bata1286",linkglot:"https://glottolog.org/resource/languoid/id/bata1286"},
{Name:"Ipulo",Classification:"Tivoid",Country:"Cameroon",Latitude:6.29,Longitude:9.65,"ISO CODE":"ass",Linkiso:"https://iso639-3.sil.org/code/ass",GLOTTOCODE:"ipul1238",linkglot:"https://glottolog.org/resource/languoid/id/ipul1238"},
{Name:"Olulu",Classification:"Tivoid",Country:"Cameroon",Latitude:6.35,Longitude:9.67,"ISO CODE":"x",Linkiso:"x",GLOTTOCODE:"olul1247",linkglot:"https://glottolog.org/resource/languoid/id/olul1247"},
{Name:"Koshin",Classification:"Beboid",Country:"Cameroon",Latitude:6.58,Longitude:10.30,"ISO CODE":"kid",Linkiso:"https://iso639-3.sil.org/code/kid",GLOTTOCODE:"kosh1246",linkglot:"https://glottolog.org/resource/languoid/id/kosh1246"},
{Name:"Noni",Classification:"Beboid",Country:"Cameroon",Latitude:6.37,Longitude:10.57,"ISO CODE":"nhu",Linkiso:"https://iso639-3.sil.org/code/nhu",GLOTTOCODE:"noon1243",linkglot:"https://glottolog.org/resource/languoid/id/noon1243"},
{Name:"Nchanti",Classification:"Beboid",Country:"Cameroon",Latitude:6.51,Longitude:10.53,"ISO CODE":"ncr",Linkiso:"https://iso639-3.sil.org/code/ncr",GLOTTOCODE:"ncan1245",linkglot:"https://glottolog.org/resource/languoid/id/ncan1245"},
{Name:"Abar",Classification:"Beboid",Country:"Cameroon",Latitude:6.58,Longitude:10.23,"ISO CODE":"mij",Linkiso:"https://iso639-3.sil.org/code/mij",GLOTTOCODE:"abar1238",linkglot:"https://glottolog.org/resource/languoid/id/abar1238"},
{Name:"Missong",Classification:"Beboid",Country:"Cameroon",Latitude:6.6,Longitude:10.23,"ISO CODE":"x",Linkiso:"x",GLOTTOCODE:"miss1255",linkglot:"https://glottolog.org/resource/languoid/id/miss1255"},
{Name:"Bu",Classification:"Beboid",Country:"Cameroon",Latitude:6.60,Longitude:10.27,"ISO CODE":" jid",Linkiso:"https://iso639-3.sil.org/code/ jid",GLOTTOCODE:"buuu1244",linkglot:"https://glottolog.org/resource/languoid/id/buuu1244"},
{Name:"Misaje",Classification:"Beboid",Country:"Cameroon",Latitude:6.63,Longitude:10.59,"ISO CODE":"x",Linkiso:"x",GLOTTOCODE:"x",linkglot:"x"},
{Name:"Akweto",Classification:"Beboid",Country:"Cameroon",Latitude:6.63,Longitude:10.60,"ISO CODE":"asj",Linkiso:"https://iso639-3.sil.org/code/asj",GLOTTOCODE:"nsar1238",linkglot:"https://glottolog.org/resource/languoid/id/nsar1238"},
{Name:"Menkaf",Classification:"Beboid",Country:"Cameroon",Latitude:6.60,Longitude:10.17,"ISO CODE":"mff",Linkiso:"https://iso639-3.sil.org/code/mff",GLOTTOCODE:"naki1238",linkglot:"https://glottolog.org/resource/languoid/id/naki1238"},
{Name:"Bebe Jatto",Classification:"Jatto_Beboid",Country:"Cameroon",Latitude:6.75,Longitude:10.56,"ISO CODE":"bzv",Linkiso:"https://iso639-3.sil.org/code/bzv",GLOTTOCODE:"bebe1250",linkglot:"https://glottolog.org/resource/languoid/id/bebe1250"},
{Name:"Kenyang",Classification:"Mamfe",Country:"Cameroon",Latitude:5.58,Longitude:9.56,"ISO CODE":"ken",Linkiso:"https://iso639-3.sil.org/code/ken",GLOTTOCODE:"keny1279",linkglot:"https://glottolog.org/resource/languoid/id/keny1279"},
{Name:"Mbembe",Classification:"Jukunoid",Country:"Cameroon",Latitude:6.98,Longitude:10.71,"ISO CODE":"nza",Linkiso:"https://iso639-3.sil.org/code/nza",GLOTTOCODE:"tigo1236",linkglot:"https://glottolog.org/resource/languoid/id/tigo1236"},
{Name:"Yukuben",Classification:"Jukunoid",Country:"Cameroon",Latitude:6.92,Longitude:9.98,"ISO CODE":"ybl",Linkiso:"https://iso639-3.sil.org/code/ybl",GLOTTOCODE:"yuku1243",linkglot:"https://glottolog.org/resource/languoid/id/yuku1243"},
{Name:"Kutep",Classification:"Jukunoid",Country:"Cameroon",Latitude:7.07,Longitude:10.09,"ISO CODE":"kub",Linkiso:"https://iso639-3.sil.org/code/kub",GLOTTOCODE:"kute1248",linkglot:"https://glottolog.org/resource/languoid/id/kute1248"},
{Name:"Kente",Classification:"Jukunoid",Country:"Cameroon",Latitude:7.59,Longitude:10.17,"ISO CODE":"x",Linkiso:"x",GLOTTOCODE:"kent1256",linkglot:"https://glottolog.org/resource/languoid/id/kent1256"},
{Name:"Icen",Classification:"Jukunoid",Country:"Cameroon",Latitude:7.14,Longitude:10.35,"ISO CODE":"ich",Linkiso:"https://iso639-3.sil.org/code/ich",GLOTTOCODE:"etky1238",linkglot:"https://glottolog.org/resource/languoid/id/etky1238"},
{Name:"Ashuku",Classification:"Jukunoid",Country:"Cameroon",Latitude:7.04,Longitude:10.58,"ISO CODE":"x",Linkiso:"x",GLOTTOCODE:"ashu1243",linkglot:"https://glottolog.org/resource/languoid/id/ashu1243"},
{Name:"Jiru",Classification:"Jukunoid",Country:"Cameroon",Latitude:8.64,Longitude:10.59,"ISO CODE":"jrr",Linkiso:"https://iso639-3.sil.org/code/jrr",GLOTTOCODE:"jiru1238",linkglot:"https://glottolog.org/resource/languoid/id/jiru1238"},
{Name:"Kom",Classification:"Grassfields_Ring_Center",Country:"Cameroon",Latitude:6.26,Longitude:10.33,"ISO CODE":"bkm",Linkiso:"https://iso639-3.sil.org/code/bkm",GLOTTOCODE:"komc1235",linkglot:"https://glottolog.org/resource/languoid/id/komc1235"},
{Name:"Oku",Classification:"Grassfields_Ring_Center",Country:"Cameroon",Latitude:6.24,Longitude:10.51,"ISO CODE":"oku",Linkiso:"https://iso639-3.sil.org/code/oku",GLOTTOCODE:"okuu1243",linkglot:"https://glottolog.org/resource/languoid/id/okuu1243"},
{Name:"Babanki",Classification:"Grassfields_Ring_Center",Country:"Cameroon",Latitude:5.98,Longitude:10.29,"ISO CODE":"bbk",Linkiso:"https://iso639-3.sil.org/code/bbk",GLOTTOCODE:"baba1266",linkglot:"https://glottolog.org/resource/languoid/id/baba1266"},
{Name:"Bum",Classification:"Grassfields_Ring_Center",Country:"Cameroon",Latitude:6.49,Longitude:10.42,"ISO CODE":"bmv",Linkiso:"https://iso639-3.sil.org/code/bmv",GLOTTOCODE:"bumm1238",linkglot:"https://glottolog.org/resource/languoid/id/bumm1238"},
{Name:"Aghem",Classification:"Grassfields_Ring_West",Country:"Cameroon",Latitude:6.39,Longitude:10.08,"ISO CODE":"agq",Linkiso:"https://iso639-3.sil.org/code/agq",GLOTTOCODE:"aghe1239",linkglot:"https://glottolog.org/resource/languoid/id/aghe1239"},
{Name:"Weh",Classification:"Grassfields_Ring_West",Country:"Cameroon",Latitude:6.46,Longitude:10.12,"ISO CODE":"weh",Linkiso:"https://iso639-3.sil.org/code/weh",GLOTTOCODE:"wehh1238",linkglot:"https://glottolog.org/resource/languoid/id/wehh1238"},
{Name:"Isu",Classification:"Grassfields_Ring_West",Country:"Cameroon",Latitude:6.63,Longitude:9.99,"ISO CODE":"isu",Linkiso:"https://iso639-3.sil.org/code/isu",GLOTTOCODE:"isum1240",linkglot:"https://glottolog.org/resource/languoid/id/isum1240"},
{Name:"Zoa",Classification:"Grassfields_Ring_West",Country:"Cameroon",Latitude:6.53,Longitude:10.16,"ISO CODE":"zhw",Linkiso:"https://iso639-3.sil.org/code/zhw",GLOTTOCODE:"zhoa1238",linkglot:"https://glottolog.org/resource/languoid/id/zhoa1238"},
{Name:"Kumfutu",Classification:"Grassfields_Ring_West",Country:"Cameroon",Latitude:6.48,Longitude:10.20,"ISO CODE":"kfn",Linkiso:"https://iso639-3.sil.org/code/kfn",GLOTTOCODE:"kukk1239",linkglot:"https://glottolog.org/resource/languoid/id/kukk1239"},
{Name:"Babunɡo",Classification:"Grassfields_Ring_South",Country:"Cameroon",Latitude:6.11,Longitude:10.41,"ISO CODE":"bav",Linkiso:"https://iso639-3.sil.org/code/bav",GLOTTOCODE:"veng1238",linkglot:"https://glottolog.org/resource/languoid/id/veng1238"},
{Name:"Babessi",Classification:"Grassfields_Ring_South",Country:"Cameroon",Latitude:6.07,Longitude:10.60,"ISO CODE":"bse",Linkiso:"https://iso639-3.sil.org/code/bse",GLOTTOCODE:"wush1238",linkglot:"https://glottolog.org/resource/languoid/id/wush1238"},
{Name:"Bamessing",Classification:"Grassfields_Ring_South",Country:"Cameroon",Latitude:6.02,Longitude:10.41,"ISO CODE":"ndb",Linkiso:"https://iso639-3.sil.org/code/ndb",GLOTTOCODE:"kens1251",linkglot:"https://glottolog.org/resource/languoid/id/kens1251"},
{Name:"Lamso",Classification:"Ring_East",Country:"Cameroon",Latitude:6.40,Longitude:11.07,"ISO CODE":"lns",Linkiso:"https://iso639-3.sil.org/code/lns",GLOTTOCODE:"lamn1239",linkglot:"https://glottolog.org/resource/languoid/id/lamn1239"},
{Name:"Obang",Classification:"Menchum",Country:"Cameroon",Latitude:6.28,Longitude:10.03,"ISO CODE":"x",Linkiso:"x",GLOTTOCODE:"oban1245",linkglot:"https://glottolog.org/resource/languoid/id/oban1245"},
{Name:"Ngie",Classification:"Grassfields_Momo",Country:"Cameroon",Latitude:5.94,Longitude:9.79,"ISO CODE":"ngj",Linkiso:"https://iso639-3.sil.org/code/ngj",GLOTTOCODE:"ngie1242",linkglot:"https://glottolog.org/resource/languoid/id/ngie1242"},
{Name:"Njen",Classification:"Grassfields_Momo",Country:"Cameroon",Latitude:5.75,Longitude:9.90,"ISO CODE":"njj",Linkiso:"https://iso639-3.sil.org/code/njj",GLOTTOCODE:"njen1238",linkglot:"https://glottolog.org/resource/languoid/id/njen1238"},
{Name:"Moghamo",Classification:"Grassfields_Momo",Country:"Cameroon",Latitude:6.11,Longitude:9.97,"ISO CODE":"x",Linkiso:"x",GLOTTOCODE:"mogh1246",linkglot:"https://glottolog.org/resource/languoid/id/mogh1246"},
{Name:"Ngembu",Classification:"Grassfields_Momo",Country:"Cameroon",Latitude:5.9,Longitude:10.09,"ISO CODE":"nbv",Linkiso:"https://iso639-3.sil.org/code/nbv",GLOTTOCODE:"ngam1267",linkglot:"https://glottolog.org/resource/languoid/id/ngam1267"},
{Name:"Oshie",Classification:"Grassfields_Momo",Country:"Cameroon",Latitude:6.05,Longitude:9.83,"ISO CODE":"nsh",Linkiso:"https://iso639-3.sil.org/code/nsh",GLOTTOCODE:"ngos1238",linkglot:"https://glottolog.org/resource/languoid/id/ngos1238"},
{Name:"Ngwaw",Classification:"Grassfields_Momo",Country:"Cameroon",Latitude:6.18,Longitude:9.84,"ISO CODE":"ngn",Linkiso:"https://iso639-3.sil.org/code/ngn",GLOTTOCODE:"ngwo1241",linkglot:"https://glottolog.org/resource/languoid/id/ngwo1241"},
{Name:"Mundumi",Classification:"Grassfields_Momo",Country:"Cameroon",Latitude:6.14,Longitude:9.97,"ISO CODE":"mnf",Linkiso:"https://iso639-3.sil.org/code/mnf",GLOTTOCODE:"mund1327",linkglot:"https://glottolog.org/resource/languoid/id/mund1327"},
{Name:"Menemo",Classification:"Grassfields_Momo",Country:"Cameroon",Latitude:6.11,Longitude:9.97,"ISO CODE":"x",Linkiso:"x",GLOTTOCODE:"mene1239",linkglot:"https://glottolog.org/resource/languoid/id/mene1239"},
{Name:"Ngie-Angong",Classification:"Grassfields_Momo",Country:"Cameroon",Latitude:5.97,Longitude:9.67,"ISO CODE":"x",Linkiso:"x",GLOTTOCODE:"meng1265",linkglot:"https://glottolog.org/resource/languoid/id/meng1265"},
{Name:"Bangang",Classification:"Grassfields_EG_Bamileke",Country:"Cameroon",Latitude:5.61,Longitude:10.13,"ISO CODE":"x",Linkiso:"x",GLOTTOCODE:"bang1358",linkglot:"https://glottolog.org/resource/languoid/id/bang1358"},
{Name:"Fefe",Classification:"Grassfields_EG_Bamileke",Country:"Cameroon",Latitude:5.18,Longitude:10.14,"ISO CODE":"fmp",Linkiso:"https://iso639-3.sil.org/code/fmp",GLOTTOCODE:"fefe1239",linkglot:"https://glottolog.org/resource/languoid/id/fefe1239"},
{Name:"Fotouni",Classification:"Grassfields_EG_Bamileke",Country:"Cameroon",Latitude:5.18,Longitude:10.14,"ISO CODE":"fmp",Linkiso:"https://iso639-3.sil.org/code/fmp",GLOTTOCODE:"fefe1239",linkglot:"https://glottolog.org/resource/languoid/id/fefe1239"},
{Name:"Bandjoun",Classification:"Grassfields_EG_Bamileke",Country:"Cameroon",Latitude:5.40,Longitude:10.35,"ISO CODE":"bbj",Linkiso:"https://iso639-3.sil.org/code/bbj",GLOTTOCODE:"ghom1247",linkglot:"https://glottolog.org/resource/languoid/id/ghom1247"},
{Name:"Bafou",Classification:"Grassfields_EG_Bamileke",Country:"Cameroon",Latitude:5.47,Longitude:10.02,"ISO CODE":"x",Linkiso:"x",GLOTTOCODE:"bafo1236",linkglot:"https://glottolog.org/resource/languoid/id/bafo1236"},
{Name:"Bangangte",Classification:"Grassfields_EG_Bamileke",Country:"Cameroon",Latitude:5.14,Longitude:10.52,"ISO CODE":"byv",Linkiso:"https://iso639-3.sil.org/code/byv",GLOTTOCODE:"medu1238",linkglot:"https://glottolog.org/resource/languoid/id/medu1238"},
{Name:"Baham",Classification:"Grassfields_EG_Bamileke",Country:"Cameroon",Latitude:5.33,Longitude:10.39,"ISO CODE":"xmg",Linkiso:"https://iso639-3.sil.org/code/xmg",GLOTTOCODE:"meng1264",linkglot:"https://glottolog.org/resource/languoid/id/meng1264"},
{Name:"Fondjomekwet",Classification:"Grassfields_EG_Bamileke",Country:"Cameroon",Latitude:5.26,Longitude:10.15,"ISO CODE":"fmp",Linkiso:"https://iso639-3.sil.org/code/fmp",GLOTTOCODE:"fefe1239",linkglot:"https://glottolog.org/resource/languoid/id/fefe1239"},
{Name:"Batcha",Classification:"Grassfields_EG_Bamileke",Country:"Cameroon",Latitude:5.11,Longitude:10.32,"ISO CODE":"nnh",Linkiso:"https://iso639-3.sil.org/code/nnh",GLOTTOCODE:"ngie1241",linkglot:"https://glottolog.org/resource/languoid/id/ngie1241"},
{Name:"Batoufam",Classification:"Grassfields_EG_Bamileke",Country:"Cameroon",Latitude:5.26,Longitude:10.46,"ISO CODE":"nnz",Linkiso:"https://iso639-3.sil.org/code/nnz",GLOTTOCODE:"ndan1241",linkglot:"https://glottolog.org/resource/languoid/id/ndan1241"},
{Name:"Bali/Mungaka",Classification:"Grassfields_EG_Nun",Country:"Cameroon",Latitude:5.90,Longitude:10.03,"ISO CODE":"mhk",Linkiso:"https://iso639-3.sil.org/code/mhk",GLOTTOCODE:"mung1266",linkglot:"https://glottolog.org/resource/languoid/id/mung1266"},
{Name:"Bamun",Classification:"Grassfields_EG_Nun",Country:"Cameroon",Latitude:5.49,Longitude:10.85,"ISO CODE":"bvm",Linkiso:"https://iso639-3.sil.org/code/bvm",GLOTTOCODE:"bamu1253",linkglot:"https://glottolog.org/resource/languoid/id/bamu1253"},
{Name:"Baba",Classification:"Grassfields_EG_Nun",Country:"Cameroon",Latitude:6.11,Longitude:10.52,"ISO CODE":"bbw",Linkiso:"https://iso639-3.sil.org/code/bbw",GLOTTOCODE:"baba1264",linkglot:"https://glottolog.org/resource/languoid/id/baba1264"},
{Name:"Bambalang",Classification:"Grassfields_EG_Nun",Country:"Cameroon",Latitude:5.86,Longitude:10.54,"ISO CODE":"bmo",Linkiso:"https://iso639-3.sil.org/code/bmo",GLOTTOCODE:"bamb1265",linkglot:"https://glottolog.org/resource/languoid/id/bamb1265"},
{Name:"Nkwen",Classification:"Grassfields_EG_Ngemba",Country:"Cameroon",Latitude:6.03,Longitude:10.24,"ISO CODE":"mfd",Linkiso:"https://iso639-3.sil.org/code/mfd",GLOTTOCODE:"mend1261",linkglot:"https://glottolog.org/resource/languoid/id/mend1261"},
{Name:"Bafut",Classification:"Grassfields_EG_Ngemba",Country:"Cameroon",Latitude:6.14,Longitude:10.12,"ISO CODE":"bfd",Linkiso:"https://iso639-3.sil.org/code/bfd",GLOTTOCODE:"bafu1246",linkglot:"https://glottolog.org/resource/languoid/id/bafu1246"},
{Name:"Mankon",Classification:"Grassfields_EG_Ngemba",Country:"Cameroon",Latitude:5.96,Longitude:10.15,"ISO CODE":"nge",Linkiso:"https://iso639-3.sil.org/code/nge",GLOTTOCODE:"ngem1255",linkglot:"https://glottolog.org/resource/languoid/id/ngem1255"},
{Name:"Awing",Classification:"Grassfields_EG_Ngemba",Country:"Cameroon",Latitude:5.88,Longitude:10.26,"ISO CODE":"azo",Linkiso:"https://iso639-3.sil.org/code/azo",GLOTTOCODE:"awin1248",linkglot:"https://glottolog.org/resource/languoid/id/awin1248"},
{Name:"Ngwe",Classification:"Grassfields_EG_Bamileke",Country:"Cameroon",Latitude:5.50,Longitude:9.90,"ISO CODE":"new",Linkiso:"https://iso639-3.sil.org/code/new",GLOTTOCODE:"ngwe1238",linkglot:"https://glottolog.org/resource/languoid/id/ngwe1238"},
{Name:"Limbum",Classification:"Grassfields_EG_North",Country:"Cameroon",Latitude:6.59,Longitude:10.98,"ISO CODE":"lmp",Linkiso:"https://iso639-3.sil.org/code/lmp",GLOTTOCODE:"limb1268",linkglot:"https://glottolog.org/resource/languoid/id/limb1268"},
{Name:"Adere",Classification:"Grassfields_EG_North",Country:"Cameroon",Latitude:6.89,Longitude:10.76,"ISO CODE":"add",Linkiso:"https://iso639-3.sil.org/code/add",GLOTTOCODE:"dzod1238",linkglot:"https://glottolog.org/resource/languoid/id/dzod1238"},
{Name:"Ndemli",Classification:"Grassfields",Country:"Cameroon",Latitude:4.58,Longitude:10.22,"ISO CODE":"nml",Linkiso:"https://iso639-3.sil.org/code/nml",GLOTTOCODE:"ndem1249",linkglot:"https://glottolog.org/resource/languoid/id/ndem1249"},
{Name:"Bwazza",Classification:"Jarawan",Country:"Cameroon or Nigeria?",Latitude:9.68,Longitude:12.19,"ISO CODE":"x",Linkiso:"x",GLOTTOCODE:"bwaz1238",linkglot:"https://glottolog.org/resource/languoid/id/bwaz1238"},
{Name:"Mbula",Classification:"Jarawan",Country:"Nigeria",Latitude:9.64,Longitude:12.1,"ISO CODE":"x",Linkiso:"x",GLOTTOCODE:"mbul1261",linkglot:"https://glottolog.org/resource/languoid/id/mbul1261"},
{Name:"Bile",Classification:"Jarawan",Country:"Nigeria",Latitude:9.05,Longitude:11.87,"ISO CODE":"bil",Linkiso:"https://iso639-3.sil.org/code/bil",GLOTTOCODE:"bile1244",linkglot:"https://glottolog.org/resource/languoid/id/bile1244"},
{Name:"Kulung",Classification:"Jarawan",Country:"Nigeria",Latitude:9.46,Longitude:10.97,"ISO CODE":"bbu",Linkiso:"https://iso639-3.sil.org/code/bbu",GLOTTOCODE:"kulu1255",linkglot:"https://glottolog.org/resource/languoid/id/kulu1255"},
{Name:"Duguri",Classification:"Jarawan",Country:"Nigeria",Latitude:9.61,Longitude:10.87,"ISO CODE":"dbm",Linkiso:"https://iso639-3.sil.org/code/dbm",GLOTTOCODE:"dugu1249",linkglot:"https://glottolog.org/resource/languoid/id/dugu1249"},
{Name:"A11_Londo",Classification:"Bantu",Country:"Cameroon",Latitude:5.1,Longitude:9.29,"ISO CODE":"x",Linkiso:"x",GLOTTOCODE:"lond1243",linkglot:"https://glottolog.org/resource/languoid/id/lond1243"},
{Name:"A121_Mbonge",Classification:"Bantu",Country:"Cameroon",Latitude:4.78,Longitude:9.2,"ISO CODE":"x",Linkiso:"x",GLOTTOCODE:"mbon1250",linkglot:"https://glottolog.org/resource/languoid/id/mbon1250"},
{Name:"A122_Bakundu",Classification:"Bantu",Country:"Cameroon",Latitude:4.81,Longitude:9.1,"ISO CODE":"x",Linkiso:"x",GLOTTOCODE:"baku1261",linkglot:"https://glottolog.org/resource/languoid/id/baku1261"},
{Name:"A15_Manenguba",Classification:"Bantu",Country:"Cameroon",Latitude:4.98,Longitude:9.67,"ISO CODE":"x",Linkiso:"x",GLOTTOCODE:"mane1268",linkglot:"https://glottolog.org/resource/languoid/id/mane1268"},
{Name:"A15C_Akossi",Classification:"Bantu",Country:"Cameroon",Latitude:5.3,Longitude:9.55,"ISO CODE":"bss",Linkiso:"https://iso639-3.sil.org/code/bss",GLOTTOCODE:"akoo1248",linkglot:"https://glottolog.org/resource/languoid/id/akoo1248"},
{Name:"A22_Bakweri ",Classification:"Bantu",Country:"Cameroon",Latitude:4.25,Longitude:9.35,"ISO CODE":"bri",Linkiso:"https://iso639-3.sil.org/code/bri",GLOTTOCODE:"mokp1239",linkglot:"https://glottolog.org/resource/languoid/id/mokp1239"},
{Name:"A24_Duala",Classification:"Bantu",Country:"Cameroon",Latitude:4.2,Longitude:9.55,"ISO CODE":"dua",Linkiso:"https://iso639-3.sil.org/code/dua",GLOTTOCODE:"dual1243",linkglot:"https://glottolog.org/resource/languoid/id/dual1243"},
{Name:"A27_Malimba",Classification:"Bantu",Country:"Cameroon",Latitude:3.75,Longitude:9.6,"ISO CODE":"mzd",Linkiso:"https://iso639-3.sil.org/code/mzd",GLOTTOCODE:"mali1280",linkglot:"https://glottolog.org/resource/languoid/id/mali1280"},
{Name:"A31_Bubi",Classification:"Bantu",Country:"Cameroon",Latitude:3.4,Longitude:8.65,"ISO CODE":"bvb",Linkiso:"https://iso639-3.sil.org/code/bvb",GLOTTOCODE:"bube1242",linkglot:"https://glottolog.org/resource/languoid/id/bube1242"},
{Name:"A33a_Yasa",Classification:"Bantu",Country:"Cameroon",Latitude:2.45,Longitude:9.85,"ISO CODE":"yko",Linkiso:"https://iso639-3.sil.org/code/yko",GLOTTOCODE:"yasa1242",linkglot:"https://glottolog.org/resource/languoid/id/yasa1242"},
{Name:"A34_Benga",Classification:"Bantu",Country:"Cameroon",Latitude:1.25,Longitude:9.4,"ISO CODE":"bng",Linkiso:"https://iso639-3.sil.org/code/bng",GLOTTOCODE:"beng1282",linkglot:"https://glottolog.org/resource/languoid/id/beng1282"},
{Name:"A41_Barombi-Kang",Classification:"Bantu",Country:"Cameroon",Latitude:4.55,Longitude:9.35,"ISO CODE":"bbi",Linkiso:"https://iso639-3.sil.org/code/bbi",GLOTTOCODE:"baro1252",linkglot:"https://glottolog.org/resource/languoid/id/baro1252"},
{Name:"A42_Abo",Classification:"Bantu",Country:"Cameroon",Latitude:4.4,Longitude:9.6,"ISO CODE":"abb",Linkiso:"https://iso639-3.sil.org/code/abb",GLOTTOCODE:"bank1256",linkglot:"https://glottolog.org/resource/languoid/id/bank1256"},
{Name:"A43a_Basaa",Classification:"Bantu",Country:"Cameroon",Latitude:5,Longitude:10.2,"ISO CODE":"bas",Linkiso:"https://iso639-3.sil.org/code/bas",GLOTTOCODE:"basa1284",linkglot:"https://glottolog.org/resource/languoid/id/basa1284"},
{Name:"A44_Tunen",Classification:"Bantu",Country:"Cameroon",Latitude:4.7,Longitude:10.9,"ISO CODE":"tvu",Linkiso:"https://iso639-3.sil.org/code/tvu",GLOTTOCODE:"tune1261",linkglot:"https://glottolog.org/resource/languoid/id/tune1261"},
{Name:"A45_Nyokon",Classification:"Bantu",Country:"Cameroon",Latitude:4.78,Longitude:10.95,"ISO CODE":"nvo",Linkiso:"https://iso639-3.sil.org/code/nvo",GLOTTOCODE:"nyok1243",linkglot:"https://glottolog.org/resource/languoid/id/nyok1243"},
{Name:"A46_Nomaande",Classification:"Bantu",Country:"Cameroon",Latitude:4.62,Longitude:11.06,"ISO CODE":"lem",Linkiso:"https://iso639-3.sil.org/code/lem",GLOTTOCODE:"noma1260",linkglot:"https://glottolog.org/resource/languoid/id/noma1260"},
{Name:"A462_Yambeta",Classification:"Bantu",Country:"Cameroon",Latitude:4.74,Longitude:11.03,"ISO CODE":"yat",Linkiso:"https://iso639-3.sil.org/code/yat",GLOTTOCODE:"yamb1252",linkglot:"https://glottolog.org/resource/languoid/id/yamb1252"},
{Name:"A51_Bafia_maja",Classification:"Bantu",Country:"Cameroon",Latitude:4.83,Longitude:11.17,"ISO CODE":"lfa",Linkiso:"https://iso639-3.sil.org/code/lfa",GLOTTOCODE:"lefa1242",linkglot:"https://glottolog.org/resource/languoid/id/lefa1242"},
{Name:"A53_Bafia_rikpa",Classification:"Bantu",Country:"Cameroon",Latitude:5,Longitude:11.15,"ISO CODE":"ksf",Linkiso:"https://iso639-3.sil.org/code/ksf",GLOTTOCODE:"bafi1243",linkglot:"https://glottolog.org/resource/languoid/id/bafi1243"},
{Name:"A601_Tuki",Classification:"Bantu",Country:"Cameroon",Latitude:4.5,Longitude:11.4,"ISO CODE":"bag",Linkiso:"https://iso639-3.sil.org/code/bag",GLOTTOCODE:"tuki1240",linkglot:"https://glottolog.org/resource/languoid/id/tuki1240"},
{Name:"A622_Nugunu ",Classification:"Bantu",Country:"Cameroon",Latitude:4.6,Longitude:11.3,"ISO CODE":"yas",Linkiso:"https://iso639-3.sil.org/code/yas",GLOTTOCODE:"nugu1242",linkglot:"https://glottolog.org/resource/languoid/id/nugu1242"},
{Name:"A63_Mangisa",Classification:"Bantu",Country:"Cameroon",Latitude:4.45,Longitude:11.45,"ISO CODE":"leo",Linkiso:"https://iso639-3.sil.org/code/leo",GLOTTOCODE:"leti1245",linkglot:"https://glottolog.org/resource/languoid/id/leti1245"},
{Name:"A71_Eton",Classification:"Bantu",Country:"Cameroon",Latitude:4.25,Longitude:11.45,"ISO CODE":"eto",Linkiso:"https://iso639-3.sil.org/code/eto",GLOTTOCODE:"eton1253",linkglot:"https://glottolog.org/resource/languoid/id/eton1253"},
{Name:"A72a_Ewondo",Classification:"Bantu",Country:"Cameroon",Latitude:4.2,Longitude:12.2,"ISO CODE":"ewo",Linkiso:"https://iso639-3.sil.org/code/ewo",GLOTTOCODE:"ewon1239",linkglot:"https://glottolog.org/resource/languoid/id/ewon1239"},
{Name:"A74a_Bulu",Classification:"Bantu",Country:"Cameroon",Latitude:2.95,Longitude:10.85,"ISO CODE":"bum",Linkiso:"https://iso639-3.sil.org/code/bum",GLOTTOCODE:"bulu1251",linkglot:"https://glottolog.org/resource/languoid/id/bulu1251"},
{Name:"A75a_Fang_Bitam",Classification:"Bantu",Country:"Gabon",Latitude:2.08,Longitude:11.49,"ISO CODE":"fan",Linkiso:"https://iso639-3.sil.org/code/fan",GLOTTOCODE:"fang1246",linkglot:"https://glottolog.org/resource/languoid/id/fang1246"},
{Name:"A81_Kwasio ",Classification:"Bantu",Country:"Cameroon",Latitude:3.06,Longitude:10.22,"ISO CODE":"nmg",Linkiso:"https://iso639-3.sil.org/code/nmg",GLOTTOCODE:"kwas1243",linkglot:"https://glottolog.org/resource/languoid/id/kwas1243"},
{Name:"A83_Mekaa",Classification:"Bantu",Country:"Cameroon",Latitude:4.17,Longitude:12.52,"ISO CODE":"mcp",Linkiso:"https://iso639-3.sil.org/code/mcp",GLOTTOCODE:"maka1304",linkglot:"https://glottolog.org/resource/languoid/id/maka1304"},
{Name:"A85b_Bekwil_Makokou",Classification:"Bantu",Country:"Gabon",Latitude:0.56,Longitude:12.83,"ISO CODE":"bkw",Linkiso:"https://iso639-3.sil.org/code/bkw",GLOTTOCODE:"bekw1242",linkglot:"https://glottolog.org/resource/languoid/id/bekw1242"},
{Name:"A86c_Mpiemo",Classification:"Bantu",Country:"Cameroon",Latitude:3.41,Longitude:15.27,"ISO CODE":"mcx",Linkiso:"https://iso639-3.sil.org/code/mcx",GLOTTOCODE:"mpie1238",linkglot:"https://glottolog.org/resource/languoid/id/mpie1238"},
{Name:"A91_Kwakum",Classification:"Bantu",Country:"Cameroon",Latitude:4.8,Longitude:13.5,"ISO CODE":"kwu",Linkiso:"https://iso639-3.sil.org/code/kwu",GLOTTOCODE:"kwak1266",linkglot:"https://glottolog.org/resource/languoid/id/kwak1266"},
{Name:"A93_Kako",Classification:"Bantu",Country:"Cameroon",Latitude:4.71,Longitude:13.9,"ISO CODE":"kkj",Linkiso:"https://iso639-3.sil.org/code/kkj",GLOTTOCODE:"kako1242",linkglot:"https://glottolog.org/resource/languoid/id/kako1242"},
{Name:"B11a_Mpongwe",Classification:"Bantu",Country:"Gabon",Latitude:-1.2,Longitude:9.55,"ISO CODE":"x",Linkiso:"x",GLOTTOCODE:"mpon1255",linkglot:"https://glottolog.org/resource/languoid/id/mpon1255"},
{Name:"B11b_Orungu",Classification:"Bantu",Country:"Gabon",Latitude:-0.72,Longitude:8.78,"ISO CODE":"x",Linkiso:"x",GLOTTOCODE:"orun1242",linkglot:"https://glottolog.org/resource/languoid/id/orun1242"},
{Name:"B11c_Galwa",Classification:"Bantu",Country:"Gabon",Latitude:-0.7,Longitude:10.24,"ISO CODE":"x",Linkiso:"x",GLOTTOCODE:"galw1238",linkglot:"https://glottolog.org/resource/languoid/id/galw1238"},
{Name:"B11d_Dyumba ",Classification:"Bantu",Country:"Gabon",Latitude:-0.59,Longitude:10.07,"ISO CODE":"x",Linkiso:"x",GLOTTOCODE:"ajum1239",linkglot:"https://glottolog.org/resource/languoid/id/ajum1239"},
{Name:"B11F_Enenga",Classification:"Bantu",Country:"Gabon",Latitude:-0.7,Longitude:10.29,"ISO CODE":"x",Linkiso:"x",GLOTTOCODE:"nen1239",linkglot:"https://glottolog.org/resource/languoid/id/nen1239"},
{Name:"B31_Tsogo",Classification:"Bantu",Country:"Gabon",Latitude:-1.5,Longitude:11.3,"ISO CODE":"tsv",Linkiso:"https://iso639-3.sil.org/code/tsv",GLOTTOCODE:"tsog1243",linkglot:"https://glottolog.org/resource/languoid/id/tsog1243"},
{Name:"B32_Kande",Classification:"Bantu",Country:"Gabon",Latitude:-0.01,Longitude:11.75,"ISO CODE":"kbs",Linkiso:"https://iso639-3.sil.org/code/kbs",GLOTTOCODE:"kand1300",linkglot:"https://glottolog.org/resource/languoid/id/kand1300"},
{Name:"B301_Viya",Classification:"Bantu",Country:"Gabon",Latitude:-1.21,Longitude:10.65,"ISO CODE":"gev",Linkiso:"https://iso639-3.sil.org/code/gev",GLOTTOCODE:"eviy1235",linkglot:"https://glottolog.org/resource/languoid/id/eviy1235"},
{Name:"B302_Himba",Classification:"Bantu",Country:"Gabon",Latitude:-1.48,Longitude:11.54,"ISO CODE":"sbw",Linkiso:"https://iso639-3.sil.org/code/sbw",GLOTTOCODE:"simb1254",linkglot:"https://glottolog.org/resource/languoid/id/simb1254"},
{Name:"B304_Pinzi",Classification:"Bantu",Country:"Gabon",Latitude:-1.93,Longitude:11.22,"ISO CODE":"pic",Linkiso:"https://iso639-3.sil.org/code/pic",GLOTTOCODE:"pinj1243",linkglot:"https://glottolog.org/resource/languoid/id/pinj1243"},
{Name:"B305_Vove",Classification:"Bantu",Country:"Gabon",Latitude:-1.1,Longitude:12.3,"ISO CODE":"buw",Linkiso:"https://iso639-3.sil.org/code/buw",GLOTTOCODE:"bubi1250",linkglot:"https://glottolog.org/resource/languoid/id/bubi1250"},
{Name:"B21_Seki ",Classification:"Bantu",Country:"Gabon",Latitude:0.95,Longitude:9.6,"ISO CODE":"syi",Linkiso:"https://iso639-3.sil.org/code/syi",GLOTTOCODE:"seki1238",linkglot:"https://glottolog.org/resource/languoid/id/seki1238"},
{Name:"B22a_Kele",Classification:"Bantu",Country:"Gabon",Latitude:-0.8,Longitude:10.35,"ISO CODE":"keb",Linkiso:"https://iso639-3.sil.org/code/keb",GLOTTOCODE:"kele1257",linkglot:"https://glottolog.org/resource/languoid/id/kele1257"},
{Name:"B22b_Ngom ",Classification:"Bantu",Country:"Gabon",Latitude:1.3,Longitude:14.15,"ISO CODE":"nra",Linkiso:"https://iso639-3.sil.org/code/nra",GLOTTOCODE:"ngom1270",linkglot:"https://glottolog.org/resource/languoid/id/ngom1270"},
{Name:"B22E_Mwesa",Classification:"Bantu",Country:"Gabon",Latitude:1.2,Longitude:13.3,"ISO CODE":"x",Linkiso:"x",GLOTTOCODE:"mwes1234",linkglot:"https://glottolog.org/resource/languoid/id/mwes1234"},
{Name:"B23_Mbangwe",Classification:"Bantu",Country:"Gabon",Latitude:-2.1,Longitude:13.65,"ISO CODE":"zmn",Linkiso:"https://iso639-3.sil.org/code/zmn",GLOTTOCODE:"mban1268",linkglot:"https://glottolog.org/resource/languoid/id/mban1268"},
{Name:"B24_Wumbvu",Classification:"Bantu",Country:"Gabon",Latitude:-2.3,Longitude:12.25,"ISO CODE":"wum",Linkiso:"https://iso639-3.sil.org/code/wum",GLOTTOCODE:"wumb1242",linkglot:"https://glottolog.org/resource/languoid/id/wumb1242"},
{Name:"B25_Kota",Classification:"Bantu",Country:"Gabon",Latitude:-0.01,Longitude:12.8,"ISO CODE":"koq",Linkiso:"https://iso639-3.sil.org/code/koq",GLOTTOCODE:"kota1274",linkglot:"https://glottolog.org/resource/languoid/id/kota1274"},
{Name:"B251_Shake",Classification:"Bantu",Country:"Gabon",Latitude:0.25,Longitude:11.75,"ISO CODE":"sak",Linkiso:"https://iso639-3.sil.org/code/sak",GLOTTOCODE:"sake1247",linkglot:"https://glottolog.org/resource/languoid/id/sake1247"},
{Name:"B252_Mahongwe",Classification:"Bantu",Country:"Gabon",Latitude:0.65,Longitude:14,"ISO CODE":"mhb",Linkiso:"https://iso639-3.sil.org/code/mhb",GLOTTOCODE:"maho1248",linkglot:"https://glottolog.org/resource/languoid/id/maho1248"},
{Name:"B201_Ndasa",Classification:"Bantu",Country:"Gabon",Latitude:-3,Longitude:13.6,"ISO CODE":"nda",Linkiso:"https://iso639-3.sil.org/code/nda",GLOTTOCODE:"ndas1238",linkglot:"https://glottolog.org/resource/languoid/id/ndas1238"},
{Name:"B202_Sigu",Classification:"Bantu",Country:"Gabon",Latitude:-0.7,Longitude:12.55,"ISO CODE":"sxe",Linkiso:"https://iso639-3.sil.org/code/sxe",GLOTTOCODE:"sigh1238",linkglot:"https://glottolog.org/resource/languoid/id/sigh1238"},
{Name:"B203_Samaye",Classification:"Bantu",Country:"Gabon",Latitude:0.96,Longitude:13.7,"ISO CODE":"syx",Linkiso:"https://iso639-3.sil.org/code/syx",GLOTTOCODE:"osam1235",linkglot:"https://glottolog.org/resource/languoid/id/osam1235"},
{Name:"B204_Ndambomo_Li",Classification:"Bantu",Country:"Gabon",Latitude:0.68,Longitude:12.65,"ISO CODE":"nxo",Linkiso:"https://iso639-3.sil.org/code/nxo",GLOTTOCODE:"ndam1254",linkglot:"https://glottolog.org/resource/languoid/id/ndam1254"},

];

const map = L.map('map').setView([0, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const markers = {};
locationsData.forEach(location => {
  const { Name, Classification, Country, Longitude, Latitude } = location;
  const radius = 5;
  let color;
  switch (Classification) {
    case "Ekoid":
      color = "#666666"; // dark grey
      break;
    case "Tivoid":
      color = "#800080"; // purple
      break;
    case "Central_Tivoid":
      color = "#800080"; // purple
      break;
    case "Beboid":
      color = "#000080"; // dark blue
      break;
    case "Mamfe":
      color = "#FF69B4"; // pink
      break;
    case "Grassfields_Ring_West":
      color = "#FFA500"; // orange
      break;
    case "Bantu":
      color = "#B22222"; // red
      break;
    case "Jarawan":
      color = "#2E8B57"; // green
      break;
    default:
      color = "#000000"; // black
  }
  const marker = L.circleMarker([Latitude, Longitude], {radius, color}).addTo(map);
  marker.bindPopup(`<strong>Name:</strong> ${Name}<br><strong>Classification:</strong> ${Classification}<br><strong>Country:</strong> ${Country}`);
  markers[`${Name}_${Country}`] = marker;
});

const table = $('#locationsTable').DataTable({
  data: locationsData,
  columns: [
    { data: 'Name' },
    { data: 'Classification' },
    { data: 'Country' },
    { data: 'ISO CODE', render: function ( data, type, row, meta ) {
        if(type === 'display'){
          return `<a href="${row.Linkiso}" target="_blank">${data}</a>`;
        }
        return data;
      }},
    { data: 'GLOTTOCODE', render: function ( data, type, row, meta ) {
        if(type === 'display'){
          return `<a href="${row.linkglot}" target="_blank">${data}</a>`;
        }
        return data;
      }},
    
    { data: 'Latitude' },
    { data: 'Longitude' },
    ],
});

$('#locationsTable tbody').on('mouseenter', 'tr', function () {
  const rowData = table.row(this).data();
  const { Name, Country } = rowData;
  const marker = markers[`${Name}_${Country}`];
  marker.openPopup();
});

$('#locationsTable tbody').on('mouseleave', 'tr', function () {
  const rowData = table.row(this).data();
  const { Name, Country } = rowData;
  const marker = markers[`${Name}_${Country}`];
  marker.closePopup();
});


// Populate the language filter dropdown
const languages = [...new Set(locationsData.map(location => location.Classification))].sort();
languages.forEach(language => {
$('#languageFilter').append(`<option value="${language}">${language}</option>`);



});

$('#languageFilter').on('change', function () {
const selectedLanguage = this.value;
table.column(1).search(selectedLanguage).draw();

if (selectedLanguage) {
locationsData.forEach(location => {
  const { Name, Country } = location;
  const marker = markers[`${location.Name}_${location.Country}`];
  if (location.Classification === selectedLanguage) {
    marker.addTo(map);
  } else {
    map.removeLayer(marker);
  }
});

} else {
locationsData.forEach(location => {
const { Name, Country } = location;
const marker = markers[`${location.Name}_${location.Country}`];
marker.addTo(map);
});
}
});
