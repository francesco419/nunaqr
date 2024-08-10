import qrImg from './assets/qrImg.png';
import styled from 'styled-components';

const PhoneSize = styled.div`
  width: 440px;
  overflow: hidden;
`;

const PhoneImg = styled.img`
  width: 440px;
`;

function App() {
  return (
    <>
      <PhoneSize>
        <PhoneImg src={qrImg} />
      </PhoneSize>
    </>
  );
}

export default App;
