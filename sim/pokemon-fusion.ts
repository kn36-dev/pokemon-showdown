export const getFusionTypes = (headTypes: string[], bodyTypes: string[]) => {
	const headPokemonPrimaryType = headTypes[0];
	const headPokemonSecondaryType = headTypes[1];

	/** * RULE: Normal/Flying Override
	 * Standard fusions use the head's primary type. However, for Normal/Flying types
	 * (common birds), we prioritize 'Flying' to make the fusion more unique.
	 */

	const isNormalFlyingPokemon = headPokemonPrimaryType === 'Normal' && headPokemonSecondaryType === 'Flying';
	const effectiveHeadType = isNormalFlyingPokemon ? headPokemonSecondaryType : headPokemonPrimaryType;

	const bodyPokemonPrimaryType = bodyTypes[0];
	const bodyPokemonSecondaryType = bodyTypes[1];

	// If the body has a secondary type
	if (bodyPokemonSecondaryType) {
		// Not the same with head primary type, use it directly.
		// Fire + Grass/Water = Fire/Water
		if (bodyPokemonSecondaryType !== effectiveHeadType) {
			return [effectiveHeadType, bodyPokemonSecondaryType];
		}

		// Same with head primary type, use body secondary type instead.
		// Fire + Dragon/Fire = Fire/Dragon
		if (bodyPokemonSecondaryType === effectiveHeadType) {
			return [effectiveHeadType, bodyPokemonPrimaryType];
		}
	}

	// If body only has 1 type and is not the same, use it directly.
	// Fire/Water + Grass = Fire/Grass
	if (bodyPokemonPrimaryType !== effectiveHeadType) {
		return [effectiveHeadType, bodyPokemonPrimaryType];
	}

	// If body only has 1 type and is the same with head primary type,
	// then we ONLY use head 1st type
	// So Bug/Flying + Bug = Bug
	return [headPokemonPrimaryType];
};
export const getFusionWeight = (headWeight: number, bodyWeight: number) => {
	return (headWeight + bodyWeight) / 2;
};
export const getFusionBaseStats = (headStats: StatsTable, bodyStats: StatsTable) => {
	return _internal_getBaseStats(headStats, bodyStats);
};

const _internal_getBaseStats = (headStats: StatsTable, bodyStats: StatsTable) => {
	return {
		hp: Math.floor((2 * Number(headStats.hp) / 3) + (1 * Number(bodyStats.hp) / 3)),
		atk: Math.floor((1 * Number(headStats.atk) / 3) + (2 * Number(bodyStats.atk) / 3)),
		def: Math.floor((1 * Number(headStats.def) / 3) + (2 * Number(bodyStats.def) / 3)),
		spa: Math.floor((2 * Number(headStats.spa) / 3) + (1 * Number(bodyStats.spa) / 3)),
		spd: Math.floor((2 * Number(headStats.spd) / 3) + (1 * Number(bodyStats.spd) / 3)),
		spe: Math.floor((1 * Number(headStats.spe) / 3) + (2 * Number(bodyStats.spe) / 3)),
	};
};
