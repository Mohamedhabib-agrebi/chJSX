
import './App.css';
import Description from './component/Description';
import Image from './component/Image';
import Name from './component/Name';
import Price from './component/Price';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  var name = ""
  return (
    <div className='hab'>
      
      
      

      <Card style={{ width: '18rem', textAlign:'center' }}>
      <Image/>
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Card.Text>
        <Price/><Description/>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <h1>{name =='' ? "Bonjour là" : `bonjour ${name}`}</h1>
    </div>
    
  );
}

export default App;
