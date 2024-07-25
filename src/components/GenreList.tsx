import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props{
  onselectGenre(genre:Genre):void
  selectedGenre:Genre | null
}

const GenreList = ({selectedGenre,onselectGenre}:Props) => {
  const { data: genres,isLoading ,error } = useGenres();

  if(error) return null

  if(isLoading) return <Spinner />

  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button fontWeight={genre.id===selectedGenre?.id?'bold':'normal'} onClick={()=>onselectGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
