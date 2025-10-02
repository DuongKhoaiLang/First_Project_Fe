


function Button({content,className}){
    console.log(className);
    
    return (
        <button className={className}>{content}</button>
    )
}

export default Button