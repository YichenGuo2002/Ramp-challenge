import fetch from 'node-fetch'

const fetchWeb = async() =>{
    let URL = 'https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/77726f'
    return await fetch(URL, {
        // Adding method type
        method: "GET",
        })
        // Converting to JSON
        .then((response) => {
            return response.text()
        }).then((data) =>{
            return data
        })
  }

  console.log(await fetchWeb())
