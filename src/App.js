import faker from "faker";
import Header from "./components/Header";

function App() {
  let randomAnimalNameList = [];
  for (var i = 0; i < 10; i++) {
    randomAnimalNameList.push(faker.animal.dog());
  }
  console.log("RANDOM ANIMAL NAME LIST", randomAnimalNameList);

  var choosenAnimalName =
    randomAnimalNameList[
      Math.floor(Math.random() * randomAnimalNameList.length)
    ];
  console.log("CHOOSEN ANIMAL NAME", choosenAnimalName);
  console.log("CHOOSEN ANIMAL NAME LENGTH", choosenAnimalName.length);

  console.log("- ".repeat(choosenAnimalName.length));

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
