import React, { FunctionComponent } from 'react';
import cx from 'classnames';
import { BsFillCursorFill, BsFillEnvelopeFill, BsPhone } from 'react-icons/bs';

export interface NavigationScreenContentLink {
  href: string;
  title: string;
}

export interface NavigationScreenContentProps {
  email: string;
  phone: string;
  company: string;
  street: string;
  streetNo: string;
  city: string;
  postcode: string;
  links: NavigationScreenContentLink[];
  onClick: (link: string) => void;
}

export const NavigationScreenContent: FunctionComponent<NavigationScreenContentProps> = ({
  email,
  phone,
  company,
  street,
  streetNo,
  city,
  postcode,
  links,
  onClick: handleClick,
}) => (
  <div>
    <div className="row flex-column-reverse flex-lg-row">
      <div className="col-lg-4 text-left align-self-center">
        <div className="d-flex mb-2 lead">
          <div className="mr-3">
            <BsFillEnvelopeFill />
          </div>
          <div>{email}</div>
        </div>
        <div className="d-flex mb-2 lead">
          <div className="mr-3">
            <BsPhone />
          </div>
          <div>{phone}</div>
        </div>
        <div className="d-flex mb-2 lead">
          <div className="mr-3">
            <BsFillCursorFill />
          </div>
          <div>
            {company} <br />
            {street} {streetNo} <br />
            {postcode} {city} <br />
          </div>
        </div>
      </div>
      <div className="col-lg-1"></div>
      <div className="col-lg-1 border-lg-left border-top border-lg-top-0 mb-5 mt-5"></div>
      <div className="col-lg-6">
        {links.map((link, index) => (
          <div
            onClick={() => handleClick(link.href)}
            key={index}
            className={cx('link', 'h1', 'display-3', 'd-block', 'text-nowrap')}
          >
            {link.title}
          </div>
        ))}
      </div>
    </div>
  </div>
);
