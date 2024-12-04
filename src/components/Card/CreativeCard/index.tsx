import { CardProps, Card as PrimeCardComponent } from "primereact/card";
import { FC, MouseEventHandler } from "react";
import { CardHeader } from "./CardHeader";
import styled from "styled-components";
import { CreativeListItem } from "@/types/CreativeListItem";

type Props = CardProps & CreativeListItem;

export const CreativeCard: FC<Props> = (props) => {
  const { title, description } = props;

  return (
    <StyledCard {...props} header={<CardHeader {...props} />} title="">
      <div>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </div>
    </StyledCard>
  );
};

const StyledCard = styled(PrimeCardComponent)<{
  onClick?: MouseEventHandler<HTMLDivElement>;
}>`
  max-width: 256px;
  padding: 20px;
  box-shadow: none;
  border: 1px solid #e5e7eb;

  cursor: ${({ onClick }) => (onClick ? "pointer" : "default")};

  .p-card-body {
    padding: 0;
  }

  .p-card-content {
    padding: 0;
  }
`;

const Title = styled.h3`
  margin: 10px 0;
  font-size: 16px;
`;

const Description = styled.p`
  margin: 0;
  font-size: 14px;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
