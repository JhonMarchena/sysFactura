import { useState } from 'react';
import { Button, Modal } from 'antd';

interface ModalComponentProps {
  title: string;
  children: React.ReactNode;
  onSubmit: () => Promise<boolean | void> | boolean | void;
}

const ModalComponent: React.FC<ModalComponentProps> = ({ title, children, onSubmit }) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = async () => {
    setConfirmLoading(true);
    try {
      const result = await onSubmit();
      if (result !== false) setOpen(false);
    } catch (error) {
      console.error('Error al guardar:', error);
    } finally {
      setConfirmLoading(false);
    }
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        {title}
      </Button>
      <Modal
        title={title}
        open={open}
        onOk={handleOk}
        okText="Guardar"
        cancelText="Cancelar"
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4 p-2">
          {children}
        </div>
      </Modal>
    </>
  );
};

export default ModalComponent;