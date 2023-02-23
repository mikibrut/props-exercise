const Card = (props) => {
    const { client } = props;

let leng;
switch (client.country){
    case 'en':
        leng = 'Hello';
    break;
    case 'de':
        leng = 'Hallo';
    break;
    case 'fr':
        leng = 'Bonjour';
    break;
    case 'es':
        leng = 'Hola';
    break;
    default: 
    break;
}

// const premium = client.isPremium ? "Yes" : "No";
const style = client.isPremium ? 'premium' : null;
    return(
        <div className = {`card ${style}`}>

            <h5>{leng} {client.name}</h5>
            <p>Age: {client.age}</p>
            <p>Is premium client? {/*premium*/client.isPremium ? "Yes" : "No"}</p>
        </div>
    )
}

export default Card;