import {LayoutProps, PositionProps} from 'styled-system';
import 'flipsnap';

// declare module 'flipsnap';
interface Props extends React.HTMLAttributes<HTMLDivElement>, PositionProps, LayoutProps {
    children: React.ReactNode;
}
interface MenuItemDataType {
    label: string;
    value?: string;
}
interface IInfoData {
    title?: string | ReactElement<any, any>;
    subTitlte?: string;
    liContent?: Array<string|ReactElement<any, any>>;
}