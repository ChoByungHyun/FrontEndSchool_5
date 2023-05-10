import { useState } from "react";
import MyList from "./components/MyList";
import Counter from "./components/Counter";
import Detail from "./components/Detail";
import Question from "./components/Question";
import Review from "./components/Review";

function App() {
  const [datas, setDatas] = useState([
    {
      title: "개발자 무릎 담요",
      price: 17500,
      id: 101,
    },
    {
      title: "Hack Your Life 개발자 노트북 파우치",
      price: 29000,
      id: 102,
    },
    {
      title: "우당탕탕 라이켓의 실험실 스티커북",
      price: 29000,
      id: 103,
    },
    {
      title: "버그를 Java라 버그잡는 개리씨 키링",
      price: 29000,
      id: 104,
    },
  ]);
  function handleClick(id) {
    setDatas(
      datas.filter((item) => {
        return item.id !== id;
      })
    );
  }

  return (
    <div>
      <NavBar />
    </div>
  );
}
const ContentsContainer = ({ listName }) => {
  if (listName === "detail") {
    return <Detail />;
  } else if (listName === "qa") {
    return <Question />;
  } else if (listName === "review") {
    return <Review />;
  }
};
function NavBar() {
  const [listName, setListName] = useState("detail");
  const checkId = (e) => {
    setListName(e.target.id);
  };
  return (
    <>
      <nav>
        <ul>
          <li
            id="detail"
            onClick={checkId}
            style={
              listName === "detail" ? { color: "red" } : { color: "black" }
            }
          >
            상세정보
          </li>
          <li
            id="qa"
            onClick={checkId}
            style={listName === "qa" ? { color: "red" } : { color: "black" }}
          >
            Q&A
          </li>
          <li
            id="review"
            onClick={checkId}
            style={
              listName === "review" ? { color: "red" } : { color: "black" }
            }
          >
            Review
          </li>
        </ul>
      </nav>
      <ContentsContainer listName={listName} />
    </>
  );
}

function Hello({ name }) {
  if (name) {
    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  }
  return <NoName />;
}

function NoName() {
  return (
    <div>
      <h1>이름을 입력하지 않았습니다.</h1>
    </div>
  );
}

// function Hello(props) {
//   const name = props.name;
//   const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //1~10호를 만들 것입니다.

//   // list map을 이용하여 h1 태그들의 리스트를 만듭니다.
//   const numComponentsArray = num.map((i) => (
//     <h1>
//       안녕, {name} {i}호
//     </h1>
//   ));

//   return <div>{numComponentsArray}</div>;
// }

export default App;
