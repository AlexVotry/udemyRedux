import React, { useState } from 'react';
import Button from '../components/Button';
import Modal from '../components/Modal';

export default function ModalPage () {
  const [show, setShow] = useState(false);

  return (
    <div id="modal-page" className='w-48 relative'>
      <Button rounded success onClick={() => setShow(true)}>
        Modal
      </Button>
      {show && (
        <Modal setShow={setShow}>
          <p>Here is some important information you should review</p>
          <div className="flex justify-end">
            <Button warning onClick={() => setShow(false)}>
              I Accept
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
}