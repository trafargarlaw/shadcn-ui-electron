interface MailItemProps {
  mail: {
    sender: string
    subject: string
    internal_date: string //"internal_date": "1681885435000",
  }
}

const MailItem: React.FC<MailItemProps> = ({ mail }) => {
  // function that takes a string and returns formated string that keeps from the first to the < character
  const formatString = (str: string) => {
    const index = str.indexOf('<')
    if (index === -1) {
      return str
    }
    return str.slice(0, index)
  }

  const formatDate = (date: string) => {
    return Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }).format(new Date(Number(date)))
  }

  return (
    // <div className="grid grid-cols-[auto_1fr_auto] gap-4">
    //   <div className="contents">
    //     <div className="name">Name 1</div>
    //     <div className="subject">Subject 1 - Preview</div>
    //     <div className="time">Time 1</div>
    //   </div>
    // </div>
    <li className="grid grid-cols-[auto_1fr_auto] gap-4 pl-14 pr-8 py-2 hover:bg-slate-100 cursor-pointer">
      <div className="contents">
        <span className="w-[240px] whitespace-nowrap  font-semibold pr-24">
          {formatString(mail.sender)}
        </span>
        <div className="font-medium flex items-center gap-4 whitespace-nowrap overflow-hidden text-ellipsis">
          <span className="">{mail.subject}</span>
          <span className="font-normal text-slate-500  overflow-hidden text-ellipsis">
            Hello this is a preview of the email
          </span>
        </div>
        <span className="font-normal ml-auto whitespace-nowrap text-slate-500">
          {formatDate(mail.internal_date)}
        </span>
      </div>
    </li>
  )
}

export default MailItem
