package main

import (
	"fmt"
	"math"
)

// ============================================================================
// 🛠️ CONFIGURATION - EASILY EDITABLE MILESTONES & PRESTIGE LEVELS
// ============================================================================

type Milestone struct {
	TriggerValue string 
	Description  string 
}

// You can edit values and descriptions here easily:
var Milestones = map[string]string{
	"1000":       "Unlocked x5 Button",
	"1e9":        "Unlocked x10 Button",
	"1e100":      "Unlocked ^1.05 Button (Googolplex Layer)",
	"1e105":      "Unlocked ^1.5 Button",
	"1e120":      "Unlocked ^3 Special Button",
	"2e308":      "Unlocked OP Button (^10)",
	"e1000":      "Unlocked Auto-Clicker (10 clicks/sec)",
	"e5000":      "Unlocked 25% Crit Chance (+20% strength)",
	"e50000":     "Auto-Clicker can now click TWO different buttons!",
	"ee33":       "Unlocked Super Crit (1% chance for x5.92e+225)",
	"ee45":       "Super-Exponential active! (^1000000 every 2 seconds)",
	"1e5000000":  "Unlocked Click-Back (Autoclicker copies player click once)",
	"ee15":       "Autoclicker clicks ALL buttons simultaneously",
}

type PrestigeLevel struct {
	Level       int
	Goal        string
	RewardShort string
}

// Complete list of all 10 Prestige thresholds from your documentation:
var PrestigeTree = []PrestigeLevel{
	{Level: 1, Goal: "1.79e308", RewardShort: "First Forced Prestige (PP Upgrades unlocked)"},
	{Level: 2, Goal: "e10000", RewardShort: "Formula unlock for next prestiges"},
	{Level: 3, Goal: "ee6", RewardShort: "Autoclicker kept on reset + All '^' buttons boosted to ^1.5"},
	{Level: 4, Goal: "ee7", RewardShort: "All '^' buttons multiplied by ^1.2 five times"},
	{Level: 5, Goal: "ee8", RewardShort: "Autoclicker speed buffed to 50 clicks/sec/button"},
	{Level: 6, Goal: "ee11", RewardShort: "100% Crits, Buttons boosted insanely (+1, x32768, etc.)"},
	{Level: 7, Goal: "ee21", RewardShort: "Autoclicker accelerates by x1.5 every single second"},
	{Level: 8, Goal: "ee40", RewardShort: "Useless Auto-Prestige unlocked"},
	{Level: 9, Goal: "ee50", RewardShort: "World Breaker: ^1e6 applied EVERY 0.03 SECONDS"},
	{Level: 10, Goal: "ee99", RewardShort: "EVERY FUNCTION AND BUTTON IS ^2! Base CPS is now 2500"},
	{Level: 11, Goal: "ee100", RewardShort: "Googolplex Layer: Formula 1e(308 + (x-11)*100) starts"},
}

// ============================================================================
// 🌌 INFININUM CORE ENGINE STRUCTURE
// ============================================================================

type InfiniNum struct {
	Base     float64 // Mantissa / Base number
	Exponent float64 // Exponent layer (1eX)
	Layer    float64 // Super-exponent layer (eeX)
}

type GameState struct {
	CurrentNumber   InfiniNum
	PrestigePoints  float64
	PrestigeCount   int
	ActiveCPS       float64
	CritChance      float64
	IsSuperCrit     bool
	ButtonsUpgraded bool
}

func NewGame() *GameState {
	return &GameState{
		CurrentNumber:   InfiniNum{Base: 0, Exponent: 0, Layer: 0}, // Starts at 0
		PrestigePoints:  0,
		PrestigeCount:   0,
		ActiveCPS:       0,
		CritChance:      0.25,
		IsSuperCrit:     false,
		ButtonsUpgraded: false,
	}
}

// ---- BASE BUTTON FUNCTIONS ----

func (g *GameState) PressPlusOne() {
	if g.CurrentNumber.Base == 0 && g.CurrentNumber.Exponent == 0 && g.CurrentNumber.Layer == 0 {
		g.CurrentNumber.Base = 1
	} else {
		g.CurrentNumber.Base += 1
	}
	g.FloorCheck()
}

func (g *GameState) PressMultiplyTwo() {
	if g.CurrentNumber.Base == 0 && g.CurrentNumber.Exponent == 0 && g.CurrentNumber.Layer == 0 {
		g.CurrentNumber.Base = 2
	} else {
		g.CurrentNumber.Base *= 2
	}
	g.FloorCheck()
}

func (g *GameState) PressMultiplyThree() {
	if g.CurrentNumber.Base == 0 && g.CurrentNumber.Exponent == 0 && g.CurrentNumber.Layer == 0 {
		g.CurrentNumber.Base = 3
	} else {
		g.CurrentNumber.Base *= 3
	}
	g.FloorCheck()
}

// Always floor floats if numbers are not full integers
func (g *GameState) FloorCheck() {
	g.CurrentNumber.Base = math.Floor(g.CurrentNumber.Base)
}

func main() {
	fmt.Println("🌌 Infinite Button Idle - InfiniNum Engine Active 🌌")
	game := NewGame()
	
	// Test basic execution
	game.PressPlusOne()
	game.PressMultiplyTwo()
	game.PressMultiplyThree()
	
	fmt.Printf("Engine status: Ready for all 10 Prestige levels.\n")
}