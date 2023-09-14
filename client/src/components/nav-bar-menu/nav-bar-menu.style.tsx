import { styled } from 'styled-components';


const StyledNavBarMenu = styled.nav<{
    className: string;
}>`
    .nav-bar__menu {
        margin-top: 100px;
        li {
            width: 100%;
            margin: 7px 0;
        }

        a {
            color: #fff;
            display: flex;
            align-items: center;
            font-size: 14px;
            padding: 10px;
            border-radius: 4px;
            transition: 0.3s ease-in all;
            &:hover {
                    color: ${props => props.theme.accentColor};

                span.material-symbols-rounded {
                    color: ${props => props.theme.accentColor};
                    font-variation-settings:
                    'FILL' 1,
                    'wght' 400,
                    'GRAD' 0,
                    'opsz' 24
                }
            }

            &.active {
                color: ${props => props.theme.accentColor};
                background-color: #ffffff12;

                span.material-symbols-rounded {
                    color: ${props => props.theme.accentColor};
                    font-variation-settings:
                    'FILL' 1,
                    'wght' 400,
                    'GRAD' 0,
                    'opsz' 24
                }
            }

            span.material-symbols-rounded {
                font-size: 18px;
                margin-right: 16px;
                margin-bottom: 1px;
                transition: 0.2s ease-in-out all;
            }
        }
    }
`;

export default StyledNavBarMenu;

