import React from 'react';
import {
  Button,
  ButtonGroup,
  Flex,
  Link,
  Text,
  useBreakpointValue,
  useStyleConfig,
} from '@chakra-ui/react';
import { FiMessageSquare } from 'react-icons/fi';
import ShareModalButton from './ShareModal';

export default function NavBar() {
  const styles = useStyleConfig('NavBar');

  const pageTitle = useBreakpointValue({
    xl: '[RUSH] Resilient Urban Systems & Habitat',
    base: '[RUSH]',
  },{ssr:false, fallback:'true'});

  return (
    <Flex __css={styles} >
      <Text as='h1' variant='wordmark'>{pageTitle}</Text>
      <ButtonGroup variant='nav' spacing='-2'>
        <Link 
          href='https://forms.gle/rB1WaaLcUmEjxmMr8'
          isExternal
        >
          <Button
            rightIcon={<FiMessageSquare strokeWidth='4'/>}
            variant='navHero'
          >Feedback</Button>
        </Link>
        {
        <ShareModalButton />
        }
      </ButtonGroup>
    </Flex>
  )
}