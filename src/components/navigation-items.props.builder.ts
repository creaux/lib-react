import {
  NavigationItem,
  NavigationItemsProps,
} from './navigation-items.component';

export class NavigationItemBuilder {
  private title!: string;
  private link!: string;
  private id!: string;

  withTitle(title: string): NavigationItemBuilder {
    this.title = title;
    return this;
  }

  withLink(link: string): NavigationItemBuilder {
    this.link = link;
    return this;
  }

  withId(id: string): NavigationItemBuilder {
    this.id = id;
    return this;
  }

  build(): NavigationItem {
    return {
      title: this.title,
      link: this.link,
      id: this.id,
    };
  }
}

export class NavigationItemsPropsBuilder {
  private items!: NavigationItem[];
  private active!: number;

  withItems(items: NavigationItem[]): NavigationItemsPropsBuilder {
    this.items = items;
    return this;
  }

  withActive(active: number): NavigationItemsPropsBuilder {
    this.active = active;
    return this;
  }

  build(): NavigationItemsProps {
    return { items: this.items, active: this.active };
  }
}
