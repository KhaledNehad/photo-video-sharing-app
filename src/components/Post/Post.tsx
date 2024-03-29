import { View, Text, Image, Pressable } from 'react-native';
import styles from './styles';

import Antdesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Comment from '../Comment';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';
import { IPost } from '../../lib/types';

import { formatDistance, subDays } from 'date-fns';
import { useState } from 'react';
import DoublePress from '../DoublePressable';

interface IPostProps {
  post: IPost;
}

export default function Post({ post }: IPostProps) {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionExpanded(v => !v);
  };

  const toggleLike = () => {
    setIsLiked(v => !v);
  };

  return (
    <View style={styles.post}>
      <View style={styles.postHeader}>
        <View style={styles.postHeaderUser}>
          <Image
            source={{
              uri: post.user.avatar,
            }}
            style={styles.avatar}
          />
          <Text style={styles.postHeaderUsername}>{post.user.username}</Text>
        </View>
        <View style={styles.postHeaderMenu}>
          <Antdesign
            name="ellipsis1"
            size={fonts.size.md}
            color={colors.text}
          />
        </View>
      </View>
      <View style={styles.postContent}>
        <DoublePress onDoublePress={toggleLike}>
          <Image
            source={{
              uri: post.image,
            }}
            style={styles.postImage}
          />
        </DoublePress>
      </View>
      <View style={styles.postFooter}>
        <View style={styles.iconContainer}>
          <Pressable onPress={() => setIsLiked(v => !v)}>
            <Antdesign
              name={isLiked ? 'heart' : 'hearto'}
              size={fonts.size.md}
              color={isLiked ? colors.accent : colors.text}
              style={styles.icon}
            />
          </Pressable>
          <Ionicons
            name="chatbubble-outline"
            size={fonts.size.md}
            color={colors.text}
            style={styles.icon}
          />
          <Feather
            name="send"
            size={fonts.size.md}
            color={colors.text}
            style={styles.icon}
          />
          <Feather
            name="bookmark"
            size={fonts.size.md}
            color={colors.text}
            style={styles.bookmarkIcon}
          />
        </View>
      </View>
      <View style={styles.postInfo}>
        <View style={styles.likesInfo}>
          <Text style={styles.text}>
            Liked by{' '}
            <Text style={{ fontWeight: fonts.weight.bold }}>
              {post.likes[0].user.username}
            </Text>{' '}
            and{' '}
            <Text style={{ fontWeight: fonts.weight.bold }}>
              {post.likes.length - 1} others
            </Text>
          </Text>
        </View>
        <View style={styles.captionInfo}>
          <Text
            style={styles.text}
            numberOfLines={isDescriptionExpanded ? 0 : 3}
            ellipsizeMode="tail">
            <Text style={{ fontWeight: fonts.weight.bold }}>
              {post.user.username}
            </Text>{' '}
            {post.caption}
          </Text>
          <Text style={styles.text} onPress={toggleDescription}>
            {isDescriptionExpanded ? 'less' : 'more'}
          </Text>
        </View>
        <View style={styles.commentsInfo}>
          <Text style={styles.TotalComments}>
            View all {post.comments.length} comments
          </Text>

          <View style={styles.comments}>
            {post.comments
              .map(comment => (
                <Comment
                  key={comment.id}
                  username={comment.user.username}
                  text={comment.text}
                />
              ))
              .slice(0, 2)}
          </View>
        </View>

        <Text style={styles.timeInfo}>
          {formatDistance(subDays(new Date(post.postedAt), 0), new Date())} ago
        </Text>
      </View>
    </View>
  );
}
