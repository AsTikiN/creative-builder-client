import { GetCreativeDocument } from "@/api/output/graphql";
import { useQuery } from "@apollo/client";
import { Chip } from "primereact/chip";
import { Fieldset as PrimeFieldset } from "primereact/fieldset";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export const CreativePage = () => {
  const { id } = useParams();

  const { data: creative, loading: isCreativeLoading } = useQuery(
    GetCreativeDocument,
    {
      variables: { id: id || "" },
    }
  );

  const { image, alt, title, description, createdAt, keywords } =
    creative?.creative || {};

  console.log(creative);

  if (isCreativeLoading) return <div>Loading...</div>;

  return (
    <Wrapper>
      <Image src={`data:image/png;base64,${image}`} alt={alt} />

      <Title>{title}</Title>

      <Fieldset legend="Description">
        <p>{description}</p>
      </Fieldset>

      <Fieldset legend="Metadata">
        <MetadataItem>
          <Label>Image alt</Label>
          <MetadataItemText>{alt}</MetadataItemText>
        </MetadataItem>

        <MetadataItem>
          <Label>Created at</Label>
          <MetadataItemText>
            {new Date(createdAt).toLocaleString()}
          </MetadataItemText>
        </MetadataItem>

        <MetadataItem>
          <Label>Keywords</Label>
          <Keywords>
            {keywords?.map((keyword) => <Chip label={keyword} key={keyword} />)}
          </Keywords>
        </MetadataItem>
      </Fieldset>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Image = styled.img`
  max-width: 256px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
`;

const Keywords = styled.div`
  display: flex;
  gap: 4px;
`;

const Fieldset = styled(PrimeFieldset)`
  .p-fieldset-content {
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    & > p {
      margin: 0;
    }
  }
`;

const MetadataItemText = styled.p`
  font-size: 12px;
  color: #888;
  margin: 0;
`;

const Label = styled.p`
  font-size: 16px;
  color: #000;
  margin: 0;
`;

const MetadataItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
