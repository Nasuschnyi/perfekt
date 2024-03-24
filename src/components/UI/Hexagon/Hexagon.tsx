import React from 'react';
import { HexGrid, Hexagon } from 'react-hexgrid';

const HexGridExample: React.FC = () => {
	return (
		<HexGrid width={600} height={600} viewBox="-50 -50 100 100">
			<Hexagon q={0} r={0} s={0} />
			<Hexagon q={1} r={0} s={0} />
			<Hexagon q={-1} r={1} s={0} />
			<Hexagon q={0} r={1} s={0} />
			<Hexagon q={1} r={1} s={0} />
			<Hexagon q={-1} r={2} s={0} />
			<Hexagon q={0} r={2} s={0} />
			<Hexagon q={1} r={2} s={0} />
		</HexGrid>
	);
};

export default HexGridExample;
