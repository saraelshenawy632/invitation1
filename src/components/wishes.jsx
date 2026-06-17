import { useState } from "react";
import "./wishes.css";
import { FaTrash } from "react-icons/fa";


function Wishes() {


  const [name,setName] = useState("");

  const [message,setMessage] = useState("");



  const [wishes,setWishes] = useState(

    JSON.parse(localStorage.getItem("wishes")) || []

  );




  const addWish = (e)=>{


    e.preventDefault();


    if(!name || !message) return;




    const newWish = {

      id: Date.now(),

      name,

      message

    };



    const updated = [

      ...wishes,

      newWish

    ];



    setWishes(updated);


    localStorage.setItem(

      "wishes",

      JSON.stringify(updated)

    );



    setName("");

    setMessage("");

  }






  const deleteWish = (id)=>{


    const updated = wishes.filter(

      (wish)=> wish.id !== id

    );



    setWishes(updated);



    localStorage.setItem(

      "wishes",

      JSON.stringify(updated)

    );


  }






  return (


    <section className="wishes">



      <div className="wish-card">



        <h1>
          Send Your Wishes
        </h1>



        <p>
          Leave a beautiful message for Yosif & Horia 🤍
        </p>






        <form onSubmit={addWish}>



          <input

          type="text"

          placeholder="Your Name"

          value={name}

          onChange={(e)=>setName(e.target.value)}

          />






          <textarea

          placeholder="Write your message..."

          value={message}

          onChange={(e)=>setMessage(e.target.value)}

          />






          <button>

            Send Wish 

          </button>




        </form>






        <div className="comments">



        {

          wishes.length === 0 ? (

            <p className="empty">
              No wishes yet 🤍 Be the first one!
            </p>

          ) : (


          wishes.map((wish)=>(



            <div 
            className="comment"
            key={wish.id}
            >




              <div className="avatar">

                {wish.name.charAt(0).toUpperCase()}

              </div>





              <div className="comment-text">



                <h3>

                  {wish.name}

                </h3>



                <p>

                  {wish.message}

                </p>



              </div>






              <button

              className="delete-btn"

              onClick={()=>deleteWish(wish.id)}

              >

                <FaTrash/>

              </button>





            </div>



          ))

          )

        }





        </div>





      </div>



    </section>


  )

}


export default Wishes;