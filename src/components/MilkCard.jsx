import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MilkCard = ({ milk, milks, setMilks }) => {
  const { _id, name, quantity, supplier, taste, photo } = milk;

  const handleDeleteMilk = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/milk/${_id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 1) {
              Swal.fire({
                title: "Deleted!",
                text: "Your milk has been deleted.",
                icon: "success",
              });
              const remaining = milks.filter((mk) => mk._id !== _id);
              setMilks(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="Milk" />
      </figure>
      <div className="flex justify-between w-full pr-4">
        <div>
          <h2 className="card-title">Name: {name}</h2>
          <p>{quantity}</p>
          <p>{supplier}</p>
          <p>{taste}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="btn-group btn-group-vertical space-y-4">
            <button className="btn">View</button>
            <Link to={`updateMilk/${_id}`}>
              <button className="btn">Edit</button>
            </Link>
            <button
              onClick={() => handleDeleteMilk(_id)}
              className="btn bg-orange-500"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MilkCard;
