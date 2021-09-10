import { LayoutProps, PositionProps } from 'styled-system';
import 'flipsnap';
// declare module 'flipsnap';
interface Props extends React.HTMLAttributes<HTMLDivElement>, PositionProps, LayoutProps {
    children: React.ReactNode;
}

