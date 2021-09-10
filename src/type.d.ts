import { LayoutProps, PositionProps } from 'styled-system';

interface Props extends React.HTMLAttributes<HTMLDivElement>, PositionProps, LayoutProps {
    children: React.ReactNode;
}

interface MenuItemDataType {
    label: string;
    value?: string;
}
