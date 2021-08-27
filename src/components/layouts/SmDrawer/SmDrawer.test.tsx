import { render, screen, fireEvent } from '@testing-library/react';
import SmDrawer from './SmDrawer';

const themeCls = {}
test('renders the menu side drawer component', () => {
    const { container } = render(<SmDrawer themeCls={themeCls} />);
    expect(container.querySelector(".MuiDrawer-root")).toBeTruthy();
});


test('fires the side drawer close click event', () => {
    const { container } = render(<SmDrawer themeCls={themeCls} />);
    expect(fireEvent(container, new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
    }))).toBeTruthy();
});