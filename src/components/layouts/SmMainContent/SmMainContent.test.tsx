import { render, screen, fireEvent, act } from '@testing-library/react';
import SmMainContent from './SmMainContent';


beforeEach(jest.useFakeTimers);
const themeCls = {}
test('renders the main content area', () => {
    const { container } = render(<SmMainContent themeCls={themeCls} />);
    act(() => { jest.advanceTimersByTime(5000) });
    expect(container.querySelector(".MuiContainer-root")).toBeTruthy();
});


