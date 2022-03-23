import type { NextPage } from 'next';
import styled from 'styled-components';

const Home: NextPage = () => {
  return (
    <Hello>
      hello, this is next.js & Typescript template.
    </Hello>
  )
}

const Hello = styled.div`
  color: blue;
`;

export default Home
