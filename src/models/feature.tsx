import {
  UserIcon,
  ClipboardDocumentListIcon,
  NewspaperIcon,
  Cog6ToothIcon,
  RadioIcon,
  PresentationChartBarIcon,
  MicrophoneIcon,
  PlayCircleIcon,
  Square2StackIcon,
  CircleStackIcon,
  BriefcaseIcon,
  CurrencyDollarIcon,
  FolderIcon,
  Square3Stack3DIcon,
  GlobeAltIcon,
  Squares2X2Icon,
  GlobeAmericasIcon,
  ChatBubbleBottomCenterTextIcon,
} from '@heroicons/react/24/solid'

export enum Feature {
  TOPIC = 'topic',
  NEWS_SOURCE = 'news_source',
  NEWS_ARTICLE = 'news_article',
  NEWS_CRAWLER_CONFIG = 'new_crawler_config',
  VOCAB_COLLECTION = 'vocab_collection',
  VIDEO_CHANNEL = 'video_channel',
  VIDEO = 'video',
  PODCAST_CATEGORY = 'podcast_category',
  PODCAST = 'podcast',
  SUBSCRIPTION_PLAN = 'subscription_plan',
  USER = 'user',
  FEEDBACK = 'feedback',
  USER_SUBSCRIPTION = 'user_subscription',
  CAMPAIGN = 'campaign',
  USER_ACTIVITY_LOGS = 'user-activity-logs',
  PREMIUM_VOUCHERS = 'premium-vouchers',
  REFERRAL_CODES = 'referral-codes',
  REFERRAL_LOGS = 'referral-logs',
  GAME_WORDS = 'game-words',
}

export enum PageType {
  FEATURED = 'featured',
  CREATE = 'create',
  LIST = 'list',
  DETAIL = 'detail',
}

