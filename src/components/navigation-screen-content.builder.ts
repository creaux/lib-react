import {
  NavigationScreenContentLink,
  NavigationScreenContentProps,
} from './navigation-screen-content.component';

export class NavigationScreenContentLinkBuilder {
  private href!: string;
  private title!: string;

  withHref(href: string): NavigationScreenContentLinkBuilder {
    this.href = href;
    return this;
  }

  withTitle(title: string): NavigationScreenContentLinkBuilder {
    this.title = title;
    return this;
  }

  build(): NavigationScreenContentLink {
    return {
      href: this.href,
      title: this.title,
    };
  }
}

export class NavigationScreenContentPropsBuilder {
  private email!: string;
  private phone!: string;
  private company!: string;
  private street!: string;
  private streetNo!: string;
  private city!: string;
  private postcode!: string;
  private links!: NavigationScreenContentLink[];
  private onClick!: (link: string) => void;

  withEmail(email: string): NavigationScreenContentPropsBuilder {
    this.email = email;
    return this;
  }

  withPhone(phone: string): NavigationScreenContentPropsBuilder {
    this.phone = phone;
    return this;
  }

  withCompany(company: string): NavigationScreenContentPropsBuilder {
    this.company = company;
    return this;
  }

  withStreet(street: string): NavigationScreenContentPropsBuilder {
    this.street = street;
    return this;
  }

  withStreetNo(streetNo: string): NavigationScreenContentPropsBuilder {
    this.streetNo = streetNo;
    return this;
  }

  withCity(city: string): NavigationScreenContentPropsBuilder {
    this.city = city;
    return this;
  }

  withPostcode(postcode: string): NavigationScreenContentPropsBuilder {
    this.postcode = postcode;
    return this;
  }

  withLinks(
    links: NavigationScreenContentLink[]
  ): NavigationScreenContentPropsBuilder {
    this.links = links;
    return this;
  }

  withOnClick(onClick: (link: string) => void): NavigationScreenContentPropsBuilder {
    this.onClick = onClick;
    return this;
  }

  build(): NavigationScreenContentProps {
    return {
      email: this.email,
      phone: this.phone,
      company: this.company,
      street: this.street,
      streetNo: this.streetNo,
      city: this.city,
      postcode: this.postcode,
      links: this.links,
      onClick: this.onClick
    };
  }
}
