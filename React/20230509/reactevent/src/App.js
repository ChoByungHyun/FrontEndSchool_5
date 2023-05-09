import { useState } from "react";
import Login from "./Login";
import Homepage from "./Homepage";
import Modal from "./Modal";
function App() {
  const user = {
    idUser: "aaa",
    pwUser: "111",
  };
  const [login, setLogin] = useState(false);
  const [modalShow, setModalShow] = useState(true);
  const handleModal = () => {
    setModalShow(false);
  };

  return (
    <>
      {login ? <Homepage /> : <Login infoUser={user} setLogin={setLogin} />}{" "}
      {modalShow && (
        <Modal modalClose={handleModal}>
          <h2>사용약관에 대해 말씀드리겠습니다.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            illum laborum, quo facilis eaque quam optio aliquam nam provident.
            Laboriosam delectus, atque doloremque nam harum molestias ab
            quisquam! Quis, pariatur.
          </p>
          <a href="#none">더 보기</a>
        </Modal>
      )}
    </>
  );
}

export default App;
