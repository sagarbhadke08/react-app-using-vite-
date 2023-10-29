export default function TabButton({ children , onSelect}) {
  
  // console.log("tab Button component")
    return (
    <li>
      <button onClick={onSelect}>{children}</button>
      
    </li>
  );
  //* If u want to use function as a value then wwe will write like this 
  //?<button onClick={handleClick}>{children}</button> and this value pass to the onClick prop and it is executed by react
}
