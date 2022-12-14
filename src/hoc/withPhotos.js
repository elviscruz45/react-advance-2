import { gql,useQuery} from "@apollo/client"

function useGetPhotos(categoryId){
    
    const withPhotos=gql`
    query getPhotos($categoryId:ID){
        photos(categoryId:$categoryId){
            id
            categoryId
            src
            likes
            userId
            liked
        }
    }`
    const { loading, error, data } = useQuery(withPhotos,{
        variables:{categoryId}
    });
    return {loading,error,data}
}

export {useGetPhotos}

