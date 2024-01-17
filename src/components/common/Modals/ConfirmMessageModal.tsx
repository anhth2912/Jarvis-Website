import React from 'react'

type Props = {
  isShow: boolean
  isLoading: boolean
  title?: string
  message: string
  setIsShow: (bool: boolean) => void
  handleOkButton: () => void
}

export function ConfirmMessageModal(props: Props) {
  const { isShow, isLoading, message, setIsShow, handleOkButton } = props

  const handleClose = () => {
    setIsShow(false)
  }

  return (
    <div className={`modal ${isShow ? 'modal-open' : ''}`} id="my-modal-2">
      <div className="modal-box">
        <label onClick={handleClose} className="btn btn-sm btn-circle absolute right-2 top-2">
          ✕
        </label>
        <h3 className="font-bold text-lg">Delete this record</h3>
        <p className="py-4">{message}</p>
        <div className="modal-action ">
          <button onClick={handleClose} className="btn btn-info" disabled={isLoading}>
            Cancel
          </button>
          <button onClick={handleOkButton} className="btn btn-danger" disabled={isLoading}>
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}
