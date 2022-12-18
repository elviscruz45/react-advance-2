import {gql,useMutation} from "@apollo/client"

const ToogleLikeMutation=({liked, likes, id})=> {
    const LIKE_PHOTO = gql`
      mutation likeAnonymousPhoto($input: LikePhoto!) {
        likeAnonymousPhoto(input: $input) {
          id,
          liked,
          likes
        }
      }
    `
    const [likePhoto, {data, loading, error}] = useMutation(LIKE_PHOTO)

    return [likePhoto, {data, loading, error}]
    
  }

export {ToogleLikeMutation}

