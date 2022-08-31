import { FaTimes } from 'react-icons/fa';
import { useAppContext } from './context';

const Modal = () => {
  const { isModalVisible, closeModal } = useAppContext();

  return (
    <div
      className={`${
        isModalVisible ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <div className='modal-container'>
        <h3>modal content</h3>
        <button className='close-modal-btn' onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
