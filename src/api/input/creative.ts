import { gql } from "@apollo/client";

export const GET_CREATIVES = gql`
  query GetCreatives {
    getCreatives {
      id
      title
      description
      image
    }
  }
`;

export const GENERATE_CREATIVE = gql`
  mutation GenerateCreative($data: GenerateCreativeDto!) {
    generateCreative(data: $data) {
      id
      title
      description
      image
    }
  }
`;

export const SAVE_CREATIVE = gql`
  mutation SaveCreative($id: String!) {
    saveCreative(id: $id) {
      id
      title
      description
      image
    }
  }
`;

export const GET_CREATIVE = gql`
  query GetCreative($id: String!) {
    creative: getCreative(id: $id) {
      id
      title
      description
      image
      keywords
      alt
      createdAt
    }
  }
`;
