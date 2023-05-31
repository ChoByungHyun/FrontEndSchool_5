function App() {
  const [num, setNum] = React.useState(0);
  React.useEffect(() => {
    test();
  }, [num]);
  function test() {
    return <div>{num}</div>;
  }

  return (
    <div>
      {num} 뭐하라고있는거임??
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        더하기
      </button>
      <button
        onClick={() => {
          setNum(num - 1);
          // 괄호채우기
        }}
      >
        빼기
      </button>
    </div>
  );
}

function index() {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
}

index();
