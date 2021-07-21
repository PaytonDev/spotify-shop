/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  Home: undefined;
  Search: undefined;
  'Your Library': undefined;
  Premium: undefined;
  Store: undefined;

};

export type TabOneParamList = {
  TabOneScreen: undefined;
  HomeScreen:undefined;
  AlbumScreen:undefined;
  StoreScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
  StoreScreen: undefined;
};

export type AlbumInfo = {
    id: string;
    imageUri: string;
    aritistHeadline: string;
    by: {};
    name: string;
};

export type Song = {
  id: string;
  imageUri: string;
  title: string;
  Artist: string;
};

export type Merch = {
    id: number;
    image: string;
    price: number;
    itemName: string;
    sourceName: string;
    sourceURI: string;
  }[];

  export type PodcastInfo = {
      id: number;
      showName: string;
      episodeName: string;
      image: string;
  }

  export type Social = {
    source: string;
    message: string;
    timeStamp: string;
    image: string;
}