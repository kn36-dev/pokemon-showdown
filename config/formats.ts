// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: import("../sim/dex-formats").FormatList = [
	// Fusion
	///////////////////////////////////////////////////////////////////

	{ section: "Fusion Doubles" },
	{
		name: "[Gen 9] National Dex Generation 9",
		mod: "gen9",
		gameType: "doubles",
		ruleset: [
			"Standard NatDex",
			"Sleep Moves Clause",
			"!Sleep Clause Mod",
			"Terastal Clause",
		],
		banlist: ["Hidden Power", "Pursuit"],
	},
	{
		name: "[Gen 9] National Dex Generation 8",
		mod: "gen9",
		gameType: "doubles",
		ruleset: [
			"Standard NatDex",
			"Sleep Moves Clause",
			"!Sleep Clause Mod",
			"Only Gen 1",
			"Terastal Clause",
		],
		banlist: ["Hidden Power", "Pursuit"],
	},
	{
		name: "[Gen 9] National Dex Generation 7",
		mod: "gen9",
		gameType: "doubles",
		ruleset: [
			"Standard NatDex",
			"Sleep Moves Clause",
			"!Sleep Clause Mod",
			"Only Gen 1",
			"Terastal Clause",
		],
		banlist: ["Hidden Power", "Pursuit"],
	},
	{
		name: "[Gen 9] National Dex Generation 6",
		mod: "gen9",
		gameType: "doubles",
		ruleset: [
			"Standard NatDex",
			"Sleep Moves Clause",
			"!Sleep Clause Mod",
			"Only Gen 1",
			"Terastal Clause",
		],
		banlist: ["Hidden Power", "Pursuit"],
	},
	{
		name: "[Gen 9] National Dex Generation 5",
		mod: "gen9",
		gameType: "doubles",
		ruleset: [
			"Standard NatDex",
			"Sleep Moves Clause",
			"!Sleep Clause Mod",
			"Only Gen 1",
			"Terastal Clause",
		],
		banlist: ["Hidden Power", "Pursuit"],
	},
	{
		name: "[Gen 9] National Dex Generation 4",
		mod: "gen9",
		gameType: "doubles",
		ruleset: [
			"Standard NatDex",
			"Sleep Moves Clause",
			"!Sleep Clause Mod",
			"Only Gen 1",
			"Terastal Clause",
		],
		banlist: ["Hidden Power", "Pursuit"],
	},
	{
		name: "[Gen 9] National Dex Generation 3",
		mod: "gen9",
		gameType: "doubles",
		ruleset: [
			"Standard NatDex",
			"Sleep Moves Clause",
			"!Sleep Clause Mod",
			"Only Gen 1",
			"Terastal Clause",
		],
		banlist: ["Hidden Power", "Pursuit"],
	},
	{
		name: "[Gen 9] National Dex Generation 2",
		mod: "gen9",
		gameType: "doubles",
		ruleset: [
			"Standard NatDex",
			"Sleep Moves Clause",
			"!Sleep Clause Mod",
			"Only Gen 1",
			"Terastal Clause",
		],
		banlist: ["Hidden Power", "Pursuit"],
	},
	{
		name: "[Gen 9] National Dex Generation 1",
		mod: "gen9",
		gameType: "doubles",
		ruleset: [
			"Standard NatDex",
			"Sleep Moves Clause",
			"!Sleep Clause Mod",
			"Only Gen 1",
			"Terastal Clause",
		],
		banlist: ["Hidden Power", "Pursuit"],
	},
	{ section: "Fusion VGC" },
	{
		name: "[Gen 9] National Dex Generation 9 VGC",
		mod: "gen9",
		gameType: "doubles",
		ruleset: [
			"Terastal Clause",
			"Standard NatDex",
			"Item Clause = 1",
			"Adjust Level Down = 50",
			"Picked Team Size = Auto",
			// '!! Adjust Level = 50',
			// 'Open Team Sheets', // Forces OTS for all matches in this format
			"Force Open Team Sheets", // Forces OTS for all matches in this format
		],
		banlist: ["Hidden Power", "Pursuit"],
	},
	{
		name: "[Gen 9] National Dex Generation 8 VGC",
		mod: "gen9",
		gameType: "doubles",
		ruleset: [
			"Terastal Clause",
			"Standard NatDex",
			"Item Clause = 1",
			"Adjust Level Down = 50",
			"Picked Team Size = Auto",
			"!! Adjust Level = 50",
			"Open Team Sheets", // Forces OTS for all matches in this format
			"Force Open Team Sheets", // Forces OTS for all matches in this format
		],
		banlist: ["Hidden Power", "Pursuit"],
	},
	{
		name: "[Gen 9] National Dex Generation 7 VGC",
		mod: "gen9",
		gameType: "doubles",
		ruleset: [
			"Terastal Clause",
			"Standard NatDex",
			"Item Clause = 1",
			"Adjust Level Down = 50",
			"Picked Team Size = Auto",
			"!! Adjust Level = 50",
			"Open Team Sheets", // Forces OTS for all matches in this format
			"Force Open Team Sheets", // Forces OTS for all matches in this format
		],
		banlist: ["Hidden Power", "Pursuit"],
	},
	{
		name: "[Gen 9] National Dex Generation 6 VGC",
		mod: "gen9",
		gameType: "doubles",
		ruleset: [
			"Terastal Clause",
			"Standard NatDex",
			"Item Clause = 1",
			"Adjust Level Down = 50",
			"Picked Team Size = Auto",
			"!! Adjust Level = 50",
			"Open Team Sheets", // Forces OTS for all matches in this format
			"Force Open Team Sheets", // Forces OTS for all matches in this format
		],
		banlist: ["Hidden Power", "Pursuit"],
	},
	{
		name: "[Gen 9] National Dex Generation 5 VGC",
		mod: "gen9",
		gameType: "doubles",
		ruleset: [
			"Terastal Clause",
			"Standard NatDex",
			"Item Clause = 1",
			"Adjust Level Down = 50",
			"Picked Team Size = Auto",
			"!! Adjust Level = 50",
			"Open Team Sheets", // Forces OTS for all matches in this format
			"Force Open Team Sheets", // Forces OTS for all matches in this format
		],
		banlist: ["Hidden Power", "Pursuit"],
	},
	{
		name: "[Gen 9] National Dex Generation 4 VGC",
		mod: "gen9",
		gameType: "doubles",
		ruleset: [
			"Terastal Clause",
			"Standard NatDex",
			"Item Clause = 1",
			"Adjust Level Down = 50",
			"Picked Team Size = Auto",
			"!! Adjust Level = 50",
			"Open Team Sheets", // Forces OTS for all matches in this format
			"Force Open Team Sheets", // Forces OTS for all matches in this format
		],
		banlist: ["Hidden Power", "Pursuit"],
	},
	{
		name: "[Gen 9] National Dex Generation 3 VGC",
		mod: "gen9",
		gameType: "doubles",
		ruleset: [
			"Terastal Clause",
			"Standard NatDex",
			"Item Clause = 1",
			"Adjust Level Down = 50",
			"Picked Team Size = Auto",
			"!! Adjust Level = 50",
			"Open Team Sheets", // Forces OTS for all matches in this format
			"Force Open Team Sheets", // Forces OTS for all matches in this format
		],
		banlist: ["Hidden Power", "Pursuit"],
	},
	{
		name: "[Gen 9] National Dex Generation 2 VGC",
		mod: "gen9",
		gameType: "doubles",
		ruleset: [
			"Terastal Clause",
			"Standard NatDex",
			"Item Clause = 1",
			"Adjust Level Down = 50",
			"Picked Team Size = Auto",
			"!! Adjust Level = 50",
			"Open Team Sheets", // Forces OTS for all matches in this format
			"Force Open Team Sheets", // Forces OTS for all matches in this format
		],
		banlist: ["Hidden Power", "Pursuit"],
	},
	{
		name: "[Gen 9] National Dex Generation 1 VGC",
		mod: "gen9",
		gameType: "doubles",
		ruleset: [
			"Terastal Clause",
			"Standard NatDex",
			"Item Clause = 1",
			"Adjust Level Down = 50",
			"Picked Team Size = Auto",
			"!! Adjust Level = 50",
			"Open Team Sheets", // Forces OTS for all matches in this format
			"Force Open Team Sheets", // Forces OTS for all matches in this format
		],
		banlist: ["Hidden Power", "Pursuit"],
	},
];
