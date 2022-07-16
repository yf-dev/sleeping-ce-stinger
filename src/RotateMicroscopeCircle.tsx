import React from 'react';
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

export const RotateMicroscopeCircle: React.FC<{
	planetaryDuration: number,
	planetaryRadius: number,
	circleRadius: number,
	rotationStart: number,
	rotationEnd: number,
}> = (
	{
		planetaryDuration,
		planetaryRadius,
		circleRadius,
		rotationStart,
		rotationEnd,
	}
) => {
		const frame = useCurrentFrame();
		const { height, width } = useVideoConfig();

		const planetaryInterpolation = interpolate(frame, [0, planetaryDuration], [rotationStart, rotationEnd], {
			easing: Easing.inOut(Easing.cubic),
			extrapolateRight: 'clamp',
		});

		const xCenter = width * 0.5;
		const yCenter = height * 0.5 - planetaryRadius;

		const xDelta = Math.cos(planetaryInterpolation) * planetaryRadius;
		const yDelta = Math.sin(planetaryInterpolation) * planetaryRadius;

		return (
			<circle
				r={circleRadius}
				cx={xCenter + xDelta}
				cy={yCenter + yDelta}
				fill="black"
				filter="url(#blur)" />
		);
	};
