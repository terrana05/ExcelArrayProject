import "./styles.css";
//Write array below

export default function App() {
  let firstNames = [
    "Omari",
    "Melody",
    "Keturah",
    "Aldo",
    "Reginea",
    "Amori",
    "Laurent",
    "Ye",
    "Matt",
    "Judy",
    "Sami",
    "Maxwell",
    "Groana",
    "Aland",
    "Jean",
    "Lorena"
  ];

  let lastNames = [
    "Prass",
    "Suero",
    "Allen",
    "Terrana",
    "Walker",
    "Steele",
    "Benjamin",
    "(☞ﾟヮﾟ)☞Paing",
    "Schupack",
    "Truong",
    "Lieberman",
    "Williams",
    "Melendez",
    "Kuang",
    "Saldarriaga",
    "Castillo"
  ];
  return (
    <div className="App">
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
        {firstNames.map(function (firstName, i) {
          return (
            <tr>
              <td>{firstName}</td>
              <td>{lastNames[i]}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
