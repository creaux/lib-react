import React, { FunctionComponent } from 'react';

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
}) => (
  <div>
    <div className="row flex-column-reverse flex-lg-row">
      <div className="col-lg-4 text-left align-self-center">
        <div className="d-flex mb-2 lead">
          <div className="mr-3">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-envelope"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
              />
            </svg>
          </div>
          <div>{email}</div>
        </div>
        <div className="d-flex mb-2 lead">
          <div className="mr-3">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-telephone"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3.925 1.745a.636.636 0 0 0-.951-.059l-.97.97c-.453.453-.62 1.095-.421 1.658A16.47 16.47 0 0 0 5.49 10.51a16.471 16.471 0 0 0 6.196 3.907c.563.198 1.205.032 1.658-.421l.97-.97a.636.636 0 0 0-.06-.951l-2.162-1.682a.636.636 0 0 0-.544-.115l-2.052.513a1.636 1.636 0 0 1-1.554-.43L5.64 8.058a1.636 1.636 0 0 1-.43-1.554l.513-2.052a.636.636 0 0 0-.115-.544L3.925 1.745zM2.267.98a1.636 1.636 0 0 1 2.448.153l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"
              />
            </svg>
          </div>
          <div>{phone}</div>
        </div>
        <div className="d-flex mb-2 lead">
          <div className="mr-3">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-cursor-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"
              />
            </svg>
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
          <a href={link.href} className="h1 display-3 d-block text-nowrap">
            {link.title}
          </a>
        ))}
      </div>
    </div>
  </div>
);
