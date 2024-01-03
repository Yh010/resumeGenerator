const Footer = () => {
    const linkContainerStyle = {
        display: "flex",
        justifyContent: "space-between", 
        alignItems: "center",
    };

    return (
        <div>
            Get in touch with me on <br></br><br />
            <div style={linkContainerStyle}>
                <div>
                    <a href="https://www.linkedin.com/in/yash-hegde-927721201/">LinkedIn</a>
                </div>
                <div>
                    <a href="https://twitter.com/YashHegde7">Twitter</a>
                </div>
                <div>
                    <a href="mailto:yash4success@gmail.com">Gmail</a>
                </div>
                <div>
                    <a href="https://github.com/Yh010">Github</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
