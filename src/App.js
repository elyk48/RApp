
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Promo from './components/Promo';
import InputComponent from './components/InputComponent';
import RegisterForm from './components/RegisterForm';
function App(props) {
  return(
    <div className="App"> 
      
      <Nav name="elyes" color="pink"/>
      <h1>{props.title}</h1>
      <Intro1></Intro1>
      <Intro2></Intro2>
      <InputComponent/>
      <Intro3></Intro3>
      <RegisterForm/>
      <Promo></Promo>
      <Footer/>

    </div> 

    
  );
}



export default App;
