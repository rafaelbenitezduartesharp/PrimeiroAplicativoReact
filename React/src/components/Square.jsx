const getWeekday =  (today =  Date) => {
    return new Intl.DateTimeFormat('pt-Br', { weekday: 'long' }).format(today);

}
 
 const Square = () => {
    const name = String = 'Naruto';
    const avatar = String = 'https://tse1.mm.bing.net/th?id=OIP.KJbYWbf9sEL20GIQaVT_tAHaER&pid=Api&P=0&h=180';
    const today = Date;

return(
    <>
    <h1>Name:{name} - {getWeekday(today)} </h1>
   
    <img 
    src={avatar}
    alt= {name}
      />
    </>
);
}

export default Square;