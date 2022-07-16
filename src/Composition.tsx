import { useVideoConfig } from 'remotion'
import { AbsoluteFill, Series, Sequence, Img, staticFile } from 'remotion';
import { RotateMicroscope } from './RotateMicroscope';
import { ZoomMicroscope } from './ZoomMicroscope';

export const MyComposition: React.FC<{ bg: string; }> = ({ bg }) => {
	const { fps, width, height } = useVideoConfig();
	const planetaryRadius = Math.max(width, height) * 1.3
	const zoomOutCircleRadius = Math.sqrt(width * width + height * height) * 0.5
	const zoomInCircleRadius = Math.min(width, height) * 0.5 * 1.3
	const planetaryDuration = fps
	const zoomDuration = fps * 0.3
	return (
		<AbsoluteFill className='bg-transparent'>
			<Sequence
				name="Background Image"
				from={zoomDuration + planetaryDuration * 0.5}
				durationInFrames={planetaryDuration}>
				<Img className="w-full h-full object-cover" src={staticFile(bg)} />
			</Sequence>
			<Series>
				<Series.Sequence
					name="ZoomInMicroscope"
					durationInFrames={zoomDuration}>
					<ZoomMicroscope
						zoomDuration={zoomDuration}
						radiusFrom={zoomOutCircleRadius}
						radiusTo={zoomInCircleRadius}
					/>
				</Series.Sequence>
				<Series.Sequence
					name="RotateMicroscope1"
					durationInFrames={planetaryDuration}>
					<RotateMicroscope
						planetaryDuration={planetaryDuration}
						planetaryRadius={planetaryRadius}
						circleRadius={zoomInCircleRadius}
					/>
				</Series.Sequence>
				<Series.Sequence
					name="RotateMicroscope2"
					durationInFrames={planetaryDuration}>
					<RotateMicroscope
						planetaryDuration={planetaryDuration}
						planetaryRadius={planetaryRadius}
						circleRadius={zoomInCircleRadius}
					/>
				</Series.Sequence>
				<Series.Sequence
					name="ZoomOutMicroscope"
					durationInFrames={zoomDuration}>
					<ZoomMicroscope
						zoomDuration={zoomDuration}
						radiusFrom={zoomInCircleRadius}
						radiusTo={zoomOutCircleRadius}
					/>
				</Series.Sequence>
			</Series>
		</AbsoluteFill>
	);
};
