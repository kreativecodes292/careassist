
import Hero from '../components/Hero'
import WhyChoose from '../components/WhyChoose'
import AreasWeCover from '../components/AreasWeCover'
import GetInTouch from '../components/GetInTouch'
import ContactSection from '../components/ContactSection'
import { useEffect } from 'react'

const Home = () => {
        // 👇 ADD THIS
      useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, []);
    return (
        <div>
            <Hero/>
            <WhyChoose/>
            <AreasWeCover/>
            <ContactSection/>
            <GetInTouch/>
        </div>
    )
}

export default Home