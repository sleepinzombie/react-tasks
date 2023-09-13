import { FunctionComponent, useState } from "react";
import StyledWrapper from './button-fab.style';
import { FabBtnProps } from "../../types/ComponentProps";


const BtnFab: FunctionComponent<FabBtnProps> = ({
    icon = 'add',
    className
}) => {
    const [fabClicked, setFabClicked] = useState<boolean>(false);
    // const [rotate, setFabIcon] = useState<string>('add');

    const onClick= () => {
        setFabClicked(!fabClicked);

        if(fabClicked) {
            setFabClicked(false);
        }
    }

    return (
        <StyledWrapper className={['btn-fab-wrapper' , className].join(' ')}>
            <button className="btn-fab" onClick={onClick}>
                <span className={`material-icons ${fabClicked ? 'rotate' : ''}`}>
                    {icon}
                </span>
            </button>
        </StyledWrapper>
    )
}


export default BtnFab;