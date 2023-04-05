import { useEffect } from "react"

function Cards(){
    const getData = () => {
        fetch('data.json', {
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        }).then(function(response){
            console.log(response)
            return response.json()
        }).then(function(data){
            console.log(data)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return(
        <section className="card-section">
            <div className="card">
                <img src="" alt="" />
                <p className="country"></p>
                <p></p>
                <p></p>
                <p></p>
            </div>
        </section>
    )
}

export default Cards