import { OrbitControls } from "@react-three/drei";
import Plane from "./Plane";
import Background from "./Background";

const MyScene = () => {

    return (
        <>
            <OrbitControls />
            <ambientLight />
            <Background />
            <Plane position={[0, 1, 0]} />
        </>
    )
}

export default MyScene