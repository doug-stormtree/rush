import React, { useEffect, useState } from 'react';
import { client } from '@/tina/__generated__/client';
import {
  Button,
  ButtonGroup,
  Flex,
  Link,
  Text,
  useStyleConfig,
} from '@chakra-ui/react';
import { FiMessageSquare } from 'react-icons/fi';
import ShareModalButton from './ShareModal';

export default function NavBar() {
  const styles = useStyleConfig('NavBar');
  const [ pageTitle, setPageTitle ] = useState('');

  useEffect(() => {
    (async () => {
      const content = await client.request({
        query: `query getAbout($relativePath: String!) {
            about(relativePath: $relativePath) {
              title_short
              title_long
            }
          }`,
        variables: { relativePath: 'index.md' }
      })
      setPageTitle(content.data.about.title_long)
    })()
  }, [setPageTitle])

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