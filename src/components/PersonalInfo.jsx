import { useState } from "react"
import Info from "./Info.jsx"

function PersonalInfo({ }) {
  const [info, setInfo] = useState({ name: "John dos Passos", email: "jotndospassos@gmail.com", phone: "###" })

  return (
    <>
      <h2>Contact Information:</h2>
      <div className="contact-information">
        <Info info={info} setInfo={setInfo} contentType="name" />
        <Info info={info} setInfo={setInfo} contentType="email" />
        <Info info={info} setInfo={setInfo} contentType="phone" />
      </div>

    </>
  )
}

export default PersonalInfo
