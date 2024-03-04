import {ScrollView} from 'react-native';

import Post from '../Post';
import {IPost, IStory} from '../../lib/types';
import Story from '../Story';

const posts = [
  {
    id: 'cd35a30b-7dc6-482a-bea1-891d7205b53d',
    user: {
      id: 'e99831e0-f25a-403d-8f54-172895-kh',
      username: 'KhaledNehad',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/310.jpg',
    },
    caption: 'Beautiful sunset 🌅 ☀️',
    image:
      'https://images.freeimages.com/images/large-previews/5c6/sunset-jungle-1383333.jpg',
    comments: [
      {
        id: 'd4e9b124-98df-4f4c-bb9c-614795ca5c',
        user: {
          id: 'cd2f8f43-e895-4604-a1da-4b130beb1f-js',
          username: 'jane_smith',
          avatar:
            'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/957.jpg',
        },
        text: 'Amazing photo!',
      },
      {
        id: 'a76e12f1-9ae0-422f-8f74-4b29614425cb',
        user: {
          id: 'cd2f8f43-e895-4604-a1da-4b130beb1fal-aw',
          username: 'alex_wilson',
          avatar:
            'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
        },
        text: 'Love it!',
      },
    ],
    likes: [
      {
        id: 'd4e9b124-98df-4f4c-bb9c-614795ca5ceb',
        user: {
          id: 'cd2f8f43-e895-4604-a1da-4b130beb1f-js',
          username: 'jane_smith',
          avatar:
            'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/957.jpg',
        },
      },
      {
        id: 'a76e12f1-9ae0-422f-8f74-4b29614425cb',
        user: {
          id: 'cd2f8f43-e895-4604-a1da-4b130beb1fal-aw',
          username: 'alex_wilson',
          avatar:
            'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
        },
      },
      {
        id: '94ab02ef-4662-4c77-85c9-c63f785e1030',
        user: {
          id: '0cd75b99-a39e-428e-bfc7-ac69fa1e674a-jd',
          username: 'john_doe',
          avatar:
            'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/822.jpg',
        },
      },
      {
        id: 'ce1a7e55-c74b-48eb-b10b-b0539419d8f1',
        user: {
          id: '8ab0c8a3-6945-47fa-aa53-5f51d27f2955-mf',
          username: 'MistyFraney',
          avatar:
            'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/921.jpg',
        },
      },
    ],
    postedAt: '2023-12-15T12:00:00Z',
  },
  {
    id: 'fe9bf43c-da2f-4142-b898-b7b13c8ae161',
    user: {
      id: '37a5e192-f0fb-4a1f-bf81-622fce7aca4e',
      username: 'PennyLane',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/220.jpg',
    },
    caption: 'Cute puppy 🐶',
    image:
      'https://images.freeimages.com/images/large-previews/464/puppy-1400784.jpg?fmt=webp&h=350',
    likes: [
      {
        id: 'd4e9b124-98df-4f4c-bb9c-614795ca5ceb',
        user: {
          id: 'cd2f8f43-e895-4604-a1da-4b130beb1f-js',
          username: 'jane_smith',
          avatar:
            'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/957.jpg',
        },
      },
      {
        id: '71ab5594-944a-454f-8bd5-d11e2aad9cde',
        user: {
          id: 'cd2f8f43-e895-4604-a1da-4b130beb1fal-aw',
          username: 'alex_wilson',
          avatar:
            'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
        },
      },
    ],
    comments: [
      {
        id: '94ab02ef-4662-4c77-85c9-c63f785e1030',
        user: {
          id: '0cd75b99-a39e-428e-bfc7-ac69fa1e674a-jd',
          username: 'john_doe',
          avatar:
            'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/822.jpg',
        },
        text: 'So adorable!',
      },
      {
        id: 'd4e9b124-98df-4f4c-bb9c-614795ca5ceb',
        user: {
          id: 'cd2f8f43-e895-4604-a1da-4b130beb1f-js',
          username: 'jane_smith',
          avatar:
            'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/957.jpg',
        },
        text: 'I want one 🤪',
      },
      {
        id: 'a76e12f1-9ae0-422f-8f74-4b29614425cb',
        user: {
          id: 'cd2f8f43-e895-4604-a1da-4b130beb1fal-aw',
          username: 'alex_wilson',
          avatar:
            'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
        },
        comment: 'So cute 😍',
      },
    ],
    postedAt: '2024-01-09T12:00:00Z',
  },
  {
    id: 3,
    user: {
      id: '8ab0c8a3-6945-47fa-aa53-5f51d27f2955-mf',
      username: 'MistyFraney',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/921.jpg',
    },
    caption: 'Beautiful flowers 🌸 🌺 🌼',
    image:
      'https://images.freeimages.com/images/large-previews/792/flowers-1558341.jpg?fmt=webp&h=350',
    likes: [
      {
        id: '3beaf536-daee-4d4d-83e5-1db3b7276e61',
        user: {
          id: 'cd2f8f43-e895-4604-a1da-4b130beb1f-js',
          username: 'jane_smith',
          avatar:
            'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/957.jpg',
        },
      },
      {
        id: 'a76e12f1-9ae0-422f-8f74-4b29614425cb',
        user: {
          id: 'cd2f8f43-e895-4604-a1da-4b130beb1fal-aw',
          username: 'alex_wilson',
          avatar:
            'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
        },
      },
      {
        id: 3,
        user: {
          id: '0cd75b99-a39e-428e-bfc7-ac69fa1e674a-jd',
          username: 'john_doe',
          avatar:
            'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/822.jpg',
        },
      },
    ],
    comments: [
      {
        id: 'd4e9b124-98df-4f4c-bb9c-614795ca5ceb',
        user: {
          id: 'cd2f8f43-e895-4604-a1da-4b130beb1f-js',
          username: 'jane_smith',
          avatar:
            'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/957.jpg',
        },
        text: 'Amazing!',
      },
    ],
    postedAt: '2024-02-10T12:00:00Z',
  },
];

const story = [
  {
    id: '1',
    user: {
      id: '1',
      username: 'jane_smith',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1163.jpg',
    },
    image:
      'https://images.freeimages.com/images/large-previews/5c6/sunset-jungle-1383333.jpg',
    time: '2023-12-15T12:00:00Z',
    isSeen: false,
  },
  {
    id: '2',
    user: {
      id: '2',
      username: 'alex_wilson',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
    image:
      'https://images.freeimages.com/images/large-previews/464/puppy-1400784.jpg?fmt=webp&h=350',
    time: '2024-01-09T12:00:00Z',
    isSeen: true,
  },
];

export default function FeedPost() {
  return (
    <>
      <ScrollView horizontal>
        {story.map(story => (
          <Story key={story.id} story={story as IStory} />
        ))}
      </ScrollView>
      <ScrollView>
        {posts.map(post => (
          <Post key={post.id} post={post as IPost} />
        ))}
      </ScrollView>
    </>
  );
}
