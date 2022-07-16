import { Composition } from 'remotion';
import { MyComposition } from './Composition';
import './style.css';

export const RemotionVideo: React.FC = () => {
	const fps = 60;

	return (
		<>
			<Composition
				id="Transition"
				component={MyComposition}
				durationInFrames={fps * 2.6}
				fps={fps}
				width={1920}
				height={1080}
				defaultProps={{
					bg: "bg-1.png",
				}}
			/>
		</>
	);
};
