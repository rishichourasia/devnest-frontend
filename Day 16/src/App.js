import "./styles.css";

function Box() {
  return <div className=="block"></div>;
}

function Boxes() {
  return (
    <div className=="row">
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
    </div>
  );
}

function BoxRow() {
  return (
    <div className=="board">
      <Boxes />
      <Boxes />
      <Boxes />
      <Boxes />
      <Boxes />
      <Boxes />
      <Boxes />
      <Boxes />
    </div>
  );
}

export default function App() {
  return (
    <div className=="App">
      <BoxRow />
    </div>
  );
}
