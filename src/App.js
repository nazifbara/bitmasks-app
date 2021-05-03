import SearchIcon from './search.svg';
import { useState } from 'react';
import styled from 'styled-components';

function App() {
  const [cities, setCities] = useState([...CITIES]);

  function handleSubmit(e) {
    e.preventDefault();
    const offset = e.target['offset'].value;
    const filteredCities = findCities(offset);
    setCities(filteredCities);
  }

  function findCities(offset) {
    if (!offset) {
      return CITIES;
    }
    return CITIES.filter((city) => {
      return !(city.gmt ^ offset);
    });
  }

  return (
    <Container>
      <AppName>Bitmasks App</AppName>
      <form onSubmit={handleSubmit}>
        <Input name="offset" type="number" />
        <Button>
          <img src={SearchIcon} alt="search icon" />
        </Button>
      </form>
      {cities.length === 0 ? (
        <span>Cities not found</span>
      ) : (
        <List>
          {cities.map((city) => (
            <ListItem key={city.name}>
              {city.name + ': GMT'} {city.gmt >= 0 ? '+' + city.gmt : city.gmt}
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
}

const Container = styled.div`
  padding: 0.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 37.5rem;
  margin: 0 auto;
  color: #fefae0;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
`;

const AppName = styled.h1`
  color: #bc6c25;
  font-size: 2rem;
  font-weight: 700;
  background-color: rgba(0, 0, 0, 0.7);
  color: transparent;
  text-shadow: 0px 0px 0.125rem #bc6c25;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
`;

const Input = styled.input`
  border-bottom: 0.2rem solid #606c38;
  border-left: 0.2rem solid #606c38;
  border-top: 0.2rem solid #606c38;
  border-right: none;
  background-color: #fefae0;
  padding: 0.2rem 0.625rem;
  color: #606c38;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  border-bottom: 0.2rem solid #606c38;
  border-right: 0.2rem solid #606c38;
  border-top: 0.2rem solid #606c38;
  border-left: none;
  padding: 0.2rem 0.625rem;
  background-color: #606c38;
`;

const List = styled.ul`
  list-style-type: none;
  margin: 2rem 0 0 0;
  padding: 0;
  width: 100%;

  & > li:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const ListItem = styled.li`
  background-color: #bc6c25;
  padding: 1rem 1.5rem;
  border-radius: 0.2rem;
  position: relative;

  &::before {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    content: '';
    display: block;
    width: 10px;
    background-color: #606c38;
  }
`;

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
