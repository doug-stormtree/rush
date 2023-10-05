import { useEffect, useState } from 'react'
import { client } from '../../../tina/__generated__/client'

export interface Question {
  title: string
  subtitle: string
  image: string
  sections: {
    one: {
      posTitle: string
      posPoints: string[]
      negTitle: string
      negPoints: string[]
    }
    two: {
      title: string
      points: string[]
    }
  }
}

export default function useQuestions() {
  const [questions, setQuestions] = useState<Question[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<unknown>()

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true)
        const resp = await client.queries.questionConnection()
        const data = resp.data.questionConnection.edges?.map((q) => {
          if (!q || !q.node) throw new Error(
            'Undefined or null Question returned by TinaCMS questionConnection.'
          )
          return {
            title: q.node.title,
            subtitle: q.node.subtitle,
            image: q.node.image,
            sections: {
              one: {
                posTitle: q.node.section_one.positive_title,
                posPoints: q.node.section_one.positive_points,
                negTitle: q.node.section_one.negative_title,
                negPoints: q.node.section_one.negative_points,
              },
              two: {
                title: q.node.section_two.title,
                points: q.node.section_two.points,
              }
            }
          }
        })
        setQuestions(data ?? null)
        setIsLoading(false)
      } catch (e) {
        setError(e)
        setIsLoading(false)
      }
    })()
  }, [])

  return {
    isLoading,
    questions,
    error
  }
}