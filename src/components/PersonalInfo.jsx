import { useState } from "react"

function Info({ title, content, contentCallBack }) {
  const [isEdit, setIsEdit] = useState(false);

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
      {/* // <label for="content">{title}</label> */}
      <span> {title}</span>
      {button()}
    </div>
  )
}

function PersonalInfo({ }) {
  const [info, setInfo] = useState({ name: "John dos Passos", email: "jotndospassos@gmail.com", phone: "###" })

  return (
    <>
      <h2>{info.name}</h2>
      <section className="contact-information">
        <Info title="Name:" content={info.name} contentCallBack={(content) => setInfo({ ...info, name: content })} />
        <Info title="Email:" content={info.email} contentCallBack={(content) => setInfo({ ...info, email: content })} />
        <Info title="Phone:" content={info.phone} contentCallBack={(content) => setInfo({ ...info, phone: content })} />
      </section>

    </>
  )
}

export default PersonalInfo
