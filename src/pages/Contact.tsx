import { useState, useEffect } from 'react'
// import Navbar from '../Components/Navbar'

const Contact = () => {

  const [data, setData] = useState<any>([])
  const [mode, setMode] = useState<string>('online')
  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url).then((response) => {
      response.json().then((result) => {
        console.warn(result)
        setData(result)
        localStorage.setItem('users', JSON.stringify(result))
      })
    }).catch(() => {
      setMode('offline')
      const collection = localStorage.getItem('users')
      if (collection) {
        setData(JSON.parse(collection))
      }
    })
  }, [])

  return (
    <>
      {/* <Navbar /> */}
      <h1>Contact</h1>
      <div>
        <div>
          <div>
            {
              mode === 'offline' ?
                <div className="alert alert-warning" role="alert">
                  you are in offline mode or some issue with connection
                </div>
                : null

            }
          </div>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {/* {
                data.map((item) => (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.address.street}</td>
                  </tr>
                ))
              } */}

            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Contact
