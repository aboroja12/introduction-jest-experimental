import { render, screen } from '@testing-library/react';
import Page from './Page';

test('renders Home heading and About link', () => {
    render(<Page />);
    const heading = screen.getByText(/Home/i);
    const link = screen.getByRole('link', { name: /About/i });
    expect(heading).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/about');
});