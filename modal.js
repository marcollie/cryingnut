const album = [
    ["1. Everyday",
      "2. 도대체 넌 뭐냐?",
      "3. 핑크",
      "4. 말 달리자",
      "5. 펑크걸",
      "6. Balad Body",
      "7. 엿장수 맘대로",
      "8. Grin",
      "9. Loony Tunas (Y.M.C.A)",
      "10. Fuzzy Sorrows",
      "11. Betty Sticked The Fork In Her Eyes",
      "12. Under The People",
      "13. Orthodox Method To Enter Mass View"],
  
    ["1. 묘비명",
      "2. 갈매기",
      "3. 말 달리자",
      "4. 접속",
      "5. 파랑새",
      "6. 검은새",
      "7. 펑크걸",
      "8. 요람을 흔드는 돈",
      "9. 뻔데기",
      "10. 안웃겨",
      "11. 성냥팔이 소녀",
      "12. 허리케인",
      "13. 싸나이"],
  
    ["1. 서커스매직유랑단",
      "2. 신기한 노래",
      "3. 강변에 서다",
      "4. 배짱이",
      "5. 다죽자",
      "6. 더러운 도시",
      "7. 군바리 230",
      "8. 탈출기 (바람의 계곡을 넘어)",
      "9. 벗어",
      "10. 브로드웨이 AM 3:00",
      "11. S.F",
      "12. 빨대맨",
      "13. 게릴라성 집중호우"],
  
    ["1. 이소룡을 찾아랏!!",
      "2. 만성피로",
      "3. 밤이 깊었네",
      "4. 지독한 노래",
      "5. 붉은방",
      "6. 양귀비",
      "7. 웃기지도 않은 이야기",
      "8. 금환식",
      "9. Honey",
      "10. 불놀이",
      "11. 코미디의 왕",
      "12. 하수구",
      "13. 몰랐어"],
  
    ["1. 고물라디오",
      "2. 필살 Off side",
      "3. 너구리",
      "4. 퀵서비스맨",
      "5. 소크라테스 클럽",
      "6. 오드리",
      "7. 황금마차",
      "8. 사망가",
      "9. 타이거 당췌!",
      "10. Oh My 007",
      "11. 양치기 소년의 항해일지",
      "12. 개가 말하네",
      "13. 불꽃놀이",
      "14. 빽구두",
      "15. 귀뚜라미 별곡"],
  
    ["1. OK 목장의 젖소",
      "2. 룩셈부르크",
      "3. 부딪쳐",
      "4. 명동콜링",
      "5. 마시자",
      "6. 유원지의 밤",
      "7. 뜨거운 안녕",
      "8. 물밑의 속삭임 (Feat. 심수봉)",
      "9. 백수일기 (白水日記)",
      "10. 새",
      "11. My World",
      "12. 순이 우주로",
      "13. 오줌싸개 Generation",
      "14. 한낮의 꿈",
      "15. 감옥으로부터의 사색",
      "16. 튼튼이의 모험"],
  
    ["1. Crying Nut Song",
      "2. 착한 아이",
      "3. 불편한 파티",
      "4. 루나",
      "5. 만취천국",
      "6. 비둘기",
      "7. 귀신은 뭐하나",
      "8. Wake Up",
      "9. 가련다",
      "10. 가배물어(??物語)",
      "11. Rose Bang",
      "12. 빈자리",
      "13. 생일축하",
      "14. Gold Rush"],
  
    ["1. 해적의 항로",
      "2. Give Me The Money",
      "3. 레고",
      "4. 미지의 세계",
      "5. 5분 세탁",
      "6. 땅콩",
      "7. 새신발",
      "8. 취생몽사",
      "9. Self Happy Christmas & New Year",
      "10. 여름"],
  
    ["1. 구닥다리 멜로디",
      "2. 리모델링",
      "3. 내 인생 마지막 토요일",
      "4. 길고양이",
      "5. 잘생겨서 죄송합니다",
      "6. 심장의 노래",
      "7. 이방인",
      "8. 토요일 밤",
      "9. 똥이 밀려와",
      "10. 망상",
      "11. 우리들은 걷는다",
      "12. 운 좋게도 (2018 Mix)"],
  ];
  
  for (i = 0; i < album.length; i++) {  // 앨범 갯수
    const alList = album[i];
    for (z = 0; z < album[i].length; z++) {
      const list = "<li>" + alList[z] + "<li/>";
      alList.splice(z, 1, list);
    }
  }
  
  console.log(album);
  
// track 



const arrImg = new Array();

for (i = 0; i < 9; i++) {
    arrImg[i] = "#img" + i;
}

const openButton = document.querySelectorAll(arrImg);
console.log(openButton);
const modal = document.querySelector(".modal");
const closeButton = document.querySelector("button");
const modalOverlay = document.querySelector(".modal_overlay");
const modalText = document.querySelector(".modal_title");
const modalTrack = document.querySelector(".track");

const openModal = (event) => {
    switch (event.target.id) {
        case 'img0':
            modalText.innerHTML = "아워네이션";
            modalTrack.innerHTML = album[0].join("");
            break;
        case 'img1':
            modalText.innerHTML = "1집 말 달리자";
            modalTrack.innerHTML = album[1].join("");
            break;
        case 'img2':
            modalText.innerHTML = "2집 서커스 매직 유랑단";
            modalTrack.innerHTML = album[2].join("");
            break;
        case 'img3':
            modalText.innerHTML = "3집 하수연가";
            modalTrack.innerHTML = album[3].join("");
            break;
        case 'img4':
            modalText.innerHTML = "4집 고물라디오";
            modalTrack.innerHTML = album[4].join("");
            break;
        case 'img5':
            modalText.innerHTML = "5집 OK목장의 젖소";
            modalTrack.innerHTML = album[5].join("");
            break;
        case 'img6':
            modalText.innerHTML = "6집 불편한 파티";
            modalTrack.innerHTML = album[6].join("");
            break; 
        case 'img7':
            modalText.innerHTML = "7집 FLAMING NUTS";
            modalTrack.innerHTML = album[7].join("");
            break;  
        case 'img8':
            modalText.innerHTML = "8집 리모델링";
            modalTrack.innerHTML = album[8].join("");
            break; 
    }
    modal.classList.remove("hidden");
}

const closeModal = () => {
    modal.classList.add("hidden");
}

for (i = 0; i < openButton.length; i++) {
    openButton[i].addEventListener("click", openModal);
    console.log();
}
modalOverlay.addEventListener("click", closeModal);
closeButton.addEventListener("click", closeModal);

