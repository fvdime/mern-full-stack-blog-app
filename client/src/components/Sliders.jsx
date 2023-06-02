import styled from 'styled-components'
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Slider } from "infinite-react-carousel/lib";


const Container = styled.div`
`

const Slide = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  color: white;
  position: relative;
`

const SlideImg = styled.img`
  width: 100%;
  height: 90vh;
`

const Desc = styled.div`
  position: absolute;
  width: 100%;
  top: 70%;
  text-align: center;
  justify-content: center;
  align-items: center;

`

const Title = styled.h3`
  font-size: 30px;
  margin-right: 50px;
  
`

const Button = styled.button`
  border: none;
  color: #222;
  background-color: aliceblue;
  font-size: medium;
  height: 70px;
  width: 150px;
  cursor: pointer;
`

const Sliders = () => {

  

  return (
    <Container>
      <Slider slidesToShow={1} arrowsScroll={1} >
        <Slide>
          <SlideImg 
            src='https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_926/FSH-1674569297437-heromobile.jpg'/>
          <Desc>
            <Title>2022/23 METIERS D'ART COLLECTION UPCOMING SHOW IN TOKYO</Title>
            <Button>SEE MORE</Button>
          </Desc>
        </Slide>
      <Slide>
        <SlideImg 
          src='https://puls-img.chanel.com/c_limit,w_768/q_auto:good,f_auto/1652357137091-imagejpg_1298x974.jpg'/>
        <Desc>
          <Title>2022/23 METIERS D'ART COLLECTION UPCOMING SHOW IN TOKYO</Title>
          <Button>SEE MORE</Button>
        </Desc>
      </Slide>
      <Slide>
        <SlideImg 
          src='https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_512/FSH-1674659789180-029i01.jpg'>
        </SlideImg>
        <Desc>
          <Title>LE VERNIS</Title>
          <Button>SEE MORE</Button>
        </Desc>
      </Slide>
      <Slide>
        <SlideImg 
          src='https://puls-img.chanel.com/c_limit,w_768/q_auto:best,dpr_auto,f_auto/1679928562187-01headerdesktopchevronjpg_1232x2880.jpg'>
        </SlideImg>
        <Desc>
          <Title>2022/23 METIERS D'ART COLLECTION UPCOMING SHOW IN TOKYO</Title>
          <Button>SEE MORE</Button>
        </Desc>
      </Slide>
      </Slider>
    </Container>
  )
}

export default Sliders