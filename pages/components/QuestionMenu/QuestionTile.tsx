import React from 'react';
import {
  Box,
  Image,
  Text,
  useMultiStyleConfig,
} from '@chakra-ui/react';

export interface QuestionTileProps {
  title: string;
  subtitle: string;
  imageURL: string;
  expanded?: boolean;
}

const QuestionTile: React.FC<QuestionTileProps> = (props) => {
  const styles = useMultiStyleConfig(
    'QuestionTile',
    { size: props.expanded ? 'md' : 'sm' }
  )

  return (
    <Box as='button' __css={styles.tile}>
      <Image src={props.imageURL} __css={styles.image} />
      <Text sx={styles.titleText}>{props.title}</Text>
      <Text sx={styles.subTitleText}>{props.subtitle}</Text>
    </Box>
  )
}

export default QuestionTile;