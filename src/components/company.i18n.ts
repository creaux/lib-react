import { Translate } from './i18n.abstract.component';
import { Company, CompanyProps } from './company.component';
import {
  CompanyTranslation,
  CompanyTranslations,
} from './company.translations';
import defaultTranslations from './company.default.json';
import { ICompany } from './company.types';
import { OnFieldChange, OnValidFieldChange } from './form.types';
import { Builder } from '../builder';

export interface CompanyI18nProps extends ICompany {
  onFieldChange: OnFieldChange<keyof ICompany>;
  onValidFieldChange: OnValidFieldChange<keyof ICompany>;
}

export class CompanyI18n extends Translate<
  CompanyI18nProps,
  CompanyProps,
  CompanyTranslations
> {
  protected Component = Company;
  protected defaultTranslations = defaultTranslations;

  protected getProps(): CompanyProps {
    return Builder<CompanyProps>()
      .company(this.props.company)
      .vat(this.props.vat)
      .onFieldChange(this.props.onFieldChange)
      .onValidFieldChange(this.props.onValidFieldChange)
      .companyHeading(this.i18n.get(CompanyTranslation.COMPANY) as string)
      .companyPlaceholder(
        this.i18n.get(CompanyTranslation.COMPANY_PLACEHOLDER) as string
      )
      .companyMessageValid(
        this.i18n.get(CompanyTranslation.COMPANY_MESSAGE_VALID) as string
      )
      .companyMessageInvalid(
        this.i18n.get(CompanyTranslation.COMPANY_MESSAGE_INVALID) as string
      )
      .companyMessageDefault(
        this.i18n.get(CompanyTranslation.COMPANY_MESSAGE_DEFAULT) as string
      )
      .vatHeading(this.i18n.get(CompanyTranslation.VAT) as string)
      .vatPlaceholder(
        this.i18n.get(CompanyTranslation.VAT_PLACEHOLDER) as string
      )
      .vatMessageValid(
        this.i18n.get(CompanyTranslation.VAT_MESSAGE_VALID) as string
      )
      .vatMessageInvalid(
        this.i18n.get(CompanyTranslation.VAT_MESSAGE_INVALID) as string
      )
      .vatMessageDefault(
        this.i18n.get(CompanyTranslation.VAT_MESSAGE_DEFAULT) as string
      )
      .build();
  }
}
