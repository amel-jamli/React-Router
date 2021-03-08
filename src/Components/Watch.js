import { React } from 'react'
import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"



function Watch({ match, movieList }) {
    const movie = movieList.find(el => el.title === match.params.id)
    return (
    <div >
        <div className="container mb-2">
            <div className="justify-content-center container sticky-top" style={{ height: "1px" , marginTop:"1px"}}>
            </div>
            <div className="titles">
            <Card.Text>
                <p> {movie.title}</p>
            </Card.Text>
            </div>
            <div>
                <Card.Img style={{ height: "720px" }} variant="top" src={movie.Image} />
                <br />
                <br />
                <br />
                <Card className="bg-dark text-white">
                    <Card.Body>
                        
                        <Card.Text>
                        <p style={{textAlign:"center", fontSize:"50px"}}>description </p>
                        <br/>
                            {movie.description}
                        </Card.Text>
                    </Card.Body>
                    <div>
                        <iframe title={movie.title} width="100%" height="400" src={movie.trailer} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </Card>   
                <Link id="retour" to='/' >
                    <Button id="btn-retour" variant="danger" size="sm" block  >
                    Back 
                    </Button>
                </Link> 
            </div>
            <div className="justify-content-center " style={{ height: "75px" }}>
            </div>
        </div >
    </div>
    )
    }

    export default Watch
