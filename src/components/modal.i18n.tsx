import React, { FunctionComponent } from 'react';
import { I18n } from './i18n.component';
import { ModalTranslation, ModalTranslations } from './modal.translations';
import initialTranslations from './modal.json';
import { Modal, ModalProps } from './modal.component';
import { Builder } from '../builder';

export interface ModalI18nProps {
  onConfirm: () => void;
  onCancel: () => void;
  show: boolean;
  onHide: () => void;
}

export const ModalI18n: FunctionComponent<ModalI18nProps> = ({
  onCancel,
  onConfirm,
  onHide,
  show,
}) => {
  const i18n = I18n.useTranslations<ModalTranslations>(initialTranslations);
  const props = Builder<ModalProps>()
    .title(i18n.get(ModalTranslation.TITLE) as string)
    .cancel(i18n.get(ModalTranslation.CANCEL) as string)
    .confirm(i18n.get(ModalTranslation.CONFIRM) as string)
    .onCancel(onCancel)
    .onConfirm(onConfirm)
    .show(show)
    .onHide(onHide)
    .build();

  return <Modal {...props} />;
};
