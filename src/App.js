
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Promo from './components/Promo';
import Card from './components/Card';
import Btn from './components/Btn';
function App(props) {
  return(
    <div className="App"> 
      
      <Nav name="elyes" color="pink"/>
      <h1>{props.title}</h1>
      <Intro1></Intro1>
      <Intro2></Intro2>
      <Card h2="First card's h2" h3="First card's h3" />
        <Card h2="Second card's h2" h3="Second card's h3" />
        <Card h2="Third card's h2" h3="Third card's h3" />
        <Btn></Btn>
      <Intro3></Intro3>
      <Promo></Promo>
      <Footer/>

    </div> 

    
  );
}



export default App;
