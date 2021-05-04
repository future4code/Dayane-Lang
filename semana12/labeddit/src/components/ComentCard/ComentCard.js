import React from "react";
import { voteComment } from "../../services/feed";
import { Typography, TextField} from "@material-ui/core";
import {
  Arrow,
  Avatar,
  ButtonsContainer,
  StyledBox,
  TextContainer,
  UserThings,
} from "./styled";
//import colors from "../../constants/colors";

function CommentCard(props) {
  const handleVote = (decision) => {
    const body = {
      direction: decision,
    };
    voteComment(body, props.postId, props.commentId, props.update);
  };

  const arrow = () => {
    if (props.direction === 0) {
      return (
        <>
          <Arrow
            onMouseOver={(e) => (e.currentTarget.colors = "primary")}
            onMouseOut={(e) => (e.currentTarget.colors = "neutraColor")}
            onClick={() => handleVote(1)}
          />
          <Typography size="md">{props.votesCount}</Typography>
          <Arrow
            onMouseOver={(e) => (e.currentTarget.colors = "primary")}
            onMouseOut={(e) => (e.currentTarget.colors = "neutraColor")}
            onClick={() => handleVote(-1)}
          />
        </>
      );
    } else if (props.direction === 1) {
      return (
        <>
          <Arrow onClick={() => handleVote(0)} />
          <Typography size="md">{props.votesCount}</Typography>
          <Arrow
            onMouseOver={(e) => (e.currentTarget.colors = "primary")}
            onMouseOut={(e) => (e.currentTarget.colors = "neutraColor")}
            onClick={() => handleVote(-1)}
          />
        </>
      );
    } else {
      return (
        <>
          <Arrow
            onMouseOver={(e) => (e.currentTarget.colors = "primary")}
            onMouseOut={(e) => (e.currentTarget.colors = "neutraColor")}
            onClick={() => handleVote(1)}
          />
          <Typography size="md">{props.votesCount}</Typography>
          <Arrow onClick={() => handleVote(0)} />
        </>
      );
    }
  };

  return (
    <StyledBox borderWidth="1px" borderRadius="lg">
      <ButtonsContainer>{arrow()}</ButtonsContainer>
      <TextContainer>
        <UserThings>
          <Avatar src={props.image} />
          <Typography size="xs" pl="0.4em">
            u/{props.username}
          </Typography>
        </UserThings>
        <TextField>{props.text}</TextField>
      </TextContainer>
    </StyledBox>
  );
}

export default CommentCard;
