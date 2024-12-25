import { gql } from '@apollo/client';

export const GET_PAGES = gql`
  query GetPages {
    pages {
      nodes {
        id
        title
        content
        slug
        uri
      }
    }
  }
`;

export const GET_MAIN_MENU = gql`
  query GetMainMenu {
    menu(id: "12", idType: DATABASE_ID) {
      menuItems(where: { parentId: "0" }) {
        nodes {
          id
          label
          path
          url
          childItems {
            nodes {
              id
              label
              path
              url
            }
          }
        }
      }
    }
  }
`;

export const GET_AANBOD_MENU = gql`
  query GetAanbodMenu {
    menu(id: "2", idType: DATABASE_ID) {
      menuItems {
        nodes {
          id
          label
          path
          url
        }
      }
    }
  }
`;

export const GET_INFORMATIEMENU = gql`
  query GetInformatiemenu {
    menu(id: "9", idType: DATABASE_ID) {
      menuItems {
        nodes {
          id
          label
          path
          url
        }
      }
    }
  }
`;

export const GET_EXTRA_MENU = gql`
  query GetExtraMenu {
    menu(id: "8", idType: DATABASE_ID) {
      menuItems {
        nodes {
          id
          label
          path
          url
        }
      }
    }
  }
`;

export const GET_DIENSTEN_MENU = gql`
  query GetDienstenMenu {
    menu(id: "13", idType: DATABASE_ID) {
      menuItems {
        nodes {
          id
          label
          path
          url
        }
      }
    }
  }
`;