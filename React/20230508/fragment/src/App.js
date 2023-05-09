const items = [
  { id: 1, name: "Apple", desc: "빨간건 사과" },
  { id: 2, name: "Banana", desc: "바나나는 길어" },
  { id: 3, name: "Cherry", desc: "체리는 비싸" },
];

function ItemList() {
  const itemList = items.map((item) => {
    return (
      <>
        <dt>{item.name}</dt>
        <dd>{item.desc}</dd>
      </>
    );
  });
  return <dl>{itemList}</dl>;
}

function App() {
  return (
    <div>
      <ItemList />
    </div>
  );
}

export default App;
