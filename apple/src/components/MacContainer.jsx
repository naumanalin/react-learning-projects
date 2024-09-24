import React from 'react';

const MacContainer = () => {
  return (
    <>
          <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial  />
      </mesh>
    </>

  );
};

export default MacContainer;
