import Info from "./Info";


function ElementInfo(type, info, setInfo, initialEntry) {
  const newEntry = () => { return { ...initialEntry, id: crypto.randomUUID() } }

  const findRecord = (id) => {
    return info().find((element) => element.id == id)
  }

  const editRecord = (id) => {
    return (fn) => {
      setInfo(
        info().map(element => {
          return element.id == id ? fn(element) : element
        })
      )
    }
  }

  const addRecord = () => {
    setInfo([...info(), newEntry()])
  }

  const removeRecord = (id) => {
    setInfo(info().filter(entry => entry.id != id))
  }

  const renderRecordList = () => {
    console.log(info())
    console.log(info()[0])
    return info().map((r) => {
      return (
        <Element key={r.id}
          content={findRecord(r.id)}
          editContentCB={editRecord(r.id)}
          removeRecordCB={() => removeRecord(r.id)}
        />
      )
    })
  }

  return (
    <>
      <h2>{type}</h2>
      <div className={type}>
        {renderRecordList()}
        <button onClick={() => addRecord()}>+</button>
      </div>
    </>
  )
}

function Element({ content, editContentCB, removeRecordCB }) {
  return (
    <div className="entry">
      {Object.keys(content).map((key) => {
        if (key == "id") return null
        return <Info info={content} setInfo={editContentCB} contentType={key} key={key} />
      })}
      < button onClick={removeRecordCB}>x</button >
      <br />
    </div>
  )
}

export default ElementInfo

