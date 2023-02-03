import { Box, Cylinder, Grid, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { mockFiada1Altura1, mockFiada2Altura1 } from "./mockObject3DList";

// interface CylinderProps {
//   props: MeshProps;
//   $args?: number[];
// }

// const Camera = ({ isZoom }: any) => {
//   const vec = new Vector3();

//   useFrame((state) => {
//     const step = 0.05;
//     const x = isZoom ? 0 : 5;
//     const y = isZoom ? 10 : 5;
//     const z = isZoom ? 10 : 5;

//     state.camera.position.lerp(vec.set(x, y, z), step);
//     state.camera.lookAt(0, 0, 0);
//     state.camera.updateProjectionMatrix();
//   });

//   return null;
// };

const holdWidth = 27;
const holdLength = 27.1;

const RapierExample = () => {
  // const [isZoom, setZoom] = useState(false);
  // const toggleZoom = () => setZoom((active) => !active);
  // const CustomCylinder = ({ props, $args }: CylinderProps) => {
  //   const cylinderRef = useRef<Mesh>(null!);
  //   let geometryArgs = [0.5, 0.5, 1];

  //   useFrame((state) => {
  //     cylinderRef.current.rotation.x = 4.75;
  //   });

  //   return (
  //     <mesh {...props} ref={cylinderRef} onClick={toggleZoom}>
  //       <cylinderBufferGeometry
  //         attach="geometry"
  //         args={$args ?? geometryArgs}
  //       />
  //       <meshStandardMaterial
  //         attach="material"
  //         color={"gray"}
  //       ></meshStandardMaterial>
  //     </mesh>
  //   );
  // };

  return (
    <div
      style={{
        width: "97vw",
        height: "97vh",
      }}
    >
      <Suspense>
        <Canvas shadows>
          {/* <Physics> */}
          {/* <gridHelper args={[holdWidth, holdWidth]} scale={[1, 1, 1]}/> */}
          <gridMaterial></gridMaterial>
          <Grid
            args={[holdWidth, holdLength]}
            cellSize={1}
            cellThickness={1}
          ></Grid>
          <pointLight position={[10, 10, 15]} />

          <group>
            {mockFiada1Altura1.map((object: any) => {
              return (
                // <RigidBody>
                <Cylinder
                  args={object.args}
                  position={object.position}
                  rotation={[4.7, 0, 0]}
                >
                  <meshStandardMaterial
                    attach="material"
                    color={"gray"}
                  ></meshStandardMaterial>
                </Cylinder>
                // </RigidBody>
              );
            })}
          </group>

          <group>
            {mockFiada2Altura1.map((object: any) => {
              return (
                // <RigidBody lockRotations colliders="hull">
                <Cylinder
                  args={object.args}
                  position={object.position}
                  rotation={[4.7, 0, 0]}
                >
                  <meshStandardMaterial
                    attach="material"
                    color={"gray"}
                  ></meshStandardMaterial>
                </Cylinder>
                // </RigidBody>
              );
            })}
          </group>

          {/* <CuboidCollider position={[0, 0, 0]} args={[10, 0, 10]}>
              <meshPhysicalMaterial attach="material">
                <Attractor strength={2} position={[-2.1, -10, 0]} range={50} />
              </meshPhysicalMaterial>
            </CuboidCollider> */}

          {/* <Box
                args={[10, 0, 10]}
                children={
                  <meshStandardMaterial
                    attach="material"
                    color={"gray"}
                    opacity={0.1}
                    transparent
                  >
                    <Attractor strength={2} position={[-5, -5, 0]} />
                  </meshStandardMaterial>
                }
              /> */}

          {/* //PAREDE */}
          {/* <RigidBody position={[0, 0, 0]} type="fixed">
              <Box
                args={[5, 0, holdLength / 2]}
                position={[-5.95, 2.4, 0]}
                rotation={[0, 0, 1.575]}
              >
                <meshStandardMaterial
                  attach="material"
                  opacity={0.2}
                  transparent
                />
              </Box>
            </RigidBody>

            <RigidBody position={[0, 0, 0]} type="fixed">
              <Box
                args={[5, 0, holdWidth / 2]}
                position={[0, 2.4, -8.42]}
                rotation={[0, 1.572, 1.571]}
              >
                <meshStandardMaterial
                  attach="material"
                  opacity={0.06}
                  transparent
                />
              </Box>
            </RigidBody> */}

          {/* <ContactShadows
        scale={20}
        blur={0.4}
        opacity={0.2}
        position={[-0, -1.5, 0]}
      /> */}
          <Box
            args={[holdWidth, holdLength, 0.1]}
            position={[0, -0.2, 0]}
            rotation={[1.574, 0, 0]}
          >
            <meshStandardMaterial opacity={0.25} transparent />
          </Box>
          <Box
            args={[2.5, holdLength, 0.1]}
            position={[holdLength / 1.88, 0.7, 0]}
            rotation={[1.574, 0.8, 0]}
          >
            <meshStandardMaterial opacity={0.9} transparent />
          </Box>
          <Box
            args={[2.5, holdLength, 0.1]}
            position={[-holdLength / 1.88, 0.7, 0]}
            rotation={[1.574, -0.8, 0]}
          >
            <meshStandardMaterial opacity={0.9} transparent />
          </Box>
          <OrbitControls />
          {/* <Camera isZoom={isZoom} /> */}
          {/* </Physics> */}
          {/* <Environment preset="studio" />
          <fog attach="fog" args={["#000", 2, 100]} /> */}
        </Canvas>
      </Suspense>
    </div>
  );
};

export default RapierExample;