export const features = [
  {
    id: Feature.TOPIC,
    name: 'News Topics',
    link: '/topics',
    icon: <CircleStackIcon width={24} />,
    collections: [
      {
        id: Feature.TOPIC + '_' + PageType.LIST,
        name: 'List',
        link: '/topics',
      },
      {
        id: Feature.TOPIC + '_' + PageType.CREATE,
        name: 'Create',
        link: '/topics/create',
      },
    ],
  },
  {
    id: Feature.NEWS_SOURCE,
    name: 'News Sources',
    link: '/news-sources',
    icon: <Square2StackIcon width={24} />,
    collections: [
      {
        id: Feature.TOPIC + '_' + PageType.LIST,
        name: 'List',
        link: '/news-sources',
      },
      {
        id: Feature.TOPIC + '_' + PageType.CREATE,
        name: 'Create',
        link: '/news-sources/create',
      },
    ],
  },
  {
    id: Feature.NEWS_ARTICLE,
    name: 'News Articles',
    link: '/news-articles',
    icon: <NewspaperIcon width={24} />,
    collections: [
      {
        id: Feature.NEWS_ARTICLE + '_' + PageType.FEATURED,
        name: 'Featured',
        link: '/news-articles/featured',
      },
      {
        id: Feature.NEWS_ARTICLE + '_' + PageType.LIST,
        name: 'List',
        link: '/news-articles',
      },
      {
        id: Feature.NEWS_ARTICLE + '_' + PageType.CREATE,
        name: 'Create',
        link: '/news-articles/create',
      },
    ],
  },
  {
    id: Feature.NEWS_CRAWLER_CONFIG,
    name: 'News Crawler Config',
    link: '/news-crawler-configs',
    icon: <Cog6ToothIcon width={24} />,
    collections: [
      {
        id: Feature.NEWS_CRAWLER_CONFIG + '_' + PageType.LIST,
        name: 'List',
        link: '/news-crawler-configs',
      },
      {
        id: Feature.NEWS_CRAWLER_CONFIG + '_' + PageType.CREATE,
        name: 'Create',
        link: '/news-crawler-configs/create',
      },
    ],
  },
  {
    id: Feature.VOCAB_COLLECTION,
    name: 'Vocab Collections',
    link: '/vocab-collections',
    icon: <BriefcaseIcon width={24} />,
    collections: [
      {
        id: Feature.VOCAB_COLLECTION + '_' + PageType.LIST,
        name: 'List',
        link: '/vocab-collections',
      },
      {
        id: Feature.VOCAB_COLLECTION + '_' + PageType.CREATE,
        name: 'Create',
        link: '/vocab-collections/create',
      },
    ],
  },
  {
    id: Feature.VIDEO_CHANNEL,
    name: 'Video Channels',
    link: '/video-channels',
    icon: <PresentationChartBarIcon width={24} />,
    collections: [
      {
        id: Feature.VIDEO_CHANNEL + '_' + PageType.LIST,
        name: 'List',
        link: '/video-channels',
      },
      {
        id: Feature.VIDEO_CHANNEL + '_' + PageType.CREATE,
        name: 'Create',
        link: '/video-channels/create',
      },
    ],
  },
  {
    id: Feature.VIDEO,
    name: 'Videos',
    link: '/videos',
    icon: <PlayCircleIcon width={24} />,
    collections: [
      {
        id: Feature.VIDEO + '_' + PageType.LIST,
        name: 'List',
        link: '/videos',
      },
      {
        id: Feature.VIDEO + '_' + PageType.CREATE,
        name: 'Create',
        link: '/videos/create',
      },
    ],
  },
  {
    id: Feature.PODCAST_CATEGORY,
    name: 'Podcast Categories',
    link: '/podcast-categories',
    icon: <RadioIcon width={24} />,
    collections: [
      {
        id: Feature.PODCAST_CATEGORY + '_' + PageType.LIST,
        name: 'List',
        link: '/podcast-categories',
      },
      {
        id: Feature.PODCAST_CATEGORY + '_' + PageType.CREATE,
        name: 'Create',
        link: '/podcast-categories/create',
      },
    ],
  },
  {
    id: Feature.PODCAST,
    name: 'Podcasts',
    link: '/podcasts',
    icon: <MicrophoneIcon width={24} />,
    collections: [
      {
        id: Feature.PODCAST + '_' + PageType.LIST,
        name: 'List',
        link: '/podcasts',
      },
      {
        id: Feature.PODCAST + '_' + PageType.CREATE,
        name: 'Create',
        link: '/podcasts/create',
      },
    ],
  },
  {
    id: Feature.SUBSCRIPTION_PLAN,
    name: 'Subscription Plans',
    link: '/subscription-plans',
    icon: <ClipboardDocumentListIcon width={24} />,
    collections: [
      {
        id: Feature.SUBSCRIPTION_PLAN + '_' + PageType.LIST,
        name: 'List',
        link: '/subscription-plans',
      },
      {
        id: Feature.SUBSCRIPTION_PLAN + '_' + PageType.CREATE,
        name: 'Create',
        link: '/subscription-plans/create',
      },
    ],
  },
  {
    id: Feature.CAMPAIGN,
    name: 'Campaigns',
    link: '/campaigns',
    icon: <FolderIcon width={24} />,
    collections: [
      {
        id: Feature.USER_SUBSCRIPTION + '_' + PageType.LIST,
        name: 'List',
        link: '/campaigns',
      },
      {
        id: Feature.USER_SUBSCRIPTION + '_' + PageType.CREATE,
        name: 'Create',
        link: '/campaigns/create',
      },
    ],
  },
  {
    id: Feature.PREMIUM_VOUCHERS,
    name: 'Premium Vouchers',
    link: '/premium-vouchers',
    icon: <Square3Stack3DIcon width={24} />,
    collections: [
      {
        id: Feature.PREMIUM_VOUCHERS + '_' + PageType.LIST,
        name: 'List',
        link: '/premium-vouchers',
      },
    ],
  },
  {
    id: Feature.USER,
    name: 'Users',
    link: '/users',
    icon: <UserIcon width={24} />,
    collections: [
      {
        id: Feature.USER + '_' + PageType.LIST,
        name: 'List',
        link: '/users',
      },
    ],
  },
  {
    id: Feature.FEEDBACK,
    name: 'Feedback',
    link: '/feedbacks',
    icon: <ChatBubbleBottomCenterTextIcon width={24} />,
  },
  {
    id: Feature.USER_SUBSCRIPTION,
    name: 'User Subscriptions',
    link: '/user-subscriptions',
    icon: <CurrencyDollarIcon width={24} />,
    collections: [
      {
        id: Feature.USER_SUBSCRIPTION + '_' + PageType.LIST,
        name: 'List',
        link: '/user-subscriptions',
      },
    ],
  },
  {
    id: Feature.USER_ACTIVITY_LOGS,
    name: 'User Activity Logs',
    link: '/user-activity-logs',
    icon: <GlobeAltIcon width={24} />,
    collections: [
      {
        id: Feature.USER_ACTIVITY_LOGS + '_' + PageType.LIST,
        name: 'List',
        link: '/user-activity-logs',
      },
    ],
  },
  {
    id: Feature.REFERRAL_CODES,
    name: 'Referral',
    link: '/referral-codes',
    icon: <Squares2X2Icon width={24} />,
    collections: [
      {
        id: Feature.REFERRAL_CODES + '_' + PageType.LIST,
        name: 'Referral Codes',
        link: '/referral-codes',
      },
      {
        id: Feature.REFERRAL_LOGS + '_' + PageType.LIST,
        name: 'Referral Logs',
        link: '/referral-logs',
      },
    ],
  },
  {
    id: Feature.GAME_WORDS,
    name: 'Game Words',
    link: '/game-words',
    icon: <GlobeAmericasIcon width={24} />,
    collections: [
      {
        id: Feature.GAME_WORDS + '_' + PageType.LIST,
        name: 'List',
        link: '/game-words',
      },
      {
        id: Feature.GAME_WORDS + '_' + PageType.CREATE,
        name: 'Create',
        link: '/game-words/create',
      },
    ],
  },
]
