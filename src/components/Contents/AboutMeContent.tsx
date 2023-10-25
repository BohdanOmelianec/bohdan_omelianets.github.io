import styled, { keyframes } from "styled-components";
import photo from "../../images/Photo.png";

const fadeIn = keyframes`
  from {
    color: yellow;
    opacity: 0;
    background: transparent;
  }
  to {
    color: green;
    opacity: 1;
    background: pink;
  }
`

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: center;
  grid-template-columns: repeat(2, 1fr);

`;

const Text = styled.div`
  // width: 100%;
  // height: 100%;
`;

const Image = styled.div`

  & img {
    width: 100%;
    // height: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    z-index: -1;
    border-radius: 50%;
  }
`;

const AboutMeContent = () => {
  return (
    <ContentWrapper>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolorem officiis neque perspiciatis nesciunt enim nam, at aspernatur magni, ea in sed maxime!</Text>
      <Image>
        <img src={photo} alt="" />
      </Image>
    </ContentWrapper>
  )
}

export default AboutMeContent;