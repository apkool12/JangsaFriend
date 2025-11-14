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

const TopicBadge = styled.View`
  align-self: flex-start;
  padding-left: ${(props: ThemedProps) => props.theme.spacing.sm}px;
  padding-right: ${(props: ThemedProps) => props.theme.spacing.sm}px;
  padding-top: ${(props: ThemedProps) => props.theme.spacing.xs}px;
  padding-bottom: ${(props: ThemedProps) => props.theme.spacing.xs}px;
  border-radius: ${(props: ThemedProps) => props.theme.borderRadius.sm}px;
  background-color: ${(props: ThemedProps) => props.theme.colors.background};
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.xs}px;
`;

const BadgeText = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.xs}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.medium};
  color: ${(props: ThemedProps) => props.theme.colors.textSecondary};
`;

const QuestionRow = styled.View`
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.xs}px;
`;

const QuestionLabel = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.lg}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.semibold};
  color: ${(props: ThemedProps) => props.theme.colors.warning};
  margin-right: ${(props: ThemedProps) => props.theme.spacing.xs}px;
`;

const QuestionText = styled.Text`
  flex: 1;
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.md}px;
  font-weight: ${(props: ThemedProps) => props.theme.fontWeight.bold};
  color: ${(props: ThemedProps) => props.theme.colors.text};
  line-height: 22px;
`;

const PostMeta = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.xs}px;
  color: ${(props: ThemedProps) => props.theme.colors.textSecondary};
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.sm}px;
`;

const PostContent = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.sm}px;
  color: ${(props: ThemedProps) => props.theme.colors.text};
  line-height: 20px;
  margin-bottom: ${(props: ThemedProps) => props.theme.spacing.md}px;
`;

const PostFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${(props: ThemedProps) => props.theme.spacing.sm}px;
`;

const FooterMeta = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.xs}px;
  color: ${(props: ThemedProps) => props.theme.colors.textSecondary};
`;

const FooterActions = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ActionItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-left: ${(props: ThemedProps) => props.theme.spacing.md}px;
`;

const ActionCount = styled.Text`
  font-family: ${(props: ThemedProps) => props.theme.fontFamily.system};
  font-size: ${(props: ThemedProps) => props.theme.fontSize.sm}px;
  color: ${(props: ThemedProps) => props.theme.colors.textSecondary};
  margin-left: 4px;
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
      <TopicBadge>
        <BadgeText>우리동네질문</BadgeText>
      </TopicBadge>

      <QuestionRow>
        <QuestionLabel>Q.</QuestionLabel>
        <QuestionText>{post.title}</QuestionText>
      </QuestionRow>

      <PostMeta>
        {post.authorBusiness} · {post.authorName} · {post.daysAgo}
      </PostMeta>

      <PostContent numberOfLines={2}>{post.content}</PostContent>

      <PostFooter>
        <FooterMeta>공감하기 · 댓글 {post.comments}</FooterMeta>
        <FooterActions>
          <ActionItem onPress={handleLike}>
            <MaterialIcons
              name="favorite-border"
              size={18}
              color={post.likes > 0 ? "#F25C54" : "#B0B0B0"}
            />
            <ActionCount>{post.likes}</ActionCount>
          </ActionItem>
          <ActionItem onPress={handleComment}>
            <MaterialIcons
              name="chat-bubble-outline"
              size={18}
              color="#B0B0B0"
            />
            <ActionCount>{post.comments}</ActionCount>
          </ActionItem>
        </FooterActions>
      </PostFooter>
    </CardContainer>
  );
};
