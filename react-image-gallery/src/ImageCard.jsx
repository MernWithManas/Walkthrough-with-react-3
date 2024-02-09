import React from 'react'
import {useNavigate} from "react-router-dom"

function ImageCard({imageUrl, id}) {
  const navigate = useNavigate()
  const redirectToPage = () => {
    navigate(`/${id}`)
  }
  return (
    <div>
      <img alt='' src={imageUrl} onClick={redirectToPage} />
    </div>
  )
}

export default ImageCard