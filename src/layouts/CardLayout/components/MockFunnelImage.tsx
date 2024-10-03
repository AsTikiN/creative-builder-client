import { alpha, styled } from "@mui/material";

export const MockFunnelImage = () => {
  return (
    <Wrapper>
      <MockOfferBackImage x={20} y={-48} zIndex={1} />
      <MockOfferMainImage />
      <MockOfferMainImage />
      <MockOfferMainImage />
      <MockOfferMainImage />
      <MockOfferBackImage x={-20} y={48} zIndex={2} />
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
  gap: 8px;
`;

const MockOfferMainImage = styled("div")`
  width: 32px;
  height: 40px;
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
`;

const MockOfferBackImage = styled("div")<{
  x: number;
  y: number;
  zIndex: number;
}>`
  width: 32px;
  height: 40px;
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
  top: calc(50% + ${({ y }) => y}px);
  transform: translate(-50%, -50%);
`;
