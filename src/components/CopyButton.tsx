interface Props {
    onClick?: () => void;
    className?: string;
    color?: string;
}

function CopyButton({ className, onClick = () => {}, color = "#645BC8" }: Props) {
    return (
        <div {...{className, onClick}}>
            <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M11 0.75H2C1.175 0.75 0.5 1.425 0.5 2.25V12.75H2V2.25H11V0.75ZM13.25 3.75H5C4.175 3.75 3.5 4.425 3.5 5.25V15.75C3.5 16.575 4.175 17.25 5 17.25H13.25C14.075 17.25 14.75 16.575 14.75 15.75V5.25C14.75 4.425 14.075 3.75 13.25 3.75ZM13.25 15.75H5V5.25H13.25V15.75Z"
                    fill={color}/>
            </svg>
        </div>
    )
}
export default CopyButton;
