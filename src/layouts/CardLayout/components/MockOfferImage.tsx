import { alpha, styled } from "@mui/material";

export const MockOfferImage = () => {
  return (
    <Wrapper>
      <MockOfferBackImage x={70} zIndex={1} />
      <MockOfferBackImage x={50} zIndex={2} />
      <MockOfferBackImage x={30} zIndex={3} />
      <MockOfferMainImage />
      <MockOfferBackImage x={-30} zIndex={6} />
      <MockOfferBackImage x={-50} zIndex={5} />
      <MockOfferBackImage x={-70} zIndex={4} />
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MockOfferMainImage = styled("div")`
  width: 77px;
  height: 112px;
  border-radius: 4px;
  box-shadow:
    0px 0px 0.5px 0px #0000008f,
    0px 1.38px 2.77px 0px #00000014,
    0px 2.77px 5.54px 0px #0000000a,
    0px 5.54px 11.07px 0px #0000000a;

  background: linear-gradient(0deg, #ffffff, #ffffff),
    linear-gradient(209.36deg, #f2f2f2 0%, rgba(242, 242, 242, 0) 77.82%);

  border: 1px solid ${({ theme }) => alpha(theme.palette.text.primary, 0.24)};
  z-index: 20;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const MockOfferBackImage = styled("div")<{ x: number; zIndex: number }>`
  width: 56px;
  height: 82px;
  border-radius: 4px;
  box-shadow:
    0px 0px 0.5px 0px #0000008f,
    0px 1.38px 2.77px 0px #00000014,
    0px 2.77px 5.54px 0px #0000000a,
    0px 5.54px 11.07px 0px #0000000a;

  background-color: #ffffff;

  border: 1px solid ${({ theme }) => alpha(theme.palette.text.primary, 0.24)};
  z-index: ${({ zIndex }) => zIndex};
  position: absolute;
  left: calc(50% + ${({ x }) => x}px);
  top: 50%;
  transform: translate(-50%, -50%);
`;
