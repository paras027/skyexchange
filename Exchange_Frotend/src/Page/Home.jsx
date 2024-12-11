
import Header from '../Component/Header/Header'
import MainBody from '../Component/MainBody/MainBody';
import YellowStrip from '../Component/YellowStrip/YellowStrip';
import "./home.css";

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <YellowStrip/>
      <MainBody/>
    </div>
  )
}

export default Home
