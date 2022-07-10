1. Difference between Axios and fetch?
Axios: Axios has url in request object.
    Axios is a stand-alone third party package that can be easily installed.
    Axios uses the data property.
    Axios performs automatic transforms of JSON data.
    Axios allows cancelling request and request timeout.

    axios.get('url')
    .then((response) => {

        })
    .catch((error) => {

        })

Fetch: Fetch has no url in request object.
    Fetch is built into most modern browsers; no installation is required as such.
    	Fetch uses the body property.
        Fetch is a two-step process when handling JSON data- first, to make the actual request; second, to call the .json() method on the response.
        Fetch does not allows cancelling request and request timeout.

        fetch('path-to-the-resource-to-be-fetched')
        .then((response) => {

        })
        .catch((error) => {

        })