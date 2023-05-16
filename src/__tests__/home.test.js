import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Home from '../pages/index';

<Multiplication n1={2} n2={4}/>

describe('Home page', () => {
  it('renders a heading', () => {
    render(<Home />);
 
    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    });
 
    expect(heading).toBeInTheDocument();
  });

  // it should reander a name when something happend
});