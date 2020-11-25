import React, { FunctionComponent } from 'react';
import { Modal as Dialog } from 'react-bootstrap';
import { Button, Variants } from '../forms/Button';
import { ModalI18nProps } from './modal.i18n';
import { Conditional } from './conditional.component';

export interface ModalProps extends ModalI18nProps {
  title: string;
  confirm: string;
  cancel: string;
}

export const Modal: FunctionComponent<ModalProps> = ({
  title,
  confirm,
  onConfirm: handleConfirm,
  cancel,
  onCancel: handleCancel,
  show,
  onHide: handleHide,
}) => {
  return (
    <Dialog show={show} onHide={handleHide}>
      <Dialog.Header closeButton>
        <Dialog.Title>{title}</Dialog.Title>
      </Dialog.Header>

      <Conditional
        condition={
          (!!cancel && !!handleCancel) || (!!confirm && !!handleConfirm)
        }
        when={() => (
          <Dialog.Footer>
            <Conditional
              condition={!!cancel && !!handleCancel}
              when={() => (
                <Button variant={Variants.SECONDARY} onClick={handleCancel}>
                  {cancel}
                </Button>
              )}
            />
            <Conditional
              condition={!!confirm && !!handleConfirm}
              when={() => (
                <Button variant={Variants.PRIMARY} onClick={handleConfirm}>
                  {confirm}
                </Button>
              )}
            />
          </Dialog.Footer>
        )}
      />
    </Dialog>
  );
};
