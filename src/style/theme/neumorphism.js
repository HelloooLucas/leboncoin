import colors from "./colors";

const neumorphism = {
	outset: {
		background: colors.background,
		boxShadow: `
			5px 5px 10px ${colors.darker},
			-5px -5px 10px ${colors.lighter}
		`,
		borderRadius: 10
	},
	inset: {
		background: colors.background,
		boxShadow: `
			inset 3px 3px 6px ${colors.darker},
			inset -3px -3px 6px ${colors.lighter}
		`,
		borderRadius: 10
	}
};

export default neumorphism;
