import { useSelector } from "react-redux"


const Animals = () => {
    const { AnimalsInfo } = useSelector((state) => state.user)
    console.log(AnimalsInfo)
    return(
        <>
        {/*animalsInfo.map(animal => {
            return(
                <div>
                    <h1>{animal.name}</h1>
                    <h2>{animal.age}</h2>
                    <h3>{animal.food}</h3>
                </div>
            )
        })*/}
        </>
    )
}

export default Animals