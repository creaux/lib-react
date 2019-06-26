import React from 'react';

export interface Item {
  title: string;
  link: string;
  id?: string;
}

export abstract class NavigationAbstract extends React.Component {}
