import { Sky } from "@react-three/drei";

const Background = () => {
    return (
        <>
            <Sky
                distance={100}
                sunPosition={[0, -0.001, -1]}
                inclination={0} // determines the elevation angle of the sun above the horizon
                azimuth={0.25} // set the azimuthal angle of the sun. defines the horizontal angle of the sun's position around the horizon. value is in radians
                mieCoefficient={1} // controls the intensity of the haze particles in the atmosphere. higher values result in a more pronounced haze effect
                mieDirectionalG={0.5} // adjusts the scattering phase function of the atmosphere. higher values make the scattering more forward-directed, resulting in a sharper and more focused light
                rayleigh={50} // specifies the scattering coefficient for Rayleigh scattering. it influences the color of the sky, with lower values leading to a darker sky and higher producing a brighter sky
                turbidity={1} // determines the atmospheric turbidity, affecting the overall haziness and clarity of the sky. higher values result in a hazier sky
            />
        </>
    );
}

export default Background