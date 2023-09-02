import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Heading, Spinner } from "@chakra-ui/react"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Heading>Welcome to my Gatsby site!</Heading>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <Spinner />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
