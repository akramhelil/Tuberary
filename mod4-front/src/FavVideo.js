import React from 'react';
import FavVideoCard from './FavVideoCard';
import { Card,Container, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const dexStyle = {
    margin: 20,
    alignItems: "center"
}



function FavVideo(props) {
        return (
            <React.Fragment>
                <Button secondary>
                        <Link to="/" style={{ color: '#FFF'}} >
                            <h3>Go Back</h3>
                         </Link>
                    </Button>
                <div style={dexStyle}>
                     <div >
                        <Container floated="right">   
                            <Card.Group itemsPerRow={3} > 
                                    {props.favVideo.map(video =>
                                        <FavVideoCard
                                            video={video}
                                            key={video.id}
                                            handleDelete={props.handleDelete}
                                        />
                                     )}
                            </Card.Group>  
                         </Container>   
                    </div>
                </div>
             </React.Fragment>
        );
}

export default FavVideo;