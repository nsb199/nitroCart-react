import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function Item({image,phoneName,price,id,cartCount,handleCartRemove,handleIncrement,handleDecrement,index}) {
  return (
    <>
      <div className="item-container">
        <div className="items">
          <div className="img">
            <img
              src={image}
              alt=""
            />
          </div>

          <div className="phone-details">
            <h4>{phoneName}</h4>
            <p>$ {price}</p>
            <button onClick={(e)=>{handleCartRemove(e,id)}}>Remove</button>
          </div>
        </div>

        <div className="counter">
          <ArrowBackIosNewIcon  style={{"fontSize":"18px","cursor":"pointer"}} onClick={()=>handleDecrement(index)} />
          <span>{cartCount}</span>
          <ArrowForwardIosIcon style={{"fontSize":"18px","cursor":"pointer"}} onClick={()=>{handleIncrement(index)}}/>
        </div>
      </div>
    </>
  );
}

export default Item;
