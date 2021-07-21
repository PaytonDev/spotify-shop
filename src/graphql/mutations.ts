/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAlbumCategory = /* GraphQL */ `
  mutation CreateAlbumCategory(
    $input: CreateAlbumCategoryInput!
    $condition: ModelAlbumCategoryConditionInput
  ) {
    createAlbumCategory(input: $input, condition: $condition) {
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
export const updateAlbumCategory = /* GraphQL */ `
  mutation UpdateAlbumCategory(
    $input: UpdateAlbumCategoryInput!
    $condition: ModelAlbumCategoryConditionInput
  ) {
    updateAlbumCategory(input: $input, condition: $condition) {
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
export const deleteAlbumCategory = /* GraphQL */ `
  mutation DeleteAlbumCategory(
    $input: DeleteAlbumCategoryInput!
    $condition: ModelAlbumCategoryConditionInput
  ) {
    deleteAlbumCategory(input: $input, condition: $condition) {
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
export const createAlbum = /* GraphQL */ `
  mutation CreateAlbum(
    $input: CreateAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    createAlbum(input: $input, condition: $condition) {
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
export const updateAlbum = /* GraphQL */ `
  mutation UpdateAlbum(
    $input: UpdateAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    updateAlbum(input: $input, condition: $condition) {
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
export const deleteAlbum = /* GraphQL */ `
  mutation DeleteAlbum(
    $input: DeleteAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    deleteAlbum(input: $input, condition: $condition) {
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
export const createSong = /* GraphQL */ `
  mutation CreateSong(
    $input: CreateSongInput!
    $condition: ModelSongConditionInput
  ) {
    createSong(input: $input, condition: $condition) {
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
export const updateSong = /* GraphQL */ `
  mutation UpdateSong(
    $input: UpdateSongInput!
    $condition: ModelSongConditionInput
  ) {
    updateSong(input: $input, condition: $condition) {
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
export const deleteSong = /* GraphQL */ `
  mutation DeleteSong(
    $input: DeleteSongInput!
    $condition: ModelSongConditionInput
  ) {
    deleteSong(input: $input, condition: $condition) {
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
export const createArtist = /* GraphQL */ `
  mutation CreateArtist(
    $input: CreateArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    createArtist(input: $input, condition: $condition) {
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
export const updateArtist = /* GraphQL */ `
  mutation UpdateArtist(
    $input: UpdateArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    updateArtist(input: $input, condition: $condition) {
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
export const deleteArtist = /* GraphQL */ `
  mutation DeleteArtist(
    $input: DeleteArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    deleteArtist(input: $input, condition: $condition) {
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
export const createMerch = /* GraphQL */ `
  mutation CreateMerch(
    $input: CreateMerchInput!
    $condition: ModelMerchConditionInput
  ) {
    createMerch(input: $input, condition: $condition) {
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
export const updateMerch = /* GraphQL */ `
  mutation UpdateMerch(
    $input: UpdateMerchInput!
    $condition: ModelMerchConditionInput
  ) {
    updateMerch(input: $input, condition: $condition) {
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
export const deleteMerch = /* GraphQL */ `
  mutation DeleteMerch(
    $input: DeleteMerchInput!
    $condition: ModelMerchConditionInput
  ) {
    deleteMerch(input: $input, condition: $condition) {
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
export const createTour = /* GraphQL */ `
  mutation CreateTour(
    $input: CreateTourInput!
    $condition: ModelTourConditionInput
  ) {
    createTour(input: $input, condition: $condition) {
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
export const updateTour = /* GraphQL */ `
  mutation UpdateTour(
    $input: UpdateTourInput!
    $condition: ModelTourConditionInput
  ) {
    updateTour(input: $input, condition: $condition) {
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
export const deleteTour = /* GraphQL */ `
  mutation DeleteTour(
    $input: DeleteTourInput!
    $condition: ModelTourConditionInput
  ) {
    deleteTour(input: $input, condition: $condition) {
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
export const createTourDates = /* GraphQL */ `
  mutation CreateTourDates(
    $input: CreateTourDatesInput!
    $condition: ModelTourDatesConditionInput
  ) {
    createTourDates(input: $input, condition: $condition) {
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
export const updateTourDates = /* GraphQL */ `
  mutation UpdateTourDates(
    $input: UpdateTourDatesInput!
    $condition: ModelTourDatesConditionInput
  ) {
    updateTourDates(input: $input, condition: $condition) {
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
export const deleteTourDates = /* GraphQL */ `
  mutation DeleteTourDates(
    $input: DeleteTourDatesInput!
    $condition: ModelTourDatesConditionInput
  ) {
    deleteTourDates(input: $input, condition: $condition) {
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
export const createPodcast = /* GraphQL */ `
  mutation CreatePodcast(
    $input: CreatePodcastInput!
    $condition: ModelPodcastConditionInput
  ) {
    createPodcast(input: $input, condition: $condition) {
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
export const updatePodcast = /* GraphQL */ `
  mutation UpdatePodcast(
    $input: UpdatePodcastInput!
    $condition: ModelPodcastConditionInput
  ) {
    updatePodcast(input: $input, condition: $condition) {
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
export const deletePodcast = /* GraphQL */ `
  mutation DeletePodcast(
    $input: DeletePodcastInput!
    $condition: ModelPodcastConditionInput
  ) {
    deletePodcast(input: $input, condition: $condition) {
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
export const createFeatPodcast = /* GraphQL */ `
  mutation CreateFeatPodcast(
    $input: CreateFeatPodcastInput!
    $condition: ModelFeatPodcastConditionInput
  ) {
    createFeatPodcast(input: $input, condition: $condition) {
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
export const updateFeatPodcast = /* GraphQL */ `
  mutation UpdateFeatPodcast(
    $input: UpdateFeatPodcastInput!
    $condition: ModelFeatPodcastConditionInput
  ) {
    updateFeatPodcast(input: $input, condition: $condition) {
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
export const deleteFeatPodcast = /* GraphQL */ `
  mutation DeleteFeatPodcast(
    $input: DeleteFeatPodcastInput!
    $condition: ModelFeatPodcastConditionInput
  ) {
    deleteFeatPodcast(input: $input, condition: $condition) {
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
export const createSocial = /* GraphQL */ `
  mutation CreateSocial(
    $input: CreateSocialInput!
    $condition: ModelSocialConditionInput
  ) {
    createSocial(input: $input, condition: $condition) {
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
export const updateSocial = /* GraphQL */ `
  mutation UpdateSocial(
    $input: UpdateSocialInput!
    $condition: ModelSocialConditionInput
  ) {
    updateSocial(input: $input, condition: $condition) {
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
export const deleteSocial = /* GraphQL */ `
  mutation DeleteSocial(
    $input: DeleteSocialInput!
    $condition: ModelSocialConditionInput
  ) {
    deleteSocial(input: $input, condition: $condition) {
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
