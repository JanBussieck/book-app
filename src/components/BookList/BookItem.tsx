import React from 'react';
import {Header, List} from 'semantic-ui-react'

export interface Book {
  title: string,
  subtitle: string,
  isbn: string,
  abstract: string,
  numPages: number,
  author: string,
  publisher?: {
    name: string,
    url?: string
  },
  cover: string
}

export default function ({
  title,
  subtitle,
  author
}: Book) {
  return (
    <List.Item>
      <List.Icon name='book' size='large' verticalAlign='middle' />
      <List.Content>
        <Header as='a'>{title}</Header>
        <div>
          {subtitle} von {author}
        </div>
      </List.Content>
    </List.Item>
  );
};
