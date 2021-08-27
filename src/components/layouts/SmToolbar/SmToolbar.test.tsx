import { render, screen, fireEvent } from '@testing-library/react';
import SmToolbar from './SmToolbar';


test('renders the material toolbar', () => {
    const themeCls = {}
    const { container } = render(<SmToolbar themeCls={themeCls} open={true} />);
    expect(container.querySelector(".MuiToolbar-root")).toBeTruthy();
});


test('fires the click event', () => {
    const themeCls = {}
    const { container } = render(<SmToolbar themeCls={themeCls} open={true} />);
    expect(fireEvent(container, new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
    }))).toBeTruthy();
});