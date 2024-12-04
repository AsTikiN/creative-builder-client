import {
  GenerateCreativeDocument,
  SaveCreativeDocument,
} from "@/api/output/graphql";
import { useMutation } from "@apollo/client";
import { CreativeCard } from "@components/Card/CreativeCard";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea as PrimeInputTextarea } from "primereact/inputtextarea";
import { Skeleton } from "primereact/skeleton";
import { Toast } from "primereact/toast";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

type FormValues = {
  topic: string;
  keywords: string;
};

export const MainPage = () => {
  const toast = useRef<Toast>(null);

  const [createCreative, { data: generatedImage, loading: isImageGenerating }] =
    useMutation(GenerateCreativeDocument);
  const [saveCreative, { loading: isSavingCreative }] = useMutation(
    SaveCreativeDocument,
    {
      onCompleted: () => {
        toast.current?.show({
          severity: "success",
          summary: "Success",
          detail: "Creative saved",
        });
      },
    }
  );
  const generatedCreativeId = generatedImage?.generateCreative.id;

  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    const keywords = data.keywords.split(",").map((k) => k.trim());
    createCreative({
      variables: {
        data: {
          topic: data.topic,
          keywords,
        },
      },
    });
  };

  const handleSaveCreative = () => {
    if (!generatedCreativeId) return;

    saveCreative({
      variables: { id: generatedCreativeId },
    });
  };

  const displayMockImage = !isImageGenerating && !generatedImage;
  const displayGeneratedImage = !isImageGenerating && generatedImage;

  return (
    <Wrapper>
      <Title>Generate a creative</Title>

      <SectionContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputText
            placeholder="Topic"
            {...register("topic", { required: true })}
          />
          <InputTextarea
            placeholder="Keywords (comma separated)"
            style={{ resize: "none" }}
            {...register("keywords", { required: true })}
          />
          <div>
            <Button disabled={isImageGenerating} type="submit">
              Generate
            </Button>
          </div>
        </Form>
        <Preview>
          {isImageGenerating && <Skeleton width="256px" height="370px" />}
          {displayMockImage && (
            <MockPreview>
              Preview of generated image will display here
            </MockPreview>
          )}
          {displayGeneratedImage && (
            <>
              <CreativeWrapper>
                <CreativeCard {...generatedImage.generateCreative} />
                <Button
                  onClick={handleSaveCreative}
                  disabled={!generatedCreativeId || isSavingCreative}
                >
                  Add to creatives
                </Button>
              </CreativeWrapper>
            </>
          )}
        </Preview>
      </SectionContainer>
      <Toast ref={toast} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 540px;
  flex: 1;
`;

const Preview = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const MockPreview = styled.div`
  width: 256px;
  height: 370px;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const CreativeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InputTextarea = styled(PrimeInputTextarea)`
  resize: none;
  height: 100px;
`;
