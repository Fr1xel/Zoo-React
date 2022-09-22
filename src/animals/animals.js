import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAnimals } from "../redux/user";
import "./animals.css";

const Animals = () => {
  const animalsInfo = useSelector((state) => state.user.animals.animalsInfo);
  const isLoadingDone = useSelector((state) => state.user.animals.isLoaded);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAnimals());
  }, []);

  return (
    <>
      {isLoadingDone ? (
        animalsInfo?.map(animal => {
          return (
            <div key={animal.id}>
              <h1>Name: {animal.name}</h1>
              <h2>Type: {animal.animal_type}</h2>
              <h3>Diet: {animal.diet}</h3>
            </div>
          );
        })
      ) : (
        <div className="spinner">
          <img
            src={require("../assets/loading.gif")}
            className="spinner-img"
          ></img>
        </div>
      )}
    </>
  );
};

export default Animals;
