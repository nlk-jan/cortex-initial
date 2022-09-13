import styled from 'styled-components';

export const ItemDescription = styled.div`
  font-family: $font-family_1;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: $color_1;
  display: block;
  width: 96%;
  margin: 0 auto;
  background: #133774;
  padding: 8px;
  p.itemHeading {
    font-size: 24px;
    line-height: 28px;
    margin: 10px 0;
  }
  p {
    margin: 10px 0;
  }
  .itemImg {
    display: block;
    width: 100%;
    height: 280px;
    display: none;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  p.img-caption {
    font-size: 12px;
    line-height: 14px;
    margin: 5px 0;
  }
`;
