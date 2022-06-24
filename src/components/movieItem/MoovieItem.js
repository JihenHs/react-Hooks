import React from "react";
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";
export default function MoovieItem({ title, cover, category, rate, cast, release }) {
  return (
    <div style={{ width: "22rem" }}>
      <Card style={{ width: "18rem", marginTop: "5rem" }}>
        <Card.Img variant="top" src={cover} style={{ height: "25rem" }} />

        <ListGroup className="list-group-flush">
          <ListGroupItem style={{ background: "gray" }}>{title}</ListGroupItem>

          <ListGroupItem style={{ background: "gray" }}>
            Category: {category}
          </ListGroupItem>
          <ListGroupItem style={{ background: "gray" }}>
            Rating: {rate}
          </ListGroupItem>
          <ListGroupItem style={{ background: "gray" }}>
            Cast: {cast}
          </ListGroupItem>
          <ListGroupItem style={{ background: "gray" }}>
            Release: {release}
          </ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  );
}
//  MoovieItem.defaultProps = {
//   title: "Moovie Title",
//   cover:
//     "https://i.pinimg.com/originals/aa/f7/05/aaf705e06726ce3881288ae4be3ac5fe.jpg",
//   category: "N/A",
//   cast: "N/A",
//  rate: "N/A",
//   release: "N/A", };

