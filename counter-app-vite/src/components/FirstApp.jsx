//yarn add prop-types
import  PropTypes from "prop-types"; 

/*const value = {
    message: 'Bievenido',
    title: 'Alejandro'
};

const getMsg = () => {
    return value.message;
}*/

export const FirstApp = ({title , subTitle, name}) => {

    //const { message, title } = value;


    return (
        <>
           {/*
            <h1>{ `${message} ${title}` }</h1>
            <h1>Title: {nuevoTitle}</h1>
            <h1>Subtitle: {subTitle}</h1>
            <h2>{ JSON.stringify(value) }</h2>
            <h2>{ getMsg() }</h2>
            <p>Es un parrafo</p>
            */}
            <h1>{ title }</h1> 
            <p>{ subTitle }</p>
            <p>{ name }</p>
        </>
    )
}

/*FirstApp.propTypes = {
    nuevoTitle: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    //nuevoTitle: 'Siiiiuuuu'
}*/

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}