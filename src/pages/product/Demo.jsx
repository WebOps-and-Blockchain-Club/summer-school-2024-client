import axios from 'axios'
import { useState } from 'react'



export default function NewPost() {  

  const [file, setFile] = useState()
  const [caption, setCaption] = useState("")


  const submit = async event => {
    event.preventDefault()

    const formData = new FormData();
    formData.append("image", file)
    formData.append("caption", caption)
    for (var key of formData.entries()) {
        console.log(key[0] + ', ' + key[1])
    }
    await axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/post`, formData, { headers: {'Content-Type': 'multipart/form-data'}})


  }

  const fileSelected = event => {
    const file = event.target.files[0]
		setFile(file)
	}

  return (
    <div className="flex flex-col items-center justify-center">

        <form onSubmit={submit} style={{width:650}} className="flex flex-col space-y-5 px-5 py-14">
          <input onChange={fileSelected} type="file" accept="image/*"></input>
          <input value={caption} onChange={e => setCaption(e.target.value)} type="text" placeholder='Caption'></input>
          <button type="submit">Submit</button>
        </form>

    </div>
  )
}