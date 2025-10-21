import React from "react";
import styled from "styled-components/native";
import { DefaultTheme } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { PopularPost } from "../types/community";

interface ThemedProps {
  theme: DefaultTheme;
}

const CardContainer = styled.View`
  background-color: ${(props: ThemedProps) =>
    props.theme.colors.cardBackground};
  border-radius: ${(props: ThemedProps) => props.theme.borderRadius.lg}px;
  padding: ${(props: ThemedProps) => props.theme.spacing.md}px;
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.sm}px;
`;

const PostHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.sm}px;
`;

const Avatar = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${(props: ThemedProps) => props.theme.colors.primary};
  align-items: center;
  justify-content: center;
  margin-right: ${(props: ThemedProps) => props.theme.spacing.sm}px;
`;

const PostInfo = styled.View`
  flex: 1;
`;

const PostTitle = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.md}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.semibold};
  color: ${(props: ThemedProps) => props.theme.colors.text};
  margin-bottom: 4px;
`;

const PostMeta = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.sm}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.regular};
  color: ${(props: ThemedProps) => props.theme.colors.textSecondary};
`;

const PostContent = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.sm}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.regular};
  color: ${(props: ThemedProps) => props.theme.colors.text};
  line-height: 20px;
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.sm}px;
`;

const PostActions = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ActionButtons = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ActionButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: ${(props: ThemedProps) => props.theme.colors.primary};
  padding: 8px 12px;
  border-radius: ${(props: ThemedProps) => props.theme.borderRadius.sm}px;
  margin-right: ${(props: ThemedProps) => props.theme.spacing.sm}px;
`;

const ActionButtonText = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.sm}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.medium};
  color: white;
  margin-left: 4px;
`;

const DetailButton = styled.TouchableOpacity`
  background-color: ${(props: ThemedProps) => props.theme.colors.primary};
  padding: 8px 16px;
  border-radius: ${(props: ThemedProps) => props.theme.borderRadius.sm}px;
`;

const DetailButtonText = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.sm}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.medium};
  color: white;
`;

interface PopularPostCardProps {
  post: PopularPost;
}

export const PopularPostCard = ({ post }: PopularPostCardProps) => {
  const handleLike = () => {
    console.log("좋아요 클릭:", post.id);
  };

  const handleComment = () => {
    console.log("댓글 클릭:", post.id);
  };

  const handleDetail = () => {
    console.log("자세히 보기 클릭:", post.id);
  };

  return (
    <CardContainer
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      }}
    >
      <PostHeader>
        <Avatar>
          <MaterialIcons name="person" size={20} color="white" />
        </Avatar>
        <PostInfo>
          <PostTitle>{post.title}</PostTitle>
          <PostMeta>
            {post.authorName} | {post.authorBusiness} | {post.daysAgo}
          </PostMeta>
        </PostInfo>
      </PostHeader>

      <PostContent>{post.content}</PostContent>

      <PostActions>
        <ActionButtons>
          <ActionButton onPress={handleLike}>
            <MaterialIcons name="thumb-up" size={16} color="white" />
            <ActionButtonText>{post.likes}</ActionButtonText>
          </ActionButton>
          <ActionButton onPress={handleComment}>
            <MaterialIcons name="comment" size={16} color="white" />
            <ActionButtonText>{post.comments}</ActionButtonText>
          </ActionButton>
        </ActionButtons>
        <DetailButton onPress={handleDetail}>
          <DetailButtonText>자세히 보기</DetailButtonText>
        </DetailButton>
      </PostActions>
    </CardContainer>
  );
};
