/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($owner: String!) {
    onCreatePost(owner: $owner) {
      id
      name
      content
      owner
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($owner: String!) {
    onUpdatePost(owner: $owner) {
      id
      name
      content
      owner
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($owner: String!) {
    onDeletePost(owner: $owner) {
      id
      name
      content
      owner
    }
  }
`;
export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($owner: String!) {
    onCreateNote(owner: $owner) {
      id
      title
      content
      owner
    }
  }
`;
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($owner: String!) {
    onUpdateNote(owner: $owner) {
      id
      title
      content
      owner
    }
  }
`;
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($owner: String!) {
    onDeleteNote(owner: $owner) {
      id
      title
      content
      owner
    }
  }
`;
export const onCreateLink = /* GraphQL */ `
  subscription OnCreateLink($owner: String!) {
    onCreateLink(owner: $owner) {
      id
      description
      url
      owner
    }
  }
`;
export const onUpdateLink = /* GraphQL */ `
  subscription OnUpdateLink($owner: String!) {
    onUpdateLink(owner: $owner) {
      id
      description
      url
      owner
    }
  }
`;
export const onDeleteLink = /* GraphQL */ `
  subscription OnDeleteLink($owner: String!) {
    onDeleteLink(owner: $owner) {
      id
      description
      url
      owner
    }
  }
`;
