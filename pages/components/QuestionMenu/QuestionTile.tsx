import React, { useEffect, useState } from 'react';
import {
  Box,
  Image,
  ListItem,
  Text,
  UnorderedList,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import { Question } from './useQuestions';

export interface QuestionTileProps {
  question: Question;
  expanded: Boolean;
}

const QuestionTile: React.FC<QuestionTileProps> = ({ question, expanded }) => {
  const styles = useMultiStyleConfig(
    'QuestionTile',
    { size: expanded ? 'md' : 'sm' }
  )

  return (
    <Box as='button' __css={styles.tile}>
      <Image src={question.image} __css={styles.image} />
      <Text sx={styles.titleText}>{question.title}</Text>
      <Text sx={styles.subTitleText}>{question.subtitle}</Text>
      <QuestionPointsList {...question.sections.one} />
    </Box>
  )
}

export default QuestionTile;

interface QuestionPointsListProps {
  posTitle: string;
  posPoints: string[];
  negTitle: string;
  negPoints: string[];
}

const QuestionPointsList: React.FC<QuestionPointsListProps> = (props) => {
  return (
    <section>
      <Text>{props.posTitle}</Text>
      <UnorderedList>
        {props.posPoints.map((item) => <ListItem key={item}>{item}</ListItem>)}
      </UnorderedList>
      <Text>{props.negTitle}</Text>
      <UnorderedList>
        {props.negPoints.map((item) => <ListItem key={item}>{item}</ListItem>)}
      </UnorderedList>
    </section>
  )
}