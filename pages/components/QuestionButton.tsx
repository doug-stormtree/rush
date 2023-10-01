import React from 'react';
import {
  Box,
  Image,
  Text,
  useStyleConfig,
} from '@chakra-ui/react';

export interface Props {
  title: string;
  imageURL: string;
}

const QuestionButton: React.FC<Props> = ({title, imageURL}) => {
  const styles = useStyleConfig('QuestionButton')

  return (
    <Box
      as='button'
      textAlign='center'
      __css={styles}
    >
      <Image
        src={imageURL}
        objectFit='cover'
        width='120px'
        height='120px'
        opacity='0.9'
      />
        <Text
          position='absolute'
          bottom='0.5em'
          left='50%'
          transform='translateX(-50%)'
          as='b'
          textShadow='1px 1px 2px black, 1px 1px 1px black'
          fontSize='sm'
        >
          {title}
        </Text>
    </Box>
  )
}

export default QuestionButton;