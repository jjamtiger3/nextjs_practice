export default function Main() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 mail-contents-container">
      <table>
        <tbody>
          <tr>
            <td className="mark">
              <input type="checkbox" />
            </td>
            <td className="mark">
              <span className={`icon star`}></span>
            </td>
            <td className="mark">
              <span className={`icon clip`}></span>
            </td>
            <td className="sender">
              <span>서인석</span>
            </td>
            <td>
              메일테스트
            </td>
            <td className="send-date">
              04.13 14:59
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}
