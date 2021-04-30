import React from "react";
import { useHistory } from "react-router-dom";
import { goToDetailsPost } from "../../routes/cordinator";
import { votePost } from "../../services/feed";
import { Typography, TextField } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import {
  Arrow,
  Avatar,
  ButtonsContainer,
  StyledBox,
  TextContainer,
  UserThings,
} from "./styled";
//import greyDown from '../../assets/grey-down.svg'
//import greyUp from '../../assets/grey-up.svg'
//import coloredUp from '../../assets/colored-up.svg'
//import coloredDown from '../../assets/colored-down.svg'

function PostCard(props) {
  const history = useHistory();

  const handleVote = (decision) => {
    const body = {
      direction: decision,
    };
    votePost(body, props.id, props.update);
  };

  const arrow = () => {
    if (props.direction === 0) {
      return (
        <>
          <Arrow
            onMouseOver={(e) => (e.currentTarget = "#848484")}
            onMouseOut={(e) => (e.currentTarget = "#848484")}
            onClick={() => handleVote(1)}
          />
          <Typography size="md">{props.votesCount}</Typography>
          <Arrow
            onMouseOver={(e) => (e.currentTarget = "#848484")}
            onMouseOut={(e) => (e.currentTarget = "#848484")}
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
            onMouseOver={(e) => (e.currentTarget = "#848484")}
            onMouseOut={(e) => (e.currentTarget = "#848484")}
            onClick={() => handleVote(-1)}
          />
        </>
      );
    } else {
      return (
        <>
          <Arrow
            onMouseOver={(e) => (e.currentTarget = "#848484")}
            onMouseOut={(e) => (e.currentTarget = "#848484")}
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
      <TextContainer onClick={() => goToDetailsPost(history, props.id)}>
        <UserThings>
          <Avatar src={props.image} />
          <Typography size="xs" pl="0.4em">
            u/{props.username}
          </Typography>
        </UserThings>

        <Typography pb="0.2em" size="lg">
          {props.title}{" "}
        </Typography>

        <TextField>{props.text}</TextField>

        <TextField pt="0.3em" textAlign="end">
          <ChatIcon color="#f1aad7" /> {props.commentsCount}{" "}
          {props.commentsCount === 1 ? "comentário" : "comentários"}
        </TextField>
      </TextContainer>
    </StyledBox>
  );
}

export default PostCard;
