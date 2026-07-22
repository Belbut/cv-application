import Info from "./Info.jsx"

function PersonalInfo({ info, setInfo }) {

  const editRecord = (a) => {
    setInfo(a(info))
  }

  console.log(info)

  return (
    <>
      <h2>Contact Information:</h2>
      <div className="contact-information">
        <Info info={info} setInfo={editRecord} contentType="name" />
        <Info info={info} setInfo={editRecord} contentType="email" />
        <Info info={info} setInfo={editRecord} contentType="phone" />
      </div>
    </>
  )
}

export default PersonalInfo
