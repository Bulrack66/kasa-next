import './Home.scss';
import Section1 from '@/Components/Section1/Section1'
import Cards from '@/Components/Card/Cards'
import Footer from '@/Components/Footer/Footer';
import Banner from '@/Components/Banner/Banner'

function Home() {
  return (
    <div className="home">
      <Banner/>
      <Section1 />
      <Cards />
      <Footer/>
    </div>
  );
}

export default Home;