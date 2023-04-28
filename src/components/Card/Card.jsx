import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { useState } from "react";

const Card = ({id, name, status, species, gender, origin, image, onClose, addFav, removeFav}) => {
   
   const [isFav, setIsFav] = useState (false)

   const handleFavorite = () => {
      if (isFav) {
         
         setIsFav(false);
         removeFav (id)
      } else {

            setIsFav (true);
            addFav ({id, name, status, species, gender, origin, image, onClose})
      }
   }
   
   return (

      <div className="container">

         {isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }

         <button onClick={() => onClose(id)}>X</button>

         <Link to={`/detail/${id}`}>
         <h2>{name}</h2>
         </Link>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <img src={image} alt='' />
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {

      addFav: (character) =>{
         dispatch (addFav(character))
      },

      removeFav: (id) => {
         dispatch (removeFav(id))
      }

   }
}

export default connect (null, mapDispatchToProps) (Card); 