import { OrbitControls } from "@react-three/drei"
import Plane from "./Plane"

const MyScene = () => {

    return (
        <>
            <OrbitControls />
            <ambientLight />
            <Plane position={[0, 4, 0]} />
        </>
    )
}

export default MyScene