import { useState } from "react";
import Search from "../components/Search";
import FoodList from "../components/FoodList";
import Nav from "../components/Nav";
import "./App.css";
import Container from "../components/container";
import InnerContainer from "../components/InnerContainer";
import FoodDetails from "../components/FoodDetails";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("656329");

  return (
    <div className="App">
      <Nav></Nav>
      <Search foodData={foodData} setFoodData={setFoodData}></Search>
      <Container>
        <InnerContainer>
          <FoodList setFoodId={setFoodId} foodData={foodData}></FoodList>
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId}></FoodDetails>
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
