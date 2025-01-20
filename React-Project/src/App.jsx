import List from './List.jsx'
function App() {
  const fruits =  [ {id: 1, name: "apple", calories: 96},
                    {id: 2, name: "orange", calories: 39},
                    {id: 3, name: "lemon", calories: 67},
                    {id: 4, name: "Strawberry", calories: 78},
                    {id: 5, name: "Coconut", calories: 137},
                    {id: 6, name: "Pineapple", calories: 126}];

  const vegetables = [{id: 7, name: "carrot", calories: 89},
                      {id: 8, name: "brocolli", calories: 29},
                      {id: 9, name: "spinach", calories: 106},
                      {id: 10, name: "Tomatoes", calories: 91},
                      {id: 11, name: "Onion", calories: 109},
                      {id: 12, name: "Potatoes", calories: 111}];
  return(
    <>
    {fruits.length > 0 && <List items={fruits} category="Fruits"/> }
    {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/> }
    </>
    
  
    );
}

export default App
