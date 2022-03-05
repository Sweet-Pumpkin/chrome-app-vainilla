// 03. Quotes
const quotes = [
  {
    quote: "표현의 자유는 존재한다. 그러나 표현을 한 후의 자유는 보장할 수 없다.",
    author: "이디 아민"
  },
  {
    quote: "만약 고효율의 정부를 만들 수 있다면, 그것은 단지 독재정치일 뿐이다.",
    author: "해리 S. 트루먼"
  },
  {
    quote: "비판을 받는다는 것은, 일하지 않는 다는 것일지도 모른다.",
    author: "도널드 H. 럼스펠드"
  },
  {
    quote: "한 명을 죽이면 악인이지만, 일백 명을 죽이면 영웅이 된다. 숫자가 죄를 용서해준다고, 친구야!",
    author: "찰리 채플린"
  },
  {
    quote: "민주주의가 위대한 것은, 모든 유권자에게 어리석은 선택을 할 기회를 준다는 것이다.",
    author: "아트 스펜더"
  },
  {
    quote: "혁명은 무섭다. 하지만 선거는 꺼림칙하다.",
    author: "니콜라스 고메즈 다비라"
  },
  {
    quote: "평화적 수단으로밖에 평화를 실현할 수 없다고 생각하는 국가는, 머지 않아 다른 국가에게 흡수될 것이다.",
    author: "리처드 닉슨"
  },
  {
    quote: "공산주의는 금주법과 같다. 좋은 생각이지만, 도움이되진 않는다.",
    author: "윌 로저스"
  },
  {
    quote: "선거가 끝나면 노예제도가 시작된다.",
    author: "존 애덤스"
  },
  {
    quote: "모든 것은 국가 안에 있다. 국가를 떠나서는 아무 것도 없고, 국가에 대적할 수 있는 것도 없다.",
    author: "베니토 무솔리니"
  },
  {
    quote: "나를 수상으로 부르는 이상 내가 거짓말쟁이일리 없다.",
    author: "실비오 베를루스코니"
  },
  {
    quote: "저 놈이 빨갱이다!",
    author: "조지프 메카시"
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote =  quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;