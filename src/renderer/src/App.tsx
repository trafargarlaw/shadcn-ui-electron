import { Loader2, Mail } from 'lucide-react'
import MailsList from './components/mail-list'

import useSWR from 'swr'
import axios from 'axios'

const fetcher = (url: string) =>
  axios
    .post(
      url,
      { email: 'garywupx@gmail.com', password: 'fyszov-8raqky-venPaj' },
      {
        headers: {
          password: 'a80@HE6GhS71',
          access_token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjgyNDkwODk1LCJzdWIiOiJlNjY5NDQwMy0wNjczLTQyZWUtOGNjNy1lMGJlZWYxZDM5NDMiLCJlbWFpbCI6Imdhcnl3dXB4QGdtYWlsLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnt9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6InBhc3N3b3JkIiwidGltZXN0YW1wIjoxNjgxODg2MDk1fV0sInNlc3Npb25faWQiOiJhNWMxOTgxNS0yYjQwLTQ0MTYtOWI1OS03OGM2OGM0NWY0ZjAifQ.IDGGZXCEY1UyAj0k8VxJQ_TnZr80S5lXuCCxhn_FpNY'
        }
      }
    )
    .then((res) => res.data)
function App(): JSX.Element {
  const { data, error, isLoading } = useSWR('https://api.warmest.ai/get_emails', fetcher)

  console.log(data)

  if (error) return <div>failed to load</div>
  if (isLoading)
    return (
      <div className="w-full flex items-center justify-center h-screen">
        <Loader2 className="animate-spin " />{' '}
      </div>
    )

  return (
    <div>
      <div className="px-8 m-6 py-6">
        <p className="flex items-center text-xl tracking-tight">
          <Mail className="mr-2" />
          Inbox (1)
        </p>
      </div>
      <div className="mt-6">
        <MailsList mails={data} />
      </div>
    </div>
  )
}

export default App
