/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAlbumCategory = /* GraphQL */ `
  query GetAlbumCategory($id: ID!) {
    getAlbumCategory(id: $id) {
      id
      title
      albums {
        items {
          id
          name
          imageUri
          aritistHeadline
          albumCategoryId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listAlbumCategories = /* GraphQL */ `
  query ListAlbumCategories(
    $filter: ModelAlbumCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAlbumCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        albums {
          items {
            id
            imageUri
            name
            aritistHeadline
          }
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAlbum = /* GraphQL */ `
  query GetAlbum($id: ID!) {
    getAlbum(id: $id) {
      id
      name
      by {
        items {
          id
          name
          avatar
          albumId
          createdAt
          updatedAt
        }
        nextToken
      }
      imageUri
      aritistHeadline
      songs {
        items {
          id
          imageUri
          title
          Artist
          albumId
          createdAt
          updatedAt
        }
        nextToken
      }
      albumCategoryId
      AlbumCategory {
        id
        title
        albums {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listAlbums = /* GraphQL */ `
  query ListAlbums(
    $filter: ModelAlbumFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAlbums(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        by {
          nextToken
        }
        imageUri
        aritistHeadline
        songs {
          nextToken
        }
        albumCategoryId
        AlbumCategory {
          id
          title
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSong = /* GraphQL */ `
  query GetSong($id: ID!) {
    getSong(id: $id) {
      id
      imageUri
      title
      Artist
      albumId
      Album {
        id
        name
        by {
          nextToken
        }
        imageUri
        aritistHeadline
        songs {
          nextToken
        }
        albumCategoryId
        AlbumCategory {
          id
          title
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSongs = /* GraphQL */ `
  query ListSongs(
    $filter: ModelSongFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSongs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        imageUri
        title
        Artist
        albumId
        Album {
          id
          name
          imageUri
          aritistHeadline
          albumCategoryId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getArtist = /* GraphQL */ `
  query GetArtist($id: ID!) {
    getArtist(id: $id) {
      id
      name
      avatar
      merch {
        items {
          id
          itemName
          image
          price
          sourceName
          sourceURI
          artistId
          createdAt
          updatedAt
        }
        nextToken
      }
      tour {
        items {
          id
          onTour
          artistId
          createdAt
          updatedAt
        }
        nextToken
      }
      podcast {
        items {
          id
          onTour
          artistId
          createdAt
          updatedAt
        }
        nextToken
      }
      social {
        items {
          id
          source
          message
          image
          artistId
          createdAt
          updatedAt
        }
        nextToken
      }
      albumId
      album {
        id
        name
        by {
          nextToken
        }
        imageUri
        aritistHeadline
        songs {
          nextToken
        }
        albumCategoryId
        AlbumCategory {
          id
          title
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listArtists = /* GraphQL */ `
  query ListArtists(
    $filter: ModelArtistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArtists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        avatar
        merch {
          nextToken
        }
        tour {
          nextToken
        }
        podcast {
          nextToken
        }
        social {
          nextToken
        }
        albumId
        album {
          id
          name
          imageUri
          aritistHeadline
          albumCategoryId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMerch = /* GraphQL */ `
  query GetMerch($id: ID!) {
    getMerch(id: $id) {
      id
      itemName
      image
      price
      sourceName
      sourceURI
      artistId
      artist {
        id
        name
        avatar
        merch {
          nextToken
        }
        tour {
          nextToken
        }
        podcast {
          nextToken
        }
        social {
          nextToken
        }
        albumId
        album {
          id
          name
          imageUri
          aritistHeadline
          albumCategoryId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listMerches = /* GraphQL */ `
  query ListMerches(
    $filter: ModelMerchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMerches(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        itemName
        image
        price
        sourceName
        sourceURI
        artistId
        artist {
          id
          name
          avatar
          albumId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTour = /* GraphQL */ `
  query GetTour($id: ID!) {
    getTour(id: $id) {
      id
      onTour
      tourDates {
        items {
          id
          dateMonth
          dateDate
          dateDay
          dateTime
          city
          venue
          tourId
          createdAt
          updatedAt
        }
        nextToken
      }
      artistId
      artist {
        id
        name
        avatar
        merch {
          nextToken
        }
        tour {
          nextToken
        }
        podcast {
          nextToken
        }
        social {
          nextToken
        }
        albumId
        album {
          id
          name
          imageUri
          aritistHeadline
          albumCategoryId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTours = /* GraphQL */ `
  query ListTours(
    $filter: ModelTourFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTours(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        onTour
        tourDates {
          nextToken
        }
        artistId
        artist {
          id
          name
          avatar
          albumId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTourDates = /* GraphQL */ `
  query GetTourDates($id: ID!) {
    getTourDates(id: $id) {
      id
      dateMonth
      dateDate
      dateDay
      dateTime
      city
      venue
      tourId
      tour {
        id
        onTour
        tourDates {
          nextToken
        }
        artistId
        artist {
          id
          name
          avatar
          albumId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTourDates = /* GraphQL */ `
  query ListTourDates(
    $filter: ModelTourDatesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTourDates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        dateMonth
        dateDate
        dateDay
        dateTime
        city
        venue
        tourId
        tour {
          id
          onTour
          artistId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPodcast = /* GraphQL */ `
  query GetPodcast($id: ID!) {
    getPodcast(id: $id) {
      id
      onTour
      featPodcast {
        items {
          id
          showName
          episodeName
          image
          podcastId
          createdAt
          updatedAt
        }
        nextToken
      }
      artistId
      artist {
        id
        name
        avatar
        merch {
          nextToken
        }
        tour {
          nextToken
        }
        podcast {
          nextToken
        }
        social {
          nextToken
        }
        albumId
        album {
          id
          name
          imageUri
          aritistHeadline
          albumCategoryId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPodcasts = /* GraphQL */ `
  query ListPodcasts(
    $filter: ModelPodcastFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPodcasts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        onTour
        featPodcast {
          nextToken
        }
        artistId
        artist {
          id
          name
          avatar
          albumId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFeatPodcast = /* GraphQL */ `
  query GetFeatPodcast($id: ID!) {
    getFeatPodcast(id: $id) {
      id
      showName
      episodeName
      image
      podcastId
      podcast {
        id
        onTour
        featPodcast {
          nextToken
        }
        artistId
        artist {
          id
          name
          avatar
          albumId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listFeatPodcasts = /* GraphQL */ `
  query ListFeatPodcasts(
    $filter: ModelFeatPodcastFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFeatPodcasts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        showName
        episodeName
        image
        podcastId
        podcast {
          id
          onTour
          artistId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSocial = /* GraphQL */ `
  query GetSocial($id: ID!) {
    getSocial(id: $id) {
      id
      source
      message
      image
      artistId
      artist {
        id
        name
        avatar
        merch {
          nextToken
        }
        tour {
          nextToken
        }
        podcast {
          nextToken
        }
        social {
          nextToken
        }
        albumId
        album {
          id
          name
          imageUri
          aritistHeadline
          albumCategoryId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSocials = /* GraphQL */ `
  query ListSocials(
    $filter: ModelSocialFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSocials(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        source
        message
        image
        artistId
        artist {
          id
          name
          avatar
          albumId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
