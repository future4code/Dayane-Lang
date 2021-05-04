import React from "react";
import { useParams } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";
import Loading from "../../components/Loading/Loading";
import CommentCard from "../../components/ComentCard/ComentCard";
import CreateComment from "../../components/CreateComment/CreateComment";
import {
  Arrow,
  Avatar,
  ButtonsContainer,
  CommentsContainer,
  DetailsContainer,
  InfoContainer,
  MainContainer,
  StyledBox,
  TextContainer,
  UserThings,
} from "./styled";

import ChatIcon from "@material-ui/icons/Chat";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { neutraColor } from "../../constants/colors";
import { votePost } from "../../services/feed";

function DetailsPostPage() {
  useProtectedPage();

  const params = useParams();

  const [{ post }, update] = useRequestData(`/posts/${params.id}`);

  const handleVote = (decision) => {
    const body = {
      direction: decision,
    };
    votePost(body, params.id, update);
  };

  const arrow = () => {
    if (post.userVoteDirection === 0) {
      return (
        <>
          <Arrow src={neutraColor} onClick={() => handleVote(1)} />
          <Typography size="md">{post.votesCount}</Typography>
          <Arrow src={neutraColor} onClick={() => handleVote(-1)} />
        </>
      );
    } else if (post.userVoteDirection === 1) {
      return (
        <>
          <Arrow src={neutraColor} onClick={() => handleVote(0)} />
          {post.votesCount}
          <Arrow src={neutraColor} onClick={() => handleVote(-1)} />
        </>
      );
    } else {
      return (
        <>
          <Arrow src={neutraColor} onClick={() => handleVote(1)} />
          <Typography size="md">{post.votesCount}</Typography>
          <Arrow src={neutraColor} onClick={() => handleVote(0)} />
        </>
      );
    }
  };

  return (
    <MainContainer>
      {!post ? (
        <Loading />
      ) : (
        <DetailsContainer>
          <StyledBox borderWidth="1px" borderRadius="lg">
            <InfoContainer>
              <ButtonsContainer>{arrow()}</ButtonsContainer>
              <TextContainer>
                <UserThings>
                  <Avatar
                    src={`https://avatars.dicebear.com/api/avataaars/${post.username}.svg`}
                  />
                  <Typography size="xs" pl="0.4em">
                    u/{post.username}
                  </Typography>
                </UserThings>
                <Typography pb="0.2em" size="lg">
                  {post.title}
                </Typography>
                <TextField>{post.text}</TextField>
                <TextField pt="0.3em" textAlign="end">
                  <ChatIcon color="#f8b3b2" /> {post.commentsCount}{" "}
                  {post.commentsCount === 1 ? "comentário" : "comentários"}
                </TextField>
              </TextContainer>
            </InfoContainer>
            <CreateComment update={update} id={post.id} />
          </StyledBox>
          <CommentsContainer>
            {" "}
            {post.comments
              .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
              .map((item) => {
                return (
                  <CommentCard
                    image={`https://avatars.dicebear.com/api/avataaars/${item.username}.svg`}
                    direction={item.userVoteDirection}
                    commentId={item.id}
                    postId={params.id}
                    update={update}
                    id={item.id}
                    text={item.text}
                    username={item.username}
                    userVoteDirection={item.userVoteDirection}
                    votesCount={item.votesCount}
                  />
                );
              })}
          </CommentsContainer>
        </DetailsContainer>
      )}
    </MainContainer>
  );
}

export default DetailsPostPage;
