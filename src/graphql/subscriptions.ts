/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAlbumCategory = /* GraphQL */ `
  subscription OnCreateAlbumCategory {
    onCreateAlbumCategory {
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
export const onUpdateAlbumCategory = /* GraphQL */ `
  subscription OnUpdateAlbumCategory {
    onUpdateAlbumCategory {
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
export const onDeleteAlbumCategory = /* GraphQL */ `
  subscription OnDeleteAlbumCategory {
    onDeleteAlbumCategory {
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
export const onCreateAlbum = /* GraphQL */ `
  subscription OnCreateAlbum {
    onCreateAlbum {
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
export const onUpdateAlbum = /* GraphQL */ `
  subscription OnUpdateAlbum {
    onUpdateAlbum {
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
export const onDeleteAlbum = /* GraphQL */ `
  subscription OnDeleteAlbum {
    onDeleteAlbum {
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
export const onCreateSong = /* GraphQL */ `
  subscription OnCreateSong {
    onCreateSong {
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
export const onUpdateSong = /* GraphQL */ `
  subscription OnUpdateSong {
    onUpdateSong {
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
export const onDeleteSong = /* GraphQL */ `
  subscription OnDeleteSong {
    onDeleteSong {
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
export const onCreateArtist = /* GraphQL */ `
  subscription OnCreateArtist {
    onCreateArtist {
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
export const onUpdateArtist = /* GraphQL */ `
  subscription OnUpdateArtist {
    onUpdateArtist {
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
export const onDeleteArtist = /* GraphQL */ `
  subscription OnDeleteArtist {
    onDeleteArtist {
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
export const onCreateMerch = /* GraphQL */ `
  subscription OnCreateMerch {
    onCreateMerch {
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
export const onUpdateMerch = /* GraphQL */ `
  subscription OnUpdateMerch {
    onUpdateMerch {
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
export const onDeleteMerch = /* GraphQL */ `
  subscription OnDeleteMerch {
    onDeleteMerch {
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
export const onCreateTour = /* GraphQL */ `
  subscription OnCreateTour {
    onCreateTour {
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
export const onUpdateTour = /* GraphQL */ `
  subscription OnUpdateTour {
    onUpdateTour {
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
export const onDeleteTour = /* GraphQL */ `
  subscription OnDeleteTour {
    onDeleteTour {
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
export const onCreateTourDates = /* GraphQL */ `
  subscription OnCreateTourDates {
    onCreateTourDates {
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
export const onUpdateTourDates = /* GraphQL */ `
  subscription OnUpdateTourDates {
    onUpdateTourDates {
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
export const onDeleteTourDates = /* GraphQL */ `
  subscription OnDeleteTourDates {
    onDeleteTourDates {
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
export const onCreatePodcast = /* GraphQL */ `
  subscription OnCreatePodcast {
    onCreatePodcast {
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
export const onUpdatePodcast = /* GraphQL */ `
  subscription OnUpdatePodcast {
    onUpdatePodcast {
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
export const onDeletePodcast = /* GraphQL */ `
  subscription OnDeletePodcast {
    onDeletePodcast {
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
export const onCreateFeatPodcast = /* GraphQL */ `
  subscription OnCreateFeatPodcast {
    onCreateFeatPodcast {
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
export const onUpdateFeatPodcast = /* GraphQL */ `
  subscription OnUpdateFeatPodcast {
    onUpdateFeatPodcast {
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
export const onDeleteFeatPodcast = /* GraphQL */ `
  subscription OnDeleteFeatPodcast {
    onDeleteFeatPodcast {
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
export const onCreateSocial = /* GraphQL */ `
  subscription OnCreateSocial {
    onCreateSocial {
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
export const onUpdateSocial = /* GraphQL */ `
  subscription OnUpdateSocial {
    onUpdateSocial {
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
export const onDeleteSocial = /* GraphQL */ `
  subscription OnDeleteSocial {
    onDeleteSocial {
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
