import React from 'react';
import { useVideoConfig } from 'remotion';
import { RotateMicroscopeCircle } from './RotateMicroscopeCircle';

export const RotateMicroscope: React.FC<{
	planetaryDuration: number,
	planetaryRadius: number,
	circleRadius: number,
}> = ({
	planetaryDuration,
	planetaryRadius,
	circleRadius,
}) => {
		const { height, width } = useVideoConfig();

		return (
			<div className='w-full h-full'>
				<svg className='w-full h-full'>
					<defs>
						<filter id="blur">
							<feGaussianBlur in="SourceGraphic" stdDeviation="10" />
						</filter>
						<mask id="mask">
							<rect width={width} height={height} fill="white" />
							<RotateMicroscopeCircle
								planetaryDuration={planetaryDuration}
								planetaryRadius={planetaryRadius}
								circleRadius={circleRadius}
								rotationStart={0}
								rotationEnd={Math.PI * 0.5}
							/>
							<RotateMicroscopeCircle
								planetaryDuration={planetaryDuration}
								planetaryRadius={planetaryRadius}
								circleRadius={circleRadius}
								rotationStart={Math.PI * 0.5}
								rotationEnd={Math.PI}
							/>
						</mask>
					</defs>
					<rect id="bg" x="0" y="0" width={width} height={height} fill="#000000" mask="url(#mask)" />
				</svg>
			</div>
		);
	};
