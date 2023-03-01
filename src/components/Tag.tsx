type TagProps = {
   color: string;
   text: string;
 };
 
 const Book: React.FunctionComponent<TagProps> = (props) => {
   const { color, text } = props;
 
   return (
     <div>
       <h1>color: {color}</h1>
       <h1>text: {text}</h1>
     </div>
   );
 };
 
 function Tag() {
   return (
     <div>
       <Book {...{ color: "blue", text: "hello world" }} />
     </div>
   );
 }
 
 export default Tag;