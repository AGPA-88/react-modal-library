import React from 'react'
import './modal.css'

const Modal = ({ isOpen, setStatus, modalText, style }) => {
  const closeModal = () => {
    setStatus(false)
  }

  if (!isOpen) return null

  // style management
  const bgColor = style?.bgColor ? style.bgColor : ''
  const modalColor = style?.modalColor ? style.modalColor : 'white'
  const width = style?.width ? style.width : '90%'
  const height = style?.height ? style.height : '50px'

  return (
    <div
      className='modal-background'
      style={{
        backgroundColor: bgColor
      }}
    >
      <div
        className='modal'
        style={{ width: width, backgroundColor: modalColor, height: height }}
      >
        <div className='modal-content'>
          {modalText}
          <div className='closeBox'>
            <span className='close' onClick={closeModal}>
              &times;
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
