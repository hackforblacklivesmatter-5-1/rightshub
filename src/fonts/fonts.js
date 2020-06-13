import { createGlobalStyle } from "styled-components";
import CornerstoneFont2 from "./cornerstone-webfont.woff2";
import CornerstoneFont from "./cornerstone-webfont.woff";

export default createGlobalStyle`
    @font-face {
        font-family: 'Cornerstone';
        src: local('Cornerstone'), local('Cornerstone'),
        url(${CornerstoneFont2}) format('woff2'),
        url(${CornerstoneFont}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;
