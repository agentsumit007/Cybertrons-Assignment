import logo from './logo.svg';
import './App.css';
import ListItem from './ListItem';

function App() {
  return (
    <div className="App">
      <div className='container my-5'>

        <ListItem 
            name='Arabic Tea' 
            cal='250' 
            size='80' 
            price='49'
            url='https://cdn.pixabay.com/photo/2023/05/18/02/20/arabic-coffee-8001223_1280.jpg'/>
        <ListItem 
            name='Barbeque' 
            cal='200' 
            size='300'
            price='100' 
            url='https://images.pexels.com/photos/533325/pexels-photo-533325.jpeg?cs=srgb&dl=pexels-pixabay-533325.jpg&fm=jpg'/>
        <ListItem 
            name='Burger' 
            cal='300' 
            size='150'
            price='10' 
            url='https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&w=1000&q=80'/>

      </div>
    </div>
  );
}

export default App;
