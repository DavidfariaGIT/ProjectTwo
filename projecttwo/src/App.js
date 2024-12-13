import Header from './header';
import  FSimage from './FSImage';
import Background from './Background';

//Subscribe function

function App() {
  const handleButtonClick = () => {
    alert("Subscribed");
  }
  return (
    <>
    <Header label="Subscribe" clickedLabel="Subscribed!" onClick={handleButtonClick} />
    <FSimage author="Akeria" date={1997} title="Twisted Lies"/>
    <Background />

    </>
  )
 }


export default App;
