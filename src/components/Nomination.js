import React from "react";
import { Button, Card, Image } from "semantic-ui-react";

const Nomination = (props) => {
  return (
    <Card.Group>
      <Card>
        <Card.Content>
          <Image floated="right" size="small" src={props.poster} />
          <Card.Header>{props.title}</Card.Header>
          <Card.Meta>{props.year}</Card.Meta>
          <Card.Meta>{props.genre}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="red" onClick={() => props.delete(props.id)}>
              Remove
            </Button>
          </div>
        </Card.Content>
      </Card>
    </Card.Group>
  );
};

export default Nomination;
