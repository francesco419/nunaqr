import styled from 'styled-components';
import qrImg from './assets/qrImg.png';

const PhoneSize = styled.div`
  width: 440px;
  overflow: hidden;
`;

const PhoneImg = styled.img`
  width: 440px;
`;

export default function Front() {
  return (
    <>
      <PhoneSize>
        <PhoneImg src={qrImg} />
      </PhoneSize>
    </>
  );
}
