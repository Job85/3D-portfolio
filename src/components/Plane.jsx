import { Grid } from "@react-three/drei";
const Plane = () => {
    return (
        <mesh rotation={[0, Math.PI / 2, 0.2]}>
            <Grid
                infiniteGrid={true}
                sectionColor={'#6f00ff'}
                sectionSize={0.2}
                sectionThickness={2}
            />
        </mesh>
    );
}

export default Plane