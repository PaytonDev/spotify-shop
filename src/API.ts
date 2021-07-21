/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAlbumCategoryInput = {
  id?: string | null,
  title: string,
};

export type ModelAlbumCategoryConditionInput = {
  title?: ModelStringInput | null,
  and?: Array< ModelAlbumCategoryConditionInput | null > | null,
  or?: Array< ModelAlbumCategoryConditionInput | null > | null,
  not?: ModelAlbumCategoryConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type AlbumCategory = {
  __typename: "AlbumCategory",
  id: string,
  title: string,
  albums?: ModelAlbumConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelAlbumConnection = {
  __typename: "ModelAlbumConnection",
  items?:  Array<Album | null > | null,
  nextToken?: string | null,
};

export type Album = {
  __typename: "Album",
  id: string,
  name: string,
  by?: ModelArtistConnection | null,
  imageUri: string,
  aritistHeadline: string,
  songs?: ModelSongConnection | null,
  albumCategoryId: string,
  AlbumCategory?: AlbumCategory | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelArtistConnection = {
  __typename: "ModelArtistConnection",
  items?:  Array<Artist | null > | null,
  nextToken?: string | null,
};

export type Artist = {
  __typename: "Artist",
  id: string,
  name: string,
  avatar: string,
  merch?: ModelMerchConnection | null,
  tour?: ModelTourConnection | null,
  podcast?: ModelPodcastConnection | null,
  social?: ModelSocialConnection | null,
  albumId: string,
  album?: Album | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelMerchConnection = {
  __typename: "ModelMerchConnection",
  items?:  Array<Merch | null > | null,
  nextToken?: string | null,
};

export type Merch = {
  __typename: "Merch",
  id: string,
  itemName: string,
  image: string,
  price: number,
  sourceName: string,
  sourceURI: string,
  artistId: string,
  artist?: Artist | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelTourConnection = {
  __typename: "ModelTourConnection",
  items?:  Array<Tour | null > | null,
  nextToken?: string | null,
};

export type Tour = {
  __typename: "Tour",
  id: string,
  onTour: boolean,
  tourDates?: ModelTourDatesConnection | null,
  artistId: string,
  artist?: Artist | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelTourDatesConnection = {
  __typename: "ModelTourDatesConnection",
  items?:  Array<TourDates | null > | null,
  nextToken?: string | null,
};

export type TourDates = {
  __typename: "TourDates",
  id: string,
  dateMonth: string,
  dateDate: string,
  dateDay: string,
  dateTime: string,
  city: string,
  venue: string,
  tourId: string,
  tour?: Tour | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPodcastConnection = {
  __typename: "ModelPodcastConnection",
  items?:  Array<Podcast | null > | null,
  nextToken?: string | null,
};

export type Podcast = {
  __typename: "Podcast",
  id: string,
  onTour: boolean,
  featPodcast?: ModelFeatPodcastConnection | null,
  artistId: string,
  artist?: Artist | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelFeatPodcastConnection = {
  __typename: "ModelFeatPodcastConnection",
  items?:  Array<FeatPodcast | null > | null,
  nextToken?: string | null,
};

export type FeatPodcast = {
  __typename: "FeatPodcast",
  id: string,
  showName: string,
  episodeName: string,
  image: string,
  podcastId: string,
  podcast?: Podcast | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelSocialConnection = {
  __typename: "ModelSocialConnection",
  items?:  Array<Social | null > | null,
  nextToken?: string | null,
};

export type Social = {
  __typename: "Social",
  id: string,
  source: string,
  message: string,
  image: string,
  artistId: string,
  artist?: Artist | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelSongConnection = {
  __typename: "ModelSongConnection",
  items?:  Array<Song | null > | null,
  nextToken?: string | null,
};

export type Song = {
  __typename: "Song",
  id: string,
  imageUri: string,
  title: string,
  Artist: string,
  albumId: string,
  Album?: Album | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAlbumCategoryInput = {
  id: string,
  title?: string | null,
};

export type DeleteAlbumCategoryInput = {
  id: string,
};

export type CreateAlbumInput = {
  id?: string | null,
  name: string,
  imageUri: string,
  aritistHeadline: string,
  albumCategoryId: string,
};

export type ModelAlbumConditionInput = {
  name?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  aritistHeadline?: ModelStringInput | null,
  albumCategoryId?: ModelIDInput | null,
  and?: Array< ModelAlbumConditionInput | null > | null,
  or?: Array< ModelAlbumConditionInput | null > | null,
  not?: ModelAlbumConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateAlbumInput = {
  id: string,
  name?: string | null,
  imageUri?: string | null,
  aritistHeadline?: string | null,
  albumCategoryId?: string | null,
};

export type DeleteAlbumInput = {
  id: string,
};

export type CreateSongInput = {
  id?: string | null,
  imageUri: string,
  title: string,
  Artist: string,
  albumId: string,
};

export type ModelSongConditionInput = {
  imageUri?: ModelStringInput | null,
  title?: ModelStringInput | null,
  Artist?: ModelStringInput | null,
  albumId?: ModelIDInput | null,
  and?: Array< ModelSongConditionInput | null > | null,
  or?: Array< ModelSongConditionInput | null > | null,
  not?: ModelSongConditionInput | null,
};

export type UpdateSongInput = {
  id: string,
  imageUri?: string | null,
  title?: string | null,
  Artist?: string | null,
  albumId?: string | null,
};

export type DeleteSongInput = {
  id: string,
};

export type CreateArtistInput = {
  id?: string | null,
  name: string,
  avatar: string,
  albumId: string,
};

export type ModelArtistConditionInput = {
  name?: ModelStringInput | null,
  avatar?: ModelStringInput | null,
  albumId?: ModelIDInput | null,
  and?: Array< ModelArtistConditionInput | null > | null,
  or?: Array< ModelArtistConditionInput | null > | null,
  not?: ModelArtistConditionInput | null,
};

export type UpdateArtistInput = {
  id: string,
  name?: string | null,
  avatar?: string | null,
  albumId?: string | null,
};

export type DeleteArtistInput = {
  id: string,
};

export type CreateMerchInput = {
  id?: string | null,
  itemName: string,
  image: string,
  price: number,
  sourceName: string,
  sourceURI: string,
  artistId: string,
};

export type ModelMerchConditionInput = {
  itemName?: ModelStringInput | null,
  image?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  sourceName?: ModelStringInput | null,
  sourceURI?: ModelStringInput | null,
  artistId?: ModelIDInput | null,
  and?: Array< ModelMerchConditionInput | null > | null,
  or?: Array< ModelMerchConditionInput | null > | null,
  not?: ModelMerchConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateMerchInput = {
  id: string,
  itemName?: string | null,
  image?: string | null,
  price?: number | null,
  sourceName?: string | null,
  sourceURI?: string | null,
  artistId?: string | null,
};

export type DeleteMerchInput = {
  id: string,
};

export type CreateTourInput = {
  id?: string | null,
  onTour: boolean,
  artistId: string,
};

export type ModelTourConditionInput = {
  onTour?: ModelBooleanInput | null,
  artistId?: ModelIDInput | null,
  and?: Array< ModelTourConditionInput | null > | null,
  or?: Array< ModelTourConditionInput | null > | null,
  not?: ModelTourConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateTourInput = {
  id: string,
  onTour?: boolean | null,
  artistId?: string | null,
};

export type DeleteTourInput = {
  id: string,
};

export type CreateTourDatesInput = {
  id?: string | null,
  dateMonth: string,
  dateDate: string,
  dateDay: string,
  dateTime: string,
  city: string,
  venue: string,
  tourId: string,
};

export type ModelTourDatesConditionInput = {
  dateMonth?: ModelStringInput | null,
  dateDate?: ModelStringInput | null,
  dateDay?: ModelStringInput | null,
  dateTime?: ModelStringInput | null,
  city?: ModelStringInput | null,
  venue?: ModelStringInput | null,
  tourId?: ModelIDInput | null,
  and?: Array< ModelTourDatesConditionInput | null > | null,
  or?: Array< ModelTourDatesConditionInput | null > | null,
  not?: ModelTourDatesConditionInput | null,
};

export type UpdateTourDatesInput = {
  id: string,
  dateMonth?: string | null,
  dateDate?: string | null,
  dateDay?: string | null,
  dateTime?: string | null,
  city?: string | null,
  venue?: string | null,
  tourId?: string | null,
};

export type DeleteTourDatesInput = {
  id: string,
};

export type CreatePodcastInput = {
  id?: string | null,
  onTour: boolean,
  artistId: string,
};

export type ModelPodcastConditionInput = {
  onTour?: ModelBooleanInput | null,
  artistId?: ModelIDInput | null,
  and?: Array< ModelPodcastConditionInput | null > | null,
  or?: Array< ModelPodcastConditionInput | null > | null,
  not?: ModelPodcastConditionInput | null,
};

export type UpdatePodcastInput = {
  id: string,
  onTour?: boolean | null,
  artistId?: string | null,
};

export type DeletePodcastInput = {
  id: string,
};

export type CreateFeatPodcastInput = {
  id?: string | null,
  showName: string,
  episodeName: string,
  image: string,
  podcastId: string,
};

export type ModelFeatPodcastConditionInput = {
  showName?: ModelStringInput | null,
  episodeName?: ModelStringInput | null,
  image?: ModelStringInput | null,
  podcastId?: ModelIDInput | null,
  and?: Array< ModelFeatPodcastConditionInput | null > | null,
  or?: Array< ModelFeatPodcastConditionInput | null > | null,
  not?: ModelFeatPodcastConditionInput | null,
};

export type UpdateFeatPodcastInput = {
  id: string,
  showName?: string | null,
  episodeName?: string | null,
  image?: string | null,
  podcastId?: string | null,
};

export type DeleteFeatPodcastInput = {
  id: string,
};

export type CreateSocialInput = {
  id?: string | null,
  source: string,
  message: string,
  image: string,
  artistId: string,
};

export type ModelSocialConditionInput = {
  source?: ModelStringInput | null,
  message?: ModelStringInput | null,
  image?: ModelStringInput | null,
  artistId?: ModelIDInput | null,
  and?: Array< ModelSocialConditionInput | null > | null,
  or?: Array< ModelSocialConditionInput | null > | null,
  not?: ModelSocialConditionInput | null,
};

export type UpdateSocialInput = {
  id: string,
  source?: string | null,
  message?: string | null,
  image?: string | null,
  artistId?: string | null,
};

export type DeleteSocialInput = {
  id: string,
};

export type ModelAlbumCategoryFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelAlbumCategoryFilterInput | null > | null,
  or?: Array< ModelAlbumCategoryFilterInput | null > | null,
  not?: ModelAlbumCategoryFilterInput | null,
};

export type ModelAlbumCategoryConnection = {
  __typename: "ModelAlbumCategoryConnection",
  items?:  Array<AlbumCategory | null > | null,
  nextToken?: string | null,
};

export type ModelAlbumFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  aritistHeadline?: ModelStringInput | null,
  albumCategoryId?: ModelIDInput | null,
  and?: Array< ModelAlbumFilterInput | null > | null,
  or?: Array< ModelAlbumFilterInput | null > | null,
  not?: ModelAlbumFilterInput | null,
};

export type ModelSongFilterInput = {
  id?: ModelIDInput | null,
  imageUri?: ModelStringInput | null,
  title?: ModelStringInput | null,
  Artist?: ModelStringInput | null,
  albumId?: ModelIDInput | null,
  and?: Array< ModelSongFilterInput | null > | null,
  or?: Array< ModelSongFilterInput | null > | null,
  not?: ModelSongFilterInput | null,
};

export type ModelArtistFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  avatar?: ModelStringInput | null,
  albumId?: ModelIDInput | null,
  and?: Array< ModelArtistFilterInput | null > | null,
  or?: Array< ModelArtistFilterInput | null > | null,
  not?: ModelArtistFilterInput | null,
};

export type ModelMerchFilterInput = {
  id?: ModelIDInput | null,
  itemName?: ModelStringInput | null,
  image?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  sourceName?: ModelStringInput | null,
  sourceURI?: ModelStringInput | null,
  artistId?: ModelIDInput | null,
  and?: Array< ModelMerchFilterInput | null > | null,
  or?: Array< ModelMerchFilterInput | null > | null,
  not?: ModelMerchFilterInput | null,
};

export type ModelTourFilterInput = {
  id?: ModelIDInput | null,
  onTour?: ModelBooleanInput | null,
  artistId?: ModelIDInput | null,
  and?: Array< ModelTourFilterInput | null > | null,
  or?: Array< ModelTourFilterInput | null > | null,
  not?: ModelTourFilterInput | null,
};

export type ModelTourDatesFilterInput = {
  id?: ModelIDInput | null,
  dateMonth?: ModelStringInput | null,
  dateDate?: ModelStringInput | null,
  dateDay?: ModelStringInput | null,
  dateTime?: ModelStringInput | null,
  city?: ModelStringInput | null,
  venue?: ModelStringInput | null,
  tourId?: ModelIDInput | null,
  and?: Array< ModelTourDatesFilterInput | null > | null,
  or?: Array< ModelTourDatesFilterInput | null > | null,
  not?: ModelTourDatesFilterInput | null,
};

export type ModelPodcastFilterInput = {
  id?: ModelIDInput | null,
  onTour?: ModelBooleanInput | null,
  artistId?: ModelIDInput | null,
  and?: Array< ModelPodcastFilterInput | null > | null,
  or?: Array< ModelPodcastFilterInput | null > | null,
  not?: ModelPodcastFilterInput | null,
};

export type ModelFeatPodcastFilterInput = {
  id?: ModelIDInput | null,
  showName?: ModelStringInput | null,
  episodeName?: ModelStringInput | null,
  image?: ModelStringInput | null,
  podcastId?: ModelIDInput | null,
  and?: Array< ModelFeatPodcastFilterInput | null > | null,
  or?: Array< ModelFeatPodcastFilterInput | null > | null,
  not?: ModelFeatPodcastFilterInput | null,
};

export type ModelSocialFilterInput = {
  id?: ModelIDInput | null,
  source?: ModelStringInput | null,
  message?: ModelStringInput | null,
  image?: ModelStringInput | null,
  artistId?: ModelIDInput | null,
  and?: Array< ModelSocialFilterInput | null > | null,
  or?: Array< ModelSocialFilterInput | null > | null,
  not?: ModelSocialFilterInput | null,
};

export type CreateAlbumCategoryMutationVariables = {
  input: CreateAlbumCategoryInput,
  condition?: ModelAlbumCategoryConditionInput | null,
};

export type CreateAlbumCategoryMutation = {
  createAlbumCategory?:  {
    __typename: "AlbumCategory",
    id: string,
    title: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items?:  Array< {
        __typename: "Album",
        id: string,
        name: string,
        imageUri: string,
        aritistHeadline: string,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAlbumCategoryMutationVariables = {
  input: UpdateAlbumCategoryInput,
  condition?: ModelAlbumCategoryConditionInput | null,
};

export type UpdateAlbumCategoryMutation = {
  updateAlbumCategory?:  {
    __typename: "AlbumCategory",
    id: string,
    title: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items?:  Array< {
        __typename: "Album",
        id: string,
        name: string,
        imageUri: string,
        aritistHeadline: string,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAlbumCategoryMutationVariables = {
  input: DeleteAlbumCategoryInput,
  condition?: ModelAlbumCategoryConditionInput | null,
};

export type DeleteAlbumCategoryMutation = {
  deleteAlbumCategory?:  {
    __typename: "AlbumCategory",
    id: string,
    title: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items?:  Array< {
        __typename: "Album",
        id: string,
        name: string,
        imageUri: string,
        aritistHeadline: string,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAlbumMutationVariables = {
  input: CreateAlbumInput,
  condition?: ModelAlbumConditionInput | null,
};

export type CreateAlbumMutation = {
  createAlbum?:  {
    __typename: "Album",
    id: string,
    name: string,
    by?:  {
      __typename: "ModelArtistConnection",
      items?:  Array< {
        __typename: "Artist",
        id: string,
        name: string,
        avatar: string,
        albumId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    imageUri: string,
    aritistHeadline: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items?:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        Artist: string,
        albumId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    albumCategoryId: string,
    AlbumCategory?:  {
      __typename: "AlbumCategory",
      id: string,
      title: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAlbumMutationVariables = {
  input: UpdateAlbumInput,
  condition?: ModelAlbumConditionInput | null,
};

export type UpdateAlbumMutation = {
  updateAlbum?:  {
    __typename: "Album",
    id: string,
    name: string,
    by?:  {
      __typename: "ModelArtistConnection",
      items?:  Array< {
        __typename: "Artist",
        id: string,
        name: string,
        avatar: string,
        albumId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    imageUri: string,
    aritistHeadline: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items?:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        Artist: string,
        albumId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    albumCategoryId: string,
    AlbumCategory?:  {
      __typename: "AlbumCategory",
      id: string,
      title: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAlbumMutationVariables = {
  input: DeleteAlbumInput,
  condition?: ModelAlbumConditionInput | null,
};

export type DeleteAlbumMutation = {
  deleteAlbum?:  {
    __typename: "Album",
    id: string,
    name: string,
    by?:  {
      __typename: "ModelArtistConnection",
      items?:  Array< {
        __typename: "Artist",
        id: string,
        name: string,
        avatar: string,
        albumId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    imageUri: string,
    aritistHeadline: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items?:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        Artist: string,
        albumId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    albumCategoryId: string,
    AlbumCategory?:  {
      __typename: "AlbumCategory",
      id: string,
      title: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSongMutationVariables = {
  input: CreateSongInput,
  condition?: ModelSongConditionInput | null,
};

export type CreateSongMutation = {
  createSong?:  {
    __typename: "Song",
    id: string,
    imageUri: string,
    title: string,
    Artist: string,
    albumId: string,
    Album?:  {
      __typename: "Album",
      id: string,
      name: string,
      by?:  {
        __typename: "ModelArtistConnection",
        nextToken?: string | null,
      } | null,
      imageUri: string,
      aritistHeadline: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      albumCategoryId: string,
      AlbumCategory?:  {
        __typename: "AlbumCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSongMutationVariables = {
  input: UpdateSongInput,
  condition?: ModelSongConditionInput | null,
};

export type UpdateSongMutation = {
  updateSong?:  {
    __typename: "Song",
    id: string,
    imageUri: string,
    title: string,
    Artist: string,
    albumId: string,
    Album?:  {
      __typename: "Album",
      id: string,
      name: string,
      by?:  {
        __typename: "ModelArtistConnection",
        nextToken?: string | null,
      } | null,
      imageUri: string,
      aritistHeadline: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      albumCategoryId: string,
      AlbumCategory?:  {
        __typename: "AlbumCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSongMutationVariables = {
  input: DeleteSongInput,
  condition?: ModelSongConditionInput | null,
};

export type DeleteSongMutation = {
  deleteSong?:  {
    __typename: "Song",
    id: string,
    imageUri: string,
    title: string,
    Artist: string,
    albumId: string,
    Album?:  {
      __typename: "Album",
      id: string,
      name: string,
      by?:  {
        __typename: "ModelArtistConnection",
        nextToken?: string | null,
      } | null,
      imageUri: string,
      aritistHeadline: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      albumCategoryId: string,
      AlbumCategory?:  {
        __typename: "AlbumCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateArtistMutationVariables = {
  input: CreateArtistInput,
  condition?: ModelArtistConditionInput | null,
};

export type CreateArtistMutation = {
  createArtist?:  {
    __typename: "Artist",
    id: string,
    name: string,
    avatar: string,
    merch?:  {
      __typename: "ModelMerchConnection",
      items?:  Array< {
        __typename: "Merch",
        id: string,
        itemName: string,
        image: string,
        price: number,
        sourceName: string,
        sourceURI: string,
        artistId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    tour?:  {
      __typename: "ModelTourConnection",
      items?:  Array< {
        __typename: "Tour",
        id: string,
        onTour: boolean,
        artistId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    podcast?:  {
      __typename: "ModelPodcastConnection",
      items?:  Array< {
        __typename: "Podcast",
        id: string,
        onTour: boolean,
        artistId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    social?:  {
      __typename: "ModelSocialConnection",
      items?:  Array< {
        __typename: "Social",
        id: string,
        source: string,
        message: string,
        image: string,
        artistId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    albumId: string,
    album?:  {
      __typename: "Album",
      id: string,
      name: string,
      by?:  {
        __typename: "ModelArtistConnection",
        nextToken?: string | null,
      } | null,
      imageUri: string,
      aritistHeadline: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      albumCategoryId: string,
      AlbumCategory?:  {
        __typename: "AlbumCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateArtistMutationVariables = {
  input: UpdateArtistInput,
  condition?: ModelArtistConditionInput | null,
};

export type UpdateArtistMutation = {
  updateArtist?:  {
    __typename: "Artist",
    id: string,
    name: string,
    avatar: string,
    merch?:  {
      __typename: "ModelMerchConnection",
      items?:  Array< {
        __typename: "Merch",
        id: string,
        itemName: string,
        image: string,
        price: number,
        sourceName: string,
        sourceURI: string,
        artistId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    tour?:  {
      __typename: "ModelTourConnection",
      items?:  Array< {
        __typename: "Tour",
        id: string,
        onTour: boolean,
        artistId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    podcast?:  {
      __typename: "ModelPodcastConnection",
      items?:  Array< {
        __typename: "Podcast",
        id: string,
        onTour: boolean,
        artistId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    social?:  {
      __typename: "ModelSocialConnection",
      items?:  Array< {
        __typename: "Social",
        id: string,
        source: string,
        message: string,
        image: string,
        artistId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    albumId: string,
    album?:  {
      __typename: "Album",
      id: string,
      name: string,
      by?:  {
        __typename: "ModelArtistConnection",
        nextToken?: string | null,
      } | null,
      imageUri: string,
      aritistHeadline: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      albumCategoryId: string,
      AlbumCategory?:  {
        __typename: "AlbumCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteArtistMutationVariables = {
  input: DeleteArtistInput,
  condition?: ModelArtistConditionInput | null,
};

export type DeleteArtistMutation = {
  deleteArtist?:  {
    __typename: "Artist",
    id: string,
    name: string,
    avatar: string,
    merch?:  {
      __typename: "ModelMerchConnection",
      items?:  Array< {
        __typename: "Merch",
        id: string,
        itemName: string,
        image: string,
        price: number,
        sourceName: string,
        sourceURI: string,
        artistId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    tour?:  {
      __typename: "ModelTourConnection",
      items?:  Array< {
        __typename: "Tour",
        id: string,
        onTour: boolean,
        artistId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    podcast?:  {
      __typename: "ModelPodcastConnection",
      items?:  Array< {
        __typename: "Podcast",
        id: string,
        onTour: boolean,
        artistId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    social?:  {
      __typename: "ModelSocialConnection",
      items?:  Array< {
        __typename: "Social",
        id: string,
        source: string,
        message: string,
        image: string,
        artistId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    albumId: string,
    album?:  {
      __typename: "Album",
      id: string,
      name: string,
      by?:  {
        __typename: "ModelArtistConnection",
        nextToken?: string | null,
      } | null,
      imageUri: string,
      aritistHeadline: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      albumCategoryId: string,
      AlbumCategory?:  {
        __typename: "AlbumCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMerchMutationVariables = {
  input: CreateMerchInput,
  condition?: ModelMerchConditionInput | null,
};

export type CreateMerchMutation = {
  createMerch?:  {
    __typename: "Merch",
    id: string,
    itemName: string,
    image: string,
    price: number,
    sourceName: string,
    sourceURI: string,
    artistId: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      avatar: string,
      merch?:  {
        __typename: "ModelMerchConnection",
        nextToken?: string | null,
      } | null,
      tour?:  {
        __typename: "ModelTourConnection",
        nextToken?: string | null,
      } | null,
      podcast?:  {
        __typename: "ModelPodcastConnection",
        nextToken?: string | null,
      } | null,
      social?:  {
        __typename: "ModelSocialConnection",
        nextToken?: string | null,
      } | null,
      albumId: string,
      album?:  {
        __typename: "Album",
        id: string,
        name: string,
        imageUri: string,
        aritistHeadline: string,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMerchMutationVariables = {
  input: UpdateMerchInput,
  condition?: ModelMerchConditionInput | null,
};

export type UpdateMerchMutation = {
  updateMerch?:  {
    __typename: "Merch",
    id: string,
    itemName: string,
    image: string,
    price: number,
    sourceName: string,
    sourceURI: string,
    artistId: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      avatar: string,
      merch?:  {
        __typename: "ModelMerchConnection",
        nextToken?: string | null,
      } | null,
      tour?:  {
        __typename: "ModelTourConnection",
        nextToken?: string | null,
      } | null,
      podcast?:  {
        __typename: "ModelPodcastConnection",
        nextToken?: string | null,
      } | null,
      social?:  {
        __typename: "ModelSocialConnection",
        nextToken?: string | null,
      } | null,
      albumId: string,
      album?:  {
        __typename: "Album",
        id: string,
        name: string,
        imageUri: string,
        aritistHeadline: string,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMerchMutationVariables = {
  input: DeleteMerchInput,
  condition?: ModelMerchConditionInput | null,
};

export type DeleteMerchMutation = {
  deleteMerch?:  {
    __typename: "Merch",
    id: string,
    itemName: string,
    image: string,
    price: number,
    sourceName: string,
    sourceURI: string,
    artistId: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      avatar: string,
      merch?:  {
        __typename: "ModelMerchConnection",
        nextToken?: string | null,
      } | null,
      tour?:  {
        __typename: "ModelTourConnection",
        nextToken?: string | null,
      } | null,
      podcast?:  {
        __typename: "ModelPodcastConnection",
        nextToken?: string | null,
      } | null,
      social?:  {
        __typename: "ModelSocialConnection",
        nextToken?: string | null,
      } | null,
      albumId: string,
      album?:  {
        __typename: "Album",
        id: string,
        name: string,
        imageUri: string,
        aritistHeadline: string,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTourMutationVariables = {
  input: CreateTourInput,
  condition?: ModelTourConditionInput | null,
};

export type CreateTourMutation = {
  createTour?:  {
    __typename: "Tour",
    id: string,
    onTour: boolean,
    tourDates?:  {
      __typename: "ModelTourDatesConnection",
      items?:  Array< {
        __typename: "TourDates",
        id: string,
        dateMonth: string,
        dateDate: string,
        dateDay: string,
        dateTime: string,
        city: string,
        venue: string,
        tourId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    artistId: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      avatar: string,
      merch?:  {
        __typename: "ModelMerchConnection",
        nextToken?: string | null,
      } | null,
      tour?:  {
        __typename: "ModelTourConnection",
        nextToken?: string | null,
      } | null,
      podcast?:  {
        __typename: "ModelPodcastConnection",
        nextToken?: string | null,
      } | null,
      social?:  {
        __typename: "ModelSocialConnection",
        nextToken?: string | null,
      } | null,
      albumId: string,
      album?:  {
        __typename: "Album",
        id: string,
        name: string,
        imageUri: string,
        aritistHeadline: string,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTourMutationVariables = {
  input: UpdateTourInput,
  condition?: ModelTourConditionInput | null,
};

export type UpdateTourMutation = {
  updateTour?:  {
    __typename: "Tour",
    id: string,
    onTour: boolean,
    tourDates?:  {
      __typename: "ModelTourDatesConnection",
      items?:  Array< {
        __typename: "TourDates",
        id: string,
        dateMonth: string,
        dateDate: string,
        dateDay: string,
        dateTime: string,
        city: string,
        venue: string,
        tourId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    artistId: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      avatar: string,
      merch?:  {
        __typename: "ModelMerchConnection",
        nextToken?: string | null,
      } | null,
      tour?:  {
        __typename: "ModelTourConnection",
        nextToken?: string | null,
      } | null,
      podcast?:  {
        __typename: "ModelPodcastConnection",
        nextToken?: string | null,
      } | null,
      social?:  {
        __typename: "ModelSocialConnection",
        nextToken?: string | null,
      } | null,
      albumId: string,
      album?:  {
        __typename: "Album",
        id: string,
        name: string,
        imageUri: string,
        aritistHeadline: string,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTourMutationVariables = {
  input: DeleteTourInput,
  condition?: ModelTourConditionInput | null,
};

export type DeleteTourMutation = {
  deleteTour?:  {
    __typename: "Tour",
    id: string,
    onTour: boolean,
    tourDates?:  {
      __typename: "ModelTourDatesConnection",
      items?:  Array< {
        __typename: "TourDates",
        id: string,
        dateMonth: string,
        dateDate: string,
        dateDay: string,
        dateTime: string,
        city: string,
        venue: string,
        tourId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    artistId: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      avatar: string,
      merch?:  {
        __typename: "ModelMerchConnection",
        nextToken?: string | null,
      } | null,
      tour?:  {
        __typename: "ModelTourConnection",
        nextToken?: string | null,
      } | null,
      podcast?:  {
        __typename: "ModelPodcastConnection",
        nextToken?: string | null,
      } | null,
      social?:  {
        __typename: "ModelSocialConnection",
        nextToken?: string | null,
      } | null,
      albumId: string,
      album?:  {
        __typename: "Album",
        id: string,
        name: string,
        imageUri: string,
        aritistHeadline: string,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTourDatesMutationVariables = {
  input: CreateTourDatesInput,
  condition?: ModelTourDatesConditionInput | null,
};

export type CreateTourDatesMutation = {
  createTourDates?:  {
    __typename: "TourDates",
    id: string,
    dateMonth: string,
    dateDate: string,
    dateDay: string,
    dateTime: string,
    city: string,
    venue: string,
    tourId: string,
    tour?:  {
      __typename: "Tour",
      id: string,
      onTour: boolean,
      tourDates?:  {
        __typename: "ModelTourDatesConnection",
        nextToken?: string | null,
      } | null,
      artistId: string,
      artist?:  {
        __typename: "Artist",
        id: string,
        name: string,
        avatar: string,
        albumId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTourDatesMutationVariables = {
  input: UpdateTourDatesInput,
  condition?: ModelTourDatesConditionInput | null,
};

export type UpdateTourDatesMutation = {
  updateTourDates?:  {
    __typename: "TourDates",
    id: string,
    dateMonth: string,
    dateDate: string,
    dateDay: string,
    dateTime: string,
    city: string,
    venue: string,
    tourId: string,
    tour?:  {
      __typename: "Tour",
      id: string,
      onTour: boolean,
      tourDates?:  {
        __typename: "ModelTourDatesConnection",
        nextToken?: string | null,
      } | null,
      artistId: string,
      artist?:  {
        __typename: "Artist",
        id: string,
        name: string,
        avatar: string,
        albumId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTourDatesMutationVariables = {
  input: DeleteTourDatesInput,
  condition?: ModelTourDatesConditionInput | null,
};

export type DeleteTourDatesMutation = {
  deleteTourDates?:  {
    __typename: "TourDates",
    id: string,
    dateMonth: string,
    dateDate: string,
    dateDay: string,
    dateTime: string,
    city: string,
    venue: string,
    tourId: string,
    tour?:  {
      __typename: "Tour",
      id: string,
      onTour: boolean,
      tourDates?:  {
        __typename: "ModelTourDatesConnection",
        nextToken?: string | null,
      } | null,
      artistId: string,
      artist?:  {
        __typename: "Artist",
        id: string,
        name: string,
        avatar: string,
        albumId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePodcastMutationVariables = {
  input: CreatePodcastInput,
  condition?: ModelPodcastConditionInput | null,
};

export type CreatePodcastMutation = {
  createPodcast?:  {
    __typename: "Podcast",
    id: string,
    onTour: boolean,
    featPodcast?:  {
      __typename: "ModelFeatPodcastConnection",
      items?:  Array< {
        __typename: "FeatPodcast",
        id: string,
        showName: string,
        episodeName: string,
        image: string,
        podcastId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    artistId: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      avatar: string,
      merch?:  {
        __typename: "ModelMerchConnection",
        nextToken?: string | null,
      } | null,
      tour?:  {
        __typename: "ModelTourConnection",
        nextToken?: string | null,
      } | null,
      podcast?:  {
        __typename: "ModelPodcastConnection",
        nextToken?: string | null,
      } | null,
      social?:  {
        __typename: "ModelSocialConnection",
        nextToken?: string | null,
      } | null,
      albumId: string,
      album?:  {
        __typename: "Album",
        id: string,
        name: string,
        imageUri: string,
        aritistHeadline: string,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePodcastMutationVariables = {
  input: UpdatePodcastInput,
  condition?: ModelPodcastConditionInput | null,
};

export type UpdatePodcastMutation = {
  updatePodcast?:  {
    __typename: "Podcast",
    id: string,
    onTour: boolean,
    featPodcast?:  {
      __typename: "ModelFeatPodcastConnection",
      items?:  Array< {
        __typename: "FeatPodcast",
        id: string,
        showName: string,
        episodeName: string,
        image: string,
        podcastId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    artistId: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      avatar: string,
      merch?:  {
        __typename: "ModelMerchConnection",
        nextToken?: string | null,
      } | null,
      tour?:  {
        __typename: "ModelTourConnection",
        nextToken?: string | null,
      } | null,
      podcast?:  {
        __typename: "ModelPodcastConnection",
        nextToken?: string | null,
      } | null,
      social?:  {
        __typename: "ModelSocialConnection",
        nextToken?: string | null,
      } | null,
      albumId: string,
      album?:  {
        __typename: "Album",
        id: string,
        name: string,
        imageUri: string,
        aritistHeadline: string,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePodcastMutationVariables = {
  input: DeletePodcastInput,
  condition?: ModelPodcastConditionInput | null,
};

export type DeletePodcastMutation = {
  deletePodcast?:  {
    __typename: "Podcast",
    id: string,
    onTour: boolean,
    featPodcast?:  {
      __typename: "ModelFeatPodcastConnection",
      items?:  Array< {
        __typename: "FeatPodcast",
        id: string,
        showName: string,
        episodeName: string,
        image: string,
        podcastId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    artistId: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      avatar: string,
      merch?:  {
        __typename: "ModelMerchConnection",
        nextToken?: string | null,
      } | null,
      tour?:  {
        __typename: "ModelTourConnection",
        nextToken?: string | null,
      } | null,
      podcast?:  {
        __typename: "ModelPodcastConnection",
        nextToken?: string | null,
      } | null,
      social?:  {
        __typename: "ModelSocialConnection",
        nextToken?: string | null,
      } | null,
      albumId: string,
      album?:  {
        __typename: "Album",
        id: string,
        name: string,
        imageUri: string,
        aritistHeadline: string,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFeatPodcastMutationVariables = {
  input: CreateFeatPodcastInput,
  condition?: ModelFeatPodcastConditionInput | null,
};

export type CreateFeatPodcastMutation = {
  createFeatPodcast?:  {
    __typename: "FeatPodcast",
    id: string,
    showName: string,
    episodeName: string,
    image: string,
    podcastId: string,
    podcast?:  {
      __typename: "Podcast",
      id: string,
      onTour: boolean,
      featPodcast?:  {
        __typename: "ModelFeatPodcastConnection",
        nextToken?: string | null,
      } | null,
      artistId: string,
      artist?:  {
        __typename: "Artist",
        id: string,
        name: string,
        avatar: string,
        albumId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFeatPodcastMutationVariables = {
  input: UpdateFeatPodcastInput,
  condition?: ModelFeatPodcastConditionInput | null,
};

export type UpdateFeatPodcastMutation = {
  updateFeatPodcast?:  {
    __typename: "FeatPodcast",
    id: string,
    showName: string,
    episodeName: string,
    image: string,
    podcastId: string,
    podcast?:  {
      __typename: "Podcast",
      id: string,
      onTour: boolean,
      featPodcast?:  {
        __typename: "ModelFeatPodcastConnection",
        nextToken?: string | null,
      } | null,
      artistId: string,
      artist?:  {
        __typename: "Artist",
        id: string,
        name: string,
        avatar: string,
        albumId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFeatPodcastMutationVariables = {
  input: DeleteFeatPodcastInput,
  condition?: ModelFeatPodcastConditionInput | null,
};

export type DeleteFeatPodcastMutation = {
  deleteFeatPodcast?:  {
    __typename: "FeatPodcast",
    id: string,
    showName: string,
    episodeName: string,
    image: string,
    podcastId: string,
    podcast?:  {
      __typename: "Podcast",
      id: string,
      onTour: boolean,
      featPodcast?:  {
        __typename: "ModelFeatPodcastConnection",
        nextToken?: string | null,
      } | null,
      artistId: string,
      artist?:  {
        __typename: "Artist",
        id: string,
        name: string,
        avatar: string,
        albumId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSocialMutationVariables = {
  input: CreateSocialInput,
  condition?: ModelSocialConditionInput | null,
};

export type CreateSocialMutation = {
  createSocial?:  {
    __typename: "Social",
    id: string,
    source: string,
    message: string,
    image: string,
    artistId: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      avatar: string,
      merch?:  {
        __typename: "ModelMerchConnection",
        nextToken?: string | null,
      } | null,
      tour?:  {
        __typename: "ModelTourConnection",
        nextToken?: string | null,
      } | null,
      podcast?:  {
        __typename: "ModelPodcastConnection",
        nextToken?: string | null,
      } | null,
      social?:  {
        __typename: "ModelSocialConnection",
        nextToken?: string | null,
      } | null,
      albumId: string,
      album?:  {
        __typename: "Album",
        id: string,
        name: string,
        imageUri: string,
        aritistHeadline: string,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSocialMutationVariables = {
  input: UpdateSocialInput,
  condition?: ModelSocialConditionInput | null,
};

export type UpdateSocialMutation = {
  updateSocial?:  {
    __typename: "Social",
    id: string,
    source: string,
    message: string,
    image: string,
    artistId: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      avatar: string,
      merch?:  {
        __typename: "ModelMerchConnection",
        nextToken?: string | null,
      } | null,
      tour?:  {
        __typename: "ModelTourConnection",
        nextToken?: string | null,
      } | null,
      podcast?:  {
        __typename: "ModelPodcastConnection",
        nextToken?: string | null,
      } | null,
      social?:  {
        __typename: "ModelSocialConnection",
        nextToken?: string | null,
      } | null,
      albumId: string,
      album?:  {
        __typename: "Album",
        id: string,
        name: string,
        imageUri: string,
        aritistHeadline: string,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSocialMutationVariables = {
  input: DeleteSocialInput,
  condition?: ModelSocialConditionInput | null,
};

export type DeleteSocialMutation = {
  deleteSocial?:  {
    __typename: "Social",
    id: string,
    source: string,
    message: string,
    image: string,
    artistId: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      avatar: string,
      merch?:  {
        __typename: "ModelMerchConnection",
        nextToken?: string | null,
      } | null,
      tour?:  {
        __typename: "ModelTourConnection",
        nextToken?: string | null,
      } | null,
      podcast?:  {
        __typename: "ModelPodcastConnection",
        nextToken?: string | null,
      } | null,
      social?:  {
        __typename: "ModelSocialConnection",
        nextToken?: string | null,
      } | null,
      albumId: string,
      album?:  {
        __typename: "Album",
        id: string,
        name: string,
        imageUri: string,
        aritistHeadline: string,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetAlbumCategoryQueryVariables = {
  id: string,
};

export type GetAlbumCategoryQuery = {
  getAlbumCategory?:  {
    __typename: "AlbumCategory",
    id: string,
    title: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items?:  Array< {
        __typename: "Album",
        id: string,
        name: string,
        imageUri: string,
        aritistHeadline: string,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAlbumCategoriesQueryVariables = {
  filter?: ModelAlbumCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAlbumCategoriesQuery = {
  listAlbumCategories?:  {
    __typename: "ModelAlbumCategoryConnection",
    items?:  Array< {
      __typename: "AlbumCategory",
      id: string,
      title: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetAlbumQueryVariables = {
  id: string,
};

export type GetAlbumQuery = {
  getAlbum?:  {
    __typename: "Album",
    id: string,
    name: string,
    by?:  {
      __typename: "ModelArtistConnection",
      items?:  Array< {
        __typename: "Artist",
        id: string,
        name: string,
        avatar: string,
        albumId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    imageUri: string,
    aritistHeadline: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items?:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        Artist: string,
        albumId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    albumCategoryId: string,
    AlbumCategory?:  {
      __typename: "AlbumCategory",
      id: string,
      title: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAlbumsQueryVariables = {
  filter?: ModelAlbumFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAlbumsQuery = {
  listAlbums?:  {
    __typename: "ModelAlbumConnection",
    items?:  Array< {
      __typename: "Album",
      id: string,
      name: string,
      by?:  {
        __typename: "ModelArtistConnection",
        nextToken?: string | null,
      } | null,
      imageUri: string,
      aritistHeadline: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      albumCategoryId: string,
      AlbumCategory?:  {
        __typename: "AlbumCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetSongQueryVariables = {
  id: string,
};

export type GetSongQuery = {
  getSong?:  {
    __typename: "Song",
    id: string,
    imageUri: string,
    title: string,
    Artist: string,
    albumId: string,
    Album?:  {
      __typename: "Album",
      id: string,
      name: string,
      by?:  {
        __typename: "ModelArtistConnection",
        nextToken?: string | null,
      } | null,
      imageUri: string,
      aritistHeadline: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      albumCategoryId: string,
      AlbumCategory?:  {
        __typename: "AlbumCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSongsQueryVariables = {
  filter?: ModelSongFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSongsQuery = {
  listSongs?:  {
    __typename: "ModelSongConnection",
    items?:  Array< {
      __typename: "Song",
      id: string,
      imageUri: string,
      title: string,
      Artist: string,
      albumId: string,
      Album?:  {
        __typename: "Album",
        id: string,
        name: string,
        imageUri: string,
        aritistHeadline: string,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetArtistQueryVariables = {
  id: string,
};

export type GetArtistQuery = {
  getArtist?:  {
    __typename: "Artist",
    id: string,
    name: string,
    avatar: string,
    merch?:  {
      __typename: "ModelMerchConnection",
      items?:  Array< {
        __typename: "Merch",
        id: string,
        itemName: string,
        image: string,
        price: number,
        sourceName: string,
        sourceURI: string,
        artistId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    tour?:  {
      __typename: "ModelTourConnection",
      items?:  Array< {
        __typename: "Tour",
        id: string,
        onTour: boolean,
        artistId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    podcast?:  {
      __typename: "ModelPodcastConnection",
      items?:  Array< {
        __typename: "Podcast",
        id: string,
        onTour: boolean,
        artistId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    social?:  {
      __typename: "ModelSocialConnection",
      items?:  Array< {
        __typename: "Social",
        id: string,
        source: string,
        message: string,
        image: string,
        artistId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    albumId: string,
    album?:  {
      __typename: "Album",
      id: string,
      name: string,
      by?:  {
        __typename: "ModelArtistConnection",
        nextToken?: string | null,
      } | null,
      imageUri: string,
      aritistHeadline: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      albumCategoryId: string,
      AlbumCategory?:  {
        __typename: "AlbumCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListArtistsQueryVariables = {
  filter?: ModelArtistFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListArtistsQuery = {
  listArtists?:  {
    __typename: "ModelArtistConnection",
    items?:  Array< {
      __typename: "Artist",
      id: string,
      name: string,
      avatar: string,
      merch?:  {
        __typename: "ModelMerchConnection",
        nextToken?: string | null,
      } | null,
      tour?:  {
        __typename: "ModelTourConnection",
        nextToken?: string | null,
      } | null,
      podcast?:  {
        __typename: "ModelPodcastConnection",
        nextToken?: string | null,
      } | null,
      social?:  {
        __typename: "ModelSocialConnection",
        nextToken?: string | null,
      } | null,
      albumId: string,
      album?:  {
        __typename: "Album",
        id: string,
        name: string,
        imageUri: string,
        aritistHeadline: string,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetMerchQueryVariables = {
  id: string,
};

export type GetMerchQuery = {
  getMerch?:  {
    __typename: "Merch",
    id: string,
    itemName: string,
    image: string,
    price: number,
    sourceName: string,
    sourceURI: string,
    artistId: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      avatar: string,
      merch?:  {
        __typename: "ModelMerchConnection",
        nextToken?: string | null,
      } | null,
      tour?:  {
        __typename: "ModelTourConnection",
        nextToken?: string | null,
      } | null,
      podcast?:  {
        __typename: "ModelPodcastConnection",
        nextToken?: string | null,
      } | null,
      social?:  {
        __typename: "ModelSocialConnection",
        nextToken?: string | null,
      } | null,
      albumId: string,
      album?:  {
        __typename: "Album",
        id: string,
        name: string,
        imageUri: string,
        aritistHeadline: string,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMerchesQueryVariables = {
  filter?: ModelMerchFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMerchesQuery = {
  listMerches?:  {
    __typename: "ModelMerchConnection",
    items?:  Array< {
      __typename: "Merch",
      id: string,
      itemName: string,
      image: string,
      price: number,
      sourceName: string,
      sourceURI: string,
      artistId: string,
      artist?:  {
        __typename: "Artist",
        id: string,
        name: string,
        avatar: string,
        albumId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetTourQueryVariables = {
  id: string,
};

export type GetTourQuery = {
  getTour?:  {
    __typename: "Tour",
    id: string,
    onTour: boolean,
    tourDates?:  {
      __typename: "ModelTourDatesConnection",
      items?:  Array< {
        __typename: "TourDates",
        id: string,
        dateMonth: string,
        dateDate: string,
        dateDay: string,
        dateTime: string,
        city: string,
        venue: string,
        tourId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    artistId: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      avatar: string,
      merch?:  {
        __typename: "ModelMerchConnection",
        nextToken?: string | null,
      } | null,
      tour?:  {
        __typename: "ModelTourConnection",
        nextToken?: string | null,
      } | null,
      podcast?:  {
        __typename: "ModelPodcastConnection",
        nextToken?: string | null,
      } | null,
      social?:  {
        __typename: "ModelSocialConnection",
        nextToken?: string | null,
      } | null,
      albumId: string,
      album?:  {
        __typename: "Album",
        id: string,
        name: string,
        imageUri: string,
        aritistHeadline: string,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListToursQueryVariables = {
  filter?: ModelTourFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListToursQuery = {
  listTours?:  {
    __typename: "ModelTourConnection",
    items?:  Array< {
      __typename: "Tour",
      id: string,
      onTour: boolean,
      tourDates?:  {
        __typename: "ModelTourDatesConnection",
        nextToken?: string | null,
      } | null,
      artistId: string,
      artist?:  {
        __typename: "Artist",
        id: string,
        name: string,
        avatar: string,
        albumId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetTourDatesQueryVariables = {
  id: string,
};

export type GetTourDatesQuery = {
  getTourDates?:  {
    __typename: "TourDates",
    id: string,
    dateMonth: string,
    dateDate: string,
    dateDay: string,
    dateTime: string,
    city: string,
    venue: string,
    tourId: string,
    tour?:  {
      __typename: "Tour",
      id: string,
      onTour: boolean,
      tourDates?:  {
        __typename: "ModelTourDatesConnection",
        nextToken?: string | null,
      } | null,
      artistId: string,
      artist?:  {
        __typename: "Artist",
        id: string,
        name: string,
        avatar: string,
        albumId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTourDatesQueryVariables = {
  filter?: ModelTourDatesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTourDatesQuery = {
  listTourDates?:  {
    __typename: "ModelTourDatesConnection",
    items?:  Array< {
      __typename: "TourDates",
      id: string,
      dateMonth: string,
      dateDate: string,
      dateDay: string,
      dateTime: string,
      city: string,
      venue: string,
      tourId: string,
      tour?:  {
        __typename: "Tour",
        id: string,
        onTour: boolean,
        artistId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPodcastQueryVariables = {
  id: string,
};

export type GetPodcastQuery = {
  getPodcast?:  {
    __typename: "Podcast",
    id: string,
    onTour: boolean,
    featPodcast?:  {
      __typename: "ModelFeatPodcastConnection",
      items?:  Array< {
        __typename: "FeatPodcast",
        id: string,
        showName: string,
        episodeName: string,
        image: string,
        podcastId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    artistId: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      avatar: string,
      merch?:  {
        __typename: "ModelMerchConnection",
        nextToken?: string | null,
      } | null,
      tour?:  {
        __typename: "ModelTourConnection",
        nextToken?: string | null,
      } | null,
      podcast?:  {
        __typename: "ModelPodcastConnection",
        nextToken?: string | null,
      } | null,
      social?:  {
        __typename: "ModelSocialConnection",
        nextToken?: string | null,
      } | null,
      albumId: string,
      album?:  {
        __typename: "Album",
        id: string,
        name: string,
        imageUri: string,
        aritistHeadline: string,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPodcastsQueryVariables = {
  filter?: ModelPodcastFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPodcastsQuery = {
  listPodcasts?:  {
    __typename: "ModelPodcastConnection",
    items?:  Array< {
      __typename: "Podcast",
      id: string,
      onTour: boolean,
      featPodcast?:  {
        __typename: "ModelFeatPodcastConnection",
        nextToken?: string | null,
      } | null,
      artistId: string,
      artist?:  {
        __typename: "Artist",
        id: string,
        name: string,
        avatar: string,
        albumId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetFeatPodcastQueryVariables = {
  id: string,
};

export type GetFeatPodcastQuery = {
  getFeatPodcast?:  {
    __typename: "FeatPodcast",
    id: string,
    showName: string,
    episodeName: string,
    image: string,
    podcastId: string,
    podcast?:  {
      __typename: "Podcast",
      id: string,
      onTour: boolean,
      featPodcast?:  {
        __typename: "ModelFeatPodcastConnection",
        nextToken?: string | null,
      } | null,
      artistId: string,
      artist?:  {
        __typename: "Artist",
        id: string,
        name: string,
        avatar: string,
        albumId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFeatPodcastsQueryVariables = {
  filter?: ModelFeatPodcastFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFeatPodcastsQuery = {
  listFeatPodcasts?:  {
    __typename: "ModelFeatPodcastConnection",
    items?:  Array< {
      __typename: "FeatPodcast",
      id: string,
      showName: string,
      episodeName: string,
      image: string,
      podcastId: string,
      podcast?:  {
        __typename: "Podcast",
        id: string,
        onTour: boolean,
        artistId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetSocialQueryVariables = {
  id: string,
};

export type GetSocialQuery = {
  getSocial?:  {
    __typename: "Social",
    id: string,
    source: string,
    message: string,
    image: string,
    artistId: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      avatar: string,
      merch?:  {
        __typename: "ModelMerchConnection",
        nextToken?: string | null,
      } | null,
      tour?:  {
        __typename: "ModelTourConnection",
        nextToken?: string | null,
      } | null,
      podcast?:  {
        __typename: "ModelPodcastConnection",
        nextToken?: string | null,
      } | null,
      social?:  {
        __typename: "ModelSocialConnection",
        nextToken?: string | null,
      } | null,
      albumId: string,
      album?:  {
        __typename: "Album",
        id: string,
        name: string,
        imageUri: string,
        aritistHeadline: string,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSocialsQueryVariables = {
  filter?: ModelSocialFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSocialsQuery = {
  listSocials?:  {
    __typename: "ModelSocialConnection",
    items?:  Array< {
      __typename: "Social",
      id: string,
      source: string,
      message: string,
      image: string,
      artistId: string,
      artist?:  {
        __typename: "Artist",
        id: string,
        name: string,
        avatar: string,
        albumId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateAlbumCategorySubscription = {
  onCreateAlbumCategory?:  {
    __typename: "AlbumCategory",
    id: string,
    title: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items?:  Array< {
        __typename: "Album",
        id: string,
        name: string,
        imageUri: string,
        aritistHeadline: string,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAlbumCategorySubscription = {
  onUpdateAlbumCategory?:  {
    __typename: "AlbumCategory",
    id: string,
    title: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items?:  Array< {
        __typename: "Album",
        id: string,
        name: string,
        imageUri: string,
        aritistHeadline: string,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAlbumCategorySubscription = {
  onDeleteAlbumCategory?:  {
    __typename: "AlbumCategory",
    id: string,
    title: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items?:  Array< {
        __typename: "Album",
        id: string,
        name: string,
        imageUri: string,
        aritistHeadline: string,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAlbumSubscription = {
  onCreateAlbum?:  {
    __typename: "Album",
    id: string,
    name: string,
    by?:  {
      __typename: "ModelArtistConnection",
      items?:  Array< {
        __typename: "Artist",
        id: string,
        name: string,
        avatar: string,
        albumId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    imageUri: string,
    aritistHeadline: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items?:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        Artist: string,
        albumId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    albumCategoryId: string,
    AlbumCategory?:  {
      __typename: "AlbumCategory",
      id: string,
      title: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAlbumSubscription = {
  onUpdateAlbum?:  {
    __typename: "Album",
    id: string,
    name: string,
    by?:  {
      __typename: "ModelArtistConnection",
      items?:  Array< {
        __typename: "Artist",
        id: string,
        name: string,
        avatar: string,
        albumId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    imageUri: string,
    aritistHeadline: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items?:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        Artist: string,
        albumId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    albumCategoryId: string,
    AlbumCategory?:  {
      __typename: "AlbumCategory",
      id: string,
      title: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAlbumSubscription = {
  onDeleteAlbum?:  {
    __typename: "Album",
    id: string,
    name: string,
    by?:  {
      __typename: "ModelArtistConnection",
      items?:  Array< {
        __typename: "Artist",
        id: string,
        name: string,
        avatar: string,
        albumId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    imageUri: string,
    aritistHeadline: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items?:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        Artist: string,
        albumId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    albumCategoryId: string,
    AlbumCategory?:  {
      __typename: "AlbumCategory",
      id: string,
      title: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSongSubscription = {
  onCreateSong?:  {
    __typename: "Song",
    id: string,
    imageUri: string,
    title: string,
    Artist: string,
    albumId: string,
    Album?:  {
      __typename: "Album",
      id: string,
      name: string,
      by?:  {
        __typename: "ModelArtistConnection",
        nextToken?: string | null,
      } | null,
      imageUri: string,
      aritistHeadline: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      albumCategoryId: string,
      AlbumCategory?:  {
        __typename: "AlbumCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSongSubscription = {
  onUpdateSong?:  {
    __typename: "Song",
    id: string,
    imageUri: string,
    title: string,
    Artist: string,
    albumId: string,
    Album?:  {
      __typename: "Album",
      id: string,
      name: string,
      by?:  {
        __typename: "ModelArtistConnection",
        nextToken?: string | null,
      } | null,
      imageUri: string,
      aritistHeadline: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      albumCategoryId: string,
      AlbumCategory?:  {
        __typename: "AlbumCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSongSubscription = {
  onDeleteSong?:  {
    __typename: "Song",
    id: string,
    imageUri: string,
    title: string,
    Artist: string,
    albumId: string,
    Album?:  {
      __typename: "Album",
      id: string,
      name: string,
      by?:  {
        __typename: "ModelArtistConnection",
        nextToken?: string | null,
      } | null,
      imageUri: string,
      aritistHeadline: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      albumCategoryId: string,
      AlbumCategory?:  {
        __typename: "AlbumCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateArtistSubscription = {
  onCreateArtist?:  {
    __typename: "Artist",
    id: string,
    name: string,
    avatar: string,
    merch?:  {
      __typename: "ModelMerchConnection",
      items?:  Array< {
        __typename: "Merch",
        id: string,
        itemName: string,
        image: string,
        price: number,
        sourceName: string,
        sourceURI: string,
        artistId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    tour?:  {
      __typename: "ModelTourConnection",
      items?:  Array< {
        __typename: "Tour",
        id: string,
        onTour: boolean,
        artistId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    podcast?:  {
      __typename: "ModelPodcastConnection",
      items?:  Array< {
        __typename: "Podcast",
        id: string,
        onTour: boolean,
        artistId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    social?:  {
      __typename: "ModelSocialConnection",
      items?:  Array< {
        __typename: "Social",
        id: string,
        source: string,
        message: string,
        image: string,
        artistId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    albumId: string,
    album?:  {
      __typename: "Album",
      id: string,
      name: string,
      by?:  {
        __typename: "ModelArtistConnection",
        nextToken?: string | null,
      } | null,
      imageUri: string,
      aritistHeadline: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      albumCategoryId: string,
      AlbumCategory?:  {
        __typename: "AlbumCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateArtistSubscription = {
  onUpdateArtist?:  {
    __typename: "Artist",
    id: string,
    name: string,
    avatar: string,
    merch?:  {
      __typename: "ModelMerchConnection",
      items?:  Array< {
        __typename: "Merch",
        id: string,
        itemName: string,
        image: string,
        price: number,
        sourceName: string,
        sourceURI: string,
        artistId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    tour?:  {
      __typename: "ModelTourConnection",
      items?:  Array< {
        __typename: "Tour",
        id: string,
        onTour: boolean,
        artistId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    podcast?:  {
      __typename: "ModelPodcastConnection",
      items?:  Array< {
        __typename: "Podcast",
        id: string,
        onTour: boolean,
        artistId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    social?:  {
      __typename: "ModelSocialConnection",
      items?:  Array< {
        __typename: "Social",
        id: string,
        source: string,
        message: string,
        image: string,
        artistId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    albumId: string,
    album?:  {
      __typename: "Album",
      id: string,
      name: string,
      by?:  {
        __typename: "ModelArtistConnection",
        nextToken?: string | null,
      } | null,
      imageUri: string,
      aritistHeadline: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      albumCategoryId: string,
      AlbumCategory?:  {
        __typename: "AlbumCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteArtistSubscription = {
  onDeleteArtist?:  {
    __typename: "Artist",
    id: string,
    name: string,
    avatar: string,
    merch?:  {
      __typename: "ModelMerchConnection",
      items?:  Array< {
        __typename: "Merch",
        id: string,
        itemName: string,
        image: string,
        price: number,
        sourceName: string,
        sourceURI: string,
        artistId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    tour?:  {
      __typename: "ModelTourConnection",
      items?:  Array< {
        __typename: "Tour",
        id: string,
        onTour: boolean,
        artistId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    podcast?:  {
      __typename: "ModelPodcastConnection",
      items?:  Array< {
        __typename: "Podcast",
        id: string,
        onTour: boolean,
        artistId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    social?:  {
      __typename: "ModelSocialConnection",
      items?:  Array< {
        __typename: "Social",
        id: string,
        source: string,
        message: string,
        image: string,
        artistId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    albumId: string,
    album?:  {
      __typename: "Album",
      id: string,
      name: string,
      by?:  {
        __typename: "ModelArtistConnection",
        nextToken?: string | null,
      } | null,
      imageUri: string,
      aritistHeadline: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      albumCategoryId: string,
      AlbumCategory?:  {
        __typename: "AlbumCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMerchSubscription = {
  onCreateMerch?:  {
    __typename: "Merch",
    id: string,
    itemName: string,
    image: string,
    price: number,
    sourceName: string,
    sourceURI: string,
    artistId: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      avatar: string,
      merch?:  {
        __typename: "ModelMerchConnection",
        nextToken?: string | null,
      } | null,
      tour?:  {
        __typename: "ModelTourConnection",
        nextToken?: string | null,
      } | null,
      podcast?:  {
        __typename: "ModelPodcastConnection",
        nextToken?: string | null,
      } | null,
      social?:  {
        __typename: "ModelSocialConnection",
        nextToken?: string | null,
      } | null,
      albumId: string,
      album?:  {
        __typename: "Album",
        id: string,
        name: string,
        imageUri: string,
        aritistHeadline: string,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMerchSubscription = {
  onUpdateMerch?:  {
    __typename: "Merch",
    id: string,
    itemName: string,
    image: string,
    price: number,
    sourceName: string,
    sourceURI: string,
    artistId: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      avatar: string,
      merch?:  {
        __typename: "ModelMerchConnection",
        nextToken?: string | null,
      } | null,
      tour?:  {
        __typename: "ModelTourConnection",
        nextToken?: string | null,
      } | null,
      podcast?:  {
        __typename: "ModelPodcastConnection",
        nextToken?: string | null,
      } | null,
      social?:  {
        __typename: "ModelSocialConnection",
        nextToken?: string | null,
      } | null,
      albumId: string,
      album?:  {
        __typename: "Album",
        id: string,
        name: string,
        imageUri: string,
        aritistHeadline: string,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMerchSubscription = {
  onDeleteMerch?:  {
    __typename: "Merch",
    id: string,
    itemName: string,
    image: string,
    price: number,
    sourceName: string,
    sourceURI: string,
    artistId: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      avatar: string,
      merch?:  {
        __typename: "ModelMerchConnection",
        nextToken?: string | null,
      } | null,
      tour?:  {
        __typename: "ModelTourConnection",
        nextToken?: string | null,
      } | null,
      podcast?:  {
        __typename: "ModelPodcastConnection",
        nextToken?: string | null,
      } | null,
      social?:  {
        __typename: "ModelSocialConnection",
        nextToken?: string | null,
      } | null,
      albumId: string,
      album?:  {
        __typename: "Album",
        id: string,
        name: string,
        imageUri: string,
        aritistHeadline: string,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTourSubscription = {
  onCreateTour?:  {
    __typename: "Tour",
    id: string,
    onTour: boolean,
    tourDates?:  {
      __typename: "ModelTourDatesConnection",
      items?:  Array< {
        __typename: "TourDates",
        id: string,
        dateMonth: string,
        dateDate: string,
        dateDay: string,
        dateTime: string,
        city: string,
        venue: string,
        tourId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    artistId: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      avatar: string,
      merch?:  {
        __typename: "ModelMerchConnection",
        nextToken?: string | null,
      } | null,
      tour?:  {
        __typename: "ModelTourConnection",
        nextToken?: string | null,
      } | null,
      podcast?:  {
        __typename: "ModelPodcastConnection",
        nextToken?: string | null,
      } | null,
      social?:  {
        __typename: "ModelSocialConnection",
        nextToken?: string | null,
      } | null,
      albumId: string,
      album?:  {
        __typename: "Album",
        id: string,
        name: string,
        imageUri: string,
        aritistHeadline: string,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTourSubscription = {
  onUpdateTour?:  {
    __typename: "Tour",
    id: string,
    onTour: boolean,
    tourDates?:  {
      __typename: "ModelTourDatesConnection",
      items?:  Array< {
        __typename: "TourDates",
        id: string,
        dateMonth: string,
        dateDate: string,
        dateDay: string,
        dateTime: string,
        city: string,
        venue: string,
        tourId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    artistId: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      avatar: string,
      merch?:  {
        __typename: "ModelMerchConnection",
        nextToken?: string | null,
      } | null,
      tour?:  {
        __typename: "ModelTourConnection",
        nextToken?: string | null,
      } | null,
      podcast?:  {
        __typename: "ModelPodcastConnection",
        nextToken?: string | null,
      } | null,
      social?:  {
        __typename: "ModelSocialConnection",
        nextToken?: string | null,
      } | null,
      albumId: string,
      album?:  {
        __typename: "Album",
        id: string,
        name: string,
        imageUri: string,
        aritistHeadline: string,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTourSubscription = {
  onDeleteTour?:  {
    __typename: "Tour",
    id: string,
    onTour: boolean,
    tourDates?:  {
      __typename: "ModelTourDatesConnection",
      items?:  Array< {
        __typename: "TourDates",
        id: string,
        dateMonth: string,
        dateDate: string,
        dateDay: string,
        dateTime: string,
        city: string,
        venue: string,
        tourId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    artistId: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      avatar: string,
      merch?:  {
        __typename: "ModelMerchConnection",
        nextToken?: string | null,
      } | null,
      tour?:  {
        __typename: "ModelTourConnection",
        nextToken?: string | null,
      } | null,
      podcast?:  {
        __typename: "ModelPodcastConnection",
        nextToken?: string | null,
      } | null,
      social?:  {
        __typename: "ModelSocialConnection",
        nextToken?: string | null,
      } | null,
      albumId: string,
      album?:  {
        __typename: "Album",
        id: string,
        name: string,
        imageUri: string,
        aritistHeadline: string,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTourDatesSubscription = {
  onCreateTourDates?:  {
    __typename: "TourDates",
    id: string,
    dateMonth: string,
    dateDate: string,
    dateDay: string,
    dateTime: string,
    city: string,
    venue: string,
    tourId: string,
    tour?:  {
      __typename: "Tour",
      id: string,
      onTour: boolean,
      tourDates?:  {
        __typename: "ModelTourDatesConnection",
        nextToken?: string | null,
      } | null,
      artistId: string,
      artist?:  {
        __typename: "Artist",
        id: string,
        name: string,
        avatar: string,
        albumId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTourDatesSubscription = {
  onUpdateTourDates?:  {
    __typename: "TourDates",
    id: string,
    dateMonth: string,
    dateDate: string,
    dateDay: string,
    dateTime: string,
    city: string,
    venue: string,
    tourId: string,
    tour?:  {
      __typename: "Tour",
      id: string,
      onTour: boolean,
      tourDates?:  {
        __typename: "ModelTourDatesConnection",
        nextToken?: string | null,
      } | null,
      artistId: string,
      artist?:  {
        __typename: "Artist",
        id: string,
        name: string,
        avatar: string,
        albumId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTourDatesSubscription = {
  onDeleteTourDates?:  {
    __typename: "TourDates",
    id: string,
    dateMonth: string,
    dateDate: string,
    dateDay: string,
    dateTime: string,
    city: string,
    venue: string,
    tourId: string,
    tour?:  {
      __typename: "Tour",
      id: string,
      onTour: boolean,
      tourDates?:  {
        __typename: "ModelTourDatesConnection",
        nextToken?: string | null,
      } | null,
      artistId: string,
      artist?:  {
        __typename: "Artist",
        id: string,
        name: string,
        avatar: string,
        albumId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePodcastSubscription = {
  onCreatePodcast?:  {
    __typename: "Podcast",
    id: string,
    onTour: boolean,
    featPodcast?:  {
      __typename: "ModelFeatPodcastConnection",
      items?:  Array< {
        __typename: "FeatPodcast",
        id: string,
        showName: string,
        episodeName: string,
        image: string,
        podcastId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    artistId: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      avatar: string,
      merch?:  {
        __typename: "ModelMerchConnection",
        nextToken?: string | null,
      } | null,
      tour?:  {
        __typename: "ModelTourConnection",
        nextToken?: string | null,
      } | null,
      podcast?:  {
        __typename: "ModelPodcastConnection",
        nextToken?: string | null,
      } | null,
      social?:  {
        __typename: "ModelSocialConnection",
        nextToken?: string | null,
      } | null,
      albumId: string,
      album?:  {
        __typename: "Album",
        id: string,
        name: string,
        imageUri: string,
        aritistHeadline: string,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePodcastSubscription = {
  onUpdatePodcast?:  {
    __typename: "Podcast",
    id: string,
    onTour: boolean,
    featPodcast?:  {
      __typename: "ModelFeatPodcastConnection",
      items?:  Array< {
        __typename: "FeatPodcast",
        id: string,
        showName: string,
        episodeName: string,
        image: string,
        podcastId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    artistId: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      avatar: string,
      merch?:  {
        __typename: "ModelMerchConnection",
        nextToken?: string | null,
      } | null,
      tour?:  {
        __typename: "ModelTourConnection",
        nextToken?: string | null,
      } | null,
      podcast?:  {
        __typename: "ModelPodcastConnection",
        nextToken?: string | null,
      } | null,
      social?:  {
        __typename: "ModelSocialConnection",
        nextToken?: string | null,
      } | null,
      albumId: string,
      album?:  {
        __typename: "Album",
        id: string,
        name: string,
        imageUri: string,
        aritistHeadline: string,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePodcastSubscription = {
  onDeletePodcast?:  {
    __typename: "Podcast",
    id: string,
    onTour: boolean,
    featPodcast?:  {
      __typename: "ModelFeatPodcastConnection",
      items?:  Array< {
        __typename: "FeatPodcast",
        id: string,
        showName: string,
        episodeName: string,
        image: string,
        podcastId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    artistId: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      avatar: string,
      merch?:  {
        __typename: "ModelMerchConnection",
        nextToken?: string | null,
      } | null,
      tour?:  {
        __typename: "ModelTourConnection",
        nextToken?: string | null,
      } | null,
      podcast?:  {
        __typename: "ModelPodcastConnection",
        nextToken?: string | null,
      } | null,
      social?:  {
        __typename: "ModelSocialConnection",
        nextToken?: string | null,
      } | null,
      albumId: string,
      album?:  {
        __typename: "Album",
        id: string,
        name: string,
        imageUri: string,
        aritistHeadline: string,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFeatPodcastSubscription = {
  onCreateFeatPodcast?:  {
    __typename: "FeatPodcast",
    id: string,
    showName: string,
    episodeName: string,
    image: string,
    podcastId: string,
    podcast?:  {
      __typename: "Podcast",
      id: string,
      onTour: boolean,
      featPodcast?:  {
        __typename: "ModelFeatPodcastConnection",
        nextToken?: string | null,
      } | null,
      artistId: string,
      artist?:  {
        __typename: "Artist",
        id: string,
        name: string,
        avatar: string,
        albumId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFeatPodcastSubscription = {
  onUpdateFeatPodcast?:  {
    __typename: "FeatPodcast",
    id: string,
    showName: string,
    episodeName: string,
    image: string,
    podcastId: string,
    podcast?:  {
      __typename: "Podcast",
      id: string,
      onTour: boolean,
      featPodcast?:  {
        __typename: "ModelFeatPodcastConnection",
        nextToken?: string | null,
      } | null,
      artistId: string,
      artist?:  {
        __typename: "Artist",
        id: string,
        name: string,
        avatar: string,
        albumId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFeatPodcastSubscription = {
  onDeleteFeatPodcast?:  {
    __typename: "FeatPodcast",
    id: string,
    showName: string,
    episodeName: string,
    image: string,
    podcastId: string,
    podcast?:  {
      __typename: "Podcast",
      id: string,
      onTour: boolean,
      featPodcast?:  {
        __typename: "ModelFeatPodcastConnection",
        nextToken?: string | null,
      } | null,
      artistId: string,
      artist?:  {
        __typename: "Artist",
        id: string,
        name: string,
        avatar: string,
        albumId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSocialSubscription = {
  onCreateSocial?:  {
    __typename: "Social",
    id: string,
    source: string,
    message: string,
    image: string,
    artistId: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      avatar: string,
      merch?:  {
        __typename: "ModelMerchConnection",
        nextToken?: string | null,
      } | null,
      tour?:  {
        __typename: "ModelTourConnection",
        nextToken?: string | null,
      } | null,
      podcast?:  {
        __typename: "ModelPodcastConnection",
        nextToken?: string | null,
      } | null,
      social?:  {
        __typename: "ModelSocialConnection",
        nextToken?: string | null,
      } | null,
      albumId: string,
      album?:  {
        __typename: "Album",
        id: string,
        name: string,
        imageUri: string,
        aritistHeadline: string,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSocialSubscription = {
  onUpdateSocial?:  {
    __typename: "Social",
    id: string,
    source: string,
    message: string,
    image: string,
    artistId: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      avatar: string,
      merch?:  {
        __typename: "ModelMerchConnection",
        nextToken?: string | null,
      } | null,
      tour?:  {
        __typename: "ModelTourConnection",
        nextToken?: string | null,
      } | null,
      podcast?:  {
        __typename: "ModelPodcastConnection",
        nextToken?: string | null,
      } | null,
      social?:  {
        __typename: "ModelSocialConnection",
        nextToken?: string | null,
      } | null,
      albumId: string,
      album?:  {
        __typename: "Album",
        id: string,
        name: string,
        imageUri: string,
        aritistHeadline: string,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSocialSubscription = {
  onDeleteSocial?:  {
    __typename: "Social",
    id: string,
    source: string,
    message: string,
    image: string,
    artistId: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      avatar: string,
      merch?:  {
        __typename: "ModelMerchConnection",
        nextToken?: string | null,
      } | null,
      tour?:  {
        __typename: "ModelTourConnection",
        nextToken?: string | null,
      } | null,
      podcast?:  {
        __typename: "ModelPodcastConnection",
        nextToken?: string | null,
      } | null,
      social?:  {
        __typename: "ModelSocialConnection",
        nextToken?: string | null,
      } | null,
      albumId: string,
      album?:  {
        __typename: "Album",
        id: string,
        name: string,
        imageUri: string,
        aritistHeadline: string,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
