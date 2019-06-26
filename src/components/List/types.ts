import React from 'react';
import { Model } from '../../../common/Model';

export class OrderItem extends Model {
  constructor(
    public id: string,
    public image: string,
    public description: string,
    public price: string
  ) {
    super();
  }
}

export abstract class ListAbstract extends React.Component {}
