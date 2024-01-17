import React from 'react'

type Props = {
  isShow: boolean
  youtubeId: string
  setIsShow: (bool: boolean) => void
}

export function PreviewVideo(props: Props) {
  const { isShow, youtubeId, setIsShow } = props

  const handleClose = () => {
    setIsShow(false)
  }

  return (
    <>
      <div className={`modal ${isShow ? 'modal-open' : ''} `} id="my-modal-2">
        <div className="modal-box w-1/2 max-w-unset">
          <label onClick={handleClose} className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          {isShow ? (
            <iframe
              id={`Preview-video-${youtubeId}`}
              className="w-full aspect-video"
              src={`https://www.youtube.com/embed/${youtubeId}`}
              allow="autoplay"
              allowFullScreen
            ></iframe>
          ) : null}
        </div>
      </div>
    </>
  )
}
