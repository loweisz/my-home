import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import github from '../images/Github.png';
import linkedIn from '../images/LinkedIn.png';
import twitter from '../images/twitter.png';
import spotify from '../images/Spotify.png';
import Particles from 'react-particles-js';


const LeftHero = styled.div`
  width: 30%;
  background-color: #03346C;
  height: 100vh;
`

const InfoStarter = styled.div`
  width: 70%;
`

const InfoHeader = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-between;
`

const SocialSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin:  20px 40px;
`

const SocialIcon = styled.img`
  height: 70px;
  width: 70px;
`

const AvatarImage = styled.div`
  border: 2px solid black;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  margin-top: 40px;
`

const InfoTabBar = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`


const Wrapper = styled.div`
  display: flex;
  width: 100%;
`

const Tab = styled.div`
  background-color: #5A8AB2;
  height: 40px;
  color: white;
  line-height: 40px;
  font-size: 18px;
  width: 35%;
`

const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
`

const SubTitle = styled.div`
  line-height: 18px;
  font-size: 20px;
  font-weight: 100;
`

const TextSection = styled.div`
  padding: 50px 100px;
  
`

const HeaderText = styled.div`
  margin-bottom: 15px;
  font-weight: 600;
  &::after {
    content: '';
    width: 40px;
    height: 20px;
    background-color: #5A8AB2;
  }
`;

const TextBlock = styled.div`
  padding: 30px;
  font-size: 25px;
  border-radius: 5px;
  box-shadow: 0px 0px 50px -15px rgba(0,0,0,0.75);
  background-color: white;
  display: flex;
  flex-direction: column;
`

const particleParams = {
  "particles": {
    "number": {
      "value": 53,
      "density": {
        "enable": true,
        "value_area": 481.0236182596568
      }
    },
    "color": {
      "value": "#5a8ab2"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Panda_Mark.svg",
        "width": 200,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 11.83721462448409,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 157.82952832645452,
      "color": "#5a8ab2",
      "opacity": 1,
      "width": 0.4810236182596568
    },
    "move": {
      "enable": true,
      "speed": 4,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "bounce",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 10
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

const IndexPage = () => { 
  
  return (
    <Layout>
      <Wrapper>
        <LeftHero>
          <Particles
            params={particleParams}
            height="100vh"
            width="100%"
          />
        </LeftHero>
        <InfoStarter>
          <InfoHeader>
            <SocialSection>
              <SocialIcon src={github}/>
              <SocialIcon src={linkedIn}/>
            </SocialSection>
            <AvatarImage/>
            <SocialSection>
              <SocialIcon src={twitter}/>
              <SocialIcon src={spotify}/>
            </SocialSection>
          </InfoHeader>
          <InfoTabBar>
            <Tab> DEVELOPER </Tab>
            <Title>
              <span>{"<Lorenz Weiß />"}</span>
              <SubTitle>Web Developer</SubTitle>
            </Title>
            <Tab> LIFE </Tab>
          </InfoTabBar>
          <TextSection>
            <TextBlock>
              <HeaderText>Hi, my name is lorenz</HeaderText>
              <span>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                Aenean commodo ligula eget dolor. Aenean massa.
                Cum sociis natoque penatibus et magnis dis parturient montes, 
                nascetur ridiculus mus. Donec quam felis,
                ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequ
                at massa quis enim. Donec pede justo, fringilla
                vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
                imperdiet a, venenatis vitae, justo. Nullam
                dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. 
                Vivamus elementum semper nisi. 
                Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                consequat vitae, eleifend ac, enim.
                Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. 
                Phasellus viverra nulla ut metus varius laoreet.
                Quisque rutrum. Aenean imperdiet. Etiam u
              </span>
            </TextBlock>
         </TextSection>
        </InfoStarter>        
      </Wrapper>
    </Layout>
  ) 
}

export default IndexPage
