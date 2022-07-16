import React from 'react';
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

export const ZoomMicroscope: React.FC<{
	zoomDuration: number,
	radiusFrom: number,
	radiusTo: number,
}> = ({
	zoomDuration,
	radiusFrom,
	radiusTo,
}) => {
		const frame = useCurrentFrame();
		const { height, width } = useVideoConfig();

		const xCenter = width * 0.5;
		const yCenter = height * 0.5;

		const circleRadius = interpolate(frame, [0, zoomDuration], [radiusFrom, radiusTo], {
			easing: Easing.inOut(Easing.cubic),
			extrapolateRight: 'clamp',
		});

		return (
			<div className='w-full h-full'>
				<svg className='w-full h-full'>
					<defs>
						<filter id="blur">
							<feGaussianBlur in="SourceGraphic" stdDeviation="10" />
						</filter>
						<mask id="mask">
							<rect width={width} height={height} fill="white" />
							<circle
								r={circleRadius}
								cx={xCenter}
								cy={yCenter}
								fill="black"
								filter="url(#blur)" />
						</mask>
					</defs>
					<rect id="bg" x="0" y="0" width={width} height={height} fill="#000000" mask="url(#mask)" />
				</svg>
			</div>
		);
	};
