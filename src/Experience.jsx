import { Physics } from '@react-three/rapier';
import Lights from './Lights.jsx';
import { Level } from './Level.jsx';
import Player from './Player.jsx';
import useGame from './stores/useGame.jsx';

export default function Experience() {
  const blocksCount = useGame((state) => state.blocksCount);
  const blocksSeed = useGame((state) => state.blocksSeed);
  return (
    <>
      <color args={['#211362']} attach="background" />

      <Physics gravity={[0, -9.81, 0]}>
        <Lights />

        <Level count={blocksCount} seed={blocksSeed} />
        <Player />
      </Physics>
    </>
  );
}
