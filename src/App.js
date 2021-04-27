function App() {
  function handSubmit(e) {
    e.preventDefault();
    const form = e.target;
    console.log(`The submitted offset is: ${form['offset'].value}`);
  }
  return (
    <>
      <h1>Bitmasks App</h1>
      <form onSubmit={handSubmit}>
        <input name="offset" type="number" />
        <button>Find cities</button>
      </form>
      <ul>
        {CITIES.map((city) => (
          <li key={city.name}>
            {city.name + ': GMT'} {city.gmt >= 0 ? '+' + city.gmt : city.gmt}
          </li>
        ))}
      </ul>
    </>
  );
}

const CITIES = [
  {
    name: 'Moscow',
    gmt: 3,
  },
  {
    name: 'Paris',
    gmt: 2,
  },
  {
    name: 'Berlin',
    gmt: 2,
  },
  {
    name: 'Brussels',
    gmt: 2,
  },
  {
    name: 'Amsterdam',
    gmt: 2,
  },
  {
    name: 'Rome',
    gmt: 2,
  },
  {
    name: 'London',
    gmt: 1,
  },
  {
    name: 'Dublin',
    gmt: 1,
  },
  {
    name: 'New York',
    gmt: -4,
  },
  {
    name: 'Washington, DC',
    gmt: -4,
  },
  {
    name: 'St. Louis',
    gmt: -5,
  },
  {
    name: 'Los Angeles',
    gmt: -7,
  },
  {
    name: 'Tokyo',
    gmt: 9,
  },
  {
    name: 'Beijing',
    gmt: 8,
  },
  {
    name: 'Ho Chi Mihn City',
    gmt: 7,
  },
  {
    name: 'Mumbai',
    gmt: 5,
  },
];

export default App;
