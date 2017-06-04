const WorkshopList = (props) => {
  return (
    <table>
      <tbody>
        <tr><th>ID</th><th>Name</th><th>Duration</th></tr>
        {props.workshops.map((item) => {
          return (
            <tr>
              <td>{item.workshopId}</td>
              <td>{item.workshopName}</td>
              <td>{item.workshopDuration}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
