import MailItem from './mail-item'

const MailsList = ({ mails }: any) => {
  return (
    <ul>
      {mails.map((mail: any) => {
        return <MailItem key={mail.email_id} mail={mail} />
      })}
    </ul>
  )
}

export default MailsList
