import { useState } from "react"

function Info({ info, setInfo, contentType }) {
  const title = contentType.charAt(0).toUpperCase() + contentType.slice(1)
  const content = info[contentType]
  const contentCallBack = (value) => {
    setInfo(prev => ({ ...prev, [contentType]: value }))
  }


  const [isEdit, setIsEdit] = useState(true);

  const editButton = () => {
    if (isEdit) {
      return (
        <>
          <label for="content">{content}</label>
          <button type="" onClick={() => setIsEdit(false)}>edit</button>
        </>
      )
    } else {
      return (
        <>
          <input value={content} onChange={(e) => contentCallBack(e.target.value)} />
          <button
            onClick={() => setIsEdit(true)}>
            submit
          </button>
        </>
      )
    }
  }

  return (
    <div>
      <span> {title}: </span>
      {editButton()}
    </div>
  )
}

export default Info
