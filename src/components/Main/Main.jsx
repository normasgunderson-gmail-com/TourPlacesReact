import './Main.scss';
import Card from "./Card";
import { data } from "../../helper/data";

export const Main = () => {
  console.table(data);
  // if (data) {
  //   console.log('data exists');
  // }
  //shorthand if
  data && console.log('data exists');
  //optional chaining
  // data?.map
  return (
  <div className="main">
    {/* <Card title={data[2].title} /> */}
    {data?.map((item) => (
      // <Card title={item.title} image={item.image} desc={item.desc} />
      <Card {...item}/>
    ))}
    </div>
  );
};

export default Main;