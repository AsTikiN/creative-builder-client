import { GetCreativesDocument } from "@/api/output/graphql";
import { CreativeListItem } from "@/types/CreativeListItem";
import { useQuery } from "@apollo/client";
import { CreativeCard } from "@components/Card/CreativeCard";
import { routes } from "@config/routes";
import { Skeleton } from "primereact/skeleton";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const CreativesPage = () => {
  const navigate = useNavigate();
  const { data: creatives, loading: isCreativesLoading } =
    useQuery(GetCreativesDocument);

  const noCreatives =
    !isCreativesLoading && creatives?.getCreatives.length === 0;

  const handleCreativeClick = (creative: CreativeListItem) => () => {
    navigate(routes.creative(creative.id));
  };

  return (
    <Wrapper>
      {isCreativesLoading &&
        [...Array(4)].map((_, i) => (
          <Skeleton key={i} width="256px" height="370px" />
        ))}

      {!isCreativesLoading &&
        creatives?.getCreatives.map((creative) => (
          <CreativeCard
            key={creative.id}
            {...creative}
            onClick={handleCreativeClick(creative)}
          />
        ))}

      {noCreatives && (
        <div>Here will displayed creatives saved after generation</div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  width: 100%;

  & > * {
    flex: 1;
  }
`;
