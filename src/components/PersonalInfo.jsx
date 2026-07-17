import { useState } from "react"

function Info({ info, setInfo, contentType }) {
  const title = contentType.charAt(0).toUpperCase() + contentType.slice(1)
  const content = info[contentType]
  const contentCallBack = (value) => setInfo(prev => ({ ...prev, [contentType]: value }))


  const [isEdit, setIsEdit] = useState(true);

  const button = () => {
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
          <input type="" name="" value={content} onChange={(e) => contentCallBack(e.target.value)} />
          <button type=""
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
      {button()}
    </div>
  )
}


function PersonalInfo({ }) {
  const [info, setInfo] = useState({ name: "John dos Passos", email: "jotndospassos@gmail.com", phone: "###" })

  return (
    <section>
      <h2>Contact Information:</h2>
      <div className="contact-information">
        <Info info={info} setInfo={setInfo} contentType="name" />
        <Info info={info} setInfo={setInfo} contentType="email" />
        <Info info={info} setInfo={setInfo} contentType="phone" />
      </div>

    </section>
  )
}

export default PersonalInfo
