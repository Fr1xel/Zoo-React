import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addAnimals, loadingEnded } from "../redux/user"
import "./animals.css"
import axios from "axios"


const Animals = () => {
    const animalsInfo = useSelector((state) => state.user.user.animalsInfo)
    const isLoadingDone = useSelector((state) => state.user.user.isLoaded)
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchAnimals = async() => {
            const data = await axios.get("https://zoo-animal-api.herokuapp.com/animals/rand/10")
            dispatch(addAnimals(data.data))
            dispatch(loadingEnded(true))
        }
        fetchAnimals()
    }, [])
    return(
        <>{
            isLoadingDone ?
        animalsInfo?.map(animal => {
            return(
                <div key={animal.id}>
                    <h1>{animal.name}</h1>
                    <h2>{animal.animal_type}</h2>
                    <h3>{animal.diet}</h3>
                </div>
            )
        }
        )
        :
        <div className="loader">
        </div>
    }</>
    )
}

export default Animals